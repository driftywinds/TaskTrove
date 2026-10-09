Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createRouterCacheKey", {
  enumerable: true,
  get: function () {
    return u;
  }
});
let n = require("./47325.js");
function u(e, t = false) {
  if (Array.isArray(e)) {
    return `${e[0]}|${e[1]}|${e[2]}`;
  } else if (t && e.startsWith(n.PAGE_SEGMENT_KEY)) {
    return n.PAGE_SEGMENT_KEY;
  } else {
    return e;
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}