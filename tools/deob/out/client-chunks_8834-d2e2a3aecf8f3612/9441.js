Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return C;
  }
});
let n = require("./21634.js");
let u = require("./38035.js");
let a = require("./8349.js");
let l = require("./58040.js");
let o = u._(require("./87849.js"));
let i = n._(require("./23164.js"));
let s = require("./21405.js");
let c = require("./36124.js");
let f = require("./35504.js");
let d = require("./70896.js");
let p = require("./80949.js");
let h = require("./88225.js");
let y = require("./96968.js");
let _ = require("./48201.js");
let g = require("./1859.js");
let v = require("./42190.js");
let b = require("./48909.js");
let m = require("./55511.js");
require("./69354.js");
let R = require("./95900.js");
let E = require("./22648.js");
let P = i.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
let O = ["bottom", "height", "left", "right", "top", "width", "x", "y"];
function S(e, t) {
  let r = e.getBoundingClientRect();
  return r.top >= 0 && r.top <= t;
}
class _Component extends o.default.Component {
  componentDidMount() {
    this.handlePotentialScroll();
  }
  componentDidUpdate() {
    if (this.props.focusAndScrollRef.apply) {
      this.handlePotentialScroll();
    }
  }
  render() {
    return this.props.children;
  }
  constructor(...e) {
    super(...e);
    this.handlePotentialScroll = () => {
      let {
        focusAndScrollRef: e,
        segmentPath: t
      } = this.props;
      if (e.apply) {
        if (e.segmentPaths.length !== 0 && !e.segmentPaths.some(e => t.every((t, r) => (0, p.matchSegment)(t, e[r])))) {
          return;
        }
        let r = null;
        let n = e.hashFragment;
        if (n) {
          r = n === "top" ? document.body : document.getElementById(n) ?? document.getElementsByName(n)[0];
        }
        r ||= (0, P.findDOMNode)(this);
        if (!(r instanceof Element)) {
          return;
        }
        while (!(r instanceof HTMLElement) || function (e) {
          if (["sticky", "fixed"].includes(getComputedStyle(e).position)) {
            return true;
          }
          let t = e.getBoundingClientRect();
          return O.every(e => t[e] === 0);
        }(r)) {
          if (r.nextElementSibling === null) {
            return;
          }
          r = r.nextElementSibling;
        }
        e.apply = false;
        e.hashFragment = null;
        e.segmentPaths = [];
        (0, h.disableSmoothScrollDuringRouteTransition)(() => {
          if (n) {
            r.scrollIntoView();
            return;
          }
          let e = document.documentElement;
          let t = e.clientHeight;
          if (!S(r, t)) {
            e.scrollTop = 0;
            if (!S(r, t)) {
              r.scrollIntoView();
            }
          }
        }, {
          dontForceLayout: true,
          onlyHashChange: e.onlyHashChange
        });
        e.onlyHashChange = false;
        r.focus();
      }
    };
  }
}
function T({
  segmentPath: e,
  children: t
}) {
  let r = (0, o.useContext)(s.GlobalLayoutRouterContext);
  if (!r) {
    throw Object.defineProperty(Error("invariant global layout router not mounted"), "__NEXT_ERROR_CODE", {
      value: "E473",
      enumerable: false,
      configurable: true
    });
  }
  return <_Component segmentPath={e} focusAndScrollRef={r.focusAndScrollRef}>{t}</_Component>;
}
function M({
  tree: e,
  segmentPath: t,
  debugNameContext: r,
  cacheNode: n,
  params: u,
  url: i,
  isActive: d
}) {
  let h = (0, o.useContext)(s.GlobalLayoutRouterContext);
  (0, o.useContext)(R.NavigationPromisesContext);
  if (!h) {
    throw Object.defineProperty(Error("invariant global layout router not mounted"), "__NEXT_ERROR_CODE", {
      value: "E473",
      enumerable: false,
      configurable: true
    });
  }
  let {
    tree: y
  } = h;
  let _ = n.prefetchRsc !== null ? n.prefetchRsc : n.rsc;
  let g = (0, o.useDeferredValue)(n.rsc, _);
  let m = typeof g == "object" && g !== null && typeof g.then == "function" ? (0, o.use)(g) : g;
  if (!m) {
    if (d) {
      let e = n.lazyData;
      if (e === null) {
        let r = function e(t, r) {
          if (t) {
            let [n, u] = t;
            let a = t.length === 2;
            if ((0, p.matchSegment)(r[0], n) && r[1].hasOwnProperty(u)) {
              if (a) {
                let t = e(undefined, r[1][u]);
                return [r[0], {
                  ...r[1],
                  [u]: [t[0], t[1], t[2], "refetch"]
                }];
              }
              return [r[0], {
                ...r[1],
                [u]: e(t.slice(2), r[1][u])
              }];
            }
          }
          return r;
        }(["", ...t], y);
        let u = (0, v.hasInterceptionRouteInCurrentTree)(y);
        let a = Date.now();
        n.lazyData = e = (0, c.fetchServerResponse)(new URL(i, location.origin), {
          flightRouterState: r,
          nextUrl: u ? h.previousNextUrl || h.nextUrl : null
        }).then(e => {
          (0, o.startTransition)(() => {
            (0, b.dispatchAppRouterAction)({
              type: l.ACTION_SERVER_PATCH,
              previousTree: y,
              serverResponse: e,
              navigatedAt: a
            });
          });
          return e;
        });
        (0, o.use)(e);
      }
    }
    (0, o.use)(f.unresolvedThenable);
  }
  return <s.LayoutRouterContext.Provider value={{
    parentTree: e,
    parentCacheNode: n,
    parentSegmentPath: t,
    parentParams: u,
    debugNameContext: r,
    url: i,
    isActive: d
  }}>{m}</s.LayoutRouterContext.Provider>;
}
function _Component2({
  name: e,
  loading: t,
  children: r
}) {
  let n;
  if (n = typeof t == "object" && t !== null && typeof t.then == "function" ? (0, o.use)(t) : t) {
    let t = n[0];
    let u = n[1];
    let l = n[2];
    return <o.Suspense name={e} fallback={<a.Fragment>{u}{l}{t}</a.Fragment>}>{r}</o.Suspense>;
  }
  return <a.Fragment>{r}</a.Fragment>;
}
function C({
  parallelRouterKey: e,
  error: t,
  errorStyles: r,
  errorScripts: n,
  templateStyles: u,
  templateScripts: l,
  template: i,
  notFound: c,
  forbidden: f,
  unauthorized: p,
  segmentViewBoundaries: h
}) {
  let v = (0, o.useContext)(s.LayoutRouterContext);
  if (!v) {
    throw Object.defineProperty(Error("invariant expected layout router to be mounted"), "__NEXT_ERROR_CODE", {
      value: "E56",
      enumerable: false,
      configurable: true
    });
  }
  let {
    parentTree: b,
    parentCacheNode: R,
    parentSegmentPath: P,
    parentParams: O,
    url: S,
    isActive: j,
    debugNameContext: C
  } = v;
  let A = R.parallelRoutes;
  let x = A.get(e);
  if (!x) {
    x = new Map();
    A.set(e, x);
  }
  let N = b[0];
  let U = P === null ? [e] : P.concat([N, e]);
  let L = b[1][e];
  let I = L[0];
  let D = (0, g.createRouterCacheKey)(I, true);
  let F = (0, m.useRouterBFCache)(L, D);
  let k = [];
  do {
    let e = F.tree;
    let o = F.stateKey;
    let h = e[0];
    let v = (0, g.createRouterCacheKey)(h);
    let b = x.get(v);
    if (b === undefined) {
      let e = {
        lazyData: null,
        rsc: null,
        prefetchRsc: null,
        head: null,
        prefetchHead: null,
        parallelRoutes: new Map(),
        loading: null,
        navigatedAt: -1
      };
      b = e;
      x.set(v, e);
    }
    let m = O;
    if (Array.isArray(h)) {
      let e = h[0];
      let t = h[1];
      let r = h[2];
      let n = (0, E.getParamValueFromCacheKey)(t, r);
      if (n !== null) {
        m = {
          ...O,
          [e]: n
        };
      }
    }
    let P = function (e) {
      if (e === "/") {
        return "/";
      }
      if (typeof e == "string") {
        if (e === "(slot)") {
          return;
        } else {
          return e + "/";
        }
      }
      return e[1] + "/";
    }(h);
    let A = P ?? C;
    let N = P === undefined ? undefined : C;
    let L = R.loading;
    let I = <s.TemplateContext.Provider value={<T segmentPath={U}><d.ErrorBoundary errorComponent={t} errorStyles={r} errorScripts={n}><_Component2 name={N} loading={L}><_.HTTPAccessFallbackBoundary notFound={c} forbidden={f} unauthorized={p}><y.RedirectBoundary><M url={S} tree={e} params={m} cacheNode={b} segmentPath={U} debugNameContext={A} isActive={j && o === D} />{null}</y.RedirectBoundary></_.HTTPAccessFallbackBoundary></_Component2></d.ErrorBoundary>{null}</T>} key={o}>{u}{l}{i}</s.TemplateContext.Provider>;
    k.push(I);
    F = F.next;
  } while (F !== null);
  return k;
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}