import {
  Injectable,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-IIPEQRGB.js";

// src/app/core/services/indexed-db.service.ts
var DB_NAME = "finance_tracker";
var DB_VERSION = 1;
var IndexedDbService = class _IndexedDbService {
  db = null;
  async open() {
    if (this.db)
      return this.db;
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains("pending_transactions")) {
          const store = db.createObjectStore("pending_transactions", { keyPath: "client_uuid" });
          store.createIndex("synced", "synced", { unique: false });
        }
        if (!db.objectStoreNames.contains("transactions")) {
          const store = db.createObjectStore("transactions", { keyPath: "id" });
          store.createIndex("txn_date", "txn_date", { unique: false });
        }
        if (!db.objectStoreNames.contains("categories")) {
          db.createObjectStore("categories", { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains("budgets")) {
          db.createObjectStore("budgets", { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains("meta")) {
          db.createObjectStore("meta", { keyPath: "key" });
        }
      };
      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve(this.db);
      };
      request.onerror = () => reject(request.error);
    });
  }
  async tx(storeName, mode) {
    const db = await this.open();
    return db.transaction(storeName, mode).objectStore(storeName);
  }
  wrap(request) {
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  // --- Pending (offline) transactions ---
  async savePendingTransaction(txn) {
    const store = await this.tx("pending_transactions", "readwrite");
    await this.wrap(store.put(__spreadProps(__spreadValues({}, txn), { synced: false })));
  }
  async getUnsyncedTransactions() {
    const store = await this.tx("pending_transactions", "readonly");
    const index = store.index("synced");
    return this.wrap(index.getAll(IDBKeyRange.only(false)));
  }
  async markTransactionSynced(clientUuid) {
    const store = await this.tx("pending_transactions", "readwrite");
    const txn = await this.wrap(store.get(clientUuid));
    if (txn)
      await this.wrap(store.put(__spreadProps(__spreadValues({}, txn), { synced: true })));
  }
  // --- Cached transactions ---
  async cacheTransactions(transactions) {
    const store = await this.tx("transactions", "readwrite");
    for (const txn of transactions)
      store.put(txn);
  }
  async getCachedTransactions() {
    const store = await this.tx("transactions", "readonly");
    return this.wrap(store.getAll());
  }
  // --- Categories ---
  async cacheCategories(categories) {
    const store = await this.tx("categories", "readwrite");
    await this.wrap(store.clear());
    for (const cat of categories)
      store.put(cat);
  }
  async getCachedCategories() {
    const store = await this.tx("categories", "readonly");
    return this.wrap(store.getAll());
  }
  // --- Budgets ---
  async cacheBudgets(budgets) {
    const store = await this.tx("budgets", "readwrite");
    await this.wrap(store.clear());
    for (const b of budgets)
      store.put(b);
  }
  async getCachedBudgets() {
    const store = await this.tx("budgets", "readonly");
    return this.wrap(store.getAll());
  }
  // --- Meta ---
  async setMeta(key, value) {
    const store = await this.tx("meta", "readwrite");
    await this.wrap(store.put({ key, value }));
  }
  async getMeta(key) {
    const store = await this.tx("meta", "readonly");
    const result = await this.wrap(store.get(key));
    return result?.value ?? null;
  }
  static \u0275fac = function IndexedDbService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IndexedDbService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IndexedDbService, factory: _IndexedDbService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IndexedDbService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  IndexedDbService
};
//# sourceMappingURL=chunk-57ZR6UH5.js.map
