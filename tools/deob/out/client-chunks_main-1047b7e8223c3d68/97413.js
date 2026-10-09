Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "addLocale", {
  enumerable: true,
  get: function () {
    return o;
  }
});
let n = require("./60723.js");
let a = require("./88610.js");
function o(e, t, r, o) {
  if (!t || t === r) {
    return e;
  }
  let i = e.toLowerCase();
  if (!o && ((0, a.pathHasPrefix)(i, "/api") || (0, a.pathHasPrefix)(i, `/${t.toLowerCase()}`))) {
    return e;
  } else {
    return (0, n.addPathPrefix)(e, `/${t}`);
  }
}