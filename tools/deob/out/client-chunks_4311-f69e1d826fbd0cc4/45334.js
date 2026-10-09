let n = require("./82606.js");
let i = require("./49439.js");
let a = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
exports.Buffer = l;
exports.SlowBuffer = x;
exports.INSPECT_MAX_BYTES = 50;
let o = 2147483647;
function s() {
  try {
    let e = new Uint8Array(1);
    let t = {
      foo: function () {
        return 42;
      }
    };
    Object.setPrototypeOf(t, Uint8Array.prototype);
    Object.setPrototypeOf(e, t);
    return e.foo() === 42;
  } catch (e) {
    return false;
  }
}
function u(e) {
  if (e > o) {
    throw RangeError("The value \"" + e + "\" is invalid for option \"size\"");
  }
  let t = new Uint8Array(e);
  Object.setPrototypeOf(t, l.prototype);
  return t;
}
function l(e, t, r) {
  if (typeof e == "number") {
    if (typeof t == "string") {
      throw TypeError("The \"string\" argument must be of type string. Received type number");
    }
    return h(e);
  }
  return c(e, t, r);
}
function c(e, t, r) {
  if (typeof e == "string") {
    return p(e, t);
  }
  if (ArrayBuffer.isView(e)) {
    return y(e);
  }
  if (e == null) {
    throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
  }
  if (eo(e, ArrayBuffer) || e && eo(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer != "undefined" && (eo(e, SharedArrayBuffer) || e && eo(e.buffer, SharedArrayBuffer))) {
    return g(e, t, r);
  }
  if (typeof e == "number") {
    throw TypeError("The \"value\" argument must not be of type number. Received type number");
  }
  let n = e.valueOf && e.valueOf();
  if (n != null && n !== e) {
    return l.from(n, t, r);
  }
  let i = b(e);
  if (i) {
    return i;
  }
  if (typeof Symbol != "undefined" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function") {
    return l.from(e[Symbol.toPrimitive]("string"), t, r);
  }
  throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
}
function d(e) {
  if (typeof e != "number") {
    throw TypeError("\"size\" argument must be of type number");
  }
  if (e < 0) {
    throw RangeError("The value \"" + e + "\" is invalid for option \"size\"");
  }
}
function f(e, t, r) {
  d(e);
  if (e <= 0) {
    return u(e);
  } else if (t !== undefined) {
    if (typeof r == "string") {
      return u(e).fill(t, r);
    } else {
      return u(e).fill(t);
    }
  } else {
    return u(e);
  }
}
function h(e) {
  d(e);
  return u(e < 0 ? 0 : v(e) | 0);
}
function p(e, t) {
  if (typeof t != "string" || t === "") {
    t = "utf8";
  }
  if (!l.isEncoding(t)) {
    throw TypeError("Unknown encoding: " + t);
  }
  let r = w(e, t) | 0;
  let n = u(r);
  let i = n.write(e, t);
  if (i !== r) {
    n = n.slice(0, i);
  }
  return n;
}
function m(e) {
  let t = e.length < 0 ? 0 : v(e.length) | 0;
  let r = u(t);
  for (let n = 0; n < t; n += 1) {
    r[n] = e[n] & 255;
  }
  return r;
}
function y(e) {
  if (eo(e, Uint8Array)) {
    let t = new Uint8Array(e);
    return g(t.buffer, t.byteOffset, t.byteLength);
  }
  return m(e);
}
function g(e, t, r) {
  let n;
  if (t < 0 || e.byteLength < t) {
    throw RangeError("\"offset\" is outside of buffer bounds");
  }
  if (e.byteLength < t + (r || 0)) {
    throw RangeError("\"length\" is outside of buffer bounds");
  }
  Object.setPrototypeOf(n = t === undefined && r === undefined ? new Uint8Array(e) : r === undefined ? new Uint8Array(e, t) : new Uint8Array(e, t, r), l.prototype);
  return n;
}
function b(e) {
  if (l.isBuffer(e)) {
    let t = v(e.length) | 0;
    let r = u(t);
    if (r.length !== 0) {
      e.copy(r, 0, 0, t);
    }
    return r;
  }
  if (e.length !== undefined) {
    if (typeof e.length != "number" || es(e.length)) {
      return u(0);
    } else {
      return m(e);
    }
  } else if (e.type === "Buffer" && Array.isArray(e.data)) {
    return m(e.data);
  } else {
    return undefined;
  }
}
function v(e) {
  if (e >= o) {
    throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
  }
  return e | 0;
}
function x(e) {
  if (+e != e) {
    e = 0;
  }
  return l.alloc(+e);
}
function w(e, t) {
  if (l.isBuffer(e)) {
    return e.length;
  }
  if (ArrayBuffer.isView(e) || eo(e, ArrayBuffer)) {
    return e.byteLength;
  }
  if (typeof e != "string") {
    throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
  }
  let r = e.length;
  let n = arguments.length > 2 && arguments[2] === true;
  if (!n && r === 0) {
    return 0;
  }
  let i = false;
  while (true) {
    switch (t) {
      case "ascii":
      case "latin1":
      case "binary":
        return r;
      case "utf8":
      case "utf-8":
        return et(e).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return r * 2;
      case "hex":
        return r >>> 1;
      case "base64":
        return ei(e).length;
      default:
        if (i) {
          if (n) {
            return -1;
          } else {
            return et(e).length;
          }
        }
        t = ("" + t).toLowerCase();
        i = true;
    }
  }
}
function _(e, t, r) {
  let n = false;
  if (t === undefined || t < 0) {
    t = 0;
  }
  if (t > this.length || ((r === undefined || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (t >>>= 0))) {
    return "";
  }
  for (e ||= "utf8";;) {
    switch (e) {
      case "hex":
        return R(this, t, r);
      case "utf8":
      case "utf-8":
        return A(this, t, r);
      case "ascii":
        return N(this, t, r);
      case "latin1":
      case "binary":
        return P(this, t, r);
      case "base64":
        return T(this, t, r);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return C(this, t, r);
      default:
        if (n) {
          throw TypeError("Unknown encoding: " + e);
        }
        e = (e + "").toLowerCase();
        n = true;
    }
  }
}
function k(e, t, r) {
  let n = e[t];
  e[t] = e[r];
  e[r] = n;
}
function $(e, t, r, n, i) {
  if (e.length === 0) {
    return -1;
  }
  if (typeof r == "string") {
    n = r;
    r = 0;
  } else if (r > 2147483647) {
    r = 2147483647;
  } else if (r < -2147483648) {
    r = -2147483648;
  }
  if (es(r *= 1)) {
    r = i ? 0 : e.length - 1;
  }
  if (r < 0) {
    r = e.length + r;
  }
  if (r >= e.length) {
    if (i) {
      return -1;
    } else {
      r = e.length - 1;
    }
  } else if (r < 0) {
    if (!i) {
      return -1;
    } else {
      r = 0;
    }
  }
  if (typeof t == "string") {
    t = l.from(t, n);
  }
  if (l.isBuffer(t)) {
    if (t.length === 0) {
      return -1;
    } else {
      return S(e, t, r, n, i);
    }
  }
  if (typeof t == "number") {
    t &= 255;
    if (typeof Uint8Array.prototype.indexOf == "function") {
      if (i) {
        return Uint8Array.prototype.indexOf.call(e, t, r);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(e, t, r);
      }
    }
    return S(e, [t], r, n, i);
  }
  throw TypeError("val must be string, number or Buffer");
}
function S(e, t, r, n, i) {
  let a;
  let o = 1;
  let s = e.length;
  let u = t.length;
  if (n !== undefined && ((n = String(n).toLowerCase()) === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
    if (e.length < 2 || t.length < 2) {
      return -1;
    }
    o = 2;
    s /= 2;
    u /= 2;
    r /= 2;
  }
  function l(e, t) {
    if (o === 1) {
      return e[t];
    } else {
      return e.readUInt16BE(t * o);
    }
  }
  if (i) {
    let n = -1;
    for (a = r; a < s; a++) {
      if (l(e, a) === l(t, n === -1 ? 0 : a - n)) {
        if (n === -1) {
          n = a;
        }
        if (a - n + 1 === u) {
          return n * o;
        }
      } else {
        if (n !== -1) {
          a -= a - n;
        }
        n = -1;
      }
    }
  } else {
    if (r + u > s) {
      r = s - u;
    }
    a = r;
    for (; a >= 0; a--) {
      let r = true;
      for (let n = 0; n < u; n++) {
        if (l(e, a + n) !== l(t, n)) {
          r = false;
          break;
        }
      }
      if (r) {
        return a;
      }
    }
  }
  return -1;
}
function I(e, t, r, n) {
  let i;
  r = Number(r) || 0;
  let a = e.length - r;
  if (n) {
    if ((n = Number(n)) > a) {
      n = a;
    }
  } else {
    n = a;
  }
  let o = t.length;
  if (n > o / 2) {
    n = o / 2;
  }
  i = 0;
  for (; i < n; ++i) {
    let n = parseInt(t.substr(i * 2, 2), 16);
    if (es(n)) {
      break;
    }
    e[r + i] = n;
  }
  return i;
}
function O(e, t, r, n) {
  return ea(et(t, e.length - r), e, r, n);
}
function E(e, t, r, n) {
  return ea(er(t), e, r, n);
}
function j(e, t, r, n) {
  return ea(ei(t), e, r, n);
}
function U(e, t, r, n) {
  return ea(en(t, e.length - r), e, r, n);
}
function T(e, t, r) {
  if (t === 0 && r === e.length) {
    return n.fromByteArray(e);
  } else {
    return n.fromByteArray(e.slice(t, r));
  }
}
function A(e, t, r) {
  r = Math.min(e.length, r);
  let n = [];
  let i = t;
  while (i < r) {
    let t = e[i];
    let a = null;
    let o = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
    if (i + o <= r) {
      let r;
      let n;
      let s;
      let u;
      switch (o) {
        case 1:
          if (t < 128) {
            a = t;
          }
          break;
        case 2:
          if (((r = e[i + 1]) & 192) == 128 && (u = (t & 31) << 6 | r & 63) > 127) {
            a = u;
          }
          break;
        case 3:
          r = e[i + 1];
          n = e[i + 2];
          if ((r & 192) == 128 && (n & 192) == 128 && (u = (t & 15) << 12 | (r & 63) << 6 | n & 63) > 2047 && (u < 55296 || u > 57343)) {
            a = u;
          }
          break;
        case 4:
          r = e[i + 1];
          n = e[i + 2];
          s = e[i + 3];
          if ((r & 192) == 128 && (n & 192) == 128 && (s & 192) == 128 && (u = (t & 15) << 18 | (r & 63) << 12 | (n & 63) << 6 | s & 63) > 65535 && u < 1114112) {
            a = u;
          }
      }
    }
    if (a === null) {
      a = 65533;
      o = 1;
    } else if (a > 65535) {
      a -= 65536;
      n.push(a >>> 10 & 1023 | 55296);
      a = a & 1023 | 56320;
    }
    n.push(a);
    i += o;
  }
  return z(n);
}
exports.kMaxLength = 2147483647;
l.TYPED_ARRAY_SUPPORT = s();
if (!l.TYPED_ARRAY_SUPPORT && typeof console != "undefined" && typeof console.error == "function") {
  console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
}
Object.defineProperty(l.prototype, "parent", {
  enumerable: true,
  get: function () {
    if (l.isBuffer(this)) {
      return this.buffer;
    }
  }
});
Object.defineProperty(l.prototype, "offset", {
  enumerable: true,
  get: function () {
    if (l.isBuffer(this)) {
      return this.byteOffset;
    }
  }
});
l.poolSize = 8192;
l.from = function (e, t, r) {
  return c(e, t, r);
};
Object.setPrototypeOf(l.prototype, Uint8Array.prototype);
Object.setPrototypeOf(l, Uint8Array);
l.alloc = function (e, t, r) {
  return f(e, t, r);
};
l.allocUnsafe = function (e) {
  return h(e);
};
l.allocUnsafeSlow = function (e) {
  return h(e);
};
l.isBuffer = function (e) {
  return e != null && e._isBuffer === true && e !== l.prototype;
};
l.compare = function (e, t) {
  if (eo(e, Uint8Array)) {
    e = l.from(e, e.offset, e.byteLength);
  }
  if (eo(t, Uint8Array)) {
    t = l.from(t, t.offset, t.byteLength);
  }
  if (!l.isBuffer(e) || !l.isBuffer(t)) {
    throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
  }
  if (e === t) {
    return 0;
  }
  let r = e.length;
  let n = t.length;
  for (let i = 0, a = Math.min(r, n); i < a; ++i) {
    if (e[i] !== t[i]) {
      r = e[i];
      n = t[i];
      break;
    }
  }
  if (r < n) {
    return -1;
  } else {
    return +(n < r);
  }
};
l.isEncoding = function (e) {
  switch (String(e).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return true;
    default:
      return false;
  }
};
l.concat = function (e, t) {
  let r;
  if (!Array.isArray(e)) {
    throw TypeError("\"list\" argument must be an Array of Buffers");
  }
  if (e.length === 0) {
    return l.alloc(0);
  }
  if (t === undefined) {
    r = 0;
    t = 0;
    for (; r < e.length; ++r) {
      t += e[r].length;
    }
  }
  let n = l.allocUnsafe(t);
  let i = 0;
  for (r = 0; r < e.length; ++r) {
    let t = e[r];
    if (eo(t, Uint8Array)) {
      if (i + t.length > n.length) {
        if (!l.isBuffer(t)) {
          t = l.from(t);
        }
        t.copy(n, i);
      } else {
        Uint8Array.prototype.set.call(n, t, i);
      }
    } else if (l.isBuffer(t)) {
      t.copy(n, i);
    } else {
      throw TypeError("\"list\" argument must be an Array of Buffers");
    }
    i += t.length;
  }
  return n;
};
l.byteLength = w;
l.prototype._isBuffer = true;
l.prototype.swap16 = function () {
  let e = this.length;
  if (e % 2 != 0) {
    throw RangeError("Buffer size must be a multiple of 16-bits");
  }
  for (let t = 0; t < e; t += 2) {
    k(this, t, t + 1);
  }
  return this;
};
l.prototype.swap32 = function () {
  let e = this.length;
  if (e % 4 != 0) {
    throw RangeError("Buffer size must be a multiple of 32-bits");
  }
  for (let t = 0; t < e; t += 4) {
    k(this, t, t + 3);
    k(this, t + 1, t + 2);
  }
  return this;
};
l.prototype.swap64 = function () {
  let e = this.length;
  if (e % 8 != 0) {
    throw RangeError("Buffer size must be a multiple of 64-bits");
  }
  for (let t = 0; t < e; t += 8) {
    k(this, t, t + 7);
    k(this, t + 1, t + 6);
    k(this, t + 2, t + 5);
    k(this, t + 3, t + 4);
  }
  return this;
};
l.prototype.toString = function () {
  let e = this.length;
  if (e === 0) {
    return "";
  } else if (arguments.length == 0) {
    return A(this, 0, e);
  } else {
    return _.apply(this, arguments);
  }
};
l.prototype.toLocaleString = l.prototype.toString;
l.prototype.equals = function (e) {
  if (!l.isBuffer(e)) {
    throw TypeError("Argument must be a Buffer");
  }
  return this === e || l.compare(this, e) === 0;
};
l.prototype.inspect = function () {
  let e = "";
  let r = exports.INSPECT_MAX_BYTES;
  e = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim();
  if (this.length > r) {
    e += " ... ";
  }
  return "<Buffer " + e + ">";
};
if (a) {
  l.prototype[a] = l.prototype.inspect;
}
l.prototype.compare = function (e, t, r, n, i) {
  if (eo(e, Uint8Array)) {
    e = l.from(e, e.offset, e.byteLength);
  }
  if (!l.isBuffer(e)) {
    throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
  }
  if (t === undefined) {
    t = 0;
  }
  if (r === undefined) {
    r = e ? e.length : 0;
  }
  if (n === undefined) {
    n = 0;
  }
  if (i === undefined) {
    i = this.length;
  }
  if (t < 0 || r > e.length || n < 0 || i > this.length) {
    throw RangeError("out of range index");
  }
  if (n >= i && t >= r) {
    return 0;
  }
  if (n >= i) {
    return -1;
  }
  if (t >= r) {
    return 1;
  }
  t >>>= 0;
  r >>>= 0;
  n >>>= 0;
  i >>>= 0;
  if (this === e) {
    return 0;
  }
  let a = i - n;
  let o = r - t;
  let s = Math.min(a, o);
  let u = this.slice(n, i);
  let c = e.slice(t, r);
  for (let e = 0; e < s; ++e) {
    if (u[e] !== c[e]) {
      a = u[e];
      o = c[e];
      break;
    }
  }
  if (a < o) {
    return -1;
  } else {
    return +(o < a);
  }
};
l.prototype.includes = function (e, t, r) {
  return this.indexOf(e, t, r) !== -1;
};
l.prototype.indexOf = function (e, t, r) {
  return $(this, e, t, r, true);
};
l.prototype.lastIndexOf = function (e, t, r) {
  return $(this, e, t, r, false);
};
l.prototype.write = function (e, t, r, n) {
  if (t === undefined) {
    n = "utf8";
    r = this.length;
    t = 0;
  } else if (r === undefined && typeof t == "string") {
    n = t;
    r = this.length;
    t = 0;
  } else if (isFinite(t)) {
    t >>>= 0;
    if (isFinite(r)) {
      r >>>= 0;
      if (n === undefined) {
        n = "utf8";
      }
    } else {
      n = r;
      r = undefined;
    }
  } else {
    throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
  }
  let i = this.length - t;
  if (r === undefined || r > i) {
    r = i;
  }
  if (e.length > 0 && (r < 0 || t < 0) || t > this.length) {
    throw RangeError("Attempt to write outside buffer bounds");
  }
  n ||= "utf8";
  let a = false;
  while (true) {
    switch (n) {
      case "hex":
        return I(this, e, t, r);
      case "utf8":
      case "utf-8":
        return O(this, e, t, r);
      case "ascii":
      case "latin1":
      case "binary":
        return E(this, e, t, r);
      case "base64":
        return j(this, e, t, r);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return U(this, e, t, r);
      default:
        if (a) {
          throw TypeError("Unknown encoding: " + n);
        }
        n = ("" + n).toLowerCase();
        a = true;
    }
  }
};
l.prototype.toJSON = function () {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
let D = 4096;
function z(e) {
  let t = e.length;
  if (t <= D) {
    return String.fromCharCode.apply(String, e);
  }
  let r = "";
  let n = 0;
  while (n < t) {
    r += String.fromCharCode.apply(String, e.slice(n, n += D));
  }
  return r;
}
function N(e, t, r) {
  let n = "";
  r = Math.min(e.length, r);
  for (let i = t; i < r; ++i) {
    n += String.fromCharCode(e[i] & 127);
  }
  return n;
}
function P(e, t, r) {
  let n = "";
  r = Math.min(e.length, r);
  for (let i = t; i < r; ++i) {
    n += String.fromCharCode(e[i]);
  }
  return n;
}
function R(e, t, r) {
  let n = e.length;
  if (!t || t < 0) {
    t = 0;
  }
  if (!r || r < 0 || r > n) {
    r = n;
  }
  let i = "";
  for (let n = t; n < r; ++n) {
    i += eu[e[n]];
  }
  return i;
}
function C(e, t, r) {
  let n = e.slice(t, r);
  let i = "";
  for (let e = 0; e < n.length - 1; e += 2) {
    i += String.fromCharCode(n[e] + n[e + 1] * 256);
  }
  return i;
}
function M(e, t, r) {
  if (e % 1 != 0 || e < 0) {
    throw RangeError("offset is not uint");
  }
  if (e + t > r) {
    throw RangeError("Trying to access beyond buffer length");
  }
}
function L(e, t, r, n, i, a) {
  if (!l.isBuffer(e)) {
    throw TypeError("\"buffer\" argument must be a Buffer instance");
  }
  if (t > i || t < a) {
    throw RangeError("\"value\" argument is out of bounds");
  }
  if (r + n > e.length) {
    throw RangeError("Index out of range");
  }
}
function Z(e, t, r, n, i) {
  X(t, n, i, e, r, 7);
  let a = Number(t & BigInt(4294967295));
  e[r++] = a;
  a >>= 8;
  e[r++] = a;
  a >>= 8;
  e[r++] = a;
  a >>= 8;
  e[r++] = a;
  let o = Number(t >> BigInt(32) & BigInt(4294967295));
  e[r++] = o;
  o >>= 8;
  e[r++] = o;
  o >>= 8;
  e[r++] = o;
  o >>= 8;
  e[r++] = o;
  return r;
}
function F(e, t, r, n, i) {
  X(t, n, i, e, r, 7);
  let a = Number(t & BigInt(4294967295));
  e[r + 7] = a;
  a >>= 8;
  e[r + 6] = a;
  a >>= 8;
  e[r + 5] = a;
  a >>= 8;
  e[r + 4] = a;
  let o = Number(t >> BigInt(32) & BigInt(4294967295));
  e[r + 3] = o;
  o >>= 8;
  e[r + 2] = o;
  o >>= 8;
  e[r + 1] = o;
  o >>= 8;
  e[r] = o;
  return r + 8;
}
function B(e, t, r, n, i, a) {
  if (r + n > e.length || r < 0) {
    throw RangeError("Index out of range");
  }
}
function q(e, t, r, n, a) {
  t *= 1;
  r >>>= 0;
  if (!a) {
    B(e, t, r, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }
  i.write(e, t, r, n, 23, 4);
  return r + 4;
}
function W(e, t, r, n, a) {
  t *= 1;
  r >>>= 0;
  if (!a) {
    B(e, t, r, 8, 1.7976931348623157e+308, -1.7976931348623157e+308);
  }
  i.write(e, t, r, n, 52, 8);
  return r + 8;
}
l.prototype.slice = function (e, t) {
  let r = this.length;
  e = ~~e;
  t = t === undefined ? r : ~~t;
  if (e < 0) {
    if ((e += r) < 0) {
      e = 0;
    }
  } else if (e > r) {
    e = r;
  }
  if (t < 0) {
    if ((t += r) < 0) {
      t = 0;
    }
  } else if (t > r) {
    t = r;
  }
  if (t < e) {
    t = e;
  }
  let n = this.subarray(e, t);
  Object.setPrototypeOf(n, l.prototype);
  return n;
};
l.prototype.readUintLE = l.prototype.readUIntLE = function (e, t, r) {
  e >>>= 0;
  t >>>= 0;
  if (!r) {
    M(e, t, this.length);
  }
  let n = this[e];
  let i = 1;
  let a = 0;
  while (++a < t && (i *= 256)) {
    n += this[e + a] * i;
  }
  return n;
};
l.prototype.readUintBE = l.prototype.readUIntBE = function (e, t, r) {
  e >>>= 0;
  t >>>= 0;
  if (!r) {
    M(e, t, this.length);
  }
  let n = this[e + --t];
  let i = 1;
  while (t > 0 && (i *= 256)) {
    n += this[e + --t] * i;
  }
  return n;
};
l.prototype.readUint8 = l.prototype.readUInt8 = function (e, t) {
  e >>>= 0;
  if (!t) {
    M(e, 1, this.length);
  }
  return this[e];
};
l.prototype.readUint16LE = l.prototype.readUInt16LE = function (e, t) {
  e >>>= 0;
  if (!t) {
    M(e, 2, this.length);
  }
  return this[e] | this[e + 1] << 8;
};
l.prototype.readUint16BE = l.prototype.readUInt16BE = function (e, t) {
  e >>>= 0;
  if (!t) {
    M(e, 2, this.length);
  }
  return this[e] << 8 | this[e + 1];
};
l.prototype.readUint32LE = l.prototype.readUInt32LE = function (e, t) {
  e >>>= 0;
  if (!t) {
    M(e, 4, this.length);
  }
  return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
};
l.prototype.readUint32BE = l.prototype.readUInt32BE = function (e, t) {
  e >>>= 0;
  if (!t) {
    M(e, 4, this.length);
  }
  return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
};
l.prototype.readBigUInt64LE = el(function (e) {
  Q(e >>>= 0, "offset");
  let t = this[e];
  let r = this[e + 7];
  if (t === undefined || r === undefined) {
    K(e, this.length - 8);
  }
  let n = t + this[++e] * 256 + this[++e] * 65536 + this[++e] * 16777216;
  let i = this[++e] + this[++e] * 256 + this[++e] * 65536 + r * 16777216;
  return BigInt(n) + (BigInt(i) << BigInt(32));
});
l.prototype.readBigUInt64BE = el(function (e) {
  Q(e >>>= 0, "offset");
  let t = this[e];
  let r = this[e + 7];
  if (t === undefined || r === undefined) {
    K(e, this.length - 8);
  }
  let n = t * 16777216 + this[++e] * 65536 + this[++e] * 256 + this[++e];
  let i = this[++e] * 16777216 + this[++e] * 65536 + this[++e] * 256 + r;
  return (BigInt(n) << BigInt(32)) + BigInt(i);
});
l.prototype.readIntLE = function (e, t, r) {
  e >>>= 0;
  t >>>= 0;
  if (!r) {
    M(e, t, this.length);
  }
  let n = this[e];
  let i = 1;
  let a = 0;
  while (++a < t && (i *= 256)) {
    n += this[e + a] * i;
  }
  if (n >= (i *= 128)) {
    n -= Math.pow(2, t * 8);
  }
  return n;
};
l.prototype.readIntBE = function (e, t, r) {
  e >>>= 0;
  t >>>= 0;
  if (!r) {
    M(e, t, this.length);
  }
  let n = t;
  let i = 1;
  let a = this[e + --n];
  while (n > 0 && (i *= 256)) {
    a += this[e + --n] * i;
  }
  if (a >= (i *= 128)) {
    a -= Math.pow(2, t * 8);
  }
  return a;
};
l.prototype.readInt8 = function (e, t) {
  e >>>= 0;
  if (!t) {
    M(e, 1, this.length);
  }
  if (this[e] & 128) {
    return -((255 - this[e] + 1) * 1);
  } else {
    return this[e];
  }
};
l.prototype.readInt16LE = function (e, t) {
  e >>>= 0;
  if (!t) {
    M(e, 2, this.length);
  }
  let r = this[e] | this[e + 1] << 8;
  if (r & 32768) {
    return r | -65536;
  } else {
    return r;
  }
};
l.prototype.readInt16BE = function (e, t) {
  e >>>= 0;
  if (!t) {
    M(e, 2, this.length);
  }
  let r = this[e + 1] | this[e] << 8;
  if (r & 32768) {
    return r | -65536;
  } else {
    return r;
  }
};
l.prototype.readInt32LE = function (e, t) {
  e >>>= 0;
  if (!t) {
    M(e, 4, this.length);
  }
  return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
};
l.prototype.readInt32BE = function (e, t) {
  e >>>= 0;
  if (!t) {
    M(e, 4, this.length);
  }
  return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
};
l.prototype.readBigInt64LE = el(function (e) {
  Q(e >>>= 0, "offset");
  let t = this[e];
  let r = this[e + 7];
  if (t === undefined || r === undefined) {
    K(e, this.length - 8);
  }
  return (BigInt(this[e + 4] + this[e + 5] * 256 + this[e + 6] * 65536 + (r << 24)) << BigInt(32)) + BigInt(t + this[++e] * 256 + this[++e] * 65536 + this[++e] * 16777216);
});
l.prototype.readBigInt64BE = el(function (e) {
  Q(e >>>= 0, "offset");
  let t = this[e];
  let r = this[e + 7];
  if (t === undefined || r === undefined) {
    K(e, this.length - 8);
  }
  return (BigInt((t << 24) + this[++e] * 65536 + this[++e] * 256 + this[++e]) << BigInt(32)) + BigInt(this[++e] * 16777216 + this[++e] * 65536 + this[++e] * 256 + r);
});
l.prototype.readFloatLE = function (e, t) {
  e >>>= 0;
  if (!t) {
    M(e, 4, this.length);
  }
  return i.read(this, e, true, 23, 4);
};
l.prototype.readFloatBE = function (e, t) {
  e >>>= 0;
  if (!t) {
    M(e, 4, this.length);
  }
  return i.read(this, e, false, 23, 4);
};
l.prototype.readDoubleLE = function (e, t) {
  e >>>= 0;
  if (!t) {
    M(e, 8, this.length);
  }
  return i.read(this, e, true, 52, 8);
};
l.prototype.readDoubleBE = function (e, t) {
  e >>>= 0;
  if (!t) {
    M(e, 8, this.length);
  }
  return i.read(this, e, false, 52, 8);
};
l.prototype.writeUintLE = l.prototype.writeUIntLE = function (e, t, r, n) {
  e *= 1;
  t >>>= 0;
  r >>>= 0;
  if (!n) {
    let n = Math.pow(2, r * 8) - 1;
    L(this, e, t, r, n, 0);
  }
  let i = 1;
  let a = 0;
  for (this[t] = e & 255; ++a < r && (i *= 256);) {
    this[t + a] = e / i & 255;
  }
  return t + r;
};
l.prototype.writeUintBE = l.prototype.writeUIntBE = function (e, t, r, n) {
  e *= 1;
  t >>>= 0;
  r >>>= 0;
  if (!n) {
    let n = Math.pow(2, r * 8) - 1;
    L(this, e, t, r, n, 0);
  }
  let i = r - 1;
  let a = 1;
  for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) {
    this[t + i] = e / a & 255;
  }
  return t + r;
};
l.prototype.writeUint8 = l.prototype.writeUInt8 = function (e, t, r) {
  e *= 1;
  t >>>= 0;
  if (!r) {
    L(this, e, t, 1, 255, 0);
  }
  this[t] = e & 255;
  return t + 1;
};
l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function (e, t, r) {
  e *= 1;
  t >>>= 0;
  if (!r) {
    L(this, e, t, 2, 65535, 0);
  }
  this[t] = e & 255;
  this[t + 1] = e >>> 8;
  return t + 2;
};
l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function (e, t, r) {
  e *= 1;
  t >>>= 0;
  if (!r) {
    L(this, e, t, 2, 65535, 0);
  }
  this[t] = e >>> 8;
  this[t + 1] = e & 255;
  return t + 2;
};
l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function (e, t, r) {
  e *= 1;
  t >>>= 0;
  if (!r) {
    L(this, e, t, 4, 4294967295, 0);
  }
  this[t + 3] = e >>> 24;
  this[t + 2] = e >>> 16;
  this[t + 1] = e >>> 8;
  this[t] = e & 255;
  return t + 4;
};
l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function (e, t, r) {
  e *= 1;
  t >>>= 0;
  if (!r) {
    L(this, e, t, 4, 4294967295, 0);
  }
  this[t] = e >>> 24;
  this[t + 1] = e >>> 16;
  this[t + 2] = e >>> 8;
  this[t + 3] = e & 255;
  return t + 4;
};
l.prototype.writeBigUInt64LE = el(function (e, t = 0) {
  return Z(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
});
l.prototype.writeBigUInt64BE = el(function (e, t = 0) {
  return F(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
});
l.prototype.writeIntLE = function (e, t, r, n) {
  e *= 1;
  t >>>= 0;
  if (!n) {
    let n = Math.pow(2, r * 8 - 1);
    L(this, e, t, r, n - 1, -n);
  }
  let i = 0;
  let a = 1;
  let o = 0;
  for (this[t] = e & 255; ++i < r && (a *= 256);) {
    if (e < 0 && o === 0 && this[t + i - 1] !== 0) {
      o = 1;
    }
    this[t + i] = (e / a | 0) - o & 255;
  }
  return t + r;
};
l.prototype.writeIntBE = function (e, t, r, n) {
  e *= 1;
  t >>>= 0;
  if (!n) {
    let n = Math.pow(2, r * 8 - 1);
    L(this, e, t, r, n - 1, -n);
  }
  let i = r - 1;
  let a = 1;
  let o = 0;
  for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) {
    if (e < 0 && o === 0 && this[t + i + 1] !== 0) {
      o = 1;
    }
    this[t + i] = (e / a | 0) - o & 255;
  }
  return t + r;
};
l.prototype.writeInt8 = function (e, t, r) {
  e *= 1;
  t >>>= 0;
  if (!r) {
    L(this, e, t, 1, 127, -128);
  }
  if (e < 0) {
    e = 255 + e + 1;
  }
  this[t] = e & 255;
  return t + 1;
};
l.prototype.writeInt16LE = function (e, t, r) {
  e *= 1;
  t >>>= 0;
  if (!r) {
    L(this, e, t, 2, 32767, -32768);
  }
  this[t] = e & 255;
  this[t + 1] = e >>> 8;
  return t + 2;
};
l.prototype.writeInt16BE = function (e, t, r) {
  e *= 1;
  t >>>= 0;
  if (!r) {
    L(this, e, t, 2, 32767, -32768);
  }
  this[t] = e >>> 8;
  this[t + 1] = e & 255;
  return t + 2;
};
l.prototype.writeInt32LE = function (e, t, r) {
  e *= 1;
  t >>>= 0;
  if (!r) {
    L(this, e, t, 4, 2147483647, -2147483648);
  }
  this[t] = e & 255;
  this[t + 1] = e >>> 8;
  this[t + 2] = e >>> 16;
  this[t + 3] = e >>> 24;
  return t + 4;
};
l.prototype.writeInt32BE = function (e, t, r) {
  e *= 1;
  t >>>= 0;
  if (!r) {
    L(this, e, t, 4, 2147483647, -2147483648);
  }
  if (e < 0) {
    e = 4294967295 + e + 1;
  }
  this[t] = e >>> 24;
  this[t + 1] = e >>> 16;
  this[t + 2] = e >>> 8;
  this[t + 3] = e & 255;
  return t + 4;
};
l.prototype.writeBigInt64LE = el(function (e, t = 0) {
  return Z(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
l.prototype.writeBigInt64BE = el(function (e, t = 0) {
  return F(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
l.prototype.writeFloatLE = function (e, t, r) {
  return q(this, e, t, true, r);
};
l.prototype.writeFloatBE = function (e, t, r) {
  return q(this, e, t, false, r);
};
l.prototype.writeDoubleLE = function (e, t, r) {
  return W(this, e, t, true, r);
};
l.prototype.writeDoubleBE = function (e, t, r) {
  return W(this, e, t, false, r);
};
l.prototype.copy = function (e, t, r, n) {
  if (!l.isBuffer(e)) {
    throw TypeError("argument should be a Buffer");
  }
  r ||= 0;
  if (!n && n !== 0) {
    n = this.length;
  }
  if (t >= e.length) {
    t = e.length;
  }
  t ||= 0;
  if (n > 0 && n < r) {
    n = r;
  }
  if (n === r || e.length === 0 || this.length === 0) {
    return 0;
  }
  if (t < 0) {
    throw RangeError("targetStart out of bounds");
  }
  if (r < 0 || r >= this.length) {
    throw RangeError("Index out of range");
  }
  if (n < 0) {
    throw RangeError("sourceEnd out of bounds");
  }
  if (n > this.length) {
    n = this.length;
  }
  if (e.length - t < n - r) {
    n = e.length - t + r;
  }
  let i = n - r;
  if (this === e && typeof Uint8Array.prototype.copyWithin == "function") {
    this.copyWithin(t, r, n);
  } else {
    Uint8Array.prototype.set.call(e, this.subarray(r, n), t);
  }
  return i;
};
l.prototype.fill = function (e, t, r, n) {
  let i;
  if (typeof e == "string") {
    if (typeof t == "string") {
      n = t;
      t = 0;
      r = this.length;
    } else if (typeof r == "string") {
      n = r;
      r = this.length;
    }
    if (n !== undefined && typeof n != "string") {
      throw TypeError("encoding must be a string");
    }
    if (typeof n == "string" && !l.isEncoding(n)) {
      throw TypeError("Unknown encoding: " + n);
    }
    if (e.length === 1) {
      let t = e.charCodeAt(0);
      if (n === "utf8" && t < 128 || n === "latin1") {
        e = t;
      }
    }
  } else if (typeof e == "number") {
    e &= 255;
  } else if (typeof e == "boolean") {
    e = Number(e);
  }
  if (t < 0 || this.length < t || this.length < r) {
    throw RangeError("Out of range index");
  }
  if (r <= t) {
    return this;
  }
  t >>>= 0;
  r = r === undefined ? this.length : r >>> 0;
  e ||= 0;
  if (typeof e == "number") {
    for (i = t; i < r; ++i) {
      this[i] = e;
    }
  } else {
    let a = l.isBuffer(e) ? e : l.from(e, n);
    let o = a.length;
    if (o === 0) {
      throw TypeError("The value \"" + e + "\" is invalid for argument \"value\"");
    }
    for (i = 0; i < r - t; ++i) {
      this[i + t] = a[i % o];
    }
  }
  return this;
};
let Y = {};
function G(e, t, r) {
  Y[e] = class extends r {
    constructor() {
      super();
      Object.defineProperty(this, "message", {
        value: t.apply(this, arguments),
        writable: true,
        configurable: true
      });
      this.name = `${this.name} [${e}]`;
      this.stack;
      delete this.name;
    }
    get code() {
      return e;
    }
    set code(e) {
      Object.defineProperty(this, "code", {
        configurable: true,
        enumerable: true,
        value: e,
        writable: true
      });
    }
    toString() {
      return `${this.name} [${e}]: ${this.message}`;
    }
  };
}
function H(e) {
  let t = "";
  let r = e.length;
  let n = +(e[0] === "-");
  for (; r >= n + 4; r -= 3) {
    t = `_${e.slice(r - 3, r)}${t}`;
  }
  return `${e.slice(0, r)}${t}`;
}
function J(e, t, r) {
  Q(t, "offset");
  if (e[t] === undefined || e[t + r] === undefined) {
    K(t, e.length - (r + 1));
  }
}
function X(e, t, r, n, i, a) {
  if (e > r || e < t) {
    let n;
    let i = typeof t == "bigint" ? "n" : "";
    n = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${i} and < 2${i} ** ${(a + 1) * 8}${i}` : `>= -(2${i} ** ${(a + 1) * 8 - 1}${i}) and < 2 ** ${(a + 1) * 8 - 1}${i}` : `>= ${t}${i} and <= ${r}${i}`;
    throw new Y.ERR_OUT_OF_RANGE("value", n, e);
  }
  J(n, i, a);
}
function Q(e, t) {
  if (typeof e != "number") {
    throw new Y.ERR_INVALID_ARG_TYPE(t, "number", e);
  }
}
function K(e, t, r) {
  if (Math.floor(e) !== e) {
    Q(e, r);
    throw new Y.ERR_OUT_OF_RANGE(r || "offset", "an integer", e);
  }
  if (t < 0) {
    throw new Y.ERR_BUFFER_OUT_OF_BOUNDS();
  }
  throw new Y.ERR_OUT_OF_RANGE(r || "offset", `>= ${+!!r} and <= ${t}`, e);
}
G("ERR_BUFFER_OUT_OF_BOUNDS", function (e) {
  if (e) {
    return `${e} is outside of buffer bounds`;
  } else {
    return "Attempt to access memory outside buffer bounds";
  }
}, RangeError);
G("ERR_INVALID_ARG_TYPE", function (e, t) {
  return `The "${e}" argument must be of type number. Received type ${typeof t}`;
}, TypeError);
G("ERR_OUT_OF_RANGE", function (e, t, r) {
  let n = `The value of "${e}" is out of range.`;
  let i = r;
  if (Number.isInteger(r) && Math.abs(r) > 4294967296) {
    i = H(String(r));
  } else if (typeof r == "bigint") {
    i = String(r);
    if (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) {
      i = H(i);
    }
    i += "n";
  }
  return n += ` It must be ${t}. Received ${i}`;
}, RangeError);
let V = /[^+/0-9A-Za-z-_]/g;
function ee(e) {
  if ((e = (e = e.split("=")[0]).trim().replace(V, "")).length < 2) {
    return "";
  }
  while (e.length % 4 != 0) {
    e += "=";
  }
  return e;
}
function et(e, t) {
  let r;
  t = t || Infinity;
  let n = e.length;
  let i = null;
  let a = [];
  for (let o = 0; o < n; ++o) {
    if ((r = e.charCodeAt(o)) > 55295 && r < 57344) {
      if (!i) {
        if (r > 56319 || o + 1 === n) {
          if ((t -= 3) > -1) {
            a.push(239, 191, 189);
          }
          continue;
        }
        i = r;
        continue;
      }
      if (r < 56320) {
        if ((t -= 3) > -1) {
          a.push(239, 191, 189);
        }
        i = r;
        continue;
      }
      r = (i - 55296 << 10 | r - 56320) + 65536;
    } else if (i && (t -= 3) > -1) {
      a.push(239, 191, 189);
    }
    i = null;
    if (r < 128) {
      if ((t -= 1) < 0) {
        break;
      }
      a.push(r);
    } else if (r < 2048) {
      if ((t -= 2) < 0) {
        break;
      }
      a.push(r >> 6 | 192, r & 63 | 128);
    } else if (r < 65536) {
      if ((t -= 3) < 0) {
        break;
      }
      a.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
    } else if (r < 1114112) {
      if ((t -= 4) < 0) {
        break;
      }
      a.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
    } else {
      throw Error("Invalid code point");
    }
  }
  return a;
}
function er(e) {
  let t = [];
  for (let r = 0; r < e.length; ++r) {
    t.push(e.charCodeAt(r) & 255);
  }
  return t;
}
function en(e, t) {
  let r;
  let n;
  let i = [];
  for (let a = 0; a < e.length && !((t -= 2) < 0); ++a) {
    n = (r = e.charCodeAt(a)) >> 8;
    i.push(r % 256);
    i.push(n);
  }
  return i;
}
function ei(e) {
  return n.toByteArray(ee(e));
}
function ea(e, t, r, n) {
  let i;
  for (i = 0; i < n && !(i + r >= t.length) && !(i >= e.length); ++i) {
    t[i + r] = e[i];
  }
  return i;
}
function eo(e, t) {
  return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
}
function es(e) {
  return e != e;
}
let eu = function () {
  let e = "0123456789abcdef";
  let t = Array(256);
  for (let r = 0; r < 16; ++r) {
    let n = r * 16;
    for (let i = 0; i < 16; ++i) {
      t[n + i] = e[r] + e[i];
    }
  }
  return t;
}();
function el(e) {
  if (typeof BigInt == "undefined") {
    return ec;
  } else {
    return e;
  }
}
function ec() {
  throw Error("BigInt not supported");
}