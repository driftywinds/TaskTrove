Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
  enumerable: true,
  get: function () {
    return function e(t) {
      if ((0, u.isNextRouterError)(t) || (0, n.isBailoutToCSRError)(t)) {
        throw t;
      }
      if (t instanceof Error && "cause" in t) {
        e(t.cause);
      }
    };
  }
});
let n = require("./97820.js");
let u = require("./54744.js");
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}