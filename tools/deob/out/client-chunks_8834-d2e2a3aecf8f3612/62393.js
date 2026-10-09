Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getAssetPrefix", {
  enumerable: true,
  get: function () {
    return u;
  }
});
let n = require("./86059.js");
function u() {
  let e = document.currentScript;
  if (!(e instanceof HTMLScriptElement)) {
    throw Object.defineProperty(new n.InvariantError(`Expected document.currentScript to be a <script> element. Received ${e} instead.`), "__NEXT_ERROR_CODE", {
      value: "E783",
      enumerable: false,
      configurable: true
    });
  }
  let {
    pathname: t
  } = new URL(e.src);
  let r = t.indexOf("/_next/");
  if (r === -1) {
    throw Object.defineProperty(new n.InvariantError(`Expected document.currentScript src to contain '/_next/'. Received ${e.src} instead.`), "__NEXT_ERROR_CODE", {
      value: "E784",
      enumerable: false,
      configurable: true
    });
  }
  return t.slice(0, r);
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}