Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  createMutableActionQueue: function () {
    return v;
  },
  dispatchNavigateAction: function () {
    return R;
  },
  dispatchTraverseAction: function () {
    return E;
  },
  getCurrentAppRouterState: function () {
    return b;
  },
  publicAppRouterInstance: function () {
    return P;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./58040.js");
let l = require("./87712.js");
let o = require("./87849.js");
let i = require("./48636.js");
let s = require("./35485.js");
let c = require("./62211.js");
let f = require("./48909.js");
let d = require("./36815.js");
let p = require("./22192.js");
let h = require("./37548.js");
function y(e, t) {
  if (e.pending !== null) {
    e.pending = e.pending.next;
    if (e.pending !== null) {
      _({
        actionQueue: e,
        action: e.pending,
        setState: t
      });
    }
  } else if (e.needsRefresh) {
    e.needsRefresh = false;
    e.dispatch({
      type: a.ACTION_REFRESH,
      origin: window.location.origin
    }, t);
  }
}
async function _({
  actionQueue: e,
  action: t,
  setState: r
}) {
  let n = e.state;
  e.pending = t;
  let u = t.payload;
  let l = e.action(n, u);
  function o(n) {
    if (t.discarded) {
      if (t.payload.type === a.ACTION_SERVER_ACTION && t.payload.didRevalidate) {
        e.needsRefresh = true;
      }
      y(e, r);
      return;
    }
    e.state = n;
    y(e, r);
    t.resolve(n);
  }
  if ((0, i.isThenable)(l)) {
    l.then(o, n => {
      y(e, r);
      t.reject(n);
    });
  } else {
    o(l);
  }
}
let g = null;
function v(e, t) {
  let r = {
    state: e,
    dispatch: (e, t) => function (e, t, r) {
      let n = {
        resolve: r,
        reject: () => {}
      };
      if (t.type !== a.ACTION_RESTORE) {
        let e = new Promise((e, t) => {
          n = {
            resolve: e,
            reject: t
          };
        });
        (0, o.startTransition)(() => {
          r(e);
        });
      }
      let u = {
        payload: t,
        next: null,
        resolve: n.resolve,
        reject: n.reject
      };
      if (e.pending === null) {
        e.last = u;
        _({
          actionQueue: e,
          action: u,
          setState: r
        });
      } else if (t.type === a.ACTION_NAVIGATE || t.type === a.ACTION_RESTORE) {
        e.pending.discarded = true;
        u.next = e.pending.next;
        _({
          actionQueue: e,
          action: u,
          setState: r
        });
      } else {
        if (e.last !== null) {
          e.last.next = u;
        }
        e.last = u;
      }
    }(r, e, t),
    action: async (e, t) => (0, l.reducer)(e, t),
    pending: null,
    last: null,
    onRouterTransitionStart: t !== null && typeof t.onRouterTransitionStart == "function" ? t.onRouterTransitionStart : null
  };
  if (g !== null) {
    throw Object.defineProperty(Error("Internal Next.js Error: createMutableActionQueue was called more than once"), "__NEXT_ERROR_CODE", {
      value: "E624",
      enumerable: false,
      configurable: true
    });
  }
  g = r;
  return r;
}
function b() {
  if (g !== null) {
    return g.state;
  } else {
    return null;
  }
}
function m() {
  if (g !== null) {
    return g.onRouterTransitionStart;
  } else {
    return null;
  }
}
function R(e, t, r, n) {
  let u = new URL((0, d.addBasePath)(e), location.href);
  (0, h.setLinkForCurrentNavigation)(n);
  let l = m();
  if (l !== null) {
    l(e, t);
  }
  (0, f.dispatchAppRouterAction)({
    type: a.ACTION_NAVIGATE,
    url: u,
    isExternalUrl: (0, p.isExternalURL)(u),
    locationSearch: location.search,
    shouldScroll: r,
    navigateType: t
  });
}
function E(e, t) {
  let r = m();
  if (r !== null) {
    r(e, "traverse");
  }
  (0, f.dispatchAppRouterAction)({
    type: a.ACTION_RESTORE,
    url: new URL(e),
    historyState: t
  });
}
let P = {
  back: () => window.history.back(),
  forward: () => window.history.forward(),
  prefetch: (e, t) => {
    let r;
    let n = function () {
      if (g === null) {
        throw Object.defineProperty(Error("Internal Next.js error: Router action dispatched before initialization."), "__NEXT_ERROR_CODE", {
          value: "E668",
          enumerable: false,
          configurable: true
        });
      }
      return g;
    }();
    switch (t?.kind ?? a.PrefetchKind.AUTO) {
      case a.PrefetchKind.AUTO:
        r = s.FetchStrategy.PPR;
        break;
      case a.PrefetchKind.FULL:
        r = s.FetchStrategy.Full;
        break;
      case a.PrefetchKind.TEMPORARY:
        return;
      default:
        r = s.FetchStrategy.PPR;
    }
    (0, c.prefetch)(e, n.state.nextUrl, n.state.tree, r, t?.onInvalidate ?? null);
  },
  replace: (e, t) => {
    (0, o.startTransition)(() => {
      R(e, "replace", t?.scroll ?? true, null);
    });
  },
  push: (e, t) => {
    (0, o.startTransition)(() => {
      R(e, "push", t?.scroll ?? true, null);
    });
  },
  refresh: () => {
    (0, o.startTransition)(() => {
      (0, f.dispatchAppRouterAction)({
        type: a.ACTION_REFRESH,
        origin: window.location.origin
      });
    });
  },
  hmrRefresh: () => {
    throw Object.defineProperty(Error("hmrRefresh can only be used in development mode. Please use refresh instead."), "__NEXT_ERROR_CODE", {
      value: "E485",
      enumerable: false,
      configurable: true
    });
  }
};
if (window.next) {
  window.next.router = P;
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}