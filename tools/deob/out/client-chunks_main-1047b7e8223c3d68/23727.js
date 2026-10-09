var t;
var r;
var n;
var a = module.exports = {};
function o() {
  throw Error("setTimeout has not been defined");
}
function i() {
  throw Error("clearTimeout has not been defined");
}
try {
  t = typeof setTimeout == "function" ? setTimeout : o;
} catch (e) {
  t = o;
}
try {
  r = typeof clearTimeout == "function" ? clearTimeout : i;
} catch (e) {
  r = i;
}
function s(e) {
  if (t === setTimeout) {
    return setTimeout(e, 0);
  }
  if ((t === o || !t) && setTimeout) {
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
var u = [];
var l = false;
var c = -1;
function f() {
  if (l && n) {
    l = false;
    if (n.length) {
      u = n.concat(u);
    } else {
      c = -1;
    }
    if (u.length) {
      d();
    }
  }
}
function d() {
  if (!l) {
    var e = s(f);
    l = true;
    for (var t = u.length; t;) {
      n = u;
      u = [];
      while (++c < t) {
        if (n) {
          n[c].run();
        }
      }
      c = -1;
      t = u.length;
    }
    n = null;
    l = false;
    (function (e) {
      if (r === clearTimeout) {
        return clearTimeout(e);
      }
      if ((r === i || !r) && clearTimeout) {
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
a.nextTick = function (e) {
  var t = Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var r = 1; r < arguments.length; r++) {
      t[r - 1] = arguments[r];
    }
  }
  u.push(new p(e, t));
  if (u.length === 1 && !l) {
    s(d);
  }
};
p.prototype.run = function () {
  this.fun.apply(null, this.array);
};
a.title = "browser";
a.browser = true;
a.env = {};
a.argv = [];
a.version = "";
a.versions = {};
a.on = h;
a.addListener = h;
a.once = h;
a.off = h;
a.removeListener = h;
a.removeAllListeners = h;
a.emit = h;
a.prependListener = h;
a.prependOnceListener = h;
a.listeners = function (e) {
  return [];
};
a.binding = function (e) {
  throw Error("process.binding is not supported");
};
a.cwd = function () {
  return "/";
};
a.chdir = function (e) {
  throw Error("process.chdir is not supported");
};
a.umask = function () {
  return 0;
};