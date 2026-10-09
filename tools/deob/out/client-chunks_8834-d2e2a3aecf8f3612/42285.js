Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  onCaughtError: function () {
    return d;
  },
  onUncaughtError: function () {
    return p;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./21634.js");
let l = require("./54744.js");
let o = require("./97820.js");
let i = require("./87584.js");
let s = require("./70896.js");
let c = a._(require("./22963.js"));
let f = {
  decorateDevError: e => e,
  handleClientError: () => {},
  originConsoleError: console.error.bind(console)
};
function d(e, t) {
  let r;
  let n = t.errorBoundary?.constructor;
  if (r = r || n === s.ErrorBoundaryHandler && t.errorBoundary.props.errorComponent === c.default) {
    return p(e);
  }
  if (!(0, o.isBailoutToCSRError)(e) && !(0, l.isNextRouterError)(e)) {
    f.originConsoleError(e);
  }
}
function p(e) {
  if (!(0, o.isBailoutToCSRError)(e) && !(0, l.isNextRouterError)(e)) {
    (0, i.reportGlobalError)(e);
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}