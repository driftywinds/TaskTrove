function r(e, t) {
  let r = {};
  Object.keys(e).forEach(n => {
    if (!t.includes(n)) {
      r[n] = e[n];
    }
  });
  return r;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "omit", {
  enumerable: true,
  get: function () {
    return r;
  }
});