import {
  TransactionService
} from "./chunk-CON22DSB.js";
import {
  CategoryService
} from "./chunk-E3ZF7QZA.js";
import {
  IndexedDbService
} from "./chunk-57ZR6UH5.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-ZMXBLMOR.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  HttpClient,
  HttpParams,
  Injectable,
  NgForOf,
  NgIf,
  catchError,
  from,
  of,
  setClassMetadata,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IIPEQRGB.js";

// src/app/core/services/budget.service.ts
var API = "http://localhost:3000/api";
var BudgetService = class _BudgetService {
  http;
  idb;
  constructor(http, idb) {
    this.http = http;
    this.idb = idb;
  }
  getAll(month) {
    let params = new HttpParams();
    if (month)
      params = params.set("month", month);
    return this.http.get(`${API}/budgets`, { params }).pipe(tap((res) => this.idb.cacheBudgets(res.budgets)), switchMap((res) => of(res.budgets)), catchError(() => from(this.idb.getCachedBudgets())));
  }
  upsert(categoryId, monthlyLimit, monthYear) {
    return this.http.post(`${API}/budgets`, { categoryId, monthlyLimit, monthYear }).pipe(switchMap((res) => of(res.budget)));
  }
  delete(id) {
    return this.http.delete(`${API}/budgets/${id}`);
  }
  static \u0275fac = function BudgetService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BudgetService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(IndexedDbService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BudgetService, factory: _BudgetService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: IndexedDbService }], null);
})();

// src/app/features/budgets/budgets.component.ts
function BudgetsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading\u2026");
    \u0275\u0275elementEnd()();
  }
}
function BudgetsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "p");
    \u0275\u0275text(2, "No budgets set for this month.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 6);
    \u0275\u0275listener("click", function BudgetsComponent_div_12_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm = true);
    });
    \u0275\u0275text(4, "Set your first budget");
    \u0275\u0275elementEnd()();
  }
}
function BudgetsComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "span", 18);
    \u0275\u0275element(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function BudgetsComponent_div_13_div_1_Template_button_click_5_listener() {
      const b_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.delete(b_r4.id));
    });
    \u0275\u0275text(6, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 21);
    \u0275\u0275element(8, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 23)(10, "span", 24);
    \u0275\u0275text(11);
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 25);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const b_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", b_r4.category_color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", b_r4.category_name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.getPctClass(b_r4));
    \u0275\u0275styleProp("width", ctx_r1.getPct(b_r4), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.fmt(ctx_r1.getSpent(b_r4)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", ctx_r1.fmt(b_r4.monthly_limit));
    \u0275\u0275advance();
    \u0275\u0275classProp("danger", ctx_r1.getPct(b_r4) >= 100);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(16, 12, ctx_r1.getPct(b_r4), "1.0-0"), "%");
  }
}
function BudgetsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, BudgetsComponent_div_13_div_1_Template, 17, 15, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.budgets);
  }
}
function BudgetsComponent_div_14_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function BudgetsComponent_div_14_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275property("value", c_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r6.name);
  }
}
function BudgetsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("click", function BudgetsComponent_div_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm = false);
    });
    \u0275\u0275elementStart(1, "div", 27);
    \u0275\u0275listener("click", function BudgetsComponent_div_14_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 28)(3, "h2");
    \u0275\u0275text(4, "Set Budget");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 29);
    \u0275\u0275listener("click", function BudgetsComponent_div_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm = false);
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, BudgetsComponent_div_14_div_7_Template, 2, 1, "div", 30);
    \u0275\u0275elementStart(8, "form", 31);
    \u0275\u0275listener("ngSubmit", function BudgetsComponent_div_14_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(9, "div", 32)(10, "label");
    \u0275\u0275text(11, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 33)(13, "option", 34);
    \u0275\u0275text(14, "\u2014 Select category \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, BudgetsComponent_div_14_option_15_Template, 2, 2, "option", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 36)(17, "div", 32)(18, "label");
    \u0275\u0275text(19, "Monthly Limit (\u20B9)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 37);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 32)(22, "label");
    \u0275\u0275text(23, "Month");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 38);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 39)(26, "button", 40);
    \u0275\u0275listener("click", function BudgetsComponent_div_14_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm = false);
    });
    \u0275\u0275text(27, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 41);
    \u0275\u0275text(29, "Save budget");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.expenseCategories());
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.form.invalid || ctx_r1.loading);
  }
}
var BudgetsComponent = class _BudgetsComponent {
  budgetService;
  catService;
  txnService;
  fb;
  budgets = [];
  categories = [];
  spending = {};
  loading = false;
  showForm = false;
  form;
  error = "";
  selectedMonth = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7);
  constructor(budgetService, catService, txnService, fb) {
    this.budgetService = budgetService;
    this.catService = catService;
    this.txnService = txnService;
    this.fb = fb;
    this.form = this.fb.group({
      category_id: ["", Validators.required],
      monthly_limit: ["", [Validators.required, Validators.min(1)]],
      month_year: [this.selectedMonth, Validators.required]
    });
  }
  ngOnInit() {
    this.catService.getAll().subscribe((c) => this.categories = c);
    this.load();
  }
  load() {
    this.loading = true;
    this.budgetService.getAll(this.selectedMonth).subscribe({ next: (b) => {
      this.budgets = b;
      this.loading = false;
      this.loadSpending();
    }, error: () => this.loading = false });
  }
  loadSpending() {
    this.txnService.getDashboard(this.selectedMonth).subscribe((data) => {
      this.spending = {};
      data.spendingByCategory.forEach((c) => {
        this.spending[c.category_id] = Number(c.total);
      });
    });
  }
  getSpent(budget) {
    return this.spending[budget.category_id] || 0;
  }
  getPct(budget) {
    return Math.min(this.getSpent(budget) / budget.monthly_limit * 100, 100);
  }
  getPctClass(budget) {
    const p = this.getPct(budget);
    return p >= 100 ? "danger" : p >= 80 ? "warning" : "";
  }
  expenseCategories() {
    return this.categories.filter((c) => c.type === "expense");
  }
  save() {
    if (this.form.invalid)
      return;
    this.loading = true;
    this.error = "";
    const v = this.form.value;
    this.budgetService.upsert(Number(v.category_id), Number(v.monthly_limit), v.month_year).subscribe({
      next: () => {
        this.showForm = false;
        this.load();
      },
      error: (err) => {
        this.error = err.error?.error || "Failed to save.";
        this.loading = false;
      }
    });
  }
  delete(id) {
    if (!confirm("Delete this budget?"))
      return;
    this.budgetService.delete(id).subscribe(() => this.load());
  }
  fmt(n) {
    return "\u20B9" + Number(n || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 });
  }
  static \u0275fac = function BudgetsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BudgetsComponent)(\u0275\u0275directiveInject(BudgetService), \u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(TransactionService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BudgetsComponent, selectors: [["app-budgets"]], decls: 15, vars: 5, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [2, "display", "flex", "gap", "10px", "align-items", "center"], ["type", "month", 1, "month-input", 3, "ngModelChange", "change", "ngModel"], [1, "btn-primary", 3, "click"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "budget-list", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], [1, "loading-state"], [1, "spinner-lg"], [1, "empty-state"], [1, "budget-list"], ["class", "budget-item", 4, "ngFor", "ngForOf"], [1, "budget-item"], [1, "budget-item-header"], [1, "budget-name"], [1, "cat-dot"], [1, "icon-btn", "danger", 3, "click"], [1, "progress-bar"], [1, "progress-fill"], [1, "budget-footer"], [1, "budget-amounts"], [1, "budget-pct"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], ["class", "alert error", "style", "margin:16px 24px 0", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "field"], ["formControlName", "category_id"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "field-row"], ["type", "number", "formControlName", "monthly_limit", "placeholder", "5000", "min", "1"], ["type", "month", "formControlName", "month_year"], [1, "modal-footer"], ["type", "button", 1, "btn-ghost", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "alert", "error", 2, "margin", "16px 24px 0"], [3, "value"]], template: function BudgetsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Budgets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Monthly spending limits");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function BudgetsComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedMonth, $event) || (ctx.selectedMonth = $event);
        return $event;
      });
      \u0275\u0275listener("change", function BudgetsComponent_Template_input_change_8_listener() {
        return ctx.load();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(9, "button", 6);
      \u0275\u0275listener("click", function BudgetsComponent_Template_button_click_9_listener() {
        ctx.showForm = true;
        return ctx.error = "";
      });
      \u0275\u0275text(10, "+ Set Budget");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(11, BudgetsComponent_div_11_Template, 4, 0, "div", 7)(12, BudgetsComponent_div_12_Template, 5, 0, "div", 8)(13, BudgetsComponent_div_13_Template, 2, 1, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, BudgetsComponent_div_14_Template, 30, 4, "div", 10);
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedMonth);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.budgets.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.budgets.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showForm);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetsComponent, [{
    type: Component,
    args: [{ selector: "app-budgets", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule], template: `<div class="page">\r
    <div class="page-header">\r
      <div>\r
        <h1 class="page-title">Budgets</h1>\r
        <p class="page-sub">Monthly spending limits</p>\r
      </div>\r
      <div style="display:flex;gap:10px;align-items:center">\r
        <input type="month" [(ngModel)]="selectedMonth" (change)="load()" class="month-input" />\r
        <button class="btn-primary" (click)="showForm=true; error=''">+ Set Budget</button>\r
      </div>\r
    </div>\r
  \r
    <div class="loading-state" *ngIf="loading"><div class="spinner-lg"></div><p>Loading\u2026</p></div>\r
  \r
    <div class="empty-state" *ngIf="!loading && budgets.length === 0">\r
      <p>No budgets set for this month.</p>\r
      <button class="btn-primary" (click)="showForm=true">Set your first budget</button>\r
    </div>\r
  \r
    <div class="budget-list" *ngIf="!loading && budgets.length > 0">\r
      <div class="budget-item" *ngFor="let b of budgets">\r
        <div class="budget-item-header">\r
          <span class="budget-name">\r
            <span class="cat-dot" [style.background]="b.category_color"></span>\r
            {{ b.category_name }}\r
          </span>\r
          <button class="icon-btn danger" (click)="delete(b.id)">\u{1F5D1}\uFE0F</button>\r
        </div>\r
        <div class="progress-bar">\r
          <div class="progress-fill" [class]="getPctClass(b)" [style.width.%]="getPct(b)"></div>\r
        </div>\r
        <div class="budget-footer">\r
          <span class="budget-amounts">{{ fmt(getSpent(b)) }} <span>/ {{ fmt(b.monthly_limit) }}</span></span>\r
          <span class="budget-pct" [class.danger]="getPct(b) >= 100">{{ getPct(b) | number:'1.0-0' }}%</span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  \r
  <div class="modal-backdrop" *ngIf="showForm" (click)="showForm=false">\r
    <div class="modal" (click)="$event.stopPropagation()">\r
      <div class="modal-header">\r
        <h2>Set Budget</h2>\r
        <button class="modal-close" (click)="showForm=false">\u2715</button>\r
      </div>\r
      <div class="alert error" *ngIf="error" style="margin:16px 24px 0">{{ error }}</div>\r
      <form [formGroup]="form" (ngSubmit)="save()">\r
        <div class="field">\r
          <label>Category</label>\r
          <select formControlName="category_id">\r
            <option value="">\u2014 Select category \u2014</option>\r
            <option *ngFor="let c of expenseCategories()" [value]="c.id">{{ c.name }}</option>\r
          </select>\r
        </div>\r
        <div class="field-row">\r
          <div class="field">\r
            <label>Monthly Limit (\u20B9)</label>\r
            <input type="number" formControlName="monthly_limit" placeholder="5000" min="1" />\r
          </div>\r
          <div class="field">\r
            <label>Month</label>\r
            <input type="month" formControlName="month_year" />\r
          </div>\r
        </div>\r
        <div class="modal-footer">\r
          <button type="button" class="btn-ghost" (click)="showForm=false">Cancel</button>\r
          <button type="submit" class="btn-primary" [disabled]="form.invalid || loading">Save budget</button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>` }]
  }], () => [{ type: BudgetService }, { type: CategoryService }, { type: TransactionService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BudgetsComponent, { className: "BudgetsComponent", filePath: "src/app/features/budgets/budgets.component.ts", lineNumber: 15 });
})();
export {
  BudgetsComponent
};
//# sourceMappingURL=chunk-AIZXBEG2.js.map
