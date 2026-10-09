Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  NavigationPromisesContext: function () {
    return l;
  },
  PathParamsContext: function () {
    return u;
  },
  PathnameContext: function () {
    return s;
  },
  SearchParamsContext: function () {
    return i;
  },
  createDevToolsInstrumentedPromise: function () {
    return c;
  }
};
for (var a in n) {
  Object.defineProperty(exports, a, {
    enumerable: true,
    get: n[a]
  });
}
let o = require(/*webcrack:missing*/"./74361.js");
let i = (0, o.createContext)(null);
let s = (0, o.createContext)(null);
let u = (0, o.createContext)(null);
let l = (0, o.createContext)(null);
function c(e, t) {
  let r = Promise.resolve(t);
  r.status = "fulfilled";
  r.value = t;
  r.displayName = `${e} (SSR)`;
  return r;
}