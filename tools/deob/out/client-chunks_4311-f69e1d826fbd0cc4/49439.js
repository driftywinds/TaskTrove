exports.read = function (e, t, r, n, i) {
  var a;
  var o;
  var s = i * 8 - n - 1;
  var u = (1 << s) - 1;
  var l = u >> 1;
  var c = -7;
  var d = r ? i - 1 : 0;
  var f = r ? -1 : 1;
  var h = e[t + d];
  d += f;
  a = h & (1 << -c) - 1;
  h >>= -c;
  c += s;
  for (; c > 0; c -= 8) {
    a = a * 256 + e[t + d];
    d += f;
  }
  o = a & (1 << -c) - 1;
  a >>= -c;
  c += n;
  for (; c > 0; c -= 8) {
    o = o * 256 + e[t + d];
    d += f;
  }
  if (a === 0) {
    a = 1 - l;
  } else {
    if (a === u) {
      if (o) {
        return NaN;
      } else {
        return (h ? -1 : 1) * Infinity;
      }
    }
    o += Math.pow(2, n);
    a -= l;
  }
  return (h ? -1 : 1) * o * Math.pow(2, a - n);
};
exports.write = function (e, t, r, n, i, a) {
  var o;
  var s;
  var u;
  var l = a * 8 - i - 1;
  var c = (1 << l) - 1;
  var d = c >> 1;
  var f = (i === 23) * 5.960464477539062e-8;
  var h = n ? 0 : a - 1;
  var p = n ? 1 : -1;
  var m = +(t < 0 || t === 0 && 1 / t < 0);
  for (isNaN(t = Math.abs(t)) || t === Infinity ? (s = +!!isNaN(t), o = c) : (o = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), o + d >= 1 ? t += f / u : t += f * Math.pow(2, 1 - d), t * u >= 2 && (o++, u /= 2), o + d >= c ? (s = 0, o = c) : o + d >= 1 ? (s = (t * u - 1) * Math.pow(2, i), o += d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, i), o = 0)); i >= 8; i -= 8) {
    e[r + h] = s & 255;
    h += p;
    s /= 256;
  }
  o = o << i | s;
  l += i;
  for (; l > 0; l -= 8) {
    e[r + h] = o & 255;
    h += p;
    o /= 256;
  }
  e[r + h - p] |= m * 128;
};