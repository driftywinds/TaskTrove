Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "prefetch", {
  enumerable: true,
  get: function () {
    return o;
  }
});
let n = require("./22192.js");
let u = require("./3764.js");
let a = require("./35017.js");
let l = require("./35485.js");
function o(e, t, r, o, i) {
  let s = (0, n.createPrefetchURL)(e);
  if (s === null) {
    return;
  }
  let c = (0, u.createCacheKey)(s.href, t);
  (0, a.schedulePrefetchTask)(c, r, o, l.PrefetchPriority.Default, i);
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}