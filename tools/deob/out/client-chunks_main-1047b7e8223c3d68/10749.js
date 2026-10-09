function r(e, t = "") {
  return (e === "/" ? "/index" : /^\/index(\/|$)/.test(e) ? `/index${e}` : e) + t;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return r;
  }
});