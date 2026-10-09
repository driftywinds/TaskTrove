Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  BailoutToCSRError: function () {
    return a;
  },
  isBailoutToCSRError: function () {
    return l;
  }
};
for (var n in r) {
  Object.defineProperty(exports, n, {
    enumerable: true,
    get: r[n]
  });
}
let u = "BAILOUT_TO_CLIENT_SIDE_RENDERING";
class a extends Error {
  constructor(e) {
    super(`Bail out to client-side rendering: ${e}`);
    this.reason = e;
    this.digest = u;
  }
}
function l(e) {
  return typeof e == "object" && e !== null && "digest" in e && e.digest === u;
}