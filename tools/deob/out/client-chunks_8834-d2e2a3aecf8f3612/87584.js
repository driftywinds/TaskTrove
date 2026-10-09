Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "reportGlobalError", {
  enumerable: true,
  get: function () {
    return r;
  }
});
let r = typeof reportError == "function" ? reportError : e => {
  globalThis.console.error(e);
};
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}