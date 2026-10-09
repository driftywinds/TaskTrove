var n = require("./81497.js");
var i = require("./86832.js");
var a = require("./40117.js");
var o = require("./18411.js");
function s(e) {
  return Math.min(2 ** e * 1000, 30000);
}
export function v_(e) {
  return (e ?? "online") !== "online" || i.t.isOnline();
}
export var cc = class extends Error {
  constructor(e) {
    super("CancelledError");
    this.revert = e?.revert;
    this.silent = e?.silent;
  }
};
export function II(e) {
  let t;
  let r = false;
  let c = 0;
  let d = (0, a.T)();
  let f = () => d.status !== "pending";
  let h = () => n.m.isFocused() && (e.networkMode === "always" || i.t.isOnline()) && e.canRun();
  let p = () => v_(e.networkMode) && e.canRun();
  let m = e => {
    if (!f()) {
      t?.();
      d.resolve(e);
    }
  };
  let y = e => {
    if (!f()) {
      t?.();
      d.reject(e);
    }
  };
  let g = () => new Promise(r => {
    t = e => {
      if (f() || h()) {
        r(e);
      }
    };
    e.onPause?.();
  }).then(() => {
    t = undefined;
    if (!f()) {
      e.onContinue?.();
    }
  });
  let b = () => {
    let t;
    if (f()) {
      return;
    }
    let n = c === 0 ? e.initialPromise : undefined;
    try {
      t = n ?? e.fn();
    } catch (e) {
      t = Promise.reject(e);
    }
    Promise.resolve(t).then(m).catch(t => {
      if (f()) {
        return;
      }
      let n = e.retry ?? !o.S$ * 3;
      let i = e.retryDelay ?? s;
      let a = typeof i == "function" ? i(c, t) : i;
      let u = n === true || typeof n == "number" && c < n || typeof n == "function" && n(c, t);
      if (r || !u) {
        y(t);
      } else {
        c++;
        e.onFail?.(c, t);
        (0, o.yy)(a).then(() => h() ? undefined : g()).then(() => {
          if (r) {
            y(t);
          } else {
            b();
          }
        });
      }
    });
  };
  return {
    promise: d,
    status: () => d.status,
    cancel: t => {
      if (!f()) {
        let r = new cc(t);
        y(r);
        e.onCancel?.(r);
      }
    },
    continue: () => {
      t?.();
      return d;
    },
    cancelRetry: () => {
      r = true;
    },
    continueRetry: () => {
      r = false;
    },
    canStart: p,
    start: () => {
      if (p()) {
        b();
      } else {
        g().then(b);
      }
      return d;
    }
  };
}