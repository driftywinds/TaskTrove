Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  djb2Hash: function () {
    return u;
  },
  hexHash: function () {
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
  let t = 5381;
  for (let r = 0; r < e.length; r++) {
    t = (t << 5) + t + e.charCodeAt(r) | 0;
  }
  return t >>> 0;
}
function a(e) {
  return u(e).toString(36).slice(0, 5);
}