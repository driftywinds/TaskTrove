Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isDynamicRoute", {
  enumerable: true,
  get: function () {
    return i;
  }
});
let n = require("./69478.js");
let a = /\/[^/]*\[[^/]+\][^/]*(?=\/|$)/;
let o = /\/\[[^/]+\](?=\/|$)/;
function i(e, t = true) {
  if ((0, n.isInterceptionRouteAppPath)(e)) {
    e = (0, n.extractInterceptionRouteInformation)(e).interceptedRoute;
  }
  if (t) {
    return o.test(e);
  } else {
    return a.test(e);
  }
}