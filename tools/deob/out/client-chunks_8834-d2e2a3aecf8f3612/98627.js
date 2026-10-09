function r(e) {
  if (e.startsWith("/")) {
    return e;
  } else {
    return `/${e}`;
  }
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ensureLeadingSlash", {
  enumerable: true,
  get: function () {
    return r;
  }
});