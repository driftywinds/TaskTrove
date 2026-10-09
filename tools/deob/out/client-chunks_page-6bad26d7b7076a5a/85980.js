let n;
let o = typeof crypto != "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
let u = new Uint8Array(16);
let s = [];
for (let t = 0; t < 256; ++t) {
  s.push((t + 256).toString(16).slice(1));
}
export let A = function (t, r, e) {
  if (o && !r && !t) {
    return o();
  }
  var a = t;
  var i = e;
  let f = (a = a || {}).random ?? a.rng?.() ?? function () {
    if (!n) {
      if (typeof crypto == "undefined" || !crypto.getRandomValues) {
        throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
      n = crypto.getRandomValues.bind(crypto);
    }
    return n(u);
  }();
  if (f.length < 16) {
    throw Error("Random bytes length must be >= 16");
  }
  f[6] = f[6] & 15 | 64;
  f[8] = f[8] & 63 | 128;
  if (r) {
    if ((i = i || 0) < 0 || i + 16 > r.length) {
      throw RangeError(`UUID byte range ${i}:${i + 15} is out of buffer bounds`);
    }
    for (let t = 0; t < 16; ++t) {
      r[i + t] = f[t];
    }
    return r;
  }
  return function (t, r = 0) {
    return (s[t[r + 0]] + s[t[r + 1]] + s[t[r + 2]] + s[t[r + 3]] + "-" + s[t[r + 4]] + s[t[r + 5]] + "-" + s[t[r + 6]] + s[t[r + 7]] + "-" + s[t[r + 8]] + s[t[r + 9]] + "-" + s[t[r + 10]] + s[t[r + 11]] + s[t[r + 12]] + s[t[r + 13]] + s[t[r + 14]] + s[t[r + 15]]).toLowerCase();
  }(f);
};