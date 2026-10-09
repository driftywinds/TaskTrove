if (!("trimStart" in String.prototype)) {
  String.prototype.trimStart = String.prototype.trimLeft;
}
if (!("trimEnd" in String.prototype)) {
  String.prototype.trimEnd = String.prototype.trimRight;
}
if (!("description" in Symbol.prototype)) {
  Object.defineProperty(Symbol.prototype, "description", {
    configurable: true,
    get: function () {
      var e = /\((.*)\)/.exec(this.toString());
      if (e) {
        return e[1];
      } else {
        return undefined;
      }
    }
  });
}
if (!Array.prototype.flat) {
  Array.prototype.flat = function (e, t) {
    t = this.concat.apply([], this);
    if (e > 1 && t.some(Array.isArray)) {
      return t.flat(e - 1);
    } else {
      return t;
    }
  };
  Array.prototype.flatMap = function (e, t) {
    return this.map(e, t).flat();
  };
}
Promise.prototype.finally ||= function (e) {
  if (typeof e != "function") {
    return this.then(e, e);
  }
  var t = this.constructor || Promise;
  return this.then(function (r) {
    return t.resolve(e()).then(function () {
      return r;
    });
  }, function (r) {
    return t.resolve(e()).then(function () {
      throw r;
    });
  });
};
Object.fromEntries ||= function (e) {
  return Array.from(e).reduce(function (e, t) {
    e[t[0]] = t[1];
    return e;
  }, {});
};
Array.prototype.at ||= function (e) {
  var t = Math.trunc(e) || 0;
  if (t < 0) {
    t += this.length;
  }
  if (!(t < 0) && !(t >= this.length)) {
    return this[t];
  }
};
Object.hasOwn ||= function (e, t) {
  if (e == null) {
    throw TypeError("Cannot convert undefined or null to object");
  }
  return Object.prototype.hasOwnProperty.call(Object(e), t);
};
if (!("canParse" in URL)) {
  URL.canParse = function (e, t) {
    try {
      new URL(e, t);
      return true;
    } catch (e) {
      return false;
    }
  };
}