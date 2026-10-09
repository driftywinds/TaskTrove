var n = require("./22461.js");
var i = require("./913.js");
export function f(e, t, r) {
  let a = (0, i.a)(e, r?.in);
  if (isNaN(t)) {
    return (0, n.w)(r?.in || e, NaN);
  } else {
    if (t) {
      a.setDate(a.getDate() + t);
    }
    return a;
  }
}