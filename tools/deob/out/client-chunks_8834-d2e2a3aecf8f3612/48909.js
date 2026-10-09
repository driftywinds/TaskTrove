Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  dispatchAppRouterAction: function () {
    return i;
  },
  useActionQueue: function () {
    return s;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./38035.js")._(require("./87849.js"));
let l = require("./48636.js");
let o = null;
function i(e) {
  if (o === null) {
    throw Object.defineProperty(Error("Internal Next.js error: Router action dispatched before initialization."), "__NEXT_ERROR_CODE", {
      value: "E668",
      enumerable: false,
      configurable: true
    });
  }
  o(e);
}
function s(e) {
  let [t, r] = a.default.useState(e.state);
  o = t => e.dispatch(t, r);
  let n = (0, a.useMemo)(() => t, [t]);
  if ((0, l.isThenable)(n)) {
    return (0, a.use)(n);
  } else {
    return n;
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}