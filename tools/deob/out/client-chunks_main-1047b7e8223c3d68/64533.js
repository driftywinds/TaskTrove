Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isNextRouterError", {
  enumerable: true,
  get: function () {
    return o;
  }
});
let n = require("./99935.js");
let a = require("./75941.js");
function o(e) {
  return (0, a.isRedirectError)(e) || (0, n.isHTTPAccessFallbackError)(e);
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}