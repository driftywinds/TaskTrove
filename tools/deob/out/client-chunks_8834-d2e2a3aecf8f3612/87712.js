Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "reducer", {
  enumerable: true,
  get: function () {
    return c;
  }
});
let n = require("./58040.js");
let u = require("./88552.js");
let a = require("./74907.js");
let l = require("./94925.js");
let o = require("./63808.js");
let i = require("./12506.js");
let s = require("./34883.js");
let c = function (e, t) {
  switch (t.type) {
    case n.ACTION_NAVIGATE:
      return (0, u.navigateReducer)(e, t);
    case n.ACTION_SERVER_PATCH:
      return (0, a.serverPatchReducer)(e, t);
    case n.ACTION_RESTORE:
      return (0, l.restoreReducer)(e, t);
    case n.ACTION_REFRESH:
      return (0, o.refreshReducer)(e, t);
    case n.ACTION_HMR_REFRESH:
      return (0, i.hmrRefreshReducer)(e, t);
    case n.ACTION_SERVER_ACTION:
      return (0, s.serverActionReducer)(e, t);
    default:
      throw Object.defineProperty(Error("Unknown action"), "__NEXT_ERROR_CODE", {
        value: "E295",
        enumerable: false,
        configurable: true
      });
  }
};
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}