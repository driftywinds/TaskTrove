Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "notFound", {
  enumerable: true,
  get: function () {
    return a;
  }
});
let n = require("./32968.js");
let u = `${n.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;
function a() {
  let e = Object.defineProperty(Error(u), "__NEXT_ERROR_CODE", {
    value: "E394",
    enumerable: false,
    configurable: true
  });
  e.digest = u;
  throw e;
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}