var n = require("./62193.js");
var i = require("./22461.js");
var a = require("./913.js");
export function H(e, t) {
  let r;
  let n;
  let o = () => (0, i.w)(t?.in, NaN);
  let s = t?.additionalDigits ?? 2;
  let u = h(e);
  if (u.date) {
    let e = p(u.date, s);
    r = m(e.restDateString, e.year);
  }
  if (!r || isNaN(+r)) {
    return o();
  }
  let l = +r;
  let c = 0;
  if (u.time && isNaN(c = g(u.time))) {
    return o();
  }
  if (u.timezone) {
    if (isNaN(n = v(u.timezone))) {
      return o();
    }
  } else {
    let e = new Date(l + c);
    let r = (0, a.a)(0, t?.in);
    r.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate());
    r.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds());
    return r;
  }
  return (0, a.a)(l + c + n, t?.in);
}
let s = /[T ]/;
let u = /[Z ]/i;
let l = /([Z+-].*)$/;
let c = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
let d = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
let f = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function h(e) {
  let t;
  let r = {};
  let n = e.split(s);
  if (n.length > 2) {
    return r;
  }
  if (/:/.test(n[0])) {
    t = n[0];
  } else {
    r.date = n[0];
    t = n[1];
    if (u.test(r.date)) {
      r.date = e.split(u)[0];
      t = e.substr(r.date.length, e.length);
    }
  }
  if (t) {
    let e = l.exec(t);
    if (e) {
      r.time = t.replace(e[1], "");
      r.timezone = e[1];
    } else {
      r.time = t;
    }
  }
  return r;
}
function p(e, t) {
  let r = RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)");
  let n = e.match(r);
  if (!n) {
    return {
      year: NaN,
      restDateString: ""
    };
  }
  let i = n[1] ? parseInt(n[1]) : null;
  let a = n[2] ? parseInt(n[2]) : null;
  return {
    year: a === null ? i : a * 100,
    restDateString: e.slice((n[1] || n[2]).length)
  };
}
function m(e, t) {
  if (t === null) {
    return new Date(NaN);
  }
  let r = e.match(c);
  if (!r) {
    return new Date(NaN);
  }
  let n = !!r[4];
  let i = y(r[1]);
  let a = y(r[2]) - 1;
  let o = y(r[3]);
  let s = y(r[4]);
  let u = y(r[5]) - 1;
  if (n) {
    if (S(t, s, u)) {
      return x(t, s, u);
    } else {
      return new Date(NaN);
    }
  }
  {
    let e = new Date(0);
    if (k(t, a, o) && $(t, i)) {
      e.setUTCFullYear(t, a, Math.max(i, o));
      return e;
    } else {
      return new Date(NaN);
    }
  }
}
function y(e) {
  if (e) {
    return parseInt(e);
  } else {
    return 1;
  }
}
function g(e) {
  let t = e.match(d);
  if (!t) {
    return NaN;
  }
  let r = b(t[1]);
  let i = b(t[2]);
  let a = b(t[3]);
  if (I(r, i, a)) {
    return r * n.s0 + i * n.Cg + a * 1000;
  } else {
    return NaN;
  }
}
function b(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function v(e) {
  if (e === "Z") {
    return 0;
  }
  let t = e.match(f);
  if (!t) {
    return 0;
  }
  let r = t[1] === "+" ? -1 : 1;
  let i = parseInt(t[2]);
  let a = t[3] && parseInt(t[3]) || 0;
  if (O(i, a)) {
    return r * (i * n.s0 + a * n.Cg);
  } else {
    return NaN;
  }
}
function x(e, t, r) {
  let n = new Date(0);
  n.setUTCFullYear(e, 0, 4);
  let i = (t - 1) * 7 + r + 1 - (n.getUTCDay() || 7);
  n.setUTCDate(n.getUTCDate() + i);
  return n;
}
let w = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function _(e) {
  return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
function k(e, t, r) {
  return t >= 0 && t <= 11 && r >= 1 && r <= (w[t] || (_(e) ? 29 : 28));
}
function $(e, t) {
  return t >= 1 && t <= (_(e) ? 366 : 365);
}
function S(e, t, r) {
  return t >= 1 && t <= 53 && r >= 0 && r <= 6;
}
function I(e, t, r) {
  if (e === 24) {
    return t === 0 && r === 0;
  } else {
    return r >= 0 && r < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
  }
}
function O(e, t) {
  return t >= 0 && t <= 59;
}