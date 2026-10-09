Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  getSortedRouteObjects: function () {
    return o.getSortedRouteObjects;
  },
  getSortedRoutes: function () {
    return o.getSortedRoutes;
  },
  isDynamicRoute: function () {
    return i.isDynamicRoute;
  }
};
for (var a in n) {
  Object.defineProperty(exports, a, {
    enumerable: true,
    get: n[a]
  });
}
let o = require("./13281.js");
let i = require("./74325.js");