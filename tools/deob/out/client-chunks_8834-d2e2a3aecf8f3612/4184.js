Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "callServer", {
  enumerable: true,
  get: function () {
    return l;
  }
});
let n = require("./87849.js");
let u = require("./58040.js");
let a = require("./48909.js");
async function l(e, t) {
  return new Promise((r, l) => {
    (0, n.startTransition)(() => {
      (0, a.dispatchAppRouterAction)({
        type: u.ACTION_SERVER_ACTION,
        actionId: e,
        actionArgs: t,
        resolve: r,
        reject: l
      });
    });
  });
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}