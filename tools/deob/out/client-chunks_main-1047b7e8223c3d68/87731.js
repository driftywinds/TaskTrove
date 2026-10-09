Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "resolveHref", {
  enumerable: true,
  get: function () {
    return p;
  }
});
let n = require("./17870.js");
let a = require("./46286.js");
let o = require("./61000.js");
let i = require("./58492.js");
let s = require("./14291.js");
let u = require("./59691.js");
let l = require("./3283.js");
let c = require("./70643.js");
let f = require("./45176.js");
let d = require("./28073.js");
function p(e, t, r) {
  let p;
  let h = typeof t == "string" ? t : (0, a.formatWithValidation)(t);
  let _ = h.match(/^[a-z][a-z0-9+.-]*:\/\//i);
  let m = _ ? h.slice(_[0].length) : h;
  if ((m.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
    console.error(`Invalid href '${h}' passed to next/router in page: '${e.pathname}'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.`);
    let t = (0, i.normalizeRepeatedSlashes)(m);
    h = (_ ? _[0] : "") + t;
  }
  if (!(0, u.isLocalURL)(h)) {
    if (r) {
      return [h];
    } else {
      return h;
    }
  }
  try {
    let t = h.startsWith("#") ? e.asPath : e.pathname;
    if (h.startsWith("?") && (t = e.asPath, (0, l.isDynamicRoute)(e.pathname))) {
      t = e.pathname;
      let r = (0, f.getRouteRegex)(e.pathname);
      if (!(0, d.getRouteMatcher)(r)(e.asPath)) {
        t = e.asPath;
      }
    }
    p = new URL(t, "http://n");
  } catch (e) {
    p = new URL("/", "http://n");
  }
  try {
    let e = new URL(h, p);
    e.pathname = (0, s.normalizePathTrailingSlash)(e.pathname);
    let t = "";
    if ((0, l.isDynamicRoute)(e.pathname) && e.searchParams && r) {
      let r = (0, n.searchParamsToUrlQuery)(e.searchParams);
      let {
        result: i,
        params: s
      } = (0, c.interpolateAs)(e.pathname, e.pathname, r);
      if (i) {
        t = (0, a.formatWithValidation)({
          pathname: i,
          hash: e.hash,
          query: (0, o.omit)(r, s)
        });
      }
    }
    let i = e.origin === p.origin ? e.href.slice(e.origin.length) : e.href;
    if (r) {
      return [i, t || i];
    } else {
      return i;
    }
  } catch (e) {
    if (r) {
      return [h];
    } else {
      return h;
    }
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}