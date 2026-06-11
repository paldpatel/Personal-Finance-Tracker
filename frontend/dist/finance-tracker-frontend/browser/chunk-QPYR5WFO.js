import {
  AuthService,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-GGUZTU6B.js";
import {
  CommonModule,
  Component,
  DatePipe,
  Injectable,
  NgForOf,
  NgIf,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IIPEQRGB.js";

// src/app/core/services/sse.service.ts
var SseService = class _SseService {
  auth;
  notifications = signal(
    [],
    ...ngDevMode ? [{ debugName: "notifications" }] : (
      /* istanbul ignore next */
      []
    )
  );
  eventSource = null;
  constructor(auth) {
    this.auth = auth;
  }
  connect() {
    if (this.eventSource)
      return;
    const token = this.auth.accessToken;
    if (!token)
      return;
    this.eventSource = new EventSource(`http://localhost:3000/api/events?token=${token}`);
    this.eventSource.addEventListener("budget:exceeded", (e) => {
      this.push("budget:exceeded", JSON.parse(e.data));
    });
    this.eventSource.addEventListener("transaction:created", (e) => {
      this.push("transaction:created", JSON.parse(e.data));
    });
    this.eventSource.addEventListener("transactions:synced", (e) => {
      this.push("transactions:synced", JSON.parse(e.data));
    });
    this.eventSource.onerror = () => {
      this.disconnect();
      setTimeout(() => this.connect(), 5e3);
    };
  }
  disconnect() {
    this.eventSource?.close();
    this.eventSource = null;
  }
  push(event, data) {
    this.notifications.update((n) => [{ event, data, timestamp: /* @__PURE__ */ new Date() }, ...n].slice(0, 20));
  }
  clearNotifications() {
    this.notifications.set([]);
  }
  static \u0275fac = function SseService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SseService)(\u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SseService, factory: _SseService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SseService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: AuthService }], null);
})();

// src/app/shared/components/shell/shell.component.ts
function ShellComponent_span_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.notifications.length);
  }
}
function ShellComponent_div_51_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, "No notifications");
    \u0275\u0275elementEnd();
  }
}
function ShellComponent_div_51_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const n_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getNotificationMessage(n_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 2, n_r3.timestamp, "shortTime"));
  }
}
function ShellComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "span");
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 35);
    \u0275\u0275listener("click", function ShellComponent_div_51_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearNotifications());
    });
    \u0275\u0275text(5, "Clear all");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ShellComponent_div_51_div_6_Template, 2, 0, "div", 36)(7, ShellComponent_div_51_div_7_Template, 6, 5, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.notifications.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.notifications);
  }
}
var ShellComponent = class _ShellComponent {
  auth;
  sse;
  sidebarOpen = false;
  showNotifications = false;
  constructor(auth, sse) {
    this.auth = auth;
    this.sse = sse;
  }
  ngOnInit() {
    this.sse.connect();
  }
  ngOnDestroy() {
    this.sse.disconnect();
  }
  get user() {
    return this.auth.currentUser();
  }
  get notifications() {
    return this.sse.notifications();
  }
  get isOnline() {
    return navigator.onLine;
  }
  logout() {
    this.auth.logout();
  }
  clearNotifications() {
    this.sse.clearNotifications();
  }
  getNotificationMessage(n) {
    if (n.event === "budget:exceeded")
      return `\u26A0\uFE0F Budget exceeded: ${n.data.categoryName} (\u20B9${n.data.spent} / \u20B9${n.data.limit})`;
    if (n.event === "transactions:synced")
      return `\u2705 ${n.data.count} offline transaction(s) synced`;
    return n.event;
  }
  static \u0275fac = function ShellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShellComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SseService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShellComponent, selectors: [["app-shell"]], decls: 54, vars: 12, consts: [[1, "app-shell"], [1, "sidebar"], [1, "sidebar-header"], [1, "logo"], [1, "logo-icon"], [1, "logo-text"], [1, "sidebar-close", 3, "click"], [1, "sidebar-nav"], ["routerLink", "/dashboard", "routerLinkActive", "active", 3, "click"], [1, "nav-icon"], ["routerLink", "/transactions", "routerLinkActive", "active", 3, "click"], ["routerLink", "/budgets", "routerLinkActive", "active", 3, "click"], ["routerLink", "/categories", "routerLinkActive", "active", 3, "click"], [1, "sidebar-footer"], [1, "status-badge"], [1, "status-dot"], [1, "user-info"], [1, "user-avatar"], [1, "user-details"], [1, "user-name"], [1, "user-email"], [1, "logout-btn", 3, "click"], [1, "overlay", 3, "click"], [1, "main-area"], [1, "topbar"], [1, "menu-btn", 3, "click"], [1, "topbar-right"], [1, "notif-wrapper"], [1, "notif-btn", 3, "click"], ["class", "notif-badge", 4, "ngIf"], ["class", "notif-panel", 4, "ngIf"], [1, "page-content"], [1, "notif-badge"], [1, "notif-panel"], [1, "notif-header"], [3, "click"], ["class", "notif-empty", 4, "ngIf"], ["class", "notif-item", 4, "ngFor", "ngForOf"], [1, "notif-empty"], [1, "notif-item"], [1, "notif-msg"], [1, "notif-time"]], template: function ShellComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5, "\u20B9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 5);
      \u0275\u0275text(7, "FinanceTrack");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 6);
      \u0275\u0275listener("click", function ShellComponent_Template_button_click_8_listener() {
        return ctx.sidebarOpen = false;
      });
      \u0275\u0275text(9, "\u2715");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "nav", 7)(11, "a", 8);
      \u0275\u0275listener("click", function ShellComponent_Template_a_click_11_listener() {
        return ctx.sidebarOpen = false;
      });
      \u0275\u0275elementStart(12, "span", 9);
      \u0275\u0275text(13, "\u{1F4CA}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Dashboard ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 10);
      \u0275\u0275listener("click", function ShellComponent_Template_a_click_15_listener() {
        return ctx.sidebarOpen = false;
      });
      \u0275\u0275elementStart(16, "span", 9);
      \u0275\u0275text(17, "\u{1F4B3}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " Transactions ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 11);
      \u0275\u0275listener("click", function ShellComponent_Template_a_click_19_listener() {
        return ctx.sidebarOpen = false;
      });
      \u0275\u0275elementStart(20, "span", 9);
      \u0275\u0275text(21, "\u{1F3AF}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Budgets ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "a", 12);
      \u0275\u0275listener("click", function ShellComponent_Template_a_click_23_listener() {
        return ctx.sidebarOpen = false;
      });
      \u0275\u0275elementStart(24, "span", 9);
      \u0275\u0275text(25, "\u{1F3F7}\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " Categories ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 13)(28, "div", 14);
      \u0275\u0275element(29, "span", 15);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 16)(32, "span", 17);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 18)(35, "span", 19);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "span", 20);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "button", 21);
      \u0275\u0275listener("click", function ShellComponent_Template_button_click_39_listener() {
        return ctx.logout();
      });
      \u0275\u0275text(40, "Sign out");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 22);
      \u0275\u0275listener("click", function ShellComponent_Template_div_click_41_listener() {
        return ctx.sidebarOpen = false;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 23)(43, "header", 24)(44, "button", 25);
      \u0275\u0275listener("click", function ShellComponent_Template_button_click_44_listener() {
        return ctx.sidebarOpen = true;
      });
      \u0275\u0275text(45, "\u2630");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 26)(47, "div", 27)(48, "button", 28);
      \u0275\u0275listener("click", function ShellComponent_Template_button_click_48_listener() {
        return ctx.showNotifications = !ctx.showNotifications;
      });
      \u0275\u0275text(49, " \u{1F514} ");
      \u0275\u0275template(50, ShellComponent_span_50_Template, 2, 1, "span", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275template(51, ShellComponent_div_51_Template, 8, 2, "div", 30);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "main", 31);
      \u0275\u0275element(53, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.sidebarOpen);
      \u0275\u0275advance(27);
      \u0275\u0275classProp("offline", !ctx.isOnline);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isOnline ? "Online" : "Offline \u2013 changes saved locally", " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate((ctx.user?.first_name?.[0] || ctx.user?.email?.[0] || "?").toUpperCase());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.user?.first_name || "User");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.user?.email);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("visible", ctx.sidebarOpen);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.notifications.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showNotifications);
    }
  }, dependencies: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, NgForOf, NgIf, DatePipe], styles: ["\n.app-shell[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  min-width: 240px;\n  background: #0f172a;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  position: relative;\n  z-index: 100;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    left: -240px;\n    transition: left 0.25s ease;\n  }\n  .sidebar.open[_ngcontent-%COMP%] {\n    left: 0;\n  }\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  padding: 24px 20px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: #6366f1;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 700;\n  color: white;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: -0.3px;\n}\n.sidebar-close[_ngcontent-%COMP%] {\n  display: none;\n  background: none;\n  border: none;\n  color: #64748b;\n  cursor: pointer;\n  font-size: 18px;\n}\n@media (max-width: 768px) {\n  .sidebar-close[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.sidebar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  color: #94a3b8;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.15s;\n}\n.sidebar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #1e293b;\n  color: #e2e8f0;\n}\n.sidebar-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: white;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  border-top: 1px solid #1e293b;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #22c55e;\n  font-weight: 500;\n}\n.status-badge.offline[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #6366f1;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.user-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #e2e8f0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748b;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #1e293b;\n  color: #64748b;\n  padding: 7px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  width: 100%;\n  transition: all 0.15s;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  border-color: #ef4444;\n  color: #ef4444;\n}\n.overlay[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .overlay[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    inset: 0;\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 99;\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.25s;\n  }\n  .overlay.visible[_ngcontent-%COMP%] {\n    opacity: 1;\n    pointer-events: all;\n  }\n}\n.main-area[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background: #f8fafc;\n}\n.topbar[_ngcontent-%COMP%] {\n  height: 56px;\n  background: white;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  justify-content: space-between;\n  flex-shrink: 0;\n}\n.menu-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n  color: #64748b;\n  padding: 4px 8px;\n  border-radius: 6px;\n  display: none;\n}\n@media (max-width: 768px) {\n  .menu-btn[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.menu-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-left: auto;\n}\n.notif-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.notif-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n  padding: 4px;\n  position: relative;\n  line-height: 1;\n}\n.notif-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  width: 16px;\n  height: 16px;\n  background: #ef4444;\n  color: white;\n  border-radius: 50%;\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n}\n.notif-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 8px);\n  width: 320px;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  z-index: 200;\n  overflow: hidden;\n}\n.notif-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f1f5f9;\n  font-size: 13px;\n  font-weight: 600;\n  color: #0f172a;\n}\n.notif-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6366f1;\n  font-size: 12px;\n  cursor: pointer;\n}\n.notif-empty[_ngcontent-%COMP%] {\n  padding: 24px;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.notif-item[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border-bottom: 1px solid #f8fafc;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.notif-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.notif-msg[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #334155;\n}\n.notif-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n}\n.page-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n}\n@media (max-width: 768px) {\n  .page-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=shell.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShellComponent, [{
    type: Component,
    args: [{ selector: "app-shell", standalone: true, imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule], template: `<div class="app-shell">\r
    <aside class="sidebar" [class.open]="sidebarOpen">\r
      <div class="sidebar-header">\r
        <div class="logo">\r
          <span class="logo-icon">\u20B9</span>\r
          <span class="logo-text">FinanceTrack</span>\r
        </div>\r
        <button class="sidebar-close" (click)="sidebarOpen = false">\u2715</button>\r
      </div>\r
  \r
      <nav class="sidebar-nav">\r
        <a routerLink="/dashboard" routerLinkActive="active" (click)="sidebarOpen=false">\r
          <span class="nav-icon">\u{1F4CA}</span> Dashboard\r
        </a>\r
        <a routerLink="/transactions" routerLinkActive="active" (click)="sidebarOpen=false">\r
          <span class="nav-icon">\u{1F4B3}</span> Transactions\r
        </a>\r
        <a routerLink="/budgets" routerLinkActive="active" (click)="sidebarOpen=false">\r
          <span class="nav-icon">\u{1F3AF}</span> Budgets\r
        </a>\r
        <a routerLink="/categories" routerLinkActive="active" (click)="sidebarOpen=false">\r
          <span class="nav-icon">\u{1F3F7}\uFE0F</span> Categories\r
        </a>\r
      </nav>\r
  \r
      <div class="sidebar-footer">\r
        <div class="status-badge" [class.offline]="!isOnline">\r
          <span class="status-dot"></span>\r
          {{ isOnline ? 'Online' : 'Offline \u2013 changes saved locally' }}\r
        </div>\r
        <div class="user-info">\r
          <span class="user-avatar">{{ (user?.first_name?.[0] || user?.email?.[0] || '?').toUpperCase() }}</span>\r
          <div class="user-details">\r
            <span class="user-name">{{ user?.first_name || 'User' }}</span>\r
            <span class="user-email">{{ user?.email }}</span>\r
          </div>\r
        </div>\r
        <button class="logout-btn" (click)="logout()">Sign out</button>\r
      </div>\r
    </aside>\r
  \r
    <div class="overlay" [class.visible]="sidebarOpen" (click)="sidebarOpen=false"></div>\r
  \r
    <div class="main-area">\r
      <header class="topbar">\r
        <button class="menu-btn" (click)="sidebarOpen = true">\u2630</button>\r
        <div class="topbar-right">\r
          <div class="notif-wrapper">\r
            <button class="notif-btn" (click)="showNotifications = !showNotifications">\r
              \u{1F514}\r
              <span class="notif-badge" *ngIf="notifications.length > 0">{{ notifications.length }}</span>\r
            </button>\r
            <div class="notif-panel" *ngIf="showNotifications">\r
              <div class="notif-header">\r
                <span>Notifications</span>\r
                <button (click)="clearNotifications()">Clear all</button>\r
              </div>\r
              <div class="notif-empty" *ngIf="notifications.length === 0">No notifications</div>\r
              <div class="notif-item" *ngFor="let n of notifications">\r
                <span class="notif-msg">{{ getNotificationMessage(n) }}</span>\r
                <span class="notif-time">{{ n.timestamp | date:'shortTime' }}</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </header>\r
  \r
      <main class="page-content">\r
        <router-outlet />\r
      </main>\r
    </div>\r
  </div>`, styles: ["/* src/app/shared/components/shell/shell.component.scss */\n.app-shell {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n}\n.sidebar {\n  width: 240px;\n  min-width: 240px;\n  background: #0f172a;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  position: relative;\n  z-index: 100;\n}\n@media (max-width: 768px) {\n  .sidebar {\n    position: fixed;\n    left: -240px;\n    transition: left 0.25s ease;\n  }\n  .sidebar.open {\n    left: 0;\n  }\n}\n.sidebar-header {\n  padding: 24px 20px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.logo-icon {\n  width: 36px;\n  height: 36px;\n  background: #6366f1;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 700;\n  color: white;\n}\n.logo-text {\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: -0.3px;\n}\n.sidebar-close {\n  display: none;\n  background: none;\n  border: none;\n  color: #64748b;\n  cursor: pointer;\n  font-size: 18px;\n}\n@media (max-width: 768px) {\n  .sidebar-close {\n    display: block;\n  }\n}\n.sidebar-nav {\n  flex: 1;\n  padding: 8px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.sidebar-nav a {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 8px;\n  color: #94a3b8;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.15s;\n}\n.sidebar-nav a:hover {\n  background: #1e293b;\n  color: #e2e8f0;\n}\n.sidebar-nav a.active {\n  background: #6366f1;\n  color: white;\n}\n.sidebar-footer {\n  padding: 16px 12px;\n  border-top: 1px solid #1e293b;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.status-badge {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #22c55e;\n  font-weight: 500;\n}\n.status-badge.offline {\n  color: #f59e0b;\n}\n.status-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n.user-info {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #6366f1;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.user-details {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.user-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #e2e8f0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-email {\n  font-size: 11px;\n  color: #64748b;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.logout-btn {\n  background: none;\n  border: 1px solid #1e293b;\n  color: #64748b;\n  padding: 7px 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  width: 100%;\n  transition: all 0.15s;\n}\n.logout-btn:hover {\n  border-color: #ef4444;\n  color: #ef4444;\n}\n.overlay {\n  display: none;\n}\n@media (max-width: 768px) {\n  .overlay {\n    display: block;\n    position: fixed;\n    inset: 0;\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 99;\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.25s;\n  }\n  .overlay.visible {\n    opacity: 1;\n    pointer-events: all;\n  }\n}\n.main-area {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background: #f8fafc;\n}\n.topbar {\n  height: 56px;\n  background: white;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  justify-content: space-between;\n  flex-shrink: 0;\n}\n.menu-btn {\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n  color: #64748b;\n  padding: 4px 8px;\n  border-radius: 6px;\n  display: none;\n}\n@media (max-width: 768px) {\n  .menu-btn {\n    display: block;\n  }\n}\n.menu-btn:hover {\n  background: #f1f5f9;\n}\n.topbar-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-left: auto;\n}\n.notif-wrapper {\n  position: relative;\n}\n.notif-btn {\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n  padding: 4px;\n  position: relative;\n  line-height: 1;\n}\n.notif-badge {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  width: 16px;\n  height: 16px;\n  background: #ef4444;\n  color: white;\n  border-radius: 50%;\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n}\n.notif-panel {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 8px);\n  width: 320px;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  z-index: 200;\n  overflow: hidden;\n}\n.notif-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f1f5f9;\n  font-size: 13px;\n  font-weight: 600;\n  color: #0f172a;\n}\n.notif-header button {\n  background: none;\n  border: none;\n  color: #6366f1;\n  font-size: 12px;\n  cursor: pointer;\n}\n.notif-empty {\n  padding: 24px;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.notif-item {\n  padding: 10px 16px;\n  border-bottom: 1px solid #f8fafc;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.notif-item:last-child {\n  border-bottom: none;\n}\n.notif-msg {\n  font-size: 13px;\n  color: #334155;\n}\n.notif-time {\n  font-size: 11px;\n  color: #94a3b8;\n}\n.page-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n}\n@media (max-width: 768px) {\n  .page-content {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=shell.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: SseService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShellComponent, { className: "ShellComponent", filePath: "src/app/shared/components/shell/shell.component.ts", lineNumber: 14 });
})();
export {
  ShellComponent
};
//# sourceMappingURL=chunk-QPYR5WFO.js.map
