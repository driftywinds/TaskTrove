Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "assignLocation", {
  enumerable: true,
  get: function () {
    return u;
  }
});
let n = require("./36815.js");
function u(e, t) {
  if (e.startsWith(".")) {
    let r = t.origin + t.pathname;
    return new URL((r.endsWith("/") ? r : r + "/") + e);
  }
  return new URL((0, n.addBasePath)(e), t.href);
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}