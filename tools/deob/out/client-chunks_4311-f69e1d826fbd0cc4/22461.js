var n = require("./62193.js");
export function w(e, t) {
  if (typeof e == "function") {
    return e(t);
  } else if (e && typeof e == "object" && n._P in e) {
    return e[n._P](t);
  } else if (e instanceof Date) {
    return new e.constructor(t);
  } else {
    return new Date(t);
  }
}