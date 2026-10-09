function r(e) {
  return e.replace(/\/$/, "") || "/";
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "removeTrailingSlash", {
  enumerable: true,
  get: function () {
    return r;
  }
});