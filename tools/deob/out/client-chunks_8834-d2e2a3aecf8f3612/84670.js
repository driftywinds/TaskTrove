function r() {
  let e;
  let t;
  let r = new Promise((r, n) => {
    e = r;
    t = n;
  });
  return {
    resolve: e,
    reject: t,
    promise: r
  };
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createPromiseWithResolvers", {
  enumerable: true,
  get: function () {
    return r;
  }
});