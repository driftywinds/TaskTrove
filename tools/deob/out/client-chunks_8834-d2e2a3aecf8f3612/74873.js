Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  deleteFromLru: function () {
    return f;
  },
  lruPut: function () {
    return s;
  },
  updateLruSize: function () {
    return c;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./54161.js");
let l = null;
let o = false;
let i = 0;
function s(e) {
  if (l === e) {
    return;
  }
  let t = e.prev;
  let r = e.next;
  if (r === null || t === null) {
    i += e.size;
    d();
  } else {
    t.next = r;
    r.prev = t;
  }
  if (l === null) {
    e.prev = e;
    e.next = e;
  } else {
    let t = l.prev;
    e.prev = t;
    if (t !== null) {
      t.next = e;
    }
    e.next = l;
    l.prev = e;
  }
  l = e;
}
function c(e, t) {
  let r = e.size;
  e.size = t;
  if (e.next !== null) {
    i = i - r + t;
    d();
  }
}
function f(e) {
  let t = e.next;
  let r = e.prev;
  if (t !== null && r !== null) {
    i -= e.size;
    e.next = null;
    e.prev = null;
    if (l === e) {
      l = t === l ? null : t;
    } else {
      r.next = t;
      t.prev = r;
    }
  }
}
function d() {
  if (!o && !(i <= 52428800)) {
    o = true;
    h(p);
  }
}
function p() {
  o = false;
  while (i > 47185920 && l !== null) {
    let e = l.prev;
    if (e !== null) {
      (0, a.deleteFromCacheMap)(e.value);
    }
  }
}
let h = typeof requestIdleCallback == "function" ? requestIdleCallback : e => setTimeout(e, 0);
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}