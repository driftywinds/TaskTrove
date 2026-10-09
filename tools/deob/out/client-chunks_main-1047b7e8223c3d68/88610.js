Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "pathHasPrefix", {
  enumerable: true,
  get: function () {
    return a;
  }
});
let n = require("./73004.js");
function a(e, t) {
  if (typeof e != "string") {
    return false;
  }
  let {
    pathname: r
  } = (0, n.parsePath)(e);
  return r === t || r.startsWith(t + "/");
}