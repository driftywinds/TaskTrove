Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return o;
  }
});
let n = require(/*webcrack:missing*/"./21634.js")._(require("./75579.js"));
function o(e, t) {
  let r = {};
  if (typeof e == "function") {
    r.loader = e;
  }
  let o = {
    ...r,
    ...t
  };
  return (0, n.default)({
    ...o,
    modules: o.loadableGenerated?.modules
  });
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}