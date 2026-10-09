Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  AppRouterContext: function () {
    return l;
  },
  GlobalLayoutRouterContext: function () {
    return i;
  },
  LayoutRouterContext: function () {
    return o;
  },
  MissingSlotContext: function () {
    return c;
  },
  TemplateContext: function () {
    return s;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./21634.js")._(require("./87849.js"));
let l = a.default.createContext(null);
let o = a.default.createContext(null);
let i = a.default.createContext(null);
let s = a.default.createContext(null);
let c = a.default.createContext(new Set());