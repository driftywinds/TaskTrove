function r(e, t) {
  let r = Object.keys(e);
  if (r.length !== Object.keys(t).length) {
    return false;
  }
  for (let n = r.length; n--;) {
    let a = r[n];
    if (a === "query") {
      let r = Object.keys(e.query);
      if (r.length !== Object.keys(t.query).length) {
        return false;
      }
      for (let n = r.length; n--;) {
        let a = r[n];
        if (!t.query.hasOwnProperty(a) || e.query[a] !== t.query[a]) {
          return false;
        }
      }
    } else if (!t.hasOwnProperty(a) || e[a] !== t[a]) {
      return false;
    }
  }
  return true;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "compareRouterStates", {
  enumerable: true,
  get: function () {
    return r;
  }
});