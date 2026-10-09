Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  UNDERSCORE_GLOBAL_ERROR_ROUTE: function () {
    return i;
  },
  UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY: function () {
    return s;
  },
  UNDERSCORE_NOT_FOUND_ROUTE: function () {
    return a;
  },
  UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: function () {
    return o;
  }
};
for (var n in r) {
  Object.defineProperty(exports, n, {
    enumerable: true,
    get: r[n]
  });
}
let a = "/_not-found";
let o = `${a}/page`;
let i = "/_global-error";
let s = `${i}/page`;