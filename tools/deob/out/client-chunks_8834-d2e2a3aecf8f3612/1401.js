Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "findHeadInCache", {
  enumerable: true,
  get: function () {
    return a;
  }
});
let n = require("./47325.js");
let u = require("./1859.js");
function a(e, t) {
  return function e(t, r, a, l) {
    if (Object.keys(r).length === 0) {
      return [t, a, l];
    }
    let o = Object.keys(r).filter(e => e !== "children");
    if ("children" in r) {
      o.unshift("children");
    }
    for (let l of o) {
      let [o, i] = r[l];
      if (o === n.DEFAULT_SEGMENT_KEY) {
        continue;
      }
      let s = t.parallelRoutes.get(l);
      if (!s) {
        continue;
      }
      let c = (0, u.createRouterCacheKey)(o);
      let f = (0, u.createRouterCacheKey)(o, true);
      let d = s.get(c);
      if (!d) {
        continue;
      }
      let p = e(d, i, a + "/" + c, a + "/" + f);
      if (p) {
        return p;
      }
    }
    return null;
  }(e, t, "", "");
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}