function r(t) {
  return !!t.write;
}
function n(t) {
  return "v" in t || "e" in t;
}
function o(t) {
  if ("e" in t) {
    throw t.e;
  }
  if (!("v" in t)) {
    throw Error("[Bug] atom state is not initialized");
  }
  return t.v;
}
let s = new WeakMap();
function i(t) {
  var e;
  return d(t) && !!((e = s.get(t)) == null ? undefined : e[0]);
}
export function MO(t, e) {
  let a = s.get(t);
  if (!a) {
    a = [true, new Set()];
    s.set(t, a);
    let e = () => {
      a[0] = false;
    };
    t.then(e, e);
  }
  a[1].add(e);
}
function d(t) {
  return typeof (t == null ? undefined : t.then) == "function";
}
function u(t, e, a) {
  if (!a.p.has(t)) {
    a.p.add(t);
    let r = () => a.p.delete(t);
    e.then(r, r);
  }
}
function c(t, e, a) {
  var r;
  let n = new Set();
  for (let e of ((r = a.get(t)) == null ? undefined : r.t) || []) {
    if (a.has(e)) {
      n.add(e);
    }
  }
  for (let t of e.p) {
    n.add(t);
  }
  return n;
}
let f = (t, e, ...a) => e.read(...a);
let m = (t, e, ...a) => e.write(...a);
let p = (t, e) => {
  var a;
  if ((a = e.unstable_onInit) == null) {
    return undefined;
  } else {
    return a.call(e, t);
  }
};
let h = (t, e, a) => {
  var r;
  if ((r = e.onMount) == null) {
    return undefined;
  } else {
    return r.call(e, a);
  }
};
let g = (t, e) => {
  let a = I(t);
  let r = a[0];
  let n = a[9];
  if (!e) {
    throw Error("Atom is undefined or null");
  }
  let o = r.get(e);
  if (!o) {
    o = {
      d: new Map(),
      p: new Set(),
      n: 0
    };
    r.set(e, o);
    if (n != null) {
      n(t, e);
    }
  }
  return o;
};
let v = t => {
  let e = I(t);
  let a = e[1];
  let r = e[3];
  let n = e[4];
  let o = e[5];
  let s = e[6];
  let i = e[13];
  let l = [];
  let d = t => {
    try {
      t();
    } catch (t) {
      l.push(t);
    }
  };
  do {
    if (s.f) {
      d(s.f);
    }
    let e = new Set();
    let l = e.add.bind(e);
    r.forEach(t => {
      var e;
      if ((e = a.get(t)) == null) {
        return undefined;
      } else {
        return e.l.forEach(l);
      }
    });
    r.clear();
    o.forEach(l);
    o.clear();
    n.forEach(l);
    n.clear();
    e.forEach(d);
    if (r.size) {
      i(t);
    }
  } while (r.size || o.size || n.size);
  if (l.length) {
    throw AggregateError(l);
  }
};
let b = t => {
  let e = I(t);
  let a = e[1];
  let r = e[2];
  let n = e[3];
  let o = e[11];
  let s = e[14];
  let i = e[17];
  let l = [];
  let d = new WeakSet();
  let u = new WeakSet();
  let f = Array.from(n);
  while (f.length) {
    let e = f[f.length - 1];
    let n = o(t, e);
    if (u.has(e)) {
      f.pop();
      continue;
    }
    if (d.has(e)) {
      if (r.get(e) === n.n) {
        l.push([e, n]);
      } else if (r.has(e)) {
        throw Error("[Bug] invalidated atom exists");
      }
      u.add(e);
      f.pop();
      continue;
    }
    d.add(e);
    for (let t of c(e, n, a)) {
      if (!d.has(t)) {
        f.push(t);
      }
    }
  }
  for (let e = l.length - 1; e >= 0; --e) {
    let [a, o] = l[e];
    let d = false;
    for (let t of o.d.keys()) {
      if (t !== a && n.has(t)) {
        d = true;
        break;
      }
    }
    if (d) {
      s(t, a);
      i(t, a);
    }
    r.delete(a);
  }
};
let y = (t, e) => {
  var a;
  var s;
  let c;
  let f;
  let m = I(t);
  let p = m[1];
  let h = m[2];
  let g = m[3];
  let v = m[6];
  let b = m[7];
  let y = m[11];
  let w = m[12];
  let x = m[13];
  let E = m[14];
  let k = m[16];
  let S = m[17];
  let T = y(t, e);
  if (n(T) && (p.has(e) && h.get(e) !== T.n || Array.from(T.d).every(([e, a]) => E(t, e).n === a))) {
    return T;
  }
  T.d.clear();
  let N = true;
  function z() {
    if (p.has(e)) {
      S(t, e);
      x(t);
      w(t);
    }
  }
  let C = T.n;
  try {
    let s = b(t, e, function (a) {
      var r;
      if (a === e) {
        let e = y(t, a);
        if (!n(e)) {
          if ("init" in a) {
            M(t, a, a.init);
          } else {
            throw Error("no atom init");
          }
        }
        return o(e);
      }
      let s = E(t, a);
      try {
        return o(s);
      } finally {
        T.d.set(a, s.n);
        if (i(T.v)) {
          u(e, T.v, s);
        }
        if ((r = p.get(a)) != null) {
          r.t.add(e);
        }
        if (!N) {
          z();
        }
      }
    }, {
      get signal() {
        c ||= new AbortController();
        return c.signal;
      },
      get setSelf() {
        if (!r(e)) {
          console.warn("setSelf function cannot be used with read-only atom");
        }
        if (!f && r(e)) {
          f = (...a) => {
            if (N) {
              console.warn("setSelf function cannot be called in sync");
            }
            if (!N) {
              try {
                return k(t, e, ...a);
              } finally {
                x(t);
                w(t);
              }
            }
          };
        }
        return f;
      }
    });
    M(t, e, s);
    if (d(s)) {
      MO(s, () => c == null ? undefined : c.abort());
      s.then(z, z);
    }
    if ((a = v.r) != null) {
      a.call(v, e);
    }
    return T;
  } catch (t) {
    delete T.v;
    T.e = t;
    ++T.n;
    return T;
  } finally {
    N = false;
    if (C !== T.n && h.get(e) === C) {
      h.set(e, T.n);
      g.add(e);
      if ((s = v.c) != null) {
        s.call(v, e);
      }
    }
  }
};
let w = (t, e) => {
  let a = I(t);
  let r = a[1];
  let n = a[2];
  let o = a[11];
  let s = [e];
  while (s.length) {
    let e = s.pop();
    let a = o(t, e);
    for (let i of c(e, a, r)) {
      let e = o(t, i);
      n.set(i, e.n);
      s.push(i);
    }
  }
};
let x = (t, e, ...a) => {
  let r = I(t);
  let n = r[3];
  let s = r[6];
  let i = r[8];
  let l = r[11];
  let d = r[12];
  let u = r[13];
  let c = r[14];
  let f = r[15];
  let m = r[17];
  let p = true;
  try {
    return i(t, e, e => o(c(t, e)), (a, ...r) => {
      var o;
      let i = l(t, a);
      try {
        if (a !== e) {
          return x(t, a, ...r);
        }
        {
          if (!("init" in a)) {
            throw Error("atom not writable");
          }
          let e = i.n;
          let l = r[0];
          M(t, a, l);
          m(t, a);
          if (e !== i.n) {
            n.add(a);
            if ((o = s.c) != null) {
              o.call(s, a);
            }
            f(t, a);
          }
          return;
        }
      } finally {
        if (!p) {
          u(t);
          d(t);
        }
      }
    }, ...a);
  } finally {
    p = false;
  }
};
let E = (t, e) => {
  var a;
  let r = I(t);
  let n = r[1];
  let o = r[3];
  let s = r[6];
  let l = r[11];
  let d = r[15];
  let u = r[18];
  let c = r[19];
  let f = l(t, e);
  let m = n.get(e);
  if (m && !i(f.v)) {
    for (let [r, n] of f.d) {
      if (!m.d.has(r)) {
        let i = l(t, r);
        u(t, r).t.add(e);
        m.d.add(r);
        if (n !== i.n) {
          o.add(r);
          if ((a = s.c) != null) {
            a.call(s, r);
          }
          d(t, r);
        }
      }
    }
    for (let a of m.d || []) {
      if (!f.d.has(a)) {
        m.d.delete(a);
        let r = c(t, a);
        if (r != null) {
          r.t.delete(e);
        }
      }
    }
  }
};
let k = (t, e) => {
  var a;
  let n = I(t);
  let o = n[1];
  let s = n[4];
  let i = n[6];
  let l = n[10];
  let d = n[11];
  let u = n[12];
  let c = n[13];
  let f = n[14];
  let m = n[16];
  let p = d(t, e);
  let h = o.get(e);
  if (!h) {
    f(t, e);
    for (let a of p.d.keys()) {
      k(t, a).t.add(e);
    }
    h = {
      l: new Set(),
      d: new Set(p.d.keys()),
      t: new Set()
    };
    o.set(e, h);
    if ((a = i.m) != null) {
      a.call(i, e);
    }
    if (r(e)) {
      s.add(() => {
        let a = true;
        try {
          let r = l(t, e, (...r) => {
            try {
              return m(t, e, ...r);
            } finally {
              if (!a) {
                c(t);
                u(t);
              }
            }
          });
          if (r) {
            h.u = () => {
              a = true;
              try {
                r();
              } finally {
                a = false;
              }
            };
          }
        } finally {
          a = false;
        }
      });
    }
  }
  return h;
};
let S = (t, e) => {
  var a;
  let r = I(t);
  let n = r[1];
  let o = r[5];
  let s = r[6];
  let i = r[11];
  let l = r[19];
  let d = i(t, e);
  let u = n.get(e);
  if (u && !u.l.size && !Array.from(u.t).some(t => {
    var a;
    if ((a = n.get(t)) == null) {
      return undefined;
    } else {
      return a.d.has(e);
    }
  })) {
    if (u.u) {
      o.add(u.u);
    }
    u = undefined;
    n.delete(e);
    if ((a = s.u) != null) {
      a.call(s, e);
    }
    for (let r of d.d.keys()) {
      let a = l(t, r);
      if (a != null) {
        a.t.delete(e);
      }
    }
    return;
  }
  return u;
};
let M = (t, e, a) => {
  let r = I(t)[11];
  let n = r(t, e);
  let o = "v" in n;
  let i = n.v;
  if (d(a)) {
    for (let o of n.d.keys()) {
      u(e, a, r(t, o));
    }
  }
  n.v = a;
  delete n.e;
  if (!o || !Object.is(i, n.v)) {
    let t;
    ++n.n;
    if (d(i) && ((t = s.get(i)) == null ? undefined : t[0])) {
      t[0] = false;
      t[1].forEach(t => t());
    }
  }
};
let T = (t, e) => o((0, I(t)[14])(t, e));
let N = (t, e, ...a) => {
  let r = I(t);
  let n = r[12];
  let o = r[13];
  let s = r[16];
  try {
    return s(t, e, ...a);
  } finally {
    o(t);
    n(t);
  }
};
let z = (t, e, a) => {
  let r = I(t);
  let n = r[12];
  let o = r[18];
  let s = r[19];
  let i = o(t, e).l;
  i.add(a);
  n(t);
  return () => {
    i.delete(a);
    s(t, e);
    n(t);
  };
};
let C = new WeakMap();
let I = t => {
  let e = C.get(t);
  if (!e) {
    throw Error("Store must be created by buildStore to read its building blocks");
  }
  return e;
};
export function ff(...t) {
  let e = {
    get: t => (0, I(e)[21])(e, t),
    set: (t, ...a) => (0, I(e)[22])(e, t, ...a),
    sub: (t, a) => (0, I(e)[23])(e, t, a)
  };
  let a = [new WeakMap(), new WeakMap(), new WeakMap(), new Set(), new Set(), new Set(), {}, f, m, p, h, g, v, b, y, w, x, E, k, S, M, T, N, z, undefined].map((e, a) => t[a] || e);
  C.set(e, Object.freeze(a));
  return e;
}