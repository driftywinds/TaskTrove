Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
  enumerable: true,
  get: function () {
    return n;
  }
});
let r = new WeakMap();
function n(e) {
  let t = r.get(e);
  if (t) {
    return t;
  }
  let n = Promise.resolve(e);
  r.set(e, n);
  return n;
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}