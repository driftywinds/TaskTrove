Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "addPathPrefix", {
  enumerable: true,
  get: function () {
    return u;
  }
});
let n = require("./46169.js");
function u(e, t) {
  if (!e.startsWith("/") || !t) {
    return e;
  }
  let {
    pathname: r,
    query: u,
    hash: a
  } = (0, n.parsePath)(e);
  return `${t}${r}${u}${a}`;
}