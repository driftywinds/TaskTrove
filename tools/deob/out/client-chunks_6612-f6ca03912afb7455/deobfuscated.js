"use strict";

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6612], {
  13563: (e, t, r) => {
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var n = {
      formatUrl: function () {
        return i;
      },
      formatWithValidation: function () {
        return c;
      },
      urlObjectKeys: function () {
        return l;
      }
    };
    for (var o in n) {
      Object.defineProperty(t, o, {
        enumerable: true,
        get: n[o]
      });
    }
    let u = r(38035)._(r(63489));
    let a = /https?|ftp|gopher|file/;
    function i(e) {
      let {
        auth: t,
        hostname: r
      } = e;
      let n = e.protocol || "";
      let o = e.pathname || "";
      let i = e.hash || "";
      let l = e.query || "";
      let c = false;
      t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "";
      if (e.host) {
        c = t + e.host;
      } else if (r) {
        c = t + (~r.indexOf(":") ? `[${r}]` : r);
        if (e.port) {
          c += ":" + e.port;
        }
      }
      if (l && typeof l == "object") {
        l = String(u.urlQueryToSearchParams(l));
      }
      let f = e.search || l && `?${l}` || "";
      if (n && !n.endsWith(":")) {
        n += ":";
      }
      if (e.slashes || (!n || a.test(n)) && c !== false) {
        c = "//" + (c || "");
        if (o && o[0] !== "/") {
          o = "/" + o;
        }
      } else {
        c ||= "";
      }
      if (i && i[0] !== "#") {
        i = "#" + i;
      }
      if (f && f[0] !== "?") {
        f = "?" + f;
      }
      o = o.replace(/[?#]/g, encodeURIComponent);
      f = f.replace("#", "%23");
      return `${n}${c}${o}${f}${i}`;
    }
    let l = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
    function c(e) {
      return i(e);
    }
  },
  36052: (e, t, r) => {
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    Object.defineProperty(t, "useMergedRef", {
      enumerable: true,
      get: function () {
        return o;
      }
    });
    let n = r(87849);
    function o(e, t) {
      let r = (0, n.useRef)(null);
      let o = (0, n.useRef)(null);
      return (0, n.useCallback)(n => {
        if (n === null) {
          let e = r.current;
          if (e) {
            r.current = null;
            e();
          }
          let t = o.current;
          if (t) {
            o.current = null;
            t();
          }
        } else {
          if (e) {
            r.current = u(e, n);
          }
          if (t) {
            o.current = u(t, n);
          }
        }
      }, [e, t]);
    }
    function u(e, t) {
      if (typeof e != "function") {
        e.current = t;
        return () => {
          e.current = null;
        };
      }
      {
        let r = e(t);
        if (typeof r == "function") {
          return r;
        } else {
          return () => e(null);
        }
      }
    }
    if ((typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && t.default.__esModule === undefined) {
      Object.defineProperty(t.default, "__esModule", {
        value: true
      });
      Object.assign(t.default, t);
      e.exports = t.default;
    }
  },
  36612: (e, t, r) => {
    Object.defineProperty(t, "__esModule", {
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
      Object.defineProperty(t, o, {
        enumerable: true,
        get: n[o]
      });
    }
    let u = r(38035);
    let a = r(8349);
    let i = u._(r(87849));
    let l = r(13563);
    let c = r(21405);
    let f = r(36052);
    let s = r(55401);
    let p = r(36815);
    r(44692);
    let d = r(37548);
    let h = r(70238);
    let y = r(35485);
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
                } = r(28076);
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
    r(83314);
    let b = (0, i.createContext)(d.IDLE_LINK_STATUS);
    let v = () => (0, i.useContext)(b);
    if ((typeof t.default == "function" || typeof t.default == "object" && t.default !== null) && t.default.__esModule === undefined) {
      Object.defineProperty(t.default, "__esModule", {
        value: true
      });
      Object.assign(t.default, t);
      e.exports = t.default;
    }
  },
  55401: (e, t) => {
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = {
      DecodeError: function () {
        return g;
      },
      MiddlewareNotFoundError: function () {
        return P;
      },
      MissingStaticPage: function () {
        return v;
      },
      NormalizeError: function () {
        return m;
      },
      PageNotFoundError: function () {
        return b;
      },
      SP: function () {
        return h;
      },
      ST: function () {
        return y;
      },
      WEB_VITALS: function () {
        return o;
      },
      execOnce: function () {
        return u;
      },
      getDisplayName: function () {
        return f;
      },
      getLocationOrigin: function () {
        return l;
      },
      getURL: function () {
        return c;
      },
      isAbsoluteUrl: function () {
        return i;
      },
      isResSent: function () {
        return s;
      },
      loadGetInitialProps: function () {
        return d;
      },
      normalizeRepeatedSlashes: function () {
        return p;
      },
      stringifyError: function () {
        return _;
      }
    };
    for (var n in r) {
      Object.defineProperty(t, n, {
        enumerable: true,
        get: r[n]
      });
    }
    let o = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function u(e) {
      let t;
      let r = false;
      return (...n) => {
        if (!r) {
          r = true;
          t = e(...n);
        }
        return t;
      };
    }
    let a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
    let i = e => a.test(e);
    function l() {
      let {
        protocol: e,
        hostname: t,
        port: r
      } = window.location;
      return `${e}//${t}${r ? ":" + r : ""}`;
    }
    function c() {
      let {
        href: e
      } = window.location;
      let t = l();
      return e.substring(t.length);
    }
    function f(e) {
      if (typeof e == "string") {
        return e;
      } else {
        return e.displayName || e.name || "Unknown";
      }
    }
    function s(e) {
      return e.finished || e.headersSent;
    }
    function p(e) {
      let t = e.split("?");
      return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "");
    }
    async function d(e, t) {
      let r = t.res || t.ctx && t.ctx.res;
      if (!e.getInitialProps) {
        if (t.ctx && t.Component) {
          return {
            pageProps: await d(t.Component, t.ctx)
          };
        } else {
          return {};
        }
      }
      let n = await e.getInitialProps(t);
      if (r && s(r)) {
        return n;
      }
      if (!n) {
        throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`), "__NEXT_ERROR_CODE", {
          value: "E394",
          enumerable: false,
          configurable: true
        });
      }
      return n;
    }
    let h = typeof performance != "undefined";
    let y = h && ["mark", "measure", "getEntriesByName"].every(e => typeof performance[e] == "function");
    class g extends Error {}
    class m extends Error {}
    class b extends Error {
      constructor(e) {
        super();
        this.code = "ENOENT";
        this.name = "PageNotFoundError";
        this.message = `Cannot find module for page: ${e}`;
      }
    }
    class v extends Error {
      constructor(e, t) {
        super();
        this.message = `Failed to load static file for page: ${e} ${t}`;
      }
    }
    class P extends Error {
      constructor() {
        super();
        this.code = "ENOENT";
        this.message = "Cannot find the middleware module";
      }
    }
    function _(e) {
      return JSON.stringify({
        message: e.message,
        stack: e.stack
      });
    }
  },
  63489: (e, t) => {
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    var r = {
      assign: function () {
        return i;
      },
      searchParamsToUrlQuery: function () {
        return o;
      },
      urlQueryToSearchParams: function () {
        return a;
      }
    };
    for (var n in r) {
      Object.defineProperty(t, n, {
        enumerable: true,
        get: r[n]
      });
    }
    function o(e) {
      let t = {};
      for (let [r, n] of e.entries()) {
        let e = t[r];
        if (e === undefined) {
          t[r] = n;
        } else if (Array.isArray(e)) {
          e.push(n);
        } else {
          t[r] = [e, n];
        }
      }
      return t;
    }
    function u(e) {
      if (typeof e == "string") {
        return e;
      } else if ((typeof e != "number" || isNaN(e)) && typeof e != "boolean") {
        return "";
      } else {
        return String(e);
      }
    }
    function a(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e)) {
        if (Array.isArray(n)) {
          for (let e of n) {
            t.append(r, u(e));
          }
        } else {
          t.set(r, u(n));
        }
      }
      return t;
    }
    function i(e, ...t) {
      for (let r of t) {
        for (let t of r.keys()) {
          e.delete(t);
        }
        for (let [t, n] of r.entries()) {
          e.append(t, n);
        }
      }
      return e;
    }
  },
  70238: (e, t, r) => {
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    Object.defineProperty(t, "isLocalURL", {
      enumerable: true,
      get: function () {
        return u;
      }
    });
    let n = r(55401);
    let o = r(15200);
    function u(e) {
      if (!(0, n.isAbsoluteUrl)(e)) {
        return true;
      }
      try {
        let t = (0, n.getLocationOrigin)();
        let r = new URL(e, t);
        return r.origin === t && (0, o.hasBasePath)(r.pathname);
      } catch (e) {
        return false;
      }
    }
  },
  83314: (e, t) => {
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    Object.defineProperty(t, "errorOnce", {
      enumerable: true,
      get: function () {
        return r;
      }
    });
    let r = e => {};
  }
}]);