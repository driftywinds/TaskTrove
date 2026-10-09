Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "escapeStringRegexp", {
  enumerable: true,
  get: function () {
    return a;
  }
});
let r = /[|\\{}()[\]^$+*?.-]/;
let n = /[|\\{}()[\]^$+*?.-]/g;
function a(e) {
  if (r.test(e)) {
    return e.replace(n, "\\$&");
  } else {
    return e;
  }
}