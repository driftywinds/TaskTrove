var t = {
  229: function (e) {
    var t;
    var r;
    var n;
    var o = e.exports = {};
    function i() {
      throw Error("setTimeout has not been defined");
    }
    function a() {
      throw Error("clearTimeout has not been defined");
    }
    try {
      t = typeof setTimeout == "function" ? setTimeout : i;
    } catch (e) {
      t = i;
    }
    try {
      r = typeof clearTimeout == "function" ? clearTimeout : a;
    } catch (e) {
      r = a;
    }
    function s(e) {
      if (t === setTimeout) {
        return setTimeout(e, 0);
      }
      if ((t === i || !t) && setTimeout) {
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
    var l = [];
    var u = false;
    var c = -1;
    function d() {
      if (u && n) {
        u = false;
        if (n.length) {
          l = n.concat(l);
        } else {
          c = -1;
        }
        if (l.length) {
          f();
        }
      }
    }
    function f() {
      if (!u) {
        var e = s(d);
        u = true;
        for (var t = l.length; t;) {
          n = l;
          l = [];
          while (++c < t) {
            if (n) {
              n[c].run();
            }
          }
          c = -1;
          t = l.length;
        }
        n = null;
        u = false;
        (function (e) {
          if (r === clearTimeout) {
            return clearTimeout(e);
          }
          if ((r === a || !r) && clearTimeout) {
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
    function m() {}
    o.nextTick = function (e) {
      var t = Array(arguments.length - 1);
      if (arguments.length > 1) {
        for (var r = 1; r < arguments.length; r++) {
          t[r - 1] = arguments[r];
        }
      }
      l.push(new p(e, t));
      if (l.length === 1 && !u) {
        s(f);
      }
    };
    p.prototype.run = function () {
      this.fun.apply(null, this.array);
    };
    o.title = "browser";
    o.browser = true;
    o.env = {};
    o.argv = [];
    o.version = "";
    o.versions = {};
    o.on = m;
    o.addListener = m;
    o.once = m;
    o.off = m;
    o.removeListener = m;
    o.removeAllListeners = m;
    o.emit = m;
    o.prependListener = m;
    o.prependOnceListener = m;
    o.listeners = function (e) {
      return [];
    };
    o.binding = function (e) {
      throw Error("process.binding is not supported");
    };
    o.cwd = function () {
      return "/";
    };
    o.chdir = function (e) {
      throw Error("process.chdir is not supported");
    };
    o.umask = function () {
      return 0;
    };
  }
};
var r = {};
function n(e) {
  var o = r[e];
  if (o !== undefined) {
    return o.exports;
  }
  var i = r[e] = {
    exports: {}
  };
  var a = true;
  try {
    t[e](i, i.exports, n);
    a = false;
  } finally {
    if (a) {
      delete r[e];
    }
  }
  return i.exports;
}
n.ab = "//";
module.exports = n(229);