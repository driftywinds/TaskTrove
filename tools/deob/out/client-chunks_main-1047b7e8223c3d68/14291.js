Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "normalizePathTrailingSlash", {
  enumerable: true,
  get: function () {
    return o;
  }
});
let n = require("./97616.js");
let a = require("./73004.js");
let o = e => {
  if (!e.startsWith("/")) {
    return e;
  }
  let {
    pathname: t,
    query: r,
    hash: o
  } = (0, a.parsePath)(e);
  return `${(0, n.removeTrailingSlash)(t)}${r}${o}`;
};
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}