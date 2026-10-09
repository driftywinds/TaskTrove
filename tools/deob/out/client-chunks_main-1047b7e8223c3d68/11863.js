Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  PARAM_SEPARATOR: function () {
    return a;
  },
  hasAdjacentParameterIssues: function () {
    return o;
  },
  normalizeAdjacentParameters: function () {
    return i;
  },
  normalizeTokensForRegexp: function () {
    return s;
  },
  stripNormalizedSeparators: function () {
    return u;
  },
  stripParameterSeparators: function () {
    return l;
  }
};
for (var n in r) {
  Object.defineProperty(exports, n, {
    enumerable: true,
    get: r[n]
  });
}
let a = "_NEXTSEP_";
function o(e) {
  return typeof e == "string" && (!!/\/\(\.{1,3}\):[^/\s]+/.test(e) || !!/:[a-zA-Z_][a-zA-Z0-9_]*:[a-zA-Z_][a-zA-Z0-9_]*/.test(e));
}
function i(e) {
  let t = e;
  return (t = t.replace(/(\([^)]*\)):([^/\s]+)/g, `$1${a}:$2`)).replace(/:([^:/\s)]+)(?=:)/g, `:$1${a}`);
}
function s(e) {
  return e.map(e => typeof e == "object" && e !== null && "modifier" in e && (e.modifier === "*" || e.modifier === "+") && "prefix" in e && "suffix" in e && e.prefix === "" && e.suffix === "" ? {
    ...e,
    prefix: "/"
  } : e);
}
function u(e) {
  return e.replace(RegExp(`\\)${a}`, "g"), ")");
}
function l(e) {
  let t = {};
  for (let [r, n] of Object.entries(e)) {
    if (typeof n == "string") {
      t[r] = n.replace(RegExp(`^${a}`), "");
    } else if (Array.isArray(n)) {
      t[r] = n.map(e => typeof e == "string" ? e.replace(RegExp(`^${a}`), "") : e);
    } else {
      t[r] = n;
    }
  }
  return t;
}