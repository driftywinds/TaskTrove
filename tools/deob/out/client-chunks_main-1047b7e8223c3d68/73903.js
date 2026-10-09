Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  PARAMETER_PATTERN: function () {
    return c;
  },
  getDynamicParam: function () {
    return l;
  },
  interpolateParallelRouteParams: function () {
    return u;
  },
  parseMatchedParameter: function () {
    return d;
  },
  parseParameter: function () {
    return f;
  }
};
for (var a in n) {
  Object.defineProperty(exports, a, {
    enumerable: true,
    get: n[a]
  });
}
let o = require("./23014.js");
let i = require("./87971.js");
let s = require("./55799.js");
function u(e, t, r, n) {
  let a = structuredClone(t);
  let o = [{
    tree: e,
    depth: 0
  }];
  let u = r.split("/").slice(1);
  while (o.length > 0) {
    let {
      tree: e,
      depth: t
    } = o.pop();
    let {
      segment: r,
      parallelRoutes: l
    } = (0, i.parseLoaderTree)(e);
    let c = (0, s.getSegmentParam)(r);
    if (c && !a.hasOwnProperty(c.param) && !n?.has(c.param)) {
      switch (c.type) {
        case "catchall":
        case "optional-catchall":
        case "catchall-intercepted-(..)(..)":
        case "catchall-intercepted-(.)":
        case "catchall-intercepted-(..)":
        case "catchall-intercepted-(...)":
          let f = u.slice(t).flatMap(e => {
            let t = (0, s.getSegmentParam)(e);
            if (t) {
              return a[t.param];
            } else {
              return e;
            }
          }).filter(e => e !== undefined);
          if (f.length > 0) {
            a[c.param] = f;
          }
          break;
        case "dynamic":
        case "dynamic-intercepted-(..)(..)":
        case "dynamic-intercepted-(.)":
        case "dynamic-intercepted-(..)":
        case "dynamic-intercepted-(...)":
          if (t < u.length) {
            let e = u[t];
            let r = (0, s.getSegmentParam)(e);
            a[c.param] = r ? a[r.param] : e;
          }
          break;
        default:
          c.type;
      }
    }
    let d = t;
    if ((!r.startsWith("(") || !r.endsWith(")")) && r !== "") {
      d++;
    }
    for (let e of Object.values(l)) {
      o.push({
        tree: e,
        depth: d
      });
    }
  }
  return a;
}
function l(e, t, r, n) {
  let a = function (e, t, r) {
    let n = e[t];
    if (r?.has(t)) {
      let [e] = r.get(t);
      n = e;
    } else if (Array.isArray(n)) {
      n = n.map(e => encodeURIComponent(e));
    } else if (typeof n == "string") {
      n = encodeURIComponent(n);
    }
    return n;
  }(e, t, n);
  if (!a || a.length === 0) {
    if (r === "oc") {
      return {
        param: t,
        value: null,
        type: r,
        treeSegment: [t, "", r]
      };
    }
    throw Object.defineProperty(new o.InvariantError(`Missing value for segment key: "${t}" with dynamic param type: ${r}`), "__NEXT_ERROR_CODE", {
      value: "E864",
      enumerable: false,
      configurable: true
    });
  }
  return {
    param: t,
    value: a,
    treeSegment: [t, Array.isArray(a) ? a.join("/") : a, r],
    type: r
  };
}
let c = /^([^[]*)\[((?:\[[^\]]*\])|[^\]]+)\](.*)$/;
function f(e) {
  let t = e.match(c);
  if (t) {
    return d(t[2]);
  } else {
    return d(e);
  }
}
function d(e) {
  let t = e.startsWith("[") && e.endsWith("]");
  if (t) {
    e = e.slice(1, -1);
  }
  let r = e.startsWith("...");
  if (r) {
    e = e.slice(3);
  }
  return {
    key: e,
    repeat: r,
    optional: t
  };
}