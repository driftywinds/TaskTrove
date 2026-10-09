Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  computeChangedPath: function () {
    return f;
  },
  extractPathFromFlightRouterState: function () {
    return c;
  },
  getSelectedParams: function () {
    return function e(t, r = {}) {
      for (let n of Object.values(t[1])) {
        let t = n[0];
        let u = Array.isArray(t);
        let a = u ? t[1] : t;
        if (!!a && !a.startsWith(l.PAGE_SEGMENT_KEY)) {
          if (u && (t[2] === "c" || t[2] === "oc")) {
            r[t[0]] = t[1].split("/");
          } else if (u) {
            r[t[0]] = t[1];
          }
          r = e(n, r);
        }
      }
      return r;
    };
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./87573.js");
let l = require("./47325.js");
let o = require("./80949.js");
let i = e => typeof e == "string" ? e === "children" ? "" : e : e[1];
function s(e) {
  return e.reduce((e, t) => {
    let r;
    if ((t = (r = t)[0] === "/" ? r.slice(1) : r) === "" || (0, l.isGroupSegment)(t)) {
      return e;
    } else {
      return `${e}/${t}`;
    }
  }, "") || "/";
}
function c(e) {
  let t = Array.isArray(e[0]) ? e[0][1] : e[0];
  if (t === l.DEFAULT_SEGMENT_KEY || a.INTERCEPTION_ROUTE_MARKERS.some(e => t.startsWith(e))) {
    return;
  }
  if (t.startsWith(l.PAGE_SEGMENT_KEY)) {
    return "";
  }
  let r = [i(t)];
  let n = e[1] ?? {};
  let u = n.children ? c(n.children) : undefined;
  if (u !== undefined) {
    r.push(u);
  } else {
    for (let [e, t] of Object.entries(n)) {
      if (e === "children") {
        continue;
      }
      let n = c(t);
      if (n !== undefined) {
        r.push(n);
      }
    }
  }
  return s(r);
}
function f(e, t) {
  let r = function e(t, r) {
    let [n, u] = t;
    let [l, s] = r;
    let f = i(n);
    let d = i(l);
    if (a.INTERCEPTION_ROUTE_MARKERS.some(e => f.startsWith(e) || d.startsWith(e))) {
      return "";
    }
    if (!(0, o.matchSegment)(n, l)) {
      return c(r) ?? "";
    }
    for (let t in u) {
      if (s[t]) {
        let r = e(u[t], s[t]);
        if (r !== null) {
          return `${i(l)}/${r}`;
        }
      }
    }
    return null;
  }(e, t);
  if (r == null || r === "/") {
    return r;
  } else {
    return s(r.split("/"));
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}