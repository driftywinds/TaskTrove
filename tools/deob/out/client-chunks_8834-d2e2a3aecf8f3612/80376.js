Object.defineProperty(exports, "__esModule", {
  value: true
});
var n;
var u = {
  REDIRECT_ERROR_CODE: function () {
    return o;
  },
  RedirectType: function () {
    return i;
  },
  isRedirectError: function () {
    return s;
  }
};
for (var a in u) {
  Object.defineProperty(exports, a, {
    enumerable: true,
    get: u[a]
  });
}
let l = require("./11978.js");
let o = "NEXT_REDIRECT";
(n = {}).push = "push";
n.replace = "replace";
var i = n;
function s(e) {
  if (typeof e != "object" || e === null || !("digest" in e) || typeof e.digest != "string") {
    return false;
  }
  let t = e.digest.split(";");
  let [r, n] = t;
  let u = t.slice(2, -2).join(";");
  let a = Number(t.at(-2));
  return r === o && (n === "replace" || n === "push") && typeof u == "string" && !isNaN(a) && a in l.RedirectStatusCode;
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}