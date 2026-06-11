import {
  AuthService,
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-GGUZTU6B.js";
import {
  Component,
  catchError,
  inject,
  provideHttpClient,
  setClassMetadata,
  switchMap,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-IIPEQRGB.js";

// src/app/core/guards/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn)
    return true;
  return router.createUrlTree(["/auth/login"]);
};
var guestGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isLoggedIn)
    return true;
  return router.createUrlTree(["/dashboard"]);
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  {
    path: "auth",
    canActivate: [guestGuard],
    children: [
      { path: "login", loadComponent: () => import("./chunk-OBYDFUPT.js").then((m) => m.LoginComponent) },
      { path: "register", loadComponent: () => import("./chunk-F7WMKA2O.js").then((m) => m.RegisterComponent) },
      { path: "", redirectTo: "login", pathMatch: "full" }
    ]
  },
  {
    path: "",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-QPYR5WFO.js").then((m) => m.ShellComponent),
    children: [
      { path: "dashboard", loadComponent: () => import("./chunk-JETFMFU7.js").then((m) => m.DashboardComponent) },
      { path: "transactions", loadComponent: () => import("./chunk-AI4COR3T.js").then((m) => m.TransactionsComponent) },
      { path: "budgets", loadComponent: () => import("./chunk-AIZXBEG2.js").then((m) => m.BudgetsComponent) },
      { path: "categories", loadComponent: () => import("./chunk-QIFOVNKI.js").then((m) => m.CategoriesComponent) }
    ]
  },
  { path: "**", redirectTo: "/dashboard" }
];

// src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.accessToken;
  const cloned = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;
  return next(cloned).pipe(catchError((err) => {
    if (err.status === 401 && !req.url.includes("/auth/")) {
      return auth.refreshToken().pipe(switchMap((res) => {
        const retried = req.clone({ setHeaders: { Authorization: `Bearer ${res.accessToken}` } });
        return next(retried);
      }), catchError((refreshErr) => {
        auth.logout();
        return throwError(() => refreshErr);
      }));
    }
    return throwError(() => err);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterOutlet],
      template: "<router-outlet />"
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
