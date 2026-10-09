Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  DEFAULT_SEGMENT_KEY: function () {
    return c;
  },
  PAGE_SEGMENT_KEY: function () {
    return s;
  },
  addSearchParamsIfPageSegment: function () {
    return o;
  },
  computeSelectedLayoutSegment: function () {
    return i;
  },
  getSegmentValue: function () {
    return u;
  },
  getSelectedLayoutSegmentPath: function () {
    return function e(t, r, n = true, a = []) {
      let l;
      if (n) {
        l = t[1][r];
      } else {
        let e = t[1];
        l = e.children ?? Object.values(e)[0];
      }
      if (!l) {
        return a;
      }
      let o = u(l[0]);
      if (!o || o.startsWith(s)) {
        return a;
      } else {
        a.push(o);
        return e(l, r, false, a);
      }
    };
  },
  isGroupSegment: function () {
    return a;
  },
  isParallelRouteSegment: function () {
    return l;
  }
};
for (var n in r) {
  Object.defineProperty(exports, n, {
    enumerable: true,
    get: r[n]
  });
}
function u(e) {
  if (Array.isArray(e)) {
    return e[1];
  } else {
    return e;
  }
}
function a(e) {
  return e[0] === "(" && e.endsWith(")");
}
function l(e) {
  return e.startsWith("@") && e !== "@children";
}
function o(e, t) {
  if (e.includes(s)) {
    let e = JSON.stringify(t);
    if (e !== "{}") {
      return s + "?" + e;
    } else {
      return s;
    }
  }
  return e;
}
function i(e, t) {
  if (!e || e.length === 0) {
    return null;
  }
  let r = t === "children" ? e[0] : e[e.length - 1];
  if (r === c) {
    return null;
  } else {
    return r;
  }
}
let s = "__PAGE__";
let c = "__DEFAULT__";