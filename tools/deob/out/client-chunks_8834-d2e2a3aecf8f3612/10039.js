Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return i;
  }
});
let n = require("./21634.js");
let u = require("./8349.js");
require("./87849.js");
let a = n._(require("./5670.js"));
let l = require("./70896.js");
let o = (0, require("./99552.js").isBot)(window.navigator.userAgent);
function i({
  children: e,
  errorComponent: t,
  errorStyles: r,
  errorScripts: n
}) {
  if (o) {
    return <a.default>{e}</a.default>;
  } else {
    return <l.ErrorBoundary errorComponent={t} errorStyles={r} errorScripts={n}>{e}</l.ErrorBoundary>;
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}