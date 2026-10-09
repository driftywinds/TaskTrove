var n = require("./913.js");
export function G(e) {
  let t = (0, n.a)(e);
  let r = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  r.setUTCFullYear(t.getFullYear());
  return e - r;
}