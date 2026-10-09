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
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./21634.js");
let l = require("./97820.js");
let o = a._(require("./19253.js"));
let i = require("./87584.js");
let s = new WeakSet();
function c(e) {
  return s.has(e);
}
let f = e => {
  let t = (0, o.default)(e) && "cause" in e ? e.cause : e;
  if (!(0, l.isBailoutToCSRError)(t)) {
    (0, i.reportGlobalError)(t);
  }
};
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}