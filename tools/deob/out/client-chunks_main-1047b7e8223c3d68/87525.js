Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getNextPathnameInfo", {
  enumerable: true,
  get: function () {
    return i;
  }
});
let n = require("./53328.js");
let a = require("./7358.js");
let o = require("./88610.js");
function i(e, t) {
  let {
    basePath: r,
    i18n: i,
    trailingSlash: s
  } = t.nextConfig ?? {};
  let u = {
    pathname: e,
    trailingSlash: e !== "/" ? e.endsWith("/") : s
  };
  if (r && (0, o.pathHasPrefix)(u.pathname, r)) {
    u.pathname = (0, a.removePathPrefix)(u.pathname, r);
    u.basePath = r;
  }
  let l = u.pathname;
  if (u.pathname.startsWith("/_next/data/") && u.pathname.endsWith(".json")) {
    let e = u.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
    u.buildId = e[0];
    l = e[1] !== "index" ? `/${e.slice(1).join("/")}` : "/";
    if (t.parseData === true) {
      u.pathname = l;
    }
  }
  if (i) {
    let e = t.i18nProvider ? t.i18nProvider.analyze(u.pathname) : (0, n.normalizeLocalePath)(u.pathname, i.locales);
    u.locale = e.detectedLocale;
    u.pathname = e.pathname ?? u.pathname;
    if (!e.detectedLocale && u.buildId && (e = t.i18nProvider ? t.i18nProvider.analyze(l) : (0, n.normalizeLocalePath)(l, i.locales)).detectedLocale) {
      u.locale = e.detectedLocale;
    }
  }
  return u;
}