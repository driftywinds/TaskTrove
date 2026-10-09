var r = require("./22814.js");
let n = Symbol("RESET");
export function Iz(t, e) {
  let a = null;
  let r = new Map();
  let n = new Set();
  let o = n => {
    let i;
    if (e === undefined) {
      i = r.get(n);
    } else {
      for (let [t, a] of r) {
        if (e(t, n)) {
          i = a;
          break;
        }
      }
    }
    if (i !== undefined) {
      if (a == null || !a(i[1], n)) {
        return i[0];
      } else {
        o.remove(n);
      }
    }
    let l = t(n);
    r.set(n, [l, Date.now()]);
    s("CREATE", n, l);
    return l;
  };
  let s = (t, e, a) => {
    for (let r of n) {
      r({
        type: t,
        param: e,
        atom: a
      });
    }
  };
  o.unstable_listen = t => {
    n.add(t);
    return () => {
      n.delete(t);
    };
  };
  o.getParams = () => r.keys();
  o.remove = t => {
    if (e === undefined) {
      if (!r.has(t)) {
        return;
      }
      let [e] = r.get(t);
      r.delete(t);
      s("REMOVE", t, e);
    } else {
      for (let [a, [n]] of r) {
        if (e(a, t)) {
          r.delete(a);
          s("REMOVE", a, n);
          break;
        }
      }
    }
  };
  o.setShouldRemove = t => {
    if (a = t) {
      for (let [t, [e, n]] of r) {
        if (a(n, t)) {
          r.delete(t);
          s("REMOVE", t, e);
        }
      }
    }
  };
  return o;
}
let s = t => typeof (t == null ? undefined : t.then) == "function";
let i = function (t = () => {
  try {
    return window.localStorage;
  } catch (t) {
    if (typeof window != "undefined") {
      console.warn(t);
    }
    return;
  }
}, e) {
  var a;
  let r;
  let n;
  let o;
  let i;
  let l = {
    getItem: (e, a) => {
      var o;
      let l = t => {
        if (r !== (t = t || "")) {
          try {
            n = JSON.parse(t, undefined);
          } catch (t) {
            return a;
          }
          r = t;
        }
        return n;
      };
      let d = ((o = t()) == null ? undefined : o.getItem(e)) ?? null;
      if (s(d)) {
        return d.then(l);
      } else {
        return l(d);
      }
    },
    setItem: (e, a) => {
      var r;
      if ((r = t()) == null) {
        return undefined;
      } else {
        return r.setItem(e, JSON.stringify(a, undefined));
      }
    },
    removeItem: e => {
      var a;
      if ((a = t()) == null) {
        return undefined;
      } else {
        return a.removeItem(e);
      }
    }
  };
  try {
    o = (a = t()) == null ? undefined : a.subscribe;
  } catch (t) {}
  if (!o && typeof window != "undefined" && typeof window.addEventListener == "function" && window.Storage) {
    o = (e, a) => {
      if (!(t() instanceof window.Storage)) {
        return () => {};
      }
      let r = r => {
        if (r.storageArea === t() && r.key === e) {
          a(r.newValue);
        }
      };
      window.addEventListener("storage", r);
      return () => {
        window.removeEventListener("storage", r);
      };
    };
  }
  if (o) {
    i = o;
    l.subscribe = (t, e, a) => i(t, t => {
      let r;
      try {
        r = JSON.parse(t || "");
      } catch (t) {
        r = a;
      }
      e(r);
    });
  }
  return l;
}();
export function tG(t, e, a = i, o) {
  let d = o == null ? undefined : o.getOnInit;
  let u = (0, r.eU)(d ? a.getItem(t, e) : e);
  u.debugPrivate = true;
  u.onMount = r => {
    let n;
    r(a.getItem(t, e));
    if (a.subscribe) {
      n = a.subscribe(t, r, e);
    }
    return n;
  };
  return (0, r.eU)(t => t(u), (r, o, i) => {
    let l = typeof i == "function" ? i(r(u)) : i;
    if (l === n) {
      o(u, e);
      return a.removeItem(t);
    } else if (s(l)) {
      return l.then(e => {
        o(u, e);
        return a.setItem(t, e);
      });
    } else {
      o(u, l);
      return a.setItem(t, l);
    }
  });
}