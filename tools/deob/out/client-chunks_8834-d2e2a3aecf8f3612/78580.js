Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  createEmptyCacheNode: function () {
    return A;
  },
  default: function () {
    return L;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./21634.js");
let l = require("./38035.js");
let o = require("./8349.js");
let i = l._(require("./87849.js"));
let s = require("./21405.js");
let c = require("./58040.js");
let f = require("./12877.js");
let d = require("./95900.js");
let p = require("./48909.js");
let h = require("./83086.js");
let y = require("./96968.js");
let _ = require("./1401.js");
let g = require("./35504.js");
let v = require("./8464.js");
let b = require("./15200.js");
let m = require("./29568.js");
let R = require("./28450.js");
let E = require("./28076.js");
let P = require("./20567.js");
let O = require("./80376.js");
let S = require("./37548.js");
let j = a._(require("./10039.js"));
let T = a._(require("./22963.js"));
let M = require("./70612.js");
let w = {};
function C({
  appRouterState: e
}) {
  (0, i.useInsertionEffect)(() => {
    let {
      tree: t,
      pushRef: r,
      canonicalUrl: n,
      renderedSearch: u
    } = e;
    let a = {
      ...(r.preserveCustomHistoryState ? window.history.state : {}),
      __NA: true,
      __PRIVATE_NEXTJS_INTERNALS_TREE: {
        tree: t,
        renderedSearch: u
      }
    };
    if (r.pendingPush && (0, f.createHrefFromUrl)(new URL(window.location.href)) !== n) {
      r.pendingPush = false;
      window.history.pushState(a, "", n);
    } else {
      window.history.replaceState(a, "", n);
    }
  }, [e]);
  (0, i.useEffect)(() => {
    (0, S.pingVisibleLinks)(e.nextUrl, e.tree);
  }, [e.nextUrl, e.tree]);
  return null;
}
function A() {
  return {
    lazyData: null,
    rsc: null,
    prefetchRsc: null,
    head: null,
    prefetchHead: null,
    parallelRoutes: new Map(),
    loading: null,
    navigatedAt: -1
  };
}
function x(e) {
  if (e == null) {
    e = {};
  }
  let t = window.history.state;
  let r = t?.__NA;
  if (r) {
    e.__NA = r;
  }
  let n = t?.__PRIVATE_NEXTJS_INTERNALS_TREE;
  if (n) {
    e.__PRIVATE_NEXTJS_INTERNALS_TREE = n;
  }
  return e;
}
function N({
  headCacheNode: e
}) {
  let t = e !== null ? e.head : null;
  let r = e !== null ? e.prefetchHead : null;
  let n = r !== null ? r : t;
  return (0, i.useDeferredValue)(t, n);
}
function U({
  actionQueue: e,
  globalError: t,
  webSocket: r,
  staticIndicatorState: n
}) {
  let u;
  let a = (0, p.useActionQueue)(e);
  let {
    canonicalUrl: l
  } = a;
  let {
    searchParams: f,
    pathname: R
  } = (0, i.useMemo)(() => {
    let e = new URL(l, window.location.href);
    return {
      searchParams: e.searchParams,
      pathname: (0, b.hasBasePath)(e.pathname) ? (0, v.removeBasePath)(e.pathname) : e.pathname
    };
  }, [l]);
  (0, i.useEffect)(() => {
    function e(e) {
      if (e.persisted && window.history.state?.__PRIVATE_NEXTJS_INTERNALS_TREE) {
        w.pendingMpaPath = undefined;
        (0, p.dispatchAppRouterAction)({
          type: c.ACTION_RESTORE,
          url: new URL(window.location.href),
          historyState: window.history.state.__PRIVATE_NEXTJS_INTERNALS_TREE
        });
      }
    }
    window.addEventListener("pageshow", e);
    return () => {
      window.removeEventListener("pageshow", e);
    };
  }, []);
  (0, i.useEffect)(() => {
    function e(e) {
      let t = "reason" in e ? e.reason : e.error;
      if ((0, O.isRedirectError)(t)) {
        e.preventDefault();
        let r = (0, P.getURLFromRedirectError)(t);
        if ((0, P.getRedirectTypeFromError)(t) === O.RedirectType.push) {
          E.publicAppRouterInstance.push(r, {});
        } else {
          E.publicAppRouterInstance.replace(r, {});
        }
      }
    }
    window.addEventListener("error", e);
    window.addEventListener("unhandledrejection", e);
    return () => {
      window.removeEventListener("error", e);
      window.removeEventListener("unhandledrejection", e);
    };
  }, []);
  let {
    pushRef: S
  } = a;
  if (S.mpaNavigation) {
    if (w.pendingMpaPath !== l) {
      let e = window.location;
      if (S.pendingPush) {
        e.assign(l);
      } else {
        e.replace(l);
      }
      w.pendingMpaPath = l;
    }
    throw g.unresolvedThenable;
  }
  (0, i.useEffect)(() => {
    let e = window.history.pushState.bind(window.history);
    let t = window.history.replaceState.bind(window.history);
    let r = e => {
      let t = window.location.href;
      let r = window.history.state?.__PRIVATE_NEXTJS_INTERNALS_TREE;
      (0, i.startTransition)(() => {
        (0, p.dispatchAppRouterAction)({
          type: c.ACTION_RESTORE,
          url: new URL(e ?? t, t),
          historyState: r
        });
      });
    };
    window.history.pushState = function (t, n, u) {
      if (!t?.__NA && !t?._N) {
        t = x(t);
        if (u) {
          r(u);
        }
      }
      return e(t, n, u);
    };
    window.history.replaceState = function (e, n, u) {
      if (!e?.__NA && !e?._N) {
        e = x(e);
        if (u) {
          r(u);
        }
      }
      return t(e, n, u);
    };
    let n = e => {
      if (e.state) {
        if (!e.state.__NA) {
          window.location.reload();
          return;
        }
        (0, i.startTransition)(() => {
          (0, E.dispatchTraverseAction)(window.location.href, e.state.__PRIVATE_NEXTJS_INTERNALS_TREE);
        });
      }
    };
    window.addEventListener("popstate", n);
    return () => {
      window.history.pushState = e;
      window.history.replaceState = t;
      window.removeEventListener("popstate", n);
    };
  }, []);
  let {
    cache: T,
    tree: A,
    nextUrl: U,
    focusAndScrollRef: L,
    previousNextUrl: I
  } = a;
  let D = (0, i.useMemo)(() => (0, _.findHeadInCache)(T, A[1]), [T, A]);
  let k = (0, i.useMemo)(() => (0, m.getSelectedParams)(A), [A]);
  let H = (0, i.useMemo)(() => ({
    parentTree: A,
    parentCacheNode: T,
    parentSegmentPath: null,
    parentParams: {},
    debugNameContext: "/",
    url: l,
    isActive: true
  }), [A, T, l]);
  let B = (0, i.useMemo)(() => ({
    tree: A,
    focusAndScrollRef: L,
    nextUrl: U,
    previousNextUrl: I
  }), [A, L, U, I]);
  if (D !== null) {
    let [e, t, r] = D;
    u = <N headCacheNode={e} key={t} />;
  } else {
    u = null;
  }
  let $ = <y.RedirectBoundary>{u}<M.RootLayoutBoundary>{T.rsc}</M.RootLayoutBoundary><h.AppRouterAnnouncer tree={A} /></y.RedirectBoundary>;
  $ = <j.default errorComponent={t[0]} errorStyles={t[1]}>{$}</j.default>;
  return <o.Fragment><C appRouterState={a} /><F /><d.NavigationPromisesContext.Provider value={null}><d.PathParamsContext.Provider value={k}><d.PathnameContext.Provider value={R}><d.SearchParamsContext.Provider value={f}><s.GlobalLayoutRouterContext.Provider value={B}><s.AppRouterContext.Provider value={E.publicAppRouterInstance}><s.LayoutRouterContext.Provider value={H}>{$}</s.LayoutRouterContext.Provider></s.AppRouterContext.Provider></s.GlobalLayoutRouterContext.Provider></d.SearchParamsContext.Provider></d.PathnameContext.Provider></d.PathParamsContext.Provider></d.NavigationPromisesContext.Provider></o.Fragment>;
}
function L({
  actionQueue: e,
  globalErrorState: t,
  webSocket: r,
  staticIndicatorState: n
}) {
  (0, R.useNavFailureHandler)();
  let u = <U actionQueue={e} globalError={t} webSocket={r} staticIndicatorState={n} />;
  return <j.default errorComponent={T.default}>{u}</j.default>;
}
let I = new Set();
let D = new Set();
function F() {
  let [, e] = i.default.useState(0);
  let t = I.size;
  (0, i.useEffect)(() => {
    let r = () => e(e => e + 1);
    D.add(r);
    if (t !== I.size) {
      r();
    }
    return () => {
      D.delete(r);
    };
  }, [t, e]);
  return [...I].map((e, t) => <link rel="stylesheet" href={`${e}`} precedence="next" key={t} />);
}
globalThis._N_E_STYLE_LOAD = function (e) {
  let t = I.size;
  I.add(e);
  if (I.size !== t) {
    D.forEach(e => e());
  }
  return Promise.resolve();
};
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}