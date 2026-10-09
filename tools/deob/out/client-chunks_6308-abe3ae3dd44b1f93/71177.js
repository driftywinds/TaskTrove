function r(e, t) {
  let r = e || 75;
  if (t?.qualities?.length) {
    return t.qualities.reduce((e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, 0);
  } else {
    return r;
  }
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "findClosestQuality", {
  enumerable: true,
  get: function () {
    return r;
  }
});