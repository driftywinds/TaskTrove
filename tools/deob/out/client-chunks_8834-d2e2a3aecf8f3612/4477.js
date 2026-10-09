function n() {
  throw Object.defineProperty(Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
    value: "E411",
    enumerable: false,
    configurable: true
  });
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "unauthorized", {
  enumerable: true,
  get: function () {
    return n;
  }
});
require("./32968.js").HTTP_ERROR_FALLBACK_ERROR_CODE;
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}