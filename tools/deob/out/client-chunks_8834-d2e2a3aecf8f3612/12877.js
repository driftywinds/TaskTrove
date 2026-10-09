function r(e, t = true) {
  return e.pathname + e.search + (t ? e.hash : "");
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createHrefFromUrl", {
  enumerable: true,
  get: function () {
    return r;
  }
});
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}