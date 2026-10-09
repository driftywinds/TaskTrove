Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isLocalURL", {
  enumerable: true,
  get: function () {
    return o;
  }
});
let n = require("./58492.js");
let a = require("./47161.js");
function o(e) {
  if (!(0, n.isAbsoluteUrl)(e)) {
    return true;
  }
  try {
    let t = (0, n.getLocationOrigin)();
    let r = new URL(e, t);
    return r.origin === t && (0, a.hasBasePath)(r.pathname);
  } catch (e) {
    return false;
  }
}