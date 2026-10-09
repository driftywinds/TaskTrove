Object.defineProperty(exports, "__esModule", {
  value: true
});
require("./97476.js");
require("./30893.js");
let n = require("./25415.js");
window.next = {
  version: n.version,
  get router() {
    return n.router;
  },
  emitter: n.emitter
};
(0, n.initialize)({}).then(() => (0, n.hydrate)()).catch(console.error);
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}