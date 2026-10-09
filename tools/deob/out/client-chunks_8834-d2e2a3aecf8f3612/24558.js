Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  extractInfoFromServerReferenceId: function () {
    return u;
  },
  omitUnusedArgs: function () {
    return a;
  }
};
for (var n in r) {
  Object.defineProperty(exports, n, {
    enumerable: true,
    get: r[n]
  });
}
function u(e) {
  let t = parseInt(e.slice(0, 2), 16);
  let r = t >> 1 & 63;
  let n = Array(6);
  for (let e = 0; e < 6; e++) {
    let t = r >> 5 - e & 1;
    n[e] = t === 1;
  }
  return {
    type: (t >> 7 & 1) == 1 ? "use-cache" : "server-action",
    usedArgs: n,
    hasRestArgs: (t & 1) == 1
  };
}
function a(e, t) {
  let r = Array(e.length);
  for (let n = 0; n < e.length; n++) {
    if (n < 6 && t.usedArgs[n] || n >= 6 && t.hasRestArgs) {
      r[n] = e[n];
    }
  }
  return r;
}