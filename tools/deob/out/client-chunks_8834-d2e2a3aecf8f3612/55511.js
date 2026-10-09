Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useRouterBFCache", {
  enumerable: true,
  get: function () {
    return u;
  }
});
let n = require("./87849.js");
function u(e, t) {
  let [r, u] = (0, n.useState)(() => ({
    tree: e,
    stateKey: t,
    next: null
  }));
  if (r.tree === e) {
    return r;
  }
  let a = {
    tree: e,
    stateKey: t,
    next: null
  };
  let l = 1;
  let o = r;
  let i = a;
  while (o !== null && l < 1) {
    if (o.stateKey === t) {
      i.next = o.next;
      break;
    }
    {
      l++;
      let e = {
        tree: o.tree,
        stateKey: o.stateKey,
        next: null
      };
      i.next = e;
      i = e;
    }
    o = o.next;
  }
  u(a);
  return a;
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}