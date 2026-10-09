Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "matchSegment", {
  enumerable: true,
  get: function () {
    return r;
  }
});
let r = (e, t) => typeof e == "string" ? typeof t == "string" && e === t : typeof t != "string" && e[0] === t[0] && e[1] === t[1];
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}