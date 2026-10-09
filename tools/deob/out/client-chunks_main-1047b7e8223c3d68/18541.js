Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "denormalizePagePath", {
  enumerable: true,
  get: function () {
    return o;
  }
});
let n = require("./3283.js");
let a = require("./80665.js");
function o(e) {
  let t = (0, a.normalizePathSep)(e);
  if (t.startsWith("/index/") && !(0, n.isDynamicRoute)(t)) {
    return t.slice(6);
  } else if (t !== "/index") {
    return t;
  } else {
    return "/";
  }
}