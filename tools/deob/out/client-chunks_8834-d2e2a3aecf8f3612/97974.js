Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  ServerInsertedHTMLContext: function () {
    return l;
  },
  useServerInsertedHTML: function () {
    return o;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./38035.js")._(require("./87849.js"));
let l = a.default.createContext(null);
function o(e) {
  let t = (0, a.useContext)(l);
  if (t) {
    t(e);
  }
}