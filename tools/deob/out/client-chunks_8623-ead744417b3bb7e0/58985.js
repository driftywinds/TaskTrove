var r = require(/*webcrack:missing*/"./87849.js");
var n = require(/*webcrack:missing*/"./23164.js");
let o = Array(12).fill(0);
let s = ({
  visible: t,
  className: e
}) => r.createElement("div", {
  className: ["sonner-loading-wrapper", e].filter(Boolean).join(" "),
  "data-visible": t
}, r.createElement("div", {
  className: "sonner-spinner"
}, o.map((t, e) => r.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${e}`
}))));
let i = r.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, r.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
}));
let l = r.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, r.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
}));
let d = r.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, r.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
}));
let u = r.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, r.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
}));
let c = r.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, r.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), r.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}));
let f = 1;
class m {
  constructor() {
    this.subscribe = t => {
      this.subscribers.push(t);
      return () => {
        let e = this.subscribers.indexOf(t);
        this.subscribers.splice(e, 1);
      };
    };
    this.publish = t => {
      this.subscribers.forEach(e => e(t));
    };
    this.addToast = t => {
      this.publish(t);
      this.toasts = [...this.toasts, t];
    };
    this.create = t => {
      var e;
      let {
        message: a,
        ...r
      } = t;
      let n = typeof (t == null ? undefined : t.id) == "number" || ((e = t.id) == null ? undefined : e.length) > 0 ? t.id : f++;
      let o = this.toasts.find(t => t.id === n);
      let s = t.dismissible === undefined || t.dismissible;
      if (this.dismissedToasts.has(n)) {
        this.dismissedToasts.delete(n);
      }
      if (o) {
        this.toasts = this.toasts.map(e => e.id === n ? (this.publish({
          ...e,
          ...t,
          id: n,
          title: a
        }), {
          ...e,
          ...t,
          id: n,
          dismissible: s,
          title: a
        }) : e);
      } else {
        this.addToast({
          title: a,
          ...r,
          dismissible: s,
          id: n
        });
      }
      return n;
    };
    this.dismiss = t => {
      if (t) {
        this.dismissedToasts.add(t);
        requestAnimationFrame(() => this.subscribers.forEach(e => e({
          id: t,
          dismiss: true
        })));
      } else {
        this.toasts.forEach(t => {
          this.subscribers.forEach(e => e({
            id: t.id,
            dismiss: true
          }));
        });
      }
      return t;
    };
    this.message = (t, e) => this.create({
      ...e,
      message: t
    });
    this.error = (t, e) => this.create({
      ...e,
      message: t,
      type: "error"
    });
    this.success = (t, e) => this.create({
      ...e,
      type: "success",
      message: t
    });
    this.info = (t, e) => this.create({
      ...e,
      type: "info",
      message: t
    });
    this.warning = (t, e) => this.create({
      ...e,
      type: "warning",
      message: t
    });
    this.loading = (t, e) => this.create({
      ...e,
      type: "loading",
      message: t
    });
    this.promise = (t, e) => {
      let a;
      let n;
      if (!e) {
        return;
      }
      if (e.loading !== undefined) {
        n = this.create({
          ...e,
          promise: t,
          type: "loading",
          message: e.loading,
          description: typeof e.description != "function" ? e.description : undefined
        });
      }
      let o = Promise.resolve(t instanceof Function ? t() : t);
      let s = n !== undefined;
      let i = o.then(async t => {
        a = ["resolve", t];
        if (r.isValidElement(t)) {
          s = false;
          this.create({
            id: n,
            type: "default",
            message: t
          });
        } else if (h(t) && !t.ok) {
          s = false;
          let a = typeof e.error == "function" ? await e.error(`HTTP error! status: ${t.status}`) : e.error;
          let o = typeof e.description == "function" ? await e.description(`HTTP error! status: ${t.status}`) : e.description;
          let i = typeof a != "object" || r.isValidElement(a) ? {
            message: a
          } : a;
          this.create({
            id: n,
            type: "error",
            description: o,
            ...i
          });
        } else if (t instanceof Error) {
          s = false;
          let a = typeof e.error == "function" ? await e.error(t) : e.error;
          let o = typeof e.description == "function" ? await e.description(t) : e.description;
          let i = typeof a != "object" || r.isValidElement(a) ? {
            message: a
          } : a;
          this.create({
            id: n,
            type: "error",
            description: o,
            ...i
          });
        } else if (e.success !== undefined) {
          s = false;
          let a = typeof e.success == "function" ? await e.success(t) : e.success;
          let o = typeof e.description == "function" ? await e.description(t) : e.description;
          let i = typeof a != "object" || r.isValidElement(a) ? {
            message: a
          } : a;
          this.create({
            id: n,
            type: "success",
            description: o,
            ...i
          });
        }
      }).catch(async t => {
        a = ["reject", t];
        if (e.error !== undefined) {
          s = false;
          let a = typeof e.error == "function" ? await e.error(t) : e.error;
          let o = typeof e.description == "function" ? await e.description(t) : e.description;
          let i = typeof a != "object" || r.isValidElement(a) ? {
            message: a
          } : a;
          this.create({
            id: n,
            type: "error",
            description: o,
            ...i
          });
        }
      }).finally(() => {
        if (s) {
          this.dismiss(n);
          n = undefined;
        }
        if (e.finally != null) {
          e.finally.call(e);
        }
      });
      let l = () => new Promise((t, e) => i.then(() => a[0] === "reject" ? e(a[1]) : t(a[1])).catch(e));
      if (typeof n != "string" && typeof n != "number") {
        return {
          unwrap: l
        };
      } else {
        return Object.assign(n, {
          unwrap: l
        });
      }
    };
    this.custom = (t, e) => {
      let a = (e == null ? undefined : e.id) || f++;
      this.create({
        jsx: t(a),
        id: a,
        ...e
      });
      return a;
    };
    this.getActiveToasts = () => this.toasts.filter(t => !this.dismissedToasts.has(t.id));
    this.subscribers = [];
    this.toasts = [];
    this.dismissedToasts = new Set();
  }
}
let p = new m();
let h = t => t && typeof t == "object" && "ok" in t && typeof t.ok == "boolean" && "status" in t && typeof t.status == "number";
export let oR = Object.assign((t, e) => {
  let a = (e == null ? undefined : e.id) || f++;
  p.addToast({
    title: t,
    ...e,
    id: a
  });
  return a;
}, {
  success: p.success,
  info: p.info,
  warning: p.warning,
  error: p.error,
  custom: p.custom,
  message: p.message,
  promise: p.promise,
  dismiss: p.dismiss,
  loading: p.loading
}, {
  getHistory: () => p.toasts,
  getToasts: () => p.getActiveToasts()
});
function v(t) {
  return t.label !== undefined;
}
function b(...t) {
  return t.filter(Boolean).join(" ");
}
(function (t) {
  if (!t || typeof document == "undefined") {
    return;
  }
  let e = document.head || document.getElementsByTagName("head")[0];
  let a = document.createElement("style");
  a.type = "text/css";
  e.appendChild(a);
  if (a.styleSheet) {
    a.styleSheet.cssText = t;
  } else {
    a.appendChild(document.createTextNode(t));
  }
})("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
let y = t => {
  var e;
  var a;
  var n;
  var o;
  var f;
  var m;
  var p;
  var h;
  var g;
  var x;
  var E;
  let {
    invert: k,
    toast: S,
    unstyled: M,
    interacting: T,
    setHeights: N,
    visibleToasts: z,
    heights: C,
    index: I,
    toasts: B,
    expanded: R,
    removeToast: j,
    defaultRichColors: A,
    closeButton: D,
    style: _,
    cancelButtonStyle: L,
    actionButtonStyle: O,
    className: $ = "",
    descriptionClassName: P = "",
    duration: Y,
    position: V,
    gap: U,
    expandByDefault: H,
    classNames: W,
    icons: X,
    closeButtonAriaLabel: F = "Close toast"
  } = t;
  let [J, K] = r.useState(null);
  let [q, G] = r.useState(null);
  let [Q, Z] = r.useState(false);
  let [tt, te] = r.useState(false);
  let [ta, tr] = r.useState(false);
  let [tn, to] = r.useState(false);
  let [ts, ti] = r.useState(false);
  let [tl, td] = r.useState(0);
  let [tu, tc] = r.useState(0);
  let tf = r.useRef(S.duration || Y || 4000);
  let tm = r.useRef(null);
  let tp = r.useRef(null);
  let th = I === 0;
  let tg = I + 1 <= z;
  let tv = S.type;
  let tb = S.dismissible !== false;
  let ty = S.className || "";
  let tw = S.descriptionClassName || "";
  let tx = r.useMemo(() => C.findIndex(t => t.toastId === S.id) || 0, [C, S.id]);
  let tE = r.useMemo(() => {
    return S.closeButton ?? D;
  }, [S.closeButton, D]);
  let tk = r.useMemo(() => S.duration || Y || 4000, [S.duration, Y]);
  let tS = r.useRef(0);
  let tM = r.useRef(0);
  let tT = r.useRef(0);
  let tN = r.useRef(null);
  let [tz, tC] = V.split("-");
  let tI = r.useMemo(() => C.reduce((t, e, a) => a >= tx ? t : t + e.height, 0), [C, tx]);
  let tB = (() => {
    let [t, e] = r.useState(document.hidden);
    r.useEffect(() => {
      let t = () => {
        e(document.hidden);
      };
      document.addEventListener("visibilitychange", t);
      return () => window.removeEventListener("visibilitychange", t);
    }, []);
    return t;
  })();
  let tR = S.invert || k;
  let tj = tv === "loading";
  tM.current = r.useMemo(() => tx * U + tI, [tx, tI]);
  r.useEffect(() => {
    tf.current = tk;
  }, [tk]);
  r.useEffect(() => {
    Z(true);
  }, []);
  r.useEffect(() => {
    let t = tp.current;
    if (t) {
      let e = t.getBoundingClientRect().height;
      tc(e);
      N(t => [{
        toastId: S.id,
        height: e,
        position: S.position
      }, ...t]);
      return () => N(t => t.filter(t => t.toastId !== S.id));
    }
  }, [N, S.id]);
  r.useLayoutEffect(() => {
    if (!Q) {
      return;
    }
    let t = tp.current;
    let e = t.style.height;
    t.style.height = "auto";
    let a = t.getBoundingClientRect().height;
    t.style.height = e;
    tc(a);
    N(t => t.find(t => t.toastId === S.id) ? t.map(t => t.toastId === S.id ? {
      ...t,
      height: a
    } : t) : [{
      toastId: S.id,
      height: a,
      position: S.position
    }, ...t]);
  }, [Q, S.title, S.description, N, S.id, S.jsx, S.action, S.cancel]);
  let tA = r.useCallback(() => {
    te(true);
    td(tM.current);
    N(t => t.filter(t => t.toastId !== S.id));
    setTimeout(() => {
      j(S);
    }, 200);
  }, [S, j, N, tM]);
  r.useEffect(() => {
    let t;
    if ((!S.promise || tv !== "loading") && S.duration !== Infinity && S.type !== "loading") {
      if (R || T || tB) {
        if (tT.current < tS.current) {
          let t = new Date().getTime() - tS.current;
          tf.current = tf.current - t;
        }
        tT.current = new Date().getTime();
      } else if (tf.current !== Infinity) {
        tS.current = new Date().getTime();
        t = setTimeout(() => {
          if (S.onAutoClose != null) {
            S.onAutoClose.call(S, S);
          }
          tA();
        }, tf.current);
      }
      return () => clearTimeout(t);
    }
  }, [R, T, S, tv, tB, tA]);
  r.useEffect(() => {
    if (S.delete) {
      tA();
      if (S.onDismiss != null) {
        S.onDismiss.call(S, S);
      }
    }
  }, [tA, S.delete]);
  let tD = S.icon || (X == null ? undefined : X[tv]) || (t => {
    switch (t) {
      case "success":
        return i;
      case "info":
        return d;
      case "warning":
        return l;
      case "error":
        return u;
      default:
        return null;
    }
  })(tv);
  return r.createElement("li", {
    tabIndex: 0,
    ref: tp,
    className: b($, ty, W == null ? undefined : W.toast, S == null || (e = S.classNames) == null ? undefined : e.toast, W == null ? undefined : W.default, W == null ? undefined : W[tv], S == null || (a = S.classNames) == null ? undefined : a[tv]),
    "data-sonner-toast": "",
    "data-rich-colors": S.richColors ?? A,
    "data-styled": !S.jsx && !S.unstyled && !M,
    "data-mounted": Q,
    "data-promise": !!S.promise,
    "data-swiped": ts,
    "data-removed": tt,
    "data-visible": tg,
    "data-y-position": tz,
    "data-x-position": tC,
    "data-index": I,
    "data-front": th,
    "data-swiping": ta,
    "data-dismissible": tb,
    "data-type": tv,
    "data-invert": tR,
    "data-swipe-out": tn,
    "data-swipe-direction": q,
    "data-expanded": !!R || !!H && !!Q,
    "data-testid": S.testId,
    style: {
      "--index": I,
      "--toasts-before": I,
      "--z-index": B.length - I,
      "--offset": `${tt ? tl : tM.current}px`,
      "--initial-height": H ? "auto" : `${tu}px`,
      ..._,
      ...S.style
    },
    onDragEnd: () => {
      tr(false);
      K(null);
      tN.current = null;
    },
    onPointerDown: t => {
      if (t.button !== 2 && !tj && !!tb) {
        tm.current = new Date();
        td(tM.current);
        t.target.setPointerCapture(t.pointerId);
        if (t.target.tagName !== "BUTTON") {
          tr(true);
          tN.current = {
            x: t.clientX,
            y: t.clientY
          };
        }
      }
    },
    onPointerUp: () => {
      var t;
      var e;
      var a;
      var r;
      var n;
      if (tn || !tb) {
        return;
      }
      tN.current = null;
      let o = Number(((t = tp.current) == null ? undefined : t.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0);
      let s = Number(((e = tp.current) == null ? undefined : e.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0);
      let i = new Date().getTime() - ((a = tm.current) == null ? undefined : a.getTime());
      let l = J === "x" ? o : s;
      let d = Math.abs(l) / i;
      if (Math.abs(l) >= 45 || d > 0.11) {
        td(tM.current);
        if (S.onDismiss != null) {
          S.onDismiss.call(S, S);
        }
        if (J === "x") {
          G(o > 0 ? "right" : "left");
        } else {
          G(s > 0 ? "down" : "up");
        }
        tA();
        to(true);
        return;
      }
      if ((r = tp.current) != null) {
        r.style.setProperty("--swipe-amount-x", "0px");
      }
      if ((n = tp.current) != null) {
        n.style.setProperty("--swipe-amount-y", "0px");
      }
      ti(false);
      tr(false);
      K(null);
    },
    onPointerMove: e => {
      var a;
      var r;
      var n;
      if (!tN.current || !tb || ((a = window.getSelection()) == null ? undefined : a.toString().length) > 0) {
        return;
      }
      let s = e.clientY - tN.current.y;
      let i = e.clientX - tN.current.x;
      let l = t.swipeDirections ?? function (t) {
        let [e, a] = t.split("-");
        let r = [];
        if (e) {
          r.push(e);
        }
        if (a) {
          r.push(a);
        }
        return r;
      }(V);
      if (!J && (Math.abs(i) > 1 || Math.abs(s) > 1)) {
        K(Math.abs(i) > Math.abs(s) ? "x" : "y");
      }
      let d = {
        x: 0,
        y: 0
      };
      let u = t => 1 / (1.5 + Math.abs(t) / 20);
      if (J === "y") {
        if (l.includes("top") || l.includes("bottom")) {
          if (l.includes("top") && s < 0 || l.includes("bottom") && s > 0) {
            d.y = s;
          } else {
            let t = s * u(s);
            d.y = Math.abs(t) < Math.abs(s) ? t : s;
          }
        }
      } else if (J === "x" && (l.includes("left") || l.includes("right"))) {
        if (l.includes("left") && i < 0 || l.includes("right") && i > 0) {
          d.x = i;
        } else {
          let t = i * u(i);
          d.x = Math.abs(t) < Math.abs(i) ? t : i;
        }
      }
      if (Math.abs(d.x) > 0 || Math.abs(d.y) > 0) {
        ti(true);
      }
      if ((r = tp.current) != null) {
        r.style.setProperty("--swipe-amount-x", `${d.x}px`);
      }
      if ((n = tp.current) != null) {
        n.style.setProperty("--swipe-amount-y", `${d.y}px`);
      }
    }
  }, tE && !S.jsx && tv !== "loading" ? r.createElement("button", {
    "aria-label": F,
    "data-disabled": tj,
    "data-close-button": true,
    onClick: tj || !tb ? () => {} : () => {
      tA();
      if (S.onDismiss != null) {
        S.onDismiss.call(S, S);
      }
    },
    className: b(W == null ? undefined : W.closeButton, S == null || (n = S.classNames) == null ? undefined : n.closeButton)
  }, (X == null ? undefined : X.close) ?? c) : null, (tv || S.icon || S.promise) && S.icon !== null && ((X == null ? undefined : X[tv]) !== null || S.icon) ? r.createElement("div", {
    "data-icon": "",
    className: b(W == null ? undefined : W.icon, S == null || (o = S.classNames) == null ? undefined : o.icon)
  }, S.promise || S.type === "loading" && !S.icon ? S.icon || ((X == null ? undefined : X.loading) ? r.createElement("div", {
    className: b(W == null ? undefined : W.loader, S == null || (E = S.classNames) == null ? undefined : E.loader, "sonner-loader"),
    "data-visible": tv === "loading"
  }, X.loading) : r.createElement(s, {
    className: b(W == null ? undefined : W.loader, S == null || (x = S.classNames) == null ? undefined : x.loader),
    visible: tv === "loading"
  })) : null, S.type !== "loading" ? tD : null) : null, r.createElement("div", {
    "data-content": "",
    className: b(W == null ? undefined : W.content, S == null || (f = S.classNames) == null ? undefined : f.content)
  }, r.createElement("div", {
    "data-title": "",
    className: b(W == null ? undefined : W.title, S == null || (m = S.classNames) == null ? undefined : m.title)
  }, S.jsx ? S.jsx : typeof S.title == "function" ? S.title() : S.title), S.description ? r.createElement("div", {
    "data-description": "",
    className: b(P, tw, W == null ? undefined : W.description, S == null || (p = S.classNames) == null ? undefined : p.description)
  }, typeof S.description == "function" ? S.description() : S.description) : null), r.isValidElement(S.cancel) ? S.cancel : S.cancel && v(S.cancel) ? r.createElement("button", {
    "data-button": true,
    "data-cancel": true,
    style: S.cancelButtonStyle || L,
    onClick: t => {
      if (v(S.cancel)) {
        if (tb) {
          if (S.cancel.onClick != null) {
            S.cancel.onClick.call(S.cancel, t);
          }
          tA();
        }
      }
    },
    className: b(W == null ? undefined : W.cancelButton, S == null || (h = S.classNames) == null ? undefined : h.cancelButton)
  }, S.cancel.label) : null, r.isValidElement(S.action) ? S.action : S.action && v(S.action) ? r.createElement("button", {
    "data-button": true,
    "data-action": true,
    style: S.actionButtonStyle || O,
    onClick: t => {
      if (v(S.action)) {
        if (S.action.onClick != null) {
          S.action.onClick.call(S.action, t);
        }
        if (!t.defaultPrevented) {
          tA();
        }
      }
    },
    className: b(W == null ? undefined : W.actionButton, S == null || (g = S.classNames) == null ? undefined : g.actionButton)
  }, S.action.label) : null);
};
function w() {
  if (typeof window == "undefined" || typeof document == "undefined") {
    return "ltr";
  }
  let t = document.documentElement.getAttribute("dir");
  if (t !== "auto" && t) {
    return t;
  } else {
    return window.getComputedStyle(document.documentElement).direction;
  }
}
export let l$ = r.forwardRef(function (t, e) {
  let {
    id: a,
    invert: o,
    position: s = "bottom-right",
    hotkey: i = ["altKey", "KeyT"],
    expand: l,
    closeButton: d,
    className: u,
    offset: c,
    mobileOffset: f,
    theme: m = "light",
    richColors: h,
    duration: g,
    style: v,
    visibleToasts: b = 3,
    toastOptions: x,
    dir: E = w(),
    gap: k = 14,
    icons: S,
    containerAriaLabel: M = "Notifications"
  } = t;
  let [T, N] = r.useState([]);
  let z = r.useMemo(() => a ? T.filter(t => t.toasterId === a) : T.filter(t => !t.toasterId), [T, a]);
  let C = r.useMemo(() => Array.from(new Set([s].concat(z.filter(t => t.position).map(t => t.position)))), [z, s]);
  let [I, B] = r.useState([]);
  let [R, j] = r.useState(false);
  let [A, D] = r.useState(false);
  let [_, L] = r.useState(m !== "system" ? m : typeof window != "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  let O = r.useRef(null);
  let $ = i.join("+").replace(/Key/g, "").replace(/Digit/g, "");
  let P = r.useRef(null);
  let Y = r.useRef(false);
  let V = r.useCallback(t => {
    N(e => {
      var a;
      if (!((a = e.find(e => e.id === t.id)) == null ? undefined : a.delete)) {
        p.dismiss(t.id);
      }
      return e.filter(({
        id: e
      }) => e !== t.id);
    });
  }, []);
  r.useEffect(() => p.subscribe(t => {
    if (t.dismiss) {
      requestAnimationFrame(() => {
        N(e => e.map(e => e.id === t.id ? {
          ...e,
          delete: true
        } : e));
      });
    } else {
      setTimeout(() => {
        n.flushSync(() => {
          N(e => {
            let a = e.findIndex(e => e.id === t.id);
            if (a !== -1) {
              return [...e.slice(0, a), {
                ...e[a],
                ...t
              }, ...e.slice(a + 1)];
            } else {
              return [t, ...e];
            }
          });
        });
      });
    }
  }), [T]);
  r.useEffect(() => {
    if (m !== "system") {
      L(m);
      return;
    }
    if (m === "system") {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        L("dark");
      } else {
        L("light");
      }
    }
    if (typeof window == "undefined") {
      return;
    }
    let t = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      t.addEventListener("change", ({
        matches: t
      }) => {
        if (t) {
          L("dark");
        } else {
          L("light");
        }
      });
    } catch (e) {
      t.addListener(({
        matches: t
      }) => {
        try {
          if (t) {
            L("dark");
          } else {
            L("light");
          }
        } catch (t) {
          console.error(t);
        }
      });
    }
  }, [m]);
  r.useEffect(() => {
    if (T.length <= 1) {
      j(false);
    }
  }, [T]);
  r.useEffect(() => {
    let t = t => {
      var e;
      var a;
      if (i.every(e => t[e] || t.code === e)) {
        j(true);
        if ((a = O.current) != null) {
          a.focus();
        }
      }
      if (t.code === "Escape" && (document.activeElement === O.current || ((e = O.current) == null ? undefined : e.contains(document.activeElement)))) {
        j(false);
      }
    };
    document.addEventListener("keydown", t);
    return () => document.removeEventListener("keydown", t);
  }, [i]);
  r.useEffect(() => {
    if (O.current) {
      return () => {
        if (P.current) {
          P.current.focus({
            preventScroll: true
          });
          P.current = null;
          Y.current = false;
        }
      };
    }
  }, [O.current]);
  return r.createElement("section", {
    ref: e,
    "aria-label": `${M} ${$}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: true
  }, C.map((e, a) => {
    var n;
    let s;
    let [i, m] = e.split("-");
    if (z.length) {
      return r.createElement("ol", {
        key: e,
        dir: E === "auto" ? w() : E,
        tabIndex: -1,
        ref: O,
        className: u,
        "data-sonner-toaster": true,
        "data-sonner-theme": _,
        "data-y-position": i,
        "data-x-position": m,
        style: {
          "--front-toast-height": `${((n = I[0]) == null ? undefined : n.height) || 0}px`,
          "--width": "356px",
          "--gap": `${k}px`,
          ...v,
          ...(s = {}, [c, f].forEach((t, e) => {
            let a = e === 1;
            let r = a ? "--mobile-offset" : "--offset";
            let n = a ? "16px" : "24px";
            function o(t) {
              ["top", "right", "bottom", "left"].forEach(e => {
                s[`${r}-${e}`] = typeof t == "number" ? `${t}px` : t;
              });
            }
            if (typeof t == "number" || typeof t == "string") {
              o(t);
            } else if (typeof t == "object") {
              ["top", "right", "bottom", "left"].forEach(e => {
                if (t[e] === undefined) {
                  s[`${r}-${e}`] = n;
                } else {
                  s[`${r}-${e}`] = typeof t[e] == "number" ? `${t[e]}px` : t[e];
                }
              });
            } else {
              o(n);
            }
          }), s)
        },
        onBlur: t => {
          if (Y.current && !t.currentTarget.contains(t.relatedTarget)) {
            Y.current = false;
            if (P.current) {
              P.current.focus({
                preventScroll: true
              });
              P.current = null;
            }
          }
        },
        onFocus: t => {
          if (!(t.target instanceof HTMLElement) || t.target.dataset.dismissible !== "false") {
            if (!Y.current) {
              Y.current = true;
              P.current = t.relatedTarget;
            }
          }
        },
        onMouseEnter: () => j(true),
        onMouseMove: () => j(true),
        onMouseLeave: () => {
          if (!A) {
            j(false);
          }
        },
        onDragEnd: () => j(false),
        onPointerDown: t => {
          if (!(t.target instanceof HTMLElement) || t.target.dataset.dismissible !== "false") {
            D(true);
          }
        },
        onPointerUp: () => D(false)
      }, z.filter(t => !t.position && a === 0 || t.position === e).map((a, n) => {
        return r.createElement(y, {
          key: a.id,
          icons: S,
          index: n,
          toast: a,
          defaultRichColors: h,
          duration: (x == null ? undefined : x.duration) ?? g,
          className: x == null ? undefined : x.className,
          descriptionClassName: x == null ? undefined : x.descriptionClassName,
          invert: o,
          visibleToasts: b,
          closeButton: (x == null ? undefined : x.closeButton) ?? d,
          interacting: A,
          position: e,
          style: x == null ? undefined : x.style,
          unstyled: x == null ? undefined : x.unstyled,
          classNames: x == null ? undefined : x.classNames,
          cancelButtonStyle: x == null ? undefined : x.cancelButtonStyle,
          actionButtonStyle: x == null ? undefined : x.actionButtonStyle,
          closeButtonAriaLabel: x == null ? undefined : x.closeButtonAriaLabel,
          removeToast: V,
          toasts: z.filter(t => t.position == a.position),
          heights: I.filter(t => t.position == a.position),
          setHeights: B,
          expandByDefault: l,
          gap: k,
          expanded: R,
          swipeDirections: t.swipeDirections
        });
      }));
    } else {
      return null;
    }
  }));
});