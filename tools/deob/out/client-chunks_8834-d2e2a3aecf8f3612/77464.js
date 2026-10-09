Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isNavigatingToNewRootLayout", {
  enumerable: true,
  get: function () {
    return function e(t, r) {
      let n = t[0];
      let u = r[0];
      if (Array.isArray(n) && Array.isArray(u)) {
        if (n[0] !== u[0] || n[2] !== u[2]) {
          return true;
        }
      } else if (n !== u) {
        return true;
      }
      if (t[4]) {
        return !r[4];
      }
      if (r[4]) {
        return true;
      }
      let a = Object.values(t[1])[0];
      let l = Object.values(r[1])[0];
      return !a || !l || e(a, l);
    };
  }
});
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}