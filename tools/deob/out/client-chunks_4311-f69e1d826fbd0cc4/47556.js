var n = require("./22461.js");
var i = require("./23514.js");
var a = require("./913.js");
export function p(e, t) {
  let r = (0, a.a)(e, t?.in);
  let o = r.getFullYear();
  let s = (0, n.w)(r, 0);
  s.setFullYear(o + 1, 0, 4);
  s.setHours(0, 0, 0, 0);
  let u = (0, i.b)(s);
  let l = (0, n.w)(r, 0);
  l.setFullYear(o, 0, 4);
  l.setHours(0, 0, 0, 0);
  let c = (0, i.b)(l);
  if (r.getTime() >= u.getTime()) {
    return o + 1;
  } else if (r.getTime() >= c.getTime()) {
    return o;
  } else {
    return o - 1;
  }
}