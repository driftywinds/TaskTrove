function r(e) {
  return e === "/api" || !!(e == null ? undefined : e.startsWith("/api/"));
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isAPIRoute", {
  enumerable: true,
  get: function () {
    return r;
  }
});