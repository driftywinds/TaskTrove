var n = require("./82408.js");
var i = require("./54933.js");
var a = require("./42103.js");
var o = require("./94005.js");
function s(e) {
  return e.call.bind(e);
}
var u = typeof BigInt != "undefined";
var l = typeof Symbol != "undefined";
var c = s(Object.prototype.toString);
var d = s(Number.prototype.valueOf);
var f = s(String.prototype.valueOf);
var h = s(Boolean.prototype.valueOf);
if (u) {
  var p = s(BigInt.prototype.valueOf);
}
if (l) {
  var m = s(Symbol.prototype.valueOf);
}
function y(e, t) {
  if (typeof e != "object") {
    return false;
  }
  try {
    t(e);
    return true;
  } catch (e) {
    return false;
  }
}
function g(e) {
  return c(e) === "[object Map]";
}
function b(e) {
  return c(e) === "[object Set]";
}
function v(e) {
  return c(e) === "[object WeakMap]";
}
function x(e) {
  return c(e) === "[object WeakSet]";
}
function w(e) {
  return c(e) === "[object ArrayBuffer]";
}
function _(e) {
  return typeof ArrayBuffer != "undefined" && (w.working ? w(e) : e instanceof ArrayBuffer);
}
function k(e) {
  return c(e) === "[object DataView]";
}
function $(e) {
  return typeof DataView != "undefined" && (k.working ? k(e) : e instanceof DataView);
}
exports.isArgumentsObject = n;
exports.isGeneratorFunction = i;
exports.isTypedArray = o;
exports.isPromise = function (e) {
  return typeof Promise != "undefined" && e instanceof Promise || e !== null && typeof e == "object" && typeof e.then == "function" && typeof e.catch == "function";
};
exports.isArrayBufferView = function (e) {
  if (typeof ArrayBuffer != "undefined" && ArrayBuffer.isView) {
    return ArrayBuffer.isView(e);
  } else {
    return o(e) || $(e);
  }
};
exports.isUint8Array = function (e) {
  return a(e) === "Uint8Array";
};
exports.isUint8ClampedArray = function (e) {
  return a(e) === "Uint8ClampedArray";
};
exports.isUint16Array = function (e) {
  return a(e) === "Uint16Array";
};
exports.isUint32Array = function (e) {
  return a(e) === "Uint32Array";
};
exports.isInt8Array = function (e) {
  return a(e) === "Int8Array";
};
exports.isInt16Array = function (e) {
  return a(e) === "Int16Array";
};
exports.isInt32Array = function (e) {
  return a(e) === "Int32Array";
};
exports.isFloat32Array = function (e) {
  return a(e) === "Float32Array";
};
exports.isFloat64Array = function (e) {
  return a(e) === "Float64Array";
};
exports.isBigInt64Array = function (e) {
  return a(e) === "BigInt64Array";
};
exports.isBigUint64Array = function (e) {
  return a(e) === "BigUint64Array";
};
g.working = typeof Map != "undefined" && g(new Map());
exports.isMap = function (e) {
  return typeof Map != "undefined" && (g.working ? g(e) : e instanceof Map);
};
b.working = typeof Set != "undefined" && b(new Set());
exports.isSet = function (e) {
  return typeof Set != "undefined" && (b.working ? b(e) : e instanceof Set);
};
v.working = typeof WeakMap != "undefined" && v(new WeakMap());
exports.isWeakMap = function (e) {
  return typeof WeakMap != "undefined" && (v.working ? v(e) : e instanceof WeakMap);
};
x.working = typeof WeakSet != "undefined" && x(new WeakSet());
exports.isWeakSet = function (e) {
  return x(e);
};
w.working = typeof ArrayBuffer != "undefined" && w(new ArrayBuffer());
exports.isArrayBuffer = _;
k.working = typeof ArrayBuffer != "undefined" && typeof DataView != "undefined" && k(new DataView(new ArrayBuffer(1), 0, 1));
exports.isDataView = $;
var S = typeof SharedArrayBuffer != "undefined" ? SharedArrayBuffer : undefined;
function I(e) {
  return c(e) === "[object SharedArrayBuffer]";
}
function O(e) {
  return S !== undefined && (I.working === undefined && (I.working = I(new S())), I.working ? I(e) : e instanceof S);
}
function E(e) {
  return y(e, d);
}
function j(e) {
  return y(e, f);
}
function U(e) {
  return y(e, h);
}
function T(e) {
  return u && y(e, p);
}
function A(e) {
  return l && y(e, m);
}
exports.isSharedArrayBuffer = O;
exports.isAsyncFunction = function (e) {
  return c(e) === "[object AsyncFunction]";
};
exports.isMapIterator = function (e) {
  return c(e) === "[object Map Iterator]";
};
exports.isSetIterator = function (e) {
  return c(e) === "[object Set Iterator]";
};
exports.isGeneratorObject = function (e) {
  return c(e) === "[object Generator]";
};
exports.isWebAssemblyCompiledModule = function (e) {
  return c(e) === "[object WebAssembly.Module]";
};
exports.isNumberObject = E;
exports.isStringObject = j;
exports.isBooleanObject = U;
exports.isBigIntObject = T;
exports.isSymbolObject = A;
exports.isBoxedPrimitive = function (e) {
  return E(e) || j(e) || U(e) || T(e) || A(e);
};
exports.isAnyArrayBuffer = function (e) {
  return typeof Uint8Array != "undefined" && (_(e) || O(e));
};
["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function (e) {
  Object.defineProperty(exports, e, {
    enumerable: false,
    value: function () {
      throw Error(e + " is not supported in userland");
    }
  });
});