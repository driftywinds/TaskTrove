Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isLocalURL", {
  enumerable: true,
  get: function () {
    return u;
  }
});
let n = require("./55401.js");
let o = require(/*webcrack:missing*/"./15200.js");
function u(e) {
  if (!(0, n.isAbsoluteUrl)(e)) {
    return true;
  }
  try {
    let t = (0, n.getLocationOrigin)();
    let r = new URL(e, t);
    return r.origin === t && (0, o.hasBasePath)(r.pathname);
  } catch (e) {
    return false;
  }
}