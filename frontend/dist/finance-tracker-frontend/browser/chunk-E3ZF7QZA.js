import {
  IndexedDbService
} from "./chunk-57ZR6UH5.js";
import {
  HttpClient,
  Injectable,
  catchError,
  from,
  of,
  setClassMetadata,
  switchMap,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IIPEQRGB.js";

// src/app/core/services/category.service.ts
var API = "http://localhost:3000/api";
var CategoryService = class _CategoryService {
  http;
  idb;
  constructor(http, idb) {
    this.http = http;
    this.idb = idb;
  }
  getAll() {
    return this.http.get(`${API}/categories`).pipe(tap((res) => this.idb.cacheCategories(res.categories)), switchMap((res) => of(res.categories)), catchError(() => from(this.idb.getCachedCategories())));
  }
  create(data) {
    return this.http.post(`${API}/categories`, data).pipe(switchMap((res) => of(res.category)));
  }
  update(id, data) {
    return this.http.put(`${API}/categories/${id}`, data).pipe(switchMap((res) => of(res.category)));
  }
  delete(id) {
    return this.http.delete(`${API}/categories/${id}`);
  }
  static \u0275fac = function CategoryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(IndexedDbService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CategoryService, factory: _CategoryService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: IndexedDbService }], null);
})();

export {
  CategoryService
};
//# sourceMappingURL=chunk-E3ZF7QZA.js.map
