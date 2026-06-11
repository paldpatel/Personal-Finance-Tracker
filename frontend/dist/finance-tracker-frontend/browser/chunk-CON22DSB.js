import {
  IndexedDbService
} from "./chunk-57ZR6UH5.js";
import {
  HttpClient,
  HttpParams,
  Injectable,
  __spreadProps,
  __spreadValues,
  catchError,
  from,
  of,
  setClassMetadata,
  switchMap,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IIPEQRGB.js";

// node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

// node_modules/uuid/dist/esm-browser/rng.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    if (typeof crypto === "undefined" || !crypto.getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    getRandomValues = crypto.getRandomValues.bind(crypto);
  }
  return getRandomValues(rnds8);
}

// node_modules/uuid/dist/esm-browser/native.js
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native_default = { randomUUID };

// node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  const rnds = options.random ?? options.rng?.() ?? rng();
  if (rnds.length < 16) {
    throw new Error("Random bytes length must be >= 16");
  }
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    if (offset < 0 || offset + 16 > buf.length) {
      throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
    }
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
var v4_default = v4;

// src/app/core/services/transaction.service.ts
var API = "http://localhost:3000/api";
var TransactionService = class _TransactionService {
  http;
  idb;
  isOnline = navigator.onLine;
  constructor(http, idb) {
    this.http = http;
    this.idb = idb;
    window.addEventListener("online", () => {
      this.isOnline = true;
      this.syncPendingTransactions();
    });
    window.addEventListener("offline", () => {
      this.isOnline = false;
    });
  }
  getAll(filters = {}) {
    if (!this.isOnline)
      return from(this.idb.getCachedTransactions());
    let params = new HttpParams();
    if (filters.startDate)
      params = params.set("startDate", filters.startDate);
    if (filters.endDate)
      params = params.set("endDate", filters.endDate);
    if (filters.type)
      params = params.set("type", filters.type);
    if (filters.categoryId)
      params = params.set("categoryId", String(filters.categoryId));
    if (filters.limit)
      params = params.set("limit", String(filters.limit));
    if (filters.offset)
      params = params.set("offset", String(filters.offset));
    return this.http.get(`${API}/transactions`, { params }).pipe(tap((res) => this.idb.cacheTransactions(res.transactions)), switchMap((res) => of(res.transactions)), catchError(() => from(this.idb.getCachedTransactions())));
  }
  create(data) {
    const clientUuid = data.client_uuid || v4_default();
    const txnWithUuid = __spreadProps(__spreadValues({}, data), { client_uuid: clientUuid });
    if (!this.isOnline) {
      const offlineTxn = __spreadProps(__spreadValues({}, txnWithUuid), { id: Date.now(), user_id: 0, synced: false });
      return from(this.idb.savePendingTransaction(offlineTxn).then(() => offlineTxn));
    }
    return this.http.post(`${API}/transactions`, txnWithUuid).pipe(switchMap((res) => of(res.transaction)));
  }
  update(id, data) {
    return this.http.put(`${API}/transactions/${id}`, data).pipe(switchMap((res) => of(res.transaction)));
  }
  delete(id) {
    return this.http.delete(`${API}/transactions/${id}`);
  }
  getDashboard(monthYear, months = 6) {
    let params = new HttpParams().set("months", String(months));
    if (monthYear)
      params = params.set("month", monthYear);
    return this.http.get(`${API}/transactions/dashboard`, { params });
  }
  async syncPendingTransactions() {
    const pending = await this.idb.getUnsyncedTransactions();
    if (!pending.length)
      return;
    const mapped = pending.map((t) => ({
      categoryId: t.category_id,
      amount: t.amount,
      type: t.type,
      description: t.description,
      txnDate: t.txn_date,
      clientUuid: t.client_uuid
    }));
    this.http.post(`${API}/transactions/sync`, { transactions: mapped }).subscribe(async (res) => {
      for (const t of res.transactions) {
        if (t.client_uuid)
          await this.idb.markTransactionSynced(t.client_uuid);
      }
    });
  }
  static \u0275fac = function TransactionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TransactionService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(IndexedDbService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TransactionService, factory: _TransactionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransactionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: IndexedDbService }], null);
})();

export {
  TransactionService
};
//# sourceMappingURL=chunk-CON22DSB.js.map
