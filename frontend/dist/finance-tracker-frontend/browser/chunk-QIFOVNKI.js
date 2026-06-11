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
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-ZMXBLMOR.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IIPEQRGB.js";

// src/app/features/categories/categories.component.ts
function CategoriesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading\u2026");
    \u0275\u0275elementEnd()();
  }
}
function CategoriesComponent_ng_container_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "p");
    \u0275\u0275text(2, "No income categories yet.");
    \u0275\u0275elementEnd()();
  }
}
function CategoriesComponent_ng_container_10_table_5_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "span", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 19)(8, "button", 20);
    \u0275\u0275listener("click", function CategoriesComponent_ng_container_10_table_5_tr_9_Template_button_click_8_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openEdit(c_r2));
    });
    \u0275\u0275text(9, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 21);
    \u0275\u0275listener("click", function CategoriesComponent_ng_container_10_table_5_tr_9_Template_button_click_10_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.delete(c_r2.id));
    });
    \u0275\u0275text(11, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", c_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r2.color);
  }
}
function CategoriesComponent_ng_container_10_table_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 15)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Color");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "tbody");
    \u0275\u0275template(9, CategoriesComponent_ng_container_10_table_5_tr_9_Template, 12, 4, "tr", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r2.income());
  }
}
function CategoriesComponent_ng_container_10_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "p");
    \u0275\u0275text(2, "No expense categories yet.");
    \u0275\u0275elementEnd()();
  }
}
function CategoriesComponent_ng_container_10_table_10_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "span", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 19)(8, "button", 20);
    \u0275\u0275listener("click", function CategoriesComponent_ng_container_10_table_10_tr_9_Template_button_click_8_listener() {
      const c_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openEdit(c_r5));
    });
    \u0275\u0275text(9, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 21);
    \u0275\u0275listener("click", function CategoriesComponent_ng_container_10_table_10_tr_9_Template_button_click_10_listener() {
      const c_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.delete(c_r5.id));
    });
    \u0275\u0275text(11, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", c_r5.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r5.color);
  }
}
function CategoriesComponent_ng_container_10_table_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 15)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Color");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "tbody");
    \u0275\u0275template(9, CategoriesComponent_ng_container_10_table_10_tr_9_Template, 12, 4, "tr", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r2.expense());
  }
}
function CategoriesComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CategoriesComponent_ng_container_10_div_4_Template, 3, 0, "div", 11)(5, CategoriesComponent_ng_container_10_table_5_Template, 10, 1, "table", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 13)(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, CategoriesComponent_ng_container_10_div_9_Template, 3, 0, "div", 11)(10, CategoriesComponent_ng_container_10_table_10_Template, 10, 1, "table", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Income Categories (", ctx_r2.income().length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.income().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.income().length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Expense Categories (", ctx_r2.expense().length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.expense().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.expense().length > 0);
  }
}
function CategoriesComponent_div_11_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error);
  }
}
function CategoriesComponent_div_11_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function CategoriesComponent_div_11_button_26_Template_button_click_0_listener() {
      const col_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.form.patchValue({ color: col_r8 }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", col_r8)("outline", ctx_r2.form.value.color === col_r8 ? "2px solid #0f172a" : "none");
  }
}
function CategoriesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("click", function CategoriesComponent_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showForm = false);
    });
    \u0275\u0275elementStart(1, "div", 23);
    \u0275\u0275listener("click", function CategoriesComponent_div_11_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 24)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 25);
    \u0275\u0275listener("click", function CategoriesComponent_div_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showForm = false);
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CategoriesComponent_div_11_div_7_Template, 2, 1, "div", 26);
    \u0275\u0275elementStart(8, "form", 27);
    \u0275\u0275listener("ngSubmit", function CategoriesComponent_div_11_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275elementStart(9, "div", 28)(10, "div", 29)(11, "label");
    \u0275\u0275text(12, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 30);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 29)(15, "label");
    \u0275\u0275text(16, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 31)(18, "option", 32);
    \u0275\u0275text(19, "Income");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 33);
    \u0275\u0275text(21, "Expense");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 29)(23, "label");
    \u0275\u0275text(24, "Color");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 34);
    \u0275\u0275template(26, CategoriesComponent_div_11_button_26_Template, 1, 4, "button", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 36)(28, "button", 37);
    \u0275\u0275listener("click", function CategoriesComponent_div_11_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showForm = false);
    });
    \u0275\u0275text(29, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 38);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.editingId ? "Edit" : "New", " Category");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.error);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(5);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r2.colors);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.form.invalid || ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.editingId ? "Save changes" : "Create category");
  }
}
var COLORS = ["#6366f1", "#22c55e", "#f43f5e", "#f59e0b", "#3b82f6", "#8b5cf6", "#06b6d4", "#ec4899"];
var CategoriesComponent = class _CategoriesComponent {
  catService;
  fb;
  categories = [];
  loading = false;
  showForm = false;
  editingId = null;
  form;
  error = "";
  colors = COLORS;
  constructor(catService, fb) {
    this.catService = catService;
    this.fb = fb;
    this.form = this.fb.group({
      name: ["", Validators.required],
      type: ["expense", Validators.required],
      color: [COLORS[0], Validators.required],
      icon: ["tag"]
    });
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.catService.getAll().subscribe({ next: (c) => {
      this.categories = c;
      this.loading = false;
    }, error: () => this.loading = false });
  }
  income() {
    return this.categories.filter((c) => c.type === "income");
  }
  expense() {
    return this.categories.filter((c) => c.type === "expense");
  }
  openNew() {
    this.editingId = null;
    this.form.reset({ type: "expense", color: COLORS[0], icon: "tag" });
    this.showForm = true;
    this.error = "";
  }
  openEdit(c) {
    this.editingId = c.id;
    this.form.patchValue({ name: c.name, type: c.type, color: c.color, icon: c.icon });
    this.showForm = true;
    this.error = "";
  }
  save() {
    if (this.form.invalid)
      return;
    this.loading = true;
    this.error = "";
    const obs = this.editingId ? this.catService.update(this.editingId, this.form.value) : this.catService.create(this.form.value);
    obs.subscribe({ next: () => {
      this.showForm = false;
      this.load();
    }, error: (err) => {
      this.error = err.error?.error || "Failed to save.";
      this.loading = false;
    } });
  }
  delete(id) {
    if (!confirm("Delete this category?"))
      return;
    this.catService.delete(id).subscribe({ next: () => this.load(), error: (err) => alert(err.error?.error || "Cannot delete \u2014 category may be in use.") });
  }
  static \u0275fac = function CategoriesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoriesComponent)(\u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoriesComponent, selectors: [["app-categories"]], decls: 12, vars: 3, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "btn-primary", 3, "click"], ["class", "loading-state", 4, "ngIf"], [4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], [1, "loading-state"], [1, "spinner-lg"], [1, "table-card", 2, "margin-bottom", "16px"], ["class", "empty-state", "style", "padding:24px", 4, "ngIf"], ["class", "data-table", 4, "ngIf"], [1, "table-card"], [1, "empty-state", 2, "padding", "24px"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "cat-dot"], [2, "font-family", "monospace", "color", "#64748b", "font-size", "12px"], [1, "actions-cell"], [1, "icon-btn", 3, "click"], [1, "icon-btn", "danger", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], ["class", "alert error", "style", "margin:16px 24px 0", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "field-row"], [1, "field"], ["type", "text", "formControlName", "name", "placeholder", "e.g. Groceries"], ["formControlName", "type"], ["value", "income"], ["value", "expense"], [2, "display", "flex", "gap", "8px", "flex-wrap", "wrap", "margin-top", "4px"], ["type", "button", "style", "width:28px;height:28px;border-radius:50%;border:2px solid white;cursor:pointer;outline-offset:2px", 3, "background", "outline", "click", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn-ghost", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "alert", "error", 2, "margin", "16px 24px 0"], ["type", "button", 2, "width", "28px", "height", "28px", "border-radius", "50%", "border", "2px solid white", "cursor", "pointer", "outline-offset", "2px", 3, "click"]], template: function CategoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Organise your income and expenses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function CategoriesComponent_Template_button_click_7_listener() {
        return ctx.openNew();
      });
      \u0275\u0275text(8, "+ Add Category");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, CategoriesComponent_div_9_Template, 4, 0, "div", 5)(10, CategoriesComponent_ng_container_10_Template, 11, 6, "ng-container", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, CategoriesComponent_div_11_Template, 32, 6, "div", 7);
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showForm);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoriesComponent, [{
    type: Component,
    args: [{ selector: "app-categories", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule], template: `<div class="page">\r
    <div class="page-header">\r
      <div>\r
        <h1 class="page-title">Categories</h1>\r
        <p class="page-sub">Organise your income and expenses</p>\r
      </div>\r
      <button class="btn-primary" (click)="openNew()">+ Add Category</button>\r
    </div>\r
  \r
    <div class="loading-state" *ngIf="loading"><div class="spinner-lg"></div><p>Loading\u2026</p></div>\r
  \r
    <ng-container *ngIf="!loading">\r
      <div class="table-card" style="margin-bottom:16px">\r
        <h3>Income Categories ({{ income().length }})</h3>\r
        <div class="empty-state" *ngIf="income().length === 0" style="padding:24px">\r
          <p>No income categories yet.</p>\r
        </div>\r
        <table class="data-table" *ngIf="income().length > 0">\r
          <thead><tr><th>Name</th><th>Color</th><th></th></tr></thead>\r
          <tbody>\r
            <tr *ngFor="let c of income()">\r
              <td><span class="cat-dot" [style.background]="c.color"></span>{{ c.name }}</td>\r
              <td><span style="font-family:monospace;color:#64748b;font-size:12px">{{ c.color }}</span></td>\r
              <td class="actions-cell">\r
                <button class="icon-btn" (click)="openEdit(c)">\u270F\uFE0F</button>\r
                <button class="icon-btn danger" (click)="delete(c.id)">\u{1F5D1}\uFE0F</button>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
  \r
      <div class="table-card">\r
        <h3>Expense Categories ({{ expense().length }})</h3>\r
        <div class="empty-state" *ngIf="expense().length === 0" style="padding:24px">\r
          <p>No expense categories yet.</p>\r
        </div>\r
        <table class="data-table" *ngIf="expense().length > 0">\r
          <thead><tr><th>Name</th><th>Color</th><th></th></tr></thead>\r
          <tbody>\r
            <tr *ngFor="let c of expense()">\r
              <td><span class="cat-dot" [style.background]="c.color"></span>{{ c.name }}</td>\r
              <td><span style="font-family:monospace;color:#64748b;font-size:12px">{{ c.color }}</span></td>\r
              <td class="actions-cell">\r
                <button class="icon-btn" (click)="openEdit(c)">\u270F\uFE0F</button>\r
                <button class="icon-btn danger" (click)="delete(c.id)">\u{1F5D1}\uFE0F</button>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </ng-container>\r
  </div>\r
  \r
  <div class="modal-backdrop" *ngIf="showForm" (click)="showForm=false">\r
    <div class="modal" (click)="$event.stopPropagation()">\r
      <div class="modal-header">\r
        <h2>{{ editingId ? 'Edit' : 'New' }} Category</h2>\r
        <button class="modal-close" (click)="showForm=false">\u2715</button>\r
      </div>\r
      <div class="alert error" *ngIf="error" style="margin:16px 24px 0">{{ error }}</div>\r
      <form [formGroup]="form" (ngSubmit)="save()">\r
        <div class="field-row">\r
          <div class="field">\r
            <label>Name</label>\r
            <input type="text" formControlName="name" placeholder="e.g. Groceries" />\r
          </div>\r
          <div class="field">\r
            <label>Type</label>\r
            <select formControlName="type"><option value="income">Income</option><option value="expense">Expense</option></select>\r
          </div>\r
        </div>\r
        <div class="field">\r
          <label>Color</label>\r
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:4px">\r
            <button type="button" *ngFor="let col of colors"\r
              (click)="form.patchValue({color: col})"\r
              [style.background]="col"\r
              [style.outline]="form.value.color === col ? '2px solid #0f172a' : 'none'"\r
              style="width:28px;height:28px;border-radius:50%;border:2px solid white;cursor:pointer;outline-offset:2px">\r
            </button>\r
          </div>\r
        </div>\r
        <div class="modal-footer">\r
          <button type="button" class="btn-ghost" (click)="showForm=false">Cancel</button>\r
          <button type="submit" class="btn-primary" [disabled]="form.invalid || loading">{{ editingId ? 'Save changes' : 'Create category' }}</button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>` }]
  }], () => [{ type: CategoryService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoriesComponent, { className: "CategoriesComponent", filePath: "src/app/features/categories/categories.component.ts", lineNumber: 15 });
})();
export {
  CategoriesComponent
};
//# sourceMappingURL=chunk-QIFOVNKI.js.map
