exports.byteLength = l;
exports.toByteArray = d;
exports.fromByteArray = p;
var r = [];
var n = [];
var i = typeof Uint8Array != "undefined" ? Uint8Array : Array;
var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var o = 0, s = a.length; o < s; ++o) {
  r[o] = a[o];
  n[a.charCodeAt(o)] = o;
}
function u(e) {
  var t = e.length;
  if (t % 4 > 0) {
    throw Error("Invalid string. Length must be a multiple of 4");
  }
  var r = e.indexOf("=");
  if (r === -1) {
    r = t;
  }
  var n = r === t ? 0 : 4 - r % 4;
  return [r, n];
}
function l(e) {
  var t = u(e);
  var r = t[0];
  var n = t[1];
  return (r + n) * 3 / 4 - n;
}
function c(e, t, r) {
  return (t + r) * 3 / 4 - r;
}
function d(e) {
  var t;
  var r;
  var a = u(e);
  var o = a[0];
  var s = a[1];
  var l = new i(c(e, o, s));
  var d = 0;
  var f = s > 0 ? o - 4 : o;
  for (r = 0; r < f; r += 4) {
    t = n[e.charCodeAt(r)] << 18 | n[e.charCodeAt(r + 1)] << 12 | n[e.charCodeAt(r + 2)] << 6 | n[e.charCodeAt(r + 3)];
    l[d++] = t >> 16 & 255;
    l[d++] = t >> 8 & 255;
    l[d++] = t & 255;
  }
  if (s === 2) {
    t = n[e.charCodeAt(r)] << 2 | n[e.charCodeAt(r + 1)] >> 4;
    l[d++] = t & 255;
  }
  if (s === 1) {
    t = n[e.charCodeAt(r)] << 10 | n[e.charCodeAt(r + 1)] << 4 | n[e.charCodeAt(r + 2)] >> 2;
    l[d++] = t >> 8 & 255;
    l[d++] = t & 255;
  }
  return l;
}
function f(e) {
  return r[e >> 18 & 63] + r[e >> 12 & 63] + r[e >> 6 & 63] + r[e & 63];
}
function h(e, t, r) {
  var n = [];
  for (var i = t; i < r; i += 3) {
    n.push(f((e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255)));
  }
  return n.join("");
}
function p(e) {
  var t;
  var n = e.length;
  var i = n % 3;
  var a = [];
  for (var o = 16383, s = 0, u = n - i; s < u; s += o) {
    a.push(h(e, s, s + o > u ? u : s + o));
  }
  if (i === 1) {
    a.push(r[(t = e[n - 1]) >> 2] + r[t << 4 & 63] + "==");
  } else if (i === 2) {
    a.push(r[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "=");
  }
  return a.join("");
}
n[45] = 62;
n[95] = 63;