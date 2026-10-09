Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  getObjectClassLabel: function () {
    return u;
  },
  isPlainObject: function () {
    return a;
  }
};
for (var n in r) {
  Object.defineProperty(exports, n, {
    enumerable: true,
    get: r[n]
  });
}
function u(e) {
  return Object.prototype.toString.call(e);
}
function a(e) {
  if (u(e) !== "[object Object]") {
    return false;
  }
  let t = Object.getPrototypeOf(e);
  return t === null || t.hasOwnProperty("isPrototypeOf");
}