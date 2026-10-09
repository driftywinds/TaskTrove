Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "applyFlightData", {
  enumerable: true,
  get: function () {
    return a;
  }
});
let n = require("./3696.js");
let u = require("./25948.js");
function a(e, t, r, a) {
  let {
    tree: l,
    seedData: o,
    head: i,
    isRootRender: s
  } = a;
  if (o === null) {
    return false;
  }
  if (s) {
    let u = o[0];
    r.loading = o[2];
    r.rsc = u;
    r.prefetchRsc = null;
    (0, n.fillLazyItemsTillLeafWithHead)(e, r, t, l, o, i);
  } else {
    r.rsc = t.rsc;
    r.prefetchRsc = t.prefetchRsc;
    r.parallelRoutes = new Map(t.parallelRoutes);
    r.loading = t.loading;
    (0, u.fillCacheWithNewSubTreeData)(e, r, t, a);
  }
  return true;
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}