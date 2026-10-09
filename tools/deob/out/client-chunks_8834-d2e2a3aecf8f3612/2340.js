Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "normalizePathTrailingSlash", {
  enumerable: true,
  get: function () {
    return a;
  }
});
let n = require("./4011.js");
let u = require("./46169.js");
let a = e => {
  if (!e.startsWith("/")) {
    return e;
  }
  let {
    pathname: t,
    query: r,
    hash: a
  } = (0, u.parsePath)(e);
  return `${(0, n.removeTrailingSlash)(t)}${r}${a}`;
};
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}