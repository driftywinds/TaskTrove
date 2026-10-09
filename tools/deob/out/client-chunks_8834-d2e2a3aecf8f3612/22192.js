Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  createPrefetchURL: function () {
    return i;
  },
  isExternalURL: function () {
    return o;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./99552.js");
let l = require("./36815.js");
function o(e) {
  return e.origin !== window.location.origin;
}
function i(e) {
  let t;
  if ((0, a.isBot)(window.navigator.userAgent)) {
    return null;
  }
  try {
    t = new URL((0, l.addBasePath)(e), window.location.href);
  } catch (t) {
    throw Object.defineProperty(Error(`Cannot prefetch '${e}' because it cannot be converted to a URL.`), "__NEXT_ERROR_CODE", {
      value: "E234",
      enumerable: false,
      configurable: true
    });
  }
  if (o(t)) {
    return null;
  } else {
    return t;
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}