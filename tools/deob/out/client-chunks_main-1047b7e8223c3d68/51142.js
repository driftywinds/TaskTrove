Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "formatNextPathnameInfo", {
  enumerable: true,
  get: function () {
    return s;
  }
});
let n = require("./97616.js");
let a = require("./60723.js");
let o = require("./58886.js");
let i = require("./97413.js");
function s(e) {
  let t = (0, i.addLocale)(e.pathname, e.locale, e.buildId ? undefined : e.defaultLocale, e.ignorePrefix);
  if (e.buildId || !e.trailingSlash) {
    t = (0, n.removeTrailingSlash)(t);
  }
  if (e.buildId) {
    t = (0, o.addPathSuffix)((0, a.addPathPrefix)(t, `/_next/data/${e.buildId}`), e.pathname === "/" ? "index.json" : ".json");
  }
  t = (0, a.addPathPrefix)(t, e.basePath);
  if (!e.buildId && e.trailingSlash) {
    if (t.endsWith("/")) {
      return t;
    } else {
      return (0, o.addPathSuffix)(t, "/");
    }
  } else {
    return (0, n.removeTrailingSlash)(t);
  }
}