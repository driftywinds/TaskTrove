var t;
var r;
var n;
var u = module.exports = {};
function a() {
  throw Error("setTimeout has not been defined");
}
function l() {
  throw Error("clearTimeout has not been defined");
}
try {
  t = typeof setTimeout == "function" ? setTimeout : a;
} catch (e) {
  t = a;
}
try {
  r = typeof clearTimeout == "function" ? clearTimeout : l;
} catch (e) {
  r = l;
}
function o(e) {
  if (t === setTimeout) {
    return setTimeout(e, 0);
  }
  if ((t === a || !t) && setTimeout) {
    t = setTimeout;
    return setTimeout(e, 0);
  }
  try {
    return t(e, 0);
  } catch (r) {
    try {
      return t.call(null, e, 0);
    } catch (r) {
      return t.call(this, e, 0);
    }
  }
}
var i = [];
var s = false;
var c = -1;
function f() {
  if (s && n) {
    s = false;
    if (n.length) {
      i = n.concat(i);
    } else {
      c = -1;
    }
    if (i.length) {
      d();
    }
  }
}
function d() {
  if (!s) {
    var e = o(f);
    s = true;
    for (var t = i.length; t;) {
      n = i;
      i = [];
      while (++c < t) {
        if (n) {
          n[c].run();
        }
      }
      c = -1;
      t = i.length;
    }
    n = null;
    s = false;
    (function (e) {
      if (r === clearTimeout) {
        return clearTimeout(e);
      }
      if ((r === l || !r) && clearTimeout) {
        r = clearTimeout;
        return clearTimeout(e);
      }
      try {
        r(e);
      } catch (t) {
        try {
          return r.call(null, e);
        } catch (t) {
          return r.call(this, e);
        }
      }
    })(e);
  }
}
function p(e, t) {
  this.fun = e;
  this.array = t;
}
function h() {}
u.nextTick = function (e) {
  var t = Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var r = 1; r < arguments.length; r++) {
      t[r - 1] = arguments[r];
    }
  }
  i.push(new p(e, t));
  if (i.length === 1 && !s) {
    o(d);
  }
};
p.prototype.run = function () {
  this.fun.apply(null, this.array);
};
u.title = "browser";
u.browser = true;
u.env = {};
u.argv = [];
u.version = "";
u.versions = {};
u.on = h;
u.addListener = h;
u.once = h;
u.off = h;
u.removeListener = h;
u.removeAllListeners = h;
u.emit = h;
u.prependListener = h;
u.prependOnceListener = h;
u.listeners = function (e) {
  return [];
};
u.binding = function (e) {
  throw Error("process.binding is not supported");
};
u.cwd = function () {
  return "/";
};
u.chdir = function (e) {
  throw Error("process.chdir is not supported");
};
u.umask = function () {
  return 0;
};