Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  default: function () {
    return m;
  },
  useLinkStatus: function () {
    return v;
  }
};
for (var o in n) {
  Object.defineProperty(exports, o, {
    enumerable: true,
    get: n[o]
  });
}
let u = require(/*webcrack:missing*/"./38035.js");
let a = require(/*webcrack:missing*/"./8349.js");
let i = u._(require(/*webcrack:missing*/"./87849.js"));
let l = require("./13563.js");
let c = require(/*webcrack:missing*/"./21405.js");
let f = require("./36052.js");
let s = require("./55401.js");
let p = require(/*webcrack:missing*/"./36815.js");
require(/*webcrack:missing*/"./44692.js");
let d = require(/*webcrack:missing*/"./37548.js");
let h = require("./70238.js");
let y = require(/*webcrack:missing*/"./35485.js");
function g(e) {
  if (typeof e == "string") {
    return e;
  } else {
    return (0, l.formatUrl)(e);
  }
}
function m(e) {
  var t;
  let n;
  let o;
  let u;
  let [l, m] = (0, i.useOptimistic)(d.IDLE_LINK_STATUS);
  let v = (0, i.useRef)(null);
  let {
    href: P,
    as: _,
    children: E,
    prefetch: O = null,
    passHref: j,
    replace: S,
    shallow: C,
    scroll: T,
    onClick: N,
    onMouseEnter: R,
    onTouchStart: L,
    legacyBehavior: k = false,
    onNavigate: x,
    ref: M,
    unstable_dynamicOnHover: w,
    ...$
  } = e;
  n = E;
  if (k && (typeof n == "string" || typeof n == "number")) {
    n = <a>{n}</a>;
  }
  let A = i.default.useContext(c.AppRouterContext);
  let I = O !== false;
  let U = O !== false ? (t = O) === null || t === "auto" ? y.FetchStrategy.PPR : y.FetchStrategy.Full : y.FetchStrategy.PPR;
  let {
    href: F,
    as: D
  } = i.default.useMemo(() => {
    let e = g(P);
    return {
      href: e,
      as: _ ? g(_) : e
    };
  }, [P, _]);
  if (k) {
    if (n?.$$typeof === Symbol.for("react.lazy")) {
      throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
        value: "E863",
        enumerable: false,
        configurable: true
      });
    }
    o = i.default.Children.only(n);
  }
  let B = k ? o && typeof o == "object" && o.ref : M;
  let K = i.default.useCallback(e => {
    if (A !== null) {
      v.current = (0, d.mountLinkInstance)(e, F, A, U, I, m);
    }
    return () => {
      if (v.current) {
        (0, d.unmountLinkForCurrentNavigation)(v.current);
        v.current = null;
      }
      (0, d.unmountPrefetchableInstance)(e);
    };
  }, [I, F, A, U, m]);
  let z = {
    ref: (0, f.useMergedRef)(K, B),
    onClick(e) {
      if (!k && typeof N == "function") {
        N(e);
      }
      if (k && o.props && typeof o.props.onClick == "function") {
        o.props.onClick(e);
      }
      if (!!A && !e.defaultPrevented) {
        (function (e, t, n, o, u, a, l) {
          {
            let c;
            let {
              nodeName: f
            } = e.currentTarget;
            if (f.toUpperCase() === "A" && ((c = e.currentTarget.getAttribute("target")) && c !== "_self" || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && e.nativeEvent.which === 2) || e.currentTarget.hasAttribute("download")) {
              return;
            }
            if (!(0, h.isLocalURL)(t)) {
              if (u) {
                e.preventDefault();
                location.replace(t);
              }
              return;
            }
            e.preventDefault();
            if (l) {
              let e = false;
              l({
                preventDefault: () => {
                  e = true;
                }
              });
              if (e) {
                return;
              }
            }
            let {
              dispatchNavigateAction: s
            } = require(/*webcrack:missing*/"./28076.js");
            i.default.startTransition(() => {
              s(n || t, u ? "replace" : "push", a ?? true, o.current);
            });
          }
        })(e, F, D, v, S, T, x);
      }
    },
    onMouseEnter(e) {
      if (!k && typeof R == "function") {
        R(e);
      }
      if (k && o.props && typeof o.props.onMouseEnter == "function") {
        o.props.onMouseEnter(e);
      }
      if (A && I) {
        (0, d.onNavigationIntent)(e.currentTarget, w === true);
      }
    },
    onTouchStart: function (e) {
      if (!k && typeof L == "function") {
        L(e);
      }
      if (k && o.props && typeof o.props.onTouchStart == "function") {
        o.props.onTouchStart(e);
      }
      if (A && I) {
        (0, d.onNavigationIntent)(e.currentTarget, w === true);
      }
    }
  };
  if ((0, s.isAbsoluteUrl)(D)) {
    z.href = D;
  } else if (!k || !!j || o.type === "a" && !("href" in o.props)) {
    z.href = (0, p.addBasePath)(D);
  }
  u = k ? i.default.cloneElement(o, z) : <a {...$} {...z}>{n}</a>;
  return <b.Provider value={l}>{u}</b.Provider>;
}
require("./83314.js");
let b = (0, i.createContext)(d.IDLE_LINK_STATUS);
let v = () => (0, i.useContext)(b);
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}