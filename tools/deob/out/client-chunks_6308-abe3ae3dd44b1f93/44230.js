export function h(e, t) {
  var r = Object.keys(e);
  var n = Object.keys(t);
  return r.length === n.length && r.every(function (r) {
    return Object.is(e[r], t[r]);
  });
}
export function m(e = h) {
  var t = null;
  return function (r) {
    if (t && e(t.value, r)) {
      return t.value;
    } else {
      return (t = {
        value: r
      }).value;
    }
  };
}