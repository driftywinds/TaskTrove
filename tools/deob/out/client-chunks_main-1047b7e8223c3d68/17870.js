Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  assign: function () {
    return s;
  },
  searchParamsToUrlQuery: function () {
    return a;
  },
  urlQueryToSearchParams: function () {
    return i;
  }
};
for (var n in r) {
  Object.defineProperty(exports, n, {
    enumerable: true,
    get: r[n]
  });
}
function a(e) {
  let t = {};
  for (let [r, n] of e.entries()) {
    let e = t[r];
    if (e === undefined) {
      t[r] = n;
    } else if (Array.isArray(e)) {
      e.push(n);
    } else {
      t[r] = [e, n];
    }
  }
  return t;
}
function o(e) {
  if (typeof e == "string") {
    return e;
  } else if ((typeof e != "number" || isNaN(e)) && typeof e != "boolean") {
    return "";
  } else {
    return String(e);
  }
}
function i(e) {
  let t = new URLSearchParams();
  for (let [r, n] of Object.entries(e)) {
    if (Array.isArray(n)) {
      for (let e of n) {
        t.append(r, o(e));
      }
    } else {
      t.set(r, o(n));
    }
  }
  return t;
}
function s(e, ...t) {
  for (let r of t) {
    for (let t of r.keys()) {
      e.delete(t);
    }
    for (let [t, n] of r.entries()) {
      e.append(t, n);
    }
  }
  return e;
}