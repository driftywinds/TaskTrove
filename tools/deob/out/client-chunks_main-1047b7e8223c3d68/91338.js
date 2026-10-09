Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "addBasePath", {
  enumerable: true,
  get: function () {
    return o;
  }
});
let n = require("./60723.js");
let a = require("./14291.js");
function o(e, t) {
  return (0, a.normalizePathTrailingSlash)((0, n.addPathPrefix)(e, ""));
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}