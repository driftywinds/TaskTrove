Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "invalidateCacheByRouterState", {
  enumerable: true,
  get: function () {
    return u;
  }
});
let n = require("./1859.js");
function u(e, t, r) {
  for (let u in r[1]) {
    let a = r[1][u][0];
    let l = (0, n.createRouterCacheKey)(a);
    let o = t.parallelRoutes.get(u);
    if (o) {
      let t = new Map(o);
      t.delete(l);
      e.parallelRoutes.set(u, t);
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