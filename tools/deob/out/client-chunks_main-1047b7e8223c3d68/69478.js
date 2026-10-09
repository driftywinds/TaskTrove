Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  INTERCEPTION_ROUTE_MARKERS: function () {
    return i;
  },
  extractInterceptionRouteInformation: function () {
    return u;
  },
  isInterceptionRouteAppPath: function () {
    return s;
  }
};
for (var a in n) {
  Object.defineProperty(exports, a, {
    enumerable: true,
    get: n[a]
  });
}
let o = require("./1597.js");
let i = ["(..)(..)", "(.)", "(..)", "(...)"];
function s(e) {
  return e.split("/").find(e => i.find(t => e.startsWith(t))) !== undefined;
}
function u(e) {
  let t;
  let r;
  let n;
  for (let a of e.split("/")) {
    if (r = i.find(e => a.startsWith(e))) {
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
  t = (0, o.normalizeAppPath)(t);
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
      let a = t.split("/");
      if (a.length <= 2) {
        throw Object.defineProperty(Error(`Invalid interception route: ${e}. Cannot use (..)(..) marker at the root level or one level up.`), "__NEXT_ERROR_CODE", {
          value: "E486",
          enumerable: false,
          configurable: true
        });
      }
      n = a.slice(0, -2).concat(n).join("/");
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