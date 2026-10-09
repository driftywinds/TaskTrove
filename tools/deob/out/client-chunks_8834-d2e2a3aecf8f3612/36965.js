function r(e, t) {
  var r = e.length;
  for (e.push(t); r > 0;) {
    var n = r - 1 >>> 1;
    var u = e[n];
    if (a(u, t) > 0) {
      e[n] = t;
      e[r] = u;
      r = n;
    } else {
      break;
    }
  }
}
function n(e) {
  if (e.length === 0) {
    return null;
  } else {
    return e[0];
  }
}
function u(e) {
  if (e.length === 0) {
    return null;
  }
  var t = e[0];
  var r = e.pop();
  if (r !== t) {
    e[0] = r;
    for (var n = 0, u = e.length, l = u >>> 1; n < l;) {
      var o = (n + 1) * 2 - 1;
      var i = e[o];
      var s = o + 1;
      var c = e[s];
      if (a(i, r) < 0) {
        if (s < u && a(c, i) < 0) {
          e[n] = c;
          e[s] = r;
          n = s;
        } else {
          e[n] = i;
          e[o] = r;
          n = o;
        }
      } else if (s < u && a(c, r) < 0) {
        e[n] = c;
        e[s] = r;
        n = s;
      } else {
        break;
      }
    }
  }
  return t;
}
function a(e, t) {
  var r = e.sortIndex - t.sortIndex;
  if (r !== 0) {
    return r;
  } else {
    return e.id - t.id;
  }
}
exports.unstable_now = undefined;
if (typeof performance == "object" && typeof performance.now == "function") {
  var l;
  var o = performance;
  exports.unstable_now = function () {
    return o.now();
  };
} else {
  var i = Date;
  var s = i.now();
  exports.unstable_now = function () {
    return i.now() - s;
  };
}
var c = [];
var f = [];
var d = 1;
var p = null;
var h = 3;
var y = false;
var _ = false;
var g = false;
var v = false;
var b = typeof setTimeout == "function" ? setTimeout : null;
var m = typeof clearTimeout == "function" ? clearTimeout : null;
var R = typeof setImmediate != "undefined" ? setImmediate : null;
function E(e) {
  for (var t = n(f); t !== null;) {
    if (t.callback === null) {
      u(f);
    } else if (t.startTime <= e) {
      u(f);
      t.sortIndex = t.expirationTime;
      r(c, t);
    } else {
      break;
    }
    t = n(f);
  }
}
function P(e) {
  g = false;
  E(e);
  if (!_) {
    if (n(c) !== null) {
      _ = true;
      if (!O) {
        O = true;
        l();
      }
    } else {
      var t = n(f);
      if (t !== null) {
        x(P, t.startTime - e);
      }
    }
  }
}
var O = false;
var S = -1;
var j = 5;
var T = -1;
function M() {
  return !!v || !(exports.unstable_now() - T < j);
}
function w() {
  v = false;
  if (O) {
    var e = exports.unstable_now();
    T = e;
    var r = true;
    try {
      e: {
        _ = false;
        if (g) {
          g = false;
          m(S);
          S = -1;
        }
        y = true;
        var a = h;
        try {
          t: {
            E(e);
            p = n(c);
            while (p !== null && (!(p.expirationTime > e) || !M())) {
              var o = p.callback;
              if (typeof o == "function") {
                p.callback = null;
                h = p.priorityLevel;
                var i = o(p.expirationTime <= e);
                e = exports.unstable_now();
                if (typeof i == "function") {
                  p.callback = i;
                  E(e);
                  r = true;
                  break t;
                }
                if (p === n(c)) {
                  u(c);
                }
                E(e);
              } else {
                u(c);
              }
              p = n(c);
            }
            if (p !== null) {
              r = true;
            } else {
              var s = n(f);
              if (s !== null) {
                x(P, s.startTime - e);
              }
              r = false;
            }
          }
          break e;
        } finally {
          p = null;
          h = a;
          y = false;
        }
      }
    } finally {
      if (r) {
        l();
      } else {
        O = false;
      }
    }
  }
}
if (typeof R == "function") {
  l = function () {
    R(w);
  };
} else if (typeof MessageChannel != "undefined") {
  var C = new MessageChannel();
  var A = C.port2;
  C.port1.onmessage = w;
  l = function () {
    A.postMessage(null);
  };
} else {
  l = function () {
    b(w, 0);
  };
}
function x(e, r) {
  S = b(function () {
    e(exports.unstable_now());
  }, r);
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
    j = e > 0 ? Math.floor(1000 / e) : 5;
  }
};
exports.unstable_getCurrentPriorityLevel = function () {
  return h;
};
exports.unstable_next = function (e) {
  switch (h) {
    case 1:
    case 2:
    case 3:
      var t = 3;
      break;
    default:
      t = h;
  }
  var r = h;
  h = t;
  try {
    return e();
  } finally {
    h = r;
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
  var r = h;
  h = e;
  try {
    return t();
  } finally {
    h = r;
  }
};
exports.unstable_scheduleCallback = function (e, u, a) {
  var o = exports.unstable_now();
  a = typeof a == "object" && a !== null && typeof (a = a.delay) == "number" && a > 0 ? o + a : o;
  switch (e) {
    case 1:
      var i = -1;
      break;
    case 2:
      i = 250;
      break;
    case 5:
      i = 1073741823;
      break;
    case 4:
      i = 10000;
      break;
    default:
      i = 5000;
  }
  i = a + i;
  e = {
    id: d++,
    callback: u,
    priorityLevel: e,
    startTime: a,
    expirationTime: i,
    sortIndex: -1
  };
  if (a > o) {
    e.sortIndex = a;
    r(f, e);
    if (n(c) === null && e === n(f)) {
      if (g) {
        m(S);
        S = -1;
      } else {
        g = true;
      }
      x(P, a - o);
    }
  } else {
    e.sortIndex = i;
    r(c, e);
    if (!_ && !y) {
      _ = true;
      if (!O) {
        O = true;
        l();
      }
    }
  }
  return e;
};
exports.unstable_shouldYield = M;
exports.unstable_wrapCallback = function (e) {
  var t = h;
  return function () {
    var r = h;
    h = t;
    try {
      return e.apply(this, arguments);
    } finally {
      h = r;
    }
  };
};