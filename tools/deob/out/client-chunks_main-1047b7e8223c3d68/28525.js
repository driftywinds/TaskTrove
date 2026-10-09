Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  isRecoverableError: function () {
    return c;
  },
  onRecoverableError: function () {
    return f;
  }
};
for (var a in n) {
  Object.defineProperty(exports, a, {
    enumerable: true,
    get: n[a]
  });
}
let o = require("./34007.js");
let i = require("./91089.js");
let s = o._(require("./56834.js"));
let u = require("./94483.js");
let l = new WeakSet();
function c(e) {
  return l.has(e);
}
let f = e => {
  let t = (0, s.default)(e) && "cause" in e ? e.cause : e;
  if (!(0, i.isBailoutToCSRError)(t)) {
    (0, u.reportGlobalError)(t);
  }
};
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}