let r;
function n(e) {
  return (r === undefined && (r = window.trustedTypes?.createPolicy("nextjs", {
    createHTML: e => e,
    createScript: e => e,
    createScriptURL: e => e
  }) || null), r)?.createScriptURL(e) || e;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "__unsafeCreateTrustedScriptURL", {
  enumerable: true,
  get: function () {
    return n;
  }
});
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}