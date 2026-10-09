Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  getParamProperties: function () {
    return u;
  },
  getSegmentParam: function () {
    return i;
  },
  isCatchAll: function () {
    return s;
  }
};
for (var a in n) {
  Object.defineProperty(exports, a, {
    enumerable: true,
    get: n[a]
  });
}
let o = require("./69478.js");
function i(e) {
  let t = o.INTERCEPTION_ROUTE_MARKERS.find(t => e.startsWith(t));
  if (t) {
    e = e.slice(t.length);
  }
  if (e.startsWith("[[...") && e.endsWith("]]")) {
    return {
      type: "optional-catchall",
      param: e.slice(5, -2)
    };
  } else if (e.startsWith("[...") && e.endsWith("]")) {
    return {
      type: t ? `catchall-intercepted-${t}` : "catchall",
      param: e.slice(4, -1)
    };
  } else if (e.startsWith("[") && e.endsWith("]")) {
    return {
      type: t ? `dynamic-intercepted-${t}` : "dynamic",
      param: e.slice(1, -1)
    };
  } else {
    return null;
  }
}
function s(e) {
  return e === "catchall" || e === "catchall-intercepted-(..)(..)" || e === "catchall-intercepted-(.)" || e === "catchall-intercepted-(..)" || e === "catchall-intercepted-(...)" || e === "optional-catchall";
}
function u(e) {
  let t = false;
  let r = false;
  switch (e) {
    case "catchall":
    case "catchall-intercepted-(..)(..)":
    case "catchall-intercepted-(.)":
    case "catchall-intercepted-(..)":
    case "catchall-intercepted-(...)":
      t = true;
      break;
    case "optional-catchall":
      t = true;
      r = true;
  }
  return {
    repeat: t,
    optional: r
  };
}