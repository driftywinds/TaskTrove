Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  PathnameContextProviderAdapter: function () {
    return _;
  },
  adaptForAppRouterInstance: function () {
    return d;
  },
  adaptForPathParams: function () {
    return h;
  },
  adaptForSearchParams: function () {
    return p;
  }
};
for (var a in n) {
  Object.defineProperty(exports, a, {
    enumerable: true,
    get: n[a]
  });
}
let o = require("./26908.js");
let i = require(/*webcrack:missing*/"./62021.js");
let s = o._(require(/*webcrack:missing*/"./74361.js"));
let u = require("./23825.js");
let l = require("./3283.js");
let c = require("./73543.js");
let f = require("./45176.js");
function d(e) {
  return {
    back() {
      e.back();
    },
    forward() {
      e.forward();
    },
    refresh() {
      e.reload();
    },
    hmrRefresh() {},
    push(t, {
      scroll: r
    } = {}) {
      e.push(t, undefined, {
        scroll: r
      });
    },
    replace(t, {
      scroll: r
    } = {}) {
      e.replace(t, undefined, {
        scroll: r
      });
    },
    prefetch(t) {
      e.prefetch(t);
    }
  };
}
function p(e) {
  if (e.isReady && e.query) {
    return (0, c.asPathToSearchParams)(e.asPath);
  } else {
    return new URLSearchParams();
  }
}
function h(e) {
  if (!e.isReady || !e.query) {
    return null;
  }
  let t = {};
  for (let r of Object.keys((0, f.getRouteRegex)(e.pathname).groups)) {
    t[r] = e.query[r];
  }
  return t;
}
function _({
  children: e,
  router: t,
  ...r
}) {
  let n = (0, s.useRef)(r.isAutoExport);
  let a = (0, s.useMemo)(() => {
    let e;
    let r = n.current;
    if (r) {
      n.current = false;
    }
    if ((0, l.isDynamicRoute)(t.pathname) && (t.isFallback || r && !t.isReady)) {
      return null;
    }
    try {
      e = new URL(t.asPath, "http://f");
    } catch (e) {
      return "/";
    }
    return e.pathname;
  }, [t.asPath, t.isFallback, t.isReady, t.pathname]);
  return <u.PathnameContext.Provider value={a}>{e}</u.PathnameContext.Provider>;
}