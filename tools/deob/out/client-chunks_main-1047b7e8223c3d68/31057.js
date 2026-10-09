function r() {
  let e = Object.create(null);
  return {
    on(t, r) {
      (e[t] ||= []).push(r);
    },
    off(t, r) {
      if (e[t]) {
        e[t].splice(e[t].indexOf(r) >>> 0, 1);
      }
    },
    emit(t, ...r) {
      (e[t] || []).slice().map(e => {
        e(...r);
      });
    }
  };
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return r;
  }
});