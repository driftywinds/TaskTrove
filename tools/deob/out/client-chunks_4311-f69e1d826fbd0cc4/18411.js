var n = require("./65968.js");
export var S$ = typeof window == "undefined" || "Deno" in globalThis;
export function lQ() {}
export function Zw(e, t) {
  if (typeof e == "function") {
    return e(t);
  } else {
    return e;
  }
}
export function gn(e) {
  return typeof e == "number" && e >= 0 && e !== Infinity;
}
export function j3(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
export function d2(e, t) {
  if (typeof e == "function") {
    return e(t);
  } else {
    return e;
  }
}
export function Eh(e, t) {
  if (typeof e == "function") {
    return e(t);
  } else {
    return e;
  }
}
export function MK(e, t) {
  let {
    type: r = "all",
    exact: n,
    fetchStatus: i,
    predicate: a,
    queryKey: o,
    stale: s
  } = e;
  if (o) {
    if (n) {
      if (t.queryHash !== F$(o, t.options)) {
        return false;
      }
    } else if (!Cp(t.queryKey, o)) {
      return false;
    }
  }
  if (r !== "all") {
    let e = t.isActive();
    if (r === "active" && !e || r === "inactive" && e) {
      return false;
    }
  }
  return (typeof s != "boolean" || t.isStale() === s) && (!i || i === t.state.fetchStatus) && (!a || !!a(t));
}
export function nJ(e, t) {
  let {
    exact: r,
    status: n,
    predicate: i,
    mutationKey: a
  } = e;
  if (a) {
    if (!t.options.mutationKey) {
      return false;
    }
    if (r) {
      if (EN(t.options.mutationKey) !== EN(a)) {
        return false;
      }
    } else if (!Cp(t.options.mutationKey, a)) {
      return false;
    }
  }
  return (!n || t.state.status === n) && (!i || !!i(t));
}
export function F$(e, t) {
  return (t?.queryKeyHashFn || EN)(e);
}
export function EN(e) {
  return JSON.stringify(e, (e, t) => x(t) ? Object.keys(t).sort().reduce((e, r) => {
    e[r] = t[r];
    return e;
  }, {}) : t);
}
export function Cp(e, t) {
  return e === t || typeof e == typeof t && !!e && !!t && typeof e == "object" && typeof t == "object" && Object.keys(t).every(r => Cp(e[r], t[r]));
}
var y = Object.prototype.hasOwnProperty;
function g(e, t) {
  if (e === t) {
    return e;
  }
  let r = v(e) && v(t);
  if (!r && (!x(e) || !x(t))) {
    return t;
  }
  let n = (r ? e : Object.keys(e)).length;
  let i = r ? t : Object.keys(t);
  let a = i.length;
  let o = r ? Array(a) : {};
  let s = 0;
  for (let u = 0; u < a; u++) {
    let a = r ? u : i[u];
    let l = e[a];
    let c = t[a];
    if (l === c) {
      o[a] = l;
      if (r ? u < n : y.call(e, a)) {
        s++;
      }
      continue;
    }
    if (l === null || c === null || typeof l != "object" || typeof c != "object") {
      o[a] = c;
      continue;
    }
    let d = g(l, c);
    o[a] = d;
    if (d === l) {
      s++;
    }
  }
  if (n === a && s === n) {
    return e;
  } else {
    return o;
  }
}
export function f8(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) {
    return false;
  }
  for (let r in e) {
    if (e[r] !== t[r]) {
      return false;
    }
  }
  return true;
}
function v(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function x(e) {
  if (!w(e)) {
    return false;
  }
  let t = e.constructor;
  if (t === undefined) {
    return true;
  }
  let r = t.prototype;
  return !!w(r) && !!r.hasOwnProperty("isPrototypeOf") && Object.getPrototypeOf(e) === Object.prototype;
}
function w(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
export function yy(e) {
  return new Promise(t => {
    n.zs.setTimeout(t, e);
  });
}
export function pl(e, t, r) {
  if (typeof r.structuralSharing == "function") {
    return r.structuralSharing(e, t);
  } else if (r.structuralSharing !== false) {
    return g(e, t);
  } else {
    return t;
  }
}
export function y9(e, t, r = 0) {
  let n = [...e, t];
  if (r && n.length > r) {
    return n.slice(1);
  } else {
    return n;
  }
}
export function ZZ(e, t, r = 0) {
  let n = [t, ...e];
  if (r && n.length > r) {
    return n.slice(0, -1);
  } else {
    return n;
  }
}
export var hT = Symbol();
export function ZM(e, t) {
  if (!e.queryFn && t?.initialPromise) {
    return () => t.initialPromise;
  } else if (e.queryFn && e.queryFn !== hT) {
    return e.queryFn;
  } else {
    return () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
  }
}