Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  getAppBuildId: function () {
    return l;
  },
  setAppBuildId: function () {
    return a;
  }
};
for (var n in r) {
  Object.defineProperty(exports, n, {
    enumerable: true,
    get: r[n]
  });
}
let u = "";
function a(e) {
  u = e;
}
function l() {
  return u;
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}