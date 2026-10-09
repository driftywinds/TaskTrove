Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isNextRouterError", {
  enumerable: true,
  get: function () {
    return a;
  }
});
let n = require("./32968.js");
let u = require("./80376.js");
function a(e) {
  return (0, u.isRedirectError)(e) || (0, n.isHTTPAccessFallbackError)(e);
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}