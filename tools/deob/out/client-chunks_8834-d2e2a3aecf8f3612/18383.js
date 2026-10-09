var r = Symbol.for("react.transitional.element");
function n(e, t, n) {
  var u = null;
  if (n !== undefined) {
    u = "" + n;
  }
  if (t.key !== undefined) {
    u = "" + t.key;
  }
  if ("key" in t) {
    n = {};
    for (var a in t) {
      if (a !== "key") {
        n[a] = t[a];
      }
    }
  } else {
    n = t;
  }
  return {
    $$typeof: r,
    type: e,
    key: u,
    ref: (t = n.ref) !== undefined ? t : null,
    props: n
  };
}
exports.Fragment = Symbol.for("react.fragment");
exports.jsx = n;
exports.jsxs = n;