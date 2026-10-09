Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  createKey: function () {
    return q;
  },
  default: function () {
    return V;
  },
  matchesMiddleware: function () {
    return $;
  }
};
for (var a in n) {
  Object.defineProperty(exports, a, {
    enumerable: true,
    get: n[a]
  });
}
let o = require("./34007.js");
let i = require("./26908.js");
let s = require("./97616.js");
let u = require("./63898.js");
let l = require("./51322.js");
let c = i._(require("./56834.js"));
let f = require("./18541.js");
let d = require("./53328.js");
let p = o._(require("./31057.js"));
let h = require("./58492.js");
let _ = require("./74325.js");
let m = require("./45367.js");
let g = require("./28073.js");
let E = require("./45176.js");
let y = require("./46286.js");
require("./96030.js");
let b = require("./73004.js");
let P = require("./46785.js");
let R = require("./7230.js");
let v = require("./87263.js");
let O = require("./91338.js");
let S = require("./47161.js");
let T = require("./87731.js");
let j = require("./33192.js");
let A = require("./87525.js");
let x = require("./51142.js");
let w = require("./67433.js");
let N = require("./59691.js");
let C = require("./55569.js");
let I = require("./61000.js");
let M = require("./70643.js");
let L = require("./4010.js");
let D = require("./27438.js");
function U() {
  return Object.assign(Object.defineProperty(Error("Route Cancelled"), "__NEXT_ERROR_CODE", {
    value: "E315",
    enumerable: false,
    configurable: true
  }), {
    cancelled: true
  });
}
async function $(e) {
  let t = await Promise.resolve(e.router.pageLoader.getMiddleware());
  if (!t) {
    return false;
  }
  let {
    pathname: r
  } = (0, b.parsePath)(e.asPath);
  let n = (0, S.hasBasePath)(r) ? (0, v.removeBasePath)(r) : r;
  let a = (0, O.addBasePath)((0, P.addLocale)(n, e.locale));
  return t.some(e => new RegExp(e.regexp).test(a));
}
function F(e) {
  let t = (0, h.getLocationOrigin)();
  if (e.startsWith(t)) {
    return e.substring(t.length);
  } else {
    return e;
  }
}
function k(e, t, r) {
  let [n, a] = (0, T.resolveHref)(e, t, true);
  let o = (0, h.getLocationOrigin)();
  let i = n.startsWith(o);
  let s = a && a.startsWith(o);
  n = F(n);
  a = a ? F(a) : a;
  let u = i ? n : (0, O.addBasePath)(n);
  let l = r ? F((0, T.resolveHref)(e, r)) : a || n;
  return {
    url: u,
    as: s ? l : (0, O.addBasePath)(l)
  };
}
function B(e, t) {
  let r = (0, s.removeTrailingSlash)((0, f.denormalizePagePath)(e));
  if (r === "/404" || r === "/_error") {
    return e;
  } else {
    if (!t.includes(r)) {
      t.some(t => {
        if ((0, _.isDynamicRoute)(t) && (0, E.getRouteRegex)(t).re.test(r)) {
          e = t;
          return true;
        }
      });
    }
    return (0, s.removeTrailingSlash)(e);
  }
}
async function H(e) {
  if (!(await $(e)) || !e.fetchData) {
    return null;
  }
  let t = await e.fetchData();
  let r = await function (e, t, r) {
    let n = {
      basePath: r.router.basePath,
      i18n: {
        locales: r.router.locales
      },
      trailingSlash: false
    };
    let a = t.headers.get("x-nextjs-rewrite");
    let o = a || t.headers.get("x-nextjs-matched-path");
    let i = t.headers.get(D.MATCHED_PATH_HEADER);
    if (!!i && !o && !i.includes("__next_data_catchall") && !i.includes("/_error") && !i.includes("/404")) {
      o = i;
    }
    if (o) {
      if (o.startsWith("/")) {
        let t = (0, m.parseRelativeUrl)(o);
        let i = (0, A.getNextPathnameInfo)(t.pathname, {
          nextConfig: n,
          parseData: true
        });
        let l = (0, s.removeTrailingSlash)(i.pathname);
        return Promise.all([r.router.pageLoader.getPageList(), (0, u.getClientBuildManifest)()]).then(([o, {
          __rewrites: s
        }]) => {
          let u = (0, P.addLocale)(i.pathname, i.locale);
          if ((0, _.isDynamicRoute)(u) || !a && o.includes((0, d.normalizeLocalePath)((0, v.removeBasePath)(u), r.router.locales).pathname)) {
            let r = (0, A.getNextPathnameInfo)((0, m.parseRelativeUrl)(e).pathname, {
              nextConfig: n,
              parseData: true
            });
            t.pathname = u = (0, O.addBasePath)(r.pathname);
          }
          if (!o.includes(l)) {
            let e = B(l, o);
            if (e !== l) {
              l = e;
            }
          }
          let c = o.includes(l) ? l : B((0, d.normalizeLocalePath)((0, v.removeBasePath)(t.pathname), r.router.locales).pathname, o);
          if ((0, _.isDynamicRoute)(c)) {
            let e = (0, g.getRouteMatcher)((0, E.getRouteRegex)(c))(u);
            Object.assign(t.query, e || {});
          }
          return {
            type: "rewrite",
            parsedAs: t,
            resolvedHref: c
          };
        });
      }
      let t = (0, b.parsePath)(e);
      let i = (0, x.formatNextPathnameInfo)({
        ...(0, A.getNextPathnameInfo)(t.pathname, {
          nextConfig: n,
          parseData: true
        }),
        defaultLocale: r.router.defaultLocale,
        buildId: ""
      });
      return Promise.resolve({
        type: "redirect-external",
        destination: `${i}${t.query}${t.hash}`
      });
    }
    let l = t.headers.get("x-nextjs-redirect");
    if (l) {
      if (l.startsWith("/")) {
        let e = (0, b.parsePath)(l);
        let t = (0, x.formatNextPathnameInfo)({
          ...(0, A.getNextPathnameInfo)(e.pathname, {
            nextConfig: n,
            parseData: true
          }),
          defaultLocale: r.router.defaultLocale,
          buildId: ""
        });
        return Promise.resolve({
          type: "redirect-internal",
          newAs: `${t}${e.query}${e.hash}`,
          newUrl: `${t}${e.query}${e.hash}`
        });
      }
      return Promise.resolve({
        type: "redirect-external",
        destination: l
      });
    }
    return Promise.resolve({
      type: "next"
    });
  }(t.dataHref, t.response, e);
  return {
    dataHref: t.dataHref,
    json: t.json,
    response: t.response,
    text: t.text,
    cacheKey: t.cacheKey,
    effect: r
  };
}
let W = Symbol("SSG_DATA_NOT_FOUND");
function X(e) {
  try {
    return JSON.parse(e);
  } catch (e) {
    return null;
  }
}
function G({
  dataHref: e,
  inflightCache: t,
  isPrefetch: r,
  hasMiddleware: n,
  isServerRender: a,
  parseJSON: o,
  persistCache: i,
  isBackground: s,
  unstable_skipClientCache: l
}) {
  let {
    href: c
  } = new URL(e, window.location.href);
  let f = s => function e(t, r, n) {
    return fetch(t, {
      credentials: "same-origin",
      method: n.method || "GET",
      headers: Object.assign({}, n.headers, {
        "x-nextjs-data": "1"
      })
    }).then(a => !a.ok && r > 1 && a.status >= 500 ? e(t, r - 1, n) : a);
  }(e, a ? 3 : 1, {
    headers: Object.assign({}, r ? {
      purpose: "prefetch"
    } : {}, r && n ? {
      "x-middleware-prefetch": "1"
    } : {}, {}),
    method: s?.method ?? "GET"
  }).then(t => t.ok && s?.method === "HEAD" ? {
    dataHref: e,
    response: t,
    text: "",
    json: {},
    cacheKey: c
  } : t.text().then(r => {
    if (!t.ok) {
      if (n && [301, 302, 307, 308].includes(t.status)) {
        return {
          dataHref: e,
          response: t,
          text: r,
          json: {},
          cacheKey: c
        };
      }
      if (t.status === 404 && X(r)?.notFound) {
        return {
          dataHref: e,
          json: {
            notFound: W
          },
          response: t,
          text: r,
          cacheKey: c
        };
      }
      let o = Object.defineProperty(Error("Failed to load static props"), "__NEXT_ERROR_CODE", {
        value: "E124",
        enumerable: false,
        configurable: true
      });
      if (!a) {
        (0, u.markAssetError)(o);
      }
      throw o;
    }
    return {
      dataHref: e,
      json: o ? X(r) : null,
      response: t,
      text: r,
      cacheKey: c
    };
  })).then(e => {
    if (!i || e.response.headers.get("x-middleware-cache") === "no-cache") {
      delete t[c];
    }
    return e;
  }).catch(e => {
    if (!l) {
      delete t[c];
    }
    if (e.message === "Failed to fetch" || e.message === "NetworkError when attempting to fetch resource." || e.message === "Load failed") {
      (0, u.markAssetError)(e);
    }
    throw e;
  });
  if (l && i) {
    return f({}).then(e => {
      if (e.response.headers.get("x-middleware-cache") !== "no-cache") {
        t[c] = Promise.resolve(e);
      }
      return e;
    });
  } else if (t[c] !== undefined) {
    return t[c];
  } else {
    return t[c] = f(s ? {
      method: "HEAD"
    } : {});
  }
}
function q() {
  return Math.random().toString(36).slice(2, 10);
}
function z({
  url: e,
  router: t
}) {
  if (e === (0, O.addBasePath)((0, P.addLocale)(t.asPath, t.locale))) {
    throw Object.defineProperty(Error(`Invariant: attempted to hard navigate to the same URL ${e} ${location.href}`), "__NEXT_ERROR_CODE", {
      value: "E282",
      enumerable: false,
      configurable: true
    });
  }
  window.location.href = e;
}
let Y = ({
  route: e,
  router: t
}) => {
  let r = false;
  let n = t.clc = () => {
    r = true;
  };
  return () => {
    if (r) {
      let t = Object.defineProperty(Error(`Abort fetching component for route: "${e}"`), "__NEXT_ERROR_CODE", {
        value: "E483",
        enumerable: false,
        configurable: true
      });
      t.cancelled = true;
      throw t;
    }
    if (n === t.clc) {
      t.clc = null;
    }
  };
};
class V {
  static {
    this.events = (0, p.default)();
  }
  constructor(e, t, r, {
    initialProps: n,
    pageLoader: a,
    App: o,
    wrapApp: i,
    Component: u,
    err: l,
    subscription: c,
    isFallback: f,
    locale: d,
    locales: p,
    defaultLocale: g,
    domainLocales: E,
    isPreview: b
  }) {
    this.sdc = {};
    this.sbc = {};
    this.isFirstPopStateEvent = true;
    this._key = q();
    this.onPopState = e => {
      let t;
      let {
        isFirstPopStateEvent: r
      } = this;
      this.isFirstPopStateEvent = false;
      let n = e.state;
      if (!n) {
        let {
          pathname: e,
          query: t
        } = this;
        this.changeState("replaceState", (0, y.formatWithValidation)({
          pathname: (0, O.addBasePath)(e),
          query: t
        }), (0, h.getURL)());
        return;
      }
      if (n.__NA) {
        window.location.reload();
        return;
      }
      if (!n.__N || r && this.locale === n.options.locale && n.as === this.asPath) {
        return;
      }
      let {
        url: a,
        as: o,
        options: i,
        key: s
      } = n;
      this._key = s;
      let {
        pathname: u
      } = (0, m.parseRelativeUrl)(a);
      if (!this.isSsr || o !== (0, O.addBasePath)(this.asPath) || u !== (0, O.addBasePath)(this.pathname)) {
        if (!this._bps || this._bps(n)) {
          this.change("replaceState", a, o, Object.assign({}, i, {
            shallow: i.shallow && this._shallow,
            locale: i.locale || this.defaultLocale,
            _h: 0
          }), t);
        }
      }
    };
    const P = (0, s.removeTrailingSlash)(e);
    this.components = {};
    if (e !== "/_error") {
      this.components[P] = {
        Component: u,
        initial: true,
        props: n,
        err: l,
        __N_SSG: n && n.__N_SSG,
        __N_SSP: n && n.__N_SSP
      };
    }
    this.components["/_app"] = {
      Component: o,
      styleSheets: []
    };
    this.events = V.events;
    this.pageLoader = a;
    const R = (0, _.isDynamicRoute)(e) && self.__NEXT_DATA__.autoExport;
    this.basePath = "";
    this.sub = c;
    this.clc = null;
    this._wrapApp = i;
    this.isSsr = true;
    this.isLocaleDomain = false;
    this.isReady = !!self.__NEXT_DATA__.gssp || !!self.__NEXT_DATA__.gip || !!self.__NEXT_DATA__.isExperimentalCompile || !!self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !R && !self.location.search;
    this.state = {
      route: P,
      pathname: e,
      query: t,
      asPath: R ? e : r,
      isPreview: !!b,
      locale: undefined,
      isFallback: f
    };
    this._initialMatchesMiddlewarePromise = Promise.resolve(false);
    if (!r.startsWith("//")) {
      const n = {
        locale: d
      };
      const a = (0, h.getURL)();
      this._initialMatchesMiddlewarePromise = $({
        router: this,
        locale: d,
        asPath: a
      }).then(o => {
        n._shouldResolveHref = r !== e;
        this.changeState("replaceState", o ? a : (0, y.formatWithValidation)({
          pathname: (0, O.addBasePath)(e),
          query: t
        }), a, n);
        return o;
      });
    }
    window.addEventListener("popstate", this.onPopState);
  }
  reload() {
    window.location.reload();
  }
  back() {
    window.history.back();
  }
  forward() {
    window.history.forward();
  }
  push(e, t, r = {}) {
    ({
      url: e,
      as: t
    } = k(this, e, t));
    return this.change("pushState", e, t, r);
  }
  replace(e, t, r = {}) {
    ({
      url: e,
      as: t
    } = k(this, e, t));
    return this.change("replaceState", e, t, r);
  }
  async _bfl(e, t, n, a) {
    {
      if (!this._bfl_s && !this._bfl_d) {
        let t;
        let o;
        let {
          BloomFilter: i
        } = require("./1355.js");
        try {
          ({
            __routerFilterStatic: t,
            __routerFilterDynamic: o
          } = await (0, u.getClientBuildManifest)());
        } catch (t) {
          console.error(t);
          if (a) {
            return true;
          }
          z({
            url: (0, O.addBasePath)((0, P.addLocale)(e, n || this.locale, this.defaultLocale)),
            router: this
          });
          return new Promise(() => {});
        }
        if (t?.numHashes) {
          this._bfl_s = new i(t.numItems, t.errorRate);
          this._bfl_s.import(t);
        }
        if (o?.numHashes) {
          this._bfl_d = new i(o.numItems, o.errorRate);
          this._bfl_d.import(o);
        }
      }
      let o = false;
      let i = false;
      for (let {
        as: r,
        allowMatchCurrent: u
      } of [{
        as: e
      }, {
        as: t
      }]) {
        if (r) {
          let t = (0, s.removeTrailingSlash)(new URL(r, "http://n").pathname);
          let l = (0, O.addBasePath)((0, P.addLocale)(t, n || this.locale));
          if (u || t !== (0, s.removeTrailingSlash)(new URL(this.asPath, "http://n").pathname)) {
            o = o || !!this._bfl_s?.contains(t) || !!this._bfl_s?.contains(l);
            for (let e of [t, l]) {
              let t = e.split("/");
              for (let e = 0; !i && e < t.length + 1; e++) {
                let r = t.slice(0, e).join("/");
                if (r && this._bfl_d?.contains(r)) {
                  i = true;
                  break;
                }
              }
            }
            if (o || i) {
              if (a) {
                return true;
              }
              z({
                url: (0, O.addBasePath)((0, P.addLocale)(e, n || this.locale, this.defaultLocale)),
                router: this
              });
              return new Promise(() => {});
            }
          }
        }
      }
    }
    return false;
  }
  async change(e, t, r, n, a) {
    let o;
    let i;
    if (!(0, N.isLocalURL)(t)) {
      z({
        url: t,
        router: this
      });
      return false;
    }
    let f = n._h === 1;
    if (!f && !n.shallow) {
      await this._bfl(r, undefined, n.locale);
    }
    let d = f || n._shouldResolveHref || (0, b.parsePath)(t).pathname === (0, b.parsePath)(r).pathname;
    let p = {
      ...this.state
    };
    let T = this.isReady !== true;
    this.isReady = true;
    let j = this.isSsr;
    if (!f) {
      this.isSsr = false;
    }
    if (f && this.clc) {
      return false;
    }
    let A = p.locale;
    if (h.ST) {
      performance.mark("routeChange");
    }
    let {
      shallow: x = false,
      scroll: C = true
    } = n;
    let L = {
      shallow: x
    };
    if (this._inFlightRoute && this.clc) {
      if (!j) {
        V.events.emit("routeChangeError", U(), this._inFlightRoute, L);
      }
      this.clc();
      this.clc = null;
    }
    r = (0, O.addBasePath)((0, P.addLocale)((0, S.hasBasePath)(r) ? (0, v.removeBasePath)(r) : r, n.locale, this.defaultLocale));
    let D = (0, R.removeLocale)((0, S.hasBasePath)(r) ? (0, v.removeBasePath)(r) : r, p.locale);
    this._inFlightRoute = r;
    let F = A !== p.locale;
    if (!f && this.onlyAHashChange(D) && !F) {
      p.asPath = D;
      V.events.emit("hashChangeStart", r, L);
      this.changeState(e, t, r, {
        ...n,
        scroll: false
      });
      if (C) {
        this.scrollToHash(D);
      }
      try {
        await this.set(p, this.components[p.route], null);
      } catch (e) {
        if ((0, c.default)(e) && e.cancelled) {
          V.events.emit("routeChangeError", e, D, L);
        }
        throw e;
      }
      V.events.emit("hashChangeComplete", r, L);
      return true;
    }
    let H = (0, m.parseRelativeUrl)(t);
    let {
      pathname: X,
      query: G
    } = H;
    try {
      [o, {
        __rewrites: i
      }] = await Promise.all([this.pageLoader.getPageList(), (0, u.getClientBuildManifest)(), this.pageLoader.getMiddleware()]);
    } catch (e) {
      z({
        url: r,
        router: this
      });
      return false;
    }
    if (!this.urlIsNew(D) && !F) {
      e = "replaceState";
    }
    let q = r;
    X = X ? (0, s.removeTrailingSlash)((0, v.removeBasePath)(X)) : X;
    let Y = (0, s.removeTrailingSlash)(X);
    let K = r.startsWith("/") && (0, m.parseRelativeUrl)(r).pathname;
    if (this.components[X]?.__appRouter) {
      z({
        url: r,
        router: this
      });
      return new Promise(() => {});
    }
    let Q = !!K && Y !== K && (!(0, _.isDynamicRoute)(Y) || !(0, g.getRouteMatcher)((0, E.getRouteRegex)(Y))(K));
    let J = !n.shallow && (await $({
      asPath: r,
      locale: p.locale,
      router: this
    }));
    if (f && J) {
      d = false;
    }
    if (d && X !== "/_error") {
      n._shouldResolveHref = true;
      H.pathname = B(X, o);
      if (H.pathname !== X) {
        X = H.pathname;
        H.pathname = (0, O.addBasePath)(X);
        if (!J) {
          t = (0, y.formatWithValidation)(H);
        }
      }
    }
    if (!(0, N.isLocalURL)(r)) {
      z({
        url: r,
        router: this
      });
      return false;
    }
    q = (0, R.removeLocale)((0, v.removeBasePath)(q), p.locale);
    Y = (0, s.removeTrailingSlash)(X);
    let Z = false;
    if ((0, _.isDynamicRoute)(Y)) {
      let e = (0, m.parseRelativeUrl)(q);
      let n = e.pathname;
      let a = (0, E.getRouteRegex)(Y);
      Z = (0, g.getRouteMatcher)(a)(n);
      let o = Y === n;
      let i = o ? (0, M.interpolateAs)(Y, n, G) : {};
      if (Z && (!o || i.result)) {
        if (o) {
          r = (0, y.formatWithValidation)(Object.assign({}, e, {
            pathname: i.result,
            query: (0, I.omit)(G, i.params)
          }));
        } else {
          Object.assign(G, Z);
        }
      } else {
        let e = Object.keys(a.groups).filter(e => !G[e] && !a.groups[e].optional);
        if (e.length > 0 && !J) {
          throw Object.defineProperty(Error(`${o ? `The provided \`href\` (${t}) value is missing query values (${e.join(", ")}) to be interpolated properly. ` : `The provided \`as\` value (${n}) is incompatible with the \`href\` value (${Y}). `}Read more: https://nextjs.org/docs/messages/${o ? "href-interpolation-failed" : "incompatible-href-as"}`), "__NEXT_ERROR_CODE", {
            value: "E344",
            enumerable: false,
            configurable: true
          });
        }
      }
    }
    if (!f) {
      V.events.emit("routeChangeStart", r, L);
    }
    let ee = this.pathname === "/404" || this.pathname === "/_error";
    try {
      let i = await this.getRouteInfo({
        route: Y,
        pathname: X,
        query: G,
        as: r,
        resolvedAs: q,
        routeProps: L,
        locale: p.locale,
        isPreview: p.isPreview,
        hasMiddleware: J,
        unstable_skipClientCache: n.unstable_skipClientCache,
        isQueryUpdating: f && !this.isFallback,
        isMiddlewareRewrite: Q
      });
      if (!f && !n.shallow) {
        await this._bfl(r, "resolvedAs" in i ? i.resolvedAs : undefined, p.locale);
      }
      if ("route" in i && J) {
        Y = X = i.route || Y;
        if (!L.shallow) {
          G = Object.assign({}, i.query || {}, G);
        }
        let e = (0, S.hasBasePath)(H.pathname) ? (0, v.removeBasePath)(H.pathname) : H.pathname;
        if (Z && X !== e) {
          Object.keys(Z).forEach(e => {
            if (Z && G[e] === Z[e]) {
              delete G[e];
            }
          });
        }
        if ((0, _.isDynamicRoute)(X)) {
          let e = !L.shallow && i.resolvedAs ? i.resolvedAs : (0, O.addBasePath)((0, P.addLocale)(new URL(r, location.href).pathname, p.locale), true);
          if ((0, S.hasBasePath)(e)) {
            e = (0, v.removeBasePath)(e);
          }
          let t = (0, E.getRouteRegex)(X);
          let n = (0, g.getRouteMatcher)(t)(new URL(e, location.href).pathname);
          if (n) {
            Object.assign(G, n);
          }
        }
      }
      if ("type" in i) {
        if (i.type === "redirect-internal") {
          return this.change(e, i.newUrl, i.newAs, n);
        } else {
          z({
            url: i.destination,
            router: this
          });
          return new Promise(() => {});
        }
      }
      let s = i.Component;
      if (s && s.unstable_scriptLoader) {
        [].concat(s.unstable_scriptLoader()).forEach(e => {
          (0, l.handleClientScriptLoad)(e.props);
        });
      }
      if ((i.__N_SSG || i.__N_SSP) && i.props) {
        if (i.props.pageProps && i.props.pageProps.__N_REDIRECT) {
          n.locale = false;
          let t = i.props.pageProps.__N_REDIRECT;
          if (t.startsWith("/") && i.props.pageProps.__N_REDIRECT_BASE_PATH !== false) {
            let r = (0, m.parseRelativeUrl)(t);
            r.pathname = B(r.pathname, o);
            let {
              url: a,
              as: i
            } = k(this, t, t);
            return this.change(e, a, i, n);
          }
          z({
            url: t,
            router: this
          });
          return new Promise(() => {});
        }
        p.isPreview = !!i.props.__N_PREVIEW;
        if (i.props.notFound === W) {
          let e;
          try {
            await this.fetchComponent("/404");
            e = "/404";
          } catch (t) {
            e = "/_error";
          }
          i = await this.getRouteInfo({
            route: e,
            pathname: e,
            query: G,
            as: r,
            resolvedAs: q,
            routeProps: {
              shallow: false
            },
            locale: p.locale,
            isPreview: p.isPreview,
            isNotFound: true
          });
          if ("type" in i) {
            throw Object.defineProperty(Error("Unexpected middleware effect on /404"), "__NEXT_ERROR_CODE", {
              value: "E158",
              enumerable: false,
              configurable: true
            });
          }
        }
      }
      if (f && this.pathname === "/_error" && self.__NEXT_DATA__.props?.pageProps?.statusCode === 500 && i.props?.pageProps) {
        i.props.pageProps.statusCode = 500;
      }
      let u = n.shallow && p.route === (i.route ?? Y);
      let d = n.scroll ?? (!f && !u);
      let h = a ?? (d ? {
        x: 0,
        y: 0
      } : null);
      let y = {
        ...p,
        route: Y,
        pathname: X,
        query: G,
        asPath: D,
        isFallback: false
      };
      if (f && ee) {
        i = await this.getRouteInfo({
          route: this.pathname,
          pathname: this.pathname,
          query: G,
          as: r,
          resolvedAs: q,
          routeProps: {
            shallow: false
          },
          locale: p.locale,
          isPreview: p.isPreview,
          isQueryUpdating: f && !this.isFallback
        });
        if ("type" in i) {
          throw Object.defineProperty(Error(`Unexpected middleware effect on ${this.pathname}`), "__NEXT_ERROR_CODE", {
            value: "E225",
            enumerable: false,
            configurable: true
          });
        }
        if (this.pathname === "/_error" && self.__NEXT_DATA__.props?.pageProps?.statusCode === 500 && i.props?.pageProps) {
          i.props.pageProps.statusCode = 500;
        }
        try {
          await this.set(y, i, h);
        } catch (e) {
          if ((0, c.default)(e) && e.cancelled) {
            V.events.emit("routeChangeError", e, D, L);
          }
          throw e;
        }
        return true;
      }
      V.events.emit("beforeHistoryChange", r, L);
      this.changeState(e, t, r, n);
      if (!f || !!h || !!T || !!F || !(0, w.compareRouterStates)(y, this.state)) {
        try {
          await this.set(y, i, h);
        } catch (e) {
          if (e.cancelled) {
            i.error = i.error || e;
          } else {
            throw e;
          }
        }
        if (i.error) {
          if (!f) {
            V.events.emit("routeChangeError", i.error, D, L);
          }
          throw i.error;
        }
        if (!f) {
          V.events.emit("routeChangeComplete", r, L);
        }
        if (d && /#.+$/.test(r)) {
          this.scrollToHash(r);
        }
      }
      return true;
    } catch (e) {
      if ((0, c.default)(e) && e.cancelled) {
        return false;
      }
      throw e;
    }
  }
  changeState(e, t, r, n = {}) {
    if (e !== "pushState" || (0, h.getURL)() !== r) {
      this._shallow = n.shallow;
      window.history[e]({
        url: t,
        as: r,
        options: n,
        __N: true,
        key: this._key = e !== "pushState" ? this._key : q()
      }, "", r);
    }
  }
  async handleRouteInfoError(e, t, r, n, a, o) {
    if (e.cancelled) {
      throw e;
    }
    if ((0, u.isAssetError)(e) || o) {
      V.events.emit("routeChangeError", e, n, a);
      z({
        url: n,
        router: this
      });
      throw U();
    }
    console.error(e);
    try {
      let n;
      let {
        page: a,
        styleSheets: o
      } = await this.fetchComponent("/_error");
      let i = {
        props: n,
        Component: a,
        styleSheets: o,
        err: e,
        error: e
      };
      if (!i.props) {
        try {
          i.props = await this.getInitialProps(a, {
            err: e,
            pathname: t,
            query: r
          });
        } catch (e) {
          console.error("Error in error page `getInitialProps`: ", e);
          i.props = {};
        }
      }
      return i;
    } catch (e) {
      return this.handleRouteInfoError((0, c.default)(e) ? e : Object.defineProperty(Error(e + ""), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      }), t, r, n, a, true);
    }
  }
  async getRouteInfo({
    route: e,
    pathname: t,
    query: r,
    as: n,
    resolvedAs: a,
    routeProps: o,
    locale: i,
    hasMiddleware: u,
    isPreview: l,
    unstable_skipClientCache: f,
    isQueryUpdating: p,
    isMiddlewareRewrite: h,
    isNotFound: _
  }) {
    let m = e;
    try {
      let e = this.components[m];
      if (o.shallow && e && this.route === m) {
        return e;
      }
      let c = Y({
        route: m,
        router: this
      });
      if (u) {
        e = undefined;
      }
      let g = !e || "initial" in e ? undefined : e;
      let E = {
        dataHref: this.pageLoader.getDataHref({
          href: (0, y.formatWithValidation)({
            pathname: t,
            query: r
          }),
          skipInterpolation: true,
          asPath: _ ? "/404" : a,
          locale: i
        }),
        hasMiddleware: true,
        isServerRender: this.isSsr,
        parseJSON: true,
        inflightCache: p ? this.sbc : this.sdc,
        persistCache: !l,
        isPrefetch: false,
        unstable_skipClientCache: f,
        isBackground: p
      };
      let b = p && !h ? null : await H({
        fetchData: () => G(E),
        asPath: _ ? "/404" : a,
        locale: i,
        router: this
      }).catch(e => {
        if (p) {
          return null;
        }
        throw e;
      });
      if (b && (t === "/_error" || t === "/404")) {
        b.effect = undefined;
      }
      if (p) {
        if (b) {
          b.json = self.__NEXT_DATA__.props;
        } else {
          b = {
            json: self.__NEXT_DATA__.props
          };
        }
      }
      c();
      if (b?.effect?.type === "redirect-internal" || b?.effect?.type === "redirect-external") {
        return b.effect;
      }
      if (b?.effect?.type === "rewrite") {
        let n = (0, s.removeTrailingSlash)(b.effect.resolvedHref);
        let i = await this.pageLoader.getPageList();
        if ((!p || i.includes(n)) && (m = n, t = b.effect.resolvedHref, r = {
          ...r,
          ...b.effect.parsedAs.query
        }, a = (0, v.removeBasePath)((0, d.normalizeLocalePath)(b.effect.parsedAs.pathname, this.locales).pathname), e = this.components[m], o.shallow && e && this.route === m && !u)) {
          return {
            ...e,
            route: m
          };
        }
      }
      if ((0, j.isAPIRoute)(m)) {
        z({
          url: n,
          router: this
        });
        return new Promise(() => {});
      }
      let P = g || (await this.fetchComponent(m).then(e => ({
        Component: e.page,
        styleSheets: e.styleSheets,
        __N_SSG: e.mod.__N_SSG,
        __N_SSP: e.mod.__N_SSP
      })));
      let R = b?.response?.headers.get("x-middleware-skip");
      let O = P.__N_SSG || P.__N_SSP;
      if (R && b?.dataHref) {
        delete this.sdc[b.dataHref];
      }
      let {
        props: S,
        cacheKey: T
      } = await this._getData(async () => {
        if (O) {
          if (b?.json && !R) {
            return {
              cacheKey: b.cacheKey,
              props: b.json
            };
          }
          let e = b?.dataHref ? b.dataHref : this.pageLoader.getDataHref({
            href: (0, y.formatWithValidation)({
              pathname: t,
              query: r
            }),
            asPath: a,
            locale: i
          });
          let n = await G({
            dataHref: e,
            isServerRender: this.isSsr,
            parseJSON: true,
            inflightCache: R ? {} : this.sdc,
            persistCache: !l,
            isPrefetch: false,
            unstable_skipClientCache: f
          });
          return {
            cacheKey: n.cacheKey,
            props: n.json || {}
          };
        }
        return {
          headers: {},
          props: await this.getInitialProps(P.Component, {
            pathname: t,
            query: r,
            asPath: n,
            locale: i,
            locales: this.locales,
            defaultLocale: this.defaultLocale
          })
        };
      });
      if (P.__N_SSP && E.dataHref && T) {
        delete this.sdc[T];
      }
      if (!this.isPreview && !!P.__N_SSG && !p) {
        G(Object.assign({}, E, {
          isBackground: true,
          persistCache: false,
          inflightCache: this.sbc
        })).catch(() => {});
      }
      S.pageProps = Object.assign({}, S.pageProps);
      P.props = S;
      P.route = m;
      P.query = r;
      P.resolvedAs = a;
      this.components[m] = P;
      return P;
    } catch (e) {
      return this.handleRouteInfoError((0, c.getProperError)(e), t, r, n, o);
    }
  }
  set(e, t, r) {
    this.state = e;
    return this.sub(t, this.components["/_app"].Component, r);
  }
  beforePopState(e) {
    this._bps = e;
  }
  onlyAHashChange(e) {
    if (!this.asPath) {
      return false;
    }
    let [t, r] = this.asPath.split("#", 2);
    let [n, a] = e.split("#", 2);
    return !!a && t === n && r === a || t === n && r !== a;
  }
  scrollToHash(e) {
    let [, t = ""] = e.split("#", 2);
    (0, L.disableSmoothScrollDuringRouteTransition)(() => {
      if (t === "" || t === "top") {
        window.scrollTo(0, 0);
        return;
      }
      let e = decodeURIComponent(t);
      let r = document.getElementById(e);
      if (r) {
        r.scrollIntoView();
        return;
      }
      let n = document.getElementsByName(e)[0];
      if (n) {
        n.scrollIntoView();
      }
    }, {
      onlyHashChange: this.onlyAHashChange(e)
    });
  }
  urlIsNew(e) {
    return this.asPath !== e;
  }
  async prefetch(e, t = e, r = {}) {
    if ((0, C.isBot)(window.navigator.userAgent)) {
      return;
    }
    let n = (0, m.parseRelativeUrl)(e);
    let a = n.pathname;
    let {
      pathname: o,
      query: i
    } = n;
    let u = o;
    let l = await this.pageLoader.getPageList();
    let c = t;
    let f = r.locale !== undefined ? r.locale || undefined : this.locale;
    let d = await $({
      asPath: t,
      locale: f,
      router: this
    });
    n.pathname = B(n.pathname, l);
    if ((0, _.isDynamicRoute)(n.pathname)) {
      o = n.pathname;
      n.pathname = o;
      Object.assign(i, (0, g.getRouteMatcher)((0, E.getRouteRegex)(n.pathname))((0, b.parsePath)(t).pathname) || {});
      if (!d) {
        e = (0, y.formatWithValidation)(n);
      }
    }
    let p = await H({
      fetchData: () => G({
        dataHref: this.pageLoader.getDataHref({
          href: (0, y.formatWithValidation)({
            pathname: u,
            query: i
          }),
          skipInterpolation: true,
          asPath: c,
          locale: f
        }),
        hasMiddleware: true,
        isServerRender: false,
        parseJSON: true,
        inflightCache: this.sdc,
        persistCache: !this.isPreview,
        isPrefetch: true
      }),
      asPath: t,
      locale: f,
      router: this
    });
    if (p?.effect.type === "rewrite") {
      n.pathname = p.effect.resolvedHref;
      o = p.effect.resolvedHref;
      i = {
        ...i,
        ...p.effect.parsedAs.query
      };
      c = p.effect.parsedAs.pathname;
      e = (0, y.formatWithValidation)(n);
    }
    if (p?.effect.type === "redirect-external") {
      return;
    }
    let h = (0, s.removeTrailingSlash)(o);
    if (await this._bfl(t, c, r.locale, true)) {
      this.components[a] = {
        __appRouter: true
      };
    }
    await Promise.all([this.pageLoader._isSsg(h).then(t => !!t && G({
      dataHref: p?.json ? p?.dataHref : this.pageLoader.getDataHref({
        href: e,
        asPath: c,
        locale: f
      }),
      isServerRender: false,
      parseJSON: true,
      inflightCache: this.sdc,
      persistCache: !this.isPreview,
      isPrefetch: true,
      unstable_skipClientCache: r.unstable_skipClientCache || r.priority && true
    }).then(() => false).catch(() => false)), this.pageLoader[r.priority ? "loadPage" : "prefetch"](h)]);
  }
  async fetchComponent(e) {
    let t = Y({
      route: e,
      router: this
    });
    try {
      let r = await this.pageLoader.loadPage(e);
      t();
      return r;
    } catch (e) {
      t();
      throw e;
    }
  }
  _getData(e) {
    let t = false;
    let r = () => {
      t = true;
    };
    this.clc = r;
    return e().then(e => {
      if (r === this.clc) {
        this.clc = null;
      }
      if (t) {
        let e = Object.defineProperty(Error("Loading initial props cancelled"), "__NEXT_ERROR_CODE", {
          value: "E405",
          enumerable: false,
          configurable: true
        });
        e.cancelled = true;
        throw e;
      }
      return e;
    });
  }
  getInitialProps(e, t) {
    let {
      Component: r
    } = this.components["/_app"];
    let n = this._wrapApp(r);
    t.AppTree = n;
    return (0, h.loadGetInitialProps)(r, {
      AppTree: n,
      Component: e,
      router: this,
      ctx: t
    });
  }
  get route() {
    return this.state.route;
  }
  get pathname() {
    return this.state.pathname;
  }
  get query() {
    return this.state.query;
  }
  get asPath() {
    return this.state.asPath;
  }
  get locale() {
    return this.state.locale;
  }
  get isFallback() {
    return this.state.isFallback;
  }
  get isPreview() {
    return this.state.isPreview;
  }
}