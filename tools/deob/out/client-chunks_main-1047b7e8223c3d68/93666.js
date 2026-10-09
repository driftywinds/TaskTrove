Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  safeCompile: function () {
    return u;
  },
  safePathToRegexp: function () {
    return s;
  },
  safeRegexpToFunction: function () {
    return l;
  },
  safeRouteMatcher: function () {
    return c;
  }
};
for (var a in n) {
  Object.defineProperty(exports, a, {
    enumerable: true,
    get: n[a]
  });
}
let o = require("./22927.js");
let i = require("./11863.js");
function s(e, t, r) {
  if (typeof e != "string") {
    return (0, o.pathToRegexp)(e, t, r);
  }
  let n = (0, i.hasAdjacentParameterIssues)(e);
  let a = n ? (0, i.normalizeAdjacentParameters)(e) : e;
  try {
    return (0, o.pathToRegexp)(a, t, r);
  } catch (a) {
    if (!n) {
      try {
        let n = (0, i.normalizeAdjacentParameters)(e);
        return (0, o.pathToRegexp)(n, t, r);
      } catch (e) {}
    }
    throw a;
  }
}
function u(e, t) {
  let r = (0, i.hasAdjacentParameterIssues)(e);
  let n = r ? (0, i.normalizeAdjacentParameters)(e) : e;
  try {
    let e = (0, o.compile)(n, t);
    if (r) {
      return t => (0, i.stripNormalizedSeparators)(e(t));
    }
    return e;
  } catch (n) {
    if (!r) {
      try {
        let r = (0, i.normalizeAdjacentParameters)(e);
        let n = (0, o.compile)(r, t);
        return e => (0, i.stripNormalizedSeparators)(n(e));
      } catch (e) {}
    }
    throw n;
  }
}
function l(e, t) {
  let r = (0, o.regexpToFunction)(e, t || []);
  return e => {
    let t = r(e);
    return !!t && {
      ...t,
      params: (0, i.stripParameterSeparators)(t.params)
    };
  };
}
function c(e) {
  return t => {
    let r = e(t);
    return !!r && (0, i.stripParameterSeparators)(r);
  };
}