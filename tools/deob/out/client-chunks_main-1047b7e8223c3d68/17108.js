Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  AppRouterContext: function () {
    return i;
  },
  GlobalLayoutRouterContext: function () {
    return u;
  },
  LayoutRouterContext: function () {
    return s;
  },
  MissingSlotContext: function () {
    return c;
  },
  TemplateContext: function () {
    return l;
  }
};
for (var a in n) {
  Object.defineProperty(exports, a, {
    enumerable: true,
    get: n[a]
  });
}
let o = require("./34007.js")._(require(/*webcrack:missing*/"./74361.js"));
let i = o.default.createContext(null);
let s = o.default.createContext(null);
let u = o.default.createContext(null);
let l = o.default.createContext(null);
let c = o.default.createContext(new Set());