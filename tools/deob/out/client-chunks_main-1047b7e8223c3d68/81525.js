Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  cancelIdleCallback: function () {
    return o;
  },
  requestIdleCallback: function () {
    return a;
  }
};
for (var n in r) {
  Object.defineProperty(exports, n, {
    enumerable: true,
    get: r[n]
  });
}
let a = typeof self != "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (e) {
  let t = Date.now();
  return self.setTimeout(function () {
    e({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - t));
      }
    });
  }, 1);
};
let o = typeof self != "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (e) {
  return clearTimeout(e);
};
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}