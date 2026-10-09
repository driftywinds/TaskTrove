Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "addPathSuffix", {
  enumerable: true,
  get: function () {
    return a;
  }
});
let n = require("./73004.js");
function a(e, t) {
  if (!e.startsWith("/") || !t) {
    return e;
  }
  let {
    pathname: r,
    query: a,
    hash: o
  } = (0, n.parsePath)(e);
  return `${r}${t}${a}${o}`;
}