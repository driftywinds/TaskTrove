var n = require("./913.js");
export function D(e, t) {
  let r = (0, n.a)(e, t?.in);
  r.setFullYear(r.getFullYear(), 0, 1);
  r.setHours(0, 0, 0, 0);
  return r;
}