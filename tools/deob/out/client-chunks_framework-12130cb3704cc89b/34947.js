var n = Symbol.for("react.transitional.element");
function r(e, t, r) {
  var l = null;
  if (r !== undefined) {
    l = "" + r;
  }
  if (t.key !== undefined) {
    l = "" + t.key;
  }
  if ("key" in t) {
    r = {};
    for (var a in t) {
      if (a !== "key") {
        r[a] = t[a];
      }
    }
  } else {
    r = t;
  }
  return {
    $$typeof: n,
    type: e,
    key: l,
    ref: (t = r.ref) !== undefined ? t : null,
    props: r
  };
}
exports.Fragment = Symbol.for("react.fragment");
exports.jsx = r;
exports.jsxs = r;