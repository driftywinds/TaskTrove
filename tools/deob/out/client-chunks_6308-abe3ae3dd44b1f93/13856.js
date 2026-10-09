Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  bindSnapshot: function () {
    return l;
  },
  createAsyncLocalStorage: function () {
    return s;
  },
  createSnapshot: function () {
    return u;
  }
};
for (var n in r) {
  Object.defineProperty(exports, n, {
    enumerable: true,
    get: r[n]
  });
}
let o = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
  value: "E504",
  enumerable: false,
  configurable: true
});
class i {
  disable() {
    throw o;
  }
  getStore() {}
  run() {
    throw o;
  }
  exit() {
    throw o;
  }
  enterWith() {
    throw o;
  }
  static bind(e) {
    return e;
  }
}
let a = typeof globalThis != "undefined" && globalThis.AsyncLocalStorage;
function s() {
  if (a) {
    return new a();
  } else {
    return new i();
  }
}
function l(e) {
  if (a) {
    return a.bind(e);
  } else {
    return i.bind(e);
  }
}
function u() {
  if (a) {
    return a.snapshot();
  } else {
    return function (e, ...t) {
      return e(...t);
    };
  }
}