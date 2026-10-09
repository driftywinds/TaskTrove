var i = require(/*webcrack:missing*/"./45334.js").Buffer;
var n = require(/*webcrack:missing*/"./37811.js");
var f = {
  7160: function (t, e, r) {
    e.bignum = r(711);
    e.define = r(495).define;
    e.base = r(853);
    e.constants = r(7335);
    e.decoders = r(6701);
    e.encoders = r(3418);
  },
  495: function (t, e, r) {
    var i = r(7160);
    var n = r(3782);
    function f(t, e) {
      this.name = t;
      this.body = e;
      this.decoders = {};
      this.encoders = {};
    }
    e.define = function (t, e) {
      return new f(t, e);
    };
    f.prototype._createNamed = function (t) {
      var e;
      try {
        e = r(6144).runInThisContext("(function " + this.name + "(entity) {\n  this._initNamed(entity);\n})");
      } catch (t) {
        e = function (t) {
          this._initNamed(t);
        };
      }
      n(e, t);
      e.prototype._initNamed = function (e) {
        t.call(this, e);
      };
      return new e(this);
    };
    f.prototype._getDecoder = function (t) {
      t = t || "der";
      if (!this.decoders.hasOwnProperty(t)) {
        this.decoders[t] = this._createNamed(i.decoders[t]);
      }
      return this.decoders[t];
    };
    f.prototype.decode = function (t, e, r) {
      return this._getDecoder(e).decode(t, r);
    };
    f.prototype._getEncoder = function (t) {
      t = t || "der";
      if (!this.encoders.hasOwnProperty(t)) {
        this.encoders[t] = this._createNamed(i.encoders[t]);
      }
      return this.encoders[t];
    };
    f.prototype.encode = function (t, e, r) {
      return this._getEncoder(e).encode(t, r);
    };
  },
  6483: function (t, e, r) {
    var i = r(3782);
    var n = r(853).Reporter;
    var f = r(4300).Buffer;
    function a(t, e) {
      n.call(this, e);
      if (f.isBuffer(t)) {
        this.base = t;
        this.offset = 0;
        this.length = t.length;
      } else {
        this.error("Input not Buffer");
      }
    }
    function o(t, e) {
      if (Array.isArray(t)) {
        this.length = 0;
        this.value = t.map(function (t) {
          if (!(t instanceof o)) {
            t = new o(t, e);
          }
          this.length += t.length;
          return t;
        }, this);
      } else if (typeof t == "number") {
        if (!(t >= 0) || !(t <= 255)) {
          return e.error("non-byte EncoderBuffer value");
        }
        this.value = t;
        this.length = 1;
      } else if (typeof t == "string") {
        this.value = t;
        this.length = f.byteLength(t);
      } else {
        if (!f.isBuffer(t)) {
          return e.error("Unsupported type: " + typeof t);
        }
        this.value = t;
        this.length = t.length;
      }
    }
    i(a, n);
    e.C = a;
    a.prototype.save = function () {
      return {
        offset: this.offset,
        reporter: n.prototype.save.call(this)
      };
    };
    a.prototype.restore = function (t) {
      var e = new a(this.base);
      e.offset = t.offset;
      e.length = this.offset;
      this.offset = t.offset;
      n.prototype.restore.call(this, t.reporter);
      return e;
    };
    a.prototype.isEmpty = function () {
      return this.offset === this.length;
    };
    a.prototype.readUInt8 = function (t) {
      if (this.offset + 1 <= this.length) {
        return this.base.readUInt8(this.offset++, true);
      } else {
        return this.error(t || "DecoderBuffer overrun");
      }
    };
    a.prototype.skip = function (t, e) {
      if (!(this.offset + t <= this.length)) {
        return this.error(e || "DecoderBuffer overrun");
      }
      var r = new a(this.base);
      r._reporterState = this._reporterState;
      r.offset = this.offset;
      r.length = this.offset + t;
      this.offset += t;
      return r;
    };
    a.prototype.raw = function (t) {
      return this.base.slice(t ? t.offset : this.offset, this.length);
    };
    e.R = o;
    o.prototype.join = function (t, e) {
      t ||= new f(this.length);
      e ||= 0;
      if (this.length !== 0) {
        if (Array.isArray(this.value)) {
          this.value.forEach(function (r) {
            r.join(t, e);
            e += r.length;
          });
        } else {
          if (typeof this.value == "number") {
            t[e] = this.value;
          } else if (typeof this.value == "string") {
            t.write(this.value, e);
          } else if (f.isBuffer(this.value)) {
            this.value.copy(t, e);
          }
          e += this.length;
        }
      }
      return t;
    };
  },
  853: function (t, e, r) {
    e.Reporter = r(1293).b;
    e.DecoderBuffer = r(6483).C;
    e.EncoderBuffer = r(6483).R;
    e.Node = r(9374);
  },
  9374: function (t, e, r) {
    var i = r(853).Reporter;
    var n = r(853).EncoderBuffer;
    var f = r(853).DecoderBuffer;
    var a = r(3523);
    var o = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr"];
    var s = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(o);
    function h(t, e) {
      var r = {};
      this._baseState = r;
      r.enc = t;
      r.parent = e || null;
      r.children = null;
      r.tag = null;
      r.args = null;
      r.reverseArgs = null;
      r.choice = null;
      r.optional = false;
      r.any = false;
      r.obj = false;
      r.use = null;
      r.useDecoder = null;
      r.key = null;
      r.default = null;
      r.explicit = null;
      r.implicit = null;
      r.contains = null;
      if (!r.parent) {
        r.children = [];
        this._wrap();
      }
    }
    t.exports = h;
    var c = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains"];
    h.prototype.clone = function () {
      var t = this._baseState;
      var e = {};
      c.forEach(function (r) {
        e[r] = t[r];
      });
      var r = new this.constructor(e.parent);
      r._baseState = e;
      return r;
    };
    h.prototype._wrap = function () {
      var t = this._baseState;
      s.forEach(function (e) {
        this[e] = function () {
          var r = new this.constructor(this);
          t.children.push(r);
          return r[e].apply(r, arguments);
        };
      }, this);
    };
    h.prototype._init = function (t) {
      var e = this._baseState;
      a(e.parent === null);
      t.call(this);
      e.children = e.children.filter(function (t) {
        return t._baseState.parent === this;
      }, this);
      a.equal(e.children.length, 1, "Root node can have only one child");
    };
    h.prototype._useArgs = function (t) {
      var e = this._baseState;
      var r = t.filter(function (t) {
        return t instanceof this.constructor;
      }, this);
      t = t.filter(function (t) {
        return !(t instanceof this.constructor);
      }, this);
      if (r.length !== 0) {
        a(e.children === null);
        e.children = r;
        r.forEach(function (t) {
          t._baseState.parent = this;
        }, this);
      }
      if (t.length !== 0) {
        a(e.args === null);
        e.args = t;
        e.reverseArgs = t.map(function (t) {
          if (typeof t != "object" || t.constructor !== Object) {
            return t;
          }
          var e = {};
          Object.keys(t).forEach(function (r) {
            if (r == (r | 0)) {
              r |= 0;
            }
            e[t[r]] = r;
          });
          return e;
        });
      }
    };
    ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"].forEach(function (t) {
      h.prototype[t] = function () {
        throw Error(t + " not implemented for encoding: " + this._baseState.enc);
      };
    });
    o.forEach(function (t) {
      h.prototype[t] = function () {
        var e = this._baseState;
        var r = Array.prototype.slice.call(arguments);
        a(e.tag === null);
        e.tag = t;
        this._useArgs(r);
        return this;
      };
    });
    h.prototype.use = function (t) {
      a(t);
      var e = this._baseState;
      a(e.use === null);
      e.use = t;
      return this;
    };
    h.prototype.optional = function () {
      this._baseState.optional = true;
      return this;
    };
    h.prototype.def = function (t) {
      var e = this._baseState;
      a(e.default === null);
      e.default = t;
      e.optional = true;
      return this;
    };
    h.prototype.explicit = function (t) {
      var e = this._baseState;
      a(e.explicit === null && e.implicit === null);
      e.explicit = t;
      return this;
    };
    h.prototype.implicit = function (t) {
      var e = this._baseState;
      a(e.explicit === null && e.implicit === null);
      e.implicit = t;
      return this;
    };
    h.prototype.obj = function () {
      var t = this._baseState;
      var e = Array.prototype.slice.call(arguments);
      t.obj = true;
      if (e.length !== 0) {
        this._useArgs(e);
      }
      return this;
    };
    h.prototype.key = function (t) {
      var e = this._baseState;
      a(e.key === null);
      e.key = t;
      return this;
    };
    h.prototype.any = function () {
      this._baseState.any = true;
      return this;
    };
    h.prototype.choice = function (t) {
      var e = this._baseState;
      a(e.choice === null);
      e.choice = t;
      this._useArgs(Object.keys(t).map(function (e) {
        return t[e];
      }));
      return this;
    };
    h.prototype.contains = function (t) {
      var e = this._baseState;
      a(e.use === null);
      e.contains = t;
      return this;
    };
    h.prototype._decode = function (t, e) {
      var r;
      var i = this._baseState;
      if (i.parent === null) {
        return t.wrapResult(i.children[0]._decode(t, e));
      }
      var n = i.default;
      var a = true;
      var o = null;
      if (i.key !== null) {
        o = t.enterKey(i.key);
      }
      if (i.optional) {
        var s = null;
        if (i.explicit !== null) {
          s = i.explicit;
        } else if (i.implicit !== null) {
          s = i.implicit;
        } else if (i.tag !== null) {
          s = i.tag;
        }
        if (s !== null || i.any) {
          a = this._peekTag(t, s, i.any);
          if (t.isError(a)) {
            return a;
          }
        } else {
          var h = t.save();
          try {
            if (i.choice === null) {
              this._decodeGeneric(i.tag, t, e);
            } else {
              this._decodeChoice(t, e);
            }
            a = true;
          } catch (t) {
            a = false;
          }
          t.restore(h);
        }
      }
      if (i.obj && a) {
        r = t.enterObject();
      }
      if (a) {
        if (i.explicit !== null) {
          var c = this._decodeTag(t, i.explicit);
          if (t.isError(c)) {
            return c;
          }
          t = c;
        }
        var d = t.offset;
        if (i.use === null && i.choice === null) {
          if (i.any) {
            var h = t.save();
          }
          var u = this._decodeTag(t, i.implicit !== null ? i.implicit : i.tag, i.any);
          if (t.isError(u)) {
            return u;
          }
          if (i.any) {
            n = t.raw(h);
          } else {
            t = u;
          }
        }
        if (e && e.track && i.tag !== null) {
          e.track(t.path(), d, t.length, "tagged");
        }
        if (e && e.track && i.tag !== null) {
          e.track(t.path(), t.offset, t.length, "content");
        }
        if (!i.any) {
          n = i.choice === null ? this._decodeGeneric(i.tag, t, e) : this._decodeChoice(t, e);
        }
        if (t.isError(n)) {
          return n;
        }
        if (!i.any && i.choice === null && i.children !== null) {
          i.children.forEach(function (r) {
            r._decode(t, e);
          });
        }
        if (i.contains && (i.tag === "octstr" || i.tag === "bitstr")) {
          var l = new f(n);
          n = this._getUse(i.contains, t._reporterState.obj)._decode(l, e);
        }
      }
      if (i.obj && a) {
        n = t.leaveObject(r);
      }
      if (i.key !== null && (n !== null || a === true)) {
        t.leaveKey(o, i.key, n);
      } else if (o !== null) {
        t.exitKey(o);
      }
      return n;
    };
    h.prototype._decodeGeneric = function (t, e, r) {
      var i = this._baseState;
      if (t === "seq" || t === "set") {
        return null;
      }
      if (t === "seqof" || t === "setof") {
        return this._decodeList(e, t, i.args[0], r);
      }
      if (/str$/.test(t)) {
        return this._decodeStr(e, t, r);
      }
      if (t === "objid" && i.args) {
        return this._decodeObjid(e, i.args[0], i.args[1], r);
      }
      if (t === "objid") {
        return this._decodeObjid(e, null, null, r);
      }
      if (t === "gentime" || t === "utctime") {
        return this._decodeTime(e, t, r);
      } else if (t === "null_") {
        return this._decodeNull(e, r);
      } else if (t === "bool") {
        return this._decodeBool(e, r);
      } else if (t === "objDesc") {
        return this._decodeStr(e, t, r);
      } else if (t === "int" || t === "enum") {
        return this._decodeInt(e, i.args && i.args[0], r);
      }
      if (i.use !== null) {
        return this._getUse(i.use, e._reporterState.obj)._decode(e, r);
      } else {
        return e.error("unknown tag: " + t);
      }
    };
    h.prototype._getUse = function (t, e) {
      var r = this._baseState;
      r.useDecoder = this._use(t, e);
      a(r.useDecoder._baseState.parent === null);
      r.useDecoder = r.useDecoder._baseState.children[0];
      if (r.implicit !== r.useDecoder._baseState.implicit) {
        r.useDecoder = r.useDecoder.clone();
        r.useDecoder._baseState.implicit = r.implicit;
      }
      return r.useDecoder;
    };
    h.prototype._decodeChoice = function (t, e) {
      var r = this._baseState;
      var i = null;
      var n = false;
      Object.keys(r.choice).some(function (f) {
        var a = t.save();
        var o = r.choice[f];
        try {
          var s = o._decode(t, e);
          if (t.isError(s)) {
            return false;
          }
          i = {
            type: f,
            value: s
          };
          n = true;
        } catch (e) {
          t.restore(a);
          return false;
        }
        return true;
      }, this);
      if (n) {
        return i;
      } else {
        return t.error("Choice not matched");
      }
    };
    h.prototype._createEncoderBuffer = function (t) {
      return new n(t, this.reporter);
    };
    h.prototype._encode = function (t, e, r) {
      var i = this._baseState;
      if (i.default === null || i.default !== t) {
        var n = this._encodeValue(t, e, r);
        if (n !== undefined && !this._skipDefault(n, e, r)) {
          return n;
        }
      }
    };
    h.prototype._encodeValue = function (t, e, r) {
      var n;
      var f = this._baseState;
      if (f.parent === null) {
        return f.children[0]._encode(t, e || new i());
      }
      var n = null;
      this.reporter = e;
      if (f.optional && t === undefined) {
        if (f.default === null) {
          return;
        } else {
          t = f.default;
        }
      }
      var a = null;
      var o = false;
      if (f.any) {
        n = this._createEncoderBuffer(t);
      } else if (f.choice) {
        n = this._encodeChoice(t, e);
      } else if (f.contains) {
        a = this._getUse(f.contains, r)._encode(t, e);
        o = true;
      } else if (f.children) {
        a = f.children.map(function (r) {
          if (r._baseState.tag === "null_") {
            return r._encode(null, e, t);
          }
          if (r._baseState.key === null) {
            return e.error("Child should have a key");
          }
          var i = e.enterKey(r._baseState.key);
          if (typeof t != "object") {
            return e.error("Child expected, but input is not object");
          }
          var n = r._encode(t[r._baseState.key], e, t);
          e.leaveKey(i);
          return n;
        }, this).filter(function (t) {
          return t;
        });
        a = this._createEncoderBuffer(a);
      } else if (f.tag === "seqof" || f.tag === "setof") {
        if (!f.args || f.args.length !== 1) {
          return e.error("Too many args for : " + f.tag);
        }
        if (!Array.isArray(t)) {
          return e.error("seqof/setof, but data is not Array");
        }
        var s = this.clone();
        s._baseState.implicit = null;
        a = this._createEncoderBuffer(t.map(function (r) {
          var i = this._baseState;
          return this._getUse(i.args[0], t)._encode(r, e);
        }, s));
      } else if (f.use !== null) {
        n = this._getUse(f.use, r)._encode(t, e);
      } else {
        a = this._encodePrimitive(f.tag, t);
        o = true;
      }
      if (!f.any && f.choice === null) {
        var h = f.implicit !== null ? f.implicit : f.tag;
        var c = f.implicit === null ? "universal" : "context";
        if (h === null) {
          if (f.use === null) {
            e.error("Tag could be omitted only for .use()");
          }
        } else if (f.use === null) {
          n = this._encodeComposite(h, o, c, a);
        }
      }
      if (f.explicit !== null) {
        n = this._encodeComposite(f.explicit, false, "context", n);
      }
      return n;
    };
    h.prototype._encodeChoice = function (t, e) {
      var r = this._baseState;
      var i = r.choice[t.type];
      if (!i) {
        a(false, t.type + " not found in " + JSON.stringify(Object.keys(r.choice)));
      }
      return i._encode(t.value, e);
    };
    h.prototype._encodePrimitive = function (t, e) {
      var r = this._baseState;
      if (/str$/.test(t)) {
        return this._encodeStr(e, t);
      }
      if (t === "objid" && r.args) {
        return this._encodeObjid(e, r.reverseArgs[0], r.args[1]);
      }
      if (t === "objid") {
        return this._encodeObjid(e, null, null);
      }
      if (t === "gentime" || t === "utctime") {
        return this._encodeTime(e, t);
      }
      if (t === "null_") {
        return this._encodeNull();
      } else if (t === "int" || t === "enum") {
        return this._encodeInt(e, r.args && r.reverseArgs[0]);
      } else if (t === "bool") {
        return this._encodeBool(e);
      } else if (t === "objDesc") {
        return this._encodeStr(e, t);
      } else {
        throw Error("Unsupported tag: " + t);
      }
    };
    h.prototype._isNumstr = function (t) {
      return /^[0-9 ]*$/.test(t);
    };
    h.prototype._isPrintstr = function (t) {
      return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(t);
    };
  },
  1293: function (t, e, r) {
    var i = r(3782);
    function n(t) {
      this._reporterState = {
        obj: null,
        path: [],
        options: t || {},
        errors: []
      };
    }
    function f(t, e) {
      this.path = t;
      this.rethrow(e);
    }
    e.b = n;
    n.prototype.isError = function (t) {
      return t instanceof f;
    };
    n.prototype.save = function () {
      var t = this._reporterState;
      return {
        obj: t.obj,
        pathLen: t.path.length
      };
    };
    n.prototype.restore = function (t) {
      var e = this._reporterState;
      e.obj = t.obj;
      e.path = e.path.slice(0, t.pathLen);
    };
    n.prototype.enterKey = function (t) {
      return this._reporterState.path.push(t);
    };
    n.prototype.exitKey = function (t) {
      var e = this._reporterState;
      e.path = e.path.slice(0, t - 1);
    };
    n.prototype.leaveKey = function (t, e, r) {
      var i = this._reporterState;
      this.exitKey(t);
      if (i.obj !== null) {
        i.obj[e] = r;
      }
    };
    n.prototype.path = function () {
      return this._reporterState.path.join("/");
    };
    n.prototype.enterObject = function () {
      var t = this._reporterState;
      var e = t.obj;
      t.obj = {};
      return e;
    };
    n.prototype.leaveObject = function (t) {
      var e = this._reporterState;
      var r = e.obj;
      e.obj = t;
      return r;
    };
    n.prototype.error = function (t) {
      var e;
      var r = this._reporterState;
      var i = t instanceof f;
      e = i ? t : new f(r.path.map(function (t) {
        return "[" + JSON.stringify(t) + "]";
      }).join(""), t.message || t, t.stack);
      if (!r.options.partial) {
        throw e;
      }
      if (!i) {
        r.errors.push(e);
      }
      return e;
    };
    n.prototype.wrapResult = function (t) {
      var e = this._reporterState;
      if (e.options.partial) {
        return {
          result: this.isError(t) ? null : t,
          errors: e.errors
        };
      } else {
        return t;
      }
    };
    i(f, Error);
    f.prototype.rethrow = function (t) {
      this.message = t + " at: " + (this.path || "(shallow)");
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, f);
      }
      if (!this.stack) {
        try {
          throw Error(this.message);
        } catch (t) {
          this.stack = t.stack;
        }
      }
      return this;
    };
  },
  9791: function (t, e, r) {
    var i = r(7335);
    e.tagClass = {
      0: "universal",
      1: "application",
      2: "context",
      3: "private"
    };
    e.tagClassByName = i._reverse(e.tagClass);
    e.tag = {
      0: "end",
      1: "bool",
      2: "int",
      3: "bitstr",
      4: "octstr",
      5: "null_",
      6: "objid",
      7: "objDesc",
      8: "external",
      9: "real",
      10: "enum",
      11: "embed",
      12: "utf8str",
      13: "relativeOid",
      16: "seq",
      17: "set",
      18: "numstr",
      19: "printstr",
      20: "t61str",
      21: "videostr",
      22: "ia5str",
      23: "utctime",
      24: "gentime",
      25: "graphstr",
      26: "iso646str",
      27: "genstr",
      28: "unistr",
      29: "charstr",
      30: "bmpstr"
    };
    e.tagByName = i._reverse(e.tag);
  },
  7335: function (t, e, r) {
    e._reverse = function (t) {
      var e = {};
      Object.keys(t).forEach(function (r) {
        if ((r | 0) == r) {
          r |= 0;
        }
        e[t[r]] = r;
      });
      return e;
    };
    e.der = r(9791);
  },
  2259: function (t, e, r) {
    var i = r(3782);
    var n = r(7160);
    var f = n.base;
    var a = n.bignum;
    var o = n.constants.der;
    function s(t) {
      this.enc = "der";
      this.name = t.name;
      this.entity = t;
      this.tree = new h();
      this.tree._init(t.body);
    }
    function h(t) {
      f.Node.call(this, "der", t);
    }
    function c(t, e) {
      var r = t.readUInt8(e);
      if (t.isError(r)) {
        return r;
      }
      var i = o.tagClass[r >> 6];
      var n = (r & 32) == 0;
      if ((r & 31) == 31) {
        var f = r;
        for (r = 0; (f & 128) == 128;) {
          f = t.readUInt8(e);
          if (t.isError(f)) {
            return f;
          }
          r <<= 7;
          r |= f & 127;
        }
      } else {
        r &= 31;
      }
      var a = o.tag[r];
      return {
        cls: i,
        primitive: n,
        tag: r,
        tagStr: a
      };
    }
    function d(t, e, r) {
      var i = t.readUInt8(r);
      if (t.isError(i)) {
        return i;
      }
      if (!e && i === 128) {
        return null;
      }
      if ((i & 128) == 0) {
        return i;
      }
      var n = i & 127;
      if (n > 4) {
        return t.error("length octect is too long");
      }
      i = 0;
      for (var f = 0; f < n; f++) {
        i <<= 8;
        var a = t.readUInt8(r);
        if (t.isError(a)) {
          return a;
        }
        i |= a;
      }
      return i;
    }
    t.exports = s;
    s.prototype.decode = function (t, e) {
      if (!(t instanceof f.DecoderBuffer)) {
        t = new f.DecoderBuffer(t, e);
      }
      return this.tree._decode(t, e);
    };
    i(h, f.Node);
    h.prototype._peekTag = function (t, e, r) {
      if (t.isEmpty()) {
        return false;
      }
      var i = t.save();
      var n = c(t, "Failed to peek tag: \"" + e + "\"");
      if (t.isError(n)) {
        return n;
      } else {
        t.restore(i);
        return n.tag === e || n.tagStr === e || n.tagStr + "of" === e || r;
      }
    };
    h.prototype._decodeTag = function (t, e, r) {
      var i = c(t, "Failed to decode tag of \"" + e + "\"");
      if (t.isError(i)) {
        return i;
      }
      var n = d(t, i.primitive, "Failed to get length of \"" + e + "\"");
      if (t.isError(n)) {
        return n;
      }
      if (!r && i.tag !== e && i.tagStr !== e && i.tagStr + "of" !== e) {
        return t.error("Failed to match tag: \"" + e + "\"");
      }
      if (i.primitive || n !== null) {
        return t.skip(n, "Failed to match body of: \"" + e + "\"");
      }
      var f = t.save();
      var a = this._skipUntilEnd(t, "Failed to skip indefinite length body: \"" + this.tag + "\"");
      if (t.isError(a)) {
        return a;
      } else {
        n = t.offset - f.offset;
        t.restore(f);
        return t.skip(n, "Failed to match body of: \"" + e + "\"");
      }
    };
    h.prototype._skipUntilEnd = function (t, e) {
      while (true) {
        var r;
        var i = c(t, e);
        if (t.isError(i)) {
          return i;
        }
        var n = d(t, i.primitive, e);
        if (t.isError(n)) {
          return n;
        }
        r = i.primitive || n !== null ? t.skip(n) : this._skipUntilEnd(t, e);
        if (t.isError(r)) {
          return r;
        }
        if (i.tagStr === "end") {
          break;
        }
      }
    };
    h.prototype._decodeList = function (t, e, r, i) {
      var n = [];
      for (; !t.isEmpty();) {
        var f = this._peekTag(t, "end");
        if (t.isError(f)) {
          return f;
        }
        var a = r.decode(t, "der", i);
        if (t.isError(a) && f) {
          break;
        }
        n.push(a);
      }
      return n;
    };
    h.prototype._decodeStr = function (t, e) {
      if (e === "bitstr") {
        var r = t.readUInt8();
        if (t.isError(r)) {
          return r;
        } else {
          return {
            unused: r,
            data: t.raw()
          };
        }
      }
      if (e === "bmpstr") {
        var i = t.raw();
        if (i.length % 2 == 1) {
          return t.error("Decoding of string type: bmpstr length mismatch");
        }
        var n = "";
        for (var f = 0; f < i.length / 2; f++) {
          n += String.fromCharCode(i.readUInt16BE(f * 2));
        }
        return n;
      }
      if (e === "numstr") {
        var a = t.raw().toString("ascii");
        if (this._isNumstr(a)) {
          return a;
        } else {
          return t.error("Decoding of string type: numstr unsupported characters");
        }
      }
      if (e === "octstr") {
        return t.raw();
      }
      if (e === "objDesc") {
        return t.raw();
      } else if (e === "printstr") {
        var o = t.raw().toString("ascii");
        if (this._isPrintstr(o)) {
          return o;
        } else {
          return t.error("Decoding of string type: printstr unsupported characters");
        }
      } else if (/str$/.test(e)) {
        return t.raw().toString();
      } else {
        return t.error("Decoding of string type: " + e + " unsupported");
      }
    };
    h.prototype._decodeObjid = function (t, e, r) {
      var i;
      var n = [];
      for (var f = 0; !t.isEmpty();) {
        var a = t.readUInt8();
        f <<= 7;
        f |= a & 127;
        if ((a & 128) == 0) {
          n.push(f);
          f = 0;
        }
      }
      if (a & 128) {
        n.push(f);
      }
      var o = n[0] / 40 | 0;
      var s = n[0] % 40;
      i = r ? n : [o, s].concat(n.slice(1));
      if (e) {
        var h = e[i.join(" ")];
        if (h === undefined) {
          h = e[i.join(".")];
        }
        if (h !== undefined) {
          i = h;
        }
      }
      return i;
    };
    h.prototype._decodeTime = function (t, e) {
      var r = t.raw().toString();
      if (e === "gentime") {
        var i = r.slice(0, 4) | 0;
        var n = r.slice(4, 6) | 0;
        var f = r.slice(6, 8) | 0;
        var a = r.slice(8, 10) | 0;
        var o = r.slice(10, 12) | 0;
        var s = r.slice(12, 14) | 0;
      } else {
        if (e !== "utctime") {
          return t.error("Decoding " + e + " time is not supported yet");
        }
        var i = r.slice(0, 2) | 0;
        var n = r.slice(2, 4) | 0;
        var f = r.slice(4, 6) | 0;
        var a = r.slice(6, 8) | 0;
        var o = r.slice(8, 10) | 0;
        var s = r.slice(10, 12) | 0;
        i = i < 70 ? 2000 + i : 1900 + i;
      }
      return Date.UTC(i, n - 1, f, a, o, s, 0);
    };
    h.prototype._decodeNull = function (t) {
      return null;
    };
    h.prototype._decodeBool = function (t) {
      var e = t.readUInt8();
      if (t.isError(e)) {
        return e;
      } else {
        return e !== 0;
      }
    };
    h.prototype._decodeInt = function (t, e) {
      var r = new a(t.raw());
      if (e) {
        r = e[r.toString(10)] || r;
      }
      return r;
    };
    h.prototype._use = function (t, e) {
      if (typeof t == "function") {
        t = t(e);
      }
      return t._getDecoder("der").tree;
    };
  },
  6701: function (t, e, r) {
    e.der = r(2259);
    e.pem = r(8527);
  },
  8527: function (t, e, r) {
    var i = r(3782);
    var n = r(4300).Buffer;
    var f = r(2259);
    function a(t) {
      f.call(this, t);
      this.enc = "pem";
    }
    i(a, f);
    t.exports = a;
    a.prototype.decode = function (t, e) {
      for (var r = t.toString().split(/[\r\n]+/g), i = e.label.toUpperCase(), a = /^-----(BEGIN|END) ([^-]+)-----$/, o = -1, s = -1, h = 0; h < r.length; h++) {
        var c = r[h].match(a);
        if (c !== null && c[2] === i) {
          if (o === -1) {
            if (c[1] !== "BEGIN") {
              break;
            }
            o = h;
          } else {
            if (c[1] !== "END") {
              break;
            }
            s = h;
            break;
          }
        }
      }
      if (o === -1 || s === -1) {
        throw Error("PEM section not found for: " + i);
      }
      var d = r.slice(o + 1, s).join("");
      d.replace(/[^a-z0-9\+\/=]+/gi, "");
      var u = new n(d, "base64");
      return f.prototype.decode.call(this, u, e);
    };
  },
  7804: function (t, e, r) {
    var i = r(3782);
    var n = r(4300).Buffer;
    var f = r(7160);
    var a = f.base;
    var o = f.constants.der;
    function s(t) {
      this.enc = "der";
      this.name = t.name;
      this.entity = t;
      this.tree = new h();
      this.tree._init(t.body);
    }
    function h(t) {
      a.Node.call(this, "der", t);
    }
    function c(t) {
      if (t < 10) {
        return "0" + t;
      } else {
        return t;
      }
    }
    t.exports = s;
    s.prototype.encode = function (t, e) {
      return this.tree._encode(t, e).join();
    };
    i(h, a.Node);
    h.prototype._encodeComposite = function (t, e, r, i) {
      var f = function (t, e, r, i) {
        var n;
        if (t === "seqof") {
          t = "seq";
        } else if (t === "setof") {
          t = "set";
        }
        if (o.tagByName.hasOwnProperty(t)) {
          n = o.tagByName[t];
        } else {
          if (typeof t != "number" || (t | 0) !== t) {
            return i.error("Unknown tag: " + t);
          }
          n = t;
        }
        if (n >= 31) {
          return i.error("Multi-octet tag encoding unsupported");
        } else {
          if (!e) {
            n |= 32;
          }
          return n |= o.tagClassByName[r || "universal"] << 6;
        }
      }(t, e, r, this.reporter);
      if (i.length < 128) {
        var a = new n(2);
        a[0] = f;
        a[1] = i.length;
        return this._createEncoderBuffer([a, i]);
      }
      var s = 1;
      for (var h = i.length; h >= 256; h >>= 8) {
        s++;
      }
      var a = new n(2 + s);
      a[0] = f;
      a[1] = s | 128;
      for (var h = 1 + s, c = i.length; c > 0; h--, c >>= 8) {
        a[h] = c & 255;
      }
      return this._createEncoderBuffer([a, i]);
    };
    h.prototype._encodeStr = function (t, e) {
      if (e === "bitstr") {
        return this._createEncoderBuffer([t.unused | 0, t.data]);
      }
      if (e === "bmpstr") {
        var r = new n(t.length * 2);
        for (var i = 0; i < t.length; i++) {
          r.writeUInt16BE(t.charCodeAt(i), i * 2);
        }
        return this._createEncoderBuffer(r);
      }
      if (e === "numstr") {
        if (this._isNumstr(t)) {
          return this._createEncoderBuffer(t);
        } else {
          return this.reporter.error("Encoding of string type: numstr supports only digits and space");
        }
      }
      if (e === "printstr") {
        if (this._isPrintstr(t)) {
          return this._createEncoderBuffer(t);
        } else {
          return this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark");
        }
      }
      if (/str$/.test(e)) {
        return this._createEncoderBuffer(t);
      } else if (e === "objDesc") {
        return this._createEncoderBuffer(t);
      } else {
        return this.reporter.error("Encoding of string type: " + e + " unsupported");
      }
    };
    h.prototype._encodeObjid = function (t, e, r) {
      if (typeof t == "string") {
        if (!e) {
          return this.reporter.error("string objid given, but no values map found");
        }
        if (!e.hasOwnProperty(t)) {
          return this.reporter.error("objid not found in values map");
        }
        t = e[t].split(/[\s\.]+/g);
        for (var i = 0; i < t.length; i++) {
          t[i] |= 0;
        }
      } else if (Array.isArray(t)) {
        t = t.slice();
        for (var i = 0; i < t.length; i++) {
          t[i] |= 0;
        }
      }
      if (!Array.isArray(t)) {
        return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(t));
      }
      if (!r) {
        if (t[1] >= 40) {
          return this.reporter.error("Second objid identifier OOB");
        }
        t.splice(0, 2, t[0] * 40 + t[1]);
      }
      var f = 0;
      for (var i = 0; i < t.length; i++) {
        var a = t[i];
        for (f++; a >= 128; a >>= 7) {
          f++;
        }
      }
      var o = new n(f);
      var s = o.length - 1;
      for (var i = t.length - 1; i >= 0; i--) {
        var a = t[i];
        for (o[s--] = a & 127; (a >>= 7) > 0;) {
          o[s--] = a & 127 | 128;
        }
      }
      return this._createEncoderBuffer(o);
    };
    h.prototype._encodeTime = function (t, e) {
      var r;
      var i = new Date(t);
      if (e === "gentime") {
        r = "" + c(i.getFullYear()) + c(i.getUTCMonth() + 1) + c(i.getUTCDate()) + c(i.getUTCHours()) + c(i.getUTCMinutes()) + c(i.getUTCSeconds()) + "Z";
      } else if (e === "utctime") {
        r = "" + c(i.getFullYear() % 100) + c(i.getUTCMonth() + 1) + c(i.getUTCDate()) + c(i.getUTCHours()) + c(i.getUTCMinutes()) + c(i.getUTCSeconds()) + "Z";
      } else {
        this.reporter.error("Encoding " + e + " time is not supported yet");
      }
      return this._encodeStr(r, "octstr");
    };
    h.prototype._encodeNull = function () {
      return this._createEncoderBuffer("");
    };
    h.prototype._encodeInt = function (t, e) {
      if (typeof t == "string") {
        if (!e) {
          return this.reporter.error("String int or enum given, but no values map");
        }
        if (!e.hasOwnProperty(t)) {
          return this.reporter.error("Values map doesn't contain: " + JSON.stringify(t));
        }
        t = e[t];
      }
      if (typeof t != "number" && !n.isBuffer(t)) {
        var r = t.toArray();
        if (!t.sign && r[0] & 128) {
          r.unshift(0);
        }
        t = new n(r);
      }
      if (n.isBuffer(t)) {
        var i = t.length;
        if (t.length === 0) {
          i++;
        }
        var f = new n(i);
        t.copy(f);
        if (t.length === 0) {
          f[0] = 0;
        }
        return this._createEncoderBuffer(f);
      }
      if (t < 128) {
        return this._createEncoderBuffer(t);
      }
      if (t < 256) {
        return this._createEncoderBuffer([0, t]);
      }
      var i = 1;
      for (var a = t; a >= 256; a >>= 8) {
        i++;
      }
      var f = Array(i);
      for (var a = f.length - 1; a >= 0; a--) {
        f[a] = t & 255;
        t >>= 8;
      }
      if (f[0] & 128) {
        f.unshift(0);
      }
      return this._createEncoderBuffer(new n(f));
    };
    h.prototype._encodeBool = function (t) {
      return this._createEncoderBuffer(!!t * 255);
    };
    h.prototype._use = function (t, e) {
      if (typeof t == "function") {
        t = t(e);
      }
      return t._getEncoder("der").tree;
    };
    h.prototype._skipDefault = function (t, e, r) {
      var i;
      var n = this._baseState;
      if (n.default === null) {
        return false;
      }
      var f = t.join();
      if (n.defaultBuffer === undefined) {
        n.defaultBuffer = this._encodeValue(n.default, e, r).join();
      }
      if (f.length !== n.defaultBuffer.length) {
        return false;
      }
      for (i = 0; i < f.length; i++) {
        if (f[i] !== n.defaultBuffer[i]) {
          return false;
        }
      }
      return true;
    };
  },
  3418: function (t, e, r) {
    e.der = r(7804);
    e.pem = r(1564);
  },
  1564: function (t, e, r) {
    var i = r(3782);
    var n = r(7804);
    function f(t) {
      n.call(this, t);
      this.enc = "pem";
    }
    i(f, n);
    t.exports = f;
    f.prototype.encode = function (t, e) {
      for (var r = n.prototype.encode.call(this, t).toString("base64"), i = ["-----BEGIN " + e.label + "-----"], f = 0; f < r.length; f += 64) {
        i.push(r.slice(f, f + 64));
      }
      i.push("-----END " + e.label + "-----");
      return i.join("\n");
    };
  },
  711: function (t, e, r) {
    (function (t, e) {
      "use strict";

      function i(t, e) {
        if (!t) {
          throw Error(e || "Assertion failed");
        }
      }
      function n(t, e) {
        t.super_ = e;
        function r() {}
        r.prototype = e.prototype;
        t.prototype = new r();
        t.prototype.constructor = t;
      }
      function f(t, e, r) {
        if (f.isBN(t)) {
          return t;
        }
        this.negative = 0;
        this.words = null;
        this.length = 0;
        this.red = null;
        if (t !== null) {
          if (e === "le" || e === "be") {
            r = e;
            e = 10;
          }
          this._init(t || 0, e || 10, r || "be");
        }
      }
      if (typeof t == "object") {
        t.exports = f;
      } else {
        e.BN = f;
      }
      f.BN = f;
      f.wordSize = 26;
      try {
        s = r(4300).Buffer;
      } catch (t) {}
      function a(t, e, r) {
        var i = 0;
        for (var n = Math.min(t.length, r), f = e; f < n; f++) {
          var a = t.charCodeAt(f) - 48;
          i <<= 4;
          if (a >= 49 && a <= 54) {
            i |= a - 49 + 10;
          } else if (a >= 17 && a <= 22) {
            i |= a - 17 + 10;
          } else {
            i |= a & 15;
          }
        }
        return i;
      }
      function o(t, e, r, i) {
        var n = 0;
        for (var f = Math.min(t.length, r), a = e; a < f; a++) {
          var o = t.charCodeAt(a) - 48;
          n *= i;
          if (o >= 49) {
            n += o - 49 + 10;
          } else if (o >= 17) {
            n += o - 17 + 10;
          } else {
            n += o;
          }
        }
        return n;
      }
      f.isBN = function (t) {
        return t instanceof f || t !== null && typeof t == "object" && t.constructor.wordSize === f.wordSize && Array.isArray(t.words);
      };
      f.max = function (t, e) {
        if (t.cmp(e) > 0) {
          return t;
        } else {
          return e;
        }
      };
      f.min = function (t, e) {
        if (t.cmp(e) < 0) {
          return t;
        } else {
          return e;
        }
      };
      f.prototype._init = function (t, e, r) {
        if (typeof t == "number") {
          return this._initNumber(t, e, r);
        }
        if (typeof t == "object") {
          return this._initArray(t, e, r);
        }
        if (e === "hex") {
          e = 16;
        }
        i(e === (e | 0) && e >= 2 && e <= 36);
        var n = 0;
        if ((t = t.toString().replace(/\s+/g, ""))[0] === "-") {
          n++;
        }
        if (e === 16) {
          this._parseHex(t, n);
        } else {
          this._parseBase(t, e, n);
        }
        if (t[0] === "-") {
          this.negative = 1;
        }
        this.strip();
        if (r === "le") {
          this._initArray(this.toArray(), e, r);
        }
      };
      f.prototype._initNumber = function (t, e, r) {
        if (t < 0) {
          this.negative = 1;
          t = -t;
        }
        if (t < 67108864) {
          this.words = [t & 67108863];
          this.length = 1;
        } else if (t < 4503599627370496) {
          this.words = [t & 67108863, t / 67108864 & 67108863];
          this.length = 2;
        } else {
          i(t < 9007199254740992);
          this.words = [t & 67108863, t / 67108864 & 67108863, 1];
          this.length = 3;
        }
        if (r === "le") {
          this._initArray(this.toArray(), e, r);
        }
      };
      f.prototype._initArray = function (t, e, r) {
        i(typeof t.length == "number");
        if (t.length <= 0) {
          this.words = [0];
          this.length = 1;
          return this;
        }
        this.length = Math.ceil(t.length / 3);
        this.words = Array(this.length);
        var n;
        var f;
        for (var a = 0; a < this.length; a++) {
          this.words[a] = 0;
        }
        var o = 0;
        if (r === "be") {
          a = t.length - 1;
          n = 0;
          for (; a >= 0; a -= 3) {
            f = t[a] | t[a - 1] << 8 | t[a - 2] << 16;
            this.words[n] |= f << o & 67108863;
            this.words[n + 1] = f >>> 26 - o & 67108863;
            if ((o += 24) >= 26) {
              o -= 26;
              n++;
            }
          }
        } else if (r === "le") {
          a = 0;
          n = 0;
          for (; a < t.length; a += 3) {
            f = t[a] | t[a + 1] << 8 | t[a + 2] << 16;
            this.words[n] |= f << o & 67108863;
            this.words[n + 1] = f >>> 26 - o & 67108863;
            if ((o += 24) >= 26) {
              o -= 26;
              n++;
            }
          }
        }
        return this.strip();
      };
      f.prototype._parseHex = function (t, e) {
        this.length = Math.ceil((t.length - e) / 6);
        this.words = Array(this.length);
        var r;
        var i;
        for (var n = 0; n < this.length; n++) {
          this.words[n] = 0;
        }
        var f = 0;
        n = t.length - 6;
        r = 0;
        for (; n >= e; n -= 6) {
          i = a(t, n, n + 6);
          this.words[r] |= i << f & 67108863;
          this.words[r + 1] |= i >>> 26 - f & 4194303;
          if ((f += 24) >= 26) {
            f -= 26;
            r++;
          }
        }
        if (n + 6 !== e) {
          i = a(t, e, n + 6);
          this.words[r] |= i << f & 67108863;
          this.words[r + 1] |= i >>> 26 - f & 4194303;
        }
        this.strip();
      };
      f.prototype._parseBase = function (t, e, r) {
        this.words = [0];
        this.length = 1;
        var i = 0;
        for (var n = 1; n <= 67108863; n *= e) {
          i++;
        }
        i--;
        n = n / e | 0;
        var f = t.length - r;
        var a = f % i;
        for (var s = Math.min(f, f - a) + r, h = 0, c = r; c < s; c += i) {
          h = o(t, c, c + i, e);
          this.imuln(n);
          if (this.words[0] + h < 67108864) {
            this.words[0] += h;
          } else {
            this._iaddn(h);
          }
        }
        if (a !== 0) {
          var d = 1;
          h = o(t, c, t.length, e);
          c = 0;
          for (; c < a; c++) {
            d *= e;
          }
          this.imuln(d);
          if (this.words[0] + h < 67108864) {
            this.words[0] += h;
          } else {
            this._iaddn(h);
          }
        }
      };
      f.prototype.copy = function (t) {
        t.words = Array(this.length);
        for (var e = 0; e < this.length; e++) {
          t.words[e] = this.words[e];
        }
        t.length = this.length;
        t.negative = this.negative;
        t.red = this.red;
      };
      f.prototype.clone = function () {
        var t = new f(null);
        this.copy(t);
        return t;
      };
      f.prototype._expand = function (t) {
        while (this.length < t) {
          this.words[this.length++] = 0;
        }
        return this;
      };
      f.prototype.strip = function () {
        while (this.length > 1 && this.words[this.length - 1] === 0) {
          this.length--;
        }
        return this._normSign();
      };
      f.prototype._normSign = function () {
        if (this.length === 1 && this.words[0] === 0) {
          this.negative = 0;
        }
        return this;
      };
      f.prototype.inspect = function () {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      };
      var s;
      var h = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"];
      var c = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
      var d = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
      function u(t, e, r) {
        r.negative = e.negative ^ t.negative;
        var i = t.length + e.length | 0;
        r.length = i;
        i = i - 1 | 0;
        var n = t.words[0] | 0;
        var f = e.words[0] | 0;
        var a = n * f;
        var o = a & 67108863;
        var s = a / 67108864 | 0;
        r.words[0] = o;
        for (var h = 1; h < i; h++) {
          var c = s >>> 26;
          var d = s & 67108863;
          for (var u = Math.min(h, e.length - 1), l = Math.max(0, h - t.length + 1); l <= u; l++) {
            var b = h - l | 0;
            c += (a = (n = t.words[b] | 0) * (f = e.words[l] | 0) + d) / 67108864 | 0;
            d = a & 67108863;
          }
          r.words[h] = d | 0;
          s = c | 0;
        }
        if (s !== 0) {
          r.words[h] = s | 0;
        } else {
          r.length--;
        }
        return r.strip();
      }
      f.prototype.toString = function (t, e) {
        e = e | 0 || 1;
        if ((t = t || 10) === 16 || t === "hex") {
          var r = "";
          var n = 0;
          var f = 0;
          for (var a = 0; a < this.length; a++) {
            var o = this.words[a];
            var s = ((o << n | f) & 16777215).toString(16);
            r = (f = o >>> 24 - n & 16777215) != 0 || a !== this.length - 1 ? h[6 - s.length] + s + r : s + r;
            if ((n += 2) >= 26) {
              n -= 26;
              a--;
            }
          }
          for (f !== 0 && (r = f.toString(16) + r); r.length % e != 0;) {
            r = "0" + r;
          }
          if (this.negative !== 0) {
            r = "-" + r;
          }
          return r;
        }
        if (t === (t | 0) && t >= 2 && t <= 36) {
          var u = c[t];
          var l = d[t];
          r = "";
          var b = this.clone();
          for (b.negative = 0; !b.isZero();) {
            var p = b.modn(l).toString(t);
            r = (b = b.idivn(l)).isZero() ? p + r : h[u - p.length] + p + r;
          }
          for (this.isZero() && (r = "0" + r); r.length % e != 0;) {
            r = "0" + r;
          }
          if (this.negative !== 0) {
            r = "-" + r;
          }
          return r;
        }
        i(false, "Base should be between 2 and 36");
      };
      f.prototype.toNumber = function () {
        var t = this.words[0];
        if (this.length === 2) {
          t += this.words[1] * 67108864;
        } else if (this.length === 3 && this.words[2] === 1) {
          t += 4503599627370496 + this.words[1] * 67108864;
        } else if (this.length > 2) {
          i(false, "Number can only safely store up to 53 bits");
        }
        if (this.negative !== 0) {
          return -t;
        } else {
          return t;
        }
      };
      f.prototype.toJSON = function () {
        return this.toString(16);
      };
      f.prototype.toBuffer = function (t, e) {
        i(s !== undefined);
        return this.toArrayLike(s, t, e);
      };
      f.prototype.toArray = function (t, e) {
        return this.toArrayLike(Array, t, e);
      };
      f.prototype.toArrayLike = function (t, e, r) {
        var n;
        var f;
        var a = this.byteLength();
        var o = r || Math.max(1, a);
        i(a <= o, "byte array longer than desired length");
        i(o > 0, "Requested array length <= 0");
        this.strip();
        var s = new t(o);
        var h = this.clone();
        if (e === "le") {
          for (f = 0; !h.isZero(); f++) {
            n = h.andln(255);
            h.iushrn(8);
            s[f] = n;
          }
          for (; f < o; f++) {
            s[f] = 0;
          }
        } else {
          for (f = 0; f < o - a; f++) {
            s[f] = 0;
          }
          for (f = 0; !h.isZero(); f++) {
            n = h.andln(255);
            h.iushrn(8);
            s[o - f - 1] = n;
          }
        }
        return s;
      };
      if (Math.clz32) {
        f.prototype._countBits = function (t) {
          return 32 - Math.clz32(t);
        };
      } else {
        f.prototype._countBits = function (t) {
          var e = t;
          var r = 0;
          if (e >= 4096) {
            r += 13;
            e >>>= 13;
          }
          if (e >= 64) {
            r += 7;
            e >>>= 7;
          }
          if (e >= 8) {
            r += 4;
            e >>>= 4;
          }
          if (e >= 2) {
            r += 2;
            e >>>= 2;
          }
          return r + e;
        };
      }
      f.prototype._zeroBits = function (t) {
        if (t === 0) {
          return 26;
        }
        var e = t;
        var r = 0;
        if ((e & 8191) == 0) {
          r += 13;
          e >>>= 13;
        }
        if ((e & 127) == 0) {
          r += 7;
          e >>>= 7;
        }
        if ((e & 15) == 0) {
          r += 4;
          e >>>= 4;
        }
        if ((e & 3) == 0) {
          r += 2;
          e >>>= 2;
        }
        if ((e & 1) == 0) {
          r++;
        }
        return r;
      };
      f.prototype.bitLength = function () {
        var t = this.words[this.length - 1];
        var e = this._countBits(t);
        return (this.length - 1) * 26 + e;
      };
      f.prototype.zeroBits = function () {
        if (this.isZero()) {
          return 0;
        }
        var t = 0;
        for (var e = 0; e < this.length; e++) {
          var r = this._zeroBits(this.words[e]);
          t += r;
          if (r !== 26) {
            break;
          }
        }
        return t;
      };
      f.prototype.byteLength = function () {
        return Math.ceil(this.bitLength() / 8);
      };
      f.prototype.toTwos = function (t) {
        if (this.negative !== 0) {
          return this.abs().inotn(t).iaddn(1);
        } else {
          return this.clone();
        }
      };
      f.prototype.fromTwos = function (t) {
        if (this.testn(t - 1)) {
          return this.notn(t).iaddn(1).ineg();
        } else {
          return this.clone();
        }
      };
      f.prototype.isNeg = function () {
        return this.negative !== 0;
      };
      f.prototype.neg = function () {
        return this.clone().ineg();
      };
      f.prototype.ineg = function () {
        if (!this.isZero()) {
          this.negative ^= 1;
        }
        return this;
      };
      f.prototype.iuor = function (t) {
        while (this.length < t.length) {
          this.words[this.length++] = 0;
        }
        for (var e = 0; e < t.length; e++) {
          this.words[e] = this.words[e] | t.words[e];
        }
        return this.strip();
      };
      f.prototype.ior = function (t) {
        i((this.negative | t.negative) == 0);
        return this.iuor(t);
      };
      f.prototype.or = function (t) {
        if (this.length > t.length) {
          return this.clone().ior(t);
        } else {
          return t.clone().ior(this);
        }
      };
      f.prototype.uor = function (t) {
        if (this.length > t.length) {
          return this.clone().iuor(t);
        } else {
          return t.clone().iuor(this);
        }
      };
      f.prototype.iuand = function (t) {
        var e;
        e = this.length > t.length ? t : this;
        for (var r = 0; r < e.length; r++) {
          this.words[r] = this.words[r] & t.words[r];
        }
        this.length = e.length;
        return this.strip();
      };
      f.prototype.iand = function (t) {
        i((this.negative | t.negative) == 0);
        return this.iuand(t);
      };
      f.prototype.and = function (t) {
        if (this.length > t.length) {
          return this.clone().iand(t);
        } else {
          return t.clone().iand(this);
        }
      };
      f.prototype.uand = function (t) {
        if (this.length > t.length) {
          return this.clone().iuand(t);
        } else {
          return t.clone().iuand(this);
        }
      };
      f.prototype.iuxor = function (t) {
        if (this.length > t.length) {
          e = this;
          r = t;
        } else {
          e = t;
          r = this;
        }
        var e;
        for (var r, i = 0; i < r.length; i++) {
          this.words[i] = e.words[i] ^ r.words[i];
        }
        if (this !== e) {
          for (; i < e.length; i++) {
            this.words[i] = e.words[i];
          }
        }
        this.length = e.length;
        return this.strip();
      };
      f.prototype.ixor = function (t) {
        i((this.negative | t.negative) == 0);
        return this.iuxor(t);
      };
      f.prototype.xor = function (t) {
        if (this.length > t.length) {
          return this.clone().ixor(t);
        } else {
          return t.clone().ixor(this);
        }
      };
      f.prototype.uxor = function (t) {
        if (this.length > t.length) {
          return this.clone().iuxor(t);
        } else {
          return t.clone().iuxor(this);
        }
      };
      f.prototype.inotn = function (t) {
        i(typeof t == "number" && t >= 0);
        var e = Math.ceil(t / 26) | 0;
        var r = t % 26;
        this._expand(e);
        if (r > 0) {
          e--;
        }
        for (var n = 0; n < e; n++) {
          this.words[n] = ~this.words[n] & 67108863;
        }
        if (r > 0) {
          this.words[n] = ~this.words[n] & 67108863 >> 26 - r;
        }
        return this.strip();
      };
      f.prototype.notn = function (t) {
        return this.clone().inotn(t);
      };
      f.prototype.setn = function (t, e) {
        i(typeof t == "number" && t >= 0);
        var r = t / 26 | 0;
        var n = t % 26;
        this._expand(r + 1);
        if (e) {
          this.words[r] = this.words[r] | 1 << n;
        } else {
          this.words[r] = this.words[r] & ~(1 << n);
        }
        return this.strip();
      };
      f.prototype.iadd = function (t) {
        if (this.negative !== 0 && t.negative === 0) {
          this.negative = 0;
          e = this.isub(t);
          this.negative ^= 1;
          return this._normSign();
        }
        if (this.negative === 0 && t.negative !== 0) {
          t.negative = 0;
          e = this.isub(t);
          t.negative = 1;
          return e._normSign();
        }
        if (this.length > t.length) {
          r = this;
          i = t;
        } else {
          r = t;
          i = this;
        }
        var e;
        var r;
        for (var i, n = 0, f = 0; f < i.length; f++) {
          e = (r.words[f] | 0) + (i.words[f] | 0) + n;
          this.words[f] = e & 67108863;
          n = e >>> 26;
        }
        for (; n !== 0 && f < r.length; f++) {
          e = (r.words[f] | 0) + n;
          this.words[f] = e & 67108863;
          n = e >>> 26;
        }
        this.length = r.length;
        if (n !== 0) {
          this.words[this.length] = n;
          this.length++;
        } else if (r !== this) {
          for (; f < r.length; f++) {
            this.words[f] = r.words[f];
          }
        }
        return this;
      };
      f.prototype.add = function (t) {
        var e;
        if (t.negative !== 0 && this.negative === 0) {
          t.negative = 0;
          e = this.sub(t);
          t.negative ^= 1;
          return e;
        } else if (t.negative === 0 && this.negative !== 0) {
          this.negative = 0;
          e = t.sub(this);
          this.negative = 1;
          return e;
        } else if (this.length > t.length) {
          return this.clone().iadd(t);
        } else {
          return t.clone().iadd(this);
        }
      };
      f.prototype.isub = function (t) {
        if (t.negative !== 0) {
          t.negative = 0;
          var e;
          var r;
          var i = this.iadd(t);
          t.negative = 1;
          return i._normSign();
        }
        if (this.negative !== 0) {
          this.negative = 0;
          this.iadd(t);
          this.negative = 1;
          return this._normSign();
        }
        var n = this.cmp(t);
        if (n === 0) {
          this.negative = 0;
          this.length = 1;
          this.words[0] = 0;
          return this;
        }
        if (n > 0) {
          e = this;
          r = t;
        } else {
          e = t;
          r = this;
        }
        var f = 0;
        for (var a = 0; a < r.length; a++) {
          f = (i = (e.words[a] | 0) - (r.words[a] | 0) + f) >> 26;
          this.words[a] = i & 67108863;
        }
        for (; f !== 0 && a < e.length; a++) {
          f = (i = (e.words[a] | 0) + f) >> 26;
          this.words[a] = i & 67108863;
        }
        if (f === 0 && a < e.length && e !== this) {
          for (; a < e.length; a++) {
            this.words[a] = e.words[a];
          }
        }
        this.length = Math.max(this.length, a);
        if (e !== this) {
          this.negative = 1;
        }
        return this.strip();
      };
      f.prototype.sub = function (t) {
        return this.clone().isub(t);
      };
      function l(t, e, r) {
        var i;
        var n;
        var f;
        var a = t.words;
        var o = e.words;
        var s = r.words;
        var h = 0;
        var c = a[0] | 0;
        var d = c & 8191;
        var u = c >>> 13;
        var l = a[1] | 0;
        var b = l & 8191;
        var p = l >>> 13;
        var m = a[2] | 0;
        var v = m & 8191;
        var y = m >>> 13;
        var g = a[3] | 0;
        var _ = g & 8191;
        var w = g >>> 13;
        var x = a[4] | 0;
        var M = x & 8191;
        var S = x >>> 13;
        var k = a[5] | 0;
        var E = k & 8191;
        var A = k >>> 13;
        var R = a[6] | 0;
        var I = R & 8191;
        var B = R >>> 13;
        var P = a[7] | 0;
        var T = P & 8191;
        var C = P >>> 13;
        var j = a[8] | 0;
        var O = j & 8191;
        var D = j >>> 13;
        var N = a[9] | 0;
        var q = N & 8191;
        var L = N >>> 13;
        var z = o[0] | 0;
        var U = z & 8191;
        var K = z >>> 13;
        var H = o[1] | 0;
        var F = H & 8191;
        var V = H >>> 13;
        var W = o[2] | 0;
        var Z = W & 8191;
        var X = W >>> 13;
        var G = o[3] | 0;
        var J = G & 8191;
        var Y = G >>> 13;
        var $ = o[4] | 0;
        var Q = $ & 8191;
        var tt = $ >>> 13;
        var te = o[5] | 0;
        var tr = te & 8191;
        var ti = te >>> 13;
        var tn = o[6] | 0;
        var tf = tn & 8191;
        var ta = tn >>> 13;
        var to = o[7] | 0;
        var ts = to & 8191;
        var th = to >>> 13;
        var tc = o[8] | 0;
        var td = tc & 8191;
        var tu = tc >>> 13;
        var tl = o[9] | 0;
        var tb = tl & 8191;
        var tp = tl >>> 13;
        r.negative = t.negative ^ e.negative;
        r.length = 19;
        i = Math.imul(d, U);
        var tm = (h + i | 0) + (((n = (n = Math.imul(d, K)) + Math.imul(u, U) | 0) & 8191) << 13) | 0;
        h = ((f = Math.imul(u, K)) + (n >>> 13) | 0) + (tm >>> 26) | 0;
        tm &= 67108863;
        i = Math.imul(b, U);
        n = (n = Math.imul(b, K)) + Math.imul(p, U) | 0;
        f = Math.imul(p, K);
        i = i + Math.imul(d, F) | 0;
        var tv = (h + i | 0) + (((n = (n = n + Math.imul(d, V) | 0) + Math.imul(u, F) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(u, V) | 0) + (n >>> 13) | 0) + (tv >>> 26) | 0;
        tv &= 67108863;
        i = Math.imul(v, U);
        n = (n = Math.imul(v, K)) + Math.imul(y, U) | 0;
        f = Math.imul(y, K);
        i = i + Math.imul(b, F) | 0;
        n = (n = n + Math.imul(b, V) | 0) + Math.imul(p, F) | 0;
        f = f + Math.imul(p, V) | 0;
        i = i + Math.imul(d, Z) | 0;
        var ty = (h + i | 0) + (((n = (n = n + Math.imul(d, X) | 0) + Math.imul(u, Z) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(u, X) | 0) + (n >>> 13) | 0) + (ty >>> 26) | 0;
        ty &= 67108863;
        i = Math.imul(_, U);
        n = (n = Math.imul(_, K)) + Math.imul(w, U) | 0;
        f = Math.imul(w, K);
        i = i + Math.imul(v, F) | 0;
        n = (n = n + Math.imul(v, V) | 0) + Math.imul(y, F) | 0;
        f = f + Math.imul(y, V) | 0;
        i = i + Math.imul(b, Z) | 0;
        n = (n = n + Math.imul(b, X) | 0) + Math.imul(p, Z) | 0;
        f = f + Math.imul(p, X) | 0;
        i = i + Math.imul(d, J) | 0;
        var tg = (h + i | 0) + (((n = (n = n + Math.imul(d, Y) | 0) + Math.imul(u, J) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(u, Y) | 0) + (n >>> 13) | 0) + (tg >>> 26) | 0;
        tg &= 67108863;
        i = Math.imul(M, U);
        n = (n = Math.imul(M, K)) + Math.imul(S, U) | 0;
        f = Math.imul(S, K);
        i = i + Math.imul(_, F) | 0;
        n = (n = n + Math.imul(_, V) | 0) + Math.imul(w, F) | 0;
        f = f + Math.imul(w, V) | 0;
        i = i + Math.imul(v, Z) | 0;
        n = (n = n + Math.imul(v, X) | 0) + Math.imul(y, Z) | 0;
        f = f + Math.imul(y, X) | 0;
        i = i + Math.imul(b, J) | 0;
        n = (n = n + Math.imul(b, Y) | 0) + Math.imul(p, J) | 0;
        f = f + Math.imul(p, Y) | 0;
        i = i + Math.imul(d, Q) | 0;
        var t_ = (h + i | 0) + (((n = (n = n + Math.imul(d, tt) | 0) + Math.imul(u, Q) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(u, tt) | 0) + (n >>> 13) | 0) + (t_ >>> 26) | 0;
        t_ &= 67108863;
        i = Math.imul(E, U);
        n = (n = Math.imul(E, K)) + Math.imul(A, U) | 0;
        f = Math.imul(A, K);
        i = i + Math.imul(M, F) | 0;
        n = (n = n + Math.imul(M, V) | 0) + Math.imul(S, F) | 0;
        f = f + Math.imul(S, V) | 0;
        i = i + Math.imul(_, Z) | 0;
        n = (n = n + Math.imul(_, X) | 0) + Math.imul(w, Z) | 0;
        f = f + Math.imul(w, X) | 0;
        i = i + Math.imul(v, J) | 0;
        n = (n = n + Math.imul(v, Y) | 0) + Math.imul(y, J) | 0;
        f = f + Math.imul(y, Y) | 0;
        i = i + Math.imul(b, Q) | 0;
        n = (n = n + Math.imul(b, tt) | 0) + Math.imul(p, Q) | 0;
        f = f + Math.imul(p, tt) | 0;
        i = i + Math.imul(d, tr) | 0;
        var tw = (h + i | 0) + (((n = (n = n + Math.imul(d, ti) | 0) + Math.imul(u, tr) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(u, ti) | 0) + (n >>> 13) | 0) + (tw >>> 26) | 0;
        tw &= 67108863;
        i = Math.imul(I, U);
        n = (n = Math.imul(I, K)) + Math.imul(B, U) | 0;
        f = Math.imul(B, K);
        i = i + Math.imul(E, F) | 0;
        n = (n = n + Math.imul(E, V) | 0) + Math.imul(A, F) | 0;
        f = f + Math.imul(A, V) | 0;
        i = i + Math.imul(M, Z) | 0;
        n = (n = n + Math.imul(M, X) | 0) + Math.imul(S, Z) | 0;
        f = f + Math.imul(S, X) | 0;
        i = i + Math.imul(_, J) | 0;
        n = (n = n + Math.imul(_, Y) | 0) + Math.imul(w, J) | 0;
        f = f + Math.imul(w, Y) | 0;
        i = i + Math.imul(v, Q) | 0;
        n = (n = n + Math.imul(v, tt) | 0) + Math.imul(y, Q) | 0;
        f = f + Math.imul(y, tt) | 0;
        i = i + Math.imul(b, tr) | 0;
        n = (n = n + Math.imul(b, ti) | 0) + Math.imul(p, tr) | 0;
        f = f + Math.imul(p, ti) | 0;
        i = i + Math.imul(d, tf) | 0;
        var tx = (h + i | 0) + (((n = (n = n + Math.imul(d, ta) | 0) + Math.imul(u, tf) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(u, ta) | 0) + (n >>> 13) | 0) + (tx >>> 26) | 0;
        tx &= 67108863;
        i = Math.imul(T, U);
        n = (n = Math.imul(T, K)) + Math.imul(C, U) | 0;
        f = Math.imul(C, K);
        i = i + Math.imul(I, F) | 0;
        n = (n = n + Math.imul(I, V) | 0) + Math.imul(B, F) | 0;
        f = f + Math.imul(B, V) | 0;
        i = i + Math.imul(E, Z) | 0;
        n = (n = n + Math.imul(E, X) | 0) + Math.imul(A, Z) | 0;
        f = f + Math.imul(A, X) | 0;
        i = i + Math.imul(M, J) | 0;
        n = (n = n + Math.imul(M, Y) | 0) + Math.imul(S, J) | 0;
        f = f + Math.imul(S, Y) | 0;
        i = i + Math.imul(_, Q) | 0;
        n = (n = n + Math.imul(_, tt) | 0) + Math.imul(w, Q) | 0;
        f = f + Math.imul(w, tt) | 0;
        i = i + Math.imul(v, tr) | 0;
        n = (n = n + Math.imul(v, ti) | 0) + Math.imul(y, tr) | 0;
        f = f + Math.imul(y, ti) | 0;
        i = i + Math.imul(b, tf) | 0;
        n = (n = n + Math.imul(b, ta) | 0) + Math.imul(p, tf) | 0;
        f = f + Math.imul(p, ta) | 0;
        i = i + Math.imul(d, ts) | 0;
        var tM = (h + i | 0) + (((n = (n = n + Math.imul(d, th) | 0) + Math.imul(u, ts) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(u, th) | 0) + (n >>> 13) | 0) + (tM >>> 26) | 0;
        tM &= 67108863;
        i = Math.imul(O, U);
        n = (n = Math.imul(O, K)) + Math.imul(D, U) | 0;
        f = Math.imul(D, K);
        i = i + Math.imul(T, F) | 0;
        n = (n = n + Math.imul(T, V) | 0) + Math.imul(C, F) | 0;
        f = f + Math.imul(C, V) | 0;
        i = i + Math.imul(I, Z) | 0;
        n = (n = n + Math.imul(I, X) | 0) + Math.imul(B, Z) | 0;
        f = f + Math.imul(B, X) | 0;
        i = i + Math.imul(E, J) | 0;
        n = (n = n + Math.imul(E, Y) | 0) + Math.imul(A, J) | 0;
        f = f + Math.imul(A, Y) | 0;
        i = i + Math.imul(M, Q) | 0;
        n = (n = n + Math.imul(M, tt) | 0) + Math.imul(S, Q) | 0;
        f = f + Math.imul(S, tt) | 0;
        i = i + Math.imul(_, tr) | 0;
        n = (n = n + Math.imul(_, ti) | 0) + Math.imul(w, tr) | 0;
        f = f + Math.imul(w, ti) | 0;
        i = i + Math.imul(v, tf) | 0;
        n = (n = n + Math.imul(v, ta) | 0) + Math.imul(y, tf) | 0;
        f = f + Math.imul(y, ta) | 0;
        i = i + Math.imul(b, ts) | 0;
        n = (n = n + Math.imul(b, th) | 0) + Math.imul(p, ts) | 0;
        f = f + Math.imul(p, th) | 0;
        i = i + Math.imul(d, td) | 0;
        var tS = (h + i | 0) + (((n = (n = n + Math.imul(d, tu) | 0) + Math.imul(u, td) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(u, tu) | 0) + (n >>> 13) | 0) + (tS >>> 26) | 0;
        tS &= 67108863;
        i = Math.imul(q, U);
        n = (n = Math.imul(q, K)) + Math.imul(L, U) | 0;
        f = Math.imul(L, K);
        i = i + Math.imul(O, F) | 0;
        n = (n = n + Math.imul(O, V) | 0) + Math.imul(D, F) | 0;
        f = f + Math.imul(D, V) | 0;
        i = i + Math.imul(T, Z) | 0;
        n = (n = n + Math.imul(T, X) | 0) + Math.imul(C, Z) | 0;
        f = f + Math.imul(C, X) | 0;
        i = i + Math.imul(I, J) | 0;
        n = (n = n + Math.imul(I, Y) | 0) + Math.imul(B, J) | 0;
        f = f + Math.imul(B, Y) | 0;
        i = i + Math.imul(E, Q) | 0;
        n = (n = n + Math.imul(E, tt) | 0) + Math.imul(A, Q) | 0;
        f = f + Math.imul(A, tt) | 0;
        i = i + Math.imul(M, tr) | 0;
        n = (n = n + Math.imul(M, ti) | 0) + Math.imul(S, tr) | 0;
        f = f + Math.imul(S, ti) | 0;
        i = i + Math.imul(_, tf) | 0;
        n = (n = n + Math.imul(_, ta) | 0) + Math.imul(w, tf) | 0;
        f = f + Math.imul(w, ta) | 0;
        i = i + Math.imul(v, ts) | 0;
        n = (n = n + Math.imul(v, th) | 0) + Math.imul(y, ts) | 0;
        f = f + Math.imul(y, th) | 0;
        i = i + Math.imul(b, td) | 0;
        n = (n = n + Math.imul(b, tu) | 0) + Math.imul(p, td) | 0;
        f = f + Math.imul(p, tu) | 0;
        i = i + Math.imul(d, tb) | 0;
        var tk = (h + i | 0) + (((n = (n = n + Math.imul(d, tp) | 0) + Math.imul(u, tb) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(u, tp) | 0) + (n >>> 13) | 0) + (tk >>> 26) | 0;
        tk &= 67108863;
        i = Math.imul(q, F);
        n = (n = Math.imul(q, V)) + Math.imul(L, F) | 0;
        f = Math.imul(L, V);
        i = i + Math.imul(O, Z) | 0;
        n = (n = n + Math.imul(O, X) | 0) + Math.imul(D, Z) | 0;
        f = f + Math.imul(D, X) | 0;
        i = i + Math.imul(T, J) | 0;
        n = (n = n + Math.imul(T, Y) | 0) + Math.imul(C, J) | 0;
        f = f + Math.imul(C, Y) | 0;
        i = i + Math.imul(I, Q) | 0;
        n = (n = n + Math.imul(I, tt) | 0) + Math.imul(B, Q) | 0;
        f = f + Math.imul(B, tt) | 0;
        i = i + Math.imul(E, tr) | 0;
        n = (n = n + Math.imul(E, ti) | 0) + Math.imul(A, tr) | 0;
        f = f + Math.imul(A, ti) | 0;
        i = i + Math.imul(M, tf) | 0;
        n = (n = n + Math.imul(M, ta) | 0) + Math.imul(S, tf) | 0;
        f = f + Math.imul(S, ta) | 0;
        i = i + Math.imul(_, ts) | 0;
        n = (n = n + Math.imul(_, th) | 0) + Math.imul(w, ts) | 0;
        f = f + Math.imul(w, th) | 0;
        i = i + Math.imul(v, td) | 0;
        n = (n = n + Math.imul(v, tu) | 0) + Math.imul(y, td) | 0;
        f = f + Math.imul(y, tu) | 0;
        i = i + Math.imul(b, tb) | 0;
        var tE = (h + i | 0) + (((n = (n = n + Math.imul(b, tp) | 0) + Math.imul(p, tb) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(p, tp) | 0) + (n >>> 13) | 0) + (tE >>> 26) | 0;
        tE &= 67108863;
        i = Math.imul(q, Z);
        n = (n = Math.imul(q, X)) + Math.imul(L, Z) | 0;
        f = Math.imul(L, X);
        i = i + Math.imul(O, J) | 0;
        n = (n = n + Math.imul(O, Y) | 0) + Math.imul(D, J) | 0;
        f = f + Math.imul(D, Y) | 0;
        i = i + Math.imul(T, Q) | 0;
        n = (n = n + Math.imul(T, tt) | 0) + Math.imul(C, Q) | 0;
        f = f + Math.imul(C, tt) | 0;
        i = i + Math.imul(I, tr) | 0;
        n = (n = n + Math.imul(I, ti) | 0) + Math.imul(B, tr) | 0;
        f = f + Math.imul(B, ti) | 0;
        i = i + Math.imul(E, tf) | 0;
        n = (n = n + Math.imul(E, ta) | 0) + Math.imul(A, tf) | 0;
        f = f + Math.imul(A, ta) | 0;
        i = i + Math.imul(M, ts) | 0;
        n = (n = n + Math.imul(M, th) | 0) + Math.imul(S, ts) | 0;
        f = f + Math.imul(S, th) | 0;
        i = i + Math.imul(_, td) | 0;
        n = (n = n + Math.imul(_, tu) | 0) + Math.imul(w, td) | 0;
        f = f + Math.imul(w, tu) | 0;
        i = i + Math.imul(v, tb) | 0;
        var tA = (h + i | 0) + (((n = (n = n + Math.imul(v, tp) | 0) + Math.imul(y, tb) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(y, tp) | 0) + (n >>> 13) | 0) + (tA >>> 26) | 0;
        tA &= 67108863;
        i = Math.imul(q, J);
        n = (n = Math.imul(q, Y)) + Math.imul(L, J) | 0;
        f = Math.imul(L, Y);
        i = i + Math.imul(O, Q) | 0;
        n = (n = n + Math.imul(O, tt) | 0) + Math.imul(D, Q) | 0;
        f = f + Math.imul(D, tt) | 0;
        i = i + Math.imul(T, tr) | 0;
        n = (n = n + Math.imul(T, ti) | 0) + Math.imul(C, tr) | 0;
        f = f + Math.imul(C, ti) | 0;
        i = i + Math.imul(I, tf) | 0;
        n = (n = n + Math.imul(I, ta) | 0) + Math.imul(B, tf) | 0;
        f = f + Math.imul(B, ta) | 0;
        i = i + Math.imul(E, ts) | 0;
        n = (n = n + Math.imul(E, th) | 0) + Math.imul(A, ts) | 0;
        f = f + Math.imul(A, th) | 0;
        i = i + Math.imul(M, td) | 0;
        n = (n = n + Math.imul(M, tu) | 0) + Math.imul(S, td) | 0;
        f = f + Math.imul(S, tu) | 0;
        i = i + Math.imul(_, tb) | 0;
        var tR = (h + i | 0) + (((n = (n = n + Math.imul(_, tp) | 0) + Math.imul(w, tb) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(w, tp) | 0) + (n >>> 13) | 0) + (tR >>> 26) | 0;
        tR &= 67108863;
        i = Math.imul(q, Q);
        n = (n = Math.imul(q, tt)) + Math.imul(L, Q) | 0;
        f = Math.imul(L, tt);
        i = i + Math.imul(O, tr) | 0;
        n = (n = n + Math.imul(O, ti) | 0) + Math.imul(D, tr) | 0;
        f = f + Math.imul(D, ti) | 0;
        i = i + Math.imul(T, tf) | 0;
        n = (n = n + Math.imul(T, ta) | 0) + Math.imul(C, tf) | 0;
        f = f + Math.imul(C, ta) | 0;
        i = i + Math.imul(I, ts) | 0;
        n = (n = n + Math.imul(I, th) | 0) + Math.imul(B, ts) | 0;
        f = f + Math.imul(B, th) | 0;
        i = i + Math.imul(E, td) | 0;
        n = (n = n + Math.imul(E, tu) | 0) + Math.imul(A, td) | 0;
        f = f + Math.imul(A, tu) | 0;
        i = i + Math.imul(M, tb) | 0;
        var tI = (h + i | 0) + (((n = (n = n + Math.imul(M, tp) | 0) + Math.imul(S, tb) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(S, tp) | 0) + (n >>> 13) | 0) + (tI >>> 26) | 0;
        tI &= 67108863;
        i = Math.imul(q, tr);
        n = (n = Math.imul(q, ti)) + Math.imul(L, tr) | 0;
        f = Math.imul(L, ti);
        i = i + Math.imul(O, tf) | 0;
        n = (n = n + Math.imul(O, ta) | 0) + Math.imul(D, tf) | 0;
        f = f + Math.imul(D, ta) | 0;
        i = i + Math.imul(T, ts) | 0;
        n = (n = n + Math.imul(T, th) | 0) + Math.imul(C, ts) | 0;
        f = f + Math.imul(C, th) | 0;
        i = i + Math.imul(I, td) | 0;
        n = (n = n + Math.imul(I, tu) | 0) + Math.imul(B, td) | 0;
        f = f + Math.imul(B, tu) | 0;
        i = i + Math.imul(E, tb) | 0;
        var tB = (h + i | 0) + (((n = (n = n + Math.imul(E, tp) | 0) + Math.imul(A, tb) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(A, tp) | 0) + (n >>> 13) | 0) + (tB >>> 26) | 0;
        tB &= 67108863;
        i = Math.imul(q, tf);
        n = (n = Math.imul(q, ta)) + Math.imul(L, tf) | 0;
        f = Math.imul(L, ta);
        i = i + Math.imul(O, ts) | 0;
        n = (n = n + Math.imul(O, th) | 0) + Math.imul(D, ts) | 0;
        f = f + Math.imul(D, th) | 0;
        i = i + Math.imul(T, td) | 0;
        n = (n = n + Math.imul(T, tu) | 0) + Math.imul(C, td) | 0;
        f = f + Math.imul(C, tu) | 0;
        i = i + Math.imul(I, tb) | 0;
        var tP = (h + i | 0) + (((n = (n = n + Math.imul(I, tp) | 0) + Math.imul(B, tb) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(B, tp) | 0) + (n >>> 13) | 0) + (tP >>> 26) | 0;
        tP &= 67108863;
        i = Math.imul(q, ts);
        n = (n = Math.imul(q, th)) + Math.imul(L, ts) | 0;
        f = Math.imul(L, th);
        i = i + Math.imul(O, td) | 0;
        n = (n = n + Math.imul(O, tu) | 0) + Math.imul(D, td) | 0;
        f = f + Math.imul(D, tu) | 0;
        i = i + Math.imul(T, tb) | 0;
        var tT = (h + i | 0) + (((n = (n = n + Math.imul(T, tp) | 0) + Math.imul(C, tb) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(C, tp) | 0) + (n >>> 13) | 0) + (tT >>> 26) | 0;
        tT &= 67108863;
        i = Math.imul(q, td);
        n = (n = Math.imul(q, tu)) + Math.imul(L, td) | 0;
        f = Math.imul(L, tu);
        i = i + Math.imul(O, tb) | 0;
        var tC = (h + i | 0) + (((n = (n = n + Math.imul(O, tp) | 0) + Math.imul(D, tb) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(D, tp) | 0) + (n >>> 13) | 0) + (tC >>> 26) | 0;
        tC &= 67108863;
        i = Math.imul(q, tb);
        var tj = (h + i | 0) + (((n = (n = Math.imul(q, tp)) + Math.imul(L, tb) | 0) & 8191) << 13) | 0;
        h = ((f = Math.imul(L, tp)) + (n >>> 13) | 0) + (tj >>> 26) | 0;
        tj &= 67108863;
        s[0] = tm;
        s[1] = tv;
        s[2] = ty;
        s[3] = tg;
        s[4] = t_;
        s[5] = tw;
        s[6] = tx;
        s[7] = tM;
        s[8] = tS;
        s[9] = tk;
        s[10] = tE;
        s[11] = tA;
        s[12] = tR;
        s[13] = tI;
        s[14] = tB;
        s[15] = tP;
        s[16] = tT;
        s[17] = tC;
        s[18] = tj;
        if (h !== 0) {
          s[19] = h;
          r.length++;
        }
        return r;
      }
      function b(t, e, r) {
        return new p().mulp(t, e, r);
      }
      function p(t, e) {
        this.x = t;
        this.y = e;
      }
      if (!Math.imul) {
        l = u;
      }
      f.prototype.mulTo = function (t, e) {
        var r = this.length + t.length;
        if (this.length === 10 && t.length === 10) {
          return l(this, t, e);
        } else if (r < 63) {
          return u(this, t, e);
        } else if (r < 1024) {
          return function (t, e, r) {
            r.negative = e.negative ^ t.negative;
            r.length = t.length + e.length;
            var i = 0;
            var n = 0;
            for (var f = 0; f < r.length - 1; f++) {
              var a = n;
              n = 0;
              var o = i & 67108863;
              for (var s = Math.min(f, e.length - 1), h = Math.max(0, f - t.length + 1); h <= s; h++) {
                var c = f - h;
                var d = (t.words[c] | 0) * (e.words[h] | 0);
                var u = d & 67108863;
                a = a + (d / 67108864 | 0) | 0;
                o = (u = u + o | 0) & 67108863;
                n += (a = a + (u >>> 26) | 0) >>> 26;
                a &= 67108863;
              }
              r.words[f] = o;
              i = a;
              a = n;
            }
            if (i !== 0) {
              r.words[f] = i;
            } else {
              r.length--;
            }
            return r.strip();
          }(this, t, e);
        } else {
          return b(this, t, e);
        }
      };
      p.prototype.makeRBT = function (t) {
        var e = Array(t);
        var r = f.prototype._countBits(t) - 1;
        for (var i = 0; i < t; i++) {
          e[i] = this.revBin(i, r, t);
        }
        return e;
      };
      p.prototype.revBin = function (t, e, r) {
        if (t === 0 || t === r - 1) {
          return t;
        }
        var i = 0;
        for (var n = 0; n < e; n++) {
          i |= (t & 1) << e - n - 1;
          t >>= 1;
        }
        return i;
      };
      p.prototype.permute = function (t, e, r, i, n, f) {
        for (var a = 0; a < f; a++) {
          i[a] = e[t[a]];
          n[a] = r[t[a]];
        }
      };
      p.prototype.transform = function (t, e, r, i, n, f) {
        this.permute(f, t, e, r, i, n);
        for (var a = 1; a < n; a <<= 1) {
          for (var o = a << 1, s = Math.cos(Math.PI * 2 / o), h = Math.sin(Math.PI * 2 / o), c = 0; c < n; c += o) {
            var d = s;
            var u = h;
            for (var l = 0; l < a; l++) {
              var b = r[c + l];
              var p = i[c + l];
              var m = r[c + l + a];
              var v = i[c + l + a];
              var y = d * m - u * v;
              v = d * v + u * m;
              m = y;
              r[c + l] = b + m;
              i[c + l] = p + v;
              r[c + l + a] = b - m;
              i[c + l + a] = p - v;
              if (l !== o) {
                y = s * d - h * u;
                u = s * u + h * d;
                d = y;
              }
            }
          }
        }
      };
      p.prototype.guessLen13b = function (t, e) {
        var r = Math.max(e, t) | 1;
        var i = r & 1;
        var n = 0;
        for (r = r / 2 | 0; r; r >>>= 1) {
          n++;
        }
        return 1 << n + 1 + i;
      };
      p.prototype.conjugate = function (t, e, r) {
        if (!(r <= 1)) {
          for (var i = 0; i < r / 2; i++) {
            var n = t[i];
            t[i] = t[r - i - 1];
            t[r - i - 1] = n;
            n = e[i];
            e[i] = -e[r - i - 1];
            e[r - i - 1] = -n;
          }
        }
      };
      p.prototype.normalize13b = function (t, e) {
        var r = 0;
        for (var i = 0; i < e / 2; i++) {
          var n = Math.round(t[i * 2 + 1] / e) * 8192 + Math.round(t[i * 2] / e) + r;
          t[i] = n & 67108863;
          r = n < 67108864 ? 0 : n / 67108864 | 0;
        }
        return t;
      };
      p.prototype.convert13b = function (t, e, r, n) {
        var f = 0;
        for (var a = 0; a < e; a++) {
          f += t[a] | 0;
          r[a * 2] = f & 8191;
          f >>>= 13;
          r[a * 2 + 1] = f & 8191;
          f >>>= 13;
        }
        for (a = e * 2; a < n; ++a) {
          r[a] = 0;
        }
        i(f === 0);
        i((f & -8192) == 0);
      };
      p.prototype.stub = function (t) {
        var e = Array(t);
        for (var r = 0; r < t; r++) {
          e[r] = 0;
        }
        return e;
      };
      p.prototype.mulp = function (t, e, r) {
        var i = this.guessLen13b(t.length, e.length) * 2;
        var n = this.makeRBT(i);
        var f = this.stub(i);
        var a = Array(i);
        var o = Array(i);
        var s = Array(i);
        var h = Array(i);
        var c = Array(i);
        var d = Array(i);
        var u = r.words;
        u.length = i;
        this.convert13b(t.words, t.length, a, i);
        this.convert13b(e.words, e.length, h, i);
        this.transform(a, f, o, s, i, n);
        this.transform(h, f, c, d, i, n);
        for (var l = 0; l < i; l++) {
          var b = o[l] * c[l] - s[l] * d[l];
          s[l] = o[l] * d[l] + s[l] * c[l];
          o[l] = b;
        }
        this.conjugate(o, s, i);
        this.transform(o, s, u, f, i, n);
        this.conjugate(u, f, i);
        this.normalize13b(u, i);
        r.negative = t.negative ^ e.negative;
        r.length = t.length + e.length;
        return r.strip();
      };
      f.prototype.mul = function (t) {
        var e = new f(null);
        e.words = Array(this.length + t.length);
        return this.mulTo(t, e);
      };
      f.prototype.mulf = function (t) {
        var e = new f(null);
        e.words = Array(this.length + t.length);
        return b(this, t, e);
      };
      f.prototype.imul = function (t) {
        return this.clone().mulTo(t, this);
      };
      f.prototype.imuln = function (t) {
        i(typeof t == "number");
        i(t < 67108864);
        var e = 0;
        for (var r = 0; r < this.length; r++) {
          var n = (this.words[r] | 0) * t;
          var f = (n & 67108863) + (e & 67108863);
          e >>= 26;
          e += (n / 67108864 | 0) + (f >>> 26);
          this.words[r] = f & 67108863;
        }
        if (e !== 0) {
          this.words[r] = e;
          this.length++;
        }
        return this;
      };
      f.prototype.muln = function (t) {
        return this.clone().imuln(t);
      };
      f.prototype.sqr = function () {
        return this.mul(this);
      };
      f.prototype.isqr = function () {
        return this.imul(this.clone());
      };
      f.prototype.pow = function (t) {
        var e = function (t) {
          for (var e = Array(t.bitLength()), r = 0; r < e.length; r++) {
            var i = r / 26 | 0;
            var n = r % 26;
            e[r] = (t.words[i] & 1 << n) >>> n;
          }
          return e;
        }(t);
        if (e.length === 0) {
          return new f(1);
        }
        for (var r = this, i = 0; i < e.length && e[i] === 0; r = r.sqr()) {
          i++;
        }
        if (++i < e.length) {
          for (var n = r.sqr(); i < e.length; i++, n = n.sqr()) {
            if (e[i] !== 0) {
              r = r.mul(n);
            }
          }
        }
        return r;
      };
      f.prototype.iushln = function (t) {
        i(typeof t == "number" && t >= 0);
        var e;
        var r = t % 26;
        var n = (t - r) / 26;
        var f = 67108863 >>> 26 - r << 26 - r;
        if (r !== 0) {
          var a = 0;
          for (e = 0; e < this.length; e++) {
            var o = this.words[e] & f;
            var s = (this.words[e] | 0) - o << r;
            this.words[e] = s | a;
            a = o >>> 26 - r;
          }
          if (a) {
            this.words[e] = a;
            this.length++;
          }
        }
        if (n !== 0) {
          for (e = this.length - 1; e >= 0; e--) {
            this.words[e + n] = this.words[e];
          }
          for (e = 0; e < n; e++) {
            this.words[e] = 0;
          }
          this.length += n;
        }
        return this.strip();
      };
      f.prototype.ishln = function (t) {
        i(this.negative === 0);
        return this.iushln(t);
      };
      f.prototype.iushrn = function (t, e, r) {
        i(typeof t == "number" && t >= 0);
        var n = e ? (e - e % 26) / 26 : 0;
        var f = t % 26;
        var a = Math.min((t - f) / 26, this.length);
        var o = 67108863 >>> f << f ^ 67108863;
        n -= a;
        n = Math.max(0, n);
        if (r) {
          for (var s = 0; s < a; s++) {
            r.words[s] = this.words[s];
          }
          r.length = a;
        }
        if (a === 0) ;else if (this.length > a) {
          this.length -= a;
          s = 0;
          for (; s < this.length; s++) {
            this.words[s] = this.words[s + a];
          }
        } else {
          this.words[0] = 0;
          this.length = 1;
        }
        var h = 0;
        for (s = this.length - 1; s >= 0 && (h !== 0 || s >= n); s--) {
          var c = this.words[s] | 0;
          this.words[s] = h << 26 - f | c >>> f;
          h = c & o;
        }
        if (r && h !== 0) {
          r.words[r.length++] = h;
        }
        if (this.length === 0) {
          this.words[0] = 0;
          this.length = 1;
        }
        return this.strip();
      };
      f.prototype.ishrn = function (t, e, r) {
        i(this.negative === 0);
        return this.iushrn(t, e, r);
      };
      f.prototype.shln = function (t) {
        return this.clone().ishln(t);
      };
      f.prototype.ushln = function (t) {
        return this.clone().iushln(t);
      };
      f.prototype.shrn = function (t) {
        return this.clone().ishrn(t);
      };
      f.prototype.ushrn = function (t) {
        return this.clone().iushrn(t);
      };
      f.prototype.testn = function (t) {
        i(typeof t == "number" && t >= 0);
        var e = t % 26;
        var r = (t - e) / 26;
        return !(this.length <= r) && !!(this.words[r] & 1 << e);
      };
      f.prototype.imaskn = function (t) {
        i(typeof t == "number" && t >= 0);
        var e = t % 26;
        var r = (t - e) / 26;
        i(this.negative === 0, "imaskn works only with positive numbers");
        if (this.length <= r) {
          return this;
        } else {
          if (e !== 0) {
            r++;
          }
          this.length = Math.min(r, this.length);
          if (e !== 0) {
            this.words[this.length - 1] &= 67108863 >>> e << e ^ 67108863;
          }
          return this.strip();
        }
      };
      f.prototype.maskn = function (t) {
        return this.clone().imaskn(t);
      };
      f.prototype.iaddn = function (t) {
        i(typeof t == "number");
        i(t < 67108864);
        if (t < 0) {
          return this.isubn(-t);
        } else if (this.negative !== 0) {
          if (this.length === 1 && (this.words[0] | 0) < t) {
            this.words[0] = t - (this.words[0] | 0);
            this.negative = 0;
          } else {
            this.negative = 0;
            this.isubn(t);
            this.negative = 1;
          }
          return this;
        } else {
          return this._iaddn(t);
        }
      };
      f.prototype._iaddn = function (t) {
        this.words[0] += t;
        for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) {
          this.words[e] -= 67108864;
          if (e === this.length - 1) {
            this.words[e + 1] = 1;
          } else {
            this.words[e + 1]++;
          }
        }
        this.length = Math.max(this.length, e + 1);
        return this;
      };
      f.prototype.isubn = function (t) {
        i(typeof t == "number");
        i(t < 67108864);
        if (t < 0) {
          return this.iaddn(-t);
        }
        if (this.negative !== 0) {
          this.negative = 0;
          this.iaddn(t);
          this.negative = 1;
          return this;
        }
        this.words[0] -= t;
        if (this.length === 1 && this.words[0] < 0) {
          this.words[0] = -this.words[0];
          this.negative = 1;
        } else {
          for (var e = 0; e < this.length && this.words[e] < 0; e++) {
            this.words[e] += 67108864;
            this.words[e + 1] -= 1;
          }
        }
        return this.strip();
      };
      f.prototype.addn = function (t) {
        return this.clone().iaddn(t);
      };
      f.prototype.subn = function (t) {
        return this.clone().isubn(t);
      };
      f.prototype.iabs = function () {
        this.negative = 0;
        return this;
      };
      f.prototype.abs = function () {
        return this.clone().iabs();
      };
      f.prototype._ishlnsubmul = function (t, e, r) {
        var n;
        var f;
        var a = t.length + r;
        this._expand(a);
        var o = 0;
        for (n = 0; n < t.length; n++) {
          f = (this.words[n + r] | 0) + o;
          var s = (t.words[n] | 0) * e;
          f -= s & 67108863;
          o = (f >> 26) - (s / 67108864 | 0);
          this.words[n + r] = f & 67108863;
        }
        for (; n < this.length - r; n++) {
          o = (f = (this.words[n + r] | 0) + o) >> 26;
          this.words[n + r] = f & 67108863;
        }
        if (o === 0) {
          return this.strip();
        }
        i(o === -1);
        o = 0;
        n = 0;
        for (; n < this.length; n++) {
          o = (f = -(this.words[n] | 0) + o) >> 26;
          this.words[n] = f & 67108863;
        }
        this.negative = 1;
        return this.strip();
      };
      f.prototype._wordDiv = function (t, e) {
        var r;
        var i = this.length - t.length;
        var n = this.clone();
        var a = t;
        var o = a.words[a.length - 1] | 0;
        if ((i = 26 - this._countBits(o)) != 0) {
          a = a.ushln(i);
          n.iushln(i);
          o = a.words[a.length - 1] | 0;
        }
        var s = n.length - a.length;
        if (e !== "mod") {
          (r = new f(null)).length = s + 1;
          r.words = Array(r.length);
          for (var h = 0; h < r.length; h++) {
            r.words[h] = 0;
          }
        }
        var c = n.clone()._ishlnsubmul(a, 1, s);
        if (c.negative === 0) {
          n = c;
          if (r) {
            r.words[s] = 1;
          }
        }
        for (var d = s - 1; d >= 0; d--) {
          var u = (n.words[a.length + d] | 0) * 67108864 + (n.words[a.length + d - 1] | 0);
          u = Math.min(u / o | 0, 67108863);
          n._ishlnsubmul(a, u, d);
          while (n.negative !== 0) {
            u--;
            n.negative = 0;
            n._ishlnsubmul(a, 1, d);
            if (!n.isZero()) {
              n.negative ^= 1;
            }
          }
          if (r) {
            r.words[d] = u;
          }
        }
        if (r) {
          r.strip();
        }
        n.strip();
        if (e !== "div" && i !== 0) {
          n.iushrn(i);
        }
        return {
          div: r || null,
          mod: n
        };
      };
      f.prototype.divmod = function (t, e, r) {
        var n;
        var a;
        var o;
        i(!t.isZero());
        if (this.isZero()) {
          return {
            div: new f(0),
            mod: new f(0)
          };
        } else if (this.negative !== 0 && t.negative === 0) {
          o = this.neg().divmod(t, e);
          if (e !== "mod") {
            n = o.div.neg();
          }
          if (e !== "div") {
            a = o.mod.neg();
            if (r && a.negative !== 0) {
              a.iadd(t);
            }
          }
          return {
            div: n,
            mod: a
          };
        } else if (this.negative === 0 && t.negative !== 0) {
          o = this.divmod(t.neg(), e);
          if (e !== "mod") {
            n = o.div.neg();
          }
          return {
            div: n,
            mod: o.mod
          };
        } else if ((this.negative & t.negative) != 0) {
          o = this.neg().divmod(t.neg(), e);
          if (e !== "div") {
            a = o.mod.neg();
            if (r && a.negative !== 0) {
              a.isub(t);
            }
          }
          return {
            div: o.div,
            mod: a
          };
        } else if (t.length > this.length || this.cmp(t) < 0) {
          return {
            div: new f(0),
            mod: this
          };
        } else if (t.length === 1) {
          if (e === "div") {
            return {
              div: this.divn(t.words[0]),
              mod: null
            };
          } else if (e === "mod") {
            return {
              div: null,
              mod: new f(this.modn(t.words[0]))
            };
          } else {
            return {
              div: this.divn(t.words[0]),
              mod: new f(this.modn(t.words[0]))
            };
          }
        } else {
          return this._wordDiv(t, e);
        }
      };
      f.prototype.div = function (t) {
        return this.divmod(t, "div", false).div;
      };
      f.prototype.mod = function (t) {
        return this.divmod(t, "mod", false).mod;
      };
      f.prototype.umod = function (t) {
        return this.divmod(t, "mod", true).mod;
      };
      f.prototype.divRound = function (t) {
        var e = this.divmod(t);
        if (e.mod.isZero()) {
          return e.div;
        }
        var r = e.div.negative !== 0 ? e.mod.isub(t) : e.mod;
        var i = t.ushrn(1);
        var n = t.andln(1);
        var f = r.cmp(i);
        if (f < 0 || n === 1 && f === 0) {
          return e.div;
        } else if (e.div.negative !== 0) {
          return e.div.isubn(1);
        } else {
          return e.div.iaddn(1);
        }
      };
      f.prototype.modn = function (t) {
        i(t <= 67108863);
        var e = 67108864 % t;
        var r = 0;
        for (var n = this.length - 1; n >= 0; n--) {
          r = (e * r + (this.words[n] | 0)) % t;
        }
        return r;
      };
      f.prototype.idivn = function (t) {
        i(t <= 67108863);
        var e = 0;
        for (var r = this.length - 1; r >= 0; r--) {
          var n = (this.words[r] | 0) + e * 67108864;
          this.words[r] = n / t | 0;
          e = n % t;
        }
        return this.strip();
      };
      f.prototype.divn = function (t) {
        return this.clone().idivn(t);
      };
      f.prototype.egcd = function (t) {
        i(t.negative === 0);
        i(!t.isZero());
        var e = this;
        var r = t.clone();
        e = e.negative !== 0 ? e.umod(t) : e.clone();
        var n = new f(1);
        var a = new f(0);
        var o = new f(0);
        var s = new f(1);
        var h = 0;
        while (e.isEven() && r.isEven()) {
          e.iushrn(1);
          r.iushrn(1);
          ++h;
        }
        for (var c = r.clone(), d = e.clone(); !e.isZero();) {
          for (var u = 0, l = 1; (e.words[0] & l) == 0 && u < 26; l <<= 1) {
            ++u;
          }
          if (u > 0) {
            for (e.iushrn(u); u-- > 0;) {
              if (n.isOdd() || a.isOdd()) {
                n.iadd(c);
                a.isub(d);
              }
              n.iushrn(1);
              a.iushrn(1);
            }
          }
          for (var b = 0, p = 1; (r.words[0] & p) == 0 && b < 26; p <<= 1) {
            ++b;
          }
          if (b > 0) {
            for (r.iushrn(b); b-- > 0;) {
              if (o.isOdd() || s.isOdd()) {
                o.iadd(c);
                s.isub(d);
              }
              o.iushrn(1);
              s.iushrn(1);
            }
          }
          if (e.cmp(r) >= 0) {
            e.isub(r);
            n.isub(o);
            a.isub(s);
          } else {
            r.isub(e);
            o.isub(n);
            s.isub(a);
          }
        }
        return {
          a: o,
          b: s,
          gcd: r.iushln(h)
        };
      };
      f.prototype._invmp = function (t) {
        i(t.negative === 0);
        i(!t.isZero());
        var e;
        var r = this;
        var n = t.clone();
        r = r.negative !== 0 ? r.umod(t) : r.clone();
        for (var a = new f(1), o = new f(0), s = n.clone(); r.cmpn(1) > 0 && n.cmpn(1) > 0;) {
          for (var h = 0, c = 1; (r.words[0] & c) == 0 && h < 26; c <<= 1) {
            ++h;
          }
          if (h > 0) {
            for (r.iushrn(h); h-- > 0;) {
              if (a.isOdd()) {
                a.iadd(s);
              }
              a.iushrn(1);
            }
          }
          for (var d = 0, u = 1; (n.words[0] & u) == 0 && d < 26; u <<= 1) {
            ++d;
          }
          if (d > 0) {
            for (n.iushrn(d); d-- > 0;) {
              if (o.isOdd()) {
                o.iadd(s);
              }
              o.iushrn(1);
            }
          }
          if (r.cmp(n) >= 0) {
            r.isub(n);
            a.isub(o);
          } else {
            n.isub(r);
            o.isub(a);
          }
        }
        if ((e = r.cmpn(1) === 0 ? a : o).cmpn(0) < 0) {
          e.iadd(t);
        }
        return e;
      };
      f.prototype.gcd = function (t) {
        if (this.isZero()) {
          return t.abs();
        }
        if (t.isZero()) {
          return this.abs();
        }
        var e = this.clone();
        var r = t.clone();
        e.negative = 0;
        r.negative = 0;
        for (var i = 0; e.isEven() && r.isEven(); i++) {
          e.iushrn(1);
          r.iushrn(1);
        }
        while (true) {
          while (e.isEven()) {
            e.iushrn(1);
          }
          while (r.isEven()) {
            r.iushrn(1);
          }
          var n = e.cmp(r);
          if (n < 0) {
            var f = e;
            e = r;
            r = f;
          } else if (n === 0 || r.cmpn(1) === 0) {
            break;
          }
          e.isub(r);
        }
        return r.iushln(i);
      };
      f.prototype.invm = function (t) {
        return this.egcd(t).a.umod(t);
      };
      f.prototype.isEven = function () {
        return (this.words[0] & 1) == 0;
      };
      f.prototype.isOdd = function () {
        return (this.words[0] & 1) == 1;
      };
      f.prototype.andln = function (t) {
        return this.words[0] & t;
      };
      f.prototype.bincn = function (t) {
        i(typeof t == "number");
        var e = t % 26;
        var r = (t - e) / 26;
        var n = 1 << e;
        if (this.length <= r) {
          this._expand(r + 1);
          this.words[r] |= n;
          return this;
        }
        for (var f = n, a = r; f !== 0 && a < this.length; a++) {
          var o = this.words[a] | 0;
          o += f;
          f = o >>> 26;
          o &= 67108863;
          this.words[a] = o;
        }
        if (f !== 0) {
          this.words[a] = f;
          this.length++;
        }
        return this;
      };
      f.prototype.isZero = function () {
        return this.length === 1 && this.words[0] === 0;
      };
      f.prototype.cmpn = function (t) {
        var e;
        var r = t < 0;
        if (this.negative !== 0 && !r) {
          return -1;
        }
        if (this.negative === 0 && r) {
          return 1;
        }
        this.strip();
        if (this.length > 1) {
          e = 1;
        } else {
          if (r) {
            t = -t;
          }
          i(t <= 67108863, "Number is too big");
          var n = this.words[0] | 0;
          e = n === t ? 0 : n < t ? -1 : 1;
        }
        if (this.negative !== 0) {
          return -e | 0;
        } else {
          return e;
        }
      };
      f.prototype.cmp = function (t) {
        if (this.negative !== 0 && t.negative === 0) {
          return -1;
        }
        if (this.negative === 0 && t.negative !== 0) {
          return 1;
        }
        var e = this.ucmp(t);
        if (this.negative !== 0) {
          return -e | 0;
        } else {
          return e;
        }
      };
      f.prototype.ucmp = function (t) {
        if (this.length > t.length) {
          return 1;
        }
        if (this.length < t.length) {
          return -1;
        }
        var e = 0;
        for (var r = this.length - 1; r >= 0; r--) {
          var i = this.words[r] | 0;
          var n = t.words[r] | 0;
          if (i !== n) {
            if (i < n) {
              e = -1;
            } else if (i > n) {
              e = 1;
            }
            break;
          }
        }
        return e;
      };
      f.prototype.gtn = function (t) {
        return this.cmpn(t) === 1;
      };
      f.prototype.gt = function (t) {
        return this.cmp(t) === 1;
      };
      f.prototype.gten = function (t) {
        return this.cmpn(t) >= 0;
      };
      f.prototype.gte = function (t) {
        return this.cmp(t) >= 0;
      };
      f.prototype.ltn = function (t) {
        return this.cmpn(t) === -1;
      };
      f.prototype.lt = function (t) {
        return this.cmp(t) === -1;
      };
      f.prototype.lten = function (t) {
        return this.cmpn(t) <= 0;
      };
      f.prototype.lte = function (t) {
        return this.cmp(t) <= 0;
      };
      f.prototype.eqn = function (t) {
        return this.cmpn(t) === 0;
      };
      f.prototype.eq = function (t) {
        return this.cmp(t) === 0;
      };
      f.red = function (t) {
        return new x(t);
      };
      f.prototype.toRed = function (t) {
        i(!this.red, "Already a number in reduction context");
        i(this.negative === 0, "red works only with positives");
        return t.convertTo(this)._forceRed(t);
      };
      f.prototype.fromRed = function () {
        i(this.red, "fromRed works only with numbers in reduction context");
        return this.red.convertFrom(this);
      };
      f.prototype._forceRed = function (t) {
        this.red = t;
        return this;
      };
      f.prototype.forceRed = function (t) {
        i(!this.red, "Already a number in reduction context");
        return this._forceRed(t);
      };
      f.prototype.redAdd = function (t) {
        i(this.red, "redAdd works only with red numbers");
        return this.red.add(this, t);
      };
      f.prototype.redIAdd = function (t) {
        i(this.red, "redIAdd works only with red numbers");
        return this.red.iadd(this, t);
      };
      f.prototype.redSub = function (t) {
        i(this.red, "redSub works only with red numbers");
        return this.red.sub(this, t);
      };
      f.prototype.redISub = function (t) {
        i(this.red, "redISub works only with red numbers");
        return this.red.isub(this, t);
      };
      f.prototype.redShl = function (t) {
        i(this.red, "redShl works only with red numbers");
        return this.red.shl(this, t);
      };
      f.prototype.redMul = function (t) {
        i(this.red, "redMul works only with red numbers");
        this.red._verify2(this, t);
        return this.red.mul(this, t);
      };
      f.prototype.redIMul = function (t) {
        i(this.red, "redMul works only with red numbers");
        this.red._verify2(this, t);
        return this.red.imul(this, t);
      };
      f.prototype.redSqr = function () {
        i(this.red, "redSqr works only with red numbers");
        this.red._verify1(this);
        return this.red.sqr(this);
      };
      f.prototype.redISqr = function () {
        i(this.red, "redISqr works only with red numbers");
        this.red._verify1(this);
        return this.red.isqr(this);
      };
      f.prototype.redSqrt = function () {
        i(this.red, "redSqrt works only with red numbers");
        this.red._verify1(this);
        return this.red.sqrt(this);
      };
      f.prototype.redInvm = function () {
        i(this.red, "redInvm works only with red numbers");
        this.red._verify1(this);
        return this.red.invm(this);
      };
      f.prototype.redNeg = function () {
        i(this.red, "redNeg works only with red numbers");
        this.red._verify1(this);
        return this.red.neg(this);
      };
      f.prototype.redPow = function (t) {
        i(this.red && !t.red, "redPow(normalNum)");
        this.red._verify1(this);
        return this.red.pow(this, t);
      };
      var m = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
      };
      function v(t, e) {
        this.name = t;
        this.p = new f(e, 16);
        this.n = this.p.bitLength();
        this.k = new f(1).iushln(this.n).isub(this.p);
        this.tmp = this._tmp();
      }
      function y() {
        v.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
      }
      function g() {
        v.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
      }
      function _() {
        v.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
      }
      function w() {
        v.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
      }
      function x(t) {
        if (typeof t == "string") {
          var e = f._prime(t);
          this.m = e.p;
          this.prime = e;
        } else {
          i(t.gtn(1), "modulus must be greater than 1");
          this.m = t;
          this.prime = null;
        }
      }
      function M(t) {
        x.call(this, t);
        this.shift = this.m.bitLength();
        if (this.shift % 26 != 0) {
          this.shift += 26 - this.shift % 26;
        }
        this.r = new f(1).iushln(this.shift);
        this.r2 = this.imod(this.r.sqr());
        this.rinv = this.r._invmp(this.m);
        this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
        this.minv = this.minv.umod(this.r);
        this.minv = this.r.sub(this.minv);
      }
      v.prototype._tmp = function () {
        var t = new f(null);
        t.words = Array(Math.ceil(this.n / 13));
        return t;
      };
      v.prototype.ireduce = function (t) {
        var e;
        var r = t;
        do {
          this.split(r, this.tmp);
          e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength();
        } while (e > this.n);
        var i = e < this.n ? -1 : r.ucmp(this.p);
        if (i === 0) {
          r.words[0] = 0;
          r.length = 1;
        } else if (i > 0) {
          r.isub(this.p);
        } else if (r.strip !== undefined) {
          r.strip();
        } else {
          r._strip();
        }
        return r;
      };
      v.prototype.split = function (t, e) {
        t.iushrn(this.n, 0, e);
      };
      v.prototype.imulK = function (t) {
        return t.imul(this.k);
      };
      n(y, v);
      y.prototype.split = function (t, e) {
        for (var r = Math.min(t.length, 9), i = 0; i < r; i++) {
          e.words[i] = t.words[i];
        }
        e.length = r;
        if (t.length <= 9) {
          t.words[0] = 0;
          t.length = 1;
          return;
        }
        var n = t.words[9];
        i = 10;
        e.words[e.length++] = n & 4194303;
        for (; i < t.length; i++) {
          var f = t.words[i] | 0;
          t.words[i - 10] = (f & 4194303) << 4 | n >>> 22;
          n = f;
        }
        n >>>= 22;
        t.words[i - 10] = n;
        if (n === 0 && t.length > 10) {
          t.length -= 10;
        } else {
          t.length -= 9;
        }
      };
      y.prototype.imulK = function (t) {
        t.words[t.length] = 0;
        t.words[t.length + 1] = 0;
        t.length += 2;
        var e = 0;
        for (var r = 0; r < t.length; r++) {
          var i = t.words[r] | 0;
          e += i * 977;
          t.words[r] = e & 67108863;
          e = i * 64 + (e / 67108864 | 0);
        }
        if (t.words[t.length - 1] === 0) {
          t.length--;
          if (t.words[t.length - 1] === 0) {
            t.length--;
          }
        }
        return t;
      };
      n(g, v);
      n(_, v);
      n(w, v);
      w.prototype.imulK = function (t) {
        var e = 0;
        for (var r = 0; r < t.length; r++) {
          var i = (t.words[r] | 0) * 19 + e;
          var n = i & 67108863;
          i >>>= 26;
          t.words[r] = n;
          e = i;
        }
        if (e !== 0) {
          t.words[t.length++] = e;
        }
        return t;
      };
      f._prime = function (t) {
        var e;
        if (m[t]) {
          return m[t];
        }
        if (t === "k256") {
          e = new y();
        } else if (t === "p224") {
          e = new g();
        } else if (t === "p192") {
          e = new _();
        } else if (t === "p25519") {
          e = new w();
        } else {
          throw Error("Unknown prime " + t);
        }
        m[t] = e;
        return e;
      };
      x.prototype._verify1 = function (t) {
        i(t.negative === 0, "red works only with positives");
        i(t.red, "red works only with red numbers");
      };
      x.prototype._verify2 = function (t, e) {
        i((t.negative | e.negative) == 0, "red works only with positives");
        i(t.red && t.red === e.red, "red works only with red numbers");
      };
      x.prototype.imod = function (t) {
        if (this.prime) {
          return this.prime.ireduce(t)._forceRed(this);
        } else {
          return t.umod(this.m)._forceRed(this);
        }
      };
      x.prototype.neg = function (t) {
        if (t.isZero()) {
          return t.clone();
        } else {
          return this.m.sub(t)._forceRed(this);
        }
      };
      x.prototype.add = function (t, e) {
        this._verify2(t, e);
        var r = t.add(e);
        if (r.cmp(this.m) >= 0) {
          r.isub(this.m);
        }
        return r._forceRed(this);
      };
      x.prototype.iadd = function (t, e) {
        this._verify2(t, e);
        var r = t.iadd(e);
        if (r.cmp(this.m) >= 0) {
          r.isub(this.m);
        }
        return r;
      };
      x.prototype.sub = function (t, e) {
        this._verify2(t, e);
        var r = t.sub(e);
        if (r.cmpn(0) < 0) {
          r.iadd(this.m);
        }
        return r._forceRed(this);
      };
      x.prototype.isub = function (t, e) {
        this._verify2(t, e);
        var r = t.isub(e);
        if (r.cmpn(0) < 0) {
          r.iadd(this.m);
        }
        return r;
      };
      x.prototype.shl = function (t, e) {
        this._verify1(t);
        return this.imod(t.ushln(e));
      };
      x.prototype.imul = function (t, e) {
        this._verify2(t, e);
        return this.imod(t.imul(e));
      };
      x.prototype.mul = function (t, e) {
        this._verify2(t, e);
        return this.imod(t.mul(e));
      };
      x.prototype.isqr = function (t) {
        return this.imul(t, t.clone());
      };
      x.prototype.sqr = function (t) {
        return this.mul(t, t);
      };
      x.prototype.sqrt = function (t) {
        if (t.isZero()) {
          return t.clone();
        }
        var e = this.m.andln(3);
        i(e % 2 == 1);
        if (e === 3) {
          var r = this.m.add(new f(1)).iushrn(2);
          return this.pow(t, r);
        }
        for (var n = this.m.subn(1), a = 0; !n.isZero() && n.andln(1) === 0;) {
          a++;
          n.iushrn(1);
        }
        i(!n.isZero());
        var o = new f(1).toRed(this);
        var s = o.redNeg();
        var h = this.m.subn(1).iushrn(1);
        var c = this.m.bitLength();
        for (c = new f(c * 2 * c).toRed(this); this.pow(c, h).cmp(s) !== 0;) {
          c.redIAdd(s);
        }
        var d = this.pow(c, n);
        var u = this.pow(t, n.addn(1).iushrn(1));
        for (var l = this.pow(t, n), b = a; l.cmp(o) !== 0;) {
          for (var p = l, m = 0; p.cmp(o) !== 0; m++) {
            p = p.redSqr();
          }
          i(m < b);
          var v = this.pow(d, new f(1).iushln(b - m - 1));
          u = u.redMul(v);
          d = v.redSqr();
          l = l.redMul(d);
          b = m;
        }
        return u;
      };
      x.prototype.invm = function (t) {
        var e = t._invmp(this.m);
        if (e.negative !== 0) {
          e.negative = 0;
          return this.imod(e).redNeg();
        } else {
          return this.imod(e);
        }
      };
      x.prototype.pow = function (t, e) {
        if (e.isZero()) {
          return new f(1).toRed(this);
        }
        if (e.cmpn(1) === 0) {
          return t.clone();
        }
        var r = Array(16);
        r[0] = new f(1).toRed(this);
        r[1] = t;
        for (var i = 2; i < r.length; i++) {
          r[i] = this.mul(r[i - 1], t);
        }
        var n = r[0];
        var a = 0;
        var o = 0;
        var s = e.bitLength() % 26;
        if (s === 0) {
          s = 26;
        }
        i = e.length - 1;
        for (; i >= 0; i--) {
          var h = e.words[i];
          for (var c = s - 1; c >= 0; c--) {
            var d = h >> c & 1;
            if (n !== r[0]) {
              n = this.sqr(n);
            }
            if (d === 0 && a === 0) {
              o = 0;
              continue;
            }
            a <<= 1;
            a |= d;
            if (++o == 4 || i === 0 && c === 0) {
              n = this.mul(n, r[a]);
              o = 0;
              a = 0;
            }
          }
          s = 26;
        }
        return n;
      };
      x.prototype.convertTo = function (t) {
        var e = t.umod(this.m);
        if (e === t) {
          return e.clone();
        } else {
          return e;
        }
      };
      x.prototype.convertFrom = function (t) {
        var e = t.clone();
        e.red = null;
        return e;
      };
      f.mont = function (t) {
        return new M(t);
      };
      n(M, x);
      M.prototype.convertTo = function (t) {
        return this.imod(t.ushln(this.shift));
      };
      M.prototype.convertFrom = function (t) {
        var e = this.imod(t.mul(this.rinv));
        e.red = null;
        return e;
      };
      M.prototype.imul = function (t, e) {
        if (t.isZero() || e.isZero()) {
          t.words[0] = 0;
          t.length = 1;
          return t;
        }
        var r = t.imul(e);
        var i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var n = r.isub(i).iushrn(this.shift);
        var f = n;
        if (n.cmp(this.m) >= 0) {
          f = n.isub(this.m);
        } else if (n.cmpn(0) < 0) {
          f = n.iadd(this.m);
        }
        return f._forceRed(this);
      };
      M.prototype.mul = function (t, e) {
        if (t.isZero() || e.isZero()) {
          return new f(0)._forceRed(this);
        }
        var r = t.mul(e);
        var i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var n = r.isub(i).iushrn(this.shift);
        var a = n;
        if (n.cmp(this.m) >= 0) {
          a = n.isub(this.m);
        } else if (n.cmpn(0) < 0) {
          a = n.iadd(this.m);
        }
        return a._forceRed(this);
      };
      M.prototype.invm = function (t) {
        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
      };
    })(t = r.nmd(t), this);
  },
  1670: function (t, e, r) {
    (function (t, e) {
      "use strict";

      function i(t, e) {
        if (!t) {
          throw Error(e || "Assertion failed");
        }
      }
      function n(t, e) {
        t.super_ = e;
        function r() {}
        r.prototype = e.prototype;
        t.prototype = new r();
        t.prototype.constructor = t;
      }
      function f(t, e, r) {
        if (f.isBN(t)) {
          return t;
        }
        this.negative = 0;
        this.words = null;
        this.length = 0;
        this.red = null;
        if (t !== null) {
          if (e === "le" || e === "be") {
            r = e;
            e = 10;
          }
          this._init(t || 0, e || 10, r || "be");
        }
      }
      if (typeof t == "object") {
        t.exports = f;
      } else {
        e.BN = f;
      }
      f.BN = f;
      f.wordSize = 26;
      try {
        c = r(4300).Buffer;
      } catch (t) {}
      function a(t, e, r) {
        var n = 0;
        for (var f = Math.min(t.length, r), a = 0, o = e; o < f; o++) {
          var s;
          var h = t.charCodeAt(o) - 48;
          n <<= 4;
          n |= s = h >= 49 && h <= 54 ? h - 49 + 10 : h >= 17 && h <= 22 ? h - 17 + 10 : h;
          a |= s;
        }
        i(!(a & 240), "Invalid character in " + t);
        return n;
      }
      function o(t, e, r, n) {
        var f = 0;
        var a = 0;
        for (var o = Math.min(t.length, r), s = e; s < o; s++) {
          var h = t.charCodeAt(s) - 48;
          f *= n;
          a = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h;
          i(h >= 0 && a < n, "Invalid character");
          f += a;
        }
        return f;
      }
      function s(t, e) {
        t.words = e.words;
        t.length = e.length;
        t.negative = e.negative;
        t.red = e.red;
      }
      function h() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      }
      f.isBN = function (t) {
        return t instanceof f || t !== null && typeof t == "object" && t.constructor.wordSize === f.wordSize && Array.isArray(t.words);
      };
      f.max = function (t, e) {
        if (t.cmp(e) > 0) {
          return t;
        } else {
          return e;
        }
      };
      f.min = function (t, e) {
        if (t.cmp(e) < 0) {
          return t;
        } else {
          return e;
        }
      };
      f.prototype._init = function (t, e, r) {
        if (typeof t == "number") {
          return this._initNumber(t, e, r);
        }
        if (typeof t == "object") {
          return this._initArray(t, e, r);
        }
        if (e === "hex") {
          e = 16;
        }
        i(e === (e | 0) && e >= 2 && e <= 36);
        var n = 0;
        if ((t = t.toString().replace(/\s+/g, ""))[0] === "-") {
          n++;
        }
        if (e === 16) {
          this._parseHex(t, n);
        } else {
          this._parseBase(t, e, n);
        }
        if (t[0] === "-") {
          this.negative = 1;
        }
        this._strip();
        if (r === "le") {
          this._initArray(this.toArray(), e, r);
        }
      };
      f.prototype._initNumber = function (t, e, r) {
        if (t < 0) {
          this.negative = 1;
          t = -t;
        }
        if (t < 67108864) {
          this.words = [t & 67108863];
          this.length = 1;
        } else if (t < 4503599627370496) {
          this.words = [t & 67108863, t / 67108864 & 67108863];
          this.length = 2;
        } else {
          i(t < 9007199254740992);
          this.words = [t & 67108863, t / 67108864 & 67108863, 1];
          this.length = 3;
        }
        if (r === "le") {
          this._initArray(this.toArray(), e, r);
        }
      };
      f.prototype._initArray = function (t, e, r) {
        i(typeof t.length == "number");
        if (t.length <= 0) {
          this.words = [0];
          this.length = 1;
          return this;
        }
        this.length = Math.ceil(t.length / 3);
        this.words = Array(this.length);
        var n;
        var f;
        for (var a = 0; a < this.length; a++) {
          this.words[a] = 0;
        }
        var o = 0;
        if (r === "be") {
          a = t.length - 1;
          n = 0;
          for (; a >= 0; a -= 3) {
            f = t[a] | t[a - 1] << 8 | t[a - 2] << 16;
            this.words[n] |= f << o & 67108863;
            this.words[n + 1] = f >>> 26 - o & 67108863;
            if ((o += 24) >= 26) {
              o -= 26;
              n++;
            }
          }
        } else if (r === "le") {
          a = 0;
          n = 0;
          for (; a < t.length; a += 3) {
            f = t[a] | t[a + 1] << 8 | t[a + 2] << 16;
            this.words[n] |= f << o & 67108863;
            this.words[n + 1] = f >>> 26 - o & 67108863;
            if ((o += 24) >= 26) {
              o -= 26;
              n++;
            }
          }
        }
        return this._strip();
      };
      f.prototype._parseHex = function (t, e) {
        this.length = Math.ceil((t.length - e) / 6);
        this.words = Array(this.length);
        var r;
        var i;
        for (var n = 0; n < this.length; n++) {
          this.words[n] = 0;
        }
        var f = 0;
        n = t.length - 6;
        r = 0;
        for (; n >= e; n -= 6) {
          i = a(t, n, n + 6);
          this.words[r] |= i << f & 67108863;
          this.words[r + 1] |= i >>> 26 - f & 4194303;
          if ((f += 24) >= 26) {
            f -= 26;
            r++;
          }
        }
        if (n + 6 !== e) {
          i = a(t, e, n + 6);
          this.words[r] |= i << f & 67108863;
          this.words[r + 1] |= i >>> 26 - f & 4194303;
        }
        this._strip();
      };
      f.prototype._parseBase = function (t, e, r) {
        this.words = [0];
        this.length = 1;
        var i = 0;
        for (var n = 1; n <= 67108863; n *= e) {
          i++;
        }
        i--;
        n = n / e | 0;
        var f = t.length - r;
        var a = f % i;
        for (var s = Math.min(f, f - a) + r, h = 0, c = r; c < s; c += i) {
          h = o(t, c, c + i, e);
          this.imuln(n);
          if (this.words[0] + h < 67108864) {
            this.words[0] += h;
          } else {
            this._iaddn(h);
          }
        }
        if (a !== 0) {
          var d = 1;
          h = o(t, c, t.length, e);
          c = 0;
          for (; c < a; c++) {
            d *= e;
          }
          this.imuln(d);
          if (this.words[0] + h < 67108864) {
            this.words[0] += h;
          } else {
            this._iaddn(h);
          }
        }
      };
      f.prototype.copy = function (t) {
        t.words = Array(this.length);
        for (var e = 0; e < this.length; e++) {
          t.words[e] = this.words[e];
        }
        t.length = this.length;
        t.negative = this.negative;
        t.red = this.red;
      };
      f.prototype._move = function (t) {
        s(t, this);
      };
      f.prototype.clone = function () {
        var t = new f(null);
        this.copy(t);
        return t;
      };
      f.prototype._expand = function (t) {
        while (this.length < t) {
          this.words[this.length++] = 0;
        }
        return this;
      };
      f.prototype._strip = function () {
        while (this.length > 1 && this.words[this.length - 1] === 0) {
          this.length--;
        }
        return this._normSign();
      };
      f.prototype._normSign = function () {
        if (this.length === 1 && this.words[0] === 0) {
          this.negative = 0;
        }
        return this;
      };
      if (typeof Symbol != "undefined" && typeof Symbol.for == "function") {
        f.prototype[Symbol.for("nodejs.util.inspect.custom")] = h;
      } else {
        f.prototype.inspect = h;
      }
      var c;
      var d = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"];
      var u = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
      var l = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
      function b(t, e, r) {
        r.negative = e.negative ^ t.negative;
        var i = t.length + e.length | 0;
        r.length = i;
        i = i - 1 | 0;
        var n = t.words[0] | 0;
        var f = e.words[0] | 0;
        var a = n * f;
        var o = a & 67108863;
        var s = a / 67108864 | 0;
        r.words[0] = o;
        for (var h = 1; h < i; h++) {
          var c = s >>> 26;
          var d = s & 67108863;
          for (var u = Math.min(h, e.length - 1), l = Math.max(0, h - t.length + 1); l <= u; l++) {
            var b = h - l | 0;
            c += (a = (n = t.words[b] | 0) * (f = e.words[l] | 0) + d) / 67108864 | 0;
            d = a & 67108863;
          }
          r.words[h] = d | 0;
          s = c | 0;
        }
        if (s !== 0) {
          r.words[h] = s | 0;
        } else {
          r.length--;
        }
        return r._strip();
      }
      f.prototype.toString = function (t, e) {
        e = e | 0 || 1;
        if ((t = t || 10) === 16 || t === "hex") {
          var r = "";
          var n = 0;
          var f = 0;
          for (var a = 0; a < this.length; a++) {
            var o = this.words[a];
            var s = ((o << n | f) & 16777215).toString(16);
            r = (f = o >>> 24 - n & 16777215) != 0 || a !== this.length - 1 ? d[6 - s.length] + s + r : s + r;
            if ((n += 2) >= 26) {
              n -= 26;
              a--;
            }
          }
          for (f !== 0 && (r = f.toString(16) + r); r.length % e != 0;) {
            r = "0" + r;
          }
          if (this.negative !== 0) {
            r = "-" + r;
          }
          return r;
        }
        if (t === (t | 0) && t >= 2 && t <= 36) {
          var h = u[t];
          var c = l[t];
          r = "";
          var b = this.clone();
          for (b.negative = 0; !b.isZero();) {
            var p = b.modrn(c).toString(t);
            r = (b = b.idivn(c)).isZero() ? p + r : d[h - p.length] + p + r;
          }
          for (this.isZero() && (r = "0" + r); r.length % e != 0;) {
            r = "0" + r;
          }
          if (this.negative !== 0) {
            r = "-" + r;
          }
          return r;
        }
        i(false, "Base should be between 2 and 36");
      };
      f.prototype.toNumber = function () {
        var t = this.words[0];
        if (this.length === 2) {
          t += this.words[1] * 67108864;
        } else if (this.length === 3 && this.words[2] === 1) {
          t += 4503599627370496 + this.words[1] * 67108864;
        } else if (this.length > 2) {
          i(false, "Number can only safely store up to 53 bits");
        }
        if (this.negative !== 0) {
          return -t;
        } else {
          return t;
        }
      };
      f.prototype.toJSON = function () {
        return this.toString(16, 2);
      };
      if (c) {
        f.prototype.toBuffer = function (t, e) {
          return this.toArrayLike(c, t, e);
        };
      }
      f.prototype.toArray = function (t, e) {
        return this.toArrayLike(Array, t, e);
      };
      f.prototype.toArrayLike = function (t, e, r) {
        this._strip();
        var n = this.byteLength();
        var f = r || Math.max(1, n);
        i(n <= f, "byte array longer than desired length");
        i(f > 0, "Requested array length <= 0");
        var a = t.allocUnsafe ? t.allocUnsafe(f) : new t(f);
        this["_toArrayLike" + (e === "le" ? "LE" : "BE")](a, n);
        return a;
      };
      f.prototype._toArrayLikeLE = function (t, e) {
        var r = 0;
        var i = 0;
        for (var n = 0, f = 0; n < this.length; n++) {
          var a = this.words[n] << f | i;
          t[r++] = a & 255;
          if (r < t.length) {
            t[r++] = a >> 8 & 255;
          }
          if (r < t.length) {
            t[r++] = a >> 16 & 255;
          }
          if (f === 6) {
            if (r < t.length) {
              t[r++] = a >> 24 & 255;
            }
            i = 0;
            f = 0;
          } else {
            i = a >>> 24;
            f += 2;
          }
        }
        if (r < t.length) {
          for (t[r++] = i; r < t.length;) {
            t[r++] = 0;
          }
        }
      };
      f.prototype._toArrayLikeBE = function (t, e) {
        var r = t.length - 1;
        var i = 0;
        for (var n = 0, f = 0; n < this.length; n++) {
          var a = this.words[n] << f | i;
          t[r--] = a & 255;
          if (r >= 0) {
            t[r--] = a >> 8 & 255;
          }
          if (r >= 0) {
            t[r--] = a >> 16 & 255;
          }
          if (f === 6) {
            if (r >= 0) {
              t[r--] = a >> 24 & 255;
            }
            i = 0;
            f = 0;
          } else {
            i = a >>> 24;
            f += 2;
          }
        }
        if (r >= 0) {
          for (t[r--] = i; r >= 0;) {
            t[r--] = 0;
          }
        }
      };
      if (Math.clz32) {
        f.prototype._countBits = function (t) {
          return 32 - Math.clz32(t);
        };
      } else {
        f.prototype._countBits = function (t) {
          var e = t;
          var r = 0;
          if (e >= 4096) {
            r += 13;
            e >>>= 13;
          }
          if (e >= 64) {
            r += 7;
            e >>>= 7;
          }
          if (e >= 8) {
            r += 4;
            e >>>= 4;
          }
          if (e >= 2) {
            r += 2;
            e >>>= 2;
          }
          return r + e;
        };
      }
      f.prototype._zeroBits = function (t) {
        if (t === 0) {
          return 26;
        }
        var e = t;
        var r = 0;
        if ((e & 8191) == 0) {
          r += 13;
          e >>>= 13;
        }
        if ((e & 127) == 0) {
          r += 7;
          e >>>= 7;
        }
        if ((e & 15) == 0) {
          r += 4;
          e >>>= 4;
        }
        if ((e & 3) == 0) {
          r += 2;
          e >>>= 2;
        }
        if ((e & 1) == 0) {
          r++;
        }
        return r;
      };
      f.prototype.bitLength = function () {
        var t = this.words[this.length - 1];
        var e = this._countBits(t);
        return (this.length - 1) * 26 + e;
      };
      f.prototype.zeroBits = function () {
        if (this.isZero()) {
          return 0;
        }
        var t = 0;
        for (var e = 0; e < this.length; e++) {
          var r = this._zeroBits(this.words[e]);
          t += r;
          if (r !== 26) {
            break;
          }
        }
        return t;
      };
      f.prototype.byteLength = function () {
        return Math.ceil(this.bitLength() / 8);
      };
      f.prototype.toTwos = function (t) {
        if (this.negative !== 0) {
          return this.abs().inotn(t).iaddn(1);
        } else {
          return this.clone();
        }
      };
      f.prototype.fromTwos = function (t) {
        if (this.testn(t - 1)) {
          return this.notn(t).iaddn(1).ineg();
        } else {
          return this.clone();
        }
      };
      f.prototype.isNeg = function () {
        return this.negative !== 0;
      };
      f.prototype.neg = function () {
        return this.clone().ineg();
      };
      f.prototype.ineg = function () {
        if (!this.isZero()) {
          this.negative ^= 1;
        }
        return this;
      };
      f.prototype.iuor = function (t) {
        while (this.length < t.length) {
          this.words[this.length++] = 0;
        }
        for (var e = 0; e < t.length; e++) {
          this.words[e] = this.words[e] | t.words[e];
        }
        return this._strip();
      };
      f.prototype.ior = function (t) {
        i((this.negative | t.negative) == 0);
        return this.iuor(t);
      };
      f.prototype.or = function (t) {
        if (this.length > t.length) {
          return this.clone().ior(t);
        } else {
          return t.clone().ior(this);
        }
      };
      f.prototype.uor = function (t) {
        if (this.length > t.length) {
          return this.clone().iuor(t);
        } else {
          return t.clone().iuor(this);
        }
      };
      f.prototype.iuand = function (t) {
        var e;
        e = this.length > t.length ? t : this;
        for (var r = 0; r < e.length; r++) {
          this.words[r] = this.words[r] & t.words[r];
        }
        this.length = e.length;
        return this._strip();
      };
      f.prototype.iand = function (t) {
        i((this.negative | t.negative) == 0);
        return this.iuand(t);
      };
      f.prototype.and = function (t) {
        if (this.length > t.length) {
          return this.clone().iand(t);
        } else {
          return t.clone().iand(this);
        }
      };
      f.prototype.uand = function (t) {
        if (this.length > t.length) {
          return this.clone().iuand(t);
        } else {
          return t.clone().iuand(this);
        }
      };
      f.prototype.iuxor = function (t) {
        if (this.length > t.length) {
          e = this;
          r = t;
        } else {
          e = t;
          r = this;
        }
        var e;
        for (var r, i = 0; i < r.length; i++) {
          this.words[i] = e.words[i] ^ r.words[i];
        }
        if (this !== e) {
          for (; i < e.length; i++) {
            this.words[i] = e.words[i];
          }
        }
        this.length = e.length;
        return this._strip();
      };
      f.prototype.ixor = function (t) {
        i((this.negative | t.negative) == 0);
        return this.iuxor(t);
      };
      f.prototype.xor = function (t) {
        if (this.length > t.length) {
          return this.clone().ixor(t);
        } else {
          return t.clone().ixor(this);
        }
      };
      f.prototype.uxor = function (t) {
        if (this.length > t.length) {
          return this.clone().iuxor(t);
        } else {
          return t.clone().iuxor(this);
        }
      };
      f.prototype.inotn = function (t) {
        i(typeof t == "number" && t >= 0);
        var e = Math.ceil(t / 26) | 0;
        var r = t % 26;
        this._expand(e);
        if (r > 0) {
          e--;
        }
        for (var n = 0; n < e; n++) {
          this.words[n] = ~this.words[n] & 67108863;
        }
        if (r > 0) {
          this.words[n] = ~this.words[n] & 67108863 >> 26 - r;
        }
        return this._strip();
      };
      f.prototype.notn = function (t) {
        return this.clone().inotn(t);
      };
      f.prototype.setn = function (t, e) {
        i(typeof t == "number" && t >= 0);
        var r = t / 26 | 0;
        var n = t % 26;
        this._expand(r + 1);
        if (e) {
          this.words[r] = this.words[r] | 1 << n;
        } else {
          this.words[r] = this.words[r] & ~(1 << n);
        }
        return this._strip();
      };
      f.prototype.iadd = function (t) {
        if (this.negative !== 0 && t.negative === 0) {
          this.negative = 0;
          e = this.isub(t);
          this.negative ^= 1;
          return this._normSign();
        }
        if (this.negative === 0 && t.negative !== 0) {
          t.negative = 0;
          e = this.isub(t);
          t.negative = 1;
          return e._normSign();
        }
        if (this.length > t.length) {
          r = this;
          i = t;
        } else {
          r = t;
          i = this;
        }
        var e;
        var r;
        for (var i, n = 0, f = 0; f < i.length; f++) {
          e = (r.words[f] | 0) + (i.words[f] | 0) + n;
          this.words[f] = e & 67108863;
          n = e >>> 26;
        }
        for (; n !== 0 && f < r.length; f++) {
          e = (r.words[f] | 0) + n;
          this.words[f] = e & 67108863;
          n = e >>> 26;
        }
        this.length = r.length;
        if (n !== 0) {
          this.words[this.length] = n;
          this.length++;
        } else if (r !== this) {
          for (; f < r.length; f++) {
            this.words[f] = r.words[f];
          }
        }
        return this;
      };
      f.prototype.add = function (t) {
        var e;
        if (t.negative !== 0 && this.negative === 0) {
          t.negative = 0;
          e = this.sub(t);
          t.negative ^= 1;
          return e;
        } else if (t.negative === 0 && this.negative !== 0) {
          this.negative = 0;
          e = t.sub(this);
          this.negative = 1;
          return e;
        } else if (this.length > t.length) {
          return this.clone().iadd(t);
        } else {
          return t.clone().iadd(this);
        }
      };
      f.prototype.isub = function (t) {
        if (t.negative !== 0) {
          t.negative = 0;
          var e;
          var r;
          var i = this.iadd(t);
          t.negative = 1;
          return i._normSign();
        }
        if (this.negative !== 0) {
          this.negative = 0;
          this.iadd(t);
          this.negative = 1;
          return this._normSign();
        }
        var n = this.cmp(t);
        if (n === 0) {
          this.negative = 0;
          this.length = 1;
          this.words[0] = 0;
          return this;
        }
        if (n > 0) {
          e = this;
          r = t;
        } else {
          e = t;
          r = this;
        }
        var f = 0;
        for (var a = 0; a < r.length; a++) {
          f = (i = (e.words[a] | 0) - (r.words[a] | 0) + f) >> 26;
          this.words[a] = i & 67108863;
        }
        for (; f !== 0 && a < e.length; a++) {
          f = (i = (e.words[a] | 0) + f) >> 26;
          this.words[a] = i & 67108863;
        }
        if (f === 0 && a < e.length && e !== this) {
          for (; a < e.length; a++) {
            this.words[a] = e.words[a];
          }
        }
        this.length = Math.max(this.length, a);
        if (e !== this) {
          this.negative = 1;
        }
        return this._strip();
      };
      f.prototype.sub = function (t) {
        return this.clone().isub(t);
      };
      function p(t, e, r) {
        var i;
        var n;
        var f;
        var a = t.words;
        var o = e.words;
        var s = r.words;
        var h = 0;
        var c = a[0] | 0;
        var d = c & 8191;
        var u = c >>> 13;
        var l = a[1] | 0;
        var b = l & 8191;
        var p = l >>> 13;
        var m = a[2] | 0;
        var v = m & 8191;
        var y = m >>> 13;
        var g = a[3] | 0;
        var _ = g & 8191;
        var w = g >>> 13;
        var x = a[4] | 0;
        var M = x & 8191;
        var S = x >>> 13;
        var k = a[5] | 0;
        var E = k & 8191;
        var A = k >>> 13;
        var R = a[6] | 0;
        var I = R & 8191;
        var B = R >>> 13;
        var P = a[7] | 0;
        var T = P & 8191;
        var C = P >>> 13;
        var j = a[8] | 0;
        var O = j & 8191;
        var D = j >>> 13;
        var N = a[9] | 0;
        var q = N & 8191;
        var L = N >>> 13;
        var z = o[0] | 0;
        var U = z & 8191;
        var K = z >>> 13;
        var H = o[1] | 0;
        var F = H & 8191;
        var V = H >>> 13;
        var W = o[2] | 0;
        var Z = W & 8191;
        var X = W >>> 13;
        var G = o[3] | 0;
        var J = G & 8191;
        var Y = G >>> 13;
        var $ = o[4] | 0;
        var Q = $ & 8191;
        var tt = $ >>> 13;
        var te = o[5] | 0;
        var tr = te & 8191;
        var ti = te >>> 13;
        var tn = o[6] | 0;
        var tf = tn & 8191;
        var ta = tn >>> 13;
        var to = o[7] | 0;
        var ts = to & 8191;
        var th = to >>> 13;
        var tc = o[8] | 0;
        var td = tc & 8191;
        var tu = tc >>> 13;
        var tl = o[9] | 0;
        var tb = tl & 8191;
        var tp = tl >>> 13;
        r.negative = t.negative ^ e.negative;
        r.length = 19;
        i = Math.imul(d, U);
        var tm = (h + i | 0) + (((n = (n = Math.imul(d, K)) + Math.imul(u, U) | 0) & 8191) << 13) | 0;
        h = ((f = Math.imul(u, K)) + (n >>> 13) | 0) + (tm >>> 26) | 0;
        tm &= 67108863;
        i = Math.imul(b, U);
        n = (n = Math.imul(b, K)) + Math.imul(p, U) | 0;
        f = Math.imul(p, K);
        i = i + Math.imul(d, F) | 0;
        var tv = (h + i | 0) + (((n = (n = n + Math.imul(d, V) | 0) + Math.imul(u, F) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(u, V) | 0) + (n >>> 13) | 0) + (tv >>> 26) | 0;
        tv &= 67108863;
        i = Math.imul(v, U);
        n = (n = Math.imul(v, K)) + Math.imul(y, U) | 0;
        f = Math.imul(y, K);
        i = i + Math.imul(b, F) | 0;
        n = (n = n + Math.imul(b, V) | 0) + Math.imul(p, F) | 0;
        f = f + Math.imul(p, V) | 0;
        i = i + Math.imul(d, Z) | 0;
        var ty = (h + i | 0) + (((n = (n = n + Math.imul(d, X) | 0) + Math.imul(u, Z) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(u, X) | 0) + (n >>> 13) | 0) + (ty >>> 26) | 0;
        ty &= 67108863;
        i = Math.imul(_, U);
        n = (n = Math.imul(_, K)) + Math.imul(w, U) | 0;
        f = Math.imul(w, K);
        i = i + Math.imul(v, F) | 0;
        n = (n = n + Math.imul(v, V) | 0) + Math.imul(y, F) | 0;
        f = f + Math.imul(y, V) | 0;
        i = i + Math.imul(b, Z) | 0;
        n = (n = n + Math.imul(b, X) | 0) + Math.imul(p, Z) | 0;
        f = f + Math.imul(p, X) | 0;
        i = i + Math.imul(d, J) | 0;
        var tg = (h + i | 0) + (((n = (n = n + Math.imul(d, Y) | 0) + Math.imul(u, J) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(u, Y) | 0) + (n >>> 13) | 0) + (tg >>> 26) | 0;
        tg &= 67108863;
        i = Math.imul(M, U);
        n = (n = Math.imul(M, K)) + Math.imul(S, U) | 0;
        f = Math.imul(S, K);
        i = i + Math.imul(_, F) | 0;
        n = (n = n + Math.imul(_, V) | 0) + Math.imul(w, F) | 0;
        f = f + Math.imul(w, V) | 0;
        i = i + Math.imul(v, Z) | 0;
        n = (n = n + Math.imul(v, X) | 0) + Math.imul(y, Z) | 0;
        f = f + Math.imul(y, X) | 0;
        i = i + Math.imul(b, J) | 0;
        n = (n = n + Math.imul(b, Y) | 0) + Math.imul(p, J) | 0;
        f = f + Math.imul(p, Y) | 0;
        i = i + Math.imul(d, Q) | 0;
        var t_ = (h + i | 0) + (((n = (n = n + Math.imul(d, tt) | 0) + Math.imul(u, Q) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(u, tt) | 0) + (n >>> 13) | 0) + (t_ >>> 26) | 0;
        t_ &= 67108863;
        i = Math.imul(E, U);
        n = (n = Math.imul(E, K)) + Math.imul(A, U) | 0;
        f = Math.imul(A, K);
        i = i + Math.imul(M, F) | 0;
        n = (n = n + Math.imul(M, V) | 0) + Math.imul(S, F) | 0;
        f = f + Math.imul(S, V) | 0;
        i = i + Math.imul(_, Z) | 0;
        n = (n = n + Math.imul(_, X) | 0) + Math.imul(w, Z) | 0;
        f = f + Math.imul(w, X) | 0;
        i = i + Math.imul(v, J) | 0;
        n = (n = n + Math.imul(v, Y) | 0) + Math.imul(y, J) | 0;
        f = f + Math.imul(y, Y) | 0;
        i = i + Math.imul(b, Q) | 0;
        n = (n = n + Math.imul(b, tt) | 0) + Math.imul(p, Q) | 0;
        f = f + Math.imul(p, tt) | 0;
        i = i + Math.imul(d, tr) | 0;
        var tw = (h + i | 0) + (((n = (n = n + Math.imul(d, ti) | 0) + Math.imul(u, tr) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(u, ti) | 0) + (n >>> 13) | 0) + (tw >>> 26) | 0;
        tw &= 67108863;
        i = Math.imul(I, U);
        n = (n = Math.imul(I, K)) + Math.imul(B, U) | 0;
        f = Math.imul(B, K);
        i = i + Math.imul(E, F) | 0;
        n = (n = n + Math.imul(E, V) | 0) + Math.imul(A, F) | 0;
        f = f + Math.imul(A, V) | 0;
        i = i + Math.imul(M, Z) | 0;
        n = (n = n + Math.imul(M, X) | 0) + Math.imul(S, Z) | 0;
        f = f + Math.imul(S, X) | 0;
        i = i + Math.imul(_, J) | 0;
        n = (n = n + Math.imul(_, Y) | 0) + Math.imul(w, J) | 0;
        f = f + Math.imul(w, Y) | 0;
        i = i + Math.imul(v, Q) | 0;
        n = (n = n + Math.imul(v, tt) | 0) + Math.imul(y, Q) | 0;
        f = f + Math.imul(y, tt) | 0;
        i = i + Math.imul(b, tr) | 0;
        n = (n = n + Math.imul(b, ti) | 0) + Math.imul(p, tr) | 0;
        f = f + Math.imul(p, ti) | 0;
        i = i + Math.imul(d, tf) | 0;
        var tx = (h + i | 0) + (((n = (n = n + Math.imul(d, ta) | 0) + Math.imul(u, tf) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(u, ta) | 0) + (n >>> 13) | 0) + (tx >>> 26) | 0;
        tx &= 67108863;
        i = Math.imul(T, U);
        n = (n = Math.imul(T, K)) + Math.imul(C, U) | 0;
        f = Math.imul(C, K);
        i = i + Math.imul(I, F) | 0;
        n = (n = n + Math.imul(I, V) | 0) + Math.imul(B, F) | 0;
        f = f + Math.imul(B, V) | 0;
        i = i + Math.imul(E, Z) | 0;
        n = (n = n + Math.imul(E, X) | 0) + Math.imul(A, Z) | 0;
        f = f + Math.imul(A, X) | 0;
        i = i + Math.imul(M, J) | 0;
        n = (n = n + Math.imul(M, Y) | 0) + Math.imul(S, J) | 0;
        f = f + Math.imul(S, Y) | 0;
        i = i + Math.imul(_, Q) | 0;
        n = (n = n + Math.imul(_, tt) | 0) + Math.imul(w, Q) | 0;
        f = f + Math.imul(w, tt) | 0;
        i = i + Math.imul(v, tr) | 0;
        n = (n = n + Math.imul(v, ti) | 0) + Math.imul(y, tr) | 0;
        f = f + Math.imul(y, ti) | 0;
        i = i + Math.imul(b, tf) | 0;
        n = (n = n + Math.imul(b, ta) | 0) + Math.imul(p, tf) | 0;
        f = f + Math.imul(p, ta) | 0;
        i = i + Math.imul(d, ts) | 0;
        var tM = (h + i | 0) + (((n = (n = n + Math.imul(d, th) | 0) + Math.imul(u, ts) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(u, th) | 0) + (n >>> 13) | 0) + (tM >>> 26) | 0;
        tM &= 67108863;
        i = Math.imul(O, U);
        n = (n = Math.imul(O, K)) + Math.imul(D, U) | 0;
        f = Math.imul(D, K);
        i = i + Math.imul(T, F) | 0;
        n = (n = n + Math.imul(T, V) | 0) + Math.imul(C, F) | 0;
        f = f + Math.imul(C, V) | 0;
        i = i + Math.imul(I, Z) | 0;
        n = (n = n + Math.imul(I, X) | 0) + Math.imul(B, Z) | 0;
        f = f + Math.imul(B, X) | 0;
        i = i + Math.imul(E, J) | 0;
        n = (n = n + Math.imul(E, Y) | 0) + Math.imul(A, J) | 0;
        f = f + Math.imul(A, Y) | 0;
        i = i + Math.imul(M, Q) | 0;
        n = (n = n + Math.imul(M, tt) | 0) + Math.imul(S, Q) | 0;
        f = f + Math.imul(S, tt) | 0;
        i = i + Math.imul(_, tr) | 0;
        n = (n = n + Math.imul(_, ti) | 0) + Math.imul(w, tr) | 0;
        f = f + Math.imul(w, ti) | 0;
        i = i + Math.imul(v, tf) | 0;
        n = (n = n + Math.imul(v, ta) | 0) + Math.imul(y, tf) | 0;
        f = f + Math.imul(y, ta) | 0;
        i = i + Math.imul(b, ts) | 0;
        n = (n = n + Math.imul(b, th) | 0) + Math.imul(p, ts) | 0;
        f = f + Math.imul(p, th) | 0;
        i = i + Math.imul(d, td) | 0;
        var tS = (h + i | 0) + (((n = (n = n + Math.imul(d, tu) | 0) + Math.imul(u, td) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(u, tu) | 0) + (n >>> 13) | 0) + (tS >>> 26) | 0;
        tS &= 67108863;
        i = Math.imul(q, U);
        n = (n = Math.imul(q, K)) + Math.imul(L, U) | 0;
        f = Math.imul(L, K);
        i = i + Math.imul(O, F) | 0;
        n = (n = n + Math.imul(O, V) | 0) + Math.imul(D, F) | 0;
        f = f + Math.imul(D, V) | 0;
        i = i + Math.imul(T, Z) | 0;
        n = (n = n + Math.imul(T, X) | 0) + Math.imul(C, Z) | 0;
        f = f + Math.imul(C, X) | 0;
        i = i + Math.imul(I, J) | 0;
        n = (n = n + Math.imul(I, Y) | 0) + Math.imul(B, J) | 0;
        f = f + Math.imul(B, Y) | 0;
        i = i + Math.imul(E, Q) | 0;
        n = (n = n + Math.imul(E, tt) | 0) + Math.imul(A, Q) | 0;
        f = f + Math.imul(A, tt) | 0;
        i = i + Math.imul(M, tr) | 0;
        n = (n = n + Math.imul(M, ti) | 0) + Math.imul(S, tr) | 0;
        f = f + Math.imul(S, ti) | 0;
        i = i + Math.imul(_, tf) | 0;
        n = (n = n + Math.imul(_, ta) | 0) + Math.imul(w, tf) | 0;
        f = f + Math.imul(w, ta) | 0;
        i = i + Math.imul(v, ts) | 0;
        n = (n = n + Math.imul(v, th) | 0) + Math.imul(y, ts) | 0;
        f = f + Math.imul(y, th) | 0;
        i = i + Math.imul(b, td) | 0;
        n = (n = n + Math.imul(b, tu) | 0) + Math.imul(p, td) | 0;
        f = f + Math.imul(p, tu) | 0;
        i = i + Math.imul(d, tb) | 0;
        var tk = (h + i | 0) + (((n = (n = n + Math.imul(d, tp) | 0) + Math.imul(u, tb) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(u, tp) | 0) + (n >>> 13) | 0) + (tk >>> 26) | 0;
        tk &= 67108863;
        i = Math.imul(q, F);
        n = (n = Math.imul(q, V)) + Math.imul(L, F) | 0;
        f = Math.imul(L, V);
        i = i + Math.imul(O, Z) | 0;
        n = (n = n + Math.imul(O, X) | 0) + Math.imul(D, Z) | 0;
        f = f + Math.imul(D, X) | 0;
        i = i + Math.imul(T, J) | 0;
        n = (n = n + Math.imul(T, Y) | 0) + Math.imul(C, J) | 0;
        f = f + Math.imul(C, Y) | 0;
        i = i + Math.imul(I, Q) | 0;
        n = (n = n + Math.imul(I, tt) | 0) + Math.imul(B, Q) | 0;
        f = f + Math.imul(B, tt) | 0;
        i = i + Math.imul(E, tr) | 0;
        n = (n = n + Math.imul(E, ti) | 0) + Math.imul(A, tr) | 0;
        f = f + Math.imul(A, ti) | 0;
        i = i + Math.imul(M, tf) | 0;
        n = (n = n + Math.imul(M, ta) | 0) + Math.imul(S, tf) | 0;
        f = f + Math.imul(S, ta) | 0;
        i = i + Math.imul(_, ts) | 0;
        n = (n = n + Math.imul(_, th) | 0) + Math.imul(w, ts) | 0;
        f = f + Math.imul(w, th) | 0;
        i = i + Math.imul(v, td) | 0;
        n = (n = n + Math.imul(v, tu) | 0) + Math.imul(y, td) | 0;
        f = f + Math.imul(y, tu) | 0;
        i = i + Math.imul(b, tb) | 0;
        var tE = (h + i | 0) + (((n = (n = n + Math.imul(b, tp) | 0) + Math.imul(p, tb) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(p, tp) | 0) + (n >>> 13) | 0) + (tE >>> 26) | 0;
        tE &= 67108863;
        i = Math.imul(q, Z);
        n = (n = Math.imul(q, X)) + Math.imul(L, Z) | 0;
        f = Math.imul(L, X);
        i = i + Math.imul(O, J) | 0;
        n = (n = n + Math.imul(O, Y) | 0) + Math.imul(D, J) | 0;
        f = f + Math.imul(D, Y) | 0;
        i = i + Math.imul(T, Q) | 0;
        n = (n = n + Math.imul(T, tt) | 0) + Math.imul(C, Q) | 0;
        f = f + Math.imul(C, tt) | 0;
        i = i + Math.imul(I, tr) | 0;
        n = (n = n + Math.imul(I, ti) | 0) + Math.imul(B, tr) | 0;
        f = f + Math.imul(B, ti) | 0;
        i = i + Math.imul(E, tf) | 0;
        n = (n = n + Math.imul(E, ta) | 0) + Math.imul(A, tf) | 0;
        f = f + Math.imul(A, ta) | 0;
        i = i + Math.imul(M, ts) | 0;
        n = (n = n + Math.imul(M, th) | 0) + Math.imul(S, ts) | 0;
        f = f + Math.imul(S, th) | 0;
        i = i + Math.imul(_, td) | 0;
        n = (n = n + Math.imul(_, tu) | 0) + Math.imul(w, td) | 0;
        f = f + Math.imul(w, tu) | 0;
        i = i + Math.imul(v, tb) | 0;
        var tA = (h + i | 0) + (((n = (n = n + Math.imul(v, tp) | 0) + Math.imul(y, tb) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(y, tp) | 0) + (n >>> 13) | 0) + (tA >>> 26) | 0;
        tA &= 67108863;
        i = Math.imul(q, J);
        n = (n = Math.imul(q, Y)) + Math.imul(L, J) | 0;
        f = Math.imul(L, Y);
        i = i + Math.imul(O, Q) | 0;
        n = (n = n + Math.imul(O, tt) | 0) + Math.imul(D, Q) | 0;
        f = f + Math.imul(D, tt) | 0;
        i = i + Math.imul(T, tr) | 0;
        n = (n = n + Math.imul(T, ti) | 0) + Math.imul(C, tr) | 0;
        f = f + Math.imul(C, ti) | 0;
        i = i + Math.imul(I, tf) | 0;
        n = (n = n + Math.imul(I, ta) | 0) + Math.imul(B, tf) | 0;
        f = f + Math.imul(B, ta) | 0;
        i = i + Math.imul(E, ts) | 0;
        n = (n = n + Math.imul(E, th) | 0) + Math.imul(A, ts) | 0;
        f = f + Math.imul(A, th) | 0;
        i = i + Math.imul(M, td) | 0;
        n = (n = n + Math.imul(M, tu) | 0) + Math.imul(S, td) | 0;
        f = f + Math.imul(S, tu) | 0;
        i = i + Math.imul(_, tb) | 0;
        var tR = (h + i | 0) + (((n = (n = n + Math.imul(_, tp) | 0) + Math.imul(w, tb) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(w, tp) | 0) + (n >>> 13) | 0) + (tR >>> 26) | 0;
        tR &= 67108863;
        i = Math.imul(q, Q);
        n = (n = Math.imul(q, tt)) + Math.imul(L, Q) | 0;
        f = Math.imul(L, tt);
        i = i + Math.imul(O, tr) | 0;
        n = (n = n + Math.imul(O, ti) | 0) + Math.imul(D, tr) | 0;
        f = f + Math.imul(D, ti) | 0;
        i = i + Math.imul(T, tf) | 0;
        n = (n = n + Math.imul(T, ta) | 0) + Math.imul(C, tf) | 0;
        f = f + Math.imul(C, ta) | 0;
        i = i + Math.imul(I, ts) | 0;
        n = (n = n + Math.imul(I, th) | 0) + Math.imul(B, ts) | 0;
        f = f + Math.imul(B, th) | 0;
        i = i + Math.imul(E, td) | 0;
        n = (n = n + Math.imul(E, tu) | 0) + Math.imul(A, td) | 0;
        f = f + Math.imul(A, tu) | 0;
        i = i + Math.imul(M, tb) | 0;
        var tI = (h + i | 0) + (((n = (n = n + Math.imul(M, tp) | 0) + Math.imul(S, tb) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(S, tp) | 0) + (n >>> 13) | 0) + (tI >>> 26) | 0;
        tI &= 67108863;
        i = Math.imul(q, tr);
        n = (n = Math.imul(q, ti)) + Math.imul(L, tr) | 0;
        f = Math.imul(L, ti);
        i = i + Math.imul(O, tf) | 0;
        n = (n = n + Math.imul(O, ta) | 0) + Math.imul(D, tf) | 0;
        f = f + Math.imul(D, ta) | 0;
        i = i + Math.imul(T, ts) | 0;
        n = (n = n + Math.imul(T, th) | 0) + Math.imul(C, ts) | 0;
        f = f + Math.imul(C, th) | 0;
        i = i + Math.imul(I, td) | 0;
        n = (n = n + Math.imul(I, tu) | 0) + Math.imul(B, td) | 0;
        f = f + Math.imul(B, tu) | 0;
        i = i + Math.imul(E, tb) | 0;
        var tB = (h + i | 0) + (((n = (n = n + Math.imul(E, tp) | 0) + Math.imul(A, tb) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(A, tp) | 0) + (n >>> 13) | 0) + (tB >>> 26) | 0;
        tB &= 67108863;
        i = Math.imul(q, tf);
        n = (n = Math.imul(q, ta)) + Math.imul(L, tf) | 0;
        f = Math.imul(L, ta);
        i = i + Math.imul(O, ts) | 0;
        n = (n = n + Math.imul(O, th) | 0) + Math.imul(D, ts) | 0;
        f = f + Math.imul(D, th) | 0;
        i = i + Math.imul(T, td) | 0;
        n = (n = n + Math.imul(T, tu) | 0) + Math.imul(C, td) | 0;
        f = f + Math.imul(C, tu) | 0;
        i = i + Math.imul(I, tb) | 0;
        var tP = (h + i | 0) + (((n = (n = n + Math.imul(I, tp) | 0) + Math.imul(B, tb) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(B, tp) | 0) + (n >>> 13) | 0) + (tP >>> 26) | 0;
        tP &= 67108863;
        i = Math.imul(q, ts);
        n = (n = Math.imul(q, th)) + Math.imul(L, ts) | 0;
        f = Math.imul(L, th);
        i = i + Math.imul(O, td) | 0;
        n = (n = n + Math.imul(O, tu) | 0) + Math.imul(D, td) | 0;
        f = f + Math.imul(D, tu) | 0;
        i = i + Math.imul(T, tb) | 0;
        var tT = (h + i | 0) + (((n = (n = n + Math.imul(T, tp) | 0) + Math.imul(C, tb) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(C, tp) | 0) + (n >>> 13) | 0) + (tT >>> 26) | 0;
        tT &= 67108863;
        i = Math.imul(q, td);
        n = (n = Math.imul(q, tu)) + Math.imul(L, td) | 0;
        f = Math.imul(L, tu);
        i = i + Math.imul(O, tb) | 0;
        var tC = (h + i | 0) + (((n = (n = n + Math.imul(O, tp) | 0) + Math.imul(D, tb) | 0) & 8191) << 13) | 0;
        h = ((f = f + Math.imul(D, tp) | 0) + (n >>> 13) | 0) + (tC >>> 26) | 0;
        tC &= 67108863;
        i = Math.imul(q, tb);
        var tj = (h + i | 0) + (((n = (n = Math.imul(q, tp)) + Math.imul(L, tb) | 0) & 8191) << 13) | 0;
        h = ((f = Math.imul(L, tp)) + (n >>> 13) | 0) + (tj >>> 26) | 0;
        tj &= 67108863;
        s[0] = tm;
        s[1] = tv;
        s[2] = ty;
        s[3] = tg;
        s[4] = t_;
        s[5] = tw;
        s[6] = tx;
        s[7] = tM;
        s[8] = tS;
        s[9] = tk;
        s[10] = tE;
        s[11] = tA;
        s[12] = tR;
        s[13] = tI;
        s[14] = tB;
        s[15] = tP;
        s[16] = tT;
        s[17] = tC;
        s[18] = tj;
        if (h !== 0) {
          s[19] = h;
          r.length++;
        }
        return r;
      }
      function m(t, e, r) {
        r.negative = e.negative ^ t.negative;
        r.length = t.length + e.length;
        var i = 0;
        var n = 0;
        for (var f = 0; f < r.length - 1; f++) {
          var a = n;
          n = 0;
          var o = i & 67108863;
          for (var s = Math.min(f, e.length - 1), h = Math.max(0, f - t.length + 1); h <= s; h++) {
            var c = f - h;
            var d = (t.words[c] | 0) * (e.words[h] | 0);
            var u = d & 67108863;
            a = a + (d / 67108864 | 0) | 0;
            o = (u = u + o | 0) & 67108863;
            n += (a = a + (u >>> 26) | 0) >>> 26;
            a &= 67108863;
          }
          r.words[f] = o;
          i = a;
          a = n;
        }
        if (i !== 0) {
          r.words[f] = i;
        } else {
          r.length--;
        }
        return r._strip();
      }
      function v(t, e) {
        this.x = t;
        this.y = e;
      }
      if (!Math.imul) {
        p = b;
      }
      f.prototype.mulTo = function (t, e) {
        var r;
        var i = this.length + t.length;
        if (this.length === 10 && t.length === 10) {
          r = p(this, t, e);
        } else if (i < 63) {
          r = b(this, t, e);
        } else {
          r = m(this, t, e);
        }
        return r;
      };
      v.prototype.makeRBT = function (t) {
        var e = Array(t);
        var r = f.prototype._countBits(t) - 1;
        for (var i = 0; i < t; i++) {
          e[i] = this.revBin(i, r, t);
        }
        return e;
      };
      v.prototype.revBin = function (t, e, r) {
        if (t === 0 || t === r - 1) {
          return t;
        }
        var i = 0;
        for (var n = 0; n < e; n++) {
          i |= (t & 1) << e - n - 1;
          t >>= 1;
        }
        return i;
      };
      v.prototype.permute = function (t, e, r, i, n, f) {
        for (var a = 0; a < f; a++) {
          i[a] = e[t[a]];
          n[a] = r[t[a]];
        }
      };
      v.prototype.transform = function (t, e, r, i, n, f) {
        this.permute(f, t, e, r, i, n);
        for (var a = 1; a < n; a <<= 1) {
          for (var o = a << 1, s = Math.cos(Math.PI * 2 / o), h = Math.sin(Math.PI * 2 / o), c = 0; c < n; c += o) {
            var d = s;
            var u = h;
            for (var l = 0; l < a; l++) {
              var b = r[c + l];
              var p = i[c + l];
              var m = r[c + l + a];
              var v = i[c + l + a];
              var y = d * m - u * v;
              v = d * v + u * m;
              m = y;
              r[c + l] = b + m;
              i[c + l] = p + v;
              r[c + l + a] = b - m;
              i[c + l + a] = p - v;
              if (l !== o) {
                y = s * d - h * u;
                u = s * u + h * d;
                d = y;
              }
            }
          }
        }
      };
      v.prototype.guessLen13b = function (t, e) {
        var r = Math.max(e, t) | 1;
        var i = r & 1;
        var n = 0;
        for (r = r / 2 | 0; r; r >>>= 1) {
          n++;
        }
        return 1 << n + 1 + i;
      };
      v.prototype.conjugate = function (t, e, r) {
        if (!(r <= 1)) {
          for (var i = 0; i < r / 2; i++) {
            var n = t[i];
            t[i] = t[r - i - 1];
            t[r - i - 1] = n;
            n = e[i];
            e[i] = -e[r - i - 1];
            e[r - i - 1] = -n;
          }
        }
      };
      v.prototype.normalize13b = function (t, e) {
        var r = 0;
        for (var i = 0; i < e / 2; i++) {
          var n = Math.round(t[i * 2 + 1] / e) * 8192 + Math.round(t[i * 2] / e) + r;
          t[i] = n & 67108863;
          r = n < 67108864 ? 0 : n / 67108864 | 0;
        }
        return t;
      };
      v.prototype.convert13b = function (t, e, r, n) {
        var f = 0;
        for (var a = 0; a < e; a++) {
          f += t[a] | 0;
          r[a * 2] = f & 8191;
          f >>>= 13;
          r[a * 2 + 1] = f & 8191;
          f >>>= 13;
        }
        for (a = e * 2; a < n; ++a) {
          r[a] = 0;
        }
        i(f === 0);
        i((f & -8192) == 0);
      };
      v.prototype.stub = function (t) {
        var e = Array(t);
        for (var r = 0; r < t; r++) {
          e[r] = 0;
        }
        return e;
      };
      v.prototype.mulp = function (t, e, r) {
        var i = this.guessLen13b(t.length, e.length) * 2;
        var n = this.makeRBT(i);
        var f = this.stub(i);
        var a = Array(i);
        var o = Array(i);
        var s = Array(i);
        var h = Array(i);
        var c = Array(i);
        var d = Array(i);
        var u = r.words;
        u.length = i;
        this.convert13b(t.words, t.length, a, i);
        this.convert13b(e.words, e.length, h, i);
        this.transform(a, f, o, s, i, n);
        this.transform(h, f, c, d, i, n);
        for (var l = 0; l < i; l++) {
          var b = o[l] * c[l] - s[l] * d[l];
          s[l] = o[l] * d[l] + s[l] * c[l];
          o[l] = b;
        }
        this.conjugate(o, s, i);
        this.transform(o, s, u, f, i, n);
        this.conjugate(u, f, i);
        this.normalize13b(u, i);
        r.negative = t.negative ^ e.negative;
        r.length = t.length + e.length;
        return r._strip();
      };
      f.prototype.mul = function (t) {
        var e = new f(null);
        e.words = Array(this.length + t.length);
        return this.mulTo(t, e);
      };
      f.prototype.mulf = function (t) {
        var e = new f(null);
        e.words = Array(this.length + t.length);
        return m(this, t, e);
      };
      f.prototype.imul = function (t) {
        return this.clone().mulTo(t, this);
      };
      f.prototype.imuln = function (t) {
        var e = t < 0;
        if (e) {
          t = -t;
        }
        i(typeof t == "number");
        i(t < 67108864);
        var r = 0;
        for (var n = 0; n < this.length; n++) {
          var f = (this.words[n] | 0) * t;
          var a = (f & 67108863) + (r & 67108863);
          r >>= 26;
          r += (f / 67108864 | 0) + (a >>> 26);
          this.words[n] = a & 67108863;
        }
        if (r !== 0) {
          this.words[n] = r;
          this.length++;
        }
        if (e) {
          return this.ineg();
        } else {
          return this;
        }
      };
      f.prototype.muln = function (t) {
        return this.clone().imuln(t);
      };
      f.prototype.sqr = function () {
        return this.mul(this);
      };
      f.prototype.isqr = function () {
        return this.imul(this.clone());
      };
      f.prototype.pow = function (t) {
        var e = function (t) {
          for (var e = Array(t.bitLength()), r = 0; r < e.length; r++) {
            var i = r / 26 | 0;
            var n = r % 26;
            e[r] = t.words[i] >>> n & 1;
          }
          return e;
        }(t);
        if (e.length === 0) {
          return new f(1);
        }
        for (var r = this, i = 0; i < e.length && e[i] === 0; r = r.sqr()) {
          i++;
        }
        if (++i < e.length) {
          for (var n = r.sqr(); i < e.length; i++, n = n.sqr()) {
            if (e[i] !== 0) {
              r = r.mul(n);
            }
          }
        }
        return r;
      };
      f.prototype.iushln = function (t) {
        i(typeof t == "number" && t >= 0);
        var e;
        var r = t % 26;
        var n = (t - r) / 26;
        var f = 67108863 >>> 26 - r << 26 - r;
        if (r !== 0) {
          var a = 0;
          for (e = 0; e < this.length; e++) {
            var o = this.words[e] & f;
            var s = (this.words[e] | 0) - o << r;
            this.words[e] = s | a;
            a = o >>> 26 - r;
          }
          if (a) {
            this.words[e] = a;
            this.length++;
          }
        }
        if (n !== 0) {
          for (e = this.length - 1; e >= 0; e--) {
            this.words[e + n] = this.words[e];
          }
          for (e = 0; e < n; e++) {
            this.words[e] = 0;
          }
          this.length += n;
        }
        return this._strip();
      };
      f.prototype.ishln = function (t) {
        i(this.negative === 0);
        return this.iushln(t);
      };
      f.prototype.iushrn = function (t, e, r) {
        i(typeof t == "number" && t >= 0);
        var n = e ? (e - e % 26) / 26 : 0;
        var f = t % 26;
        var a = Math.min((t - f) / 26, this.length);
        var o = 67108863 >>> f << f ^ 67108863;
        n -= a;
        n = Math.max(0, n);
        if (r) {
          for (var s = 0; s < a; s++) {
            r.words[s] = this.words[s];
          }
          r.length = a;
        }
        if (a === 0) ;else if (this.length > a) {
          this.length -= a;
          s = 0;
          for (; s < this.length; s++) {
            this.words[s] = this.words[s + a];
          }
        } else {
          this.words[0] = 0;
          this.length = 1;
        }
        var h = 0;
        for (s = this.length - 1; s >= 0 && (h !== 0 || s >= n); s--) {
          var c = this.words[s] | 0;
          this.words[s] = h << 26 - f | c >>> f;
          h = c & o;
        }
        if (r && h !== 0) {
          r.words[r.length++] = h;
        }
        if (this.length === 0) {
          this.words[0] = 0;
          this.length = 1;
        }
        return this._strip();
      };
      f.prototype.ishrn = function (t, e, r) {
        i(this.negative === 0);
        return this.iushrn(t, e, r);
      };
      f.prototype.shln = function (t) {
        return this.clone().ishln(t);
      };
      f.prototype.ushln = function (t) {
        return this.clone().iushln(t);
      };
      f.prototype.shrn = function (t) {
        return this.clone().ishrn(t);
      };
      f.prototype.ushrn = function (t) {
        return this.clone().iushrn(t);
      };
      f.prototype.testn = function (t) {
        i(typeof t == "number" && t >= 0);
        var e = t % 26;
        var r = (t - e) / 26;
        return !(this.length <= r) && !!(this.words[r] & 1 << e);
      };
      f.prototype.imaskn = function (t) {
        i(typeof t == "number" && t >= 0);
        var e = t % 26;
        var r = (t - e) / 26;
        i(this.negative === 0, "imaskn works only with positive numbers");
        if (this.length <= r) {
          return this;
        } else {
          if (e !== 0) {
            r++;
          }
          this.length = Math.min(r, this.length);
          if (e !== 0) {
            this.words[this.length - 1] &= 67108863 >>> e << e ^ 67108863;
          }
          return this._strip();
        }
      };
      f.prototype.maskn = function (t) {
        return this.clone().imaskn(t);
      };
      f.prototype.iaddn = function (t) {
        i(typeof t == "number");
        i(t < 67108864);
        if (t < 0) {
          return this.isubn(-t);
        } else if (this.negative !== 0) {
          if (this.length === 1 && (this.words[0] | 0) <= t) {
            this.words[0] = t - (this.words[0] | 0);
            this.negative = 0;
          } else {
            this.negative = 0;
            this.isubn(t);
            this.negative = 1;
          }
          return this;
        } else {
          return this._iaddn(t);
        }
      };
      f.prototype._iaddn = function (t) {
        this.words[0] += t;
        for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) {
          this.words[e] -= 67108864;
          if (e === this.length - 1) {
            this.words[e + 1] = 1;
          } else {
            this.words[e + 1]++;
          }
        }
        this.length = Math.max(this.length, e + 1);
        return this;
      };
      f.prototype.isubn = function (t) {
        i(typeof t == "number");
        i(t < 67108864);
        if (t < 0) {
          return this.iaddn(-t);
        }
        if (this.negative !== 0) {
          this.negative = 0;
          this.iaddn(t);
          this.negative = 1;
          return this;
        }
        this.words[0] -= t;
        if (this.length === 1 && this.words[0] < 0) {
          this.words[0] = -this.words[0];
          this.negative = 1;
        } else {
          for (var e = 0; e < this.length && this.words[e] < 0; e++) {
            this.words[e] += 67108864;
            this.words[e + 1] -= 1;
          }
        }
        return this._strip();
      };
      f.prototype.addn = function (t) {
        return this.clone().iaddn(t);
      };
      f.prototype.subn = function (t) {
        return this.clone().isubn(t);
      };
      f.prototype.iabs = function () {
        this.negative = 0;
        return this;
      };
      f.prototype.abs = function () {
        return this.clone().iabs();
      };
      f.prototype._ishlnsubmul = function (t, e, r) {
        var n;
        var f;
        var a = t.length + r;
        this._expand(a);
        var o = 0;
        for (n = 0; n < t.length; n++) {
          f = (this.words[n + r] | 0) + o;
          var s = (t.words[n] | 0) * e;
          f -= s & 67108863;
          o = (f >> 26) - (s / 67108864 | 0);
          this.words[n + r] = f & 67108863;
        }
        for (; n < this.length - r; n++) {
          o = (f = (this.words[n + r] | 0) + o) >> 26;
          this.words[n + r] = f & 67108863;
        }
        if (o === 0) {
          return this._strip();
        }
        i(o === -1);
        o = 0;
        n = 0;
        for (; n < this.length; n++) {
          o = (f = -(this.words[n] | 0) + o) >> 26;
          this.words[n] = f & 67108863;
        }
        this.negative = 1;
        return this._strip();
      };
      f.prototype._wordDiv = function (t, e) {
        var r;
        var i = this.length - t.length;
        var n = this.clone();
        var a = t;
        var o = a.words[a.length - 1] | 0;
        if ((i = 26 - this._countBits(o)) != 0) {
          a = a.ushln(i);
          n.iushln(i);
          o = a.words[a.length - 1] | 0;
        }
        var s = n.length - a.length;
        if (e !== "mod") {
          (r = new f(null)).length = s + 1;
          r.words = Array(r.length);
          for (var h = 0; h < r.length; h++) {
            r.words[h] = 0;
          }
        }
        var c = n.clone()._ishlnsubmul(a, 1, s);
        if (c.negative === 0) {
          n = c;
          if (r) {
            r.words[s] = 1;
          }
        }
        for (var d = s - 1; d >= 0; d--) {
          var u = (n.words[a.length + d] | 0) * 67108864 + (n.words[a.length + d - 1] | 0);
          u = Math.min(u / o | 0, 67108863);
          n._ishlnsubmul(a, u, d);
          while (n.negative !== 0) {
            u--;
            n.negative = 0;
            n._ishlnsubmul(a, 1, d);
            if (!n.isZero()) {
              n.negative ^= 1;
            }
          }
          if (r) {
            r.words[d] = u;
          }
        }
        if (r) {
          r._strip();
        }
        n._strip();
        if (e !== "div" && i !== 0) {
          n.iushrn(i);
        }
        return {
          div: r || null,
          mod: n
        };
      };
      f.prototype.divmod = function (t, e, r) {
        var n;
        var a;
        var o;
        i(!t.isZero());
        if (this.isZero()) {
          return {
            div: new f(0),
            mod: new f(0)
          };
        } else if (this.negative !== 0 && t.negative === 0) {
          o = this.neg().divmod(t, e);
          if (e !== "mod") {
            n = o.div.neg();
          }
          if (e !== "div") {
            a = o.mod.neg();
            if (r && a.negative !== 0) {
              a.iadd(t);
            }
          }
          return {
            div: n,
            mod: a
          };
        } else if (this.negative === 0 && t.negative !== 0) {
          o = this.divmod(t.neg(), e);
          if (e !== "mod") {
            n = o.div.neg();
          }
          return {
            div: n,
            mod: o.mod
          };
        } else if ((this.negative & t.negative) != 0) {
          o = this.neg().divmod(t.neg(), e);
          if (e !== "div") {
            a = o.mod.neg();
            if (r && a.negative !== 0) {
              a.isub(t);
            }
          }
          return {
            div: o.div,
            mod: a
          };
        } else if (t.length > this.length || this.cmp(t) < 0) {
          return {
            div: new f(0),
            mod: this
          };
        } else if (t.length === 1) {
          if (e === "div") {
            return {
              div: this.divn(t.words[0]),
              mod: null
            };
          } else if (e === "mod") {
            return {
              div: null,
              mod: new f(this.modrn(t.words[0]))
            };
          } else {
            return {
              div: this.divn(t.words[0]),
              mod: new f(this.modrn(t.words[0]))
            };
          }
        } else {
          return this._wordDiv(t, e);
        }
      };
      f.prototype.div = function (t) {
        return this.divmod(t, "div", false).div;
      };
      f.prototype.mod = function (t) {
        return this.divmod(t, "mod", false).mod;
      };
      f.prototype.umod = function (t) {
        return this.divmod(t, "mod", true).mod;
      };
      f.prototype.divRound = function (t) {
        var e = this.divmod(t);
        if (e.mod.isZero()) {
          return e.div;
        }
        var r = e.div.negative !== 0 ? e.mod.isub(t) : e.mod;
        var i = t.ushrn(1);
        var n = t.andln(1);
        var f = r.cmp(i);
        if (f < 0 || n === 1 && f === 0) {
          return e.div;
        } else if (e.div.negative !== 0) {
          return e.div.isubn(1);
        } else {
          return e.div.iaddn(1);
        }
      };
      f.prototype.modrn = function (t) {
        var e = t < 0;
        if (e) {
          t = -t;
        }
        i(t <= 67108863);
        var r = 67108864 % t;
        var n = 0;
        for (var f = this.length - 1; f >= 0; f--) {
          n = (r * n + (this.words[f] | 0)) % t;
        }
        if (e) {
          return -n;
        } else {
          return n;
        }
      };
      f.prototype.modn = function (t) {
        return this.modrn(t);
      };
      f.prototype.idivn = function (t) {
        var e = t < 0;
        if (e) {
          t = -t;
        }
        i(t <= 67108863);
        var r = 0;
        for (var n = this.length - 1; n >= 0; n--) {
          var f = (this.words[n] | 0) + r * 67108864;
          this.words[n] = f / t | 0;
          r = f % t;
        }
        this._strip();
        if (e) {
          return this.ineg();
        } else {
          return this;
        }
      };
      f.prototype.divn = function (t) {
        return this.clone().idivn(t);
      };
      f.prototype.egcd = function (t) {
        i(t.negative === 0);
        i(!t.isZero());
        var e = this;
        var r = t.clone();
        e = e.negative !== 0 ? e.umod(t) : e.clone();
        var n = new f(1);
        var a = new f(0);
        var o = new f(0);
        var s = new f(1);
        var h = 0;
        while (e.isEven() && r.isEven()) {
          e.iushrn(1);
          r.iushrn(1);
          ++h;
        }
        for (var c = r.clone(), d = e.clone(); !e.isZero();) {
          for (var u = 0, l = 1; (e.words[0] & l) == 0 && u < 26; l <<= 1) {
            ++u;
          }
          if (u > 0) {
            for (e.iushrn(u); u-- > 0;) {
              if (n.isOdd() || a.isOdd()) {
                n.iadd(c);
                a.isub(d);
              }
              n.iushrn(1);
              a.iushrn(1);
            }
          }
          for (var b = 0, p = 1; (r.words[0] & p) == 0 && b < 26; p <<= 1) {
            ++b;
          }
          if (b > 0) {
            for (r.iushrn(b); b-- > 0;) {
              if (o.isOdd() || s.isOdd()) {
                o.iadd(c);
                s.isub(d);
              }
              o.iushrn(1);
              s.iushrn(1);
            }
          }
          if (e.cmp(r) >= 0) {
            e.isub(r);
            n.isub(o);
            a.isub(s);
          } else {
            r.isub(e);
            o.isub(n);
            s.isub(a);
          }
        }
        return {
          a: o,
          b: s,
          gcd: r.iushln(h)
        };
      };
      f.prototype._invmp = function (t) {
        i(t.negative === 0);
        i(!t.isZero());
        var e;
        var r = this;
        var n = t.clone();
        r = r.negative !== 0 ? r.umod(t) : r.clone();
        for (var a = new f(1), o = new f(0), s = n.clone(); r.cmpn(1) > 0 && n.cmpn(1) > 0;) {
          for (var h = 0, c = 1; (r.words[0] & c) == 0 && h < 26; c <<= 1) {
            ++h;
          }
          if (h > 0) {
            for (r.iushrn(h); h-- > 0;) {
              if (a.isOdd()) {
                a.iadd(s);
              }
              a.iushrn(1);
            }
          }
          for (var d = 0, u = 1; (n.words[0] & u) == 0 && d < 26; u <<= 1) {
            ++d;
          }
          if (d > 0) {
            for (n.iushrn(d); d-- > 0;) {
              if (o.isOdd()) {
                o.iadd(s);
              }
              o.iushrn(1);
            }
          }
          if (r.cmp(n) >= 0) {
            r.isub(n);
            a.isub(o);
          } else {
            n.isub(r);
            o.isub(a);
          }
        }
        if ((e = r.cmpn(1) === 0 ? a : o).cmpn(0) < 0) {
          e.iadd(t);
        }
        return e;
      };
      f.prototype.gcd = function (t) {
        if (this.isZero()) {
          return t.abs();
        }
        if (t.isZero()) {
          return this.abs();
        }
        var e = this.clone();
        var r = t.clone();
        e.negative = 0;
        r.negative = 0;
        for (var i = 0; e.isEven() && r.isEven(); i++) {
          e.iushrn(1);
          r.iushrn(1);
        }
        while (true) {
          while (e.isEven()) {
            e.iushrn(1);
          }
          while (r.isEven()) {
            r.iushrn(1);
          }
          var n = e.cmp(r);
          if (n < 0) {
            var f = e;
            e = r;
            r = f;
          } else if (n === 0 || r.cmpn(1) === 0) {
            break;
          }
          e.isub(r);
        }
        return r.iushln(i);
      };
      f.prototype.invm = function (t) {
        return this.egcd(t).a.umod(t);
      };
      f.prototype.isEven = function () {
        return (this.words[0] & 1) == 0;
      };
      f.prototype.isOdd = function () {
        return (this.words[0] & 1) == 1;
      };
      f.prototype.andln = function (t) {
        return this.words[0] & t;
      };
      f.prototype.bincn = function (t) {
        i(typeof t == "number");
        var e = t % 26;
        var r = (t - e) / 26;
        var n = 1 << e;
        if (this.length <= r) {
          this._expand(r + 1);
          this.words[r] |= n;
          return this;
        }
        for (var f = n, a = r; f !== 0 && a < this.length; a++) {
          var o = this.words[a] | 0;
          o += f;
          f = o >>> 26;
          o &= 67108863;
          this.words[a] = o;
        }
        if (f !== 0) {
          this.words[a] = f;
          this.length++;
        }
        return this;
      };
      f.prototype.isZero = function () {
        return this.length === 1 && this.words[0] === 0;
      };
      f.prototype.cmpn = function (t) {
        var e;
        var r = t < 0;
        if (this.negative !== 0 && !r) {
          return -1;
        }
        if (this.negative === 0 && r) {
          return 1;
        }
        this._strip();
        if (this.length > 1) {
          e = 1;
        } else {
          if (r) {
            t = -t;
          }
          i(t <= 67108863, "Number is too big");
          var n = this.words[0] | 0;
          e = n === t ? 0 : n < t ? -1 : 1;
        }
        if (this.negative !== 0) {
          return -e | 0;
        } else {
          return e;
        }
      };
      f.prototype.cmp = function (t) {
        if (this.negative !== 0 && t.negative === 0) {
          return -1;
        }
        if (this.negative === 0 && t.negative !== 0) {
          return 1;
        }
        var e = this.ucmp(t);
        if (this.negative !== 0) {
          return -e | 0;
        } else {
          return e;
        }
      };
      f.prototype.ucmp = function (t) {
        if (this.length > t.length) {
          return 1;
        }
        if (this.length < t.length) {
          return -1;
        }
        var e = 0;
        for (var r = this.length - 1; r >= 0; r--) {
          var i = this.words[r] | 0;
          var n = t.words[r] | 0;
          if (i !== n) {
            if (i < n) {
              e = -1;
            } else if (i > n) {
              e = 1;
            }
            break;
          }
        }
        return e;
      };
      f.prototype.gtn = function (t) {
        return this.cmpn(t) === 1;
      };
      f.prototype.gt = function (t) {
        return this.cmp(t) === 1;
      };
      f.prototype.gten = function (t) {
        return this.cmpn(t) >= 0;
      };
      f.prototype.gte = function (t) {
        return this.cmp(t) >= 0;
      };
      f.prototype.ltn = function (t) {
        return this.cmpn(t) === -1;
      };
      f.prototype.lt = function (t) {
        return this.cmp(t) === -1;
      };
      f.prototype.lten = function (t) {
        return this.cmpn(t) <= 0;
      };
      f.prototype.lte = function (t) {
        return this.cmp(t) <= 0;
      };
      f.prototype.eqn = function (t) {
        return this.cmpn(t) === 0;
      };
      f.prototype.eq = function (t) {
        return this.cmp(t) === 0;
      };
      f.red = function (t) {
        return new S(t);
      };
      f.prototype.toRed = function (t) {
        i(!this.red, "Already a number in reduction context");
        i(this.negative === 0, "red works only with positives");
        return t.convertTo(this)._forceRed(t);
      };
      f.prototype.fromRed = function () {
        i(this.red, "fromRed works only with numbers in reduction context");
        return this.red.convertFrom(this);
      };
      f.prototype._forceRed = function (t) {
        this.red = t;
        return this;
      };
      f.prototype.forceRed = function (t) {
        i(!this.red, "Already a number in reduction context");
        return this._forceRed(t);
      };
      f.prototype.redAdd = function (t) {
        i(this.red, "redAdd works only with red numbers");
        return this.red.add(this, t);
      };
      f.prototype.redIAdd = function (t) {
        i(this.red, "redIAdd works only with red numbers");
        return this.red.iadd(this, t);
      };
      f.prototype.redSub = function (t) {
        i(this.red, "redSub works only with red numbers");
        return this.red.sub(this, t);
      };
      f.prototype.redISub = function (t) {
        i(this.red, "redISub works only with red numbers");
        return this.red.isub(this, t);
      };
      f.prototype.redShl = function (t) {
        i(this.red, "redShl works only with red numbers");
        return this.red.shl(this, t);
      };
      f.prototype.redMul = function (t) {
        i(this.red, "redMul works only with red numbers");
        this.red._verify2(this, t);
        return this.red.mul(this, t);
      };
      f.prototype.redIMul = function (t) {
        i(this.red, "redMul works only with red numbers");
        this.red._verify2(this, t);
        return this.red.imul(this, t);
      };
      f.prototype.redSqr = function () {
        i(this.red, "redSqr works only with red numbers");
        this.red._verify1(this);
        return this.red.sqr(this);
      };
      f.prototype.redISqr = function () {
        i(this.red, "redISqr works only with red numbers");
        this.red._verify1(this);
        return this.red.isqr(this);
      };
      f.prototype.redSqrt = function () {
        i(this.red, "redSqrt works only with red numbers");
        this.red._verify1(this);
        return this.red.sqrt(this);
      };
      f.prototype.redInvm = function () {
        i(this.red, "redInvm works only with red numbers");
        this.red._verify1(this);
        return this.red.invm(this);
      };
      f.prototype.redNeg = function () {
        i(this.red, "redNeg works only with red numbers");
        this.red._verify1(this);
        return this.red.neg(this);
      };
      f.prototype.redPow = function (t) {
        i(this.red && !t.red, "redPow(normalNum)");
        this.red._verify1(this);
        return this.red.pow(this, t);
      };
      var y = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
      };
      function g(t, e) {
        this.name = t;
        this.p = new f(e, 16);
        this.n = this.p.bitLength();
        this.k = new f(1).iushln(this.n).isub(this.p);
        this.tmp = this._tmp();
      }
      function _() {
        g.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
      }
      function w() {
        g.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
      }
      function x() {
        g.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
      }
      function M() {
        g.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
      }
      function S(t) {
        if (typeof t == "string") {
          var e = f._prime(t);
          this.m = e.p;
          this.prime = e;
        } else {
          i(t.gtn(1), "modulus must be greater than 1");
          this.m = t;
          this.prime = null;
        }
      }
      function k(t) {
        S.call(this, t);
        this.shift = this.m.bitLength();
        if (this.shift % 26 != 0) {
          this.shift += 26 - this.shift % 26;
        }
        this.r = new f(1).iushln(this.shift);
        this.r2 = this.imod(this.r.sqr());
        this.rinv = this.r._invmp(this.m);
        this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
        this.minv = this.minv.umod(this.r);
        this.minv = this.r.sub(this.minv);
      }
      g.prototype._tmp = function () {
        var t = new f(null);
        t.words = Array(Math.ceil(this.n / 13));
        return t;
      };
      g.prototype.ireduce = function (t) {
        var e;
        var r = t;
        do {
          this.split(r, this.tmp);
          e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength();
        } while (e > this.n);
        var i = e < this.n ? -1 : r.ucmp(this.p);
        if (i === 0) {
          r.words[0] = 0;
          r.length = 1;
        } else if (i > 0) {
          r.isub(this.p);
        } else if (r.strip !== undefined) {
          r.strip();
        } else {
          r._strip();
        }
        return r;
      };
      g.prototype.split = function (t, e) {
        t.iushrn(this.n, 0, e);
      };
      g.prototype.imulK = function (t) {
        return t.imul(this.k);
      };
      n(_, g);
      _.prototype.split = function (t, e) {
        for (var r = Math.min(t.length, 9), i = 0; i < r; i++) {
          e.words[i] = t.words[i];
        }
        e.length = r;
        if (t.length <= 9) {
          t.words[0] = 0;
          t.length = 1;
          return;
        }
        var n = t.words[9];
        i = 10;
        e.words[e.length++] = n & 4194303;
        for (; i < t.length; i++) {
          var f = t.words[i] | 0;
          t.words[i - 10] = (f & 4194303) << 4 | n >>> 22;
          n = f;
        }
        n >>>= 22;
        t.words[i - 10] = n;
        if (n === 0 && t.length > 10) {
          t.length -= 10;
        } else {
          t.length -= 9;
        }
      };
      _.prototype.imulK = function (t) {
        t.words[t.length] = 0;
        t.words[t.length + 1] = 0;
        t.length += 2;
        var e = 0;
        for (var r = 0; r < t.length; r++) {
          var i = t.words[r] | 0;
          e += i * 977;
          t.words[r] = e & 67108863;
          e = i * 64 + (e / 67108864 | 0);
        }
        if (t.words[t.length - 1] === 0) {
          t.length--;
          if (t.words[t.length - 1] === 0) {
            t.length--;
          }
        }
        return t;
      };
      n(w, g);
      n(x, g);
      n(M, g);
      M.prototype.imulK = function (t) {
        var e = 0;
        for (var r = 0; r < t.length; r++) {
          var i = (t.words[r] | 0) * 19 + e;
          var n = i & 67108863;
          i >>>= 26;
          t.words[r] = n;
          e = i;
        }
        if (e !== 0) {
          t.words[t.length++] = e;
        }
        return t;
      };
      f._prime = function (t) {
        var e;
        if (y[t]) {
          return y[t];
        }
        if (t === "k256") {
          e = new _();
        } else if (t === "p224") {
          e = new w();
        } else if (t === "p192") {
          e = new x();
        } else if (t === "p25519") {
          e = new M();
        } else {
          throw Error("Unknown prime " + t);
        }
        y[t] = e;
        return e;
      };
      S.prototype._verify1 = function (t) {
        i(t.negative === 0, "red works only with positives");
        i(t.red, "red works only with red numbers");
      };
      S.prototype._verify2 = function (t, e) {
        i((t.negative | e.negative) == 0, "red works only with positives");
        i(t.red && t.red === e.red, "red works only with red numbers");
      };
      S.prototype.imod = function (t) {
        if (this.prime) {
          return this.prime.ireduce(t)._forceRed(this);
        } else {
          s(t, t.umod(this.m)._forceRed(this));
          return t;
        }
      };
      S.prototype.neg = function (t) {
        if (t.isZero()) {
          return t.clone();
        } else {
          return this.m.sub(t)._forceRed(this);
        }
      };
      S.prototype.add = function (t, e) {
        this._verify2(t, e);
        var r = t.add(e);
        if (r.cmp(this.m) >= 0) {
          r.isub(this.m);
        }
        return r._forceRed(this);
      };
      S.prototype.iadd = function (t, e) {
        this._verify2(t, e);
        var r = t.iadd(e);
        if (r.cmp(this.m) >= 0) {
          r.isub(this.m);
        }
        return r;
      };
      S.prototype.sub = function (t, e) {
        this._verify2(t, e);
        var r = t.sub(e);
        if (r.cmpn(0) < 0) {
          r.iadd(this.m);
        }
        return r._forceRed(this);
      };
      S.prototype.isub = function (t, e) {
        this._verify2(t, e);
        var r = t.isub(e);
        if (r.cmpn(0) < 0) {
          r.iadd(this.m);
        }
        return r;
      };
      S.prototype.shl = function (t, e) {
        this._verify1(t);
        return this.imod(t.ushln(e));
      };
      S.prototype.imul = function (t, e) {
        this._verify2(t, e);
        return this.imod(t.imul(e));
      };
      S.prototype.mul = function (t, e) {
        this._verify2(t, e);
        return this.imod(t.mul(e));
      };
      S.prototype.isqr = function (t) {
        return this.imul(t, t.clone());
      };
      S.prototype.sqr = function (t) {
        return this.mul(t, t);
      };
      S.prototype.sqrt = function (t) {
        if (t.isZero()) {
          return t.clone();
        }
        var e = this.m.andln(3);
        i(e % 2 == 1);
        if (e === 3) {
          var r = this.m.add(new f(1)).iushrn(2);
          return this.pow(t, r);
        }
        for (var n = this.m.subn(1), a = 0; !n.isZero() && n.andln(1) === 0;) {
          a++;
          n.iushrn(1);
        }
        i(!n.isZero());
        var o = new f(1).toRed(this);
        var s = o.redNeg();
        var h = this.m.subn(1).iushrn(1);
        var c = this.m.bitLength();
        for (c = new f(c * 2 * c).toRed(this); this.pow(c, h).cmp(s) !== 0;) {
          c.redIAdd(s);
        }
        var d = this.pow(c, n);
        var u = this.pow(t, n.addn(1).iushrn(1));
        for (var l = this.pow(t, n), b = a; l.cmp(o) !== 0;) {
          for (var p = l, m = 0; p.cmp(o) !== 0; m++) {
            p = p.redSqr();
          }
          i(m < b);
          var v = this.pow(d, new f(1).iushln(b - m - 1));
          u = u.redMul(v);
          d = v.redSqr();
          l = l.redMul(d);
          b = m;
        }
        return u;
      };
      S.prototype.invm = function (t) {
        var e = t._invmp(this.m);
        if (e.negative !== 0) {
          e.negative = 0;
          return this.imod(e).redNeg();
        } else {
          return this.imod(e);
        }
      };
      S.prototype.pow = function (t, e) {
        if (e.isZero()) {
          return new f(1).toRed(this);
        }
        if (e.cmpn(1) === 0) {
          return t.clone();
        }
        var r = Array(16);
        r[0] = new f(1).toRed(this);
        r[1] = t;
        for (var i = 2; i < r.length; i++) {
          r[i] = this.mul(r[i - 1], t);
        }
        var n = r[0];
        var a = 0;
        var o = 0;
        var s = e.bitLength() % 26;
        if (s === 0) {
          s = 26;
        }
        i = e.length - 1;
        for (; i >= 0; i--) {
          var h = e.words[i];
          for (var c = s - 1; c >= 0; c--) {
            var d = h >> c & 1;
            if (n !== r[0]) {
              n = this.sqr(n);
            }
            if (d === 0 && a === 0) {
              o = 0;
              continue;
            }
            a <<= 1;
            a |= d;
            if (++o == 4 || i === 0 && c === 0) {
              n = this.mul(n, r[a]);
              o = 0;
              a = 0;
            }
          }
          s = 26;
        }
        return n;
      };
      S.prototype.convertTo = function (t) {
        var e = t.umod(this.m);
        if (e === t) {
          return e.clone();
        } else {
          return e;
        }
      };
      S.prototype.convertFrom = function (t) {
        var e = t.clone();
        e.red = null;
        return e;
      };
      f.mont = function (t) {
        return new k(t);
      };
      n(k, S);
      k.prototype.convertTo = function (t) {
        return this.imod(t.ushln(this.shift));
      };
      k.prototype.convertFrom = function (t) {
        var e = this.imod(t.mul(this.rinv));
        e.red = null;
        return e;
      };
      k.prototype.imul = function (t, e) {
        if (t.isZero() || e.isZero()) {
          t.words[0] = 0;
          t.length = 1;
          return t;
        }
        var r = t.imul(e);
        var i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var n = r.isub(i).iushrn(this.shift);
        var f = n;
        if (n.cmp(this.m) >= 0) {
          f = n.isub(this.m);
        } else if (n.cmpn(0) < 0) {
          f = n.iadd(this.m);
        }
        return f._forceRed(this);
      };
      k.prototype.mul = function (t, e) {
        if (t.isZero() || e.isZero()) {
          return new f(0)._forceRed(this);
        }
        var r = t.mul(e);
        var i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var n = r.isub(i).iushrn(this.shift);
        var a = n;
        if (n.cmp(this.m) >= 0) {
          a = n.isub(this.m);
        } else if (n.cmpn(0) < 0) {
          a = n.iadd(this.m);
        }
        return a._forceRed(this);
      };
      k.prototype.invm = function (t) {
        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
      };
    })(t = r.nmd(t), this);
  },
  3500: function (t, e, r) {
    var i;
    function n(t) {
      this.rand = t;
    }
    t.exports = function (t) {
      i ||= new n(null);
      return i.generate(t);
    };
    t.exports.Rand = n;
    n.prototype.generate = function (t) {
      return this._rand(t);
    };
    n.prototype._rand = function (t) {
      if (this.rand.getBytes) {
        return this.rand.getBytes(t);
      }
      for (var e = new Uint8Array(t), r = 0; r < e.length; r++) {
        e[r] = this.rand.getByte();
      }
      return e;
    };
    if (typeof self == "object") {
      if (self.crypto && self.crypto.getRandomValues) {
        n.prototype._rand = function (t) {
          var e = new Uint8Array(t);
          self.crypto.getRandomValues(e);
          return e;
        };
      } else if (self.msCrypto && self.msCrypto.getRandomValues) {
        n.prototype._rand = function (t) {
          var e = new Uint8Array(t);
          self.msCrypto.getRandomValues(e);
          return e;
        };
      } else if (typeof window == "object") {
        n.prototype._rand = function () {
          throw Error("Not implemented yet");
        };
      }
    } else {
      try {
        var f = r(6113);
        if (typeof f.randomBytes != "function") {
          throw Error("Not supported");
        }
        n.prototype._rand = function (t) {
          return f.randomBytes(t);
        };
      } catch (t) {}
    }
  },
  1387: function (t, e, r) {
    var i = r(6911).Buffer;
    function n(t) {
      if (!i.isBuffer(t)) {
        t = i.from(t);
      }
      for (var e = t.length / 4 | 0, r = Array(e), n = 0; n < e; n++) {
        r[n] = t.readUInt32BE(n * 4);
      }
      return r;
    }
    function f(t) {
      for (; t.length > 0; t++) {
        t[0] = 0;
      }
    }
    function a(t, e, r, i, n) {
      var f;
      var a;
      var o;
      var s;
      var h = r[0];
      var c = r[1];
      var d = r[2];
      var u = r[3];
      var l = t[0] ^ e[0];
      var b = t[1] ^ e[1];
      var p = t[2] ^ e[2];
      var m = t[3] ^ e[3];
      var v = 4;
      for (var y = 1; y < n; y++) {
        f = h[l >>> 24] ^ c[b >>> 16 & 255] ^ d[p >>> 8 & 255] ^ u[m & 255] ^ e[v++];
        a = h[b >>> 24] ^ c[p >>> 16 & 255] ^ d[m >>> 8 & 255] ^ u[l & 255] ^ e[v++];
        o = h[p >>> 24] ^ c[m >>> 16 & 255] ^ d[l >>> 8 & 255] ^ u[b & 255] ^ e[v++];
        s = h[m >>> 24] ^ c[l >>> 16 & 255] ^ d[b >>> 8 & 255] ^ u[p & 255] ^ e[v++];
        l = f;
        b = a;
        p = o;
        m = s;
      }
      f = (i[l >>> 24] << 24 | i[b >>> 16 & 255] << 16 | i[p >>> 8 & 255] << 8 | i[m & 255]) ^ e[v++];
      a = (i[b >>> 24] << 24 | i[p >>> 16 & 255] << 16 | i[m >>> 8 & 255] << 8 | i[l & 255]) ^ e[v++];
      o = (i[p >>> 24] << 24 | i[m >>> 16 & 255] << 16 | i[l >>> 8 & 255] << 8 | i[b & 255]) ^ e[v++];
      return [f >>>= 0, a >>>= 0, o >>>= 0, s = ((i[m >>> 24] << 24 | i[l >>> 16 & 255] << 16 | i[b >>> 8 & 255] << 8 | i[p & 255]) ^ e[v++]) >>> 0];
    }
    var o = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
    var s = function () {
      var t = Array(256);
      for (var e = 0; e < 256; e++) {
        if (e < 128) {
          t[e] = e << 1;
        } else {
          t[e] = e << 1 ^ 283;
        }
      }
      var r = [];
      var i = [];
      var n = [[], [], [], []];
      var f = [[], [], [], []];
      var a = 0;
      var o = 0;
      for (var s = 0; s < 256; ++s) {
        var h = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4;
        h = h >>> 8 ^ h & 255 ^ 99;
        r[a] = h;
        i[h] = a;
        var c = t[a];
        var d = t[c];
        var u = t[d];
        var l = t[h] * 257 ^ h * 16843008;
        n[0][a] = l << 24 | l >>> 8;
        n[1][a] = l << 16 | l >>> 16;
        n[2][a] = l << 8 | l >>> 24;
        n[3][a] = l;
        l = u * 16843009 ^ d * 65537 ^ c * 257 ^ a * 16843008;
        f[0][h] = l << 24 | l >>> 8;
        f[1][h] = l << 16 | l >>> 16;
        f[2][h] = l << 8 | l >>> 24;
        f[3][h] = l;
        if (a === 0) {
          a = o = 1;
        } else {
          a = c ^ t[t[t[u ^ c]]];
          o ^= t[t[o]];
        }
      }
      return {
        SBOX: r,
        INV_SBOX: i,
        SUB_MIX: n,
        INV_SUB_MIX: f
      };
    }();
    function h(t) {
      this._key = n(t);
      this._reset();
    }
    h.blockSize = 16;
    h.keySize = 32;
    h.prototype.blockSize = h.blockSize;
    h.prototype.keySize = h.keySize;
    h.prototype._reset = function () {
      var t = this._key;
      for (var e = t.length, r = e + 6, i = (r + 1) * 4, n = [], f = 0; f < e; f++) {
        n[f] = t[f];
      }
      for (f = e; f < i; f++) {
        var a = n[f - 1];
        if (f % e == 0) {
          a = a << 8 | a >>> 24;
          a = (s.SBOX[a >>> 24] << 24 | s.SBOX[a >>> 16 & 255] << 16 | s.SBOX[a >>> 8 & 255] << 8 | s.SBOX[a & 255]) ^ o[f / e | 0] << 24;
        } else if (e > 6 && f % e == 4) {
          a = s.SBOX[a >>> 24] << 24 | s.SBOX[a >>> 16 & 255] << 16 | s.SBOX[a >>> 8 & 255] << 8 | s.SBOX[a & 255];
        }
        n[f] = n[f - e] ^ a;
      }
      var h = [];
      for (var c = 0; c < i; c++) {
        var d = i - c;
        var u = n[d - (c % 4 ? 0 : 4)];
        if (c < 4 || d <= 4) {
          h[c] = u;
        } else {
          h[c] = s.INV_SUB_MIX[0][s.SBOX[u >>> 24]] ^ s.INV_SUB_MIX[1][s.SBOX[u >>> 16 & 255]] ^ s.INV_SUB_MIX[2][s.SBOX[u >>> 8 & 255]] ^ s.INV_SUB_MIX[3][s.SBOX[u & 255]];
        }
      }
      this._nRounds = r;
      this._keySchedule = n;
      this._invKeySchedule = h;
    };
    h.prototype.encryptBlockRaw = function (t) {
      return a(t = n(t), this._keySchedule, s.SUB_MIX, s.SBOX, this._nRounds);
    };
    h.prototype.encryptBlock = function (t) {
      var e = this.encryptBlockRaw(t);
      var r = i.allocUnsafe(16);
      r.writeUInt32BE(e[0], 0);
      r.writeUInt32BE(e[1], 4);
      r.writeUInt32BE(e[2], 8);
      r.writeUInt32BE(e[3], 12);
      return r;
    };
    h.prototype.decryptBlock = function (t) {
      var e = (t = n(t))[1];
      t[1] = t[3];
      t[3] = e;
      var r = a(t, this._invKeySchedule, s.INV_SUB_MIX, s.INV_SBOX, this._nRounds);
      var f = i.allocUnsafe(16);
      f.writeUInt32BE(r[0], 0);
      f.writeUInt32BE(r[3], 4);
      f.writeUInt32BE(r[2], 8);
      f.writeUInt32BE(r[1], 12);
      return f;
    };
    h.prototype.scrub = function () {
      f(this._keySchedule);
      f(this._invKeySchedule);
      f(this._key);
    };
    t.exports.AES = h;
  },
  6624: function (t, e, r) {
    var i = r(1387);
    var n = r(6911).Buffer;
    var f = r(1043);
    var a = r(3782);
    var o = r(7225);
    var s = r(4734);
    var h = r(598);
    function c(t, e, r, a) {
      f.call(this);
      var s = n.alloc(4, 0);
      this._cipher = new i.AES(e);
      var c = this._cipher.encryptBlock(s);
      this._ghash = new o(c);
      r = function (t, e, r) {
        if (e.length === 12) {
          t._finID = n.concat([e, n.from([0, 0, 0, 1])]);
          return n.concat([e, n.from([0, 0, 0, 2])]);
        }
        var i = new o(r);
        var f = e.length;
        var a = f % 16;
        i.update(e);
        if (a) {
          a = 16 - a;
          i.update(n.alloc(a, 0));
        }
        i.update(n.alloc(8, 0));
        var s = n.alloc(8);
        s.writeUIntBE(f * 8, 0, 8);
        i.update(s);
        t._finID = i.state;
        var c = n.from(t._finID);
        h(c);
        return c;
      }(this, r, c);
      this._prev = n.from(r);
      this._cache = n.allocUnsafe(0);
      this._secCache = n.allocUnsafe(0);
      this._decrypt = a;
      this._alen = 0;
      this._len = 0;
      this._mode = t;
      this._authTag = null;
      this._called = false;
    }
    a(c, f);
    c.prototype._update = function (t) {
      if (!this._called && this._alen) {
        var e = 16 - this._alen % 16;
        if (e < 16) {
          e = n.alloc(e, 0);
          this._ghash.update(e);
        }
      }
      this._called = true;
      var r = this._mode.encrypt(this, t);
      if (this._decrypt) {
        this._ghash.update(t);
      } else {
        this._ghash.update(r);
      }
      this._len += t.length;
      return r;
    };
    c.prototype._final = function () {
      if (this._decrypt && !this._authTag) {
        throw Error("Unsupported state or unable to authenticate data");
      }
      var t = s(this._ghash.final(this._alen * 8, this._len * 8), this._cipher.encryptBlock(this._finID));
      if (this._decrypt && function (t, e) {
        var r = 0;
        if (t.length !== e.length) {
          r++;
        }
        for (var i = Math.min(t.length, e.length), n = 0; n < i; ++n) {
          r += t[n] ^ e[n];
        }
        return r;
      }(t, this._authTag)) {
        throw Error("Unsupported state or unable to authenticate data");
      }
      this._authTag = t;
      this._cipher.scrub();
    };
    c.prototype.getAuthTag = function () {
      if (this._decrypt || !n.isBuffer(this._authTag)) {
        throw Error("Attempting to get auth tag in unsupported state");
      }
      return this._authTag;
    };
    c.prototype.setAuthTag = function (t) {
      if (!this._decrypt) {
        throw Error("Attempting to set auth tag in unsupported state");
      }
      this._authTag = t;
    };
    c.prototype.setAAD = function (t) {
      if (this._called) {
        throw Error("Attempting to set AAD in unsupported state");
      }
      this._ghash.update(t);
      this._alen += t.length;
    };
    t.exports = c;
  },
  6594: function (t, e, r) {
    var i = r(2);
    var n = r(2598);
    var f = r(5866);
    e.createCipher = e.Cipher = i.createCipher;
    e.createCipheriv = e.Cipheriv = i.createCipheriv;
    e.createDecipher = e.Decipher = n.createDecipher;
    e.createDecipheriv = e.Decipheriv = n.createDecipheriv;
    e.listCiphers = e.getCiphers = function () {
      return Object.keys(f);
    };
  },
  2598: function (t, e, r) {
    var i = r(6624);
    var n = r(6911).Buffer;
    var f = r(6370);
    var a = r(126);
    var o = r(1043);
    var s = r(1387);
    var h = r(8368);
    function c(t, e, r) {
      o.call(this);
      this._cache = new d();
      this._last = undefined;
      this._cipher = new s.AES(e);
      this._prev = n.from(r);
      this._mode = t;
      this._autopadding = true;
    }
    function d() {
      this.cache = n.allocUnsafe(0);
    }
    function u(t, e, r) {
      var o = f[t.toLowerCase()];
      if (!o) {
        throw TypeError("invalid suite type");
      }
      if (typeof r == "string") {
        r = n.from(r);
      }
      if (o.mode !== "GCM" && r.length !== o.iv) {
        throw TypeError("invalid iv length " + r.length);
      }
      if (typeof e == "string") {
        e = n.from(e);
      }
      if (e.length !== o.key / 8) {
        throw TypeError("invalid key length " + e.length);
      }
      if (o.type === "stream") {
        return new a(o.module, e, r, true);
      } else if (o.type === "auth") {
        return new i(o.module, e, r, true);
      } else {
        return new c(o.module, e, r);
      }
    }
    r(3782)(c, o);
    c.prototype._update = function (t) {
      this._cache.add(t);
      for (var e, r, i = []; e = this._cache.get(this._autopadding);) {
        r = this._mode.decrypt(this, e);
        i.push(r);
      }
      return n.concat(i);
    };
    c.prototype._final = function () {
      var t = this._cache.flush();
      if (this._autopadding) {
        var e = this._mode.decrypt(this, t);
        var r = e[15];
        if (r < 1 || r > 16) {
          throw Error("unable to decrypt data");
        }
        for (var i = -1; ++i < r;) {
          if (e[i + (16 - r)] !== r) {
            throw Error("unable to decrypt data");
          }
        }
        if (r !== 16) {
          return e.slice(0, 16 - r);
        } else {
          return undefined;
        }
      }
      if (t) {
        throw Error("data not multiple of block length");
      }
    };
    c.prototype.setAutoPadding = function (t) {
      this._autopadding = !!t;
      return this;
    };
    d.prototype.add = function (t) {
      this.cache = n.concat([this.cache, t]);
    };
    d.prototype.get = function (t) {
      var e;
      if (t) {
        if (this.cache.length > 16) {
          e = this.cache.slice(0, 16);
          this.cache = this.cache.slice(16);
          return e;
        }
      } else if (this.cache.length >= 16) {
        e = this.cache.slice(0, 16);
        this.cache = this.cache.slice(16);
        return e;
      }
      return null;
    };
    d.prototype.flush = function () {
      if (this.cache.length) {
        return this.cache;
      }
    };
    e.createDecipher = function (t, e) {
      var r = f[t.toLowerCase()];
      if (!r) {
        throw TypeError("invalid suite type");
      }
      var i = h(e, false, r.key, r.iv);
      return u(t, i.key, i.iv);
    };
    e.createDecipheriv = u;
  },
  2: function (t, e, r) {
    var i = r(6370);
    var n = r(6624);
    var f = r(6911).Buffer;
    var a = r(126);
    var o = r(1043);
    var s = r(1387);
    var h = r(8368);
    function c(t, e, r) {
      o.call(this);
      this._cache = new u();
      this._cipher = new s.AES(e);
      this._prev = f.from(r);
      this._mode = t;
      this._autopadding = true;
    }
    r(3782)(c, o);
    c.prototype._update = function (t) {
      this._cache.add(t);
      for (var e, r, i = []; e = this._cache.get();) {
        r = this._mode.encrypt(this, e);
        i.push(r);
      }
      return f.concat(i);
    };
    var d = f.alloc(16, 16);
    function u() {
      this.cache = f.allocUnsafe(0);
    }
    function l(t, e, r) {
      var o = i[t.toLowerCase()];
      if (!o) {
        throw TypeError("invalid suite type");
      }
      if (typeof e == "string") {
        e = f.from(e);
      }
      if (e.length !== o.key / 8) {
        throw TypeError("invalid key length " + e.length);
      }
      if (typeof r == "string") {
        r = f.from(r);
      }
      if (o.mode !== "GCM" && r.length !== o.iv) {
        throw TypeError("invalid iv length " + r.length);
      }
      if (o.type === "stream") {
        return new a(o.module, e, r);
      } else if (o.type === "auth") {
        return new n(o.module, e, r);
      } else {
        return new c(o.module, e, r);
      }
    }
    c.prototype._final = function () {
      var t = this._cache.flush();
      if (this._autopadding) {
        t = this._mode.encrypt(this, t);
        this._cipher.scrub();
        return t;
      }
      if (!t.equals(d)) {
        this._cipher.scrub();
        throw Error("data not multiple of block length");
      }
    };
    c.prototype.setAutoPadding = function (t) {
      this._autopadding = !!t;
      return this;
    };
    u.prototype.add = function (t) {
      this.cache = f.concat([this.cache, t]);
    };
    u.prototype.get = function () {
      if (this.cache.length > 15) {
        var t = this.cache.slice(0, 16);
        this.cache = this.cache.slice(16);
        return t;
      }
      return null;
    };
    u.prototype.flush = function () {
      for (var t = 16 - this.cache.length, e = f.allocUnsafe(t), r = -1; ++r < t;) {
        e.writeUInt8(t, r);
      }
      return f.concat([this.cache, e]);
    };
    e.createCipheriv = l;
    e.createCipher = function (t, e) {
      var r = i[t.toLowerCase()];
      if (!r) {
        throw TypeError("invalid suite type");
      }
      var n = h(e, false, r.key, r.iv);
      return l(t, n.key, n.iv);
    };
  },
  7225: function (t, e, r) {
    var i = r(6911).Buffer;
    var n = i.alloc(16, 0);
    function f(t) {
      var e = i.allocUnsafe(16);
      e.writeUInt32BE(t[0] >>> 0, 0);
      e.writeUInt32BE(t[1] >>> 0, 4);
      e.writeUInt32BE(t[2] >>> 0, 8);
      e.writeUInt32BE(t[3] >>> 0, 12);
      return e;
    }
    function a(t) {
      this.h = t;
      this.state = i.alloc(16, 0);
      this.cache = i.allocUnsafe(0);
    }
    a.prototype.ghash = function (t) {
      for (var e = -1; ++e < t.length;) {
        this.state[e] ^= t[e];
      }
      this._multiply();
    };
    a.prototype._multiply = function () {
      var t;
      var e;
      var r;
      var i = [(t = this.h).readUInt32BE(0), t.readUInt32BE(4), t.readUInt32BE(8), t.readUInt32BE(12)];
      var n = [0, 0, 0, 0];
      for (var a = -1; ++a < 128;) {
        if ((this.state[~~(a / 8)] & 1 << 7 - a % 8) != 0) {
          n[0] ^= i[0];
          n[1] ^= i[1];
          n[2] ^= i[2];
          n[3] ^= i[3];
        }
        r = (i[3] & 1) != 0;
        e = 3;
        for (; e > 0; e--) {
          i[e] = i[e] >>> 1 | (i[e - 1] & 1) << 31;
        }
        i[0] = i[0] >>> 1;
        if (r) {
          i[0] = i[0] ^ -520093696;
        }
      }
      this.state = f(n);
    };
    a.prototype.update = function (t) {
      var e;
      for (this.cache = i.concat([this.cache, t]); this.cache.length >= 16;) {
        e = this.cache.slice(0, 16);
        this.cache = this.cache.slice(16);
        this.ghash(e);
      }
    };
    a.prototype.final = function (t, e) {
      if (this.cache.length) {
        this.ghash(i.concat([this.cache, n], 16));
      }
      this.ghash(f([0, t, 0, e]));
      return this.state;
    };
    t.exports = a;
  },
  598: function (t) {
    t.exports = function (t) {
      var e;
      for (var r = t.length; r--;) {
        if ((e = t.readUInt8(r)) === 255) {
          t.writeUInt8(0, r);
        } else {
          e++;
          t.writeUInt8(e, r);
          break;
        }
      }
    };
  },
  9825: function (t, e, r) {
    var i = r(4734);
    e.encrypt = function (t, e) {
      var r = i(e, t._prev);
      t._prev = t._cipher.encryptBlock(r);
      return t._prev;
    };
    e.decrypt = function (t, e) {
      var r = t._prev;
      t._prev = e;
      return i(t._cipher.decryptBlock(e), r);
    };
  },
  321: function (t, e, r) {
    var i = r(6911).Buffer;
    var n = r(4734);
    function f(t, e, r) {
      var f = e.length;
      var a = n(e, t._cache);
      t._cache = t._cache.slice(f);
      t._prev = i.concat([t._prev, r ? e : a]);
      return a;
    }
    e.encrypt = function (t, e, r) {
      var n;
      var a = i.allocUnsafe(0);
      for (; e.length;) {
        if (t._cache.length === 0) {
          t._cache = t._cipher.encryptBlock(t._prev);
          t._prev = i.allocUnsafe(0);
        }
        if (t._cache.length <= e.length) {
          n = t._cache.length;
          a = i.concat([a, f(t, e.slice(0, n), r)]);
          e = e.slice(n);
        } else {
          a = i.concat([a, f(t, e, r)]);
          break;
        }
      }
      return a;
    };
  },
  3147: function (t, e, r) {
    var i = r(6911).Buffer;
    e.encrypt = function (t, e, r) {
      for (var n = e.length, f = i.allocUnsafe(n), a = -1; ++a < n;) {
        f[a] = function (t, e, r) {
          var n;
          var f;
          var a;
          for (var o = -1, s = 0; ++o < 8;) {
            n = t._cipher.encryptBlock(t._prev);
            f = e & 1 << 7 - o ? 128 : 0;
            s += ((a = n[0] ^ f) & 128) >> o % 8;
            t._prev = function (t, e) {
              var r = t.length;
              var n = -1;
              var f = i.allocUnsafe(t.length);
              for (t = i.concat([t, i.from([e])]); ++n < r;) {
                f[n] = t[n] << 1 | t[n + 1] >> 7;
              }
              return f;
            }(t._prev, r ? f : a);
          }
          return s;
        }(t, e[a], r);
      }
      return f;
    };
  },
  2430: function (t, e, r) {
    var i = r(6911).Buffer;
    e.encrypt = function (t, e, r) {
      for (var n = e.length, f = i.allocUnsafe(n), a = -1; ++a < n;) {
        f[a] = function (t, e, r) {
          var n = t._cipher.encryptBlock(t._prev)[0] ^ e;
          t._prev = i.concat([t._prev.slice(1), i.from([r ? e : n])]);
          return n;
        }(t, e[a], r);
      }
      return f;
    };
  },
  3361: function (t, e, r) {
    var i = r(4734);
    var n = r(6911).Buffer;
    var f = r(598);
    e.encrypt = function (t, e) {
      var r = Math.ceil(e.length / 16);
      var a = t._cache.length;
      t._cache = n.concat([t._cache, n.allocUnsafe(r * 16)]);
      for (var o = 0; o < r; o++) {
        var s = function (t) {
          var e = t._cipher.encryptBlockRaw(t._prev);
          f(t._prev);
          return e;
        }(t);
        var h = a + o * 16;
        t._cache.writeUInt32BE(s[0], h + 0);
        t._cache.writeUInt32BE(s[1], h + 4);
        t._cache.writeUInt32BE(s[2], h + 8);
        t._cache.writeUInt32BE(s[3], h + 12);
      }
      var c = t._cache.slice(0, e.length);
      t._cache = t._cache.slice(e.length);
      return i(e, c);
    };
  },
  1590: function (t, e) {
    e.encrypt = function (t, e) {
      return t._cipher.encryptBlock(e);
    };
    e.decrypt = function (t, e) {
      return t._cipher.decryptBlock(e);
    };
  },
  6370: function (t, e, r) {
    var i = {
      ECB: r(1590),
      CBC: r(9825),
      CFB: r(321),
      CFB8: r(2430),
      CFB1: r(3147),
      OFB: r(3412),
      CTR: r(3361),
      GCM: r(3361)
    };
    var n = r(5866);
    for (var f in n) {
      n[f].module = i[n[f].mode];
    }
    t.exports = n;
  },
  3412: function (t, e, r) {
    var n = r(4734);
    e.encrypt = function (t, e) {
      while (t._cache.length < e.length) {
        t._cache = i.concat([t._cache, (t._prev = t._cipher.encryptBlock(t._prev), t._prev)]);
      }
      var r = t._cache.slice(0, e.length);
      t._cache = t._cache.slice(e.length);
      return n(e, r);
    };
  },
  126: function (t, e, r) {
    var i = r(1387);
    var n = r(6911).Buffer;
    var f = r(1043);
    function a(t, e, r, a) {
      f.call(this);
      this._cipher = new i.AES(e);
      this._prev = n.from(r);
      this._cache = n.allocUnsafe(0);
      this._secCache = n.allocUnsafe(0);
      this._decrypt = a;
      this._mode = t;
    }
    r(3782)(a, f);
    a.prototype._update = function (t) {
      return this._mode.encrypt(this, t, this._decrypt);
    };
    a.prototype._final = function () {
      this._cipher.scrub();
    };
    t.exports = a;
  },
  8996: function (t, e, r) {
    var i = r(5238);
    var n = r(6594);
    var f = r(6370);
    var a = r(6280);
    var o = r(8368);
    function s(t, e, r) {
      if (f[t = t.toLowerCase()]) {
        return n.createCipheriv(t, e, r);
      }
      if (a[t]) {
        return new i({
          key: e,
          iv: r,
          mode: t
        });
      }
      throw TypeError("invalid suite type");
    }
    function h(t, e, r) {
      if (f[t = t.toLowerCase()]) {
        return n.createDecipheriv(t, e, r);
      }
      if (a[t]) {
        return new i({
          key: e,
          iv: r,
          mode: t,
          decrypt: true
        });
      }
      throw TypeError("invalid suite type");
    }
    e.createCipher = e.Cipher = function (t, e) {
      if (f[t = t.toLowerCase()]) {
        r = f[t].key;
        i = f[t].iv;
      } else if (a[t]) {
        r = a[t].key * 8;
        i = a[t].iv;
      } else {
        throw TypeError("invalid suite type");
      }
      var r;
      var i;
      var n = o(e, false, r, i);
      return s(t, n.key, n.iv);
    };
    e.createCipheriv = e.Cipheriv = s;
    e.createDecipher = e.Decipher = function (t, e) {
      if (f[t = t.toLowerCase()]) {
        r = f[t].key;
        i = f[t].iv;
      } else if (a[t]) {
        r = a[t].key * 8;
        i = a[t].iv;
      } else {
        throw TypeError("invalid suite type");
      }
      var r;
      var i;
      var n = o(e, false, r, i);
      return h(t, n.key, n.iv);
    };
    e.createDecipheriv = e.Decipheriv = h;
    e.listCiphers = e.getCiphers = function () {
      return Object.keys(a).concat(n.getCiphers());
    };
  },
  5238: function (t, e, r) {
    var i = r(1043);
    var n = r(9536);
    var f = r(3782);
    var a = r(6911).Buffer;
    var o = {
      "des-ede3-cbc": n.CBC.instantiate(n.EDE),
      "des-ede3": n.EDE,
      "des-ede-cbc": n.CBC.instantiate(n.EDE),
      "des-ede": n.EDE,
      "des-cbc": n.CBC.instantiate(n.DES),
      "des-ecb": n.DES
    };
    function s(t) {
      i.call(this);
      var e;
      var r = t.mode.toLowerCase();
      var n = o[r];
      e = t.decrypt ? "decrypt" : "encrypt";
      var f = t.key;
      if (!a.isBuffer(f)) {
        f = a.from(f);
      }
      if (r === "des-ede" || r === "des-ede-cbc") {
        f = a.concat([f, f.slice(0, 8)]);
      }
      var s = t.iv;
      if (!a.isBuffer(s)) {
        s = a.from(s);
      }
      this._des = n.create({
        key: f,
        iv: s,
        type: e
      });
    }
    o.des = o["des-cbc"];
    o.des3 = o["des-ede3-cbc"];
    t.exports = s;
    f(s, i);
    s.prototype._update = function (t) {
      return a.from(this._des.update(t));
    };
    s.prototype._final = function () {
      return a.from(this._des.final());
    };
  },
  6280: function (t, e) {
    e["des-ecb"] = {
      key: 8,
      iv: 0
    };
    e["des-cbc"] = e.des = {
      key: 8,
      iv: 8
    };
    e["des-ede3-cbc"] = e.des3 = {
      key: 24,
      iv: 8
    };
    e["des-ede3"] = {
      key: 24,
      iv: 0
    };
    e["des-ede-cbc"] = {
      key: 16,
      iv: 8
    };
    e["des-ede"] = {
      key: 16,
      iv: 0
    };
  },
  7166: function (t, e, r) {
    var n = r(711);
    var f = r(7223);
    function a(t, e) {
      var r;
      var f = {
        blinder: (r = o(e)).toRed(n.mont(e.modulus)).redPow(new n(e.publicExponent)).fromRed(),
        unblinder: r.invm(e.modulus)
      };
      var a = e.modulus.byteLength();
      n.mont(e.modulus);
      var s = new n(t).mul(f.blinder).umod(e.modulus);
      var h = s.toRed(n.mont(e.prime1));
      var c = s.toRed(n.mont(e.prime2));
      var d = e.coefficient;
      var u = e.prime1;
      var l = e.prime2;
      var b = h.redPow(e.exponent1);
      var p = c.redPow(e.exponent2);
      b = b.fromRed();
      p = p.fromRed();
      var m = b.isub(p).imul(d).umod(u);
      m.imul(l);
      p.iadd(m);
      return new i(p.imul(f.unblinder).umod(e.modulus).toArray(false, a));
    }
    function o(t) {
      var e = t.modulus.byteLength();
      for (var r = new n(f(e)); r.cmp(t.modulus) >= 0 || !r.umod(t.prime1) || !r.umod(t.prime2);) {
        r = new n(f(e));
      }
      return r;
    }
    t.exports = a;
    a.getr = o;
  },
  9276: function (t, e, r) {
    t.exports = r(2908);
  },
  4078: function (t, e, r) {
    var i = r(6911).Buffer;
    var n = r(9739);
    var f = r(3726);
    var a = r(3782);
    var o = r(9807);
    var s = r(4013);
    var h = r(2908);
    function c(t) {
      f.Writable.call(this);
      var e = h[t];
      if (!e) {
        throw Error("Unknown message digest");
      }
      this._hashType = e.hash;
      this._hash = n(e.hash);
      this._tag = e.id;
      this._signType = e.sign;
    }
    function d(t) {
      f.Writable.call(this);
      var e = h[t];
      if (!e) {
        throw Error("Unknown message digest");
      }
      this._hash = n(e.hash);
      this._tag = e.id;
      this._signType = e.sign;
    }
    function u(t) {
      return new c(t);
    }
    function l(t) {
      return new d(t);
    }
    Object.keys(h).forEach(function (t) {
      h[t].id = i.from(h[t].id, "hex");
      h[t.toLowerCase()] = h[t];
    });
    a(c, f.Writable);
    c.prototype._write = function (t, e, r) {
      this._hash.update(t);
      r();
    };
    c.prototype.update = function (t, e) {
      if (typeof t == "string") {
        t = i.from(t, e);
      }
      this._hash.update(t);
      return this;
    };
    c.prototype.sign = function (t, e) {
      this.end();
      var r = o(this._hash.digest(), t, this._hashType, this._signType, this._tag);
      if (e) {
        return r.toString(e);
      } else {
        return r;
      }
    };
    a(d, f.Writable);
    d.prototype._write = function (t, e, r) {
      this._hash.update(t);
      r();
    };
    d.prototype.update = function (t, e) {
      if (typeof t == "string") {
        t = i.from(t, e);
      }
      this._hash.update(t);
      return this;
    };
    d.prototype.verify = function (t, e, r) {
      if (typeof e == "string") {
        e = i.from(e, r);
      }
      this.end();
      return s(e, this._hash.digest(), t, this._signType, this._tag);
    };
    t.exports = {
      Sign: u,
      Verify: l,
      createSign: u,
      createVerify: l
    };
  },
  9807: function (t, e, r) {
    var i = r(6911).Buffer;
    var n = r(4873);
    var f = r(7166);
    var a = r(949).ec;
    var o = r(1670);
    var s = r(9902);
    var h = r(9267);
    function c(t, e, r, f) {
      if ((t = i.from(t.toArray())).length < e.byteLength()) {
        var a = i.alloc(e.byteLength() - t.length);
        t = i.concat([a, t]);
      }
      var o = r.length;
      var s = function (t, e) {
        t = (t = d(t, e)).mod(e);
        var r = i.from(t.toArray());
        if (r.length < e.byteLength()) {
          var n = i.alloc(e.byteLength() - r.length);
          r = i.concat([n, r]);
        }
        return r;
      }(r, e);
      var h = i.alloc(o);
      h.fill(1);
      var c = i.alloc(o);
      c = n(f, c).update(h).update(i.from([0])).update(t).update(s).digest();
      h = n(f, c).update(h).digest();
      c = n(f, c).update(h).update(i.from([1])).update(t).update(s).digest();
      h = n(f, c).update(h).digest();
      return {
        k: c,
        v: h
      };
    }
    function d(t, e) {
      var r = new o(t);
      var i = (t.length << 3) - e.bitLength();
      if (i > 0) {
        r.ishrn(i);
      }
      return r;
    }
    function u(t, e, r) {
      var f;
      var a;
      do {
        for (f = i.alloc(0); f.length * 8 < t.bitLength();) {
          e.v = n(r, e.k).update(e.v).digest();
          f = i.concat([f, e.v]);
        }
        a = d(f, t);
        e.k = n(r, e.k).update(e.v).update(i.from([0])).digest();
        e.v = n(r, e.k).update(e.v).digest();
      } while (a.cmp(t) !== -1);
      return a;
    }
    t.exports = function (t, e, r, n, l) {
      var b = s(e);
      if (b.curve) {
        if (n !== "ecdsa" && n !== "ecdsa/rsa") {
          throw Error("wrong private key type");
        }
        var p = t;
        var m = b;
        var v = h[m.curve.join(".")];
        if (!v) {
          throw Error("unknown curve " + m.curve.join("."));
        }
        var y = new a(v).keyFromPrivate(m.privateKey).sign(p);
        return i.from(y.toDER());
      }
      if (b.type === "dsa") {
        if (n !== "dsa") {
          throw Error("wrong private key type");
        }
        return function (t, e, r) {
          var n;
          var f;
          var a;
          var s;
          var h;
          var l;
          var b;
          var p;
          var m = e.params.priv_key;
          var v = e.params.p;
          var y = e.params.q;
          var g = e.params.g;
          for (var _ = new o(0), w = d(t, y).mod(y), x = false, M = c(m, y, t, r); x === false;) {
            n = g;
            f = p = u(y, M, r);
            a = v;
            s = y;
            _ = n.toRed(o.mont(a)).redPow(f).fromRed().mod(s);
            if ((x = p.invm(y).imul(w.add(m.mul(_))).mod(y)).cmpn(0) === 0) {
              x = false;
              _ = new o(0);
            }
          }
          h = _;
          l = x;
          h = h.toArray();
          l = l.toArray();
          if (h[0] & 128) {
            h = [0].concat(h);
          }
          if (l[0] & 128) {
            l = [0].concat(l);
          }
          b = (b = [48, h.length + l.length + 4, 2, h.length]).concat(h, [2, l.length], l);
          return i.from(b);
        }(t, b, r);
      }
      if (n !== "rsa" && n !== "ecdsa/rsa") {
        throw Error("wrong private key type");
      }
      t = i.concat([l, t]);
      for (var g = b.modulus.byteLength(), _ = [0, 1]; t.length + _.length + 1 < g;) {
        _.push(255);
      }
      _.push(0);
      for (var w = -1; ++w < t.length;) {
        _.push(t[w]);
      }
      return f(_, b);
    };
    t.exports.getKey = c;
    t.exports.makeKey = u;
  },
  4013: function (t, e, r) {
    var i = r(6911).Buffer;
    var n = r(1670);
    var f = r(949).ec;
    var a = r(9902);
    var o = r(9267);
    function s(t, e) {
      if (t.cmpn(0) <= 0 || t.cmp(e) >= e) {
        throw Error("invalid sig");
      }
    }
    t.exports = function (t, e, r, h, c) {
      var d;
      var u;
      var l;
      var b;
      var p;
      var m;
      var v;
      var y;
      var g;
      var _;
      var w;
      var x;
      var M = a(r);
      if (M.type === "ec") {
        if (h !== "ecdsa" && h !== "ecdsa/rsa") {
          throw Error("wrong public key type");
        }
        var S = t;
        var k = e;
        var E = M;
        var A = o[E.data.algorithm.curve.join(".")];
        if (!A) {
          throw Error("unknown curve " + E.data.algorithm.curve.join("."));
        }
        var R = new f(A);
        var I = E.data.subjectPrivateKey.data;
        return R.verify(k, S, I);
      }
      if (M.type === "dsa") {
        if (h !== "dsa") {
          throw Error("wrong public key type");
        }
        d = t;
        u = e;
        b = (l = M).data.p;
        p = l.data.q;
        m = l.data.g;
        v = l.data.pub_key;
        g = (y = a.signature.decode(d, "der")).s;
        _ = y.r;
        s(g, p);
        s(_, p);
        w = n.mont(b);
        x = g.invm(p);
        return m.toRed(w).redPow(new n(u).mul(x).mod(p)).fromRed().mul(v.toRed(w).redPow(_.mul(x).mod(p)).fromRed()).mod(b).mod(p).cmp(_) === 0;
      }
      if (h !== "rsa" && h !== "ecdsa/rsa") {
        throw Error("wrong public key type");
      }
      e = i.concat([c, e]);
      for (var B = M.modulus.byteLength(), P = [1], T = 0; e.length + P.length + 2 < B;) {
        P.push(255);
        T++;
      }
      P.push(0);
      for (var C = -1; ++C < e.length;) {
        P.push(e[C]);
      }
      P = i.from(P);
      var j = n.mont(M.modulus);
      t = (t = new n(t).toRed(j)).redPow(new n(M.publicExponent));
      var O = +(T < 8);
      B = Math.min((t = i.from(t.fromRed().toArray())).length, P.length);
      if (t.length !== P.length) {
        O = 1;
      }
      C = -1;
      while (++C < B) {
        O |= t[C] ^ P[C];
      }
      return O === 0;
    };
  },
  4734: function (t) {
    t.exports = function (t, e) {
      for (var r = Math.min(t.length, e.length), n = new i(r), f = 0; f < r; ++f) {
        n[f] = t[f] ^ e[f];
      }
      return n;
    };
  },
  1043: function (t, e, r) {
    var i = r(6911).Buffer;
    var n = r(2781).Transform;
    var f = r(1576).StringDecoder;
    function a(t) {
      n.call(this);
      this.hashMode = typeof t == "string";
      if (this.hashMode) {
        this[t] = this._finalOrDigest;
      } else {
        this.final = this._finalOrDigest;
      }
      if (this._final) {
        this.__final = this._final;
        this._final = null;
      }
      this._decoder = null;
      this._encoding = null;
    }
    r(3782)(a, n);
    a.prototype.update = function (t, e, r) {
      if (typeof t == "string") {
        t = i.from(t, e);
      }
      var n = this._update(t);
      if (this.hashMode) {
        return this;
      } else {
        if (r) {
          n = this._toString(n, r);
        }
        return n;
      }
    };
    a.prototype.setAutoPadding = function () {};
    a.prototype.getAuthTag = function () {
      throw Error("trying to get auth tag in unsupported state");
    };
    a.prototype.setAuthTag = function () {
      throw Error("trying to set auth tag in unsupported state");
    };
    a.prototype.setAAD = function () {
      throw Error("trying to set aad in unsupported state");
    };
    a.prototype._transform = function (t, e, r) {
      var i;
      try {
        if (this.hashMode) {
          this._update(t);
        } else {
          this.push(this._update(t));
        }
      } catch (t) {
        i = t;
      } finally {
        r(i);
      }
    };
    a.prototype._flush = function (t) {
      var e;
      try {
        this.push(this.__final());
      } catch (t) {
        e = t;
      }
      t(e);
    };
    a.prototype._finalOrDigest = function (t) {
      var e = this.__final() || i.alloc(0);
      if (t) {
        e = this._toString(e, t, true);
      }
      return e;
    };
    a.prototype._toString = function (t, e, r) {
      if (!this._decoder) {
        this._decoder = new f(e);
        this._encoding = e;
      }
      if (this._encoding !== e) {
        throw Error("can't switch encodings");
      }
      var i = this._decoder.write(t);
      if (r) {
        i += this._decoder.end();
      }
      return i;
    };
    t.exports = a;
  },
  9942: function (t, e, r) {
    var n = r(949);
    var f = r(711);
    t.exports = function (t) {
      return new o(t);
    };
    var a = {
      secp256k1: {
        name: "secp256k1",
        byteLength: 32
      },
      secp224r1: {
        name: "p224",
        byteLength: 28
      },
      prime256v1: {
        name: "p256",
        byteLength: 32
      },
      prime192v1: {
        name: "p192",
        byteLength: 24
      },
      ed25519: {
        name: "ed25519",
        byteLength: 32
      },
      secp384r1: {
        name: "p384",
        byteLength: 48
      },
      secp521r1: {
        name: "p521",
        byteLength: 66
      }
    };
    function o(t) {
      this.curveType = a[t];
      this.curveType ||= {
        name: t
      };
      this.curve = new n.ec(this.curveType.name);
      this.keys = undefined;
    }
    function s(t, e, r) {
      if (!Array.isArray(t)) {
        t = t.toArray();
      }
      var n = new i(t);
      if (r && n.length < r) {
        var f = new i(r - n.length);
        f.fill(0);
        n = i.concat([f, n]);
      }
      if (e) {
        return n.toString(e);
      } else {
        return n;
      }
    }
    a.p224 = a.secp224r1;
    a.p256 = a.secp256r1 = a.prime256v1;
    a.p192 = a.secp192r1 = a.prime192v1;
    a.p384 = a.secp384r1;
    a.p521 = a.secp521r1;
    o.prototype.generateKeys = function (t, e) {
      this.keys = this.curve.genKeyPair();
      return this.getPublicKey(t, e);
    };
    o.prototype.computeSecret = function (t, e, r) {
      e = e || "utf8";
      if (!i.isBuffer(t)) {
        t = new i(t, e);
      }
      return s(this.curve.keyFromPublic(t).getPublic().mul(this.keys.getPrivate()).getX(), r, this.curveType.byteLength);
    };
    o.prototype.getPublicKey = function (t, e) {
      var r = this.keys.getPublic(e === "compressed", true);
      if (e === "hybrid") {
        if (r[r.length - 1] % 2) {
          r[0] = 7;
        } else {
          r[0] = 6;
        }
      }
      return s(r, t);
    };
    o.prototype.getPrivateKey = function (t) {
      return s(this.keys.getPrivate(), t);
    };
    o.prototype.setPublicKey = function (t, e) {
      e = e || "utf8";
      if (!i.isBuffer(t)) {
        t = new i(t, e);
      }
      this.keys._importPublic(t);
      return this;
    };
    o.prototype.setPrivateKey = function (t, e) {
      e = e || "utf8";
      if (!i.isBuffer(t)) {
        t = new i(t, e);
      }
      var r = new f(t);
      r = r.toString(16);
      this.keys = this.curve.genKeyPair();
      this.keys._importPrivate(r);
      return this;
    };
  },
  9739: function (t, e, r) {
    "use strict";

    var i = r(3782);
    var n = r(3533);
    var f = r(3225);
    var a = r(4371);
    var o = r(1043);
    function s(t) {
      o.call(this, "digest");
      this._hash = t;
    }
    i(s, o);
    s.prototype._update = function (t) {
      this._hash.update(t);
    };
    s.prototype._final = function () {
      return this._hash.digest();
    };
    t.exports = function (t) {
      if ((t = t.toLowerCase()) === "md5") {
        return new n();
      } else if (t === "rmd160" || t === "ripemd160") {
        return new f();
      } else {
        return new s(a(t));
      }
    };
  },
  450: function (t, e, r) {
    var i = r(3533);
    t.exports = function (t) {
      return new i().update(t).digest();
    };
  },
  4873: function (t, e, r) {
    "use strict";

    var i = r(3782);
    var n = r(8119);
    var f = r(1043);
    var a = r(6911).Buffer;
    var o = r(450);
    var s = r(3225);
    var h = r(4371);
    var c = a.alloc(128);
    function d(t, e) {
      f.call(this, "digest");
      if (typeof e == "string") {
        e = a.from(e);
      }
      var r = t === "sha512" || t === "sha384" ? 128 : 64;
      this._alg = t;
      this._key = e;
      if (e.length > r) {
        e = (t === "rmd160" ? new s() : h(t)).update(e).digest();
      } else if (e.length < r) {
        e = a.concat([e, c], r);
      }
      var i = this._ipad = a.allocUnsafe(r);
      var n = this._opad = a.allocUnsafe(r);
      for (var o = 0; o < r; o++) {
        i[o] = e[o] ^ 54;
        n[o] = e[o] ^ 92;
      }
      this._hash = t === "rmd160" ? new s() : h(t);
      this._hash.update(i);
    }
    i(d, f);
    d.prototype._update = function (t) {
      this._hash.update(t);
    };
    d.prototype._final = function () {
      var t = this._hash.digest();
      return (this._alg === "rmd160" ? new s() : h(this._alg)).update(this._opad).update(t).digest();
    };
    t.exports = function (t, e) {
      if ((t = t.toLowerCase()) === "rmd160" || t === "ripemd160") {
        return new d("rmd160", e);
      } else if (t === "md5") {
        return new n(o, e);
      } else {
        return new d(t, e);
      }
    };
  },
  8119: function (t, e, r) {
    "use strict";

    var i = r(3782);
    var n = r(6911).Buffer;
    var f = r(1043);
    var a = n.alloc(128);
    function o(t, e) {
      f.call(this, "digest");
      if (typeof e == "string") {
        e = n.from(e);
      }
      this._alg = t;
      this._key = e;
      if (e.length > 64) {
        e = t(e);
      } else if (e.length < 64) {
        e = n.concat([e, a], 64);
      }
      var r = this._ipad = n.allocUnsafe(64);
      var i = this._opad = n.allocUnsafe(64);
      for (var o = 0; o < 64; o++) {
        r[o] = e[o] ^ 54;
        i[o] = e[o] ^ 92;
      }
      this._hash = [r];
    }
    i(o, f);
    o.prototype._update = function (t) {
      this._hash.push(t);
    };
    o.prototype._final = function () {
      var t = this._alg(n.concat(this._hash));
      return this._alg(n.concat([this._opad, t]));
    };
    t.exports = o;
  },
  9536: function (t, e, r) {
    "use strict";

    e.utils = r(5334);
    e.Cipher = r(9876);
    e.DES = r(1016);
    e.CBC = r(8641);
    e.EDE = r(6159);
  },
  8641: function (t, e, r) {
    "use strict";

    var i = r(3523);
    var n = r(3782);
    var f = {};
    function a(t) {
      i.equal(t.length, 8, "Invalid IV length");
      this.iv = Array(8);
      for (var e = 0; e < this.iv.length; e++) {
        this.iv[e] = t[e];
      }
    }
    e.instantiate = function (t) {
      function e(e) {
        t.call(this, e);
        this._cbcInit();
      }
      n(e, t);
      for (var r = Object.keys(f), i = 0; i < r.length; i++) {
        var a = r[i];
        e.prototype[a] = f[a];
      }
      e.create = function (t) {
        return new e(t);
      };
      return e;
    };
    f._cbcInit = function () {
      var t = new a(this.options.iv);
      this._cbcState = t;
    };
    f._update = function (t, e, r, i) {
      var n = this._cbcState;
      var f = this.constructor.super_.prototype;
      var a = n.iv;
      if (this.type === "encrypt") {
        for (var o = 0; o < this.blockSize; o++) {
          a[o] ^= t[e + o];
        }
        f._update.call(this, a, 0, r, i);
        for (var o = 0; o < this.blockSize; o++) {
          a[o] = r[i + o];
        }
      } else {
        f._update.call(this, t, e, r, i);
        for (var o = 0; o < this.blockSize; o++) {
          r[i + o] ^= a[o];
        }
        for (var o = 0; o < this.blockSize; o++) {
          a[o] = t[e + o];
        }
      }
    };
  },
  9876: function (t, e, r) {
    "use strict";

    var i = r(3523);
    function n(t) {
      this.options = t;
      this.type = this.options.type;
      this.blockSize = 8;
      this._init();
      this.buffer = Array(this.blockSize);
      this.bufferOff = 0;
    }
    t.exports = n;
    n.prototype._init = function () {};
    n.prototype.update = function (t) {
      if (t.length === 0) {
        return [];
      } else if (this.type === "decrypt") {
        return this._updateDecrypt(t);
      } else {
        return this._updateEncrypt(t);
      }
    };
    n.prototype._buffer = function (t, e) {
      for (var r = Math.min(this.buffer.length - this.bufferOff, t.length - e), i = 0; i < r; i++) {
        this.buffer[this.bufferOff + i] = t[e + i];
      }
      this.bufferOff += r;
      return r;
    };
    n.prototype._flushBuffer = function (t, e) {
      this._update(this.buffer, 0, t, e);
      this.bufferOff = 0;
      return this.blockSize;
    };
    n.prototype._updateEncrypt = function (t) {
      var e = 0;
      var r = 0;
      var i = Array(((this.bufferOff + t.length) / this.blockSize | 0) * this.blockSize);
      if (this.bufferOff !== 0) {
        e += this._buffer(t, e);
        if (this.bufferOff === this.buffer.length) {
          r += this._flushBuffer(i, r);
        }
      }
      for (var n = t.length - (t.length - e) % this.blockSize; e < n; e += this.blockSize) {
        this._update(t, e, i, r);
        r += this.blockSize;
      }
      for (; e < t.length; e++, this.bufferOff++) {
        this.buffer[this.bufferOff] = t[e];
      }
      return i;
    };
    n.prototype._updateDecrypt = function (t) {
      var e = 0;
      var r = 0;
      for (var i = Math.ceil((this.bufferOff + t.length) / this.blockSize) - 1, n = Array(i * this.blockSize); i > 0; i--) {
        e += this._buffer(t, e);
        r += this._flushBuffer(n, r);
      }
      e += this._buffer(t, e);
      return n;
    };
    n.prototype.final = function (t) {
      var e;
      var r;
      if (t) {
        e = this.update(t);
      }
      r = this.type === "encrypt" ? this._finalEncrypt() : this._finalDecrypt();
      if (e) {
        return e.concat(r);
      } else {
        return r;
      }
    };
    n.prototype._pad = function (t, e) {
      if (e === 0) {
        return false;
      }
      while (e < t.length) {
        t[e++] = 0;
      }
      return true;
    };
    n.prototype._finalEncrypt = function () {
      if (!this._pad(this.buffer, this.bufferOff)) {
        return [];
      }
      var t = Array(this.blockSize);
      this._update(this.buffer, 0, t, 0);
      return t;
    };
    n.prototype._unpad = function (t) {
      return t;
    };
    n.prototype._finalDecrypt = function () {
      i.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
      var t = Array(this.blockSize);
      this._flushBuffer(t, 0);
      return this._unpad(t);
    };
  },
  1016: function (t, e, r) {
    "use strict";

    var i = r(3523);
    var n = r(3782);
    var f = r(5334);
    var a = r(9876);
    function o() {
      this.tmp = [,,];
      this.keys = null;
    }
    function s(t) {
      a.call(this, t);
      var e = new o();
      this._desState = e;
      this.deriveKeys(e, t.key);
    }
    n(s, a);
    t.exports = s;
    s.create = function (t) {
      return new s(t);
    };
    var h = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
    s.prototype.deriveKeys = function (t, e) {
      t.keys = Array(32);
      i.equal(e.length, this.blockSize, "Invalid key length");
      var r = f.readUInt32BE(e, 0);
      var n = f.readUInt32BE(e, 4);
      f.pc1(r, n, t.tmp, 0);
      r = t.tmp[0];
      n = t.tmp[1];
      for (var a = 0; a < t.keys.length; a += 2) {
        var o = h[a >>> 1];
        r = f.r28shl(r, o);
        n = f.r28shl(n, o);
        f.pc2(r, n, t.keys, a);
      }
    };
    s.prototype._update = function (t, e, r, i) {
      var n = this._desState;
      var a = f.readUInt32BE(t, e);
      var o = f.readUInt32BE(t, e + 4);
      f.ip(a, o, n.tmp, 0);
      a = n.tmp[0];
      o = n.tmp[1];
      if (this.type === "encrypt") {
        this._encrypt(n, a, o, n.tmp, 0);
      } else {
        this._decrypt(n, a, o, n.tmp, 0);
      }
      a = n.tmp[0];
      o = n.tmp[1];
      f.writeUInt32BE(r, a, i);
      f.writeUInt32BE(r, o, i + 4);
    };
    s.prototype._pad = function (t, e) {
      var r = t.length - e;
      for (var i = e; i < t.length; i++) {
        t[i] = r;
      }
      return true;
    };
    s.prototype._unpad = function (t) {
      var e = t[t.length - 1];
      for (var r = t.length - e; r < t.length; r++) {
        i.equal(t[r], e);
      }
      return t.slice(0, t.length - e);
    };
    s.prototype._encrypt = function (t, e, r, i, n) {
      var a = e;
      var o = r;
      for (var s = 0; s < t.keys.length; s += 2) {
        var h = t.keys[s];
        var c = t.keys[s + 1];
        f.expand(o, t.tmp, 0);
        h ^= t.tmp[0];
        c ^= t.tmp[1];
        var d = f.substitute(h, c);
        var u = f.permute(d);
        var l = o;
        o = (a ^ u) >>> 0;
        a = l;
      }
      f.rip(o, a, i, n);
    };
    s.prototype._decrypt = function (t, e, r, i, n) {
      var a = r;
      var o = e;
      for (var s = t.keys.length - 2; s >= 0; s -= 2) {
        var h = t.keys[s];
        var c = t.keys[s + 1];
        f.expand(a, t.tmp, 0);
        h ^= t.tmp[0];
        c ^= t.tmp[1];
        var d = f.substitute(h, c);
        var u = f.permute(d);
        var l = a;
        a = (o ^ u) >>> 0;
        o = l;
      }
      f.rip(a, o, i, n);
    };
  },
  6159: function (t, e, r) {
    "use strict";

    var i = r(3523);
    var n = r(3782);
    var f = r(9876);
    var a = r(1016);
    function o(t, e) {
      i.equal(e.length, 24, "Invalid key length");
      var r = e.slice(0, 8);
      var n = e.slice(8, 16);
      var f = e.slice(16, 24);
      if (t === "encrypt") {
        this.ciphers = [a.create({
          type: "encrypt",
          key: r
        }), a.create({
          type: "decrypt",
          key: n
        }), a.create({
          type: "encrypt",
          key: f
        })];
      } else {
        this.ciphers = [a.create({
          type: "decrypt",
          key: f
        }), a.create({
          type: "encrypt",
          key: n
        }), a.create({
          type: "decrypt",
          key: r
        })];
      }
    }
    function s(t) {
      f.call(this, t);
      var e = new o(this.type, this.options.key);
      this._edeState = e;
    }
    n(s, f);
    t.exports = s;
    s.create = function (t) {
      return new s(t);
    };
    s.prototype._update = function (t, e, r, i) {
      var n = this._edeState;
      n.ciphers[0]._update(t, e, r, i);
      n.ciphers[1]._update(r, i, r, i);
      n.ciphers[2]._update(r, i, r, i);
    };
    s.prototype._pad = a.prototype._pad;
    s.prototype._unpad = a.prototype._unpad;
  },
  5334: function (t, e) {
    "use strict";

    e.readUInt32BE = function (t, e) {
      return (t[0 + e] << 24 | t[1 + e] << 16 | t[2 + e] << 8 | t[3 + e]) >>> 0;
    };
    e.writeUInt32BE = function (t, e, r) {
      t[0 + r] = e >>> 24;
      t[1 + r] = e >>> 16 & 255;
      t[2 + r] = e >>> 8 & 255;
      t[3 + r] = e & 255;
    };
    e.ip = function (t, e, r, i) {
      var n = 0;
      var f = 0;
      for (var a = 6; a >= 0; a -= 2) {
        for (var o = 0; o <= 24; o += 8) {
          n <<= 1;
          n |= e >>> o + a & 1;
        }
        for (var o = 0; o <= 24; o += 8) {
          n <<= 1;
          n |= t >>> o + a & 1;
        }
      }
      for (var a = 6; a >= 0; a -= 2) {
        for (var o = 1; o <= 25; o += 8) {
          f <<= 1;
          f |= e >>> o + a & 1;
        }
        for (var o = 1; o <= 25; o += 8) {
          f <<= 1;
          f |= t >>> o + a & 1;
        }
      }
      r[i + 0] = n >>> 0;
      r[i + 1] = f >>> 0;
    };
    e.rip = function (t, e, r, i) {
      var n = 0;
      var f = 0;
      for (var a = 0; a < 4; a++) {
        for (var o = 24; o >= 0; o -= 8) {
          n <<= 1;
          n |= e >>> o + a & 1;
          n <<= 1;
          n |= t >>> o + a & 1;
        }
      }
      for (var a = 4; a < 8; a++) {
        for (var o = 24; o >= 0; o -= 8) {
          f <<= 1;
          f |= e >>> o + a & 1;
          f <<= 1;
          f |= t >>> o + a & 1;
        }
      }
      r[i + 0] = n >>> 0;
      r[i + 1] = f >>> 0;
    };
    e.pc1 = function (t, e, r, i) {
      var n = 0;
      var f = 0;
      for (var a = 7; a >= 5; a--) {
        for (var o = 0; o <= 24; o += 8) {
          n <<= 1;
          n |= e >> o + a & 1;
        }
        for (var o = 0; o <= 24; o += 8) {
          n <<= 1;
          n |= t >> o + a & 1;
        }
      }
      for (var o = 0; o <= 24; o += 8) {
        n <<= 1;
        n |= e >> o + a & 1;
      }
      for (var a = 1; a <= 3; a++) {
        for (var o = 0; o <= 24; o += 8) {
          f <<= 1;
          f |= e >> o + a & 1;
        }
        for (var o = 0; o <= 24; o += 8) {
          f <<= 1;
          f |= t >> o + a & 1;
        }
      }
      for (var o = 0; o <= 24; o += 8) {
        f <<= 1;
        f |= t >> o + a & 1;
      }
      r[i + 0] = n >>> 0;
      r[i + 1] = f >>> 0;
    };
    e.r28shl = function (t, e) {
      return t << e & 268435455 | t >>> 28 - e;
    };
    var r = [14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24];
    e.pc2 = function (t, e, i, n) {
      var f = 0;
      var a = 0;
      for (var o = r.length >>> 1, s = 0; s < o; s++) {
        f <<= 1;
        f |= t >>> r[s] & 1;
      }
      for (var s = o; s < r.length; s++) {
        a <<= 1;
        a |= e >>> r[s] & 1;
      }
      i[n + 0] = f >>> 0;
      i[n + 1] = a >>> 0;
    };
    e.expand = function (t, e, r) {
      var i = 0;
      var n = 0;
      i = (t & 1) << 5 | t >>> 27;
      for (var f = 23; f >= 15; f -= 4) {
        i <<= 6;
        i |= t >>> f & 63;
      }
      for (var f = 11; f >= 3; f -= 4) {
        n |= t >>> f & 63;
        n <<= 6;
      }
      n |= (t & 31) << 1 | t >>> 31;
      e[r + 0] = i >>> 0;
      e[r + 1] = n >>> 0;
    };
    var i = [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11];
    e.substitute = function (t, e) {
      var r = 0;
      for (var n = 0; n < 4; n++) {
        var f = t >>> 18 - n * 6 & 63;
        var a = i[n * 64 + f];
        r <<= 4;
        r |= a;
      }
      for (var n = 0; n < 4; n++) {
        var f = e >>> 18 - n * 6 & 63;
        var a = i[256 + n * 64 + f];
        r <<= 4;
        r |= a;
      }
      return r >>> 0;
    };
    var n = [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7];
    e.permute = function (t) {
      var e = 0;
      for (var r = 0; r < n.length; r++) {
        e <<= 1;
        e |= t >>> n[r] & 1;
      }
      return e >>> 0;
    };
    e.padSplit = function (t, e, r) {
      for (var i = t.toString(2); i.length < e;) {
        i = "0" + i;
      }
      var n = [];
      for (var f = 0; f < e; f += r) {
        n.push(i.slice(f, f + r));
      }
      return n.join(" ");
    };
  },
  6587: function (t, e, r) {
    var n = r(296);
    var f = r(7992);
    var a = r(373);
    var o = {
      binary: true,
      hex: true,
      base64: true
    };
    e.DiffieHellmanGroup = e.createDiffieHellmanGroup = e.getDiffieHellman = function (t) {
      return new a(new i(f[t].prime, "hex"), new i(f[t].gen, "hex"));
    };
    e.createDiffieHellman = e.DiffieHellman = function t(e, r, f, s) {
      if (i.isBuffer(r) || o[r] === undefined) {
        return t(e, "binary", r, f);
      } else {
        r = r || "binary";
        s = s || "binary";
        f = f || new i([2]);
        if (!i.isBuffer(f)) {
          f = new i(f, s);
        }
        if (typeof e == "number") {
          return new a(n(e, f), f, true);
        } else {
          if (!i.isBuffer(e)) {
            e = new i(e, r);
          }
          return new a(e, f, true);
        }
      }
    };
  },
  373: function (t, e, r) {
    var n = r(711);
    var f = new (r(1354))();
    var a = new n(24);
    var o = new n(11);
    var s = new n(10);
    var h = new n(3);
    var c = new n(7);
    var d = r(296);
    var u = r(7223);
    function l(t, e) {
      e = e || "utf8";
      if (!i.isBuffer(t)) {
        t = new i(t, e);
      }
      this._pub = new n(t);
      return this;
    }
    function b(t, e) {
      e = e || "utf8";
      if (!i.isBuffer(t)) {
        t = new i(t, e);
      }
      this._priv = new n(t);
      return this;
    }
    t.exports = m;
    var p = {};
    function m(t, e, r) {
      this.setGenerator(e);
      this.__prime = new n(t);
      this._prime = n.mont(this.__prime);
      this._primeLen = t.length;
      this._pub = undefined;
      this._priv = undefined;
      this._primeCode = undefined;
      if (r) {
        this.setPublicKey = l;
        this.setPrivateKey = b;
      } else {
        this._primeCode = 8;
      }
    }
    function v(t, e) {
      var r = new i(t.toArray());
      if (e) {
        return r.toString(e);
      } else {
        return r;
      }
    }
    Object.defineProperty(m.prototype, "verifyError", {
      enumerable: true,
      get: function () {
        if (typeof this._primeCode != "number") {
          this._primeCode = function (t, e) {
            var r;
            var i = e.toString("hex");
            var n = [i, t.toString(16)].join("_");
            if (n in p) {
              return p[n];
            }
            var u = 0;
            if (t.isEven() || !d.simpleSieve || !d.fermatTest(t) || !f.test(t)) {
              u += 1;
              if (i === "02" || i === "05") {
                u += 8;
              } else {
                u += 4;
              }
              p[n] = u;
              return u;
            }
            if (!f.test(t.shrn(1))) {
              u += 2;
            }
            switch (i) {
              case "02":
                if (t.mod(a).cmp(o)) {
                  u += 8;
                }
                break;
              case "05":
                if ((r = t.mod(s)).cmp(h) && r.cmp(c)) {
                  u += 8;
                }
                break;
              default:
                u += 4;
            }
            p[n] = u;
            return u;
          }(this.__prime, this.__gen);
        }
        return this._primeCode;
      }
    });
    m.prototype.generateKeys = function () {
      this._priv ||= new n(u(this._primeLen));
      this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed();
      return this.getPublicKey();
    };
    m.prototype.computeSecret = function (t) {
      var e = new i((t = (t = new n(t)).toRed(this._prime)).redPow(this._priv).fromRed().toArray());
      var r = this.getPrime();
      if (e.length < r.length) {
        var f = new i(r.length - e.length);
        f.fill(0);
        e = i.concat([f, e]);
      }
      return e;
    };
    m.prototype.getPublicKey = function (t) {
      return v(this._pub, t);
    };
    m.prototype.getPrivateKey = function (t) {
      return v(this._priv, t);
    };
    m.prototype.getPrime = function (t) {
      return v(this.__prime, t);
    };
    m.prototype.getGenerator = function (t) {
      return v(this._gen, t);
    };
    m.prototype.setGenerator = function (t, e) {
      e = e || "utf8";
      if (!i.isBuffer(t)) {
        t = new i(t, e);
      }
      this.__gen = t;
      this._gen = new n(t);
      return this;
    };
  },
  296: function (t, e, r) {
    var i = r(7223);
    t.exports = v;
    v.simpleSieve = p;
    v.fermatTest = m;
    var n = r(711);
    var f = new n(24);
    var a = new (r(1354))();
    var o = new n(1);
    var s = new n(2);
    var h = new n(5);
    new n(16);
    new n(8);
    var c = new n(10);
    var d = new n(3);
    new n(7);
    var u = new n(11);
    var l = new n(4);
    new n(12);
    var b = null;
    function p(t) {
      for (var e = function () {
          if (b !== null) {
            return b;
          }
          var t = [];
          t[0] = 2;
          var e = 1;
          for (var r = 3; r < 1048576; r += 2) {
            for (var i = Math.ceil(Math.sqrt(r)), n = 0; n < e && t[n] <= i && r % t[n] != 0; n++);
            if (e === n || !(t[n] <= i)) {
              t[e++] = r;
            }
          }
          b = t;
          return t;
        }(), r = 0; r < e.length; r++) {
        if (t.modn(e[r]) === 0) {
          if (t.cmpn(e[r]) !== 0) {
            return false;
          } else {
            break;
          }
        }
      }
      return true;
    }
    function m(t) {
      var e = n.mont(t);
      return s.toRed(e).redPow(t.subn(1)).fromRed().cmpn(1) === 0;
    }
    function v(t, e) {
      var r;
      var b;
      if (t < 16) {
        if (e === 2 || e === 5) {
          return new n([140, 123]);
        } else {
          return new n([140, 39]);
        }
      }
      for (e = new n(e);;) {
        for (r = new n(i(Math.ceil(t / 8))); r.bitLength() > t;) {
          r.ishrn(1);
        }
        if (r.isEven()) {
          r.iadd(o);
        }
        if (!r.testn(1)) {
          r.iadd(s);
        }
        if (e.cmp(s)) {
          if (!e.cmp(h)) {
            while (r.mod(c).cmp(d)) {
              r.iadd(l);
            }
          }
        } else {
          while (r.mod(f).cmp(u)) {
            r.iadd(l);
          }
        }
        if (p(b = r.shrn(1)) && p(r) && m(b) && m(r) && a.test(b) && a.test(r)) {
          return r;
        }
      }
    }
  },
  949: function (t, e, r) {
    "use strict";

    e.version = r(2531).i8;
    e.utils = r(4401);
    e.rand = r(3500);
    e.curve = r(9359);
    e.curves = r(6226);
    e.ec = r(4088);
    e.eddsa = r(8511);
  },
  2727: function (t, e, r) {
    "use strict";

    var i = r(711);
    var n = r(4401);
    var f = n.getNAF;
    var a = n.getJSF;
    var o = n.assert;
    function s(t, e) {
      this.type = t;
      this.p = new i(e.p, 16);
      this.red = e.prime ? i.red(e.prime) : i.mont(this.p);
      this.zero = new i(0).toRed(this.red);
      this.one = new i(1).toRed(this.red);
      this.two = new i(2).toRed(this.red);
      this.n = e.n && new i(e.n, 16);
      this.g = e.g && this.pointFromJSON(e.g, e.gRed);
      this._wnafT1 = [,,,,];
      this._wnafT2 = [,,,,];
      this._wnafT3 = [,,,,];
      this._wnafT4 = [,,,,];
      this._bitLength = this.n ? this.n.bitLength() : 0;
      var r = this.n && this.p.div(this.n);
      if (!r || r.cmpn(100) > 0) {
        this.redN = null;
      } else {
        this._maxwellTrick = true;
        this.redN = this.n.toRed(this.red);
      }
    }
    function h(t, e) {
      this.curve = t;
      this.type = e;
      this.precomputed = null;
    }
    t.exports = s;
    s.prototype.point = function () {
      throw Error("Not implemented");
    };
    s.prototype.validate = function () {
      throw Error("Not implemented");
    };
    s.prototype._fixedNafMul = function (t, e) {
      o(t.precomputed);
      var r = t._getDoubles();
      var i = f(e, 1, this._bitLength);
      var n = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
      n /= 3;
      var a = [];
      for (var s = 0; s < i.length; s += r.step) {
        var h = 0;
        for (var e = s + r.step - 1; e >= s; e--) {
          h = (h << 1) + i[e];
        }
        a.push(h);
      }
      var c = this.jpoint(null, null, null);
      var d = this.jpoint(null, null, null);
      for (var u = n; u > 0; u--) {
        for (var s = 0; s < a.length; s++) {
          var h = a[s];
          if (h === u) {
            d = d.mixedAdd(r.points[s]);
          } else if (h === -u) {
            d = d.mixedAdd(r.points[s].neg());
          }
        }
        c = c.add(d);
      }
      return c.toP();
    };
    s.prototype._wnafMul = function (t, e) {
      var r = 4;
      var i = t._getNAFPoints(r);
      r = i.wnd;
      var n = i.points;
      var a = f(e, r, this._bitLength);
      var s = this.jpoint(null, null, null);
      for (var h = a.length - 1; h >= 0; h--) {
        var e = 0;
        for (; h >= 0 && a[h] === 0; h--) {
          e++;
        }
        if (h >= 0) {
          e++;
        }
        s = s.dblp(e);
        if (h < 0) {
          break;
        }
        var c = a[h];
        o(c !== 0);
        s = t.type === "affine" ? c > 0 ? s.mixedAdd(n[c - 1 >> 1]) : s.mixedAdd(n[-c - 1 >> 1].neg()) : c > 0 ? s.add(n[c - 1 >> 1]) : s.add(n[-c - 1 >> 1].neg());
      }
      if (t.type === "affine") {
        return s.toP();
      } else {
        return s;
      }
    };
    s.prototype._wnafMulAdd = function (t, e, r, i, n) {
      var o = this._wnafT1;
      var s = this._wnafT2;
      var h = this._wnafT3;
      var c = 0;
      for (var d = 0; d < i; d++) {
        var u = e[d];
        var l = u._getNAFPoints(t);
        o[d] = l.wnd;
        s[d] = l.points;
      }
      for (var d = i - 1; d >= 1; d -= 2) {
        var b = d - 1;
        var p = d;
        if (o[b] !== 1 || o[p] !== 1) {
          h[b] = f(r[b], o[b], this._bitLength);
          h[p] = f(r[p], o[p], this._bitLength);
          c = Math.max(h[b].length, c);
          c = Math.max(h[p].length, c);
          continue;
        }
        var m = [e[b], null, null, e[p]];
        if (e[b].y.cmp(e[p].y) === 0) {
          m[1] = e[b].add(e[p]);
          m[2] = e[b].toJ().mixedAdd(e[p].neg());
        } else if (e[b].y.cmp(e[p].y.redNeg()) === 0) {
          m[1] = e[b].toJ().mixedAdd(e[p]);
          m[2] = e[b].add(e[p].neg());
        } else {
          m[1] = e[b].toJ().mixedAdd(e[p]);
          m[2] = e[b].toJ().mixedAdd(e[p].neg());
        }
        var v = [-3, -1, -5, -7, 0, 7, 5, 1, 3];
        var y = a(r[b], r[p]);
        c = Math.max(y[0].length, c);
        h[b] = Array(c);
        h[p] = Array(c);
        for (var g = 0; g < c; g++) {
          var _ = y[0][g] | 0;
          var w = y[1][g] | 0;
          h[b][g] = v[(_ + 1) * 3 + (w + 1)];
          h[p][g] = 0;
          s[b] = m;
        }
      }
      var x = this.jpoint(null, null, null);
      var M = this._wnafT4;
      for (var d = c; d >= 0; d--) {
        var S = 0;
        for (; d >= 0;) {
          var k = true;
          for (var g = 0; g < i; g++) {
            M[g] = h[g][d] | 0;
            if (M[g] !== 0) {
              k = false;
            }
          }
          if (!k) {
            break;
          }
          S++;
          d--;
        }
        if (d >= 0) {
          S++;
        }
        x = x.dblp(S);
        if (d < 0) {
          break;
        }
        for (var g = 0; g < i; g++) {
          var u;
          var E = M[g];
          if (E !== 0) {
            if (E > 0) {
              u = s[g][E - 1 >> 1];
            } else if (E < 0) {
              u = s[g][-E - 1 >> 1].neg();
            }
            x = u.type === "affine" ? x.mixedAdd(u) : x.add(u);
          }
        }
      }
      for (var d = 0; d < i; d++) {
        s[d] = null;
      }
      if (n) {
        return x;
      } else {
        return x.toP();
      }
    };
    s.BasePoint = h;
    h.prototype.eq = function () {
      throw Error("Not implemented");
    };
    h.prototype.validate = function () {
      return this.curve.validate(this);
    };
    s.prototype.decodePoint = function (t, e) {
      t = n.toArray(t, e);
      var r = this.p.byteLength();
      if ((t[0] === 4 || t[0] === 6 || t[0] === 7) && t.length - 1 == r * 2) {
        if (t[0] === 6) {
          o(t[t.length - 1] % 2 == 0);
        } else if (t[0] === 7) {
          o(t[t.length - 1] % 2 == 1);
        }
        return this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + r * 2));
      }
      if ((t[0] === 2 || t[0] === 3) && t.length - 1 === r) {
        return this.pointFromX(t.slice(1, 1 + r), t[0] === 3);
      }
      throw Error("Unknown point format");
    };
    h.prototype.encodeCompressed = function (t) {
      return this.encode(t, true);
    };
    h.prototype._encode = function (t) {
      var e = this.curve.p.byteLength();
      var r = this.getX().toArray("be", e);
      if (t) {
        return [this.getY().isEven() ? 2 : 3].concat(r);
      } else {
        return [4].concat(r, this.getY().toArray("be", e));
      }
    };
    h.prototype.encode = function (t, e) {
      return n.encode(this._encode(e), t);
    };
    h.prototype.precompute = function (t) {
      if (this.precomputed) {
        return this;
      }
      var e = {
        doubles: null,
        naf: null,
        beta: null
      };
      e.naf = this._getNAFPoints(8);
      e.doubles = this._getDoubles(4, t);
      e.beta = this._getBeta();
      this.precomputed = e;
      return this;
    };
    h.prototype._hasDoubles = function (t) {
      if (!this.precomputed) {
        return false;
      }
      var e = this.precomputed.doubles;
      return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step);
    };
    h.prototype._getDoubles = function (t, e) {
      if (this.precomputed && this.precomputed.doubles) {
        return this.precomputed.doubles;
      }
      var r = [this];
      var i = this;
      for (var n = 0; n < e; n += t) {
        for (var f = 0; f < t; f++) {
          i = i.dbl();
        }
        r.push(i);
      }
      return {
        step: t,
        points: r
      };
    };
    h.prototype._getNAFPoints = function (t) {
      if (this.precomputed && this.precomputed.naf) {
        return this.precomputed.naf;
      }
      var e = [this];
      for (var r = (1 << t) - 1, i = r === 1 ? null : this.dbl(), n = 1; n < r; n++) {
        e[n] = e[n - 1].add(i);
      }
      return {
        wnd: t,
        points: e
      };
    };
    h.prototype._getBeta = function () {
      return null;
    };
    h.prototype.dblp = function (t) {
      var e = this;
      for (var r = 0; r < t; r++) {
        e = e.dbl();
      }
      return e;
    };
  },
  2705: function (t, e, r) {
    "use strict";

    var i = r(4401);
    var n = r(711);
    var f = r(3782);
    var a = r(2727);
    var o = i.assert;
    function s(t) {
      this.twisted = (t.a | 0) != 1;
      this.mOneA = this.twisted && (t.a | 0) == -1;
      this.extended = this.mOneA;
      a.call(this, "edwards", t);
      this.a = new n(t.a, 16).umod(this.red.m);
      this.a = this.a.toRed(this.red);
      this.c = new n(t.c, 16).toRed(this.red);
      this.c2 = this.c.redSqr();
      this.d = new n(t.d, 16).toRed(this.red);
      this.dd = this.d.redAdd(this.d);
      o(!this.twisted || this.c.fromRed().cmpn(1) === 0);
      this.oneC = (t.c | 0) == 1;
    }
    function h(t, e, r, i, f) {
      a.BasePoint.call(this, t, "projective");
      if (e === null && r === null && i === null) {
        this.x = this.curve.zero;
        this.y = this.curve.one;
        this.z = this.curve.one;
        this.t = this.curve.zero;
        this.zOne = true;
      } else {
        this.x = new n(e, 16);
        this.y = new n(r, 16);
        this.z = i ? new n(i, 16) : this.curve.one;
        this.t = f && new n(f, 16);
        if (!this.x.red) {
          this.x = this.x.toRed(this.curve.red);
        }
        if (!this.y.red) {
          this.y = this.y.toRed(this.curve.red);
        }
        if (!this.z.red) {
          this.z = this.z.toRed(this.curve.red);
        }
        if (this.t && !this.t.red) {
          this.t = this.t.toRed(this.curve.red);
        }
        this.zOne = this.z === this.curve.one;
        if (this.curve.extended && !this.t) {
          this.t = this.x.redMul(this.y);
          if (!this.zOne) {
            this.t = this.t.redMul(this.z.redInvm());
          }
        }
      }
    }
    f(s, a);
    t.exports = s;
    s.prototype._mulA = function (t) {
      if (this.mOneA) {
        return t.redNeg();
      } else {
        return this.a.redMul(t);
      }
    };
    s.prototype._mulC = function (t) {
      if (this.oneC) {
        return t;
      } else {
        return this.c.redMul(t);
      }
    };
    s.prototype.jpoint = function (t, e, r, i) {
      return this.point(t, e, r, i);
    };
    s.prototype.pointFromX = function (t, e) {
      if (!(t = new n(t, 16)).red) {
        t = t.toRed(this.red);
      }
      var r = t.redSqr();
      var i = this.c2.redSub(this.a.redMul(r));
      var f = this.one.redSub(this.c2.redMul(this.d).redMul(r));
      var a = i.redMul(f.redInvm());
      var o = a.redSqrt();
      if (o.redSqr().redSub(a).cmp(this.zero) !== 0) {
        throw Error("invalid point");
      }
      var s = o.fromRed().isOdd();
      if (e && !s || !e && s) {
        o = o.redNeg();
      }
      return this.point(t, o);
    };
    s.prototype.pointFromY = function (t, e) {
      if (!(t = new n(t, 16)).red) {
        t = t.toRed(this.red);
      }
      var r = t.redSqr();
      var i = r.redSub(this.c2);
      var f = r.redMul(this.d).redMul(this.c2).redSub(this.a);
      var a = i.redMul(f.redInvm());
      if (a.cmp(this.zero) === 0) {
        if (!e) {
          return this.point(this.zero, t);
        } else {
          throw Error("invalid point");
        }
      }
      var o = a.redSqrt();
      if (o.redSqr().redSub(a).cmp(this.zero) !== 0) {
        throw Error("invalid point");
      }
      if (o.fromRed().isOdd() !== e) {
        o = o.redNeg();
      }
      return this.point(o, t);
    };
    s.prototype.validate = function (t) {
      if (t.isInfinity()) {
        return true;
      }
      t.normalize();
      var e = t.x.redSqr();
      var r = t.y.redSqr();
      var i = e.redMul(this.a).redAdd(r);
      var n = this.c2.redMul(this.one.redAdd(this.d.redMul(e).redMul(r)));
      return i.cmp(n) === 0;
    };
    f(h, a.BasePoint);
    s.prototype.pointFromJSON = function (t) {
      return h.fromJSON(this, t);
    };
    s.prototype.point = function (t, e, r, i) {
      return new h(this, t, e, r, i);
    };
    h.fromJSON = function (t, e) {
      return new h(t, e[0], e[1], e[2]);
    };
    h.prototype.inspect = function () {
      if (this.isInfinity()) {
        return "<EC Point Infinity>";
      } else {
        return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
      }
    };
    h.prototype.isInfinity = function () {
      return this.x.cmpn(0) === 0 && (this.y.cmp(this.z) === 0 || this.zOne && this.y.cmp(this.curve.c) === 0);
    };
    h.prototype._extDbl = function () {
      var t = this.x.redSqr();
      var e = this.y.redSqr();
      var r = this.z.redSqr();
      r = r.redIAdd(r);
      var i = this.curve._mulA(t);
      var n = this.x.redAdd(this.y).redSqr().redISub(t).redISub(e);
      var f = i.redAdd(e);
      var a = f.redSub(r);
      var o = i.redSub(e);
      var s = n.redMul(a);
      var h = f.redMul(o);
      var c = n.redMul(o);
      var d = a.redMul(f);
      return this.curve.point(s, h, d, c);
    };
    h.prototype._projDbl = function () {
      var t;
      var e;
      var r;
      var i = this.x.redAdd(this.y).redSqr();
      var n = this.x.redSqr();
      var f = this.y.redSqr();
      if (this.curve.twisted) {
        var a = this.curve._mulA(n);
        var o = a.redAdd(f);
        if (this.zOne) {
          t = i.redSub(n).redSub(f).redMul(o.redSub(this.curve.two));
          e = o.redMul(a.redSub(f));
          r = o.redSqr().redSub(o).redSub(o);
        } else {
          var s = this.z.redSqr();
          var h = o.redSub(s).redISub(s);
          t = i.redSub(n).redISub(f).redMul(h);
          e = o.redMul(a.redSub(f));
          r = o.redMul(h);
        }
      } else {
        var a = n.redAdd(f);
        var s = this.curve._mulC(this.z).redSqr();
        var h = a.redSub(s).redSub(s);
        t = this.curve._mulC(i.redISub(a)).redMul(h);
        e = this.curve._mulC(a).redMul(n.redISub(f));
        r = a.redMul(h);
      }
      return this.curve.point(t, e, r);
    };
    h.prototype.dbl = function () {
      if (this.isInfinity()) {
        return this;
      } else if (this.curve.extended) {
        return this._extDbl();
      } else {
        return this._projDbl();
      }
    };
    h.prototype._extAdd = function (t) {
      var e = this.y.redSub(this.x).redMul(t.y.redSub(t.x));
      var r = this.y.redAdd(this.x).redMul(t.y.redAdd(t.x));
      var i = this.t.redMul(this.curve.dd).redMul(t.t);
      var n = this.z.redMul(t.z.redAdd(t.z));
      var f = r.redSub(e);
      var a = n.redSub(i);
      var o = n.redAdd(i);
      var s = r.redAdd(e);
      var h = f.redMul(a);
      var c = o.redMul(s);
      var d = f.redMul(s);
      var u = a.redMul(o);
      return this.curve.point(h, c, u, d);
    };
    h.prototype._projAdd = function (t) {
      var e;
      var r;
      var i = this.z.redMul(t.z);
      var n = i.redSqr();
      var f = this.x.redMul(t.x);
      var a = this.y.redMul(t.y);
      var o = this.curve.d.redMul(f).redMul(a);
      var s = n.redSub(o);
      var h = n.redAdd(o);
      var c = this.x.redAdd(this.y).redMul(t.x.redAdd(t.y)).redISub(f).redISub(a);
      var d = i.redMul(s).redMul(c);
      if (this.curve.twisted) {
        e = i.redMul(h).redMul(a.redSub(this.curve._mulA(f)));
        r = s.redMul(h);
      } else {
        e = i.redMul(h).redMul(a.redSub(f));
        r = this.curve._mulC(s).redMul(h);
      }
      return this.curve.point(d, e, r);
    };
    h.prototype.add = function (t) {
      if (this.isInfinity()) {
        return t;
      } else if (t.isInfinity()) {
        return this;
      } else if (this.curve.extended) {
        return this._extAdd(t);
      } else {
        return this._projAdd(t);
      }
    };
    h.prototype.mul = function (t) {
      if (this._hasDoubles(t)) {
        return this.curve._fixedNafMul(this, t);
      } else {
        return this.curve._wnafMul(this, t);
      }
    };
    h.prototype.mulAdd = function (t, e, r) {
      return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, false);
    };
    h.prototype.jmulAdd = function (t, e, r) {
      return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, true);
    };
    h.prototype.normalize = function () {
      if (this.zOne) {
        return this;
      }
      var t = this.z.redInvm();
      this.x = this.x.redMul(t);
      this.y = this.y.redMul(t);
      this.t &&= this.t.redMul(t);
      this.z = this.curve.one;
      this.zOne = true;
      return this;
    };
    h.prototype.neg = function () {
      return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg());
    };
    h.prototype.getX = function () {
      this.normalize();
      return this.x.fromRed();
    };
    h.prototype.getY = function () {
      this.normalize();
      return this.y.fromRed();
    };
    h.prototype.eq = function (t) {
      return this === t || this.getX().cmp(t.getX()) === 0 && this.getY().cmp(t.getY()) === 0;
    };
    h.prototype.eqXToP = function (t) {
      var e = t.toRed(this.curve.red).redMul(this.z);
      if (this.x.cmp(e) === 0) {
        return true;
      }
      var r = t.clone();
      var i = this.curve.redN.redMul(this.z);
      while (true) {
        r.iadd(this.curve.n);
        if (r.cmp(this.curve.p) >= 0) {
          return false;
        }
        e.redIAdd(i);
        if (this.x.cmp(e) === 0) {
          return true;
        }
      }
    };
    h.prototype.toP = h.prototype.normalize;
    h.prototype.mixedAdd = h.prototype.add;
  },
  9359: function (t, e, r) {
    "use strict";

    e.base = r(2727);
    e.short = r(4720);
    e.mont = r(6653);
    e.edwards = r(2705);
  },
  6653: function (t, e, r) {
    "use strict";

    var i = r(711);
    var n = r(3782);
    var f = r(2727);
    var a = r(4401);
    function o(t) {
      f.call(this, "mont", t);
      this.a = new i(t.a, 16).toRed(this.red);
      this.b = new i(t.b, 16).toRed(this.red);
      this.i4 = new i(4).toRed(this.red).redInvm();
      this.two = new i(2).toRed(this.red);
      this.a24 = this.i4.redMul(this.a.redAdd(this.two));
    }
    function s(t, e, r) {
      f.BasePoint.call(this, t, "projective");
      if (e === null && r === null) {
        this.x = this.curve.one;
        this.z = this.curve.zero;
      } else {
        this.x = new i(e, 16);
        this.z = new i(r, 16);
        if (!this.x.red) {
          this.x = this.x.toRed(this.curve.red);
        }
        if (!this.z.red) {
          this.z = this.z.toRed(this.curve.red);
        }
      }
    }
    n(o, f);
    t.exports = o;
    o.prototype.validate = function (t) {
      var e = t.normalize().x;
      var r = e.redSqr();
      var i = r.redMul(e).redAdd(r.redMul(this.a)).redAdd(e);
      return i.redSqrt().redSqr().cmp(i) === 0;
    };
    n(s, f.BasePoint);
    o.prototype.decodePoint = function (t, e) {
      return this.point(a.toArray(t, e), 1);
    };
    o.prototype.point = function (t, e) {
      return new s(this, t, e);
    };
    o.prototype.pointFromJSON = function (t) {
      return s.fromJSON(this, t);
    };
    s.prototype.precompute = function () {};
    s.prototype._encode = function () {
      return this.getX().toArray("be", this.curve.p.byteLength());
    };
    s.fromJSON = function (t, e) {
      return new s(t, e[0], e[1] || t.one);
    };
    s.prototype.inspect = function () {
      if (this.isInfinity()) {
        return "<EC Point Infinity>";
      } else {
        return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
      }
    };
    s.prototype.isInfinity = function () {
      return this.z.cmpn(0) === 0;
    };
    s.prototype.dbl = function () {
      var t = this.x.redAdd(this.z).redSqr();
      var e = this.x.redSub(this.z).redSqr();
      var r = t.redSub(e);
      var i = t.redMul(e);
      var n = r.redMul(e.redAdd(this.curve.a24.redMul(r)));
      return this.curve.point(i, n);
    };
    s.prototype.add = function () {
      throw Error("Not supported on Montgomery curve");
    };
    s.prototype.diffAdd = function (t, e) {
      var r = this.x.redAdd(this.z);
      var i = this.x.redSub(this.z);
      var n = t.x.redAdd(t.z);
      var f = t.x.redSub(t.z).redMul(r);
      var a = n.redMul(i);
      var o = e.z.redMul(f.redAdd(a).redSqr());
      var s = e.x.redMul(f.redISub(a).redSqr());
      return this.curve.point(o, s);
    };
    s.prototype.mul = function (t) {
      for (var e = t.clone(), r = this, i = this.curve.point(null, null), n = []; e.cmpn(0) !== 0; e.iushrn(1)) {
        n.push(e.andln(1));
      }
      for (var f = n.length - 1; f >= 0; f--) {
        if (n[f] === 0) {
          r = r.diffAdd(i, this);
          i = i.dbl();
        } else {
          i = r.diffAdd(i, this);
          r = r.dbl();
        }
      }
      return i;
    };
    s.prototype.mulAdd = function () {
      throw Error("Not supported on Montgomery curve");
    };
    s.prototype.jumlAdd = function () {
      throw Error("Not supported on Montgomery curve");
    };
    s.prototype.eq = function (t) {
      return this.getX().cmp(t.getX()) === 0;
    };
    s.prototype.normalize = function () {
      this.x = this.x.redMul(this.z.redInvm());
      this.z = this.curve.one;
      return this;
    };
    s.prototype.getX = function () {
      this.normalize();
      return this.x.fromRed();
    };
  },
  4720: function (t, e, r) {
    "use strict";

    var i = r(4401);
    var n = r(711);
    var f = r(3782);
    var a = r(2727);
    var o = i.assert;
    function s(t) {
      a.call(this, "short", t);
      this.a = new n(t.a, 16).toRed(this.red);
      this.b = new n(t.b, 16).toRed(this.red);
      this.tinv = this.two.redInvm();
      this.zeroA = this.a.fromRed().cmpn(0) === 0;
      this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0;
      this.endo = this._getEndomorphism(t);
      this._endoWnafT1 = [,,,,];
      this._endoWnafT2 = [,,,,];
    }
    function h(t, e, r, i) {
      a.BasePoint.call(this, t, "affine");
      if (e === null && r === null) {
        this.x = null;
        this.y = null;
        this.inf = true;
      } else {
        this.x = new n(e, 16);
        this.y = new n(r, 16);
        if (i) {
          this.x.forceRed(this.curve.red);
          this.y.forceRed(this.curve.red);
        }
        if (!this.x.red) {
          this.x = this.x.toRed(this.curve.red);
        }
        if (!this.y.red) {
          this.y = this.y.toRed(this.curve.red);
        }
        this.inf = false;
      }
    }
    function c(t, e, r, i) {
      a.BasePoint.call(this, t, "jacobian");
      if (e === null && r === null && i === null) {
        this.x = this.curve.one;
        this.y = this.curve.one;
        this.z = new n(0);
      } else {
        this.x = new n(e, 16);
        this.y = new n(r, 16);
        this.z = new n(i, 16);
      }
      if (!this.x.red) {
        this.x = this.x.toRed(this.curve.red);
      }
      if (!this.y.red) {
        this.y = this.y.toRed(this.curve.red);
      }
      if (!this.z.red) {
        this.z = this.z.toRed(this.curve.red);
      }
      this.zOne = this.z === this.curve.one;
    }
    f(s, a);
    t.exports = s;
    s.prototype._getEndomorphism = function (t) {
      if (this.zeroA && this.g && this.n && this.p.modn(3) === 1) {
        if (t.beta) {
          e = new n(t.beta, 16).toRed(this.red);
        } else {
          var e;
          var r;
          var i;
          var f = this._getEndoRoots(this.p);
          e = (e = f[0].cmp(f[1]) < 0 ? f[0] : f[1]).toRed(this.red);
        }
        if (t.lambda) {
          r = new n(t.lambda, 16);
        } else {
          var a = this._getEndoRoots(this.n);
          if (this.g.mul(a[0]).x.cmp(this.g.x.redMul(e)) === 0) {
            r = a[0];
          } else {
            r = a[1];
            o(this.g.mul(r).x.cmp(this.g.x.redMul(e)) === 0);
          }
        }
        i = t.basis ? t.basis.map(function (t) {
          return {
            a: new n(t.a, 16),
            b: new n(t.b, 16)
          };
        }) : this._getEndoBasis(r);
        return {
          beta: e,
          lambda: r,
          basis: i
        };
      }
    };
    s.prototype._getEndoRoots = function (t) {
      var e = t === this.p ? this.red : n.mont(t);
      var r = new n(2).toRed(e).redInvm();
      var i = r.redNeg();
      var f = new n(3).toRed(e).redNeg().redSqrt().redMul(r);
      return [i.redAdd(f).fromRed(), i.redSub(f).fromRed()];
    };
    s.prototype._getEndoBasis = function (t) {
      var e;
      var r;
      var i;
      var f;
      var a;
      var o;
      var s;
      var h;
      var c;
      var d = this.n.ushrn(Math.floor(this.n.bitLength() / 2));
      for (var u = t, l = this.n.clone(), b = new n(1), p = new n(0), m = new n(0), v = new n(1), y = 0; u.cmpn(0) !== 0;) {
        var g = l.div(u);
        h = l.sub(g.mul(u));
        c = m.sub(g.mul(b));
        var _ = v.sub(g.mul(p));
        if (!i && h.cmp(d) < 0) {
          e = s.neg();
          r = b;
          i = h.neg();
          f = c;
        } else if (i && ++y == 2) {
          break;
        }
        s = h;
        l = u;
        u = h;
        m = b;
        b = c;
        v = p;
        p = _;
      }
      a = h.neg();
      o = c;
      var w = i.sqr().add(f.sqr());
      if (a.sqr().add(o.sqr()).cmp(w) >= 0) {
        a = e;
        o = r;
      }
      if (i.negative) {
        i = i.neg();
        f = f.neg();
      }
      if (a.negative) {
        a = a.neg();
        o = o.neg();
      }
      return [{
        a: i,
        b: f
      }, {
        a: a,
        b: o
      }];
    };
    s.prototype._endoSplit = function (t) {
      var e = this.endo.basis;
      var r = e[0];
      var i = e[1];
      var n = i.b.mul(t).divRound(this.n);
      var f = r.b.neg().mul(t).divRound(this.n);
      var a = n.mul(r.a);
      var o = f.mul(i.a);
      var s = n.mul(r.b);
      var h = f.mul(i.b);
      return {
        k1: t.sub(a).sub(o),
        k2: s.add(h).neg()
      };
    };
    s.prototype.pointFromX = function (t, e) {
      if (!(t = new n(t, 16)).red) {
        t = t.toRed(this.red);
      }
      var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b);
      var i = r.redSqrt();
      if (i.redSqr().redSub(r).cmp(this.zero) !== 0) {
        throw Error("invalid point");
      }
      var f = i.fromRed().isOdd();
      if (e && !f || !e && f) {
        i = i.redNeg();
      }
      return this.point(t, i);
    };
    s.prototype.validate = function (t) {
      if (t.inf) {
        return true;
      }
      var e = t.x;
      var r = t.y;
      var i = this.a.redMul(e);
      var n = e.redSqr().redMul(e).redIAdd(i).redIAdd(this.b);
      return r.redSqr().redISub(n).cmpn(0) === 0;
    };
    s.prototype._endoWnafMulAdd = function (t, e, r) {
      var i = this._endoWnafT1;
      var n = this._endoWnafT2;
      for (var f = 0; f < t.length; f++) {
        var a = this._endoSplit(e[f]);
        var o = t[f];
        var s = o._getBeta();
        if (a.k1.negative) {
          a.k1.ineg();
          o = o.neg(true);
        }
        if (a.k2.negative) {
          a.k2.ineg();
          s = s.neg(true);
        }
        i[f * 2] = o;
        i[f * 2 + 1] = s;
        n[f * 2] = a.k1;
        n[f * 2 + 1] = a.k2;
      }
      var h = this._wnafMulAdd(1, i, n, f * 2, r);
      for (var c = 0; c < f * 2; c++) {
        i[c] = null;
        n[c] = null;
      }
      return h;
    };
    f(h, a.BasePoint);
    s.prototype.point = function (t, e, r) {
      return new h(this, t, e, r);
    };
    s.prototype.pointFromJSON = function (t, e) {
      return h.fromJSON(this, t, e);
    };
    h.prototype._getBeta = function () {
      if (this.curve.endo) {
        var t = this.precomputed;
        if (t && t.beta) {
          return t.beta;
        }
        var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
        if (t) {
          var r = this.curve;
          function i(t) {
            return r.point(t.x.redMul(r.endo.beta), t.y);
          }
          t.beta = e;
          e.precomputed = {
            beta: null,
            naf: t.naf && {
              wnd: t.naf.wnd,
              points: t.naf.points.map(i)
            },
            doubles: t.doubles && {
              step: t.doubles.step,
              points: t.doubles.points.map(i)
            }
          };
        }
        return e;
      }
    };
    h.prototype.toJSON = function () {
      if (this.precomputed) {
        return [this.x, this.y, this.precomputed && {
          doubles: this.precomputed.doubles && {
            step: this.precomputed.doubles.step,
            points: this.precomputed.doubles.points.slice(1)
          },
          naf: this.precomputed.naf && {
            wnd: this.precomputed.naf.wnd,
            points: this.precomputed.naf.points.slice(1)
          }
        }];
      } else {
        return [this.x, this.y];
      }
    };
    h.fromJSON = function (t, e, r) {
      if (typeof e == "string") {
        e = JSON.parse(e);
      }
      var i = t.point(e[0], e[1], r);
      if (!e[2]) {
        return i;
      }
      function n(e) {
        return t.point(e[0], e[1], r);
      }
      var f = e[2];
      i.precomputed = {
        beta: null,
        doubles: f.doubles && {
          step: f.doubles.step,
          points: [i].concat(f.doubles.points.map(n))
        },
        naf: f.naf && {
          wnd: f.naf.wnd,
          points: [i].concat(f.naf.points.map(n))
        }
      };
      return i;
    };
    h.prototype.inspect = function () {
      if (this.isInfinity()) {
        return "<EC Point Infinity>";
      } else {
        return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
      }
    };
    h.prototype.isInfinity = function () {
      return this.inf;
    };
    h.prototype.add = function (t) {
      if (this.inf) {
        return t;
      }
      if (t.inf) {
        return this;
      }
      if (this.eq(t)) {
        return this.dbl();
      }
      if (this.neg().eq(t) || this.x.cmp(t.x) === 0) {
        return this.curve.point(null, null);
      }
      var e = this.y.redSub(t.y);
      if (e.cmpn(0) !== 0) {
        e = e.redMul(this.x.redSub(t.x).redInvm());
      }
      var r = e.redSqr().redISub(this.x).redISub(t.x);
      var i = e.redMul(this.x.redSub(r)).redISub(this.y);
      return this.curve.point(r, i);
    };
    h.prototype.dbl = function () {
      if (this.inf) {
        return this;
      }
      var t = this.y.redAdd(this.y);
      if (t.cmpn(0) === 0) {
        return this.curve.point(null, null);
      }
      var e = this.curve.a;
      var r = this.x.redSqr();
      var i = t.redInvm();
      var n = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(i);
      var f = n.redSqr().redISub(this.x.redAdd(this.x));
      var a = n.redMul(this.x.redSub(f)).redISub(this.y);
      return this.curve.point(f, a);
    };
    h.prototype.getX = function () {
      return this.x.fromRed();
    };
    h.prototype.getY = function () {
      return this.y.fromRed();
    };
    h.prototype.mul = function (t) {
      t = new n(t, 16);
      if (this.isInfinity()) {
        return this;
      } else if (this._hasDoubles(t)) {
        return this.curve._fixedNafMul(this, t);
      } else if (this.curve.endo) {
        return this.curve._endoWnafMulAdd([this], [t]);
      } else {
        return this.curve._wnafMul(this, t);
      }
    };
    h.prototype.mulAdd = function (t, e, r) {
      var i = [this, e];
      var n = [t, r];
      if (this.curve.endo) {
        return this.curve._endoWnafMulAdd(i, n);
      } else {
        return this.curve._wnafMulAdd(1, i, n, 2);
      }
    };
    h.prototype.jmulAdd = function (t, e, r) {
      var i = [this, e];
      var n = [t, r];
      if (this.curve.endo) {
        return this.curve._endoWnafMulAdd(i, n, true);
      } else {
        return this.curve._wnafMulAdd(1, i, n, 2, true);
      }
    };
    h.prototype.eq = function (t) {
      return this === t || this.inf === t.inf && (this.inf || this.x.cmp(t.x) === 0 && this.y.cmp(t.y) === 0);
    };
    h.prototype.neg = function (t) {
      if (this.inf) {
        return this;
      }
      var e = this.curve.point(this.x, this.y.redNeg());
      if (t && this.precomputed) {
        var r = this.precomputed;
        function i(t) {
          return t.neg();
        }
        e.precomputed = {
          naf: r.naf && {
            wnd: r.naf.wnd,
            points: r.naf.points.map(i)
          },
          doubles: r.doubles && {
            step: r.doubles.step,
            points: r.doubles.points.map(i)
          }
        };
      }
      return e;
    };
    h.prototype.toJ = function () {
      if (this.inf) {
        return this.curve.jpoint(null, null, null);
      } else {
        return this.curve.jpoint(this.x, this.y, this.curve.one);
      }
    };
    f(c, a.BasePoint);
    s.prototype.jpoint = function (t, e, r) {
      return new c(this, t, e, r);
    };
    c.prototype.toP = function () {
      if (this.isInfinity()) {
        return this.curve.point(null, null);
      }
      var t = this.z.redInvm();
      var e = t.redSqr();
      var r = this.x.redMul(e);
      var i = this.y.redMul(e).redMul(t);
      return this.curve.point(r, i);
    };
    c.prototype.neg = function () {
      return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
    };
    c.prototype.add = function (t) {
      if (this.isInfinity()) {
        return t;
      }
      if (t.isInfinity()) {
        return this;
      }
      var e = t.z.redSqr();
      var r = this.z.redSqr();
      var i = this.x.redMul(e);
      var n = t.x.redMul(r);
      var f = this.y.redMul(e.redMul(t.z));
      var a = t.y.redMul(r.redMul(this.z));
      var o = i.redSub(n);
      var s = f.redSub(a);
      if (o.cmpn(0) === 0) {
        if (s.cmpn(0) !== 0) {
          return this.curve.jpoint(null, null, null);
        } else {
          return this.dbl();
        }
      }
      var h = o.redSqr();
      var c = h.redMul(o);
      var d = i.redMul(h);
      var u = s.redSqr().redIAdd(c).redISub(d).redISub(d);
      var l = s.redMul(d.redISub(u)).redISub(f.redMul(c));
      var b = this.z.redMul(t.z).redMul(o);
      return this.curve.jpoint(u, l, b);
    };
    c.prototype.mixedAdd = function (t) {
      if (this.isInfinity()) {
        return t.toJ();
      }
      if (t.isInfinity()) {
        return this;
      }
      var e = this.z.redSqr();
      var r = this.x;
      var i = t.x.redMul(e);
      var n = this.y;
      var f = t.y.redMul(e).redMul(this.z);
      var a = r.redSub(i);
      var o = n.redSub(f);
      if (a.cmpn(0) === 0) {
        if (o.cmpn(0) !== 0) {
          return this.curve.jpoint(null, null, null);
        } else {
          return this.dbl();
        }
      }
      var s = a.redSqr();
      var h = s.redMul(a);
      var c = r.redMul(s);
      var d = o.redSqr().redIAdd(h).redISub(c).redISub(c);
      var u = o.redMul(c.redISub(d)).redISub(n.redMul(h));
      var l = this.z.redMul(a);
      return this.curve.jpoint(d, u, l);
    };
    c.prototype.dblp = function (t) {
      if (t === 0 || this.isInfinity()) {
        return this;
      }
      if (!t) {
        return this.dbl();
      }
      if (this.curve.zeroA || this.curve.threeA) {
        var e = this;
        for (var r = 0; r < t; r++) {
          e = e.dbl();
        }
        return e;
      }
      var i = this.curve.a;
      var n = this.curve.tinv;
      var f = this.x;
      var a = this.y;
      var o = this.z;
      var s = o.redSqr().redSqr();
      var h = a.redAdd(a);
      for (var r = 0; r < t; r++) {
        var c = f.redSqr();
        var d = h.redSqr();
        var u = d.redSqr();
        var l = c.redAdd(c).redIAdd(c).redIAdd(i.redMul(s));
        var b = f.redMul(d);
        var p = l.redSqr().redISub(b.redAdd(b));
        var m = b.redISub(p);
        var v = l.redMul(m);
        v = v.redIAdd(v).redISub(u);
        var y = h.redMul(o);
        if (r + 1 < t) {
          s = s.redMul(u);
        }
        f = p;
        o = y;
        h = v;
      }
      return this.curve.jpoint(f, h.redMul(n), o);
    };
    c.prototype.dbl = function () {
      if (this.isInfinity()) {
        return this;
      } else if (this.curve.zeroA) {
        return this._zeroDbl();
      } else if (this.curve.threeA) {
        return this._threeDbl();
      } else {
        return this._dbl();
      }
    };
    c.prototype._zeroDbl = function () {
      if (this.zOne) {
        var t;
        var e;
        var r;
        var i = this.x.redSqr();
        var n = this.y.redSqr();
        var f = n.redSqr();
        var a = this.x.redAdd(n).redSqr().redISub(i).redISub(f);
        a = a.redIAdd(a);
        var o = i.redAdd(i).redIAdd(i);
        var s = o.redSqr().redISub(a).redISub(a);
        var h = f.redIAdd(f);
        h = (h = h.redIAdd(h)).redIAdd(h);
        t = s;
        e = o.redMul(a.redISub(s)).redISub(h);
        r = this.y.redAdd(this.y);
      } else {
        var c = this.x.redSqr();
        var d = this.y.redSqr();
        var u = d.redSqr();
        var l = this.x.redAdd(d).redSqr().redISub(c).redISub(u);
        l = l.redIAdd(l);
        var b = c.redAdd(c).redIAdd(c);
        var p = b.redSqr();
        var m = u.redIAdd(u);
        m = (m = m.redIAdd(m)).redIAdd(m);
        t = p.redISub(l).redISub(l);
        e = b.redMul(l.redISub(t)).redISub(m);
        r = (r = this.y.redMul(this.z)).redIAdd(r);
      }
      return this.curve.jpoint(t, e, r);
    };
    c.prototype._threeDbl = function () {
      if (this.zOne) {
        var t;
        var e;
        var r;
        var i = this.x.redSqr();
        var n = this.y.redSqr();
        var f = n.redSqr();
        var a = this.x.redAdd(n).redSqr().redISub(i).redISub(f);
        a = a.redIAdd(a);
        var o = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a);
        var s = o.redSqr().redISub(a).redISub(a);
        t = s;
        var h = f.redIAdd(f);
        h = (h = h.redIAdd(h)).redIAdd(h);
        e = o.redMul(a.redISub(s)).redISub(h);
        r = this.y.redAdd(this.y);
      } else {
        var c = this.z.redSqr();
        var d = this.y.redSqr();
        var u = this.x.redMul(d);
        var l = this.x.redSub(c).redMul(this.x.redAdd(c));
        l = l.redAdd(l).redIAdd(l);
        var b = u.redIAdd(u);
        var p = (b = b.redIAdd(b)).redAdd(b);
        t = l.redSqr().redISub(p);
        r = this.y.redAdd(this.z).redSqr().redISub(d).redISub(c);
        var m = d.redSqr();
        m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m);
        e = l.redMul(b.redISub(t)).redISub(m);
      }
      return this.curve.jpoint(t, e, r);
    };
    c.prototype._dbl = function () {
      var t = this.curve.a;
      var e = this.x;
      var r = this.y;
      var i = this.z;
      var n = i.redSqr().redSqr();
      var f = e.redSqr();
      var a = r.redSqr();
      var o = f.redAdd(f).redIAdd(f).redIAdd(t.redMul(n));
      var s = e.redAdd(e);
      var h = (s = s.redIAdd(s)).redMul(a);
      var c = o.redSqr().redISub(h.redAdd(h));
      var d = h.redISub(c);
      var u = a.redSqr();
      u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
      var l = o.redMul(d).redISub(u);
      var b = r.redAdd(r).redMul(i);
      return this.curve.jpoint(c, l, b);
    };
    c.prototype.trpl = function () {
      if (!this.curve.zeroA) {
        return this.dbl().add(this);
      }
      var t = this.x.redSqr();
      var e = this.y.redSqr();
      var r = this.z.redSqr();
      var i = e.redSqr();
      var n = t.redAdd(t).redIAdd(t);
      var f = n.redSqr();
      var a = this.x.redAdd(e).redSqr().redISub(t).redISub(i);
      var o = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(f)).redSqr();
      var s = i.redIAdd(i);
      s = (s = (s = s.redIAdd(s)).redIAdd(s)).redIAdd(s);
      var h = n.redIAdd(a).redSqr().redISub(f).redISub(o).redISub(s);
      var c = e.redMul(h);
      c = (c = c.redIAdd(c)).redIAdd(c);
      var d = this.x.redMul(o).redISub(c);
      d = (d = d.redIAdd(d)).redIAdd(d);
      var u = this.y.redMul(h.redMul(s.redISub(h)).redISub(a.redMul(o)));
      u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
      var l = this.z.redAdd(a).redSqr().redISub(r).redISub(o);
      return this.curve.jpoint(d, u, l);
    };
    c.prototype.mul = function (t, e) {
      t = new n(t, e);
      return this.curve._wnafMul(this, t);
    };
    c.prototype.eq = function (t) {
      if (t.type === "affine") {
        return this.eq(t.toJ());
      }
      if (this === t) {
        return true;
      }
      var e = this.z.redSqr();
      var r = t.z.redSqr();
      if (this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0) !== 0) {
        return false;
      }
      var i = e.redMul(this.z);
      var n = r.redMul(t.z);
      return this.y.redMul(n).redISub(t.y.redMul(i)).cmpn(0) === 0;
    };
    c.prototype.eqXToP = function (t) {
      var e = this.z.redSqr();
      var r = t.toRed(this.curve.red).redMul(e);
      if (this.x.cmp(r) === 0) {
        return true;
      }
      var i = t.clone();
      var n = this.curve.redN.redMul(e);
      while (true) {
        i.iadd(this.curve.n);
        if (i.cmp(this.curve.p) >= 0) {
          return false;
        }
        r.redIAdd(n);
        if (this.x.cmp(r) === 0) {
          return true;
        }
      }
    };
    c.prototype.inspect = function () {
      if (this.isInfinity()) {
        return "<EC JPoint Infinity>";
      } else {
        return "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
      }
    };
    c.prototype.isInfinity = function () {
      return this.z.cmpn(0) === 0;
    };
  },
  6226: function (t, e, r) {
    "use strict";

    var i;
    var n = r(7028);
    var f = r(9359);
    var a = r(4401).assert;
    function o(t) {
      if (t.type === "short") {
        this.curve = new f.short(t);
      } else if (t.type === "edwards") {
        this.curve = new f.edwards(t);
      } else {
        this.curve = new f.mont(t);
      }
      this.g = this.curve.g;
      this.n = this.curve.n;
      this.hash = t.hash;
      a(this.g.validate(), "Invalid curve");
      a(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
    }
    function s(t, r) {
      Object.defineProperty(e, t, {
        configurable: true,
        enumerable: true,
        get: function () {
          var i = new o(r);
          Object.defineProperty(e, t, {
            configurable: true,
            enumerable: true,
            value: i
          });
          return i;
        }
      });
    }
    e.PresetCurve = o;
    s("p192", {
      type: "short",
      prime: "p192",
      p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
      a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
      b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
      n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
      hash: n.sha256,
      gRed: false,
      g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
    });
    s("p224", {
      type: "short",
      prime: "p224",
      p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
      a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
      b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
      n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
      hash: n.sha256,
      gRed: false,
      g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
    });
    s("p256", {
      type: "short",
      prime: null,
      p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
      a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
      b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
      n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
      hash: n.sha256,
      gRed: false,
      g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
    });
    s("p384", {
      type: "short",
      prime: null,
      p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
      a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
      b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
      n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
      hash: n.sha384,
      gRed: false,
      g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
    });
    s("p521", {
      type: "short",
      prime: null,
      p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
      a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
      b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
      n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
      hash: n.sha512,
      gRed: false,
      g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
    });
    s("curve25519", {
      type: "mont",
      prime: "p25519",
      p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
      a: "76d06",
      b: "1",
      n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
      hash: n.sha256,
      gRed: false,
      g: ["9"]
    });
    s("ed25519", {
      type: "edwards",
      prime: "p25519",
      p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
      a: "-1",
      c: "1",
      d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
      n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
      hash: n.sha256,
      gRed: false,
      g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
    });
    try {
      i = r(9702);
    } catch (t) {
      i = undefined;
    }
    s("secp256k1", {
      type: "short",
      prime: "k256",
      p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
      a: "0",
      b: "7",
      n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
      h: "1",
      hash: n.sha256,
      beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
      lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
      basis: [{
        a: "3086d221a7d46bcde86c90e49284eb15",
        b: "-e4437ed6010e88286f547fa90abfe4c3"
      }, {
        a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
        b: "3086d221a7d46bcde86c90e49284eb15"
      }],
      gRed: false,
      g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", i]
    });
  },
  4088: function (t, e, r) {
    "use strict";

    var i = r(711);
    var n = r(4910);
    var f = r(4401);
    var a = r(6226);
    var o = r(3500);
    var s = f.assert;
    var h = r(4724);
    var c = r(7526);
    function d(t) {
      if (!(this instanceof d)) {
        return new d(t);
      }
      if (typeof t == "string") {
        s(a.hasOwnProperty(t), "Unknown curve " + t);
        t = a[t];
      }
      if (t instanceof a.PresetCurve) {
        t = {
          curve: t
        };
      }
      this.curve = t.curve.curve;
      this.n = this.curve.n;
      this.nh = this.n.ushrn(1);
      this.g = this.curve.g;
      this.g = t.curve.g;
      this.g.precompute(t.curve.n.bitLength() + 1);
      this.hash = t.hash || t.curve.hash;
    }
    t.exports = d;
    d.prototype.keyPair = function (t) {
      return new h(this, t);
    };
    d.prototype.keyFromPrivate = function (t, e) {
      return h.fromPrivate(this, t, e);
    };
    d.prototype.keyFromPublic = function (t, e) {
      return h.fromPublic(this, t, e);
    };
    d.prototype.genKeyPair = function (t) {
      t ||= {};
      var e = new n({
        hash: this.hash,
        pers: t.pers,
        persEnc: t.persEnc || "utf8",
        entropy: t.entropy || o(this.hash.hmacStrength),
        entropyEnc: t.entropy && t.entropyEnc || "utf8",
        nonce: this.n.toArray()
      });
      var r = this.n.byteLength();
      var f = this.n.sub(new i(2));
      while (true) {
        var a = new i(e.generate(r));
        if (!(a.cmp(f) > 0)) {
          a.iaddn(1);
          return this.keyFromPrivate(a);
        }
      }
    };
    d.prototype._truncateToN = function (t, e) {
      var r = t.byteLength() * 8 - this.n.bitLength();
      if (r > 0) {
        t = t.ushrn(r);
      }
      if (!e && t.cmp(this.n) >= 0) {
        return t.sub(this.n);
      } else {
        return t;
      }
    };
    d.prototype.sign = function (t, e, r, f) {
      if (typeof r == "object") {
        f = r;
        r = null;
      }
      f ||= {};
      e = this.keyFromPrivate(e, r);
      t = this._truncateToN(new i(t, 16));
      var a = this.n.byteLength();
      var o = e.getPrivate().toArray("be", a);
      var s = t.toArray("be", a);
      var h = new n({
        hash: this.hash,
        entropy: o,
        nonce: s,
        pers: f.pers,
        persEnc: f.persEnc || "utf8"
      });
      var d = this.n.sub(new i(1));
      for (var u = 0;; u++) {
        var l = f.k ? f.k(u) : new i(h.generate(this.n.byteLength()));
        if ((l = this._truncateToN(l, true)).cmpn(1) <= 0 || l.cmp(d) >= 0) {
          continue;
        }
        var b = this.g.mul(l);
        if (!b.isInfinity()) {
          var p = b.getX();
          var m = p.umod(this.n);
          if (m.cmpn(0) !== 0) {
            var v = l.invm(this.n).mul(m.mul(e.getPrivate()).iadd(t));
            if ((v = v.umod(this.n)).cmpn(0) !== 0) {
              var y = !!b.getY().isOdd() | (p.cmp(m) !== 0) * 2;
              if (f.canonical && v.cmp(this.nh) > 0) {
                v = this.n.sub(v);
                y ^= 1;
              }
              return new c({
                r: m,
                s: v,
                recoveryParam: y
              });
            }
          }
        }
      }
    };
    d.prototype.verify = function (t, e, r, n) {
      t = this._truncateToN(new i(t, 16));
      r = this.keyFromPublic(r, n);
      var f = (e = new c(e, "hex")).r;
      var a = e.s;
      if (f.cmpn(1) < 0 || f.cmp(this.n) >= 0 || a.cmpn(1) < 0 || a.cmp(this.n) >= 0) {
        return false;
      }
      var o = a.invm(this.n);
      var s = o.mul(t).umod(this.n);
      var h = o.mul(f).umod(this.n);
      if (!this.curve._maxwellTrick) {
        var d = this.g.mulAdd(s, r.getPublic(), h);
        return !d.isInfinity() && d.getX().umod(this.n).cmp(f) === 0;
      }
      var d = this.g.jmulAdd(s, r.getPublic(), h);
      return !d.isInfinity() && d.eqXToP(f);
    };
    d.prototype.recoverPubKey = function (t, e, r, n) {
      s((r & 3) === r, "The recovery param is more than two bits");
      e = new c(e, n);
      var f = this.n;
      var a = new i(t);
      var o = e.r;
      var h = e.s;
      var d = r & 1;
      var u = r >> 1;
      if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u) {
        throw Error("Unable to find sencond key candinate");
      }
      o = u ? this.curve.pointFromX(o.add(this.curve.n), d) : this.curve.pointFromX(o, d);
      var l = e.r.invm(f);
      var b = f.sub(a).mul(l).umod(f);
      var p = h.mul(l).umod(f);
      return this.g.mulAdd(b, o, p);
    };
    d.prototype.getKeyRecoveryParam = function (t, e, r, i) {
      if ((e = new c(e, i)).recoveryParam !== null) {
        return e.recoveryParam;
      }
      var n;
      for (var f = 0; f < 4; f++) {
        try {
          n = this.recoverPubKey(t, e, f);
        } catch (t) {
          continue;
        }
        if (n.eq(r)) {
          return f;
        }
      }
      throw Error("Unable to find valid recovery factor");
    };
  },
  4724: function (t, e, r) {
    "use strict";

    var i = r(711);
    var n = r(4401).assert;
    function f(t, e) {
      this.ec = t;
      this.priv = null;
      this.pub = null;
      if (e.priv) {
        this._importPrivate(e.priv, e.privEnc);
      }
      if (e.pub) {
        this._importPublic(e.pub, e.pubEnc);
      }
    }
    t.exports = f;
    f.fromPublic = function (t, e, r) {
      if (e instanceof f) {
        return e;
      } else {
        return new f(t, {
          pub: e,
          pubEnc: r
        });
      }
    };
    f.fromPrivate = function (t, e, r) {
      if (e instanceof f) {
        return e;
      } else {
        return new f(t, {
          priv: e,
          privEnc: r
        });
      }
    };
    f.prototype.validate = function () {
      var t = this.getPublic();
      if (t.isInfinity()) {
        return {
          result: false,
          reason: "Invalid public key"
        };
      } else if (t.validate()) {
        if (t.mul(this.ec.curve.n).isInfinity()) {
          return {
            result: true,
            reason: null
          };
        } else {
          return {
            result: false,
            reason: "Public key * N != O"
          };
        }
      } else {
        return {
          result: false,
          reason: "Public key is not a point"
        };
      }
    };
    f.prototype.getPublic = function (t, e) {
      if (typeof t == "string") {
        e = t;
        t = null;
      }
      this.pub ||= this.ec.g.mul(this.priv);
      if (e) {
        return this.pub.encode(e, t);
      } else {
        return this.pub;
      }
    };
    f.prototype.getPrivate = function (t) {
      if (t === "hex") {
        return this.priv.toString(16, 2);
      } else {
        return this.priv;
      }
    };
    f.prototype._importPrivate = function (t, e) {
      this.priv = new i(t, e || 16);
      this.priv = this.priv.umod(this.ec.curve.n);
    };
    f.prototype._importPublic = function (t, e) {
      if (t.x || t.y) {
        if (this.ec.curve.type === "mont") {
          n(t.x, "Need x coordinate");
        } else if (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") {
          n(t.x && t.y, "Need both x and y coordinate");
        }
        this.pub = this.ec.curve.point(t.x, t.y);
        return;
      }
      this.pub = this.ec.curve.decodePoint(t, e);
    };
    f.prototype.derive = function (t) {
      return t.mul(this.priv).getX();
    };
    f.prototype.sign = function (t, e, r) {
      return this.ec.sign(t, this, e, r);
    };
    f.prototype.verify = function (t, e) {
      return this.ec.verify(t, e, this);
    };
    f.prototype.inspect = function () {
      return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
    };
  },
  7526: function (t, e, r) {
    "use strict";

    var i = r(711);
    var n = r(4401);
    var f = n.assert;
    function a(t, e) {
      if (t instanceof a) {
        return t;
      }
      if (!this._importDER(t, e)) {
        f(t.r && t.s, "Signature without r or s");
        this.r = new i(t.r, 16);
        this.s = new i(t.s, 16);
        if (t.recoveryParam === undefined) {
          this.recoveryParam = null;
        } else {
          this.recoveryParam = t.recoveryParam;
        }
      }
    }
    function o() {
      this.place = 0;
    }
    function s(t, e) {
      var r = t[e.place++];
      if (!(r & 128)) {
        return r;
      }
      var i = r & 15;
      if (i === 0 || i > 4) {
        return false;
      }
      var n = 0;
      for (var f = 0, a = e.place; f < i; f++, a++) {
        n <<= 8;
        n |= t[a];
        n >>>= 0;
      }
      return !(n <= 127) && (e.place = a, n);
    }
    function h(t) {
      for (var e = 0, r = t.length - 1; !t[e] && !(t[e + 1] & 128) && e < r;) {
        e++;
      }
      if (e === 0) {
        return t;
      } else {
        return t.slice(e);
      }
    }
    function c(t, e) {
      if (e < 128) {
        t.push(e);
        return;
      }
      var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
      for (t.push(r | 128); --r;) {
        t.push(e >>> (r << 3) & 255);
      }
      t.push(e);
    }
    t.exports = a;
    a.prototype._importDER = function (t, e) {
      t = n.toArray(t, e);
      var r = new o();
      if (t[r.place++] !== 48) {
        return false;
      }
      var f = s(t, r);
      if (f === false || f + r.place !== t.length || t[r.place++] !== 2) {
        return false;
      }
      var a = s(t, r);
      if (a === false) {
        return false;
      }
      var h = t.slice(r.place, a + r.place);
      r.place += a;
      if (t[r.place++] !== 2) {
        return false;
      }
      var c = s(t, r);
      if (c === false || t.length !== c + r.place) {
        return false;
      }
      var d = t.slice(r.place, c + r.place);
      if (h[0] === 0) {
        if (!(h[1] & 128)) {
          return false;
        } else {
          h = h.slice(1);
        }
      }
      if (d[0] === 0) {
        if (!(d[1] & 128)) {
          return false;
        } else {
          d = d.slice(1);
        }
      }
      this.r = new i(h);
      this.s = new i(d);
      this.recoveryParam = null;
      return true;
    };
    a.prototype.toDER = function (t) {
      var e = this.r.toArray();
      var r = this.s.toArray();
      if (e[0] & 128) {
        e = [0].concat(e);
      }
      if (r[0] & 128) {
        r = [0].concat(r);
      }
      e = h(e);
      r = h(r);
      while (!r[0] && !(r[1] & 128)) {
        r = r.slice(1);
      }
      var i = [2];
      c(i, e.length);
      (i = i.concat(e)).push(2);
      c(i, r.length);
      var f = i.concat(r);
      var a = [48];
      c(a, f.length);
      a = a.concat(f);
      return n.encode(a, t);
    };
  },
  8511: function (t, e, r) {
    "use strict";

    var i = r(7028);
    var n = r(6226);
    var f = r(4401);
    var a = f.assert;
    var o = f.parseBytes;
    var s = r(9917);
    var h = r(9314);
    function c(t) {
      a(t === "ed25519", "only tested with ed25519 so far");
      if (!(this instanceof c)) {
        return new c(t);
      }
      var t = n[t].curve;
      this.curve = t;
      this.g = t.g;
      this.g.precompute(t.n.bitLength() + 1);
      this.pointClass = t.point().constructor;
      this.encodingLength = Math.ceil(t.n.bitLength() / 8);
      this.hash = i.sha512;
    }
    t.exports = c;
    c.prototype.sign = function (t, e) {
      t = o(t);
      var r = this.keyFromSecret(e);
      var i = this.hashInt(r.messagePrefix(), t);
      var n = this.g.mul(i);
      var f = this.encodePoint(n);
      var a = this.hashInt(f, r.pubBytes(), t).mul(r.priv());
      var s = i.add(a).umod(this.curve.n);
      return this.makeSignature({
        R: n,
        S: s,
        Rencoded: f
      });
    };
    c.prototype.verify = function (t, e, r) {
      t = o(t);
      e = this.makeSignature(e);
      var i = this.keyFromPublic(r);
      var n = this.hashInt(e.Rencoded(), i.pubBytes(), t);
      var f = this.g.mul(e.S());
      return e.R().add(i.pub().mul(n)).eq(f);
    };
    c.prototype.hashInt = function () {
      var t = this.hash();
      for (var e = 0; e < arguments.length; e++) {
        t.update(arguments[e]);
      }
      return f.intFromLE(t.digest()).umod(this.curve.n);
    };
    c.prototype.keyFromPublic = function (t) {
      return s.fromPublic(this, t);
    };
    c.prototype.keyFromSecret = function (t) {
      return s.fromSecret(this, t);
    };
    c.prototype.makeSignature = function (t) {
      if (t instanceof h) {
        return t;
      } else {
        return new h(this, t);
      }
    };
    c.prototype.encodePoint = function (t) {
      var e = t.getY().toArray("le", this.encodingLength);
      e[this.encodingLength - 1] |= !!t.getX().isOdd() * 128;
      return e;
    };
    c.prototype.decodePoint = function (t) {
      var e = (t = f.parseBytes(t)).length - 1;
      var r = t.slice(0, e).concat(t[e] & -129);
      var i = (t[e] & 128) != 0;
      var n = f.intFromLE(r);
      return this.curve.pointFromY(n, i);
    };
    c.prototype.encodeInt = function (t) {
      return t.toArray("le", this.encodingLength);
    };
    c.prototype.decodeInt = function (t) {
      return f.intFromLE(t);
    };
    c.prototype.isPoint = function (t) {
      return t instanceof this.pointClass;
    };
  },
  9917: function (t, e, r) {
    "use strict";

    var i = r(4401);
    var n = i.assert;
    var f = i.parseBytes;
    var a = i.cachedProperty;
    function o(t, e) {
      this.eddsa = t;
      this._secret = f(e.secret);
      if (t.isPoint(e.pub)) {
        this._pub = e.pub;
      } else {
        this._pubBytes = f(e.pub);
      }
    }
    o.fromPublic = function (t, e) {
      if (e instanceof o) {
        return e;
      } else {
        return new o(t, {
          pub: e
        });
      }
    };
    o.fromSecret = function (t, e) {
      if (e instanceof o) {
        return e;
      } else {
        return new o(t, {
          secret: e
        });
      }
    };
    o.prototype.secret = function () {
      return this._secret;
    };
    a(o, "pubBytes", function () {
      return this.eddsa.encodePoint(this.pub());
    });
    a(o, "pub", function () {
      if (this._pubBytes) {
        return this.eddsa.decodePoint(this._pubBytes);
      } else {
        return this.eddsa.g.mul(this.priv());
      }
    });
    a(o, "privBytes", function () {
      var t = this.eddsa;
      var e = this.hash();
      var r = t.encodingLength - 1;
      var i = e.slice(0, t.encodingLength);
      i[0] &= 248;
      i[r] &= 127;
      i[r] |= 64;
      return i;
    });
    a(o, "priv", function () {
      return this.eddsa.decodeInt(this.privBytes());
    });
    a(o, "hash", function () {
      return this.eddsa.hash().update(this.secret()).digest();
    });
    a(o, "messagePrefix", function () {
      return this.hash().slice(this.eddsa.encodingLength);
    });
    o.prototype.sign = function (t) {
      n(this._secret, "KeyPair can only verify");
      return this.eddsa.sign(t, this);
    };
    o.prototype.verify = function (t, e) {
      return this.eddsa.verify(t, e, this);
    };
    o.prototype.getSecret = function (t) {
      n(this._secret, "KeyPair is public only");
      return i.encode(this.secret(), t);
    };
    o.prototype.getPublic = function (t) {
      return i.encode(this.pubBytes(), t);
    };
    t.exports = o;
  },
  9314: function (t, e, r) {
    "use strict";

    var i = r(711);
    var n = r(4401);
    var f = n.assert;
    var a = n.cachedProperty;
    var o = n.parseBytes;
    function s(t, e) {
      this.eddsa = t;
      if (typeof e != "object") {
        e = o(e);
      }
      if (Array.isArray(e)) {
        e = {
          R: e.slice(0, t.encodingLength),
          S: e.slice(t.encodingLength)
        };
      }
      f(e.R && e.S, "Signature without R or S");
      if (t.isPoint(e.R)) {
        this._R = e.R;
      }
      if (e.S instanceof i) {
        this._S = e.S;
      }
      this._Rencoded = Array.isArray(e.R) ? e.R : e.Rencoded;
      this._Sencoded = Array.isArray(e.S) ? e.S : e.Sencoded;
    }
    a(s, "S", function () {
      return this.eddsa.decodeInt(this.Sencoded());
    });
    a(s, "R", function () {
      return this.eddsa.decodePoint(this.Rencoded());
    });
    a(s, "Rencoded", function () {
      return this.eddsa.encodePoint(this.R());
    });
    a(s, "Sencoded", function () {
      return this.eddsa.encodeInt(this.S());
    });
    s.prototype.toBytes = function () {
      return this.Rencoded().concat(this.Sencoded());
    };
    s.prototype.toHex = function () {
      return n.encode(this.toBytes(), "hex").toUpperCase();
    };
    t.exports = s;
  },
  9702: function (t) {
    t.exports = {
      doubles: {
        step: 4,
        points: [["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"], ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"], ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"], ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"], ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"], ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"], ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"], ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"], ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"], ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"], ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"], ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"], ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"], ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"], ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"], ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"], ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"], ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"], ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"], ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"], ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"], ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"], ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"], ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"], ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"], ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"], ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"], ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"], ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"], ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"], ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"], ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"], ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"], ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"], ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"], ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"], ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"], ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"], ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"], ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"], ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"], ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"], ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"], ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"], ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"], ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"], ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"], ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"], ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"], ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"], ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"], ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"], ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"], ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"], ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"], ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"], ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"], ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"], ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"], ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"], ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"], ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"], ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"], ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"], ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]
      },
      naf: {
        wnd: 7,
        points: [["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"], ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"], ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"], ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"], ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"], ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"], ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"], ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"], ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"], ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"], ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"], ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"], ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"], ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"], ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"], ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"], ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"], ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"], ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"], ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"], ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"], ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"], ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"], ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"], ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"], ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"], ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"], ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"], ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"], ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"], ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"], ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"], ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"], ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"], ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"], ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"], ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"], ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"], ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"], ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"], ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"], ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"], ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"], ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"], ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"], ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"], ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"], ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"], ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"], ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"], ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"], ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"], ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"], ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"], ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"], ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"], ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"], ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"], ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"], ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"], ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"], ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"], ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"], ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"], ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"], ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"], ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"], ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"], ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"], ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"], ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"], ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"], ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"], ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"], ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"], ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"], ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"], ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"], ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"], ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"], ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"], ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"], ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"], ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"], ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"], ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"], ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"], ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"], ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"], ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"], ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"], ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"], ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"], ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"], ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"], ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"], ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"], ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"], ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"], ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"], ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"], ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"], ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"], ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"], ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"], ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"], ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"], ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"], ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"], ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"], ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"], ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"], ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"], ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"], ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"], ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"], ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"], ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"], ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"], ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"], ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"], ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"], ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"], ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"], ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"], ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"], ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]
      }
    };
  },
  4401: function (t, e, r) {
    "use strict";

    var i = r(711);
    var n = r(3523);
    var f = r(6545);
    e.assert = n;
    e.toArray = f.toArray;
    e.zero2 = f.zero2;
    e.toHex = f.toHex;
    e.encode = f.encode;
    e.getNAF = function (t, e, r) {
      var i = Array(Math.max(t.bitLength(), r) + 1);
      i.fill(0);
      var n = 1 << e + 1;
      var f = t.clone();
      for (var a = 0; a < i.length; a++) {
        var o;
        var s = f.andln(n - 1);
        if (f.isOdd()) {
          o = s > (n >> 1) - 1 ? (n >> 1) - s : s;
          f.isubn(o);
        } else {
          o = 0;
        }
        i[a] = o;
        f.iushrn(1);
      }
      return i;
    };
    e.getJSF = function (t, e) {
      var r = [[], []];
      t = t.clone();
      e = e.clone();
      for (var i = 0, n = 0; t.cmpn(-i) > 0 || e.cmpn(-n) > 0;) {
        var f;
        var a;
        var o = t.andln(3) + i & 3;
        var s = e.andln(3) + n & 3;
        if (o === 3) {
          o = -1;
        }
        if (s === 3) {
          s = -1;
        }
        if ((o & 1) == 0) {
          f = 0;
        } else {
          var h = t.andln(7) + i & 7;
          f = (h === 3 || h === 5) && s === 2 ? -o : o;
        }
        r[0].push(f);
        if ((s & 1) == 0) {
          a = 0;
        } else {
          var h = e.andln(7) + n & 7;
          a = (h === 3 || h === 5) && o === 2 ? -s : s;
        }
        r[1].push(a);
        if (i * 2 === f + 1) {
          i = 1 - i;
        }
        if (n * 2 === a + 1) {
          n = 1 - n;
        }
        t.iushrn(1);
        e.iushrn(1);
      }
      return r;
    };
    e.cachedProperty = function (t, e, r) {
      var i = "_" + e;
      t.prototype[e] = function () {
        if (this[i] !== undefined) {
          return this[i];
        } else {
          return this[i] = r.call(this);
        }
      };
    };
    e.parseBytes = function (t) {
      if (typeof t == "string") {
        return e.toArray(t, "hex");
      } else {
        return t;
      }
    };
    e.intFromLE = function (t) {
      return new i(t, "hex", "le");
    };
  },
  8368: function (t, e, r) {
    var i = r(6911).Buffer;
    var n = r(3533);
    t.exports = function (t, e, r, f) {
      if (!i.isBuffer(t)) {
        t = i.from(t, "binary");
      }
      if (e && (i.isBuffer(e) || (e = i.from(e, "binary")), e.length !== 8)) {
        throw RangeError("salt should be Buffer with 8 byte length");
      }
      for (var a = r / 8, o = i.alloc(a), s = i.alloc(f || 0), h = i.alloc(0); a > 0 || f > 0;) {
        var c = new n();
        c.update(h);
        c.update(t);
        if (e) {
          c.update(e);
        }
        h = c.digest();
        var d = 0;
        if (a > 0) {
          var u = o.length - a;
          d = Math.min(a, h.length);
          h.copy(o, u, 0, d);
          a -= d;
        }
        if (d < h.length && f > 0) {
          var l = s.length - f;
          var b = Math.min(f, h.length - d);
          h.copy(s, l, d, d + b);
          f -= b;
        }
      }
      h.fill(0);
      return {
        key: o,
        iv: s
      };
    };
  },
  9029: function (t, e, r) {
    "use strict";

    var i = r(6911).Buffer;
    var n = r(3726).Transform;
    function f(t) {
      n.call(this);
      this._block = i.allocUnsafe(t);
      this._blockSize = t;
      this._blockOffset = 0;
      this._length = [0, 0, 0, 0];
      this._finalized = false;
    }
    r(3782)(f, n);
    f.prototype._transform = function (t, e, r) {
      var i = null;
      try {
        this.update(t, e);
      } catch (t) {
        i = t;
      }
      r(i);
    };
    f.prototype._flush = function (t) {
      var e = null;
      try {
        this.push(this.digest());
      } catch (t) {
        e = t;
      }
      t(e);
    };
    f.prototype.update = function (t, e) {
      var r = t;
      if (!i.isBuffer(r) && typeof r != "string") {
        throw TypeError("Data must be a string or a buffer");
      }
      if (this._finalized) {
        throw Error("Digest already called");
      }
      if (!i.isBuffer(t)) {
        t = i.from(t, e);
      }
      var n = this._block;
      for (var f = 0; this._blockOffset + t.length - f >= this._blockSize;) {
        for (var a = this._blockOffset; a < this._blockSize;) {
          n[a++] = t[f++];
        }
        this._update();
        this._blockOffset = 0;
      }
      while (f < t.length) {
        n[this._blockOffset++] = t[f++];
      }
      for (var o = 0, s = t.length * 8; s > 0; ++o) {
        this._length[o] += s;
        if ((s = this._length[o] / 4294967296 | 0) > 0) {
          this._length[o] -= s * 4294967296;
        }
      }
      return this;
    };
    f.prototype._update = function () {
      throw Error("_update is not implemented");
    };
    f.prototype.digest = function (t) {
      if (this._finalized) {
        throw Error("Digest already called");
      }
      this._finalized = true;
      var e = this._digest();
      if (t !== undefined) {
        e = e.toString(t);
      }
      this._block.fill(0);
      this._blockOffset = 0;
      for (var r = 0; r < 4; ++r) {
        this._length[r] = 0;
      }
      return e;
    };
    f.prototype._digest = function () {
      throw Error("_digest is not implemented");
    };
    t.exports = f;
  },
  7028: function (t, e, r) {
    e.utils = r(263);
    e.common = r(1330);
    e.sha = r(301);
    e.ripemd = r(3079);
    e.hmac = r(3092);
    e.sha1 = e.sha.sha1;
    e.sha256 = e.sha.sha256;
    e.sha224 = e.sha.sha224;
    e.sha384 = e.sha.sha384;
    e.sha512 = e.sha.sha512;
    e.ripemd160 = e.ripemd.ripemd160;
  },
  1330: function (t, e, r) {
    "use strict";

    var i = r(263);
    var n = r(3523);
    function f() {
      this.pending = null;
      this.pendingTotal = 0;
      this.blockSize = this.constructor.blockSize;
      this.outSize = this.constructor.outSize;
      this.hmacStrength = this.constructor.hmacStrength;
      this.padLength = this.constructor.padLength / 8;
      this.endian = "big";
      this._delta8 = this.blockSize / 8;
      this._delta32 = this.blockSize / 32;
    }
    e.BlockHash = f;
    f.prototype.update = function (t, e) {
      t = i.toArray(t, e);
      if (this.pending) {
        this.pending = this.pending.concat(t);
      } else {
        this.pending = t;
      }
      this.pendingTotal += t.length;
      if (this.pending.length >= this._delta8) {
        var r = (t = this.pending).length % this._delta8;
        this.pending = t.slice(t.length - r, t.length);
        if (this.pending.length === 0) {
          this.pending = null;
        }
        t = i.join32(t, 0, t.length - r, this.endian);
        for (var n = 0; n < t.length; n += this._delta32) {
          this._update(t, n, n + this._delta32);
        }
      }
      return this;
    };
    f.prototype.digest = function (t) {
      this.update(this._pad());
      n(this.pending === null);
      return this._digest(t);
    };
    f.prototype._pad = function () {
      var t = this.pendingTotal;
      var e = this._delta8;
      var r = e - (t + this.padLength) % e;
      var i = Array(r + this.padLength);
      i[0] = 128;
      for (var n = 1; n < r; n++) {
        i[n] = 0;
      }
      t <<= 3;
      if (this.endian === "big") {
        for (var f = 8; f < this.padLength; f++) {
          i[n++] = 0;
        }
        i[n++] = 0;
        i[n++] = 0;
        i[n++] = 0;
        i[n++] = 0;
        i[n++] = t >>> 24 & 255;
        i[n++] = t >>> 16 & 255;
        i[n++] = t >>> 8 & 255;
        i[n++] = t & 255;
      } else {
        f = 8;
        i[n++] = t & 255;
        i[n++] = t >>> 8 & 255;
        i[n++] = t >>> 16 & 255;
        i[n++] = t >>> 24 & 255;
        i[n++] = 0;
        i[n++] = 0;
        i[n++] = 0;
        i[n++] = 0;
        for (; f < this.padLength; f++) {
          i[n++] = 0;
        }
      }
      return i;
    };
  },
  3092: function (t, e, r) {
    "use strict";

    var i = r(263);
    var n = r(3523);
    function f(t, e, r) {
      if (!(this instanceof f)) {
        return new f(t, e, r);
      }
      this.Hash = t;
      this.blockSize = t.blockSize / 8;
      this.outSize = t.outSize / 8;
      this.inner = null;
      this.outer = null;
      this._init(i.toArray(e, r));
    }
    t.exports = f;
    f.prototype._init = function (t) {
      if (t.length > this.blockSize) {
        t = new this.Hash().update(t).digest();
      }
      n(t.length <= this.blockSize);
      for (var e = t.length; e < this.blockSize; e++) {
        t.push(0);
      }
      for (e = 0; e < t.length; e++) {
        t[e] ^= 54;
      }
      e = 0;
      this.inner = new this.Hash().update(t);
      for (; e < t.length; e++) {
        t[e] ^= 106;
      }
      this.outer = new this.Hash().update(t);
    };
    f.prototype.update = function (t, e) {
      this.inner.update(t, e);
      return this;
    };
    f.prototype.digest = function (t) {
      this.outer.update(this.inner.digest());
      return this.outer.digest(t);
    };
  },
  3079: function (t, e, r) {
    "use strict";

    var i = r(263);
    var n = r(1330);
    var f = i.rotl32;
    var a = i.sum32;
    var o = i.sum32_3;
    var s = i.sum32_4;
    var h = n.BlockHash;
    function c() {
      if (!(this instanceof c)) {
        return new c();
      }
      h.call(this);
      this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      this.endian = "little";
    }
    function d(t, e, r, i) {
      if (t <= 15) {
        return e ^ r ^ i;
      } else if (t <= 31) {
        return e & r | ~e & i;
      } else if (t <= 47) {
        return (e | ~r) ^ i;
      } else if (t <= 63) {
        return e & i | r & ~i;
      } else {
        return e ^ (r | ~i);
      }
    }
    i.inherits(c, h);
    e.ripemd160 = c;
    c.blockSize = 512;
    c.outSize = 160;
    c.hmacStrength = 192;
    c.padLength = 64;
    c.prototype._update = function (t, e) {
      var r = this.h[0];
      var i = this.h[1];
      var n = this.h[2];
      var h = this.h[3];
      var c = this.h[4];
      var m = r;
      var v = i;
      var y = n;
      var g = h;
      var _ = c;
      for (var w = 0; w < 80; w++) {
        var x;
        var M;
        var S = a(f(s(r, d(w, i, n, h), t[u[w] + e], (x = w) <= 15 ? 0 : x <= 31 ? 1518500249 : x <= 47 ? 1859775393 : x <= 63 ? 2400959708 : 2840853838), b[w]), c);
        r = c;
        c = h;
        h = f(n, 10);
        n = i;
        i = S;
        S = a(f(s(m, d(79 - w, v, y, g), t[l[w] + e], (M = w) <= 15 ? 1352829926 : M <= 31 ? 1548603684 : M <= 47 ? 1836072691 : !!(M <= 63) * 2053994217), p[w]), _);
        m = _;
        _ = g;
        g = f(y, 10);
        y = v;
        v = S;
      }
      S = o(this.h[1], n, g);
      this.h[1] = o(this.h[2], h, _);
      this.h[2] = o(this.h[3], c, m);
      this.h[3] = o(this.h[4], r, v);
      this.h[4] = o(this.h[0], i, y);
      this.h[0] = S;
    };
    c.prototype._digest = function (t) {
      if (t === "hex") {
        return i.toHex32(this.h, "little");
      } else {
        return i.split32(this.h, "little");
      }
    };
    var u = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13];
    var l = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11];
    var b = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6];
    var p = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
  },
  301: function (t, e, r) {
    "use strict";

    e.sha1 = r(2742);
    e.sha224 = r(7105);
    e.sha256 = r(1525);
    e.sha384 = r(9948);
    e.sha512 = r(1319);
  },
  2742: function (t, e, r) {
    "use strict";

    var i = r(263);
    var n = r(1330);
    var f = r(2975);
    var a = i.rotl32;
    var o = i.sum32;
    var s = i.sum32_5;
    var h = f.ft_1;
    var c = n.BlockHash;
    var d = [1518500249, 1859775393, 2400959708, 3395469782];
    function u() {
      if (!(this instanceof u)) {
        return new u();
      }
      c.call(this);
      this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      this.W = Array(80);
    }
    i.inherits(u, c);
    t.exports = u;
    u.blockSize = 512;
    u.outSize = 160;
    u.hmacStrength = 80;
    u.padLength = 64;
    u.prototype._update = function (t, e) {
      var r = this.W;
      for (var i = 0; i < 16; i++) {
        r[i] = t[e + i];
      }
      for (; i < r.length; i++) {
        r[i] = a(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
      }
      var n = this.h[0];
      var f = this.h[1];
      var c = this.h[2];
      var u = this.h[3];
      var l = this.h[4];
      for (i = 0; i < r.length; i++) {
        var b = ~~(i / 20);
        var p = s(a(n, 5), h(b, f, c, u), l, r[i], d[b]);
        l = u;
        u = c;
        c = a(f, 30);
        f = n;
        n = p;
      }
      this.h[0] = o(this.h[0], n);
      this.h[1] = o(this.h[1], f);
      this.h[2] = o(this.h[2], c);
      this.h[3] = o(this.h[3], u);
      this.h[4] = o(this.h[4], l);
    };
    u.prototype._digest = function (t) {
      if (t === "hex") {
        return i.toHex32(this.h, "big");
      } else {
        return i.split32(this.h, "big");
      }
    };
  },
  7105: function (t, e, r) {
    "use strict";

    var i = r(263);
    var n = r(1525);
    function f() {
      if (!(this instanceof f)) {
        return new f();
      }
      n.call(this);
      this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
    }
    i.inherits(f, n);
    t.exports = f;
    f.blockSize = 512;
    f.outSize = 224;
    f.hmacStrength = 192;
    f.padLength = 64;
    f.prototype._digest = function (t) {
      if (t === "hex") {
        return i.toHex32(this.h.slice(0, 7), "big");
      } else {
        return i.split32(this.h.slice(0, 7), "big");
      }
    };
  },
  1525: function (t, e, r) {
    "use strict";

    var i = r(263);
    var n = r(1330);
    var f = r(2975);
    var a = r(3523);
    var o = i.sum32;
    var s = i.sum32_4;
    var h = i.sum32_5;
    var c = f.ch32;
    var d = f.maj32;
    var u = f.s0_256;
    var l = f.s1_256;
    var b = f.g0_256;
    var p = f.g1_256;
    var m = n.BlockHash;
    var v = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
    function y() {
      if (!(this instanceof y)) {
        return new y();
      }
      m.call(this);
      this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
      this.k = v;
      this.W = Array(64);
    }
    i.inherits(y, m);
    t.exports = y;
    y.blockSize = 512;
    y.outSize = 256;
    y.hmacStrength = 192;
    y.padLength = 64;
    y.prototype._update = function (t, e) {
      var r = this.W;
      for (var i = 0; i < 16; i++) {
        r[i] = t[e + i];
      }
      for (; i < r.length; i++) {
        r[i] = s(p(r[i - 2]), r[i - 7], b(r[i - 15]), r[i - 16]);
      }
      var n = this.h[0];
      var f = this.h[1];
      var m = this.h[2];
      var v = this.h[3];
      var y = this.h[4];
      var g = this.h[5];
      var _ = this.h[6];
      var w = this.h[7];
      a(this.k.length === r.length);
      i = 0;
      for (; i < r.length; i++) {
        var x = h(w, l(y), c(y, g, _), this.k[i], r[i]);
        var M = o(u(n), d(n, f, m));
        w = _;
        _ = g;
        g = y;
        y = o(v, x);
        v = m;
        m = f;
        f = n;
        n = o(x, M);
      }
      this.h[0] = o(this.h[0], n);
      this.h[1] = o(this.h[1], f);
      this.h[2] = o(this.h[2], m);
      this.h[3] = o(this.h[3], v);
      this.h[4] = o(this.h[4], y);
      this.h[5] = o(this.h[5], g);
      this.h[6] = o(this.h[6], _);
      this.h[7] = o(this.h[7], w);
    };
    y.prototype._digest = function (t) {
      if (t === "hex") {
        return i.toHex32(this.h, "big");
      } else {
        return i.split32(this.h, "big");
      }
    };
  },
  9948: function (t, e, r) {
    "use strict";

    var i = r(263);
    var n = r(1319);
    function f() {
      if (!(this instanceof f)) {
        return new f();
      }
      n.call(this);
      this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428];
    }
    i.inherits(f, n);
    t.exports = f;
    f.blockSize = 1024;
    f.outSize = 384;
    f.hmacStrength = 192;
    f.padLength = 128;
    f.prototype._digest = function (t) {
      if (t === "hex") {
        return i.toHex32(this.h.slice(0, 12), "big");
      } else {
        return i.split32(this.h.slice(0, 12), "big");
      }
    };
  },
  1319: function (t, e, r) {
    "use strict";

    var i = r(263);
    var n = r(1330);
    var f = r(3523);
    var a = i.rotr64_hi;
    var o = i.rotr64_lo;
    var s = i.shr64_hi;
    var h = i.shr64_lo;
    var c = i.sum64;
    var d = i.sum64_hi;
    var u = i.sum64_lo;
    var l = i.sum64_4_hi;
    var b = i.sum64_4_lo;
    var p = i.sum64_5_hi;
    var m = i.sum64_5_lo;
    var v = n.BlockHash;
    var y = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
    function g() {
      if (!(this instanceof g)) {
        return new g();
      }
      v.call(this);
      this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209];
      this.k = y;
      this.W = Array(160);
    }
    i.inherits(g, v);
    t.exports = g;
    g.blockSize = 1024;
    g.outSize = 512;
    g.hmacStrength = 192;
    g.padLength = 128;
    g.prototype._prepareBlock = function (t, e) {
      var r = this.W;
      for (var i = 0; i < 32; i++) {
        r[i] = t[e + i];
      }
      for (; i < r.length; i += 2) {
        var n = function (t, e) {
          var r = a(t, e, 19) ^ a(e, t, 29) ^ s(t, e, 6);
          if (r < 0) {
            r += 4294967296;
          }
          return r;
        }(r[i - 4], r[i - 3]);
        var f = function (t, e) {
          var r = o(t, e, 19) ^ o(e, t, 29) ^ h(t, e, 6);
          if (r < 0) {
            r += 4294967296;
          }
          return r;
        }(r[i - 4], r[i - 3]);
        var c = r[i - 14];
        var d = r[i - 13];
        var u = function (t, e) {
          var r = a(t, e, 1) ^ a(t, e, 8) ^ s(t, e, 7);
          if (r < 0) {
            r += 4294967296;
          }
          return r;
        }(r[i - 30], r[i - 29]);
        var p = function (t, e) {
          var r = o(t, e, 1) ^ o(t, e, 8) ^ h(t, e, 7);
          if (r < 0) {
            r += 4294967296;
          }
          return r;
        }(r[i - 30], r[i - 29]);
        var m = r[i - 32];
        var v = r[i - 31];
        r[i] = l(n, f, c, d, u, p, m, v);
        r[i + 1] = b(n, f, c, d, u, p, m, v);
      }
    };
    g.prototype._update = function (t, e) {
      this._prepareBlock(t, e);
      var r = this.W;
      var i = this.h[0];
      var n = this.h[1];
      var s = this.h[2];
      var h = this.h[3];
      var l = this.h[4];
      var b = this.h[5];
      var v = this.h[6];
      var y = this.h[7];
      var g = this.h[8];
      var _ = this.h[9];
      var w = this.h[10];
      var x = this.h[11];
      var M = this.h[12];
      var S = this.h[13];
      var k = this.h[14];
      var E = this.h[15];
      f(this.k.length === r.length);
      for (var A = 0; A < r.length; A += 2) {
        var R = k;
        var I = E;
        var B = function (t, e) {
          var r = a(t, e, 14) ^ a(t, e, 18) ^ a(e, t, 9);
          if (r < 0) {
            r += 4294967296;
          }
          return r;
        }(g, _);
        var P = function (t, e) {
          var r = o(t, e, 14) ^ o(t, e, 18) ^ o(e, t, 9);
          if (r < 0) {
            r += 4294967296;
          }
          return r;
        }(g, _);
        var T = function (t, e, r, i, n) {
          var f = t & r ^ ~t & n;
          if (f < 0) {
            f += 4294967296;
          }
          return f;
        }(g, 0, w, 0, M, S);
        var C = function (t, e, r, i, n, f) {
          var a = e & i ^ ~e & f;
          if (a < 0) {
            a += 4294967296;
          }
          return a;
        }(0, _, 0, x, 0, S);
        var j = this.k[A];
        var O = this.k[A + 1];
        var D = r[A];
        var N = r[A + 1];
        var q = p(R, I, B, P, T, C, j, O, D, N);
        var L = m(R, I, B, P, T, C, j, O, D, N);
        R = function (t, e) {
          var r = a(t, e, 28) ^ a(e, t, 2) ^ a(e, t, 7);
          if (r < 0) {
            r += 4294967296;
          }
          return r;
        }(i, n);
        I = function (t, e) {
          var r = o(t, e, 28) ^ o(e, t, 2) ^ o(e, t, 7);
          if (r < 0) {
            r += 4294967296;
          }
          return r;
        }(i, n);
        var z = d(R, I, B = function (t, e, r, i, n) {
          var f = t & r ^ t & n ^ r & n;
          if (f < 0) {
            f += 4294967296;
          }
          return f;
        }(i, 0, s, 0, l, b), P = function (t, e, r, i, n, f) {
          var a = e & i ^ e & f ^ i & f;
          if (a < 0) {
            a += 4294967296;
          }
          return a;
        }(0, n, 0, h, 0, b));
        var U = u(R, I, B, P);
        k = M;
        E = S;
        M = w;
        S = x;
        w = g;
        x = _;
        g = d(v, y, q, L);
        _ = u(y, y, q, L);
        v = l;
        y = b;
        l = s;
        b = h;
        s = i;
        h = n;
        i = d(q, L, z, U);
        n = u(q, L, z, U);
      }
      c(this.h, 0, i, n);
      c(this.h, 2, s, h);
      c(this.h, 4, l, b);
      c(this.h, 6, v, y);
      c(this.h, 8, g, _);
      c(this.h, 10, w, x);
      c(this.h, 12, M, S);
      c(this.h, 14, k, E);
    };
    g.prototype._digest = function (t) {
      if (t === "hex") {
        return i.toHex32(this.h, "big");
      } else {
        return i.split32(this.h, "big");
      }
    };
  },
  2975: function (t, e, r) {
    "use strict";

    var i = r(263).rotr32;
    function n(t, e, r) {
      return t & e ^ t & r ^ e & r;
    }
    e.ft_1 = function (t, e, r, i) {
      var f;
      if (t === 0) {
        return (f = e) & r ^ ~f & i;
      } else if (t === 1 || t === 3) {
        return e ^ r ^ i;
      } else if (t === 2) {
        return n(e, r, i);
      } else {
        return undefined;
      }
    };
    e.ch32 = function (t, e, r) {
      return t & e ^ ~t & r;
    };
    e.maj32 = n;
    e.p32 = function (t, e, r) {
      return t ^ e ^ r;
    };
    e.s0_256 = function (t) {
      return i(t, 2) ^ i(t, 13) ^ i(t, 22);
    };
    e.s1_256 = function (t) {
      return i(t, 6) ^ i(t, 11) ^ i(t, 25);
    };
    e.g0_256 = function (t) {
      return i(t, 7) ^ i(t, 18) ^ t >>> 3;
    };
    e.g1_256 = function (t) {
      return i(t, 17) ^ i(t, 19) ^ t >>> 10;
    };
  },
  263: function (t, e, r) {
    "use strict";

    var i = r(3523);
    function n(t) {
      return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (t & 255) << 24) >>> 0;
    }
    function f(t) {
      if (t.length === 1) {
        return "0" + t;
      } else {
        return t;
      }
    }
    function a(t) {
      if (t.length === 7) {
        return "0" + t;
      }
      if (t.length === 6) {
        return "00" + t;
      }
      if (t.length === 5) {
        return "000" + t;
      }
      if (t.length === 4) {
        return "0000" + t;
      }
      if (t.length === 3) {
        return "00000" + t;
      } else if (t.length === 2) {
        return "000000" + t;
      } else if (t.length === 1) {
        return "0000000" + t;
      } else {
        return t;
      }
    }
    e.inherits = r(3782);
    e.toArray = function (t, e) {
      if (Array.isArray(t)) {
        return t.slice();
      }
      if (!t) {
        return [];
      }
      var r = [];
      if (typeof t == "string") {
        if (e) {
          if (e === "hex") {
            if ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0) {
              t = "0" + t;
            }
            n = 0;
            for (; n < t.length; n += 2) {
              r.push(parseInt(t[n] + t[n + 1], 16));
            }
          }
        } else {
          var i = 0;
          for (var n = 0; n < t.length; n++) {
            var f;
            var a;
            var o = t.charCodeAt(n);
            if (o < 128) {
              r[i++] = o;
            } else {
              if (o < 2048) {
                r[i++] = o >> 6 | 192;
              } else {
                f = t;
                a = n;
                if ((f.charCodeAt(a) & 64512) != 55296 || a < 0 || a + 1 >= f.length ? 1 : (f.charCodeAt(a + 1) & 64512) != 56320) {
                  r[i++] = o >> 12 | 224;
                } else {
                  o = 65536 + ((o & 1023) << 10) + (t.charCodeAt(++n) & 1023);
                  r[i++] = o >> 18 | 240;
                  r[i++] = o >> 12 & 63 | 128;
                }
                r[i++] = o >> 6 & 63 | 128;
              }
              r[i++] = o & 63 | 128;
            }
          }
        }
      } else {
        for (n = 0; n < t.length; n++) {
          r[n] = t[n] | 0;
        }
      }
      return r;
    };
    e.toHex = function (t) {
      var e = "";
      for (var r = 0; r < t.length; r++) {
        e += f(t[r].toString(16));
      }
      return e;
    };
    e.htonl = n;
    e.toHex32 = function (t, e) {
      var r = "";
      for (var i = 0; i < t.length; i++) {
        var f = t[i];
        if (e === "little") {
          f = n(f);
        }
        r += a(f.toString(16));
      }
      return r;
    };
    e.zero2 = f;
    e.zero8 = a;
    e.join32 = function (t, e, r, n) {
      var f;
      var a = r - e;
      i(a % 4 == 0);
      for (var o = Array(a / 4), s = 0, h = e; s < o.length; s++, h += 4) {
        f = n === "big" ? t[h] << 24 | t[h + 1] << 16 | t[h + 2] << 8 | t[h + 3] : t[h + 3] << 24 | t[h + 2] << 16 | t[h + 1] << 8 | t[h];
        o[s] = f >>> 0;
      }
      return o;
    };
    e.split32 = function (t, e) {
      var r = Array(t.length * 4);
      for (var i = 0, n = 0; i < t.length; i++, n += 4) {
        var f = t[i];
        if (e === "big") {
          r[n] = f >>> 24;
          r[n + 1] = f >>> 16 & 255;
          r[n + 2] = f >>> 8 & 255;
          r[n + 3] = f & 255;
        } else {
          r[n + 3] = f >>> 24;
          r[n + 2] = f >>> 16 & 255;
          r[n + 1] = f >>> 8 & 255;
          r[n] = f & 255;
        }
      }
      return r;
    };
    e.rotr32 = function (t, e) {
      return t >>> e | t << 32 - e;
    };
    e.rotl32 = function (t, e) {
      return t << e | t >>> 32 - e;
    };
    e.sum32 = function (t, e) {
      return t + e >>> 0;
    };
    e.sum32_3 = function (t, e, r) {
      return t + e + r >>> 0;
    };
    e.sum32_4 = function (t, e, r, i) {
      return t + e + r + i >>> 0;
    };
    e.sum32_5 = function (t, e, r, i, n) {
      return t + e + r + i + n >>> 0;
    };
    e.sum64 = function (t, e, r, i) {
      var n = t[e];
      var f = i + t[e + 1] >>> 0;
      t[e] = +(f < i) + r + n >>> 0;
      t[e + 1] = f;
    };
    e.sum64_hi = function (t, e, r, i) {
      return +(e + i >>> 0 < e) + t + r >>> 0;
    };
    e.sum64_lo = function (t, e, r, i) {
      return e + i >>> 0;
    };
    e.sum64_4_hi = function (t, e, r, i, n, f, a, o) {
      var s;
      var h = e;
      return t + r + n + a + (s = 0 + +((h = h + i >>> 0) < e) + +((h = h + f >>> 0) < f) + +((h = h + o >>> 0) < o)) >>> 0;
    };
    e.sum64_4_lo = function (t, e, r, i, n, f, a, o) {
      return e + i + f + o >>> 0;
    };
    e.sum64_5_hi = function (t, e, r, i, n, f, a, o, s, h) {
      var c;
      var d = e;
      return t + r + n + a + s + (c = 0 + +((d = d + i >>> 0) < e) + +((d = d + f >>> 0) < f) + +((d = d + o >>> 0) < o) + +((d = d + h >>> 0) < h)) >>> 0;
    };
    e.sum64_5_lo = function (t, e, r, i, n, f, a, o, s, h) {
      return e + i + f + o + h >>> 0;
    };
    e.rotr64_hi = function (t, e, r) {
      return (e << 32 - r | t >>> r) >>> 0;
    };
    e.rotr64_lo = function (t, e, r) {
      return (t << 32 - r | e >>> r) >>> 0;
    };
    e.shr64_hi = function (t, e, r) {
      return t >>> r;
    };
    e.shr64_lo = function (t, e, r) {
      return (t << 32 - r | e >>> r) >>> 0;
    };
  },
  4910: function (t, e, r) {
    "use strict";

    var i = r(7028);
    var n = r(6545);
    var f = r(3523);
    function a(t) {
      if (!(this instanceof a)) {
        return new a(t);
      }
      this.hash = t.hash;
      this.predResist = !!t.predResist;
      this.outLen = this.hash.outSize;
      this.minEntropy = t.minEntropy || this.hash.hmacStrength;
      this._reseed = null;
      this.reseedInterval = null;
      this.K = null;
      this.V = null;
      var e = n.toArray(t.entropy, t.entropyEnc || "hex");
      var r = n.toArray(t.nonce, t.nonceEnc || "hex");
      var i = n.toArray(t.pers, t.persEnc || "hex");
      f(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits");
      this._init(e, r, i);
    }
    t.exports = a;
    a.prototype._init = function (t, e, r) {
      var i = t.concat(e).concat(r);
      this.K = Array(this.outLen / 8);
      this.V = Array(this.outLen / 8);
      for (var n = 0; n < this.V.length; n++) {
        this.K[n] = 0;
        this.V[n] = 1;
      }
      this._update(i);
      this._reseed = 1;
      this.reseedInterval = 281474976710656;
    };
    a.prototype._hmac = function () {
      return new i.hmac(this.hash, this.K);
    };
    a.prototype._update = function (t) {
      var e = this._hmac().update(this.V).update([0]);
      if (t) {
        e = e.update(t);
      }
      this.K = e.digest();
      this.V = this._hmac().update(this.V).digest();
      if (t) {
        this.K = this._hmac().update(this.V).update([1]).update(t).digest();
        this.V = this._hmac().update(this.V).digest();
      }
    };
    a.prototype.reseed = function (t, e, r, i) {
      if (typeof e != "string") {
        i = r;
        r = e;
        e = null;
      }
      t = n.toArray(t, e);
      r = n.toArray(r, i);
      f(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits");
      this._update(t.concat(r || []));
      this._reseed = 1;
    };
    a.prototype.generate = function (t, e, r, i) {
      if (this._reseed > this.reseedInterval) {
        throw Error("Reseed is required");
      }
      if (typeof e != "string") {
        i = r;
        r = e;
        e = null;
      }
      if (r) {
        r = n.toArray(r, i || "hex");
        this._update(r);
      }
      for (var f = []; f.length < t;) {
        this.V = this._hmac().update(this.V).digest();
        f = f.concat(this.V);
      }
      var a = f.slice(0, t);
      this._update(r);
      this._reseed++;
      return n.encode(a, e);
    };
  },
  3782: function (t) {
    if (typeof Object.create == "function") {
      t.exports = function (t, e) {
        if (e) {
          t.super_ = e;
          t.prototype = Object.create(e.prototype, {
            constructor: {
              value: t,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      t.exports = function (t, e) {
        if (e) {
          t.super_ = e;
          function r() {}
          r.prototype = e.prototype;
          t.prototype = new r();
          t.prototype.constructor = t;
        }
      };
    }
  },
  3533: function (t, e, r) {
    "use strict";

    var i = r(3782);
    var n = r(9029);
    var f = r(6911).Buffer;
    var a = Array(16);
    function o() {
      n.call(this, 64);
      this._a = 1732584193;
      this._b = 4023233417;
      this._c = 2562383102;
      this._d = 271733878;
    }
    function s(t, e) {
      return t << e | t >>> 32 - e;
    }
    function h(t, e, r, i, n, f, a) {
      return s(t + (e & r | ~e & i) + n + f | 0, a) + e | 0;
    }
    function c(t, e, r, i, n, f, a) {
      return s(t + (e & i | r & ~i) + n + f | 0, a) + e | 0;
    }
    function d(t, e, r, i, n, f, a) {
      return s(t + (e ^ r ^ i) + n + f | 0, a) + e | 0;
    }
    function u(t, e, r, i, n, f, a) {
      return s(t + (r ^ (e | ~i)) + n + f | 0, a) + e | 0;
    }
    i(o, n);
    o.prototype._update = function () {
      for (var t = 0; t < 16; ++t) {
        a[t] = this._block.readInt32LE(t * 4);
      }
      var e = this._a;
      var r = this._b;
      var i = this._c;
      var n = this._d;
      e = h(e, r, i, n, a[0], 3614090360, 7);
      n = h(n, e, r, i, a[1], 3905402710, 12);
      i = h(i, n, e, r, a[2], 606105819, 17);
      r = h(r, i, n, e, a[3], 3250441966, 22);
      e = h(e, r, i, n, a[4], 4118548399, 7);
      n = h(n, e, r, i, a[5], 1200080426, 12);
      i = h(i, n, e, r, a[6], 2821735955, 17);
      r = h(r, i, n, e, a[7], 4249261313, 22);
      e = h(e, r, i, n, a[8], 1770035416, 7);
      n = h(n, e, r, i, a[9], 2336552879, 12);
      i = h(i, n, e, r, a[10], 4294925233, 17);
      r = h(r, i, n, e, a[11], 2304563134, 22);
      e = h(e, r, i, n, a[12], 1804603682, 7);
      n = h(n, e, r, i, a[13], 4254626195, 12);
      i = h(i, n, e, r, a[14], 2792965006, 17);
      r = h(r, i, n, e, a[15], 1236535329, 22);
      e = c(e, r, i, n, a[1], 4129170786, 5);
      n = c(n, e, r, i, a[6], 3225465664, 9);
      i = c(i, n, e, r, a[11], 643717713, 14);
      r = c(r, i, n, e, a[0], 3921069994, 20);
      e = c(e, r, i, n, a[5], 3593408605, 5);
      n = c(n, e, r, i, a[10], 38016083, 9);
      i = c(i, n, e, r, a[15], 3634488961, 14);
      r = c(r, i, n, e, a[4], 3889429448, 20);
      e = c(e, r, i, n, a[9], 568446438, 5);
      n = c(n, e, r, i, a[14], 3275163606, 9);
      i = c(i, n, e, r, a[3], 4107603335, 14);
      r = c(r, i, n, e, a[8], 1163531501, 20);
      e = c(e, r, i, n, a[13], 2850285829, 5);
      n = c(n, e, r, i, a[2], 4243563512, 9);
      i = c(i, n, e, r, a[7], 1735328473, 14);
      r = c(r, i, n, e, a[12], 2368359562, 20);
      e = d(e, r, i, n, a[5], 4294588738, 4);
      n = d(n, e, r, i, a[8], 2272392833, 11);
      i = d(i, n, e, r, a[11], 1839030562, 16);
      r = d(r, i, n, e, a[14], 4259657740, 23);
      e = d(e, r, i, n, a[1], 2763975236, 4);
      n = d(n, e, r, i, a[4], 1272893353, 11);
      i = d(i, n, e, r, a[7], 4139469664, 16);
      r = d(r, i, n, e, a[10], 3200236656, 23);
      e = d(e, r, i, n, a[13], 681279174, 4);
      n = d(n, e, r, i, a[0], 3936430074, 11);
      i = d(i, n, e, r, a[3], 3572445317, 16);
      r = d(r, i, n, e, a[6], 76029189, 23);
      e = d(e, r, i, n, a[9], 3654602809, 4);
      n = d(n, e, r, i, a[12], 3873151461, 11);
      i = d(i, n, e, r, a[15], 530742520, 16);
      r = d(r, i, n, e, a[2], 3299628645, 23);
      e = u(e, r, i, n, a[0], 4096336452, 6);
      n = u(n, e, r, i, a[7], 1126891415, 10);
      i = u(i, n, e, r, a[14], 2878612391, 15);
      r = u(r, i, n, e, a[5], 4237533241, 21);
      e = u(e, r, i, n, a[12], 1700485571, 6);
      n = u(n, e, r, i, a[3], 2399980690, 10);
      i = u(i, n, e, r, a[10], 4293915773, 15);
      r = u(r, i, n, e, a[1], 2240044497, 21);
      e = u(e, r, i, n, a[8], 1873313359, 6);
      n = u(n, e, r, i, a[15], 4264355552, 10);
      i = u(i, n, e, r, a[6], 2734768916, 15);
      r = u(r, i, n, e, a[13], 1309151649, 21);
      e = u(e, r, i, n, a[4], 4149444226, 6);
      n = u(n, e, r, i, a[11], 3174756917, 10);
      i = u(i, n, e, r, a[2], 718787259, 15);
      r = u(r, i, n, e, a[9], 3951481745, 21);
      this._a = this._a + e | 0;
      this._b = this._b + r | 0;
      this._c = this._c + i | 0;
      this._d = this._d + n | 0;
    };
    o.prototype._digest = function () {
      this._block[this._blockOffset++] = 128;
      if (this._blockOffset > 56) {
        this._block.fill(0, this._blockOffset, 64);
        this._update();
        this._blockOffset = 0;
      }
      this._block.fill(0, this._blockOffset, 56);
      this._block.writeUInt32LE(this._length[0], 56);
      this._block.writeUInt32LE(this._length[1], 60);
      this._update();
      var t = f.allocUnsafe(16);
      t.writeInt32LE(this._a, 0);
      t.writeInt32LE(this._b, 4);
      t.writeInt32LE(this._c, 8);
      t.writeInt32LE(this._d, 12);
      return t;
    };
    t.exports = o;
  },
  1354: function (t, e, r) {
    var i = r(711);
    var n = r(3500);
    function f(t) {
      this.rand = t || new n.Rand();
    }
    t.exports = f;
    f.create = function (t) {
      return new f(t);
    };
    f.prototype._randbelow = function (t) {
      var e = Math.ceil(t.bitLength() / 8);
      do {
        var r = new i(this.rand.generate(e));
      } while (r.cmp(t) >= 0);
      return r;
    };
    f.prototype._randrange = function (t, e) {
      var r = e.sub(t);
      return t.add(this._randbelow(r));
    };
    f.prototype.test = function (t, e, r) {
      var n = t.bitLength();
      var f = i.mont(t);
      var a = new i(1).toRed(f);
      e ||= Math.max(1, n / 48 | 0);
      for (var o = t.subn(1), s = 0; !o.testn(s); s++);
      var h = t.shrn(s);
      var c = o.toRed(f);
      for (; e > 0; e--) {
        var d = this._randrange(new i(2), o);
        if (r) {
          r(d);
        }
        var u = d.toRed(f).redPow(h);
        if (u.cmp(a) !== 0 && u.cmp(c) !== 0) {
          for (var l = 1; l < s; l++) {
            if ((u = u.redSqr()).cmp(a) === 0) {
              return false;
            }
            if (u.cmp(c) === 0) {
              break;
            }
          }
          if (l === s) {
            return false;
          }
        }
      }
      return true;
    };
    f.prototype.getDivisor = function (t, e) {
      var r = t.bitLength();
      var n = i.mont(t);
      var f = new i(1).toRed(n);
      e ||= Math.max(1, r / 48 | 0);
      for (var a = t.subn(1), o = 0; !a.testn(o); o++);
      var s = t.shrn(o);
      var h = a.toRed(n);
      for (; e > 0; e--) {
        var c = this._randrange(new i(2), a);
        var d = t.gcd(c);
        if (d.cmpn(1) !== 0) {
          return d;
        }
        var u = c.toRed(n).redPow(s);
        if (u.cmp(f) !== 0 && u.cmp(h) !== 0) {
          for (var l = 1; l < o; l++) {
            if ((u = u.redSqr()).cmp(f) === 0) {
              return u.fromRed().subn(1).gcd(t);
            }
            if (u.cmp(h) === 0) {
              break;
            }
          }
          if (l === o) {
            return (u = u.redSqr()).fromRed().subn(1).gcd(t);
          }
        }
      }
      return false;
    };
  },
  3523: function (t) {
    function e(t, e) {
      if (!t) {
        throw Error(e || "Assertion failed");
      }
    }
    t.exports = e;
    e.equal = function (t, e, r) {
      if (t != e) {
        throw Error(r || "Assertion failed: " + t + " != " + e);
      }
    };
  },
  6545: function (t, e) {
    "use strict";

    function r(t) {
      if (t.length === 1) {
        return "0" + t;
      } else {
        return t;
      }
    }
    function i(t) {
      var e = "";
      for (var i = 0; i < t.length; i++) {
        e += r(t[i].toString(16));
      }
      return e;
    }
    e.toArray = function (t, e) {
      if (Array.isArray(t)) {
        return t.slice();
      }
      if (!t) {
        return [];
      }
      var r = [];
      if (typeof t != "string") {
        for (var i = 0; i < t.length; i++) {
          r[i] = t[i] | 0;
        }
        return r;
      }
      if (e === "hex") {
        if ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0) {
          t = "0" + t;
        }
        for (var i = 0; i < t.length; i += 2) {
          r.push(parseInt(t[i] + t[i + 1], 16));
        }
      } else {
        for (var i = 0; i < t.length; i++) {
          var n = t.charCodeAt(i);
          var f = n >> 8;
          var a = n & 255;
          if (f) {
            r.push(f, a);
          } else {
            r.push(a);
          }
        }
      }
      return r;
    };
    e.zero2 = r;
    e.toHex = i;
    e.encode = function (t, e) {
      if (e === "hex") {
        return i(t);
      } else {
        return t;
      }
    };
  },
  8687: function (t, e, r) {
    "use strict";

    var i = r(7160);
    e.certificate = r(8782);
    e.RSAPrivateKey = i.define("RSAPrivateKey", function () {
      this.seq().obj(this.key("version").int(), this.key("modulus").int(), this.key("publicExponent").int(), this.key("privateExponent").int(), this.key("prime1").int(), this.key("prime2").int(), this.key("exponent1").int(), this.key("exponent2").int(), this.key("coefficient").int());
    });
    e.RSAPublicKey = i.define("RSAPublicKey", function () {
      this.seq().obj(this.key("modulus").int(), this.key("publicExponent").int());
    });
    e.PublicKey = i.define("SubjectPublicKeyInfo", function () {
      this.seq().obj(this.key("algorithm").use(n), this.key("subjectPublicKey").bitstr());
    });
    var n = i.define("AlgorithmIdentifier", function () {
      this.seq().obj(this.key("algorithm").objid(), this.key("none").null_().optional(), this.key("curve").objid().optional(), this.key("params").seq().obj(this.key("p").int(), this.key("q").int(), this.key("g").int()).optional());
    });
    e.PrivateKey = i.define("PrivateKeyInfo", function () {
      this.seq().obj(this.key("version").int(), this.key("algorithm").use(n), this.key("subjectPrivateKey").octstr());
    });
    e.EncryptedPrivateKey = i.define("EncryptedPrivateKeyInfo", function () {
      this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(), this.key("kdeparams").seq().obj(this.key("salt").octstr(), this.key("iters").int())), this.key("cipher").seq().obj(this.key("algo").objid(), this.key("iv").octstr()))), this.key("subjectPrivateKey").octstr());
    });
    e.DSAPrivateKey = i.define("DSAPrivateKey", function () {
      this.seq().obj(this.key("version").int(), this.key("p").int(), this.key("q").int(), this.key("g").int(), this.key("pub_key").int(), this.key("priv_key").int());
    });
    e.DSAparam = i.define("DSAparam", function () {
      this.int();
    });
    e.ECPrivateKey = i.define("ECPrivateKey", function () {
      this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").optional().explicit(0).use(f), this.key("publicKey").optional().explicit(1).bitstr());
    });
    var f = i.define("ECParameters", function () {
      this.choice({
        namedCurve: this.objid()
      });
    });
    e.signature = i.define("signature", function () {
      this.seq().obj(this.key("r").int(), this.key("s").int());
    });
  },
  8782: function (t, e, r) {
    "use strict";

    var i = r(7160);
    var n = i.define("Time", function () {
      this.choice({
        utcTime: this.utctime(),
        generalTime: this.gentime()
      });
    });
    var f = i.define("AttributeTypeValue", function () {
      this.seq().obj(this.key("type").objid(), this.key("value").any());
    });
    var a = i.define("AlgorithmIdentifier", function () {
      this.seq().obj(this.key("algorithm").objid(), this.key("parameters").optional(), this.key("curve").objid().optional());
    });
    var o = i.define("SubjectPublicKeyInfo", function () {
      this.seq().obj(this.key("algorithm").use(a), this.key("subjectPublicKey").bitstr());
    });
    var s = i.define("RelativeDistinguishedName", function () {
      this.setof(f);
    });
    var h = i.define("RDNSequence", function () {
      this.seqof(s);
    });
    var c = i.define("Name", function () {
      this.choice({
        rdnSequence: this.use(h)
      });
    });
    var d = i.define("Validity", function () {
      this.seq().obj(this.key("notBefore").use(n), this.key("notAfter").use(n));
    });
    var u = i.define("Extension", function () {
      this.seq().obj(this.key("extnID").objid(), this.key("critical").bool().def(false), this.key("extnValue").octstr());
    });
    var l = i.define("TBSCertificate", function () {
      this.seq().obj(this.key("version").explicit(0).int().optional(), this.key("serialNumber").int(), this.key("signature").use(a), this.key("issuer").use(c), this.key("validity").use(d), this.key("subject").use(c), this.key("subjectPublicKeyInfo").use(o), this.key("issuerUniqueID").implicit(1).bitstr().optional(), this.key("subjectUniqueID").implicit(2).bitstr().optional(), this.key("extensions").explicit(3).seqof(u).optional());
    });
    t.exports = i.define("X509Certificate", function () {
      this.seq().obj(this.key("tbsCertificate").use(l), this.key("signatureAlgorithm").use(a), this.key("signatureValue").bitstr());
    });
  },
  6501: function (t, e, r) {
    var i = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r\+\/\=]+)[\n\r]+/m;
    var n = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m;
    var f = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r\+\/\=]+)-----END \1-----$/m;
    var a = r(8368);
    var o = r(6594);
    var s = r(6911).Buffer;
    t.exports = function (t, e) {
      var r;
      var h = t.toString();
      var c = h.match(i);
      if (c) {
        var d = "aes" + c[1];
        var u = s.from(c[2], "hex");
        var l = s.from(c[3].replace(/[\r\n]/g, ""), "base64");
        var b = a(e, u.slice(0, 8), parseInt(c[1], 10)).key;
        var p = [];
        var m = o.createDecipheriv(d, b, u);
        p.push(m.update(l));
        p.push(m.final());
        r = s.concat(p);
      } else {
        r = new s(h.match(f)[2].replace(/[\r\n]/g, ""), "base64");
      }
      return {
        tag: h.match(n)[1],
        data: r
      };
    };
  },
  9902: function (t, e, r) {
    var i = r(8687);
    var n = r(2510);
    var f = r(6501);
    var a = r(6594);
    var o = r(4978);
    var s = r(6911).Buffer;
    function h(t) {
      if (typeof t == "object" && !s.isBuffer(t)) {
        y = t.passphrase;
        t = t.key;
      }
      if (typeof t == "string") {
        t = s.from(t);
      }
      var e;
      var r;
      var h;
      var c;
      var d;
      var u;
      var l;
      var b;
      var p;
      var m;
      var v;
      var y;
      var g;
      var _;
      var w = f(t, y);
      var x = w.tag;
      var M = w.data;
      switch (x) {
        case "CERTIFICATE":
          _ = i.certificate.decode(M, "der").tbsCertificate.subjectPublicKeyInfo;
        case "PUBLIC KEY":
          if (!_) {
            _ = i.PublicKey.decode(M, "der");
          }
          switch (g = _.algorithm.algorithm.join(".")) {
            case "1.2.840.113549.1.1.1":
              return i.RSAPublicKey.decode(_.subjectPublicKey.data, "der");
            case "1.2.840.10045.2.1":
              _.subjectPrivateKey = _.subjectPublicKey;
              return {
                type: "ec",
                data: _
              };
            case "1.2.840.10040.4.1":
              _.algorithm.params.pub_key = i.DSAparam.decode(_.subjectPublicKey.data, "der");
              return {
                type: "dsa",
                data: _.algorithm.params
              };
            default:
              throw Error("unknown key id " + g);
          }
        case "ENCRYPTED PRIVATE KEY":
          e = M = i.EncryptedPrivateKey.decode(M, "der");
          r = y;
          h = e.algorithm.decrypt.kde.kdeparams.salt;
          c = parseInt(e.algorithm.decrypt.kde.kdeparams.iters.toString(), 10);
          d = n[e.algorithm.decrypt.cipher.algo.join(".")];
          u = e.algorithm.decrypt.cipher.iv;
          l = e.subjectPrivateKey;
          b = parseInt(d.split("-")[1], 10) / 8;
          p = o.pbkdf2Sync(r, h, c, b, "sha1");
          m = a.createDecipheriv(d, p, u);
          (v = []).push(m.update(l));
          v.push(m.final());
          M = s.concat(v);
        case "PRIVATE KEY":
          switch (g = (_ = i.PrivateKey.decode(M, "der")).algorithm.algorithm.join(".")) {
            case "1.2.840.113549.1.1.1":
              return i.RSAPrivateKey.decode(_.subjectPrivateKey, "der");
            case "1.2.840.10045.2.1":
              return {
                curve: _.algorithm.curve,
                privateKey: i.ECPrivateKey.decode(_.subjectPrivateKey, "der").privateKey
              };
            case "1.2.840.10040.4.1":
              _.algorithm.params.priv_key = i.DSAparam.decode(_.subjectPrivateKey, "der");
              return {
                type: "dsa",
                params: _.algorithm.params
              };
            default:
              throw Error("unknown key id " + g);
          }
        case "RSA PUBLIC KEY":
          return i.RSAPublicKey.decode(M, "der");
        case "RSA PRIVATE KEY":
          return i.RSAPrivateKey.decode(M, "der");
        case "DSA PRIVATE KEY":
          return {
            type: "dsa",
            params: i.DSAPrivateKey.decode(M, "der")
          };
        case "EC PRIVATE KEY":
          return {
            curve: (M = i.ECPrivateKey.decode(M, "der")).parameters.value,
            privateKey: M.privateKey
          };
        default:
          throw Error("unknown key type " + x);
      }
    }
    t.exports = h;
    h.signature = i.signature;
  },
  4978: function (t, e, r) {
    var i = r(6113);
    var n = r(5349);
    var f = r(7007);
    var a = r(5407);
    if (i.pbkdf2Sync && i.pbkdf2Sync.toString().indexOf("keylen, digest") !== -1) {
      e.pbkdf2Sync = function (t, e, r, o, s) {
        n(r, o);
        t = a(t, f, "Password");
        e = a(e, f, "Salt");
        s = s || "sha1";
        return i.pbkdf2Sync(t, e, r, o, s);
      };
      e.pbkdf2 = function (t, e, r, o, s, h) {
        n(r, o);
        t = a(t, f, "Password");
        e = a(e, f, "Salt");
        if (typeof s == "function") {
          h = s;
          s = "sha1";
        }
        if (typeof h != "function") {
          throw Error("No callback provided to pbkdf2");
        }
        return i.pbkdf2(t, e, r, o, s, h);
      };
    } else {
      e.pbkdf2Sync = r(2127);
      e.pbkdf2 = r(9601);
    }
  },
  9601: function (t, e, i) {
    var f;
    var a = i(6911).Buffer;
    var o = i(5349);
    var s = i(7007);
    var h = i(2127);
    var c = i(5407);
    var d = require.g.crypto && require.g.crypto.subtle;
    var u = {
      sha: "SHA-1",
      "sha-1": "SHA-1",
      sha1: "SHA-1",
      sha256: "SHA-256",
      "sha-256": "SHA-256",
      sha384: "SHA-384",
      "sha-384": "SHA-384",
      "sha-512": "SHA-512",
      sha512: "SHA-512"
    };
    var l = [];
    function b(t, e, r, i, n) {
      return d.importKey("raw", t, {
        name: "PBKDF2"
      }, false, ["deriveBits"]).then(function (t) {
        return d.deriveBits({
          name: "PBKDF2",
          salt: e,
          iterations: r,
          hash: {
            name: n
          }
        }, t, i << 3);
      }).then(function (t) {
        return a.from(t);
      });
    }
    t.exports = function (t, e, i, p, m, v) {
      if (typeof m == "function") {
        v = m;
        m = undefined;
      }
      var y;
      var g;
      var _ = u[(m = m || "sha1").toLowerCase()];
      if (!_ || typeof require.g.Promise != "function") {
        return n.nextTick(function () {
          var r;
          try {
            r = h(t, e, i, p, m);
          } catch (t) {
            return v(t);
          }
          v(null, r);
        });
      }
      o(i, p);
      t = c(t, s, "Password");
      e = c(e, s, "Salt");
      if (typeof v != "function") {
        throw Error("No callback provided to pbkdf2");
      }
      y = function (t) {
        if (require.g.process && !require.g.process.browser || !d || !d.importKey || !d.deriveBits) {
          return Promise.resolve(false);
        }
        if (l[t] !== undefined) {
          return l[t];
        }
        var e = b(f = f || a.alloc(8), f, 10, 128, t).then(function () {
          return true;
        }).catch(function () {
          return false;
        });
        l[t] = e;
        return e;
      }(_).then(function (r) {
        if (r) {
          return b(t, e, i, p, _);
        } else {
          return h(t, e, i, p, m);
        }
      });
      g = v;
      y.then(function (t) {
        n.nextTick(function () {
          g(null, t);
        });
      }, function (t) {
        n.nextTick(function () {
          g(t);
        });
      });
    };
  },
  7007: function (t) {
    t.exports = "utf-8";
  },
  5349: function (t) {
    t.exports = function (t, e) {
      if (typeof t != "number") {
        throw TypeError("Iterations not a number");
      }
      if (t < 0) {
        throw TypeError("Bad iterations");
      }
      if (typeof e != "number") {
        throw TypeError("Key length not a number");
      }
      if (e < 0 || e > 1073741823 || e != e) {
        throw TypeError("Bad key length");
      }
    };
  },
  2127: function (t, e, r) {
    var i = {
      md5: 16,
      sha1: 20,
      sha224: 28,
      sha256: 32,
      sha384: 48,
      sha512: 64,
      rmd160: 20,
      ripemd160: 20
    };
    var n = r(4873);
    var f = r(6911).Buffer;
    var a = r(5349);
    var o = r(7007);
    var s = r(5407);
    t.exports = function (t, e, r, h, c) {
      a(r, h);
      t = s(t, o, "Password");
      e = s(e, o, "Salt");
      c = c || "sha1";
      var d = f.allocUnsafe(h);
      var u = f.allocUnsafe(e.length + 4);
      e.copy(u, 0, 0, e.length);
      var l = 0;
      var b = i[c];
      for (var p = Math.ceil(h / b), m = 1; m <= p; m++) {
        u.writeUInt32BE(m, e.length);
        var v = n(c, t).update(u).digest();
        var y = v;
        for (var g = 1; g < r; g++) {
          y = n(c, t).update(y).digest();
          for (var _ = 0; _ < b; _++) {
            v[_] ^= y[_];
          }
        }
        v.copy(d, l);
        l += b;
      }
      return d;
    };
  },
  5407: function (t, e, r) {
    var i = r(6911).Buffer;
    t.exports = function (t, e, r) {
      if (i.isBuffer(t)) {
        return t;
      }
      if (typeof t == "string") {
        return i.from(t, e);
      }
      if (ArrayBuffer.isView(t)) {
        return i.from(t.buffer);
      }
      throw TypeError(r + " must be a string, a Buffer, a typed array or a DataView");
    };
  },
  9783: function (t, e, r) {
    e.publicEncrypt = r(3995);
    e.privateDecrypt = r(4366);
    e.privateEncrypt = function (t, r) {
      return e.publicEncrypt(t, r, true);
    };
    e.publicDecrypt = function (t, r) {
      return e.privateDecrypt(t, r, true);
    };
  },
  5520: function (t, e, r) {
    var i = r(9739);
    var n = r(6911).Buffer;
    t.exports = function (t, e) {
      var r;
      for (var f = n.alloc(0), a = 0; f.length < e;) {
        r = function (t) {
          var e = n.allocUnsafe(4);
          e.writeUInt32BE(t, 0);
          return e;
        }(a++);
        f = n.concat([f, i("sha1").update(t).update(r).digest()]);
      }
      return f.slice(0, e);
    };
  },
  4366: function (t, e, r) {
    var i = r(9902);
    var n = r(5520);
    var f = r(6386);
    var a = r(711);
    var o = r(7166);
    var s = r(9739);
    var h = r(1607);
    var c = r(6911).Buffer;
    t.exports = function (t, e, r) {
      var d;
      var u = t.padding ? t.padding : r ? 1 : 4;
      var l = i(t);
      var b = l.modulus.byteLength();
      if (e.length > b || new a(e).cmp(l.modulus) >= 0) {
        throw Error("decryption error");
      }
      d = r ? h(new a(e), l) : o(e, l);
      var p = c.alloc(b - d.length);
      d = c.concat([p, d], b);
      if (u === 4) {
        return function (t, e) {
          var r = t.modulus.byteLength();
          var i = s("sha1").update(c.alloc(0)).digest();
          var a = i.length;
          if (e[0] !== 0) {
            throw Error("decryption error");
          }
          var o = e.slice(1, a + 1);
          var h = e.slice(a + 1);
          var d = f(o, n(h, a));
          var u = f(h, n(d, r - a - 1));
          if (function (t, e) {
            t = c.from(t);
            e = c.from(e);
            var r = 0;
            var i = t.length;
            if (t.length !== e.length) {
              r++;
              i = Math.min(t.length, e.length);
            }
            for (var n = -1; ++n < i;) {
              r += t[n] ^ e[n];
            }
            return r;
          }(i, u.slice(0, a))) {
            throw Error("decryption error");
          }
          for (var l = a; u[l] === 0;) {
            l++;
          }
          if (u[l++] !== 1) {
            throw Error("decryption error");
          }
          return u.slice(l);
        }(l, d);
      }
      if (u === 1) {
        for (var m = d, v = r, y = m.slice(0, 2), g = 2, _ = 0; m[g++] !== 0;) {
          if (g >= m.length) {
            _++;
            break;
          }
        }
        var w = m.slice(2, g - 1);
        if (y.toString("hex") !== "0002" && !v || y.toString("hex") !== "0001" && v) {
          _++;
        }
        if (w.length < 8) {
          _++;
        }
        if (_) {
          throw Error("decryption error");
        }
        return m.slice(g);
      }
      if (u === 3) {
        return d;
      }
      throw Error("unknown padding");
    };
  },
  3995: function (t, e, r) {
    var i = r(9902);
    var n = r(7223);
    var f = r(9739);
    var a = r(5520);
    var o = r(6386);
    var s = r(711);
    var h = r(1607);
    var c = r(7166);
    var d = r(6911).Buffer;
    t.exports = function (t, e, r) {
      var u;
      var l = t.padding ? t.padding : r ? 1 : 4;
      var b = i(t);
      if (l === 4) {
        u = function (t, e) {
          var r = t.modulus.byteLength();
          var i = e.length;
          var h = f("sha1").update(d.alloc(0)).digest();
          var c = h.length;
          var u = c * 2;
          if (i > r - u - 2) {
            throw Error("message too long");
          }
          var l = d.alloc(r - i - u - 2);
          var b = r - c - 1;
          var p = n(c);
          var m = o(d.concat([h, l, d.alloc(1, 1), e], b), a(p, b));
          var v = o(p, a(m, c));
          return new s(d.concat([d.alloc(1), v, m], r));
        }(b, e);
      } else if (l === 1) {
        u = function (t, e, r) {
          var i;
          var f = e.length;
          var a = t.modulus.byteLength();
          if (f > a - 11) {
            throw Error("message too long");
          }
          i = r ? d.alloc(a - f - 3, 255) : function (t) {
            var e;
            var r = d.allocUnsafe(t);
            for (var i = 0, f = n(t * 2), a = 0; i < t;) {
              if (a === f.length) {
                f = n(t * 2);
                a = 0;
              }
              if (e = f[a++]) {
                r[i++] = e;
              }
            }
            return r;
          }(a - f - 3);
          return new s(d.concat([d.from([0, r ? 1 : 2]), i, d.alloc(1), e], a));
        }(b, e, r);
      } else if (l === 3) {
        if ((u = new s(e)).cmp(b.modulus) >= 0) {
          throw Error("data too long for modulus");
        }
      } else {
        throw Error("unknown padding");
      }
      if (r) {
        return c(u, b);
      } else {
        return h(u, b);
      }
    };
  },
  1607: function (t, e, r) {
    var i = r(711);
    var n = r(6911).Buffer;
    t.exports = function (t, e) {
      return n.from(t.toRed(i.mont(e.modulus)).redPow(new i(e.publicExponent)).fromRed().toArray());
    };
  },
  6386: function (t) {
    t.exports = function (t, e) {
      for (var r = t.length, i = -1; ++i < r;) {
        t[i] ^= e[i];
      }
      return t;
    };
  },
  7223: function (t, e, i) {
    "use strict";

    var f = i(6911).Buffer;
    var a = require.g.crypto || require.g.msCrypto;
    if (a && a.getRandomValues) {
      t.exports = function (t, e) {
        if (t > 4294967295) {
          throw RangeError("requested too many random bytes");
        }
        var r = f.allocUnsafe(t);
        if (t > 0) {
          if (t > 65536) {
            for (var i = 0; i < t; i += 65536) {
              a.getRandomValues(r.slice(i, i + 65536));
            }
          } else {
            a.getRandomValues(r);
          }
        }
        if (typeof e == "function") {
          return n.nextTick(function () {
            e(null, r);
          });
        } else {
          return r;
        }
      };
    } else {
      t.exports = function () {
        throw Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11");
      };
    }
  },
  6445: function (t, e, i) {
    "use strict";

    function f() {
      throw Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11");
    }
    var a = i(6911);
    i(7223);
    var o = a.Buffer;
    var s = a.kMaxLength;
    var h = require.g.crypto || require.g.msCrypto;
    function c(t, e) {
      if (typeof t != "number" || t != t) {
        throw TypeError("offset must be a number");
      }
      if (t > 4294967295 || t < 0) {
        throw TypeError("offset must be a uint32");
      }
      if (t > s || t > e) {
        throw RangeError("offset out of range");
      }
    }
    function d(t, e, r) {
      if (typeof t != "number" || t != t) {
        throw TypeError("size must be a number");
      }
      if (t > 4294967295 || t < 0) {
        throw TypeError("size must be a uint32");
      }
      if (t + e > r || t > s) {
        throw RangeError("buffer too small");
      }
    }
    function u(t, e, r, i) {
      var f = new Uint8Array(t.buffer, e, r);
      h.getRandomValues(f);
      if (i) {
        n.nextTick(function () {
          i(null, t);
        });
        return;
      } else {
        return t;
      }
    }
    if (h && h.getRandomValues) {
      e.randomFill = function (t, e, i, n) {
        if (!o.isBuffer(t) && !(t instanceof require.g.Uint8Array)) {
          throw TypeError("\"buf\" argument must be a Buffer or Uint8Array");
        }
        if (typeof e == "function") {
          n = e;
          e = 0;
          i = t.length;
        } else if (typeof i == "function") {
          n = i;
          i = t.length - e;
        } else if (typeof n != "function") {
          throw TypeError("\"cb\" argument must be a function");
        }
        c(e, t.length);
        d(i, e, t.length);
        return u(t, e, i, n);
      };
      e.randomFillSync = function (t, e = 0, i) {
        if (!o.isBuffer(t) && !(t instanceof require.g.Uint8Array)) {
          throw TypeError("\"buf\" argument must be a Buffer or Uint8Array");
        }
        c(e, t.length);
        if (i === undefined) {
          i = t.length - e;
        }
        d(i, e, t.length);
        return u(t, e, i);
      };
    } else {
      e.randomFill = f;
      e.randomFillSync = f;
    }
  },
  4646: function (t) {
    "use strict";

    let e = {};
    function r(t, r, i) {
      i ||= Error;
      class n extends i {
        constructor(t, e, i) {
          super(typeof r == "string" ? r : r(t, e, i));
        }
      }
      n.prototype.name = i.name;
      n.prototype.code = t;
      e[t] = n;
    }
    function i(t, e) {
      if (!Array.isArray(t)) {
        return `of ${e} ${String(t)}`;
      }
      {
        let r = t.length;
        t = t.map(t => String(t));
        if (r > 2) {
          return `one of ${e} ${t.slice(0, r - 1).join(", ")}, or ${t[r - 1]}`;
        } else if (r === 2) {
          return `one of ${e} ${t[0]} or ${t[1]}`;
        } else {
          return `of ${e} ${t[0]}`;
        }
      }
    }
    r("ERR_INVALID_OPT_VALUE", function (t, e) {
      return "The value \"" + e + "\" is invalid for option \"" + t + "\"";
    }, TypeError);
    r("ERR_INVALID_ARG_TYPE", function (t, e, r) {
      var n;
      var f;
      var a;
      var o;
      let s;
      let h;
      if (typeof e == "string" && (n = "not ", e.substr(0, n.length) === n)) {
        s = "must not be";
        e = e.replace(/^not /, "");
      } else {
        s = "must be";
      }
      f = " argument";
      if (a === undefined || a > t.length) {
        a = t.length;
      }
      if (t.substring(a - f.length, a) === f) {
        h = `The ${t} ${s} ${i(e, "type")}`;
      } else {
        let r = (typeof o != "number" && (o = 0), o + 1 > t.length || t.indexOf(".", o) === -1) ? "argument" : "property";
        h = `The "${t}" ${r} ${s} ${i(e, "type")}`;
      }
      return `${h}. Received type ${typeof r}`;
    }, TypeError);
    r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
    r("ERR_METHOD_NOT_IMPLEMENTED", function (t) {
      return "The " + t + " method is not implemented";
    });
    r("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
    r("ERR_STREAM_DESTROYED", function (t) {
      return "Cannot call " + t + " after a stream was destroyed";
    });
    r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
    r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
    r("ERR_STREAM_WRITE_AFTER_END", "write after end");
    r("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    r("ERR_UNKNOWN_ENCODING", function (t) {
      return "Unknown encoding: " + t;
    }, TypeError);
    r("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
    t.exports.q = e;
  },
  2403: function (t, e, r) {
    "use strict";

    var i = Object.keys || function (t) {
      var e = [];
      for (var r in t) {
        e.push(r);
      }
      return e;
    };
    t.exports = c;
    var f = r(1709);
    var a = r(7337);
    r(3782)(c, f);
    for (var o = i(a.prototype), s = 0; s < o.length; s++) {
      var h = o[s];
      c.prototype[h] ||= a.prototype[h];
    }
    function c(t) {
      if (!(this instanceof c)) {
        return new c(t);
      }
      f.call(this, t);
      a.call(this, t);
      this.allowHalfOpen = true;
      if (t) {
        if (t.readable === false) {
          this.readable = false;
        }
        if (t.writable === false) {
          this.writable = false;
        }
        if (t.allowHalfOpen === false) {
          this.allowHalfOpen = false;
          this.once("end", d);
        }
      }
    }
    function d() {
      if (!this._writableState.ended) {
        n.nextTick(u, this);
      }
    }
    function u(t) {
      t.end();
    }
    Object.defineProperty(c.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function () {
        return this._writableState.highWaterMark;
      }
    });
    Object.defineProperty(c.prototype, "writableBuffer", {
      enumerable: false,
      get: function () {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    Object.defineProperty(c.prototype, "writableLength", {
      enumerable: false,
      get: function () {
        return this._writableState.length;
      }
    });
    Object.defineProperty(c.prototype, "destroyed", {
      enumerable: false,
      get: function () {
        return this._readableState !== undefined && this._writableState !== undefined && this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function (t) {
        if (this._readableState !== undefined && this._writableState !== undefined) {
          this._readableState.destroyed = t;
          this._writableState.destroyed = t;
        }
      }
    });
  },
  7889: function (t, e, r) {
    "use strict";

    t.exports = n;
    var i = r(1170);
    function n(t) {
      if (!(this instanceof n)) {
        return new n(t);
      }
      i.call(this, t);
    }
    r(3782)(n, i);
    n.prototype._transform = function (t, e, r) {
      r(null, t);
    };
  },
  1709: function (t, e, i) {
    "use strict";

    t.exports = E;
    E.ReadableState = k;
    i(2361).EventEmitter;
    var f;
    var a;
    var o;
    var s;
    var h;
    function c(t, e) {
      return t.listeners(e).length;
    }
    var d = i(4678);
    var u = i(4300).Buffer;
    var l = require.g.Uint8Array || function () {};
    var b = i(3837);
    a = b && b.debuglog ? b.debuglog("stream") : function () {};
    var p = i(4379);
    var m = i(7025);
    var v = i(6776).getHighWaterMark;
    var y = i(4646).q;
    var g = y.ERR_INVALID_ARG_TYPE;
    var _ = y.ERR_STREAM_PUSH_AFTER_EOF;
    var w = y.ERR_METHOD_NOT_IMPLEMENTED;
    var x = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
    i(3782)(E, d);
    var M = m.errorOrDestroy;
    var S = ["error", "close", "destroy", "pause", "resume"];
    function k(t, e, r) {
      f = f || i(2403);
      t = t || {};
      if (typeof r != "boolean") {
        r = e instanceof f;
      }
      this.objectMode = !!t.objectMode;
      if (r) {
        this.objectMode = this.objectMode || !!t.readableObjectMode;
      }
      this.highWaterMark = v(this, t, "readableHighWaterMark", r);
      this.buffer = new p();
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;
      this.paused = true;
      this.emitClose = t.emitClose !== false;
      this.autoDestroy = !!t.autoDestroy;
      this.destroyed = false;
      this.defaultEncoding = t.defaultEncoding || "utf8";
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (t.encoding) {
        o ||= i(3704).s;
        this.decoder = new o(t.encoding);
        this.encoding = t.encoding;
      }
    }
    function E(t) {
      f = f || i(2403);
      if (!(this instanceof E)) {
        return new E(t);
      }
      var e = this instanceof f;
      this._readableState = new k(t, this, e);
      this.readable = true;
      if (t) {
        if (typeof t.read == "function") {
          this._read = t.read;
        }
        if (typeof t.destroy == "function") {
          this._destroy = t.destroy;
        }
      }
      d.call(this);
    }
    function A(t, e, r, i, n) {
      a("readableAddChunk", e);
      var f;
      var o;
      var s = t._readableState;
      if (e === null) {
        s.reading = false;
        (function (t, e) {
          a("onEofChunk");
          if (!e.ended) {
            if (e.decoder) {
              var r = e.decoder.end();
              if (r && r.length) {
                e.buffer.push(r);
                e.length += e.objectMode ? 1 : r.length;
              }
            }
            e.ended = true;
            if (e.sync) {
              B(t);
            } else {
              e.needReadable = false;
              if (!e.emittedReadable) {
                e.emittedReadable = true;
                P(t);
              }
            }
          }
        })(t, s);
      } else {
        if (!n) {
          o = function (t, e) {
            var r;
            if (!u.isBuffer(e) && !(e instanceof l) && typeof e != "string" && e !== undefined && !t.objectMode) {
              r = new g("chunk", ["string", "Buffer", "Uint8Array"], e);
            }
            return r;
          }(s, e);
        }
        if (o) {
          M(t, o);
        } else if (s.objectMode || e && e.length > 0) {
          if (typeof e != "string" && !s.objectMode && Object.getPrototypeOf(e) !== u.prototype) {
            f = e;
            e = u.from(f);
          }
          if (i) {
            if (s.endEmitted) {
              M(t, new x());
            } else {
              R(t, s, e, true);
            }
          } else if (s.ended) {
            M(t, new _());
          } else {
            if (s.destroyed) {
              return false;
            }
            s.reading = false;
            if (s.decoder && !r) {
              e = s.decoder.write(e);
              if (s.objectMode || e.length !== 0) {
                R(t, s, e, false);
              } else {
                T(t, s);
              }
            } else {
              R(t, s, e, false);
            }
          }
        } else if (!i) {
          s.reading = false;
          T(t, s);
        }
      }
      return !s.ended && (s.length < s.highWaterMark || s.length === 0);
    }
    function R(t, e, r, i) {
      if (e.flowing && e.length === 0 && !e.sync) {
        e.awaitDrain = 0;
        t.emit("data", r);
      } else {
        e.length += e.objectMode ? 1 : r.length;
        if (i) {
          e.buffer.unshift(r);
        } else {
          e.buffer.push(r);
        }
        if (e.needReadable) {
          B(t);
        }
      }
      T(t, e);
    }
    function I(t, e) {
      var r;
      if (t <= 0 || e.length === 0 && e.ended) {
        return 0;
      }
      if (e.objectMode) {
        return 1;
      }
      if (t != t) {
        if (e.flowing && e.length) {
          return e.buffer.head.data.length;
        } else {
          return e.length;
        }
      }
      if (t > e.highWaterMark) {
        if ((r = t) >= 1073741824) {
          r = 1073741824;
        } else {
          r--;
          r |= r >>> 1;
          r |= r >>> 2;
          r |= r >>> 4;
          r |= r >>> 8;
          r |= r >>> 16;
          r++;
        }
        e.highWaterMark = r;
      }
      if (t <= e.length) {
        return t;
      } else if (e.ended) {
        return e.length;
      } else {
        e.needReadable = true;
        return 0;
      }
    }
    function B(t) {
      var e = t._readableState;
      a("emitReadable", e.needReadable, e.emittedReadable);
      e.needReadable = false;
      if (!e.emittedReadable) {
        a("emitReadable", e.flowing);
        e.emittedReadable = true;
        n.nextTick(P, t);
      }
    }
    function P(t) {
      var e = t._readableState;
      a("emitReadable_", e.destroyed, e.length, e.ended);
      if (!e.destroyed && (e.length || e.ended)) {
        t.emit("readable");
        e.emittedReadable = false;
      }
      e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark;
      N(t);
    }
    function T(t, e) {
      if (!e.readingMore) {
        e.readingMore = true;
        n.nextTick(C, t, e);
      }
    }
    function C(t, e) {
      while (!e.reading && !e.ended && (e.length < e.highWaterMark || e.flowing && e.length === 0)) {
        var r = e.length;
        a("maybeReadMore read 0");
        t.read(0);
        if (r === e.length) {
          break;
        }
      }
      e.readingMore = false;
    }
    function j(t) {
      var e = t._readableState;
      e.readableListening = t.listenerCount("readable") > 0;
      if (e.resumeScheduled && !e.paused) {
        e.flowing = true;
      } else if (t.listenerCount("data") > 0) {
        t.resume();
      }
    }
    function O(t) {
      a("readable nexttick read 0");
      t.read(0);
    }
    function D(t, e) {
      a("resume", e.reading);
      if (!e.reading) {
        t.read(0);
      }
      e.resumeScheduled = false;
      t.emit("resume");
      N(t);
      if (e.flowing && !e.reading) {
        t.read(0);
      }
    }
    function N(t) {
      var e = t._readableState;
      for (a("flow", e.flowing); e.flowing && t.read() !== null;);
    }
    function q(t, e) {
      var r;
      if (e.length === 0) {
        return null;
      } else {
        if (e.objectMode) {
          r = e.buffer.shift();
        } else if (!t || t >= e.length) {
          r = e.decoder ? e.buffer.join("") : e.buffer.length === 1 ? e.buffer.first() : e.buffer.concat(e.length);
          e.buffer.clear();
        } else {
          r = e.buffer.consume(t, e.decoder);
        }
        return r;
      }
    }
    function L(t) {
      var e = t._readableState;
      a("endReadable", e.endEmitted);
      if (!e.endEmitted) {
        e.ended = true;
        n.nextTick(z, e, t);
      }
    }
    function z(t, e) {
      a("endReadableNT", t.endEmitted, t.length);
      if (!t.endEmitted && t.length === 0 && (t.endEmitted = true, e.readable = false, e.emit("end"), t.autoDestroy)) {
        var r = e._writableState;
        if (!r || r.autoDestroy && r.finished) {
          e.destroy();
        }
      }
    }
    function U(t, e) {
      for (var r = 0, i = t.length; r < i; r++) {
        if (t[r] === e) {
          return r;
        }
      }
      return -1;
    }
    Object.defineProperty(E.prototype, "destroyed", {
      enumerable: false,
      get: function () {
        return this._readableState !== undefined && this._readableState.destroyed;
      },
      set: function (t) {
        if (this._readableState) {
          this._readableState.destroyed = t;
        }
      }
    });
    E.prototype.destroy = m.destroy;
    E.prototype._undestroy = m.undestroy;
    E.prototype._destroy = function (t, e) {
      e(t);
    };
    E.prototype.push = function (t, e) {
      var r;
      var i = this._readableState;
      if (i.objectMode) {
        r = true;
      } else if (typeof t == "string") {
        if ((e = e || i.defaultEncoding) !== i.encoding) {
          t = u.from(t, e);
          e = "";
        }
        r = true;
      }
      return A(this, t, e, false, r);
    };
    E.prototype.unshift = function (t) {
      return A(this, t, null, true, false);
    };
    E.prototype.isPaused = function () {
      return this._readableState.flowing === false;
    };
    E.prototype.setEncoding = function (t) {
      o ||= i(3704).s;
      var e = new o(t);
      this._readableState.decoder = e;
      this._readableState.encoding = this._readableState.decoder.encoding;
      for (var r = this._readableState.buffer.head, n = ""; r !== null;) {
        n += e.write(r.data);
        r = r.next;
      }
      this._readableState.buffer.clear();
      if (n !== "") {
        this._readableState.buffer.push(n);
      }
      this._readableState.length = n.length;
      return this;
    };
    E.prototype.read = function (t) {
      a("read", t);
      t = parseInt(t, 10);
      var e;
      var r = this._readableState;
      var i = t;
      if (t !== 0) {
        r.emittedReadable = false;
      }
      if (t === 0 && r.needReadable && ((r.highWaterMark !== 0 ? r.length >= r.highWaterMark : r.length > 0) || r.ended)) {
        a("read: emitReadable", r.length, r.ended);
        if (r.length === 0 && r.ended) {
          L(this);
        } else {
          B(this);
        }
        return null;
      }
      if ((t = I(t, r)) === 0 && r.ended) {
        if (r.length === 0) {
          L(this);
        }
        return null;
      }
      var n = r.needReadable;
      a("need readable", n);
      if (r.length === 0 || r.length - t < r.highWaterMark) {
        a("length less than watermark", n = true);
      }
      if (r.ended || r.reading) {
        a("reading or ended", n = false);
      } else if (n) {
        a("do read");
        r.reading = true;
        r.sync = true;
        if (r.length === 0) {
          r.needReadable = true;
        }
        this._read(r.highWaterMark);
        r.sync = false;
        if (!r.reading) {
          t = I(i, r);
        }
      }
      if ((e = t > 0 ? q(t, r) : null) === null) {
        r.needReadable = r.length <= r.highWaterMark;
        t = 0;
      } else {
        r.length -= t;
        r.awaitDrain = 0;
      }
      if (r.length === 0) {
        if (!r.ended) {
          r.needReadable = true;
        }
        if (i !== t && r.ended) {
          L(this);
        }
      }
      if (e !== null) {
        this.emit("data", e);
      }
      return e;
    };
    E.prototype._read = function (t) {
      M(this, new w("_read()"));
    };
    E.prototype.pipe = function (t, e) {
      var r;
      var i = this;
      var f = this._readableState;
      switch (f.pipesCount) {
        case 0:
          f.pipes = t;
          break;
        case 1:
          f.pipes = [f.pipes, t];
          break;
        default:
          f.pipes.push(t);
      }
      f.pipesCount += 1;
      a("pipe count=%d opts=%j", f.pipesCount, e);
      var o = e && e.end === false || t === n.stdout || t === n.stderr ? m : s;
      function s() {
        a("onend");
        t.end();
      }
      if (f.endEmitted) {
        n.nextTick(o);
      } else {
        i.once("end", o);
      }
      t.on("unpipe", function e(r, n) {
        a("onunpipe");
        if (r === i && n && n.hasUnpiped === false) {
          n.hasUnpiped = true;
          a("cleanup");
          t.removeListener("close", b);
          t.removeListener("finish", p);
          t.removeListener("drain", h);
          t.removeListener("error", l);
          t.removeListener("unpipe", e);
          i.removeListener("end", s);
          i.removeListener("end", m);
          i.removeListener("data", u);
          d = true;
          if (f.awaitDrain && (!t._writableState || t._writableState.needDrain)) {
            h();
          }
        }
      });
      r = i;
      function h() {
        var t = r._readableState;
        a("pipeOnDrain", t.awaitDrain);
        if (t.awaitDrain) {
          t.awaitDrain--;
        }
        if (t.awaitDrain === 0 && c(r, "data")) {
          t.flowing = true;
          N(r);
        }
      }
      t.on("drain", h);
      var d = false;
      function u(e) {
        a("ondata");
        var r = t.write(e);
        a("dest.write", r);
        if (r === false) {
          if ((f.pipesCount === 1 && f.pipes === t || f.pipesCount > 1 && U(f.pipes, t) !== -1) && !d) {
            a("false write response, pause", f.awaitDrain);
            f.awaitDrain++;
          }
          i.pause();
        }
      }
      function l(e) {
        a("onerror", e);
        m();
        t.removeListener("error", l);
        if (c(t, "error") === 0) {
          M(t, e);
        }
      }
      function b() {
        t.removeListener("finish", p);
        m();
      }
      function p() {
        a("onfinish");
        t.removeListener("close", b);
        m();
      }
      function m() {
        a("unpipe");
        i.unpipe(t);
      }
      i.on("data", u);
      (function (t, e, r) {
        if (typeof t.prependListener == "function") {
          return t.prependListener(e, r);
        }
        if (t._events && t._events[e]) {
          if (Array.isArray(t._events[e])) {
            t._events[e].unshift(r);
          } else {
            t._events[e] = [r, t._events[e]];
          }
        } else {
          t.on(e, r);
        }
      })(t, "error", l);
      t.once("close", b);
      t.once("finish", p);
      t.emit("pipe", i);
      if (!f.flowing) {
        a("pipe resume");
        i.resume();
      }
      return t;
    };
    E.prototype.unpipe = function (t) {
      var e = this._readableState;
      var r = {
        hasUnpiped: false
      };
      if (e.pipesCount === 0) {
        return this;
      }
      if (e.pipesCount === 1) {
        if (!t || t === e.pipes) {
          t ||= e.pipes;
          e.pipes = null;
          e.pipesCount = 0;
          e.flowing = false;
          if (t) {
            t.emit("unpipe", this, r);
          }
        }
        return this;
      }
      if (!t) {
        var i = e.pipes;
        var n = e.pipesCount;
        e.pipes = null;
        e.pipesCount = 0;
        e.flowing = false;
        for (var f = 0; f < n; f++) {
          i[f].emit("unpipe", this, {
            hasUnpiped: false
          });
        }
        return this;
      }
      var a = U(e.pipes, t);
      if (a !== -1) {
        e.pipes.splice(a, 1);
        e.pipesCount -= 1;
        if (e.pipesCount === 1) {
          e.pipes = e.pipes[0];
        }
        t.emit("unpipe", this, r);
      }
      return this;
    };
    E.prototype.on = function (t, e) {
      var r = d.prototype.on.call(this, t, e);
      var i = this._readableState;
      if (t === "data") {
        i.readableListening = this.listenerCount("readable") > 0;
        if (i.flowing !== false) {
          this.resume();
        }
      } else if (t === "readable" && !i.endEmitted && !i.readableListening) {
        i.readableListening = i.needReadable = true;
        i.flowing = false;
        i.emittedReadable = false;
        a("on readable", i.length, i.reading);
        if (i.length) {
          B(this);
        } else if (!i.reading) {
          n.nextTick(O, this);
        }
      }
      return r;
    };
    E.prototype.addListener = E.prototype.on;
    E.prototype.removeListener = function (t, e) {
      var r = d.prototype.removeListener.call(this, t, e);
      if (t === "readable") {
        n.nextTick(j, this);
      }
      return r;
    };
    E.prototype.removeAllListeners = function (t) {
      var e = d.prototype.removeAllListeners.apply(this, arguments);
      if (t === "readable" || t === undefined) {
        n.nextTick(j, this);
      }
      return e;
    };
    E.prototype.resume = function () {
      var t;
      var e;
      var r = this._readableState;
      if (!r.flowing) {
        a("resume");
        r.flowing = !r.readableListening;
        t = this;
        if (!(e = r).resumeScheduled) {
          e.resumeScheduled = true;
          n.nextTick(D, t, e);
        }
      }
      r.paused = false;
      return this;
    };
    E.prototype.pause = function () {
      a("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        a("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      this._readableState.paused = true;
      return this;
    };
    E.prototype.wrap = function (t) {
      var e = this;
      var r = this._readableState;
      var i = false;
      t.on("end", function () {
        a("wrapped end");
        if (r.decoder && !r.ended) {
          var t = r.decoder.end();
          if (t && t.length) {
            e.push(t);
          }
        }
        e.push(null);
      });
      t.on("data", function (n) {
        a("wrapped data");
        if (r.decoder) {
          n = r.decoder.write(n);
        }
        if (!r.objectMode || n != null) {
          if (r.objectMode || n && n.length) {
            if (!e.push(n)) {
              i = true;
              t.pause();
            }
          }
        }
      });
      for (var n in t) {
        if (this[n] === undefined && typeof t[n] == "function") {
          this[n] = function (e) {
            return function () {
              return t[e].apply(t, arguments);
            };
          }(n);
        }
      }
      for (var f = 0; f < S.length; f++) {
        t.on(S[f], this.emit.bind(this, S[f]));
      }
      this._read = function (e) {
        a("wrapped _read", e);
        if (i) {
          i = false;
          t.resume();
        }
      };
      return this;
    };
    if (typeof Symbol == "function") {
      E.prototype[Symbol.asyncIterator] = function () {
        if (s === undefined) {
          s = i(6871);
        }
        return s(this);
      };
    }
    Object.defineProperty(E.prototype, "readableHighWaterMark", {
      enumerable: false,
      get: function () {
        return this._readableState.highWaterMark;
      }
    });
    Object.defineProperty(E.prototype, "readableBuffer", {
      enumerable: false,
      get: function () {
        return this._readableState && this._readableState.buffer;
      }
    });
    Object.defineProperty(E.prototype, "readableFlowing", {
      enumerable: false,
      get: function () {
        return this._readableState.flowing;
      },
      set: function (t) {
        if (this._readableState) {
          this._readableState.flowing = t;
        }
      }
    });
    E._fromList = q;
    Object.defineProperty(E.prototype, "readableLength", {
      enumerable: false,
      get: function () {
        return this._readableState.length;
      }
    });
    if (typeof Symbol == "function") {
      E.from = function (t, e) {
        if (h === undefined) {
          h = i(9727);
        }
        return h(E, t, e);
      };
    }
  },
  1170: function (t, e, r) {
    "use strict";

    t.exports = c;
    var i = r(4646).q;
    var n = i.ERR_METHOD_NOT_IMPLEMENTED;
    var f = i.ERR_MULTIPLE_CALLBACK;
    var a = i.ERR_TRANSFORM_ALREADY_TRANSFORMING;
    var o = i.ERR_TRANSFORM_WITH_LENGTH_0;
    var s = r(2403);
    function h(t, e) {
      var r = this._transformState;
      r.transforming = false;
      var i = r.writecb;
      if (i === null) {
        return this.emit("error", new f());
      }
      r.writechunk = null;
      r.writecb = null;
      if (e != null) {
        this.push(e);
      }
      i(t);
      var n = this._readableState;
      n.reading = false;
      if (n.needReadable || n.length < n.highWaterMark) {
        this._read(n.highWaterMark);
      }
    }
    function c(t) {
      if (!(this instanceof c)) {
        return new c(t);
      }
      s.call(this, t);
      this._transformState = {
        afterTransform: h.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
      };
      this._readableState.needReadable = true;
      this._readableState.sync = false;
      if (t) {
        if (typeof t.transform == "function") {
          this._transform = t.transform;
        }
        if (typeof t.flush == "function") {
          this._flush = t.flush;
        }
      }
      this.on("prefinish", d);
    }
    function d() {
      var t = this;
      if (typeof this._flush != "function" || this._readableState.destroyed) {
        u(this, null, null);
      } else {
        this._flush(function (e, r) {
          u(t, e, r);
        });
      }
    }
    function u(t, e, r) {
      if (e) {
        return t.emit("error", e);
      }
      if (r != null) {
        t.push(r);
      }
      if (t._writableState.length) {
        throw new o();
      }
      if (t._transformState.transforming) {
        throw new a();
      }
      return t.push(null);
    }
    r(3782)(c, s);
    c.prototype.push = function (t, e) {
      this._transformState.needTransform = false;
      return s.prototype.push.call(this, t, e);
    };
    c.prototype._transform = function (t, e, r) {
      r(new n("_transform()"));
    };
    c.prototype._write = function (t, e, r) {
      var i = this._transformState;
      i.writecb = r;
      i.writechunk = t;
      i.writeencoding = e;
      if (!i.transforming) {
        var n = this._readableState;
        if (i.needTransform || n.needReadable || n.length < n.highWaterMark) {
          this._read(n.highWaterMark);
        }
      }
    };
    c.prototype._read = function (t) {
      var e = this._transformState;
      if (e.writechunk === null || e.transforming) {
        e.needTransform = true;
      } else {
        e.transforming = true;
        this._transform(e.writechunk, e.writeencoding, e.afterTransform);
      }
    };
    c.prototype._destroy = function (t, e) {
      s.prototype._destroy.call(this, t, function (t) {
        e(t);
      });
    };
  },
  7337: function (t, e, i) {
    "use strict";

    function f(t) {
      var e = this;
      this.next = null;
      this.entry = null;
      this.finish = function () {
        var r = e;
        var i = t;
        var n = r.entry;
        for (r.entry = null; n;) {
          var f = n.callback;
          i.pendingcb--;
          f(undefined);
          n = n.next;
        }
        i.corkedRequestsFree.next = r;
      };
    }
    t.exports = E;
    E.WritableState = k;
    var a;
    var o;
    var s = {
      deprecate: i(6769)
    };
    var h = i(4678);
    var c = i(4300).Buffer;
    var d = require.g.Uint8Array || function () {};
    var u = i(7025);
    var l = i(6776).getHighWaterMark;
    var b = i(4646).q;
    var p = b.ERR_INVALID_ARG_TYPE;
    var m = b.ERR_METHOD_NOT_IMPLEMENTED;
    var v = b.ERR_MULTIPLE_CALLBACK;
    var y = b.ERR_STREAM_CANNOT_PIPE;
    var g = b.ERR_STREAM_DESTROYED;
    var _ = b.ERR_STREAM_NULL_VALUES;
    var w = b.ERR_STREAM_WRITE_AFTER_END;
    var x = b.ERR_UNKNOWN_ENCODING;
    var M = u.errorOrDestroy;
    function S() {}
    function k(t, e, r) {
      a = a || i(2403);
      t = t || {};
      if (typeof r != "boolean") {
        r = e instanceof a;
      }
      this.objectMode = !!t.objectMode;
      if (r) {
        this.objectMode = this.objectMode || !!t.writableObjectMode;
      }
      this.highWaterMark = l(this, t, "writableHighWaterMark", r);
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      var o = t.decodeStrings === false;
      this.decodeStrings = !o;
      this.defaultEncoding = t.defaultEncoding || "utf8";
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function (t) {
        (function (t, e) {
          var r = t._writableState;
          var i = r.sync;
          var f = r.writecb;
          if (typeof f != "function") {
            throw new v();
          }
          r.writing = false;
          r.writecb = null;
          r.length -= r.writelen;
          r.writelen = 0;
          if (e) {
            --r.pendingcb;
            if (i) {
              n.nextTick(f, e);
              n.nextTick(T, t, r);
              t._writableState.errorEmitted = true;
              M(t, e);
            } else {
              f(e);
              t._writableState.errorEmitted = true;
              M(t, e);
              T(t, r);
            }
          } else {
            var a = B(r) || t.destroyed;
            if (!a && !r.corked && !r.bufferProcessing && !!r.bufferedRequest) {
              I(t, r);
            }
            if (i) {
              n.nextTick(R, t, r, a, f);
            } else {
              R(t, r, a, f);
            }
          }
        })(e, t);
      };
      this.writecb = null;
      this.writelen = 0;
      this.bufferedRequest = null;
      this.lastBufferedRequest = null;
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
      this.emitClose = t.emitClose !== false;
      this.autoDestroy = !!t.autoDestroy;
      this.bufferedRequestCount = 0;
      this.corkedRequestsFree = new f(this);
    }
    i(3782)(E, h);
    k.prototype.getBuffer = function () {
      for (var t = this.bufferedRequest, e = []; t;) {
        e.push(t);
        t = t.next;
      }
      return e;
    };
    try {
      Object.defineProperty(k.prototype, "buffer", {
        get: s.deprecate(function () {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch (t) {}
    function E(t) {
      var e = this instanceof (a = a || i(2403));
      if (!e && !o.call(E, this)) {
        return new E(t);
      }
      this._writableState = new k(t, this, e);
      this.writable = true;
      if (t) {
        if (typeof t.write == "function") {
          this._write = t.write;
        }
        if (typeof t.writev == "function") {
          this._writev = t.writev;
        }
        if (typeof t.destroy == "function") {
          this._destroy = t.destroy;
        }
        if (typeof t.final == "function") {
          this._final = t.final;
        }
      }
      h.call(this);
    }
    function A(t, e, r, i, n, f, a) {
      e.writelen = i;
      e.writecb = a;
      e.writing = true;
      e.sync = true;
      if (e.destroyed) {
        e.onwrite(new g("write"));
      } else if (r) {
        t._writev(n, e.onwrite);
      } else {
        t._write(n, f, e.onwrite);
      }
      e.sync = false;
    }
    function R(t, e, r, i) {
      var n;
      var f;
      if (!r) {
        n = t;
        if ((f = e).length === 0 && f.needDrain) {
          f.needDrain = false;
          n.emit("drain");
        }
      }
      e.pendingcb--;
      i();
      T(t, e);
    }
    function I(t, e) {
      e.bufferProcessing = true;
      var r = e.bufferedRequest;
      if (t._writev && r && r.next) {
        var i = Array(e.bufferedRequestCount);
        var n = e.corkedRequestsFree;
        n.entry = r;
        var a = 0;
        var o = true;
        for (; r;) {
          i[a] = r;
          if (!r.isBuf) {
            o = false;
          }
          r = r.next;
          a += 1;
        }
        i.allBuffers = o;
        A(t, e, true, e.length, i, "", n.finish);
        e.pendingcb++;
        e.lastBufferedRequest = null;
        if (n.next) {
          e.corkedRequestsFree = n.next;
          n.next = null;
        } else {
          e.corkedRequestsFree = new f(e);
        }
        e.bufferedRequestCount = 0;
      } else {
        while (r) {
          var s = r.chunk;
          var h = r.encoding;
          var c = r.callback;
          var d = e.objectMode ? 1 : s.length;
          A(t, e, false, d, s, h, c);
          r = r.next;
          e.bufferedRequestCount--;
          if (e.writing) {
            break;
          }
        }
        if (r === null) {
          e.lastBufferedRequest = null;
        }
      }
      e.bufferedRequest = r;
      e.bufferProcessing = false;
    }
    function B(t) {
      return t.ending && t.length === 0 && t.bufferedRequest === null && !t.finished && !t.writing;
    }
    function P(t, e) {
      t._final(function (r) {
        e.pendingcb--;
        if (r) {
          M(t, r);
        }
        e.prefinished = true;
        t.emit("prefinish");
        T(t, e);
      });
    }
    function T(t, e) {
      var r = B(e);
      if (r && (e.prefinished || e.finalCalled || (typeof t._final != "function" || e.destroyed ? (e.prefinished = true, t.emit("prefinish")) : (e.pendingcb++, e.finalCalled = true, n.nextTick(P, t, e))), e.pendingcb === 0 && (e.finished = true, t.emit("finish"), e.autoDestroy))) {
        var i = t._readableState;
        if (!i || i.autoDestroy && i.endEmitted) {
          t.destroy();
        }
      }
      return r;
    }
    if (typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function") {
      o = Function.prototype[Symbol.hasInstance];
      Object.defineProperty(E, Symbol.hasInstance, {
        value: function (t) {
          return !!o.call(this, t) || this === E && t && t._writableState instanceof k;
        }
      });
    } else {
      o = function (t) {
        return t instanceof this;
      };
    }
    E.prototype.pipe = function () {
      M(this, new y());
    };
    E.prototype.write = function (t, e, r) {
      var i;
      var f;
      var a;
      var o;
      var s;
      var h;
      var u;
      var l = this._writableState;
      var b = false;
      var m = !l.objectMode && (i = t, c.isBuffer(i) || i instanceof d);
      if (m && !c.isBuffer(t)) {
        f = t;
        t = c.from(f);
      }
      if (typeof e == "function") {
        r = e;
        e = null;
      }
      if (m) {
        e = "buffer";
      } else {
        e ||= l.defaultEncoding;
      }
      if (typeof r != "function") {
        r = S;
      }
      if (l.ending) {
        a = r;
        M(this, o = new w());
        n.nextTick(a, o);
      } else if (m || (s = t, h = r, s === null ? u = new _() : typeof s == "string" || l.objectMode || (u = new p("chunk", ["string", "Buffer"], s)), !u || (M(this, u), n.nextTick(h, u), 0))) {
        l.pendingcb++;
        b = function (t, e, r, i, n, f) {
          if (!r) {
            var a;
            var o;
            a = i;
            o = n;
            if (!e.objectMode && e.decodeStrings !== false && typeof a == "string") {
              a = c.from(a, o);
            }
            var s = a;
            if (i !== s) {
              r = true;
              n = "buffer";
              i = s;
            }
          }
          var h = e.objectMode ? 1 : i.length;
          e.length += h;
          var d = e.length < e.highWaterMark;
          if (!d) {
            e.needDrain = true;
          }
          if (e.writing || e.corked) {
            var u = e.lastBufferedRequest;
            e.lastBufferedRequest = {
              chunk: i,
              encoding: n,
              isBuf: r,
              callback: f,
              next: null
            };
            if (u) {
              u.next = e.lastBufferedRequest;
            } else {
              e.bufferedRequest = e.lastBufferedRequest;
            }
            e.bufferedRequestCount += 1;
          } else {
            A(t, e, false, h, i, n, f);
          }
          return d;
        }(this, l, m, t, e, r);
      }
      return b;
    };
    E.prototype.cork = function () {
      this._writableState.corked++;
    };
    E.prototype.uncork = function () {
      var t = this._writableState;
      if (t.corked) {
        t.corked--;
        if (!t.writing && !t.corked && !t.bufferProcessing && !!t.bufferedRequest) {
          I(this, t);
        }
      }
    };
    E.prototype.setDefaultEncoding = function (t) {
      if (typeof t == "string") {
        t = t.toLowerCase();
      }
      if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) {
        throw new x(t);
      }
      this._writableState.defaultEncoding = t;
      return this;
    };
    Object.defineProperty(E.prototype, "writableBuffer", {
      enumerable: false,
      get: function () {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    Object.defineProperty(E.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function () {
        return this._writableState.highWaterMark;
      }
    });
    E.prototype._write = function (t, e, r) {
      r(new m("_write()"));
    };
    E.prototype._writev = null;
    E.prototype.end = function (t, e, r) {
      var i;
      var f;
      var a;
      var o = this._writableState;
      if (typeof t == "function") {
        r = t;
        t = null;
        e = null;
      } else if (typeof e == "function") {
        r = e;
        e = null;
      }
      if (t != null) {
        this.write(t, e);
      }
      if (o.corked) {
        o.corked = 1;
        this.uncork();
      }
      if (!o.ending) {
        i = this;
        f = o;
        a = r;
        f.ending = true;
        T(i, f);
        if (a) {
          if (f.finished) {
            n.nextTick(a);
          } else {
            i.once("finish", a);
          }
        }
        f.ended = true;
        i.writable = false;
      }
      return this;
    };
    Object.defineProperty(E.prototype, "writableLength", {
      enumerable: false,
      get: function () {
        return this._writableState.length;
      }
    });
    Object.defineProperty(E.prototype, "destroyed", {
      enumerable: false,
      get: function () {
        return this._writableState !== undefined && this._writableState.destroyed;
      },
      set: function (t) {
        if (this._writableState) {
          this._writableState.destroyed = t;
        }
      }
    });
    E.prototype.destroy = u.destroy;
    E.prototype._undestroy = u.undestroy;
    E.prototype._destroy = function (t, e) {
      e(t);
    };
  },
  6871: function (t, e, r) {
    "use strict";

    function i(t, e, r) {
      if (e in t) {
        Object.defineProperty(t, e, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        t[e] = r;
      }
      return t;
    }
    var f;
    var a = r(9698);
    var o = Symbol("lastResolve");
    var s = Symbol("lastReject");
    var h = Symbol("error");
    var c = Symbol("ended");
    var d = Symbol("lastPromise");
    var u = Symbol("handlePromise");
    var l = Symbol("stream");
    function b(t, e) {
      return {
        value: t,
        done: e
      };
    }
    function p(t) {
      var e = t[o];
      if (e !== null) {
        var r = t[l].read();
        if (r !== null) {
          t[d] = null;
          t[o] = null;
          t[s] = null;
          e(b(r, false));
        }
      }
    }
    function m(t) {
      n.nextTick(p, t);
    }
    var v = Object.getPrototypeOf(function () {});
    var y = Object.setPrototypeOf((i(f = {
      get stream() {
        return this[l];
      },
      next: function () {
        var t;
        var e;
        var r = this;
        var i = this[h];
        if (i !== null) {
          return Promise.reject(i);
        }
        if (this[c]) {
          return Promise.resolve(b(undefined, true));
        }
        if (this[l].destroyed) {
          return new Promise(function (t, e) {
            n.nextTick(function () {
              if (r[h]) {
                e(r[h]);
              } else {
                t(b(undefined, true));
              }
            });
          });
        }
        var f = this[d];
        if (f) {
          e = new Promise((t = this, function (e, r) {
            f.then(function () {
              if (t[c]) {
                e(b(undefined, true));
              } else {
                t[u](e, r);
              }
            }, r);
          }));
        } else {
          var a = this[l].read();
          if (a !== null) {
            return Promise.resolve(b(a, false));
          }
          e = new Promise(this[u]);
        }
        this[d] = e;
        return e;
      }
    }, Symbol.asyncIterator, function () {
      return this;
    }), i(f, "return", function () {
      var t = this;
      return new Promise(function (e, r) {
        t[l].destroy(null, function (t) {
          if (t) {
            r(t);
          } else {
            e(b(undefined, true));
          }
        });
      });
    }), f), v);
    t.exports = function (t) {
      var e;
      var r = Object.create(y, (i(e = {}, l, {
        value: t,
        writable: true
      }), i(e, o, {
        value: null,
        writable: true
      }), i(e, s, {
        value: null,
        writable: true
      }), i(e, h, {
        value: null,
        writable: true
      }), i(e, c, {
        value: t._readableState.endEmitted,
        writable: true
      }), i(e, u, {
        value: function (t, e) {
          var i = r[l].read();
          if (i) {
            r[d] = null;
            r[o] = null;
            r[s] = null;
            t(b(i, false));
          } else {
            r[o] = t;
            r[s] = e;
          }
        },
        writable: true
      }), e));
      r[d] = null;
      a(t, function (t) {
        if (t && t.code !== "ERR_STREAM_PREMATURE_CLOSE") {
          var e = r[s];
          if (e !== null) {
            r[d] = null;
            r[o] = null;
            r[s] = null;
            e(t);
          }
          r[h] = t;
          return;
        }
        var i = r[o];
        if (i !== null) {
          r[d] = null;
          r[o] = null;
          r[s] = null;
          i(b(undefined, true));
        }
        r[c] = true;
      });
      t.on("readable", m.bind(null, r));
      return r;
    };
  },
  4379: function (t, e, r) {
    "use strict";

    function i(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        if (e) {
          i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          });
        }
        r.push.apply(r, i);
      }
      return r;
    }
    var n = r(4300).Buffer;
    var f = r(3837).inspect;
    var a = f && f.custom || "inspect";
    t.exports = function () {
      var t;
      function e() {
        if (!(this instanceof e)) {
          throw TypeError("Cannot call a class as a function");
        }
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
      t = [{
        key: "push",
        value: function (t) {
          var e = {
            data: t,
            next: null
          };
          if (this.length > 0) {
            this.tail.next = e;
          } else {
            this.head = e;
          }
          this.tail = e;
          ++this.length;
        }
      }, {
        key: "unshift",
        value: function (t) {
          var e = {
            data: t,
            next: this.head
          };
          if (this.length === 0) {
            this.tail = e;
          }
          this.head = e;
          ++this.length;
        }
      }, {
        key: "shift",
        value: function () {
          if (this.length !== 0) {
            var t = this.head.data;
            if (this.length === 1) {
              this.head = this.tail = null;
            } else {
              this.head = this.head.next;
            }
            --this.length;
            return t;
          }
        }
      }, {
        key: "clear",
        value: function () {
          this.head = this.tail = null;
          this.length = 0;
        }
      }, {
        key: "join",
        value: function (t) {
          if (this.length === 0) {
            return "";
          }
          for (var e = this.head, r = "" + e.data; e = e.next;) {
            r += t + e.data;
          }
          return r;
        }
      }, {
        key: "concat",
        value: function (t) {
          if (this.length === 0) {
            return n.alloc(0);
          }
          var e;
          var r;
          var i = n.allocUnsafe(t >>> 0);
          for (var f = this.head, a = 0; f;) {
            e = f.data;
            r = a;
            n.prototype.copy.call(e, i, r);
            a += f.data.length;
            f = f.next;
          }
          return i;
        }
      }, {
        key: "consume",
        value: function (t, e) {
          var r;
          if (t < this.head.data.length) {
            r = this.head.data.slice(0, t);
            this.head.data = this.head.data.slice(t);
          } else {
            r = t === this.head.data.length ? this.shift() : e ? this._getString(t) : this._getBuffer(t);
          }
          return r;
        }
      }, {
        key: "first",
        value: function () {
          return this.head.data;
        }
      }, {
        key: "_getString",
        value: function (t) {
          var e = this.head;
          var r = 1;
          var i = e.data;
          for (t -= i.length; e = e.next;) {
            var n = e.data;
            var f = t > n.length ? n.length : t;
            if (f === n.length) {
              i += n;
            } else {
              i += n.slice(0, t);
            }
            if ((t -= f) == 0) {
              if (f === n.length) {
                ++r;
                if (e.next) {
                  this.head = e.next;
                } else {
                  this.head = this.tail = null;
                }
              } else {
                this.head = e;
                e.data = n.slice(f);
              }
              break;
            }
            ++r;
          }
          this.length -= r;
          return i;
        }
      }, {
        key: "_getBuffer",
        value: function (t) {
          var e = n.allocUnsafe(t);
          var r = this.head;
          var i = 1;
          r.data.copy(e);
          t -= r.data.length;
          while (r = r.next) {
            var f = r.data;
            var a = t > f.length ? f.length : t;
            f.copy(e, e.length - t, 0, a);
            if ((t -= a) == 0) {
              if (a === f.length) {
                ++i;
                if (r.next) {
                  this.head = r.next;
                } else {
                  this.head = this.tail = null;
                }
              } else {
                this.head = r;
                r.data = f.slice(a);
              }
              break;
            }
            ++i;
          }
          this.length -= i;
          return e;
        }
      }, {
        key: a,
        value: function (t, e) {
          return f(this, function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e] ?? {};
              if (e % 2) {
                i(Object(r), true).forEach(function (e) {
                  var i;
                  var n;
                  var f;
                  i = t;
                  n = e;
                  f = r[e];
                  if (n in i) {
                    Object.defineProperty(i, n, {
                      value: f,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    });
                  } else {
                    i[n] = f;
                  }
                });
              } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(t, Object.getOwnPropertyDescriptors(r));
              } else {
                i(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                });
              }
            }
            return t;
          }({}, e, {
            depth: 0,
            customInspect: false
          }));
        }
      }];
      (function (t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || false;
          i.configurable = true;
          if ("value" in i) {
            i.writable = true;
          }
          Object.defineProperty(t, i.key, i);
        }
      })(e.prototype, t);
      return e;
    }();
  },
  7025: function (t) {
    "use strict";

    function e(t, e) {
      i(t, e);
      r(t);
    }
    function r(t) {
      if (!t._writableState || !!t._writableState.emitClose) {
        if (!t._readableState || t._readableState.emitClose) {
          t.emit("close");
        }
      }
    }
    function i(t, e) {
      t.emit("error", e);
    }
    t.exports = {
      destroy: function (t, f) {
        var a = this;
        var o = this._readableState && this._readableState.destroyed;
        var s = this._writableState && this._writableState.destroyed;
        if (o || s) {
          if (f) {
            f(t);
          } else if (t) {
            if (this._writableState) {
              if (!this._writableState.errorEmitted) {
                this._writableState.errorEmitted = true;
                n.nextTick(i, this, t);
              }
            } else {
              n.nextTick(i, this, t);
            }
          }
        } else {
          if (this._readableState) {
            this._readableState.destroyed = true;
          }
          if (this._writableState) {
            this._writableState.destroyed = true;
          }
          this._destroy(t || null, function (t) {
            if (!f && t) {
              if (a._writableState) {
                if (a._writableState.errorEmitted) {
                  n.nextTick(r, a);
                } else {
                  a._writableState.errorEmitted = true;
                  n.nextTick(e, a, t);
                }
              } else {
                n.nextTick(e, a, t);
              }
            } else if (f) {
              n.nextTick(r, a);
              f(t);
            } else {
              n.nextTick(r, a);
            }
          });
        }
        return this;
      },
      undestroy: function () {
        if (this._readableState) {
          this._readableState.destroyed = false;
          this._readableState.reading = false;
          this._readableState.ended = false;
          this._readableState.endEmitted = false;
        }
        if (this._writableState) {
          this._writableState.destroyed = false;
          this._writableState.ended = false;
          this._writableState.ending = false;
          this._writableState.finalCalled = false;
          this._writableState.prefinished = false;
          this._writableState.finished = false;
          this._writableState.errorEmitted = false;
        }
      },
      errorOrDestroy: function (t, e) {
        var r = t._readableState;
        var i = t._writableState;
        if (r && r.autoDestroy || i && i.autoDestroy) {
          t.destroy(e);
        } else {
          t.emit("error", e);
        }
      }
    };
  },
  9698: function (t, e, r) {
    "use strict";

    var i = r(4646).q.ERR_STREAM_PREMATURE_CLOSE;
    function n() {}
    t.exports = function t(e, r, f) {
      if (typeof r == "function") {
        return t(e, null, r);
      }
      r ||= {};
      a = f || n;
      o = false;
      f = function () {
        if (!o) {
          o = true;
          for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) {
            e[r] = arguments[r];
          }
          a.apply(this, e);
        }
      };
      var a;
      var o;
      var s = r.readable || r.readable !== false && e.readable;
      var h = r.writable || r.writable !== false && e.writable;
      function c() {
        if (!e.writable) {
          u();
        }
      }
      var d = e._writableState && e._writableState.finished;
      function u() {
        h = false;
        d = true;
        if (!s) {
          f.call(e);
        }
      }
      var l = e._readableState && e._readableState.endEmitted;
      function b() {
        s = false;
        l = true;
        if (!h) {
          f.call(e);
        }
      }
      function p(t) {
        f.call(e, t);
      }
      function m() {
        var t;
        if (s && !l) {
          if (!e._readableState || !e._readableState.ended) {
            t = new i();
          }
          return f.call(e, t);
        } else if (h && !d) {
          if (!e._writableState || !e._writableState.ended) {
            t = new i();
          }
          return f.call(e, t);
        } else {
          return undefined;
        }
      }
      function v() {
        e.req.on("finish", u);
      }
      if (e.setHeader && typeof e.abort == "function") {
        e.on("complete", u);
        e.on("abort", m);
        if (e.req) {
          v();
        } else {
          e.on("request", v);
        }
      } else if (h && !e._writableState) {
        e.on("end", c);
        e.on("close", c);
      }
      e.on("end", b);
      e.on("finish", u);
      if (r.error !== false) {
        e.on("error", p);
      }
      e.on("close", m);
      return function () {
        e.removeListener("complete", u);
        e.removeListener("abort", m);
        e.removeListener("request", v);
        if (e.req) {
          e.req.removeListener("finish", u);
        }
        e.removeListener("end", c);
        e.removeListener("close", c);
        e.removeListener("finish", u);
        e.removeListener("end", b);
        e.removeListener("error", p);
        e.removeListener("close", m);
      };
    };
  },
  9727: function (t, e, r) {
    "use strict";

    function i(t, e, r, i, n, f, a) {
      try {
        var o = t[f](a);
        var s = o.value;
      } catch (t) {
        r(t);
        return;
      }
      if (o.done) {
        e(s);
      } else {
        Promise.resolve(s).then(i, n);
      }
    }
    function n(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        if (e) {
          i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          });
        }
        r.push.apply(r, i);
      }
      return r;
    }
    var f = r(4646).q.ERR_INVALID_ARG_TYPE;
    t.exports = function (t, e, r) {
      if (e && typeof e.next == "function") {
        a = e;
      } else if (e && e[Symbol.asyncIterator]) {
        a = e[Symbol.asyncIterator]();
      } else if (e && e[Symbol.iterator]) {
        a = e[Symbol.iterator]();
      } else {
        throw new f("iterable", ["Iterable"], e);
      }
      var a;
      var o = new t(function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e] ?? {};
          if (e % 2) {
            n(Object(r), true).forEach(function (e) {
              var i;
              var n;
              var f;
              i = t;
              n = e;
              f = r[e];
              if (n in i) {
                Object.defineProperty(i, n, {
                  value: f,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                i[n] = f;
              }
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(t, Object.getOwnPropertyDescriptors(r));
          } else {
            n(Object(r)).forEach(function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
            });
          }
        }
        return t;
      }({
        objectMode: true
      }, r));
      var s = false;
      function h() {
        return c.apply(this, arguments);
      }
      function c() {
        var t;
        t = function* () {
          try {
            var t = yield a.next();
            var e = t.value;
            if (t.done) {
              o.push(null);
            } else if (o.push(yield e)) {
              h();
            } else {
              s = false;
            }
          } catch (t) {
            o.destroy(t);
          }
        };
        return (c = function () {
          var e = this;
          var r = arguments;
          return new Promise(function (n, f) {
            var a = t.apply(e, r);
            function o(t) {
              i(a, n, f, o, s, "next", t);
            }
            function s(t) {
              i(a, n, f, o, s, "throw", t);
            }
            o(undefined);
          });
        }).apply(this, arguments);
      }
      o._read = function () {
        if (!s) {
          s = true;
          h();
        }
      };
      return o;
    };
  },
  8442: function (t, e, r) {
    "use strict";

    var i;
    var n = r(4646).q;
    var f = n.ERR_MISSING_ARGS;
    var a = n.ERR_STREAM_DESTROYED;
    function o(t) {
      if (t) {
        throw t;
      }
    }
    function s(t) {
      t();
    }
    function h(t, e) {
      return t.pipe(e);
    }
    t.exports = function () {
      var t;
      var e;
      for (var n = arguments.length, c = Array(n), d = 0; d < n; d++) {
        c[d] = arguments[d];
      }
      var u = (t = c).length && typeof t[t.length - 1] == "function" ? t.pop() : o;
      if (Array.isArray(c[0])) {
        c = c[0];
      }
      if (c.length < 2) {
        throw new f("streams");
      }
      var l = c.map(function (t, n) {
        var f;
        var o;
        var h;
        var d;
        var b;
        var p;
        var m = n < c.length - 1;
        f = n > 0;
        h = o = function (t) {
          e ||= t;
          if (t) {
            l.forEach(s);
          }
          if (!m) {
            l.forEach(s);
            u(e);
          }
        };
        d = false;
        o = function () {
          if (!d) {
            d = true;
            h.apply(undefined, arguments);
          }
        };
        b = false;
        t.on("close", function () {
          b = true;
        });
        if (i === undefined) {
          i = r(9698);
        }
        i(t, {
          readable: m,
          writable: f
        }, function (t) {
          if (t) {
            return o(t);
          }
          b = true;
          o();
        });
        p = false;
        return function (e) {
          if (!b && !p) {
            p = true;
            if (t.setHeader && typeof t.abort == "function") {
              return t.abort();
            }
            if (typeof t.destroy == "function") {
              return t.destroy();
            }
            o(e || new a("pipe"));
          }
        };
      });
      return c.reduce(h);
    };
  },
  6776: function (t, e, r) {
    "use strict";

    var i = r(4646).q.ERR_INVALID_OPT_VALUE;
    t.exports = {
      getHighWaterMark: function (t, e, r, n) {
        var f = e.highWaterMark ?? (n ? e[r] : null);
        if (f != null) {
          if (!isFinite(f) || Math.floor(f) !== f || f < 0) {
            throw new i(n ? r : "highWaterMark", f);
          }
          return Math.floor(f);
        }
        if (t.objectMode) {
          return 16;
        } else {
          return 16384;
        }
      }
    };
  },
  4678: function (t, e, r) {
    t.exports = r(2781);
  },
  3726: function (t, e, r) {
    var i = r(2781);
    if (n.env.READABLE_STREAM === "disable" && i) {
      t.exports = i.Readable;
      Object.assign(t.exports, i);
      t.exports.Stream = i;
    } else {
      (e = t.exports = r(1709)).Stream = i || e;
      e.Readable = e;
      e.Writable = r(7337);
      e.Duplex = r(2403);
      e.Transform = r(1170);
      e.PassThrough = r(7889);
      e.finished = r(9698);
      e.pipeline = r(8442);
    }
  },
  3225: function (t, e, r) {
    "use strict";

    var i = r(4300).Buffer;
    var n = r(3782);
    var f = r(9029);
    var a = Array(16);
    var o = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13];
    var s = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11];
    var h = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6];
    var c = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
    function d() {
      f.call(this, 64);
      this._a = 1732584193;
      this._b = 4023233417;
      this._c = 2562383102;
      this._d = 271733878;
      this._e = 3285377520;
    }
    function u(t, e) {
      return t << e | t >>> 32 - e;
    }
    n(d, f);
    d.prototype._update = function () {
      var t;
      var e;
      var r;
      var i;
      var n;
      var f;
      var d;
      var l;
      var b;
      var p;
      var m;
      var v;
      var y;
      var g;
      var _;
      var w;
      var x;
      var M;
      var S;
      var k;
      var E;
      var A;
      var R;
      var I;
      var B;
      var P;
      var T;
      var C;
      var j;
      var O;
      var D;
      var N;
      var q;
      var L;
      var z;
      var U;
      var K;
      var H;
      var F;
      var V;
      var W;
      var Z;
      var X;
      var G;
      var J;
      var Y;
      var $;
      var Q;
      var tt;
      var te;
      var tr;
      var ti;
      for (var tn = 0; tn < 16; ++tn) {
        a[tn] = this._block.readInt32LE(tn * 4);
      }
      var tf = this._a | 0;
      var ta = this._b | 0;
      var to = this._c | 0;
      var ts = this._d | 0;
      var th = this._e | 0;
      var tc = this._a | 0;
      var td = this._b | 0;
      var tu = this._c | 0;
      var tl = this._d | 0;
      var tb = this._e | 0;
      for (var tp = 0; tp < 80; tp += 1) {
        if (tp < 16) {
          t = tf;
          e = ta;
          r = to;
          i = ts;
          n = th;
          tr = u(t + (e ^ r ^ i) + a[o[tp]] + 0 | 0, h[tp]) + n | 0;
          f = tc;
          d = td;
          l = tu;
          b = tl;
          p = tb;
          ti = u(f + (d ^ (l | ~b)) + a[s[tp]] + 1352829926 | 0, c[tp]) + p | 0;
        } else if (tp < 32) {
          m = tf;
          v = ta;
          y = to;
          g = ts;
          _ = th;
          tr = u(m + (v & y | ~v & g) + a[o[tp]] + 1518500249 | 0, h[tp]) + _ | 0;
          w = tc;
          x = td;
          M = tu;
          S = tl;
          k = tb;
          ti = u(w + (x & S | M & ~S) + a[s[tp]] + 1548603684 | 0, c[tp]) + k | 0;
        } else if (tp < 48) {
          E = tf;
          A = ta;
          R = to;
          I = ts;
          B = th;
          tr = u(E + ((A | ~R) ^ I) + a[o[tp]] + 1859775393 | 0, h[tp]) + B | 0;
          P = tc;
          T = td;
          C = tu;
          j = tl;
          O = tb;
          ti = u(P + ((T | ~C) ^ j) + a[s[tp]] + 1836072691 | 0, c[tp]) + O | 0;
        } else if (tp < 64) {
          D = tf;
          N = ta;
          q = to;
          L = ts;
          z = th;
          tr = u(D + (N & L | q & ~L) + a[o[tp]] + 2400959708 | 0, h[tp]) + z | 0;
          U = tc;
          K = td;
          H = tu;
          F = tl;
          V = tb;
          ti = u(U + (K & H | ~K & F) + a[s[tp]] + 2053994217 | 0, c[tp]) + V | 0;
        } else {
          W = tf;
          Z = ta;
          X = to;
          G = ts;
          J = th;
          tr = u(W + (Z ^ (X | ~G)) + a[o[tp]] + 2840853838 | 0, h[tp]) + J | 0;
          Y = tc;
          $ = td;
          Q = tu;
          tt = tl;
          te = tb;
          ti = u(Y + ($ ^ Q ^ tt) + a[s[tp]] + 0 | 0, c[tp]) + te | 0;
        }
        tf = th;
        th = ts;
        ts = u(to, 10);
        to = ta;
        ta = tr;
        tc = tb;
        tb = tl;
        tl = u(tu, 10);
        tu = td;
        td = ti;
      }
      var tm = this._b + to + tl | 0;
      this._b = this._c + ts + tb | 0;
      this._c = this._d + th + tc | 0;
      this._d = this._e + tf + td | 0;
      this._e = this._a + ta + tu | 0;
      this._a = tm;
    };
    d.prototype._digest = function () {
      this._block[this._blockOffset++] = 128;
      if (this._blockOffset > 56) {
        this._block.fill(0, this._blockOffset, 64);
        this._update();
        this._blockOffset = 0;
      }
      this._block.fill(0, this._blockOffset, 56);
      this._block.writeUInt32LE(this._length[0], 56);
      this._block.writeUInt32LE(this._length[1], 60);
      this._update();
      var t = i.alloc ? i.alloc(20) : new i(20);
      t.writeInt32LE(this._a, 0);
      t.writeInt32LE(this._b, 4);
      t.writeInt32LE(this._c, 8);
      t.writeInt32LE(this._d, 12);
      t.writeInt32LE(this._e, 16);
      return t;
    };
    t.exports = d;
  },
  5055: function (t, e, r) {
    var i = r(4300);
    var n = i.Buffer;
    function f(t, e) {
      for (var r in t) {
        e[r] = t[r];
      }
    }
    function a(t, e, r) {
      return n(t, e, r);
    }
    if (n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow) {
      t.exports = i;
    } else {
      f(i, e);
      e.Buffer = a;
    }
    a.prototype = Object.create(n.prototype);
    f(n, a);
    a.from = function (t, e, r) {
      if (typeof t == "number") {
        throw TypeError("Argument must not be a number");
      }
      return n(t, e, r);
    };
    a.alloc = function (t, e, r) {
      if (typeof t != "number") {
        throw TypeError("Argument must be a number");
      }
      var i = n(t);
      if (e !== undefined) {
        if (typeof r == "string") {
          i.fill(e, r);
        } else {
          i.fill(e);
        }
      } else {
        i.fill(0);
      }
      return i;
    };
    a.allocUnsafe = function (t) {
      if (typeof t != "number") {
        throw TypeError("Argument must be a number");
      }
      return n(t);
    };
    a.allocUnsafeSlow = function (t) {
      if (typeof t != "number") {
        throw TypeError("Argument must be a number");
      }
      return i.SlowBuffer(t);
    };
  },
  6911: function (t, e, r) {
    var i = r(4300);
    var n = i.Buffer;
    function f(t, e) {
      for (var r in t) {
        e[r] = t[r];
      }
    }
    function a(t, e, r) {
      return n(t, e, r);
    }
    if (n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow) {
      t.exports = i;
    } else {
      f(i, e);
      e.Buffer = a;
    }
    a.prototype = Object.create(n.prototype);
    f(n, a);
    a.from = function (t, e, r) {
      if (typeof t == "number") {
        throw TypeError("Argument must not be a number");
      }
      return n(t, e, r);
    };
    a.alloc = function (t, e, r) {
      if (typeof t != "number") {
        throw TypeError("Argument must be a number");
      }
      var i = n(t);
      if (e !== undefined) {
        if (typeof r == "string") {
          i.fill(e, r);
        } else {
          i.fill(e);
        }
      } else {
        i.fill(0);
      }
      return i;
    };
    a.allocUnsafe = function (t) {
      if (typeof t != "number") {
        throw TypeError("Argument must be a number");
      }
      return n(t);
    };
    a.allocUnsafeSlow = function (t) {
      if (typeof t != "number") {
        throw TypeError("Argument must be a number");
      }
      return i.SlowBuffer(t);
    };
  },
  2858: function (t, e, r) {
    var i = r(6911).Buffer;
    function n(t, e) {
      this._block = i.alloc(t);
      this._finalSize = e;
      this._blockSize = t;
      this._len = 0;
    }
    n.prototype.update = function (t, e) {
      if (typeof t == "string") {
        e = e || "utf8";
        t = i.from(t, e);
      }
      var r = this._block;
      var n = this._blockSize;
      for (var f = t.length, a = this._len, o = 0; o < f;) {
        var s = a % n;
        for (var h = Math.min(f - o, n - s), c = 0; c < h; c++) {
          r[s + c] = t[o + c];
        }
        a += h;
        o += h;
        if (a % n == 0) {
          this._update(r);
        }
      }
      this._len += f;
      return this;
    };
    n.prototype.digest = function (t) {
      var e = this._len % this._blockSize;
      this._block[e] = 128;
      this._block.fill(0, e + 1);
      if (e >= this._finalSize) {
        this._update(this._block);
        this._block.fill(0);
      }
      var r = this._len * 8;
      if (r <= 4294967295) {
        this._block.writeUInt32BE(r, this._blockSize - 4);
      } else {
        var i = r >>> 0;
        this._block.writeUInt32BE((r - i) / 4294967296, this._blockSize - 8);
        this._block.writeUInt32BE(i, this._blockSize - 4);
      }
      this._update(this._block);
      var n = this._hash();
      if (t) {
        return n.toString(t);
      } else {
        return n;
      }
    };
    n.prototype._update = function () {
      throw Error("_update must be implemented by subclass");
    };
    t.exports = n;
  },
  4371: function (t, e, r) {
    var i = t.exports = function (t) {
      var e = i[t = t.toLowerCase()];
      if (!e) {
        throw Error(t + " is not supported (we accept pull requests)");
      }
      return new e();
    };
    i.sha = r(4018);
    i.sha1 = r(4179);
    i.sha224 = r(532);
    i.sha256 = r(1843);
    i.sha384 = r(7455);
    i.sha512 = r(9934);
  },
  4018: function (t, e, r) {
    var i = r(3782);
    var n = r(2858);
    var f = r(6911).Buffer;
    var a = [1518500249, 1859775393, -1894007588, -899497514];
    var o = Array(80);
    function s() {
      this.init();
      this._w = o;
      n.call(this, 64, 56);
    }
    i(s, n);
    s.prototype.init = function () {
      this._a = 1732584193;
      this._b = 4023233417;
      this._c = 2562383102;
      this._d = 271733878;
      this._e = 3285377520;
      return this;
    };
    s.prototype._update = function (t) {
      var e = this._w;
      var r = this._a | 0;
      var i = this._b | 0;
      var n = this._c | 0;
      var f = this._d | 0;
      var o = this._e | 0;
      for (var s = 0; s < 16; ++s) {
        e[s] = t.readInt32BE(s * 4);
      }
      for (; s < 80; ++s) {
        e[s] = e[s - 3] ^ e[s - 8] ^ e[s - 14] ^ e[s - 16];
      }
      for (var h = 0; h < 80; ++h) {
        var c;
        var d;
        var u;
        var l;
        var b;
        var p = ~~(h / 20);
        var m = ((c = r) << 5 | c >>> 27) + (d = i, u = n, l = f, p === 0 ? d & u | ~d & l : p === 2 ? d & u | d & l | u & l : d ^ u ^ l) + o + e[h] + a[p] | 0;
        o = f;
        f = n;
        n = (b = i) << 30 | b >>> 2;
        i = r;
        r = m;
      }
      this._a = r + this._a | 0;
      this._b = i + this._b | 0;
      this._c = n + this._c | 0;
      this._d = f + this._d | 0;
      this._e = o + this._e | 0;
    };
    s.prototype._hash = function () {
      var t = f.allocUnsafe(20);
      t.writeInt32BE(this._a | 0, 0);
      t.writeInt32BE(this._b | 0, 4);
      t.writeInt32BE(this._c | 0, 8);
      t.writeInt32BE(this._d | 0, 12);
      t.writeInt32BE(this._e | 0, 16);
      return t;
    };
    t.exports = s;
  },
  4179: function (t, e, r) {
    var i = r(3782);
    var n = r(2858);
    var f = r(6911).Buffer;
    var a = [1518500249, 1859775393, -1894007588, -899497514];
    var o = Array(80);
    function s() {
      this.init();
      this._w = o;
      n.call(this, 64, 56);
    }
    i(s, n);
    s.prototype.init = function () {
      this._a = 1732584193;
      this._b = 4023233417;
      this._c = 2562383102;
      this._d = 271733878;
      this._e = 3285377520;
      return this;
    };
    s.prototype._update = function (t) {
      var e = this._w;
      var r = this._a | 0;
      var i = this._b | 0;
      var n = this._c | 0;
      var f = this._d | 0;
      var o = this._e | 0;
      for (var s = 0; s < 16; ++s) {
        e[s] = t.readInt32BE(s * 4);
      }
      for (; s < 80; ++s) {
        e[s] = (c = e[s - 3] ^ e[s - 8] ^ e[s - 14] ^ e[s - 16]) << 1 | c >>> 31;
      }
      for (var h = 0; h < 80; ++h) {
        var c;
        var d;
        var u;
        var l;
        var b;
        var p;
        var m = ~~(h / 20);
        var v = ((d = r) << 5 | d >>> 27) + (u = i, l = n, b = f, m === 0 ? u & l | ~u & b : m === 2 ? u & l | u & b | l & b : u ^ l ^ b) + o + e[h] + a[m] | 0;
        o = f;
        f = n;
        n = (p = i) << 30 | p >>> 2;
        i = r;
        r = v;
      }
      this._a = r + this._a | 0;
      this._b = i + this._b | 0;
      this._c = n + this._c | 0;
      this._d = f + this._d | 0;
      this._e = o + this._e | 0;
    };
    s.prototype._hash = function () {
      var t = f.allocUnsafe(20);
      t.writeInt32BE(this._a | 0, 0);
      t.writeInt32BE(this._b | 0, 4);
      t.writeInt32BE(this._c | 0, 8);
      t.writeInt32BE(this._d | 0, 12);
      t.writeInt32BE(this._e | 0, 16);
      return t;
    };
    t.exports = s;
  },
  532: function (t, e, r) {
    var i = r(3782);
    var n = r(1843);
    var f = r(2858);
    var a = r(6911).Buffer;
    var o = Array(64);
    function s() {
      this.init();
      this._w = o;
      f.call(this, 64, 56);
    }
    i(s, n);
    s.prototype.init = function () {
      this._a = 3238371032;
      this._b = 914150663;
      this._c = 812702999;
      this._d = 4144912697;
      this._e = 4290775857;
      this._f = 1750603025;
      this._g = 1694076839;
      this._h = 3204075428;
      return this;
    };
    s.prototype._hash = function () {
      var t = a.allocUnsafe(28);
      t.writeInt32BE(this._a, 0);
      t.writeInt32BE(this._b, 4);
      t.writeInt32BE(this._c, 8);
      t.writeInt32BE(this._d, 12);
      t.writeInt32BE(this._e, 16);
      t.writeInt32BE(this._f, 20);
      t.writeInt32BE(this._g, 24);
      return t;
    };
    t.exports = s;
  },
  1843: function (t, e, r) {
    var i = r(3782);
    var n = r(2858);
    var f = r(6911).Buffer;
    var a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
    var o = Array(64);
    function s() {
      this.init();
      this._w = o;
      n.call(this, 64, 56);
    }
    i(s, n);
    s.prototype.init = function () {
      this._a = 1779033703;
      this._b = 3144134277;
      this._c = 1013904242;
      this._d = 2773480762;
      this._e = 1359893119;
      this._f = 2600822924;
      this._g = 528734635;
      this._h = 1541459225;
      return this;
    };
    s.prototype._update = function (t) {
      var e = this._w;
      var r = this._a | 0;
      var i = this._b | 0;
      var n = this._c | 0;
      var f = this._d | 0;
      var o = this._e | 0;
      var s = this._f | 0;
      var h = this._g | 0;
      var c = this._h | 0;
      for (var d = 0; d < 16; ++d) {
        e[d] = t.readInt32BE(d * 4);
      }
      for (; d < 64; ++d) {
        e[d] = (((l = e[d - 2]) >>> 17 | l << 15) ^ (l >>> 19 | l << 13) ^ l >>> 10) + e[d - 7] + (((b = e[d - 15]) >>> 7 | b << 25) ^ (b >>> 18 | b << 14) ^ b >>> 3) + e[d - 16] | 0;
      }
      for (var u = 0; u < 64; ++u) {
        var l;
        var b;
        var p;
        var m;
        var v;
        var y;
        var g;
        var _;
        var w;
        var x = c + (((p = o) >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^ (p >>> 25 | p << 7)) + (m = o, v = s, (y = h) ^ m & (v ^ y)) + a[u] + e[u] | 0;
        var M = (((g = r) >>> 2 | g << 30) ^ (g >>> 13 | g << 19) ^ (g >>> 22 | g << 10)) + ((_ = r) & (w = i) | n & (_ | w)) | 0;
        c = h;
        h = s;
        s = o;
        o = f + x | 0;
        f = n;
        n = i;
        i = r;
        r = x + M | 0;
      }
      this._a = r + this._a | 0;
      this._b = i + this._b | 0;
      this._c = n + this._c | 0;
      this._d = f + this._d | 0;
      this._e = o + this._e | 0;
      this._f = s + this._f | 0;
      this._g = h + this._g | 0;
      this._h = c + this._h | 0;
    };
    s.prototype._hash = function () {
      var t = f.allocUnsafe(32);
      t.writeInt32BE(this._a, 0);
      t.writeInt32BE(this._b, 4);
      t.writeInt32BE(this._c, 8);
      t.writeInt32BE(this._d, 12);
      t.writeInt32BE(this._e, 16);
      t.writeInt32BE(this._f, 20);
      t.writeInt32BE(this._g, 24);
      t.writeInt32BE(this._h, 28);
      return t;
    };
    t.exports = s;
  },
  7455: function (t, e, r) {
    var i = r(3782);
    var n = r(9934);
    var f = r(2858);
    var a = r(6911).Buffer;
    var o = Array(160);
    function s() {
      this.init();
      this._w = o;
      f.call(this, 128, 112);
    }
    i(s, n);
    s.prototype.init = function () {
      this._ah = 3418070365;
      this._bh = 1654270250;
      this._ch = 2438529370;
      this._dh = 355462360;
      this._eh = 1731405415;
      this._fh = 2394180231;
      this._gh = 3675008525;
      this._hh = 1203062813;
      this._al = 3238371032;
      this._bl = 914150663;
      this._cl = 812702999;
      this._dl = 4144912697;
      this._el = 4290775857;
      this._fl = 1750603025;
      this._gl = 1694076839;
      this._hl = 3204075428;
      return this;
    };
    s.prototype._hash = function () {
      var t = a.allocUnsafe(48);
      function e(e, r, i) {
        t.writeInt32BE(e, i);
        t.writeInt32BE(r, i + 4);
      }
      e(this._ah, this._al, 0);
      e(this._bh, this._bl, 8);
      e(this._ch, this._cl, 16);
      e(this._dh, this._dl, 24);
      e(this._eh, this._el, 32);
      e(this._fh, this._fl, 40);
      return t;
    };
    t.exports = s;
  },
  9934: function (t, e, r) {
    var i = r(3782);
    var n = r(2858);
    var f = r(6911).Buffer;
    var a = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
    var o = Array(160);
    function s() {
      this.init();
      this._w = o;
      n.call(this, 128, 112);
    }
    function h(t, e) {
      return (t >>> 28 | e << 4) ^ (e >>> 2 | t << 30) ^ (e >>> 7 | t << 25);
    }
    function c(t, e) {
      return (t >>> 14 | e << 18) ^ (t >>> 18 | e << 14) ^ (e >>> 9 | t << 23);
    }
    function d(t, e) {
      return +(t >>> 0 < e >>> 0);
    }
    i(s, n);
    s.prototype.init = function () {
      this._ah = 1779033703;
      this._bh = 3144134277;
      this._ch = 1013904242;
      this._dh = 2773480762;
      this._eh = 1359893119;
      this._fh = 2600822924;
      this._gh = 528734635;
      this._hh = 1541459225;
      this._al = 4089235720;
      this._bl = 2227873595;
      this._cl = 4271175723;
      this._dl = 1595750129;
      this._el = 2917565137;
      this._fl = 725511199;
      this._gl = 4215389547;
      this._hl = 327033209;
      return this;
    };
    s.prototype._update = function (t) {
      var e = this._w;
      var r = this._ah | 0;
      var i = this._bh | 0;
      var n = this._ch | 0;
      var f = this._dh | 0;
      var o = this._eh | 0;
      var s = this._fh | 0;
      var u = this._gh | 0;
      var l = this._hh | 0;
      var b = this._al | 0;
      var p = this._bl | 0;
      var m = this._cl | 0;
      var v = this._dl | 0;
      var y = this._el | 0;
      var g = this._fl | 0;
      var _ = this._gl | 0;
      var w = this._hl | 0;
      for (var x = 0; x < 32; x += 2) {
        e[x] = t.readInt32BE(x * 4);
        e[x + 1] = t.readInt32BE(x * 4 + 4);
      }
      for (; x < 160; x += 2) {
        var M;
        var S;
        var k;
        var E;
        var A;
        var R;
        var I;
        var B;
        var P = e[x - 30];
        var T = e[x - 30 + 1];
        var C = ((M = P) >>> 1 | (S = T) << 31) ^ (M >>> 8 | S << 24) ^ M >>> 7;
        var j = ((k = T) >>> 1 | (E = P) << 31) ^ (k >>> 8 | E << 24) ^ (k >>> 7 | E << 25);
        P = e[x - 4];
        T = e[x - 4 + 1];
        var O = ((A = P) >>> 19 | (R = T) << 13) ^ (R >>> 29 | A << 3) ^ A >>> 6;
        var D = ((I = T) >>> 19 | (B = P) << 13) ^ (B >>> 29 | I << 3) ^ (I >>> 6 | B << 26);
        var N = e[x - 14];
        var q = e[x - 14 + 1];
        var L = e[x - 32];
        var z = e[x - 32 + 1];
        var U = j + q | 0;
        var K = C + N + d(U, j) | 0;
        K = (K = K + O + d(U = U + D | 0, D) | 0) + L + d(U = U + z | 0, z) | 0;
        e[x] = K;
        e[x + 1] = U;
      }
      for (var H = 0; H < 160; H += 2) {
        K = e[H];
        U = e[H + 1];
        var F;
        var V;
        var W;
        var Z;
        var X;
        var G;
        var J;
        var Y;
        var $;
        var Q;
        var tt = (F = r) & (V = i) | n & (F | V);
        var te = (W = b) & (Z = p) | m & (W | Z);
        var tr = h(r, b);
        var ti = h(b, r);
        var tn = c(o, y);
        var tf = c(y, o);
        var ta = a[H];
        var to = a[H + 1];
        X = o;
        G = s;
        var ts = (J = u) ^ X & (G ^ J);
        Y = y;
        $ = g;
        var th = (Q = _) ^ Y & ($ ^ Q);
        var tc = w + tf | 0;
        var td = l + tn + d(tc, w) | 0;
        td = (td = (td = td + ts + d(tc = tc + th | 0, th) | 0) + ta + d(tc = tc + to | 0, to) | 0) + K + d(tc = tc + U | 0, U) | 0;
        var tu = ti + te | 0;
        var tl = tr + tt + d(tu, ti) | 0;
        l = u;
        w = _;
        u = s;
        _ = g;
        s = o;
        g = y;
        o = f + td + d(y = v + tc | 0, v) | 0;
        f = n;
        v = m;
        n = i;
        m = p;
        i = r;
        p = b;
        r = td + tl + d(b = tc + tu | 0, tc) | 0;
      }
      this._al = this._al + b | 0;
      this._bl = this._bl + p | 0;
      this._cl = this._cl + m | 0;
      this._dl = this._dl + v | 0;
      this._el = this._el + y | 0;
      this._fl = this._fl + g | 0;
      this._gl = this._gl + _ | 0;
      this._hl = this._hl + w | 0;
      this._ah = this._ah + r + d(this._al, b) | 0;
      this._bh = this._bh + i + d(this._bl, p) | 0;
      this._ch = this._ch + n + d(this._cl, m) | 0;
      this._dh = this._dh + f + d(this._dl, v) | 0;
      this._eh = this._eh + o + d(this._el, y) | 0;
      this._fh = this._fh + s + d(this._fl, g) | 0;
      this._gh = this._gh + u + d(this._gl, _) | 0;
      this._hh = this._hh + l + d(this._hl, w) | 0;
    };
    s.prototype._hash = function () {
      var t = f.allocUnsafe(64);
      function e(e, r, i) {
        t.writeInt32BE(e, i);
        t.writeInt32BE(r, i + 4);
      }
      e(this._ah, this._al, 0);
      e(this._bh, this._bl, 8);
      e(this._ch, this._cl, 16);
      e(this._dh, this._dl, 24);
      e(this._eh, this._el, 32);
      e(this._fh, this._fl, 40);
      e(this._gh, this._gl, 48);
      e(this._hh, this._hl, 56);
      return t;
    };
    t.exports = s;
  },
  3704: function (t, e, r) {
    "use strict";

    var i = r(5055).Buffer;
    var n = i.isEncoding || function (t) {
      switch ((t = "" + t) && t.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function f(t) {
      var e;
      this.encoding = function (t) {
        var e = function (t) {
          var e;
          if (!t) {
            return "utf8";
          }
          while (true) {
            switch (t) {
              case "utf8":
              case "utf-8":
                return "utf8";
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return "utf16le";
              case "latin1":
              case "binary":
                return "latin1";
              case "base64":
              case "ascii":
              case "hex":
                return t;
              default:
                if (e) {
                  return;
                }
                t = ("" + t).toLowerCase();
                e = true;
            }
          }
        }(t);
        if (typeof e != "string" && (i.isEncoding === n || !n(t))) {
          throw Error("Unknown encoding: " + t);
        }
        return e || t;
      }(t);
      switch (this.encoding) {
        case "utf16le":
          this.text = s;
          this.end = h;
          e = 4;
          break;
        case "utf8":
          this.fillLast = o;
          e = 4;
          break;
        case "base64":
          this.text = c;
          this.end = d;
          e = 3;
          break;
        default:
          this.write = u;
          this.end = l;
          return;
      }
      this.lastNeed = 0;
      this.lastTotal = 0;
      this.lastChar = i.allocUnsafe(e);
    }
    function a(t) {
      if (t <= 127) {
        return 0;
      } else if (t >> 5 == 6) {
        return 2;
      } else if (t >> 4 == 14) {
        return 3;
      } else if (t >> 3 == 30) {
        return 4;
      } else if (t >> 6 == 2) {
        return -1;
      } else {
        return -2;
      }
    }
    function o(t) {
      var e = this.lastTotal - this.lastNeed;
      var r = function (t, e, r) {
        if ((e[0] & 192) != 128) {
          t.lastNeed = 0;
          return "�";
        }
        if (t.lastNeed > 1 && e.length > 1) {
          if ((e[1] & 192) != 128) {
            t.lastNeed = 1;
            return "�";
          }
          if (t.lastNeed > 2 && e.length > 2 && (e[2] & 192) != 128) {
            t.lastNeed = 2;
            return "�";
          }
        }
      }(this, t, 0);
      if (r !== undefined) {
        return r;
      } else if (this.lastNeed <= t.length) {
        t.copy(this.lastChar, e, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      } else {
        t.copy(this.lastChar, e, 0, t.length);
        this.lastNeed -= t.length;
        return;
      }
    }
    function s(t, e) {
      if ((t.length - e) % 2 == 0) {
        var r = t.toString("utf16le", e);
        if (r) {
          var i = r.charCodeAt(r.length - 1);
          if (i >= 55296 && i <= 56319) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] = t[t.length - 2];
            this.lastChar[1] = t[t.length - 1];
            return r.slice(0, -1);
          }
        }
        return r;
      }
      this.lastNeed = 1;
      this.lastTotal = 2;
      this.lastChar[0] = t[t.length - 1];
      return t.toString("utf16le", e, t.length - 1);
    }
    function h(t) {
      var e = t && t.length ? this.write(t) : "";
      if (this.lastNeed) {
        var r = this.lastTotal - this.lastNeed;
        return e + this.lastChar.toString("utf16le", 0, r);
      }
      return e;
    }
    function c(t, e) {
      var r = (t.length - e) % 3;
      if (r === 0) {
        return t.toString("base64", e);
      } else {
        this.lastNeed = 3 - r;
        this.lastTotal = 3;
        if (r === 1) {
          this.lastChar[0] = t[t.length - 1];
        } else {
          this.lastChar[0] = t[t.length - 2];
          this.lastChar[1] = t[t.length - 1];
        }
        return t.toString("base64", e, t.length - r);
      }
    }
    function d(t) {
      var e = t && t.length ? this.write(t) : "";
      if (this.lastNeed) {
        return e + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
      } else {
        return e;
      }
    }
    function u(t) {
      return t.toString(this.encoding);
    }
    function l(t) {
      if (t && t.length) {
        return this.write(t);
      } else {
        return "";
      }
    }
    e.s = f;
    f.prototype.write = function (t) {
      var e;
      var r;
      if (t.length === 0) {
        return "";
      }
      if (this.lastNeed) {
        if ((e = this.fillLast(t)) === undefined) {
          return "";
        }
        r = this.lastNeed;
        this.lastNeed = 0;
      } else {
        r = 0;
      }
      if (r < t.length) {
        if (e) {
          return e + this.text(t, r);
        } else {
          return this.text(t, r);
        }
      } else {
        return e || "";
      }
    };
    f.prototype.end = function (t) {
      var e = t && t.length ? this.write(t) : "";
      if (this.lastNeed) {
        return e + "�";
      } else {
        return e;
      }
    };
    f.prototype.text = function (t, e) {
      var r = function (t, e, r) {
        var i = e.length - 1;
        if (i < r) {
          return 0;
        }
        var n = a(e[i]);
        if (n >= 0) {
          if (n > 0) {
            t.lastNeed = n - 1;
          }
          return n;
        } else if (--i < r || n === -2) {
          return 0;
        } else if ((n = a(e[i])) >= 0) {
          if (n > 0) {
            t.lastNeed = n - 2;
          }
          return n;
        } else if (--i < r || n === -2) {
          return 0;
        } else if ((n = a(e[i])) >= 0) {
          if (n > 0) {
            if (n === 2) {
              n = 0;
            } else {
              t.lastNeed = n - 3;
            }
          }
          return n;
        } else {
          return 0;
        }
      }(this, t, e);
      if (!this.lastNeed) {
        return t.toString("utf8", e);
      }
      this.lastTotal = r;
      var i = t.length - (r - this.lastNeed);
      t.copy(this.lastChar, 0, i);
      return t.toString("utf8", e, i);
    };
    f.prototype.fillLast = function (t) {
      if (this.lastNeed <= t.length) {
        t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length);
      this.lastNeed -= t.length;
    };
  },
  6769: function (t) {
    t.exports = function (t, r) {
      if (e("noDeprecation")) {
        return t;
      }
      var i = false;
      return function () {
        if (!i) {
          if (e("throwDeprecation")) {
            throw Error(r);
          }
          if (e("traceDeprecation")) {
            console.trace(r);
          } else {
            console.warn(r);
          }
          i = true;
        }
        return t.apply(this, arguments);
      };
    };
    function e(t) {
      try {
        if (!require.g.localStorage) {
          return false;
        }
      } catch (t) {
        return false;
      }
      var e = require.g.localStorage[t];
      return e != null && String(e).toLowerCase() === "true";
    }
  },
  4300: function (t) {
    "use strict";

    t.exports = require(/*webcrack:missing*/"./45334.js");
  },
  6113: function (t) {
    "use strict";

    t.exports = require("./57311.js");
  },
  2361: function (t) {
    "use strict";

    t.exports = require(/*webcrack:missing*/"./66802.js");
  },
  2781: function (t) {
    "use strict";

    t.exports = require(/*webcrack:missing*/"./76976.js");
  },
  1576: function (t) {
    "use strict";

    t.exports = require(/*webcrack:missing*/"./36879.js");
  },
  3837: function (t) {
    "use strict";

    t.exports = require(/*webcrack:missing*/"./83515.js");
  },
  6144: function (t) {
    "use strict";

    t.exports = require(/*webcrack:missing*/"./82515.js");
  },
  5866: function (t) {
    "use strict";

    t.exports = {
      "aes-128-ecb": {
        cipher: "AES",
        key: 128,
        iv: 0,
        mode: "ECB",
        type: "block"
      },
      "aes-192-ecb": {
        cipher: "AES",
        key: 192,
        iv: 0,
        mode: "ECB",
        type: "block"
      },
      "aes-256-ecb": {
        cipher: "AES",
        key: 256,
        iv: 0,
        mode: "ECB",
        type: "block"
      },
      "aes-128-cbc": {
        cipher: "AES",
        key: 128,
        iv: 16,
        mode: "CBC",
        type: "block"
      },
      "aes-192-cbc": {
        cipher: "AES",
        key: 192,
        iv: 16,
        mode: "CBC",
        type: "block"
      },
      "aes-256-cbc": {
        cipher: "AES",
        key: 256,
        iv: 16,
        mode: "CBC",
        type: "block"
      },
      aes128: {
        cipher: "AES",
        key: 128,
        iv: 16,
        mode: "CBC",
        type: "block"
      },
      aes192: {
        cipher: "AES",
        key: 192,
        iv: 16,
        mode: "CBC",
        type: "block"
      },
      aes256: {
        cipher: "AES",
        key: 256,
        iv: 16,
        mode: "CBC",
        type: "block"
      },
      "aes-128-cfb": {
        cipher: "AES",
        key: 128,
        iv: 16,
        mode: "CFB",
        type: "stream"
      },
      "aes-192-cfb": {
        cipher: "AES",
        key: 192,
        iv: 16,
        mode: "CFB",
        type: "stream"
      },
      "aes-256-cfb": {
        cipher: "AES",
        key: 256,
        iv: 16,
        mode: "CFB",
        type: "stream"
      },
      "aes-128-cfb8": {
        cipher: "AES",
        key: 128,
        iv: 16,
        mode: "CFB8",
        type: "stream"
      },
      "aes-192-cfb8": {
        cipher: "AES",
        key: 192,
        iv: 16,
        mode: "CFB8",
        type: "stream"
      },
      "aes-256-cfb8": {
        cipher: "AES",
        key: 256,
        iv: 16,
        mode: "CFB8",
        type: "stream"
      },
      "aes-128-cfb1": {
        cipher: "AES",
        key: 128,
        iv: 16,
        mode: "CFB1",
        type: "stream"
      },
      "aes-192-cfb1": {
        cipher: "AES",
        key: 192,
        iv: 16,
        mode: "CFB1",
        type: "stream"
      },
      "aes-256-cfb1": {
        cipher: "AES",
        key: 256,
        iv: 16,
        mode: "CFB1",
        type: "stream"
      },
      "aes-128-ofb": {
        cipher: "AES",
        key: 128,
        iv: 16,
        mode: "OFB",
        type: "stream"
      },
      "aes-192-ofb": {
        cipher: "AES",
        key: 192,
        iv: 16,
        mode: "OFB",
        type: "stream"
      },
      "aes-256-ofb": {
        cipher: "AES",
        key: 256,
        iv: 16,
        mode: "OFB",
        type: "stream"
      },
      "aes-128-ctr": {
        cipher: "AES",
        key: 128,
        iv: 16,
        mode: "CTR",
        type: "stream"
      },
      "aes-192-ctr": {
        cipher: "AES",
        key: 192,
        iv: 16,
        mode: "CTR",
        type: "stream"
      },
      "aes-256-ctr": {
        cipher: "AES",
        key: 256,
        iv: 16,
        mode: "CTR",
        type: "stream"
      },
      "aes-128-gcm": {
        cipher: "AES",
        key: 128,
        iv: 12,
        mode: "GCM",
        type: "auth"
      },
      "aes-192-gcm": {
        cipher: "AES",
        key: 192,
        iv: 12,
        mode: "GCM",
        type: "auth"
      },
      "aes-256-gcm": {
        cipher: "AES",
        key: 256,
        iv: 12,
        mode: "GCM",
        type: "auth"
      }
    };
  },
  2908: function (t) {
    "use strict";

    t.exports = {
      sha224WithRSAEncryption: {
        sign: "rsa",
        hash: "sha224",
        id: "302d300d06096086480165030402040500041c"
      },
      "RSA-SHA224": {
        sign: "ecdsa/rsa",
        hash: "sha224",
        id: "302d300d06096086480165030402040500041c"
      },
      sha256WithRSAEncryption: {
        sign: "rsa",
        hash: "sha256",
        id: "3031300d060960864801650304020105000420"
      },
      "RSA-SHA256": {
        sign: "ecdsa/rsa",
        hash: "sha256",
        id: "3031300d060960864801650304020105000420"
      },
      sha384WithRSAEncryption: {
        sign: "rsa",
        hash: "sha384",
        id: "3041300d060960864801650304020205000430"
      },
      "RSA-SHA384": {
        sign: "ecdsa/rsa",
        hash: "sha384",
        id: "3041300d060960864801650304020205000430"
      },
      sha512WithRSAEncryption: {
        sign: "rsa",
        hash: "sha512",
        id: "3051300d060960864801650304020305000440"
      },
      "RSA-SHA512": {
        sign: "ecdsa/rsa",
        hash: "sha512",
        id: "3051300d060960864801650304020305000440"
      },
      "RSA-SHA1": {
        sign: "rsa",
        hash: "sha1",
        id: "3021300906052b0e03021a05000414"
      },
      "ecdsa-with-SHA1": {
        sign: "ecdsa",
        hash: "sha1",
        id: ""
      },
      sha256: {
        sign: "ecdsa",
        hash: "sha256",
        id: ""
      },
      sha224: {
        sign: "ecdsa",
        hash: "sha224",
        id: ""
      },
      sha384: {
        sign: "ecdsa",
        hash: "sha384",
        id: ""
      },
      sha512: {
        sign: "ecdsa",
        hash: "sha512",
        id: ""
      },
      "DSA-SHA": {
        sign: "dsa",
        hash: "sha1",
        id: ""
      },
      "DSA-SHA1": {
        sign: "dsa",
        hash: "sha1",
        id: ""
      },
      DSA: {
        sign: "dsa",
        hash: "sha1",
        id: ""
      },
      "DSA-WITH-SHA224": {
        sign: "dsa",
        hash: "sha224",
        id: ""
      },
      "DSA-SHA224": {
        sign: "dsa",
        hash: "sha224",
        id: ""
      },
      "DSA-WITH-SHA256": {
        sign: "dsa",
        hash: "sha256",
        id: ""
      },
      "DSA-SHA256": {
        sign: "dsa",
        hash: "sha256",
        id: ""
      },
      "DSA-WITH-SHA384": {
        sign: "dsa",
        hash: "sha384",
        id: ""
      },
      "DSA-SHA384": {
        sign: "dsa",
        hash: "sha384",
        id: ""
      },
      "DSA-WITH-SHA512": {
        sign: "dsa",
        hash: "sha512",
        id: ""
      },
      "DSA-SHA512": {
        sign: "dsa",
        hash: "sha512",
        id: ""
      },
      "DSA-RIPEMD160": {
        sign: "dsa",
        hash: "rmd160",
        id: ""
      },
      ripemd160WithRSA: {
        sign: "rsa",
        hash: "rmd160",
        id: "3021300906052b2403020105000414"
      },
      "RSA-RIPEMD160": {
        sign: "rsa",
        hash: "rmd160",
        id: "3021300906052b2403020105000414"
      },
      md5WithRSAEncryption: {
        sign: "rsa",
        hash: "md5",
        id: "3020300c06082a864886f70d020505000410"
      },
      "RSA-MD5": {
        sign: "rsa",
        hash: "md5",
        id: "3020300c06082a864886f70d020505000410"
      }
    };
  },
  9267: function (t) {
    "use strict";

    t.exports = {
      "1.3.132.0.10": "secp256k1",
      "1.3.132.0.33": "p224",
      "1.2.840.10045.3.1.1": "p192",
      "1.2.840.10045.3.1.7": "p256",
      "1.3.132.0.34": "p384",
      "1.3.132.0.35": "p521"
    };
  },
  7992: function (t) {
    "use strict";

    t.exports = {
      modp1: {
        gen: "02",
        prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"
      },
      modp2: {
        gen: "02",
        prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"
      },
      modp5: {
        gen: "02",
        prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"
      },
      modp14: {
        gen: "02",
        prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"
      },
      modp15: {
        gen: "02",
        prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"
      },
      modp16: {
        gen: "02",
        prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"
      },
      modp17: {
        gen: "02",
        prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"
      },
      modp18: {
        gen: "02",
        prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"
      }
    };
  },
  2531: function (t) {
    "use strict";

    t.exports = {
      i8: "6.5.3"
    };
  },
  2510: function (t) {
    "use strict";

    t.exports = {
      "2.16.840.1.101.3.4.1.1": "aes-128-ecb",
      "2.16.840.1.101.3.4.1.2": "aes-128-cbc",
      "2.16.840.1.101.3.4.1.3": "aes-128-ofb",
      "2.16.840.1.101.3.4.1.4": "aes-128-cfb",
      "2.16.840.1.101.3.4.1.21": "aes-192-ecb",
      "2.16.840.1.101.3.4.1.22": "aes-192-cbc",
      "2.16.840.1.101.3.4.1.23": "aes-192-ofb",
      "2.16.840.1.101.3.4.1.24": "aes-192-cfb",
      "2.16.840.1.101.3.4.1.41": "aes-256-ecb",
      "2.16.840.1.101.3.4.1.42": "aes-256-cbc",
      "2.16.840.1.101.3.4.1.43": "aes-256-ofb",
      "2.16.840.1.101.3.4.1.44": "aes-256-cfb"
    };
  }
};
var a = {};
function o(t) {
  var e = a[t];
  if (e !== undefined) {
    return e.exports;
  }
  var r = a[t] = {
    id: t,
    loaded: false,
    exports: {}
  };
  var i = true;
  try {
    f[t].call(r.exports, r, r.exports, o);
    i = false;
  } finally {
    if (i) {
      delete a[t];
    }
  }
  r.loaded = true;
  return r.exports;
}
o.nmd = function (t) {
  t.paths = [];
  t.children ||= [];
  return t;
};
o.ab = "//";
var s = {};
(function () {
  "use strict";

  s.randomBytes = s.rng = s.pseudoRandomBytes = s.prng = o(7223);
  s.createHash = s.Hash = o(9739);
  s.createHmac = s.Hmac = o(4873);
  var t = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(Object.keys(o(9276)));
  s.getHashes = function () {
    return t;
  };
  var e = o(4978);
  s.pbkdf2 = e.pbkdf2;
  s.pbkdf2Sync = e.pbkdf2Sync;
  var r = o(8996);
  s.Cipher = r.Cipher;
  s.createCipher = r.createCipher;
  s.Cipheriv = r.Cipheriv;
  s.createCipheriv = r.createCipheriv;
  s.Decipher = r.Decipher;
  s.createDecipher = r.createDecipher;
  s.Decipheriv = r.Decipheriv;
  s.createDecipheriv = r.createDecipheriv;
  s.getCiphers = r.getCiphers;
  s.listCiphers = r.listCiphers;
  var i = o(6587);
  s.DiffieHellmanGroup = i.DiffieHellmanGroup;
  s.createDiffieHellmanGroup = i.createDiffieHellmanGroup;
  s.getDiffieHellman = i.getDiffieHellman;
  s.createDiffieHellman = i.createDiffieHellman;
  s.DiffieHellman = i.DiffieHellman;
  var n = o(4078);
  s.createSign = n.createSign;
  s.Sign = n.Sign;
  s.createVerify = n.createVerify;
  s.Verify = n.Verify;
  s.createECDH = o(9942);
  var f = o(9783);
  s.publicEncrypt = f.publicEncrypt;
  s.privateEncrypt = f.privateEncrypt;
  s.publicDecrypt = f.publicDecrypt;
  s.privateDecrypt = f.privateDecrypt;
  var a = o(6445);
  s.randomFill = a.randomFill;
  s.randomFillSync = a.randomFillSync;
  s.createCredentials = function () {
    throw Error("sorry, createCredentials is not implemented yet\nwe accept pull requests\nhttps://github.com/crypto-browserify/crypto-browserify");
  };
  s.constants = {
    DH_CHECK_P_NOT_SAFE_PRIME: 2,
    DH_CHECK_P_NOT_PRIME: 1,
    DH_UNABLE_TO_CHECK_GENERATOR: 4,
    DH_NOT_SUITABLE_GENERATOR: 8,
    NPN_ENABLED: 1,
    ALPN_ENABLED: 1,
    RSA_PKCS1_PADDING: 1,
    RSA_SSLV23_PADDING: 2,
    RSA_NO_PADDING: 3,
    RSA_PKCS1_OAEP_PADDING: 4,
    RSA_X931_PADDING: 5,
    RSA_PKCS1_PSS_PADDING: 6,
    POINT_CONVERSION_COMPRESSED: 2,
    POINT_CONVERSION_UNCOMPRESSED: 4,
    POINT_CONVERSION_HYBRID: 6
  };
})();
module.exports = s;