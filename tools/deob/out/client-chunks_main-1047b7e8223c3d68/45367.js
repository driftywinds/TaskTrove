Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "parseRelativeUrl", {
  enumerable: true,
  get: function () {
    return o;
  }
});
let n = require("./58492.js");
let a = require("./17870.js");
function o(e, t, r = true) {
  let i = new URL((0, n.getLocationOrigin)());
  let s = t ? new URL(t, i) : e.startsWith(".") ? new URL(window.location.href) : i;
  let {
    pathname: u,
    searchParams: l,
    search: c,
    hash: f,
    href: d,
    origin: p
  } = new URL(e, s);
  if (p !== i.origin) {
    throw Object.defineProperty(Error(`invariant: invalid relative URL, router received ${e}`), "__NEXT_ERROR_CODE", {
      value: "E159",
      enumerable: false,
      configurable: true
    });
  }
  return {
    pathname: u,
    query: r ? (0, a.searchParamsToUrlQuery)(l) : undefined,
    search: c,
    hash: f,
    href: d.slice(p.length),
    slashes: undefined
  };
}