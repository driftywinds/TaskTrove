Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  UnrecognizedActionError: function () {
    return u;
  },
  unstable_isUnrecognizedActionError: function () {
    return a;
  }
};
for (var n in r) {
  Object.defineProperty(exports, n, {
    enumerable: true,
    get: r[n]
  });
}
class u extends Error {
  constructor(...e) {
    super(...e);
    this.name = "UnrecognizedActionError";
  }
}
function a(e) {
  return !!e && typeof e == "object" && !!(e instanceof u);
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}