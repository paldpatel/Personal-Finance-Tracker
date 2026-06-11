import {
  AuthService,
  Router,
  RouterLink
} from "./chunk-GGUZTU6B.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-ZMXBLMOR.js";
import {
  CommonModule,
  Component,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-IIPEQRGB.js";

// src/app/features/auth/register/register.component.ts
function RegisterComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function RegisterComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Enter a valid email");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "At least 8 characters");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Create account");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 21);
  }
}
var RegisterComponent = class _RegisterComponent {
  fb;
  auth;
  router;
  form;
  error = "";
  loading = false;
  constructor(fb, auth, router) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.form = this.fb.group({
      firstName: [""],
      lastName: [""],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }
  submit() {
    if (this.form.invalid)
      return;
    this.loading = true;
    this.error = "";
    const { email, password, firstName, lastName } = this.form.value;
    this.auth.register(email, password, firstName, lastName).subscribe({
      next: () => this.router.navigate(["/dashboard"]),
      error: (err) => {
        this.error = err.error?.error || "Registration failed.";
        this.loading = false;
      }
    });
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 39, vars: 7, consts: [[1, "auth-page"], [1, "auth-card"], [1, "auth-logo"], [1, "logo-icon"], [1, "subtitle"], ["class", "alert error", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "field-row"], [1, "field"], ["type", "text", "formControlName", "firstName", "placeholder", "Rahul"], ["type", "text", "formControlName", "lastName", "placeholder", "Sharma"], ["type", "email", "formControlName", "email", "placeholder", "you@example.com"], ["class", "field-error", 4, "ngIf"], ["type", "password", "formControlName", "password", "placeholder", "At least 8 characters"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [4, "ngIf"], ["class", "spinner", 4, "ngIf"], [1, "auth-link"], ["routerLink", "/auth/login"], [1, "alert", "error"], [1, "field-error"], [1, "spinner"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "\u20B9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "FinanceTrack");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "h2");
      \u0275\u0275text(8, "Create account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 4);
      \u0275\u0275text(10, "Start tracking your finances");
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, RegisterComponent_div_11_Template, 2, 1, "div", 5);
      \u0275\u0275elementStart(12, "form", 6);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_12_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(13, "div", 7)(14, "div", 8)(15, "label");
      \u0275\u0275text(16, "First name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 9);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 8)(19, "label");
      \u0275\u0275text(20, "Last name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "input", 10);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 8)(23, "label");
      \u0275\u0275text(24, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "input", 11);
      \u0275\u0275controlCreate();
      \u0275\u0275template(26, RegisterComponent_span_26_Template, 2, 0, "span", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 8)(28, "label");
      \u0275\u0275text(29, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "input", 13);
      \u0275\u0275controlCreate();
      \u0275\u0275template(31, RegisterComponent_span_31_Template, 2, 0, "span", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 14);
      \u0275\u0275template(33, RegisterComponent_span_33_Template, 2, 0, "span", 15)(34, RegisterComponent_span_34_Template, 1, 0, "span", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "p", 17);
      \u0275\u0275text(36, "Already have an account? ");
      \u0275\u0275elementStart(37, "a", 18);
      \u0275\u0275text(38, "Sign in");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.form.get("email")?.touched && ctx.form.get("email")?.invalid);
      \u0275\u0275advance(4);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.form.get("password")?.touched && ctx.form.get("password")?.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading || ctx.form.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule, NgIf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [ReactiveFormsModule, CommonModule, RouterLink], template: `<div class="auth-page">\r
    <div class="auth-card">\r
      <div class="auth-logo">\r
        <span class="logo-icon">\u20B9</span>\r
        <h1>FinanceTrack</h1>\r
      </div>\r
      <h2>Create account</h2>\r
      <p class="subtitle">Start tracking your finances</p>\r
  \r
      <div class="alert error" *ngIf="error">{{ error }}</div>\r
  \r
      <form [formGroup]="form" (ngSubmit)="submit()">\r
        <div class="field-row">\r
          <div class="field">\r
            <label>First name</label>\r
            <input type="text" formControlName="firstName" placeholder="Rahul" />\r
          </div>\r
          <div class="field">\r
            <label>Last name</label>\r
            <input type="text" formControlName="lastName" placeholder="Sharma" />\r
          </div>\r
        </div>\r
        <div class="field">\r
          <label>Email</label>\r
          <input type="email" formControlName="email" placeholder="you@example.com" />\r
          <span class="field-error" *ngIf="form.get('email')?.touched && form.get('email')?.invalid">Enter a valid email</span>\r
        </div>\r
        <div class="field">\r
          <label>Password</label>\r
          <input type="password" formControlName="password" placeholder="At least 8 characters" />\r
          <span class="field-error" *ngIf="form.get('password')?.touched && form.get('password')?.invalid">At least 8 characters</span>\r
        </div>\r
        <button type="submit" class="btn-primary" [disabled]="loading || form.invalid">\r
          <span *ngIf="!loading">Create account</span>\r
          <span *ngIf="loading" class="spinner"></span>\r
        </button>\r
      </form>\r
  \r
      <p class="auth-link">Already have an account? <a routerLink="/auth/login">Sign in</a></p>\r
    </div>\r
  </div>` }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/features/auth/register/register.component.ts", lineNumber: 13 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-F7WMKA2O.js.map
