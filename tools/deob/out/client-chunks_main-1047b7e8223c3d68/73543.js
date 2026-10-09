function r(e) {
  return new URL(e, "http://n").searchParams;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "asPathToSearchParams", {
  enumerable: true,
  get: function () {
    return r;
  }
});