Object.defineProperty(exports, "__esModule", {
  value: true
});
var n;
var a = {
  REDIRECT_ERROR_CODE: function () {
    return s;
  },
  RedirectType: function () {
    return u;
  },
  isRedirectError: function () {
    return l;
  }
};
for (var o in a) {
  Object.defineProperty(exports, o, {
    enumerable: true,
    get: a[o]
  });
}
let i = require("./2655.js");
let s = "NEXT_REDIRECT";
(n = {}).push = "push";
n.replace = "replace";
var u = n;
function l(e) {
  if (typeof e != "object" || e === null || !("digest" in e) || typeof e.digest != "string") {
    return false;
  }
  let t = e.digest.split(";");
  let [r, n] = t;
  let a = t.slice(2, -2).join(";");
  let o = Number(t.at(-2));
  return r === s && (n === "replace" || n === "push") && typeof a == "string" && !isNaN(o) && o in i.RedirectStatusCode;
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}