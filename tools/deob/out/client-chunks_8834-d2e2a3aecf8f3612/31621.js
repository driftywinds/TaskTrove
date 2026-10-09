let r;
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "HandleISRError", {
  enumerable: true,
  get: function () {
    return n;
  }
});
function n({
  error: e
}) {
  if (r) {
    let t = r.getStore();
    if (t?.isStaticGeneration) {
      if (e) {
        console.error(e);
      }
      throw e;
    }
  }
  return null;
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}