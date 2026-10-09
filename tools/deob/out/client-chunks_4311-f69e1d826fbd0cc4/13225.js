function n(e) {
  var t;
  var r;
  var i = "";
  if (typeof e == "string" || typeof e == "number") {
    i += e;
  } else if (typeof e == "object") {
    if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++) {
        if (e[t] && (r = n(e[t]))) {
          if (i) {
            i += " ";
          }
          i += r;
        }
      }
    } else {
      for (r in e) {
        if (e[r]) {
          if (i) {
            i += " ";
          }
          i += r;
        }
      }
    }
  }
  return i;
}
export function $() {
  var e;
  var t;
  for (var r = 0, i = "", a = arguments.length; r < a; r++) {
    if ((e = arguments[r]) && (t = n(e))) {
      if (i) {
        i += " ";
      }
      i += t;
    }
  }
  return i;
}