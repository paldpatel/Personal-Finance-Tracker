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

// src/app/features/auth/login/login.component.ts
function LoginComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function LoginComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "Enter a valid email");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "At least 8 characters");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign in");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 18);
  }
}
var LoginComponent = class _LoginComponent {
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
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }
  submit() {
    if (this.form.invalid)
      return;
    this.loading = true;
    this.error = "";
    const { email, password } = this.form.value;
    this.auth.login(email, password).subscribe({
      next: () => this.router.navigate(["/dashboard"]),
      error: (err) => {
        this.error = err.error?.error || "Login failed.";
        this.loading = false;
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 30, vars: 7, consts: [[1, "auth-page"], [1, "auth-card"], [1, "auth-logo"], [1, "logo-icon"], [1, "subtitle"], ["class", "alert error", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "field"], ["type", "email", "formControlName", "email", "placeholder", "you@example.com"], ["class", "field-error", 4, "ngIf"], ["type", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [4, "ngIf"], ["class", "spinner", 4, "ngIf"], [1, "auth-link"], ["routerLink", "/auth/register"], [1, "alert", "error"], [1, "field-error"], [1, "spinner"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "\u20B9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "FinanceTrack");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "h2");
      \u0275\u0275text(8, "Welcome back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 4);
      \u0275\u0275text(10, "Sign in to your account");
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, LoginComponent_div_11_Template, 2, 1, "div", 5);
      \u0275\u0275elementStart(12, "form", 6);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_12_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(13, "div", 7)(14, "label");
      \u0275\u0275text(15, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "input", 8);
      \u0275\u0275controlCreate();
      \u0275\u0275template(17, LoginComponent_span_17_Template, 2, 0, "span", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 7)(19, "label");
      \u0275\u0275text(20, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "input", 10);
      \u0275\u0275controlCreate();
      \u0275\u0275template(22, LoginComponent_span_22_Template, 2, 0, "span", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 11);
      \u0275\u0275template(24, LoginComponent_span_24_Template, 2, 0, "span", 12)(25, LoginComponent_span_25_Template, 1, 0, "span", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "p", 14);
      \u0275\u0275text(27, "Don't have an account? ");
      \u0275\u0275elementStart(28, "a", 15);
      \u0275\u0275text(29, "Create one");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [ReactiveFormsModule, CommonModule, RouterLink], template: `<div class="auth-page">\r
    <div class="auth-card">\r
      <div class="auth-logo">\r
        <span class="logo-icon">\u20B9</span>\r
        <h1>FinanceTrack</h1>\r
      </div>\r
      <h2>Welcome back</h2>\r
      <p class="subtitle">Sign in to your account</p>\r
  \r
      <div class="alert error" *ngIf="error">{{ error }}</div>\r
  \r
      <form [formGroup]="form" (ngSubmit)="submit()">\r
        <div class="field">\r
          <label>Email</label>\r
          <input type="email" formControlName="email" placeholder="you@example.com" />\r
          <span class="field-error" *ngIf="form.get('email')?.touched && form.get('email')?.invalid">Enter a valid email</span>\r
        </div>\r
        <div class="field">\r
          <label>Password</label>\r
          <input type="password" formControlName="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" />\r
          <span class="field-error" *ngIf="form.get('password')?.touched && form.get('password')?.invalid">At least 8 characters</span>\r
        </div>\r
        <button type="submit" class="btn-primary" [disabled]="loading || form.invalid">\r
          <span *ngIf="!loading">Sign in</span>\r
          <span *ngIf="loading" class="spinner"></span>\r
        </button>\r
      </form>\r
  \r
      <p class="auth-link">Don't have an account? <a routerLink="/auth/register">Create one</a></p>\r
    </div>\r
  </div>` }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login/login.component.ts", lineNumber: 13 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-OBYDFUPT.js.map
