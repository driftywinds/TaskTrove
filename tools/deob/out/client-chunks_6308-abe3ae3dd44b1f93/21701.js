var n = require(/*webcrack:missing*/"./87849.js");
function o(e, t) {
  if (typeof e == "function") {
    return e(t);
  }
  if (e != null) {
    e.current = t;
  }
}
export function t(...e) {
  return t => {
    let r = false;
    let n = e.map(e => {
      let n = o(e, t);
      if (!r && typeof n == "function") {
        r = true;
      }
      return n;
    });
    if (r) {
      return () => {
        for (let t = 0; t < n.length; t++) {
          let r = n[t];
          if (typeof r == "function") {
            r();
          } else {
            o(e[t], null);
          }
        }
      };
    }
  };
}
export function s(...e) {
  return n.useCallback(t(...e), e);
}