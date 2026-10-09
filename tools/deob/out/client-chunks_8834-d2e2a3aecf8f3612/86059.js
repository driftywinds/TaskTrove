Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "InvariantError", {
  enumerable: true,
  get: function () {
    return r;
  }
});
class r extends Error {
  constructor(e, t) {
    super(`Invariant: ${e.endsWith(".") ? e : e + "."} This is a bug in Next.js.`, t);
    this.name = "InvariantError";
  }
}