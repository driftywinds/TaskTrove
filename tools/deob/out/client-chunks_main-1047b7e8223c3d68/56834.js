Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  default: function () {
    return i;
  },
  getProperError: function () {
    return s;
  }
};
for (var a in n) {
  Object.defineProperty(exports, a, {
    enumerable: true,
    get: n[a]
  });
}
let o = require("./55374.js");
function i(e) {
  return typeof e == "object" && e !== null && "name" in e && "message" in e;
}
function s(e) {
  let t;
  if (i(e)) {
    return e;
  } else {
    return Object.defineProperty(Error((0, o.isPlainObject)(e) ? (t = new WeakSet(), JSON.stringify(e, (e, r) => {
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