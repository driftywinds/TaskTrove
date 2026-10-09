function r(e, t) {
  let r = new URL(e);
  return {
    pathname: r.pathname,
    search: r.search,
    nextUrl: t
  };
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createCacheKey", {
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