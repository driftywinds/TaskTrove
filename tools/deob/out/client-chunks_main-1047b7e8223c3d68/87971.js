Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "parseLoaderTree", {
  enumerable: true,
  get: function () {
    return a;
  }
});
let n = require("./29796.js");
function a(e) {
  let [t, r, a] = e;
  let {
    layout: o,
    template: i
  } = a;
  let {
    page: s
  } = a;
  s = t === n.DEFAULT_SEGMENT_KEY ? a.defaultPage : s;
  let u = o?.[1] || i?.[1] || s?.[1];
  return {
    page: s,
    segment: t,
    modules: a,
    conventionPath: u,
    parallelRoutes: r
  };
}