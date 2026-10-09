function r(e) {
  let t = e.indexOf("#");
  let r = e.indexOf("?");
  let n = r > -1 && (t < 0 || r < t);
  if (n || t > -1) {
    return {
      pathname: e.substring(0, n ? r : t),
      query: n ? e.substring(r, t > -1 ? t : undefined) : "",
      hash: t > -1 ? e.slice(t) : ""
    };
  } else {
    return {
      pathname: e,
      query: "",
      hash: ""
    };
  }
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "parsePath", {
  enumerable: true,
  get: function () {
    return r;
  }
});