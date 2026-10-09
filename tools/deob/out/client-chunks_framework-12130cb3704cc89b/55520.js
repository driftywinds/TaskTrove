function n(e, t) {
  var n = e.length;
  for (e.push(t); n > 0;) {
    var r = n - 1 >>> 1;
    var l = e[r];
    if (a(l, t) > 0) {
      e[r] = t;
      e[n] = l;
      n = r;
    } else {
      break;
    }
  }
}
function r(e) {
  if (e.length === 0) {
    return null;
  } else {
    return e[0];
  }
}
function l(e) {
  if (e.length === 0) {
    return null;
  }
  var t = e[0];
  var n = e.pop();
  if (n !== t) {
    e[0] = n;
    for (var r = 0, l = e.length, o = l >>> 1; r < o;) {
      var i = (r + 1) * 2 - 1;
      var u = e[i];
      var s = i + 1;
      var c = e[s];
      if (a(u, n) < 0) {
        if (s < l && a(c, u) < 0) {
          e[r] = c;
          e[s] = n;
          r = s;
        } else {
          e[r] = u;
          e[i] = n;
          r = i;
        }
      } else if (s < l && a(c, n) < 0) {
        e[r] = c;
        e[s] = n;
        r = s;
      } else {
        break;
      }
    }
  }
  return t;
}
function a(e, t) {
  var n = e.sortIndex - t.sortIndex;
  if (n !== 0) {
    return n;
  } else {
    return e.id - t.id;
  }
}
exports.unstable_now = undefined;
if (typeof performance == "object" && typeof performance.now == "function") {
  var o;
  var i = performance;
  exports.unstable_now = function () {
    return i.now();
  };
} else {
  var u = Date;
  var s = u.now();
  exports.unstable_now = function () {
    return u.now() - s;
  };
}
var c = [];
var f = [];
var d = 1;
var p = null;
var m = 3;
var h = false;
var g = false;
var y = false;
var v = false;
var b = typeof setTimeout == "function" ? setTimeout : null;
var k = typeof clearTimeout == "function" ? clearTimeout : null;
var w = typeof setImmediate != "undefined" ? setImmediate : null;
function S(e) {
  for (var t = r(f); t !== null;) {
    if (t.callback === null) {
      l(f);
    } else if (t.startTime <= e) {
      l(f);
      t.sortIndex = t.expirationTime;
      n(c, t);
    } else {
      break;
    }
    t = r(f);
  }
}
function x(e) {
  y = false;
  S(e);
  if (!g) {
    if (r(c) !== null) {
      g = true;
      if (!E) {
        E = true;
        o();
      }
    } else {
      var t = r(f);
      if (t !== null) {
        O(x, t.startTime - e);
      }
    }
  }
}
var E = false;
var C = -1;
var _ = 5;
var z = -1;
function P() {
  return !!v || !(exports.unstable_now() - z < _);
}
function N() {
  v = false;
  if (E) {
    var e = exports.unstable_now();
    z = e;
    var n = true;
    try {
      e: {
        g = false;
        if (y) {
          y = false;
          k(C);
          C = -1;
        }
        h = true;
        var a = m;
        try {
          t: {
            S(e);
            p = r(c);
            while (p !== null && (!(p.expirationTime > e) || !P())) {
              var i = p.callback;
              if (typeof i == "function") {
                p.callback = null;
                m = p.priorityLevel;
                var u = i(p.expirationTime <= e);
                e = exports.unstable_now();
                if (typeof u == "function") {
                  p.callback = u;
                  S(e);
                  n = true;
                  break t;
                }
                if (p === r(c)) {
                  l(c);
                }
                S(e);
              } else {
                l(c);
              }
              p = r(c);
            }
            if (p !== null) {
              n = true;
            } else {
              var s = r(f);
              if (s !== null) {
                O(x, s.startTime - e);
              }
              n = false;
            }
          }
          break e;
        } finally {
          p = null;
          m = a;
          h = false;
        }
      }
    } finally {
      if (n) {
        o();
      } else {
        E = false;
      }
    }
  }
}
if (typeof w == "function") {
  o = function () {
    w(N);
  };
} else if (typeof MessageChannel != "undefined") {
  var T = new MessageChannel();
  var L = T.port2;
  T.port1.onmessage = N;
  o = function () {
    L.postMessage(null);
  };
} else {
  o = function () {
    b(N, 0);
  };
}
function O(e, n) {
  C = b(function () {
    e(exports.unstable_now());
  }, n);
}
exports.unstable_IdlePriority = 5;
exports.unstable_ImmediatePriority = 1;
exports.unstable_LowPriority = 4;
exports.unstable_NormalPriority = 3;
exports.unstable_Profiling = null;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_cancelCallback = function (e) {
  e.callback = null;
};
exports.unstable_forceFrameRate = function (e) {
  if (e < 0 || e > 125) {
    console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
  } else {
    _ = e > 0 ? Math.floor(1000 / e) : 5;
  }
};
exports.unstable_getCurrentPriorityLevel = function () {
  return m;
};
exports.unstable_next = function (e) {
  switch (m) {
    case 1:
    case 2:
    case 3:
      var t = 3;
      break;
    default:
      t = m;
  }
  var n = m;
  m = t;
  try {
    return e();
  } finally {
    m = n;
  }
};
exports.unstable_requestPaint = function () {
  v = true;
};
exports.unstable_runWithPriority = function (e, t) {
  switch (e) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      e = 3;
  }
  var n = m;
  m = e;
  try {
    return t();
  } finally {
    m = n;
  }
};
exports.unstable_scheduleCallback = function (e, l, a) {
  var i = exports.unstable_now();
  a = typeof a == "object" && a !== null && typeof (a = a.delay) == "number" && a > 0 ? i + a : i;
  switch (e) {
    case 1:
      var u = -1;
      break;
    case 2:
      u = 250;
      break;
    case 5:
      u = 1073741823;
      break;
    case 4:
      u = 10000;
      break;
    default:
      u = 5000;
  }
  u = a + u;
  e = {
    id: d++,
    callback: l,
    priorityLevel: e,
    startTime: a,
    expirationTime: u,
    sortIndex: -1
  };
  if (a > i) {
    e.sortIndex = a;
    n(f, e);
    if (r(c) === null && e === r(f)) {
      if (y) {
        k(C);
        C = -1;
      } else {
        y = true;
      }
      O(x, a - i);
    }
  } else {
    e.sortIndex = u;
    n(c, e);
    if (!g && !h) {
      g = true;
      if (!E) {
        E = true;
        o();
      }
    }
  }
  return e;
};
exports.unstable_shouldYield = P;
exports.unstable_wrapCallback = function (e) {
  var t = m;
  return function () {
    var n = m;
    m = t;
    try {
      return e.apply(this, arguments);
    } finally {
      m = n;
    }
  };
};