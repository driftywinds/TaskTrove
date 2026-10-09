function n(e, t = {}) {
  if (t.onlyHashChange) {
    e();
    return;
  }
  let r = document.documentElement;
  if (r.dataset.scrollBehavior !== "smooth") {
    e();
    return;
  }
  let a = r.style.scrollBehavior;
  r.style.scrollBehavior = "auto";
  if (!t.dontForceLayout) {
    r.getClientRects();
  }
  e();
  r.style.scrollBehavior = a;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "disableSmoothScrollDuringRouteTransition", {
  enumerable: true,
  get: function () {
    return n;
  }
});
require("./81533.js");