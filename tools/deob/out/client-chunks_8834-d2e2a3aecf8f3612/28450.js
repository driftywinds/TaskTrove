Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  handleHardNavError: function () {
    return l;
  },
  useNavFailureHandler: function () {
    return o;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
require("./87849.js");
let a = require("./12877.js");
function l(e) {
  return !!e && !!window.next.__pendingUrl && (0, a.createHrefFromUrl)(new URL(window.location.href)) !== (0, a.createHrefFromUrl)(window.next.__pendingUrl) && (console.error("Error occurred during navigation, falling back to hard navigation", e), window.location.href = window.next.__pendingUrl.toString(), true);
}
function o() {}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}