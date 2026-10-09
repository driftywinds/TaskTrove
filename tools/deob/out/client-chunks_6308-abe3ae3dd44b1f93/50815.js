var n = require(/*webcrack:missing*/"./87849.js");
var o = require(/*webcrack:missing*/"./8349.js");
export function q(e, t) {
  let r = n.createContext(t);
  let i = e => {
    let {
      children: t,
      ...i
    } = e;
    let a = n.useMemo(() => i, Object.values(i));
    return <r.Provider value={a}>{t}</r.Provider>;
  };
  i.displayName = e + "Provider";
  return [i, function (o) {
    let i = n.useContext(r);
    if (i) {
      return i;
    }
    if (t !== undefined) {
      return t;
    }
    throw Error(`\`${o}\` must be used within \`${e}\``);
  }];
}
export function A(e, t = []) {
  let r = [];
  let i = () => {
    let t = r.map(e => n.createContext(e));
    return function (r) {
      let o = r?.[e] || t;
      return n.useMemo(() => ({
        [`__scope${e}`]: {
          ...r,
          [e]: o
        }
      }), [r, o]);
    };
  };
  i.scopeName = e;
  return [function (t, i) {
    let a = n.createContext(i);
    let s = r.length;
    r = [...r, i];
    let l = t => {
      let {
        scope: r,
        children: i,
        ...l
      } = t;
      let u = r?.[e]?.[s] || a;
      let c = n.useMemo(() => l, Object.values(l));
      return <u.Provider value={c}>{i}</u.Provider>;
    };
    l.displayName = t + "Provider";
    return [l, function (r, o) {
      let l = o?.[e]?.[s] || a;
      let u = n.useContext(l);
      if (u) {
        return u;
      }
      if (i !== undefined) {
        return i;
      }
      throw Error(`\`${r}\` must be used within \`${t}\``);
    }];
  }, function (...e) {
    let t = e[0];
    if (e.length === 1) {
      return t;
    }
    let r = () => {
      let r = e.map(e => ({
        useScope: e(),
        scopeName: e.scopeName
      }));
      return function (e) {
        let o = r.reduce((t, {
          useScope: r,
          scopeName: n
        }) => {
          let o = r(e)[`__scope${n}`];
          return {
            ...t,
            ...o
          };
        }, {});
        return n.useMemo(() => ({
          [`__scope${t.scopeName}`]: o
        }), [o]);
      };
    };
    r.scopeName = t.scopeName;
    return r;
  }(i, ...t)];
}