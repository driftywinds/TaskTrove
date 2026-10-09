var n = require(/*webcrack:missing*/"./87849.js");
let o = e => {
  let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) => r ? r.toUpperCase() : t.toLowerCase());
  return t.charAt(0).toUpperCase() + t.slice(1);
};
let i = (...e) => e.filter((e, t, r) => !!e && e.trim() !== "" && r.indexOf(e) === t).join(" ").trim();
var a = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
let s = (0, n.forwardRef)(({
  color: e = "currentColor",
  size: t = 24,
  strokeWidth: r = 2,
  absoluteStrokeWidth: o,
  className: s = "",
  children: l,
  iconNode: u,
  ...c
}, d) => (0, n.createElement)("svg", {
  ref: d,
  ...a,
  width: t,
  height: t,
  stroke: e,
  strokeWidth: o ? Number(r) * 24 / Number(t) : r,
  className: i("lucide", s),
  ...(!l && !(e => {
    for (let t in e) {
      if (t.startsWith("aria-") || t === "role" || t === "title") {
        return true;
      }
    }
  })(c) && {
    "aria-hidden": "true"
  }),
  ...c
}, [...u.map(([e, t]) => (0, n.createElement)(e, t)), ...(Array.isArray(l) ? l : [l])]));
export let A = (e, t) => {
  let r = (0, n.forwardRef)(({
    className: r,
    ...a
  }, l) => (0, n.createElement)(s, {
    ref: l,
    iconNode: t,
    className: i(`lucide-${o(e).replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`, `lucide-${e}`, r),
    ...a
  }));
  r.displayName = o(e);
  return r;
};