var n = require("./22461.js");
var i = require("./913.js");
export function P(e, t, r) {
  let a = (0, i.a)(e, r?.in);
  if (isNaN(t)) {
    return (0, n.w)(r?.in || e, NaN);
  }
  if (!t) {
    return a;
  }
  let o = a.getDate();
  let s = (0, n.w)(r?.in || e, a.getTime());
  s.setMonth(a.getMonth() + t + 1, 0);
  if (o >= s.getDate()) {
    return s;
  } else {
    a.setFullYear(s.getFullYear(), s.getMonth(), o);
    return a;
  }
}