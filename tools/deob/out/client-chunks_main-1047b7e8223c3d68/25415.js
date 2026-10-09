let n;
let a;
let o;
let i;
let s;
let u;
let l;
let c;
let f;
let d;
let p;
let h;
Object.defineProperty(exports, "__esModule", {
  value: true
});
let _ = require("./26908.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var m = {
  emitter: function () {
    return W;
  },
  hydrate: function () {
    return eh;
  },
  initialize: function () {
    return z;
  },
  router: function () {
    return n;
  },
  version: function () {
    return H;
  }
};
for (var g in m) {
  Object.defineProperty(exports, g, {
    enumerable: true,
    get: m[g]
  });
}
let E = require("./34007.js");
let y = require(/*webcrack:missing*/"./62021.js");
require("./11337.js");
let b = E._(require(/*webcrack:missing*/"./74361.js"));
let P = E._(require(/*webcrack:missing*/"./81393.js"));
let R = require("./5745.js");
let v = E._(require("./31057.js"));
let O = require("./14542.js");
let S = require("./4010.js");
let T = require("./74325.js");
let j = require("./17870.js");
let A = require("./58492.js");
let x = require("./14364.js");
let w = E._(require("./70033.js"));
let N = E._(require("./98834.js"));
let C = require("./62804.js");
let I = require("./36436.js");
let M = require("./56834.js");
let L = require("./34699.js");
let D = require("./87263.js");
let U = require("./47161.js");
let $ = require("./17108.js");
let F = require("./34887.js");
let k = require("./23825.js");
let B = require("./28525.js");
require("./13315.js");
require("./64533.js");
let H = "16.0.10";
let W = (0, v.default)();
let X = e => [].slice.call(e);
let G = false;
class _Component3 extends b.default.Component {
  componentDidCatch(e, t) {
    this.props.fn(e, t);
  }
  componentDidMount() {
    this.scrollToHash();
    if (n.isSsr && (a.isFallback || a.nextExport && ((0, T.isDynamicRoute)(n.pathname) || location.search || G) || a.props && a.props.__N_SSG && (location.search || G))) {
      n.replace(n.pathname + "?" + String((0, j.assign)((0, j.urlQueryToSearchParams)(n.query), new URLSearchParams(location.search))), o, {
        _h: 1,
        shallow: !a.isFallback && !G
      }).catch(e => {
        if (!e.cancelled) {
          throw e;
        }
      });
    }
  }
  componentDidUpdate() {
    this.scrollToHash();
  }
  scrollToHash() {
    let {
      hash: e
    } = location;
    if (!(e = e && e.substring(1))) {
      return;
    }
    let t = document.getElementById(e);
    if (t) {
      setTimeout(() => t.scrollIntoView(), 0);
    }
  }
  render() {
    return this.props.children;
  }
}
async function z(e = {}) {
  a = JSON.parse(document.getElementById("__NEXT_DATA__").textContent);
  window.__NEXT_DATA__ = a;
  h = a.defaultLocale;
  let t = a.assetPrefix || "";
  self.__next_set_public_path__(`${t}/_next/`);
  o = (0, A.getURL)();
  if ((0, U.hasBasePath)(o)) {
    o = (0, D.removeBasePath)(o);
  }
  if (a.scriptLoader) {
    let {
      initScriptLoader: e
    } = require("./51322.js");
    e(a.scriptLoader);
  }
  i = new N.default(a.buildId, t);
  let l = ([e, t]) => i.routeLoader.onEntrypoint(e, t);
  if (window.__NEXT_P) {
    window.__NEXT_P.map(e => setTimeout(() => l(e), 0));
  }
  window.__NEXT_P = [];
  window.__NEXT_P.push = l;
  (u = (0, w.default)()).getIsSsr = () => n.isSsr;
  s = document.getElementById("__next");
  return {
    assetPrefix: t
  };
}
function Y(_Component2, t) {
  return <_Component2 {...t} />;
}
function V({
  children: e
}) {
  let t = b.default.useMemo(() => (0, F.adaptForAppRouterInstance)(n), []);
  return <_Component3 fn={e => Q({
    App: f,
    err: e
  }).catch(e => console.error("Error rendering page: ", e))}><$.AppRouterContext.Provider value={t}><k.SearchParamsContext.Provider value={(0, F.adaptForSearchParams)(n)}><F.PathnameContextProviderAdapter router={n} isAutoExport={self.__NEXT_DATA__.autoExport ?? false}><k.PathParamsContext.Provider value={(0, F.adaptForPathParams)(n)}><O.RouterContext.Provider value={(0, I.makePublicRouterInstance)(n)}><R.HeadManagerContext.Provider value={u}><L.ImageConfigContext.Provider value={{
                  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                  imageSizes: [32, 48, 64, 96, 128, 256, 384],
                  qualities: [75],
                  path: "/_next/image",
                  loader: "default",
                  dangerouslyAllowSVG: false,
                  unoptimized: false
                }}>{e}</L.ImageConfigContext.Provider></R.HeadManagerContext.Provider></O.RouterContext.Provider></k.PathParamsContext.Provider></F.PathnameContextProviderAdapter></k.SearchParamsContext.Provider></$.AppRouterContext.Provider></_Component3>;
}
let K = e => t => {
  let r = {
    ...t,
    Component: p,
    err: a.err,
    router: n
  };
  return <V>{Y(e, r)}</V>;
};
function Q(e) {
  let {
    App: t,
    err: s
  } = e;
  console.error(s);
  console.error("A client-side exception has occurred, see here for more info: https://nextjs.org/docs/messages/client-side-exception-occurred");
  return i.loadPage("/_error").then(({
    page: n,
    styleSheets: a
  }) => l?.Component === n ? Promise.resolve().then(() => _._(require("./48343.js"))).then(n => Promise.resolve().then(() => _._(require("./8042.js"))).then(r => {
    e.App = t = r.default;
    return n;
  })).then(e => ({
    ErrorComponent: e.default,
    styleSheets: []
  })) : {
    ErrorComponent: n,
    styleSheets: a
  }).then(({
    ErrorComponent: r,
    styleSheets: i
  }) => {
    let u = K(t);
    let l = {
      Component: r,
      AppTree: u,
      router: n,
      ctx: {
        err: s,
        pathname: a.page,
        query: a.query,
        asPath: o,
        AppTree: u
      }
    };
    return Promise.resolve(e.props?.err ? e.props : (0, A.loadGetInitialProps)(t, l)).then(t => ed({
      ...e,
      err: s,
      Component: r,
      styleSheets: i,
      props: t
    }));
  });
}
function J({
  callback: e
}) {
  b.default.useLayoutEffect(() => e(), [e]);
  return null;
}
let Z = "beforeRender";
let ee = "afterRender";
let et = "afterHydrate";
let er = "routeChange";
let en = "Next.js-hydration";
let ea = "Next.js-route-change-to-render";
let eo = "Next.js-render";
let ei = null;
let es = true;
function eu() {
  [Z, et, ee, er].forEach(e => performance.clearMarks(e));
}
function el() {
  if (A.ST) {
    performance.mark(et);
    if (performance.getEntriesByName(Z, "mark").length) {
      performance.measure("Next.js-before-hydration", "navigationStart", Z);
      performance.measure(en, Z, et);
    }
    if (d) {
      performance.getEntriesByName(en).forEach(d);
    }
    eu();
  }
}
function ec() {
  if (!A.ST) {
    return;
  }
  performance.mark(ee);
  let e = performance.getEntriesByName(er, "mark");
  if (e.length) {
    if (performance.getEntriesByName(Z, "mark").length) {
      performance.measure(ea, e[0].name, Z);
      performance.measure(eo, Z, ee);
      if (d) {
        performance.getEntriesByName(eo).forEach(d);
        performance.getEntriesByName(ea).forEach(d);
      }
    }
    eu();
    [ea, eo].forEach(e => performance.clearMeasures(e));
  }
}
function _Component4({
  callbacks: e,
  children: t
}) {
  b.default.useLayoutEffect(() => e.forEach(e => e()), [e]);
  return t;
}
function ed(e) {
  var t;
  var r;
  let a;
  let o;
  let {
    App: i,
    Component: u,
    props: f,
    err: d
  } = e;
  let p = "initial" in e ? undefined : e.styleSheets;
  u = u || l.Component;
  let h = {
    ...(f = f || l.props),
    Component: u,
    err: d,
    router: n
  };
  l = h;
  let _ = false;
  let m = new Promise((e, t) => {
    if (c) {
      c();
    }
    o = () => {
      c = null;
      e();
    };
    c = () => {
      _ = true;
      c = null;
      let e = Object.defineProperty(Error("Cancel rendering route"), "__NEXT_ERROR_CODE", {
        value: "E503",
        enumerable: false,
        configurable: true
      });
      e.cancelled = true;
      t(e);
    };
  });
  function g() {
    o();
  }
  (function () {
    if (!p) {
      return;
    }
    let e = new Set(X(document.querySelectorAll("style[data-n-href]")).map(e => e.getAttribute("data-n-href")));
    let t = document.querySelector("noscript[data-n-css]");
    let r = t?.getAttribute("data-n-css");
    p.forEach(({
      href: t,
      text: n
    }) => {
      if (!e.has(t)) {
        let e = document.createElement("style");
        e.setAttribute("data-n-href", t);
        e.setAttribute("media", "x");
        if (r) {
          e.setAttribute("nonce", r);
        }
        document.head.appendChild(e);
        e.appendChild(document.createTextNode(n));
      }
    });
  })();
  let E = <y.Fragment><J callback={function () {
      if (p && !_) {
        let e = new Set(p.map(e => e.href));
        let t = X(document.querySelectorAll("style[data-n-href]"));
        let r = t.map(e => e.getAttribute("data-n-href"));
        for (let n = 0; n < r.length; ++n) {
          if (e.has(r[n])) {
            t[n].removeAttribute("media");
          } else {
            t[n].setAttribute("media", "x");
          }
        }
        let n = document.querySelector("noscript[data-n-css]");
        if (n) {
          p.forEach(({
            href: e
          }) => {
            let t = document.querySelector(`style[data-n-href="${e}"]`);
            if (t) {
              n.parentNode.insertBefore(t, n.nextSibling);
              n = t;
            }
          });
        }
        X(document.querySelectorAll("link[data-n-p]")).forEach(e => {
          e.parentNode.removeChild(e);
        });
      }
      if (e.scroll) {
        let {
          x: t,
          y: r
        } = e.scroll;
        (0, S.disableSmoothScrollDuringRouteTransition)(() => {
          window.scrollTo(t, r);
        });
      }
    }} /><V>{Y(i, h)}<x.Portal type="next-route-announcer"><C.RouteAnnouncer /></x.Portal></V></y.Fragment>;
  t = s;
  r = e => <_Component4 callbacks={[e, g]}>{E}</_Component4>;
  if (A.ST) {
    performance.mark(Z);
  }
  a = r(es ? el : ec);
  if (ei) {
    (0, b.default.startTransition)(() => {
      ei.render(a);
    });
  } else {
    ei = P.default.hydrateRoot(t, a, {
      onRecoverableError: B.onRecoverableError
    });
    es = false;
  }
  return m;
}
async function ep(e) {
  if (e.err && (e.Component === undefined || !e.isHydratePass)) {
    await Q(e);
    return;
  }
  try {
    await ed(e);
  } catch (r) {
    let t = (0, M.getProperError)(r);
    if (t.cancelled) {
      throw t;
    }
    await Q({
      ...e,
      err: t
    });
  }
}
async function eh(e) {
  let t = a.err;
  try {
    let e = await i.routeLoader.whenEntrypoint("/_app");
    if ("error" in e) {
      throw e.error;
    }
    let {
      component: t,
      exports: r
    } = e;
    f = t;
    if (r && r.reportWebVitals) {
      d = ({
        id: e,
        name: t,
        startTime: n,
        value: a,
        duration: o,
        entryType: i,
        entries: s,
        attribution: u
      }) => {
        let l;
        let c = `${Date.now()}-${Math.floor(Math.random() * 8999999999999) + 1000000000000}`;
        if (s && s.length) {
          l = s[0].startTime;
        }
        let f = {
          id: e || c,
          name: t,
          startTime: n || l,
          value: a == null ? o : a,
          label: i === "mark" || i === "measure" ? "custom" : "web-vital"
        };
        if (u) {
          f.attribution = u;
        }
        r.reportWebVitals(f);
      };
    }
    let n = await i.routeLoader.whenEntrypoint(a.page);
    if ("error" in n) {
      throw n.error;
    }
    p = n.component;
  } catch (e) {
    t = (0, M.getProperError)(e);
  }
  if (window.__NEXT_PRELOADREADY) {
    await window.__NEXT_PRELOADREADY(a.dynamicIds);
  }
  n = (0, I.createRouter)(a.page, a.query, o, {
    initialProps: a.props,
    pageLoader: i,
    App: f,
    Component: p,
    wrapApp: K,
    err: t,
    isFallback: !!a.isFallback,
    subscription: (e, t, r) => ep(Object.assign({}, e, {
      App: t,
      scroll: r
    })),
    locale: a.locale,
    locales: a.locales,
    defaultLocale: h,
    domainLocales: a.domainLocales,
    isPreview: a.isPreview
  });
  G = await n._initialMatchesMiddlewarePromise;
  let r = {
    App: f,
    initial: true,
    Component: p,
    props: a.props,
    err: t,
    isHydratePass: true
  };
  if (e?.beforeRender) {
    await e.beforeRender();
  }
  ep(r);
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}