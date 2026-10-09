Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  Fallback: function () {
    return l;
  },
  createCacheMap: function () {
    return i;
  },
  deleteFromCacheMap: function () {
    return h;
  },
  getFromCacheMap: function () {
    return s;
  },
  isValueExpired: function () {
    return c;
  },
  setInCacheMap: function () {
    return f;
  },
  setSizeInCacheMap: function () {
    return _;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./74873.js");
let l = {};
let o = {};
function i() {
  return {
    parent: null,
    key: null,
    value: null,
    map: null,
    prev: null,
    next: null,
    size: 0
  };
}
function s(e, t, r, n, u) {
  let i = function e(t, r, n, u, a, i) {
    let s;
    let f;
    if (u !== null) {
      s = u.value;
      f = u.parent;
    } else if (a && i !== o) {
      s = o;
      f = null;
    } else if (n.value === null) {
      return n;
    } else if (c(t, r, n.value)) {
      y(n);
      return null;
    } else {
      return n;
    }
    let d = n.map;
    if (d !== null) {
      let n = d.get(s);
      if (n !== undefined) {
        let u = e(t, r, n, f, a, s);
        if (u !== null) {
          return u;
        }
      }
      let u = d.get(l);
      if (u !== undefined) {
        return e(t, r, u, f, a, s);
      }
    }
    return null;
  }(e, t, r, n, u, 0);
  if (i === null || i.value === null) {
    return null;
  } else {
    (0, a.lruPut)(i);
    return i.value;
  }
}
function c(e, t, r) {
  return r.staleAt <= e || r.version < t;
}
function f(e, t, r, n) {
  let u = function (e, t, r) {
    let n = e;
    let u = t;
    let a = null;
    while (true) {
      let e = a;
      if (u !== null) {
        a = u.value;
        u = u.parent;
      } else if (r && e !== o) {
        if (n.value === null) {
          return n;
        }
        a = o;
      } else {
        break;
      }
      let t = n.map;
      if (t !== null) {
        let e = t.get(a);
        if (e !== undefined) {
          n = e;
          continue;
        }
      } else {
        t = new Map();
        n.map = t;
      }
      let l = {
        parent: n,
        key: a,
        value: null,
        map: null,
        prev: null,
        next: null,
        size: 0
      };
      t.set(a, l);
      n = l;
    }
    return n;
  }(e, t, n);
  d(u, r);
  (0, a.lruPut)(u);
  (0, a.updateLruSize)(u, r.size);
}
function d(e, t) {
  if (e.value !== null) {
    e.value.ref = null;
    e.value = null;
    p(e, t);
  } else {
    p(e, t);
  }
}
function p(e, t) {
  let r = t.ref;
  e.value = t;
  t.ref = e;
  (0, a.updateLruSize)(e, t.size);
  if (r !== null && r !== e && r.value === t) {
    y(r);
  }
}
function h(e) {
  let t = e.ref;
  if (t !== null) {
    e.ref = null;
    y(t);
  }
}
function y(e) {
  e.value = null;
  (0, a.deleteFromLru)(e);
  let t = e.map;
  if (t === null) {
    let t = e.parent;
    let r = e.key;
    while (t !== null) {
      let e = t.map;
      if (e !== null && (e.delete(r), e.size === 0) && (t.map = null, t.value === null)) {
        r = t.key;
        t = t.parent;
        continue;
      }
      break;
    }
  } else {
    let r = t.get(o);
    if (r !== undefined && r.value !== null) {
      d(e, r.value);
    }
  }
}
function _(e, t) {
  let r = e.ref;
  if (r !== null) {
    e.size = t;
    (0, a.updateLruSize)(r, t);
  }
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}