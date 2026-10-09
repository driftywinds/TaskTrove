Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return d;
  }
});
let n = require("./34007.js");
let a = require("./91338.js");
let o = require("./70643.js");
let i = n._(require("./10749.js"));
let s = require("./46785.js");
let u = require("./74325.js");
let l = require("./45367.js");
let c = require("./97616.js");
let f = require("./63898.js");
require("./79872.js");
class d {
  constructor(e, t) {
    this.routeLoader = (0, f.createRouteLoader)(t);
    this.buildId = e;
    this.assetPrefix = t;
    this.promisedSsgManifest = new Promise(e => {
      if (window.__SSG_MANIFEST) {
        e(window.__SSG_MANIFEST);
      } else {
        window.__SSG_MANIFEST_CB = () => {
          e(window.__SSG_MANIFEST);
        };
      }
    });
  }
  getPageList() {
    return (0, f.getClientBuildManifest)().then(e => e.sortedPages);
  }
  getMiddleware() {
    window.__MIDDLEWARE_MATCHERS = [{
      regexp: "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next\\/static|_next\\/image|favicon.ico|manifest.webmanifest|.*\\..*|public).*))(\\.json)?[\\/#\\?]?$",
      originalSource: "/((?!_next/static|_next/image|favicon.ico|manifest.webmanifest|.*\\..*|public).*)"
    }];
    return window.__MIDDLEWARE_MATCHERS;
  }
  getDataHref(e) {
    var t;
    let r;
    let {
      asPath: n,
      href: f,
      locale: d
    } = e;
    let {
      pathname: p,
      query: h,
      search: _
    } = (0, l.parseRelativeUrl)(f);
    let {
      pathname: m
    } = (0, l.parseRelativeUrl)(n);
    let g = (0, c.removeTrailingSlash)(p);
    if (g[0] !== "/") {
      throw Object.defineProperty(Error(`Route name should start with a "/", got "${g}"`), "__NEXT_ERROR_CODE", {
        value: "E303",
        enumerable: false,
        configurable: true
      });
    }
    t = e.skipInterpolation ? m : (0, u.isDynamicRoute)(g) ? (0, o.interpolateAs)(p, m, h).result : g;
    r = (0, i.default)((0, c.removeTrailingSlash)((0, s.addLocale)(t, d)), ".json");
    return (0, a.addBasePath)(`/_next/data/${this.buildId}${r}${_}`, true);
  }
  _isSsg(e) {
    return this.promisedSsgManifest.then(t => t.has(e));
  }
  loadPage(e) {
    return this.routeLoader.loadRoute(e).then(e => {
      if ("component" in e) {
        return {
          page: e.component,
          mod: e.exports,
          styleSheets: e.styles.map(e => ({
            href: e.href,
            text: e.content
          }))
        };
      }
      throw e.error;
    });
  }
  prefetch(e) {
    return this.routeLoader.prefetch(e);
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}