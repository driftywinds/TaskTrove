function r(e) {
  return e.split("/").map(e => encodeURIComponent(e)).join("/");
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "encodeURIPath", {
  enumerable: true,
  get: function () {
    return r;
  }
});