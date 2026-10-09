var r = require(/*webcrack:missing*/"./87849.js");
var n = require("./22814.js");
var o = require("./16289.js");
let s = (0, r.createContext)(undefined);
export function Pj(t) {
  let e = (0, r.useContext)(s);
  return (t == null ? undefined : t.store) || e || (0, n.zp)();
}
export function Kq({
  children: t,
  store: e
}) {
  let a = (0, r.useRef)(undefined);
  if (!e && !a.current) {
    a.current = (0, n.y$)();
  }
  return (0, r.createElement)(s.Provider, {
    value: e || a.current
  }, t);
}
let d = t => typeof (t == null ? undefined : t.then) == "function";
let u = t => {
  if (!t.status) {
    t.status = "pending";
    t.then(e => {
      t.status = "fulfilled";
      t.value = e;
    }, e => {
      t.status = "rejected";
      t.reason = e;
    });
  }
};
let c = r.use || (t => {
  if (t.status === "pending") {
    throw t;
  }
  if (t.status === "fulfilled") {
    return t.value;
  }
  if (t.status === "rejected") {
    throw t.reason;
  }
  u(t);
  throw t;
});
let f = new WeakMap();
let m = (t, e) => {
  let a = f.get(t);
  if (!a) {
    a = new Promise((r, n) => {
      let s = t;
      let i = t => e => {
        if (s === t) {
          r(e);
        }
      };
      let l = t => e => {
        if (s === t) {
          n(e);
        }
      };
      let u = () => {
        try {
          let t = e();
          if (d(t)) {
            f.set(t, a);
            s = t;
            t.then(i(t), l(t));
            (0, o.MO)(t, u);
          } else {
            r(t);
          }
        } catch (t) {
          n(t);
        }
      };
      t.then(i(t), l(t));
      (0, o.MO)(t, u);
    });
    f.set(t, a);
  }
  return a;
};
export function md(t, e) {
  let {
    delay: a,
    unstable_promiseStatus: n = !r.use
  } = e || {};
  let o = Pj(e);
  let [[s, l, f], p] = (0, r.useReducer)(e => {
    let a = o.get(t);
    if (Object.is(e[0], a) && e[1] === o && e[2] === t) {
      return e;
    } else {
      return [a, o, t];
    }
  }, undefined, () => [o.get(t), o, t]);
  let h = s;
  if (l !== o || f !== t) {
    p();
    h = o.get(t);
  }
  (0, r.useEffect)(() => {
    let e = o.sub(t, () => {
      if (n) {
        try {
          let e = o.get(t);
          if (d(e)) {
            u(m(e, () => o.get(t)));
          }
        } catch (t) {}
      }
      if (typeof a == "number") {
        setTimeout(p, a);
      } else {
        p();
      }
    });
    p();
    return e;
  }, [o, t, a, n]);
  (0, r.useDebugValue)(h);
  if (d(h)) {
    let e = m(h, () => o.get(t));
    if (n) {
      u(e);
    }
    return c(e);
  }
  return h;
}
export function Xr(t, e) {
  let a = Pj(e);
  return (0, r.useCallback)((...e) => {
    if (!("write" in t)) {
      throw Error("not writable atom");
    }
    return a.set(t, ...e);
  }, [a, t]);
}
export function fp(t, e) {
  return [md(t, e), Xr(t, e)];
}