Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  default: function () {
    return l;
  },
  getProperError: function () {
    return o;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./1375.js");
function l(e) {
  return typeof e == "object" && e !== null && "name" in e && "message" in e;
}
function o(e) {
  let t;
  if (l(e)) {
    return e;
  } else {
    return Object.defineProperty(Error((0, a.isPlainObject)(e) ? (t = new WeakSet(), JSON.stringify(e, (e, r) => {
      if (typeof r == "object" && r !== null) {
        if (t.has(r)) {
          return "[Circular]";
        }
        t.add(r);
      }
      return r;
    })) : e + ""), "__NEXT_ERROR_CODE", {
      value: "E394",
      enumerable: false,
      configurable: true
    });
  }
}