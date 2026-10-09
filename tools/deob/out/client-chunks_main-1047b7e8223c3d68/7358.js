Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "removePathPrefix", {
  enumerable: true,
  get: function () {
    return a;
  }
});
let n = require("./88610.js");
function a(e, t) {
  if (!(0, n.pathHasPrefix)(e, t)) {
    return e;
  }
  let r = e.slice(t.length);
  if (r.startsWith("/")) {
    return r;
  } else {
    return `/${r}`;
  }
}