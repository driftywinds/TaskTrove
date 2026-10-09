function r(e) {
  return e !== null && typeof e == "object" && "then" in e && typeof e.then == "function";
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isThenable", {
  enumerable: true,
  get: function () {
    return r;
  }
});