module.exports = function () {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") {
    return false;
  }
  if (typeof Symbol.iterator == "symbol") {
    return true;
  }
  var e = {};
  var t = Symbol("test");
  var r = Object(t);
  if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]") {
    return false;
  }
  var n = 42;
  e[t] = n;
  for (var i in e) {
    return false;
  }
  if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) {
    return false;
  }
  var a = Object.getOwnPropertySymbols(e);
  if (a.length !== 1 || a[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t)) {
    return false;
  }
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var o = Object.getOwnPropertyDescriptor(e, t);
    if (o.value !== n || o.enumerable !== true) {
      return false;
    }
  }
  return true;
};