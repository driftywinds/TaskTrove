Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  BailoutToCSRError: function () {
    return o;
  },
  isBailoutToCSRError: function () {
    return i;
  }
};
for (var n in r) {
  Object.defineProperty(exports, n, {
    enumerable: true,
    get: r[n]
  });
}
let a = "BAILOUT_TO_CLIENT_SIDE_RENDERING";
class o extends Error {
  constructor(e) {
    super(`Bail out to client-side rendering: ${e}`);
    this.reason = e;
    this.digest = a;
  }
}
function i(e) {
  return typeof e == "object" && e !== null && "digest" in e && e.digest === a;
}