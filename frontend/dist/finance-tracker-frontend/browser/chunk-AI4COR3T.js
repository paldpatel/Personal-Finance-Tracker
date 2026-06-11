import {
  TransactionService
} from "./chunk-CON22DSB.js";
import {
  CategoryService
} from "./chunk-E3ZF7QZA.js";
import "./chunk-57ZR6UH5.js";
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
  DatePipe,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IIPEQRGB.js";

// src/app/features/transactions/transactions.component.ts
function TransactionsComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "span", 18);
    \u0275\u0275text(2, " Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function TransactionsComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "p");
    \u0275\u0275text(2, "No transactions yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 4);
    \u0275\u0275listener("click", function TransactionsComponent_div_23_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNew());
    });
    \u0275\u0275text(4, "Add your first transaction");
    \u0275\u0275elementEnd()();
  }
}
function TransactionsComponent_table_24_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 24);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "span", 25);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 26);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 27)(15, "button", 28);
    \u0275\u0275listener("click", function TransactionsComponent_table_24_tr_15_Template_button_click_15_listener() {
      const txn_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(txn_r4));
    });
    \u0275\u0275text(16, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 29);
    \u0275\u0275listener("click", function TransactionsComponent_table_24_tr_15_Template_button_click_17_listener() {
      const txn_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.delete(txn_r4.id));
    });
    \u0275\u0275text(18, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const txn_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 18, txn_r4.txn_date, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(txn_r4.description || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", (txn_r4.category_color || "#94a3b8") + "22")("color", txn_r4.category_color || "#94a3b8");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", txn_r4.category_name || "Uncategorized", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("income", txn_r4.type === "income")("expense", txn_r4.type === "expense");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(txn_r4.type);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-green", txn_r4.type === "income")("text-red", txn_r4.type === "expense");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", txn_r4.type === "income" ? "+" : "-", "", ctx_r1.fmt(txn_r4.amount), " ");
  }
}
function TransactionsComponent_table_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 20)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 21);
    \u0275\u0275text(12, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, TransactionsComponent_table_24_tr_15_Template, 19, 21, "tr", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.transactions);
  }
}
function TransactionsComponent_div_25_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function TransactionsComponent_div_25_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r6.name);
  }
}
function TransactionsComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function TransactionsComponent_div_25_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm = false);
    });
    \u0275\u0275elementStart(1, "div", 31);
    \u0275\u0275listener("click", function TransactionsComponent_div_25_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 32)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 33);
    \u0275\u0275listener("click", function TransactionsComponent_div_25_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm = false);
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, TransactionsComponent_div_25_div_7_Template, 2, 1, "div", 34);
    \u0275\u0275elementStart(8, "form", 35);
    \u0275\u0275listener("ngSubmit", function TransactionsComponent_div_25_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(9, "div", 36)(10, "div", 37)(11, "label");
    \u0275\u0275text(12, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 38)(14, "option", 8);
    \u0275\u0275text(15, "Income");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 9);
    \u0275\u0275text(17, "Expense");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 37)(19, "label");
    \u0275\u0275text(20, "Amount (\u20B9)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 39);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 36)(23, "div", 37)(24, "label");
    \u0275\u0275text(25, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 40)(27, "option", 41);
    \u0275\u0275text(28, "\u2014 No category \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, TransactionsComponent_div_25_option_29_Template, 2, 2, "option", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 37)(31, "label");
    \u0275\u0275text(32, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 43);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 37)(35, "label");
    \u0275\u0275text(36, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 44);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 45)(39, "button", 46);
    \u0275\u0275listener("click", function TransactionsComponent_div_25_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm = false);
    });
    \u0275\u0275text(40, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 47);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.editingId ? "Edit" : "Add", " Transaction");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(8);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.catsForType());
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.form.invalid || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.editingId ? "Save changes" : "Add transaction");
  }
}
var TransactionsComponent = class _TransactionsComponent {
  txnService;
  catService;
  fb;
  transactions = [];
  categories = [];
  loading = false;
  showForm = false;
  editingId = null;
  form;
  error = "";
  filterType = "";
  filterStart = "";
  filterEnd = "";
  constructor(txnService, catService, fb) {
    this.txnService = txnService;
    this.catService = catService;
    this.fb = fb;
    this.form = this.fb.group({
      type: ["expense", Validators.required],
      amount: ["", [Validators.required, Validators.min(0.01)]],
      category_id: [null],
      description: [""],
      txn_date: [(/* @__PURE__ */ new Date()).toISOString().slice(0, 10), Validators.required]
    });
  }
  ngOnInit() {
    this.catService.getAll().subscribe((c) => this.categories = c);
    this.load();
  }
  load() {
    this.loading = true;
    const filters = {};
    if (this.filterType)
      filters.type = this.filterType;
    if (this.filterStart)
      filters.startDate = this.filterStart;
    if (this.filterEnd)
      filters.endDate = this.filterEnd;
    this.txnService.getAll(filters).subscribe({ next: (t) => {
      this.transactions = t;
      this.loading = false;
    }, error: () => this.loading = false });
  }
  catsForType() {
    return this.categories.filter((c) => c.type === this.form.value.type);
  }
  openNew() {
    this.editingId = null;
    this.form.reset({ type: "expense", txn_date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) });
    this.showForm = true;
    this.error = "";
  }
  openEdit(txn) {
    this.editingId = txn.id;
    this.form.patchValue({ type: txn.type, amount: txn.amount, category_id: txn.category_id, description: txn.description, txn_date: txn.txn_date?.slice(0, 10) });
    this.showForm = true;
    this.error = "";
  }
  save() {
    if (this.form.invalid)
      return;
    this.loading = true;
    this.error = "";
    const v = this.form.value;
    const payload = { type: v.type, amount: Number(v.amount), category_id: v.category_id || null, description: v.description || null, txnDate: v.txn_date, txn_date: v.txn_date };
    const obs = this.editingId ? this.txnService.update(this.editingId, payload) : this.txnService.create(payload);
    obs.subscribe({ next: () => {
      this.showForm = false;
      this.load();
      this.loading = false;
    }, error: (err) => {
      this.error = err.error?.error || "Failed to save.";
      this.loading = false;
    } });
  }
  delete(id) {
    if (!confirm("Delete this transaction?"))
      return;
    this.txnService.delete(id).subscribe(() => this.load());
  }
  fmt(n) {
    return "\u20B9" + Number(n || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 });
  }
  static \u0275fac = function TransactionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TransactionsComponent)(\u0275\u0275directiveInject(TransactionService), \u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionsComponent, selectors: [["app-transactions"]], decls: 26, vars: 8, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "btn-primary", 3, "click"], [1, "filters-bar"], [1, "filter-input", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "income"], ["value", "expense"], ["type", "date", 1, "filter-input", 3, "ngModelChange", "change", "ngModel"], [1, "btn-ghost", 3, "click"], [1, "table-card"], ["class", "loading-inline", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "data-table", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], [1, "loading-inline"], [1, "spinner-sm"], [1, "empty-state"], [1, "data-table"], [2, "text-align", "right"], [4, "ngFor", "ngForOf"], [1, "date-cell"], [1, "cat-tag"], [1, "type-badge"], [2, "text-align", "right", "font-weight", "600"], [1, "actions-cell"], [1, "icon-btn", 3, "click"], [1, "icon-btn", "danger", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], ["class", "alert error", "style", "margin:16px 24px 0", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "field-row"], [1, "field"], ["formControlName", "type"], ["type", "number", "formControlName", "amount", "placeholder", "0.00", "min", "0.01", "step", "0.01"], ["formControlName", "category_id"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "date", "formControlName", "txn_date"], ["type", "text", "formControlName", "description", "placeholder", "Optional note"], [1, "modal-footer"], ["type", "button", 1, "btn-ghost", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "alert", "error", 2, "margin", "16px 24px 0"]], template: function TransactionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Transactions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function TransactionsComponent_Template_button_click_7_listener() {
        return ctx.openNew();
      });
      \u0275\u0275text(8, "+ Add");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5)(10, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function TransactionsComponent_Template_select_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterType, $event) || (ctx.filterType = $event);
        return $event;
      });
      \u0275\u0275listener("change", function TransactionsComponent_Template_select_change_10_listener() {
        return ctx.load();
      });
      \u0275\u0275elementStart(11, "option", 7);
      \u0275\u0275text(12, "All types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "option", 8);
      \u0275\u0275text(14, "Income");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "option", 9);
      \u0275\u0275text(16, "Expense");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(17, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function TransactionsComponent_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterStart, $event) || (ctx.filterStart = $event);
        return $event;
      });
      \u0275\u0275listener("change", function TransactionsComponent_Template_input_change_17_listener() {
        return ctx.load();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(18, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function TransactionsComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterEnd, $event) || (ctx.filterEnd = $event);
        return $event;
      });
      \u0275\u0275listener("change", function TransactionsComponent_Template_input_change_18_listener() {
        return ctx.load();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(19, "button", 11);
      \u0275\u0275listener("click", function TransactionsComponent_Template_button_click_19_listener() {
        ctx.filterType = "";
        ctx.filterStart = "";
        ctx.filterEnd = "";
        return ctx.load();
      });
      \u0275\u0275text(20, "Clear");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 12);
      \u0275\u0275template(22, TransactionsComponent_div_22_Template, 3, 0, "div", 13)(23, TransactionsComponent_div_23_Template, 5, 0, "div", 14)(24, TransactionsComponent_table_24_Template, 16, 1, "table", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(25, TransactionsComponent_div_25_Template, 43, 7, "div", 16);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.transactions.length, " records");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterType);
      \u0275\u0275control();
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterStart);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.filterEnd);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.transactions.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.transactions.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showForm);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransactionsComponent, [{
    type: Component,
    args: [{ selector: "app-transactions", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule], template: `<div class="page">\r
    <div class="page-header">\r
      <div>\r
        <h1 class="page-title">Transactions</h1>\r
        <p class="page-sub">{{ transactions.length }} records</p>\r
      </div>\r
      <button class="btn-primary" (click)="openNew()">+ Add</button>\r
    </div>\r
  \r
    <div class="filters-bar">\r
      <select [(ngModel)]="filterType" (change)="load()" class="filter-input">\r
        <option value="">All types</option>\r
        <option value="income">Income</option>\r
        <option value="expense">Expense</option>\r
      </select>\r
      <input type="date" [(ngModel)]="filterStart" (change)="load()" class="filter-input" />\r
      <input type="date" [(ngModel)]="filterEnd" (change)="load()" class="filter-input" />\r
      <button class="btn-ghost" (click)="filterType=''; filterStart=''; filterEnd=''; load()">Clear</button>\r
    </div>\r
  \r
    <div class="table-card">\r
      <div class="loading-inline" *ngIf="loading"><span class="spinner-sm"></span> Loading\u2026</div>\r
      <div class="empty-state" *ngIf="!loading && transactions.length === 0">\r
        <p>No transactions yet.</p>\r
        <button class="btn-primary" (click)="openNew()">Add your first transaction</button>\r
      </div>\r
      <table class="data-table" *ngIf="!loading && transactions.length > 0">\r
        <thead>\r
          <tr><th>Date</th><th>Description</th><th>Category</th><th>Type</th><th style="text-align:right">Amount</th><th></th></tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let txn of transactions">\r
            <td class="date-cell">{{ txn.txn_date | date:'dd MMM yyyy' }}</td>\r
            <td>{{ txn.description || '\u2014' }}</td>\r
            <td>\r
              <span class="cat-tag" [style.background]="(txn.category_color || '#94a3b8') + '22'" [style.color]="txn.category_color || '#94a3b8'">\r
                {{ txn.category_name || 'Uncategorized' }}\r
              </span>\r
            </td>\r
            <td><span class="type-badge" [class.income]="txn.type==='income'" [class.expense]="txn.type==='expense'">{{ txn.type }}</span></td>\r
            <td style="text-align:right;font-weight:600" [class.text-green]="txn.type==='income'" [class.text-red]="txn.type==='expense'">\r
              {{ txn.type === 'income' ? '+' : '-' }}{{ fmt(txn.amount) }}\r
            </td>\r
            <td class="actions-cell">\r
              <button class="icon-btn" (click)="openEdit(txn)">\u270F\uFE0F</button>\r
              <button class="icon-btn danger" (click)="delete(txn.id)">\u{1F5D1}\uFE0F</button>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
  \r
  <div class="modal-backdrop" *ngIf="showForm" (click)="showForm=false">\r
    <div class="modal" (click)="$event.stopPropagation()">\r
      <div class="modal-header">\r
        <h2>{{ editingId ? 'Edit' : 'Add' }} Transaction</h2>\r
        <button class="modal-close" (click)="showForm=false">\u2715</button>\r
      </div>\r
      <div class="alert error" *ngIf="error" style="margin:16px 24px 0">{{ error }}</div>\r
      <form [formGroup]="form" (ngSubmit)="save()">\r
        <div class="field-row">\r
          <div class="field">\r
            <label>Type</label>\r
            <select formControlName="type"><option value="income">Income</option><option value="expense">Expense</option></select>\r
          </div>\r
          <div class="field">\r
            <label>Amount (\u20B9)</label>\r
            <input type="number" formControlName="amount" placeholder="0.00" min="0.01" step="0.01" />\r
          </div>\r
        </div>\r
        <div class="field-row">\r
          <div class="field">\r
            <label>Category</label>\r
            <select formControlName="category_id">\r
              <option [ngValue]="null">\u2014 No category \u2014</option>\r
              <option *ngFor="let c of catsForType()" [ngValue]="c.id">{{ c.name }}</option>\r
            </select>\r
          </div>\r
          <div class="field">\r
            <label>Date</label>\r
            <input type="date" formControlName="txn_date" />\r
          </div>\r
        </div>\r
        <div class="field">\r
          <label>Description</label>\r
          <input type="text" formControlName="description" placeholder="Optional note" />\r
        </div>\r
        <div class="modal-footer">\r
          <button type="button" class="btn-ghost" (click)="showForm=false">Cancel</button>\r
          <button type="submit" class="btn-primary" [disabled]="form.invalid || loading">{{ editingId ? 'Save changes' : 'Add transaction' }}</button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>` }]
  }], () => [{ type: TransactionService }, { type: CategoryService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionsComponent, { className: "TransactionsComponent", filePath: "src/app/features/transactions/transactions.component.ts", lineNumber: 14 });
})();
export {
  TransactionsComponent
};
//# sourceMappingURL=chunk-AI4COR3T.js.map
