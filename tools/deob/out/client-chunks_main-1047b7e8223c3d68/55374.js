Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  getObjectClassLabel: function () {
    return a;
  },
  isPlainObject: function () {
    return o;
  }
};
for (var n in r) {
  Object.defineProperty(exports, n, {
    enumerable: true,
    get: r[n]
  });
}
function a(e) {
  return Object.prototype.toString.call(e);
}
function o(e) {
  if (a(e) !== "[object Object]") {
    return false;
  }
  let t = Object.getPrototypeOf(e);
  return t === null || t.hasOwnProperty("isPrototypeOf");
}