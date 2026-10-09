Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "addBasePath", {
  enumerable: true,
  get: function () {
    return a;
  }
});
let n = require("./8148.js");
let u = require("./2340.js");
function a(e, t) {
  return (0, u.normalizePathTrailingSlash)((0, n.addPathPrefix)(e, ""));
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}