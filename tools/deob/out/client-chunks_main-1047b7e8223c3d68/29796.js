Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  DEFAULT_SEGMENT_KEY: function () {
    return c;
  },
  PAGE_SEGMENT_KEY: function () {
    return l;
  },
  addSearchParamsIfPageSegment: function () {
    return s;
  },
  computeSelectedLayoutSegment: function () {
    return u;
  },
  getSegmentValue: function () {
    return a;
  },
  getSelectedLayoutSegmentPath: function () {
    return function e(t, r, n = true, o = []) {
      let i;
      if (n) {
        i = t[1][r];
      } else {
        let e = t[1];
        i = e.children ?? Object.values(e)[0];
      }
      if (!i) {
        return o;
      }
      let s = a(i[0]);
      if (!s || s.startsWith(l)) {
        return o;
      } else {
        o.push(s);
        return e(i, r, false, o);
      }
    };
  },
  isGroupSegment: function () {
    return o;
  },
  isParallelRouteSegment: function () {
    return i;
  }
};
for (var n in r) {
  Object.defineProperty(exports, n, {
    enumerable: true,
    get: r[n]
  });
}
function a(e) {
  if (Array.isArray(e)) {
    return e[1];
  } else {
    return e;
  }
}
function o(e) {
  return e[0] === "(" && e.endsWith(")");
}
function i(e) {
  return e.startsWith("@") && e !== "@children";
}
function s(e, t) {
  if (e.includes(l)) {
    let e = JSON.stringify(t);
    if (e !== "{}") {
      return l + "?" + e;
    } else {
      return l;
    }
  }
  return e;
}
function u(e, t) {
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
let l = "__PAGE__";
let c = "__DEFAULT__";