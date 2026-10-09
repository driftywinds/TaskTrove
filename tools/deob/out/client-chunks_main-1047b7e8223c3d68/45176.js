Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  getNamedMiddlewareRegex: function () {
    return _;
  },
  getNamedRouteRegex: function () {
    return h;
  },
  getRouteRegex: function () {
    return f;
  }
};
for (var a in n) {
  Object.defineProperty(exports, a, {
    enumerable: true,
    get: n[a]
  });
}
let o = require("./27438.js");
let i = require("./69478.js");
let s = require("./27618.js");
let u = require("./97616.js");
let l = require("./73903.js");
function c(e, t, r) {
  let n = {};
  let a = 1;
  let o = [];
  for (let c of (0, u.removeTrailingSlash)(e).slice(1).split("/")) {
    let e = i.INTERCEPTION_ROUTE_MARKERS.find(e => c.startsWith(e));
    let u = c.match(l.PARAMETER_PATTERN);
    if (e && u && u[2]) {
      let {
        key: t,
        optional: r,
        repeat: i
      } = (0, l.parseMatchedParameter)(u[2]);
      n[t] = {
        pos: a++,
        repeat: i,
        optional: r
      };
      o.push(`/${(0, s.escapeStringRegexp)(e)}([^/]+?)`);
    } else if (u && u[2]) {
      let {
        key: e,
        repeat: t,
        optional: i
      } = (0, l.parseMatchedParameter)(u[2]);
      n[e] = {
        pos: a++,
        repeat: t,
        optional: i
      };
      if (r && u[1]) {
        o.push(`/${(0, s.escapeStringRegexp)(u[1])}`);
      }
      let c = t ? i ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
      if (r && u[1]) {
        c = c.substring(1);
      }
      o.push(c);
    } else {
      o.push(`/${(0, s.escapeStringRegexp)(c)}`);
    }
    if (t && u && u[3]) {
      o.push((0, s.escapeStringRegexp)(u[3]));
    }
  }
  return {
    parameterizedRoute: o.join(""),
    groups: n
  };
}
function f(e, {
  includeSuffix: t = false,
  includePrefix: r = false,
  excludeOptionalTrailingSlash: n = false
} = {}) {
  let {
    parameterizedRoute: a,
    groups: o
  } = c(e, t, r);
  let i = a;
  if (!n) {
    i += "(?:/)?";
  }
  return {
    re: RegExp(`^${i}$`),
    groups: o
  };
}
function d({
  interceptionMarker: e,
  getSafeRouteKey: t,
  segment: r,
  routeKeys: n,
  keyPrefix: a,
  backreferenceDuplicateKeys: o
}) {
  let i;
  let {
    key: u,
    optional: c,
    repeat: f
  } = (0, l.parseMatchedParameter)(r);
  let d = u.replace(/\W/g, "");
  if (a) {
    d = `${a}${d}`;
  }
  let p = false;
  if (d.length === 0 || d.length > 30) {
    p = true;
  }
  if (!isNaN(parseInt(d.slice(0, 1)))) {
    p = true;
  }
  if (p) {
    d = t();
  }
  let h = d in n;
  if (a) {
    n[d] = `${a}${u}`;
  } else {
    n[d] = u;
  }
  let _ = e ? (0, s.escapeStringRegexp)(e) : "";
  i = h && o ? `\\k<${d}>` : f ? `(?<${d}>.+?)` : `(?<${d}>[^/]+?)`;
  return {
    key: u,
    pattern: c ? `(?:/${_}${i})?` : `/${_}${i}`,
    cleanedKey: d,
    optional: c,
    repeat: f
  };
}
function p(e, t, r, n, a, c = {
  names: {},
  intercepted: {}
}) {
  let f;
  f = 0;
  let h = () => {
    let e = "";
    let t = ++f;
    while (t > 0) {
      e += String.fromCharCode(97 + (t - 1) % 26);
      t = Math.floor((t - 1) / 26);
    }
    return e;
  };
  let _ = {};
  let m = [];
  let g = [];
  c = structuredClone(c);
  for (let f of (0, u.removeTrailingSlash)(e).slice(1).split("/")) {
    let e;
    let u = i.INTERCEPTION_ROUTE_MARKERS.some(e => f.startsWith(e));
    let p = f.match(l.PARAMETER_PATTERN);
    let E = u ? p?.[1] : undefined;
    if (E && p?.[2]) {
      e = t ? o.NEXT_INTERCEPTION_MARKER_PREFIX : undefined;
      c.intercepted[p[2]] = E;
    } else {
      e = p?.[2] && c.intercepted[p[2]] ? t ? o.NEXT_INTERCEPTION_MARKER_PREFIX : undefined : t ? o.NEXT_QUERY_PARAM_PREFIX : undefined;
    }
    if (E && p && p[2]) {
      let {
        key: t,
        pattern: r,
        cleanedKey: n,
        repeat: o,
        optional: i
      } = d({
        getSafeRouteKey: h,
        interceptionMarker: E,
        segment: p[2],
        routeKeys: _,
        keyPrefix: e,
        backreferenceDuplicateKeys: a
      });
      m.push(r);
      g.push(`/${p[1]}:${c.names[t] ?? n}${o ? i ? "*" : "+" : ""}`);
      c.names[t] ??= n;
    } else if (p && p[2]) {
      if (n && p[1]) {
        m.push(`/${(0, s.escapeStringRegexp)(p[1])}`);
        g.push(`/${p[1]}`);
      }
      let {
        key: t,
        pattern: r,
        cleanedKey: o,
        repeat: i,
        optional: u
      } = d({
        getSafeRouteKey: h,
        segment: p[2],
        routeKeys: _,
        keyPrefix: e,
        backreferenceDuplicateKeys: a
      });
      let l = r;
      if (n && p[1]) {
        l = l.substring(1);
      }
      m.push(l);
      g.push(`/:${c.names[t] ?? o}${i ? u ? "*" : "+" : ""}`);
      c.names[t] ??= o;
    } else {
      m.push(`/${(0, s.escapeStringRegexp)(f)}`);
      g.push(`/${f}`);
    }
    if (r && p && p[3]) {
      m.push((0, s.escapeStringRegexp)(p[3]));
      g.push(p[3]);
    }
  }
  return {
    namedParameterizedRoute: m.join(""),
    routeKeys: _,
    pathToRegexpPattern: g.join(""),
    reference: c
  };
}
function h(e, t) {
  let r = p(e, t.prefixRouteKeys, t.includeSuffix ?? false, t.includePrefix ?? false, t.backreferenceDuplicateKeys ?? false, t.reference);
  let n = r.namedParameterizedRoute;
  if (!t.excludeOptionalTrailingSlash) {
    n += "(?:/)?";
  }
  return {
    ...f(e, t),
    namedRegex: `^${n}$`,
    routeKeys: r.routeKeys,
    pathToRegexpPattern: r.pathToRegexpPattern,
    reference: r.reference
  };
}
function _(e, t) {
  let {
    parameterizedRoute: r
  } = c(e, false, false);
  let {
    catchAll: n = true
  } = t;
  if (r === "/") {
    return {
      namedRegex: `^/${n ? ".*" : ""}$`
    };
  }
  let {
    namedParameterizedRoute: a
  } = p(e, false, false, false, false, undefined);
  return {
    namedRegex: `^${a}${n ? "(?:(/.*)?)" : ""}$`
  };
}