let r;
let u = (r = true, function (e, t) {
  let n = r ? function () {
    if (t) {
      let n = t.apply(e, arguments);
      t = null;
      return n;
    }
  } : function () {};
  r = false;
  return n;
})(undefined, function () {
  return u.toString().search("(((.+)+)+)+$").toString().constructor(u).search("(((.+)+)+)+$");
});
export function q(e) {
  return e.role === "admin";
}
export function K(e, t) {
  let n = e[function (e, t, n, r) {
    return __DECODE_0__(n - 362, t);
  }(480, 489, 489, 490)](e => e.id !== t);
  if (n.length === 1 && n[0]) {
    let e = {
      isDuo: true,
      otherUser: n[0]
    };
    return e;
    if (_0x16e232) {
      let e = _0x2a3d4b.apply(_0x43aab0, arguments);
      _0x1617e3 = null;
      return e;
    }
  }
  return {
    isDuo: false,
    otherUser: null
  };
}
u();