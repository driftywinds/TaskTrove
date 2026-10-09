Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "hasInterceptionRouteInCurrentTree", {
  enumerable: true,
  get: function () {
    return function e([t, r]) {
      if (Array.isArray(t) && (t[2] === "di(..)(..)" || t[2] === "ci(..)(..)" || t[2] === "di(.)" || t[2] === "ci(.)" || t[2] === "di(..)" || t[2] === "ci(..)" || t[2] === "di(...)" || t[2] === "ci(...)") || typeof t == "string" && (0, n.isInterceptionRouteAppPath)(t)) {
        return true;
      }
      if (r) {
        for (let t in r) {
          if (e(r[t])) {
            return true;
          }
        }
      }
      return false;
    };
  }
});
let n = require("./87573.js");
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}