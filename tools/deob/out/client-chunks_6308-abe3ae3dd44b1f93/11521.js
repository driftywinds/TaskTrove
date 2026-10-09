var n = require(/*webcrack:missing*/"./13225.js");
let o = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e;
let i = n.$;
export let F = (e, t) => r => {
  var n;
  if ((t == null ? undefined : t.variants) == null) {
    return i(e, r == null ? undefined : r.class, r == null ? undefined : r.className);
  }
  let {
    variants: a,
    defaultVariants: s
  } = t;
  let l = Object.keys(a).map(e => {
    let t = r == null ? undefined : r[e];
    let n = s == null ? undefined : s[e];
    if (t === null) {
      return null;
    }
    let i = o(t) || o(n);
    return a[e][i];
  });
  let u = r && Object.entries(r).reduce((e, t) => {
    let [r, n] = t;
    if (n !== undefined) {
      e[r] = n;
    }
    return e;
  }, {});
  return i(e, l, t == null || (n = t.compoundVariants) == null ? undefined : n.reduce((e, t) => {
    let {
      class: r,
      className: n,
      ...o
    } = t;
    if (Object.entries(o).every(e => {
      let [t, r] = e;
      if (Array.isArray(r)) {
        return r.includes({
          ...s,
          ...u
        }[t]);
      } else {
        return {
          ...s,
          ...u
        }[t] === r;
      }
    })) {
      return [...e, r, n];
    } else {
      return e;
    }
  }, []), r == null ? undefined : r.class, r == null ? undefined : r.className);
};