Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  NavigationPromisesContext: function () {
    return s;
  },
  PathParamsContext: function () {
    return i;
  },
  PathnameContext: function () {
    return o;
  },
  SearchParamsContext: function () {
    return l;
  },
  createDevToolsInstrumentedPromise: function () {
    return c;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./87849.js");
let l = (0, a.createContext)(null);
let o = (0, a.createContext)(null);
let i = (0, a.createContext)(null);
let s = (0, a.createContext)(null);
function c(e, t) {
  let r = Promise.resolve(t);
  r.status = "fulfilled";
  r.value = t;
  r.displayName = `${e} (SSR)`;
  return r;
}