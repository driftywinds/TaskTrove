var n;
var i = require("./68746.js");
var a = require("./1871.js");
var o = require("./37663.js");
var s = require("./44434.js");
var u = require("./93942.js");
var l = require("./65314.js");
var c = require("./15837.js");
var d = require("./98845.js");
var f = require("./98083.js");
var h = require("./81057.js");
var p = require("./67517.js");
var m = require("./86603.js");
var y = require("./50817.js");
var g = require("./75303.js");
var b = require("./24340.js");
var v = Function;
function x(e) {
  try {
    return v("\"use strict\"; return (" + e + ").constructor;")();
  } catch (e) {}
}
var w = require("./16456.js");
var _ = require("./23353.js");
function k() {
  throw new c();
}
var $ = w ? function () {
  try {
    arguments.callee;
    return k;
  } catch (e) {
    try {
      return w(arguments, "callee").get;
    } catch (e) {
      return k;
    }
  }
}() : k;
var S = require("./52029.js")();
var I = require("./49735.js");
var O = require("./91915.js");
var E = require("./22251.js");
var j = require("./59648.js");
var U = require("./11380.js");
var T = {};
var A = typeof Uint8Array != "undefined" && I ? I(Uint8Array) : n;
var D = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError == "undefined" ? n : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer == "undefined" ? n : ArrayBuffer,
  "%ArrayIteratorPrototype%": S && I ? I([][Symbol.iterator]()) : n,
  "%AsyncFromSyncIteratorPrototype%": n,
  "%AsyncFunction%": T,
  "%AsyncGenerator%": T,
  "%AsyncGeneratorFunction%": T,
  "%AsyncIteratorPrototype%": T,
  "%Atomics%": typeof Atomics == "undefined" ? n : Atomics,
  "%BigInt%": typeof BigInt == "undefined" ? n : BigInt,
  "%BigInt64Array%": typeof BigInt64Array == "undefined" ? n : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array == "undefined" ? n : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView == "undefined" ? n : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": a,
  "%eval%": eval,
  "%EvalError%": o,
  "%Float16Array%": typeof Float16Array == "undefined" ? n : Float16Array,
  "%Float32Array%": typeof Float32Array == "undefined" ? n : Float32Array,
  "%Float64Array%": typeof Float64Array == "undefined" ? n : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry == "undefined" ? n : FinalizationRegistry,
  "%Function%": v,
  "%GeneratorFunction%": T,
  "%Int8Array%": typeof Int8Array == "undefined" ? n : Int8Array,
  "%Int16Array%": typeof Int16Array == "undefined" ? n : Int16Array,
  "%Int32Array%": typeof Int32Array == "undefined" ? n : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": S && I ? I(I([][Symbol.iterator]())) : n,
  "%JSON%": typeof JSON == "object" ? JSON : n,
  "%Map%": typeof Map == "undefined" ? n : Map,
  "%MapIteratorPrototype%": typeof Map != "undefined" && S && I ? I(new Map()[Symbol.iterator]()) : n,
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": i,
  "%Object.getOwnPropertyDescriptor%": w,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise == "undefined" ? n : Promise,
  "%Proxy%": typeof Proxy == "undefined" ? n : Proxy,
  "%RangeError%": s,
  "%ReferenceError%": u,
  "%Reflect%": typeof Reflect == "undefined" ? n : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set == "undefined" ? n : Set,
  "%SetIteratorPrototype%": typeof Set != "undefined" && S && I ? I(new Set()[Symbol.iterator]()) : n,
  "%SharedArrayBuffer%": typeof SharedArrayBuffer == "undefined" ? n : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": S && I ? I(""[Symbol.iterator]()) : n,
  "%Symbol%": S ? Symbol : n,
  "%SyntaxError%": l,
  "%ThrowTypeError%": $,
  "%TypedArray%": A,
  "%TypeError%": c,
  "%Uint8Array%": typeof Uint8Array == "undefined" ? n : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray == "undefined" ? n : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array == "undefined" ? n : Uint16Array,
  "%Uint32Array%": typeof Uint32Array == "undefined" ? n : Uint32Array,
  "%URIError%": d,
  "%WeakMap%": typeof WeakMap == "undefined" ? n : WeakMap,
  "%WeakRef%": typeof WeakRef == "undefined" ? n : WeakRef,
  "%WeakSet%": typeof WeakSet == "undefined" ? n : WeakSet,
  "%Function.prototype.call%": U,
  "%Function.prototype.apply%": j,
  "%Object.defineProperty%": _,
  "%Object.getPrototypeOf%": O,
  "%Math.abs%": f,
  "%Math.floor%": h,
  "%Math.max%": p,
  "%Math.min%": m,
  "%Math.pow%": y,
  "%Math.round%": g,
  "%Math.sign%": b,
  "%Reflect.getPrototypeOf%": E
};
if (I) {
  try {
    null.error;
  } catch (e) {
    var z = I(I(e));
    D["%Error.prototype%"] = z;
  }
}
var N = function e(t) {
  var r;
  if (t === "%AsyncFunction%") {
    r = x("async function () {}");
  } else if (t === "%GeneratorFunction%") {
    r = x("function* () {}");
  } else if (t === "%AsyncGeneratorFunction%") {
    r = x("async function* () {}");
  } else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    if (n) {
      r = n.prototype;
    }
  } else if (t === "%AsyncIteratorPrototype%") {
    var i = e("%AsyncGenerator%");
    if (i && I) {
      r = I(i.prototype);
    }
  }
  D[t] = r;
  return r;
};
var P = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
};
var R = require("./13947.js");
var C = require("./74913.js");
var M = R.call(U, Array.prototype.concat);
var L = R.call(j, Array.prototype.splice);
var Z = R.call(U, String.prototype.replace);
var F = R.call(U, String.prototype.slice);
var B = R.call(U, RegExp.prototype.exec);
var q = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var W = /\\(\\)?/g;
function Y(e) {
  var t = F(e, 0, 1);
  var r = F(e, -1);
  if (t === "%" && r !== "%") {
    throw new l("invalid intrinsic syntax, expected closing `%`");
  }
  if (r === "%" && t !== "%") {
    throw new l("invalid intrinsic syntax, expected opening `%`");
  }
  var n = [];
  Z(e, q, function (e, t, r, i) {
    n[n.length] = r ? Z(i, W, "$1") : t || e;
  });
  return n;
}
function G(e, t) {
  var r;
  var n = e;
  if (C(P, n)) {
    n = "%" + (r = P[n])[0] + "%";
  }
  if (C(D, n)) {
    var i = D[n];
    if (i === T) {
      i = N(n);
    }
    if (i === undefined && !t) {
      throw new c("intrinsic " + e + " exists, but is not available. Please file an issue!");
    }
    return {
      alias: r,
      name: n,
      value: i
    };
  }
  throw new l("intrinsic " + e + " does not exist!");
}
module.exports = function (e, t) {
  if (typeof e != "string" || e.length === 0) {
    throw new c("intrinsic name must be a non-empty string");
  }
  if (arguments.length > 1 && typeof t != "boolean") {
    throw new c("\"allowMissing\" argument must be a boolean");
  }
  if (B(/^%?[^%]*%?$/, e) === null) {
    throw new l("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  }
  var r = Y(e);
  var n = r.length > 0 ? r[0] : "";
  var i = G("%" + n + "%", t);
  var a = i.name;
  var o = i.value;
  var s = false;
  var u = i.alias;
  if (u) {
    n = u[0];
    L(r, M([0, 1], u));
  }
  for (var d = 1, f = true; d < r.length; d += 1) {
    var h = r[d];
    var p = F(h, 0, 1);
    var m = F(h, -1);
    if ((p === "\"" || p === "'" || p === "`" || m === "\"" || m === "'" || m === "`") && p !== m) {
      throw new l("property names with quotes must have matching quotes");
    }
    if (h === "constructor" || !f) {
      s = true;
    }
    n += "." + h;
    if (C(D, a = "%" + n + "%")) {
      o = D[a];
    } else if (o != null) {
      if (!(h in o)) {
        if (!t) {
          throw new c("base intrinsic for " + e + " exists, but the property is not available.");
        }
        return;
      }
      if (w && d + 1 >= r.length) {
        var y = w(o, h);
        o = (f = !!y) && "get" in y && !("originalValue" in y.get) ? y.get : o[h];
      } else {
        f = C(o, h);
        o = o[h];
      }
      if (f && !s) {
        D[a] = o;
      }
    }
  }
  return o;
};