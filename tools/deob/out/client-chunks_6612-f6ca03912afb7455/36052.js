Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useMergedRef", {
  enumerable: true,
  get: function () {
    return o;
  }
});
let n = require(/*webcrack:missing*/"./87849.js");
function o(e, t) {
  let r = (0, n.useRef)(null);
  let o = (0, n.useRef)(null);
  return (0, n.useCallback)(n => {
    if (n === null) {
      let e = r.current;
      if (e) {
        r.current = null;
        e();
      }
      let t = o.current;
      if (t) {
        o.current = null;
        t();
      }
    } else {
      if (e) {
        r.current = u(e, n);
      }
      if (t) {
        o.current = u(t, n);
      }
    }
  }, [e, t]);
}
function u(e, t) {
  if (typeof e != "function") {
    e.current = t;
    return () => {
      e.current = null;
    };
  }
  {
    let r = e(t);
    if (typeof r == "function") {
      return r;
    } else {
      return () => e(null);
    }
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}