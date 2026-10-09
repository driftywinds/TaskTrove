Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "interpolateAs", {
  enumerable: true,
  get: function () {
    return o;
  }
});
let n = require("./28073.js");
let a = require("./45176.js");
function o(e, t, r) {
  let o = "";
  let i = (0, a.getRouteRegex)(e);
  let s = i.groups;
  let u = (t !== e ? (0, n.getRouteMatcher)(i)(t) : "") || r;
  o = e;
  let l = Object.keys(s);
  if (!l.every(e => {
    let t = u[e] || "";
    let {
      repeat: r,
      optional: n
    } = s[e];
    let a = `[${r ? "..." : ""}${e}]`;
    if (n) {
      a = `${!t ? "/" : ""}[${a}]`;
    }
    if (r && !Array.isArray(t)) {
      t = [t];
    }
    return (n || e in u) && (o = o.replace(a, r ? t.map(e => encodeURIComponent(e)).join("/") : encodeURIComponent(t)) || "/");
  })) {
    o = "";
  }
  return {
    params: l,
    result: o
  };
}