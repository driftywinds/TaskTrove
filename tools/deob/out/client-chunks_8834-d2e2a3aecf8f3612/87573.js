Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  INTERCEPTION_ROUTE_MARKERS: function () {
    return l;
  },
  extractInterceptionRouteInformation: function () {
    return i;
  },
  isInterceptionRouteAppPath: function () {
    return o;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./69354.js");
let l = ["(..)(..)", "(.)", "(..)", "(...)"];
function o(e) {
  return e.split("/").find(e => l.find(t => e.startsWith(t))) !== undefined;
}
function i(e) {
  let t;
  let r;
  let n;
  for (let u of e.split("/")) {
    if (r = l.find(e => u.startsWith(e))) {
      [t, n] = e.split(r, 2);
      break;
    }
  }
  if (!t || !r || !n) {
    throw Object.defineProperty(Error(`Invalid interception route: ${e}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`), "__NEXT_ERROR_CODE", {
      value: "E269",
      enumerable: false,
      configurable: true
    });
  }
  t = (0, a.normalizeAppPath)(t);
  switch (r) {
    case "(.)":
      n = t === "/" ? `/${n}` : t + "/" + n;
      break;
    case "(..)":
      if (t === "/") {
        throw Object.defineProperty(Error(`Invalid interception route: ${e}. Cannot use (..) marker at the root level, use (.) instead.`), "__NEXT_ERROR_CODE", {
          value: "E207",
          enumerable: false,
          configurable: true
        });
      }
      n = t.split("/").slice(0, -1).concat(n).join("/");
      break;
    case "(...)":
      n = "/" + n;
      break;
    case "(..)(..)":
      let u = t.split("/");
      if (u.length <= 2) {
        throw Object.defineProperty(Error(`Invalid interception route: ${e}. Cannot use (..)(..) marker at the root level or one level up.`), "__NEXT_ERROR_CODE", {
          value: "E486",
          enumerable: false,
          configurable: true
        });
      }
      n = u.slice(0, -2).concat(n).join("/");
      break;
    default:
      throw Object.defineProperty(Error("Invariant: unexpected marker"), "__NEXT_ERROR_CODE", {
        value: "E112",
        enumerable: false,
        configurable: true
      });
  }
  return {
    interceptingRoute: t,
    interceptedRoute: n
  };
}