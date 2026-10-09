var n;
var i = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
var a = function () {
  function e(e, t) {
    if (t === 0) {
      throw Error("Can't create weekday with n == 0");
    }
    this.weekday = e;
    this.n = t;
  }
  e.fromStr = function (t) {
    return new e(i.indexOf(t));
  };
  e.prototype.nth = function (t) {
    if (this.n === t) {
      return this;
    } else {
      return new e(this.weekday, t);
    }
  };
  e.prototype.equals = function (e) {
    return this.weekday === e.weekday && this.n === e.n;
  };
  e.prototype.toString = function () {
    var e = i[this.weekday];
    if (this.n) {
      e = (this.n > 0 ? "+" : "") + String(this.n) + e;
    }
    return e;
  };
  e.prototype.getJsWeekday = function () {
    if (this.weekday === 6) {
      return 0;
    } else {
      return this.weekday + 1;
    }
  };
  return e;
}();
function o(e) {
  return e != null;
}
function s(e) {
  return typeof e == "number";
}
function u(e) {
  return typeof e == "string" && i.includes(e);
}
var l = Array.isArray;
function c(e, t = e) {
  if (arguments.length == 1) {
    t = e;
    e = 0;
  }
  var r = [];
  for (var n = e; n < t; n++) {
    r.push(n);
  }
  return r;
}
function d(e, t) {
  var r = 0;
  var n = [];
  if (l(e)) {
    for (; r < t; r++) {
      n[r] = [].concat(e);
    }
  } else {
    for (; r < t; r++) {
      n[r] = e;
    }
  }
  return n;
}
function f(e) {
  if (l(e)) {
    return e;
  } else {
    return [e];
  }
}
function h(e, t, r = " ") {
  var n = String(e);
  t |= 0;
  if (n.length > t) {
    return String(n);
  } else {
    if ((t -= n.length) > r.length) {
      r += d(r, t / r.length);
    }
    return r.slice(0, t) + String(n);
  }
}
function p(e, t, r) {
  var n = e.split(t);
  if (r) {
    return n.slice(0, r).concat([n.slice(r).join(t)]);
  } else {
    return n;
  }
}
function m(e, t) {
  var r = e % t;
  if (r * t < 0) {
    return r + t;
  } else {
    return r;
  }
}
function y(e, t) {
  return {
    div: Math.floor(e / t),
    mod: m(e, t)
  };
}
function g(e) {
  return !o(e) || e.length === 0;
}
function b(e) {
  return !g(e);
}
function v(e, t) {
  return b(e) && e.indexOf(t) !== -1;
}
function x(e, t, r, n = 0, i = 0, a = 0) {
  return new Date(Date.UTC(e, t - 1, r, n, i, a));
}
var w = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var _ = 86400000;
var k = 9999;
var $ = x(1970, 1, 1);
var S = [6, 0, 1, 2, 3, 4, 5];
function I(e) {
  return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
}
function O(e) {
  return e instanceof Date;
}
function E(e) {
  return O(e) && !isNaN(e.getTime());
}
function j(e, t) {
  return Math.round((e.getTime() - t.getTime()) / _);
}
function U(e) {
  return j(e, $);
}
function T(e) {
  return new Date($.getTime() + e * _);
}
function A(e) {
  var t = e.getUTCMonth();
  if (t === 1 && I(e.getUTCFullYear())) {
    return 29;
  } else {
    return w[t];
  }
}
function D(e) {
  return S[e.getUTCDay()];
}
function z(e, t) {
  var r = x(e, t + 1, 1);
  return [D(r), A(r)];
}
function N(e, t) {
  t = t || e;
  return new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
}
function P(e) {
  return new Date(e.getTime());
}
function R(e) {
  var t = [];
  for (var r = 0; r < e.length; r++) {
    t.push(P(e[r]));
  }
  return t;
}
function C(e) {
  e.sort(function (e, t) {
    return e.getTime() - t.getTime();
  });
}
function M(e, t = true) {
  var r = new Date(e);
  return "" + h(r.getUTCFullYear().toString(), 4, "0") + h(r.getUTCMonth() + 1, 2, "0") + h(r.getUTCDate(), 2, "0") + "T" + h(r.getUTCHours(), 2, "0") + h(r.getUTCMinutes(), 2, "0") + h(r.getUTCSeconds(), 2, "0") + (t ? "Z" : "");
}
function L(e) {
  var t = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(e);
  if (!t) {
    throw Error(`Invalid UNTIL value: ${e}`);
  }
  return new Date(Date.UTC(parseInt(t[1], 10), parseInt(t[2], 10) - 1, parseInt(t[3], 10), parseInt(t[5], 10) || 0, parseInt(t[6], 10) || 0, parseInt(t[7], 10) || 0));
}
function Z(e, t) {
  return e.toLocaleString("sv-SE", {
    timeZone: t
  }).replace(" ", "T") + "Z";
}
function F(e, t) {
  var r = new Date(Z(e, Intl.DateTimeFormat().resolvedOptions().timeZone));
  var n = new Date(Z(e, t ?? "UTC")).getTime() - r.getTime();
  return new Date(e.getTime() - n);
}
let B = function () {
  function e(e, t) {
    this.minDate = null;
    this.maxDate = null;
    this._result = [];
    this.total = 0;
    this.method = e;
    this.args = t;
    if (e === "between") {
      this.maxDate = t.inc ? t.before : new Date(t.before.getTime() - 1);
      this.minDate = t.inc ? t.after : new Date(t.after.getTime() + 1);
    } else if (e === "before") {
      this.maxDate = t.inc ? t.dt : new Date(t.dt.getTime() - 1);
    } else if (e === "after") {
      this.minDate = t.inc ? t.dt : new Date(t.dt.getTime() + 1);
    }
  }
  e.prototype.accept = function (e) {
    ++this.total;
    var t = this.minDate && e < this.minDate;
    var r = this.maxDate && e > this.maxDate;
    if (this.method === "between") {
      if (t) {
        return true;
      }
      if (r) {
        return false;
      }
    } else if (this.method === "before") {
      if (r) {
        return false;
      }
    } else if (this.method === "after") {
      return !!t || (this.add(e), false);
    }
    return this.add(e);
  };
  e.prototype.add = function (e) {
    this._result.push(e);
    return true;
  };
  e.prototype.getValue = function () {
    var e = this._result;
    switch (this.method) {
      case "all":
      case "between":
        return e;
      default:
        if (e.length) {
          return e[e.length - 1];
        } else {
          return null;
        }
    }
  };
  e.prototype.clone = function () {
    return new e(this.method, this.args);
  };
  return e;
}();
var q = require("./6009.js");
let W = function (e) {
  function t(t, r, n) {
    var i = e.call(this, t, r) || this;
    i.iterator = n;
    return i;
  }
  (0, q.C6)(t, e);
  t.prototype.add = function (e) {
    return !!this.iterator(e, this._result.length) && (this._result.push(e), true);
  };
  return t;
}(B);
let Y = {
  dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  tokens: {
    SKIP: /^[ \r\n\t]+|^\.$/,
    number: /^[1-9][0-9]*/,
    numberAsText: /^(one|two|three)/i,
    every: /^every/i,
    "day(s)": /^days?/i,
    "weekday(s)": /^weekdays?/i,
    "week(s)": /^weeks?/i,
    "hour(s)": /^hours?/i,
    "minute(s)": /^minutes?/i,
    "month(s)": /^months?/i,
    "year(s)": /^years?/i,
    on: /^(on|in)/i,
    at: /^(at)/i,
    the: /^the/i,
    first: /^first/i,
    second: /^second/i,
    third: /^third/i,
    nth: /^([1-9][0-9]*)(\.|th|nd|rd|st)/i,
    last: /^last/i,
    for: /^for/i,
    "time(s)": /^times?/i,
    until: /^(un)?til/i,
    monday: /^mo(n(day)?)?/i,
    tuesday: /^tu(e(s(day)?)?)?/i,
    wednesday: /^we(d(n(esday)?)?)?/i,
    thursday: /^th(u(r(sday)?)?)?/i,
    friday: /^fr(i(day)?)?/i,
    saturday: /^sa(t(urday)?)?/i,
    sunday: /^su(n(day)?)?/i,
    january: /^jan(uary)?/i,
    february: /^feb(ruary)?/i,
    march: /^mar(ch)?/i,
    april: /^apr(il)?/i,
    may: /^may/i,
    june: /^june?/i,
    july: /^july?/i,
    august: /^aug(ust)?/i,
    september: /^sep(t(ember)?)?/i,
    october: /^oct(ober)?/i,
    november: /^nov(ember)?/i,
    december: /^dec(ember)?/i,
    comma: /^(,\s*|(and|or)\s*)+/i
  }
};
function G(e, t) {
  return e.indexOf(t) !== -1;
}
function H(e) {
  return e.toString();
}
function J(e, t, r) {
  return `${t} ${r}, ${e}`;
}
let X = function () {
  function e(e, t = H, r = Y, n = J) {
    this.text = [];
    this.language = r || Y;
    this.gettext = t;
    this.dateFormatter = n;
    this.rrule = e;
    this.options = e.options;
    this.origOptions = e.origOptions;
    if (this.origOptions.bymonthday) {
      var i = [].concat(this.options.bymonthday);
      var a = [].concat(this.options.bynmonthday);
      i.sort(function (e, t) {
        return e - t;
      });
      a.sort(function (e, t) {
        return t - e;
      });
      this.bymonthday = i.concat(a);
      if (!this.bymonthday.length) {
        this.bymonthday = null;
      }
    }
    if (o(this.origOptions.byweekday)) {
      var s = l(this.origOptions.byweekday) ? this.origOptions.byweekday : [this.origOptions.byweekday];
      var u = String(s);
      this.byweekday = {
        allWeeks: s.filter(function (e) {
          return !e.n;
        }),
        someWeeks: s.filter(function (e) {
          return !!e.n;
        }),
        isWeekdays: u.indexOf("MO") !== -1 && u.indexOf("TU") !== -1 && u.indexOf("WE") !== -1 && u.indexOf("TH") !== -1 && u.indexOf("FR") !== -1 && u.indexOf("SA") === -1 && u.indexOf("SU") === -1,
        isEveryDay: u.indexOf("MO") !== -1 && u.indexOf("TU") !== -1 && u.indexOf("WE") !== -1 && u.indexOf("TH") !== -1 && u.indexOf("FR") !== -1 && u.indexOf("SA") !== -1 && u.indexOf("SU") !== -1
      };
      function c(e, t) {
        return e.weekday - t.weekday;
      }
      this.byweekday.allWeeks.sort(c);
      this.byweekday.someWeeks.sort(c);
      if (!this.byweekday.allWeeks.length) {
        this.byweekday.allWeeks = null;
      }
      if (!this.byweekday.someWeeks.length) {
        this.byweekday.someWeeks = null;
      }
    } else {
      this.byweekday = null;
    }
  }
  e.isFullyConvertible = function (t) {
    var r = true;
    if (!(t.options.freq in e.IMPLEMENTED) || t.origOptions.until && t.origOptions.count) {
      return false;
    }
    for (var n in t.origOptions) {
      if (G(["dtstart", "tzid", "wkst", "freq"], n)) {
        return true;
      }
      if (!G(e.IMPLEMENTED[t.options.freq], n)) {
        return false;
      }
    }
    return r;
  };
  e.prototype.isFullyConvertible = function () {
    return e.isFullyConvertible(this.rrule);
  };
  e.prototype.toString = function () {
    var t = this.gettext;
    if (!(this.options.freq in e.IMPLEMENTED)) {
      return t("RRule error: Unable to fully convert this rrule to text");
    }
    this.text = [t("every")];
    this[p3.FREQUENCIES[this.options.freq]]();
    if (this.options.until) {
      this.add(t("until"));
      var r = this.options.until;
      this.add(this.dateFormatter(r.getUTCFullYear(), this.language.monthNames[r.getUTCMonth()], r.getUTCDate()));
    } else if (this.options.count) {
      this.add(t("for")).add(this.options.count.toString()).add(t(this.plural(this.options.count) ? "times" : "time"));
    }
    if (!this.isFullyConvertible()) {
      this.add(t("(~ approximate)"));
    }
    return this.text.join("");
  };
  e.prototype.HOURLY = function () {
    var e = this.gettext;
    if (this.options.interval !== 1) {
      this.add(this.options.interval.toString());
    }
    this.add(e(this.plural(this.options.interval) ? "hours" : "hour"));
  };
  e.prototype.MINUTELY = function () {
    var e = this.gettext;
    if (this.options.interval !== 1) {
      this.add(this.options.interval.toString());
    }
    this.add(e(this.plural(this.options.interval) ? "minutes" : "minute"));
  };
  e.prototype.DAILY = function () {
    var e = this.gettext;
    if (this.options.interval !== 1) {
      this.add(this.options.interval.toString());
    }
    if (this.byweekday && this.byweekday.isWeekdays) {
      this.add(e(this.plural(this.options.interval) ? "weekdays" : "weekday"));
    } else {
      this.add(e(this.plural(this.options.interval) ? "days" : "day"));
    }
    if (this.origOptions.bymonth) {
      this.add(e("in"));
      this._bymonth();
    }
    if (this.bymonthday) {
      this._bymonthday();
    } else if (this.byweekday) {
      this._byweekday();
    } else if (this.origOptions.byhour) {
      this._byhour();
    }
  };
  e.prototype.WEEKLY = function () {
    var e = this.gettext;
    if (this.options.interval !== 1) {
      this.add(this.options.interval.toString()).add(e(this.plural(this.options.interval) ? "weeks" : "week"));
    }
    if (this.byweekday && this.byweekday.isWeekdays) {
      if (this.options.interval === 1) {
        this.add(e(this.plural(this.options.interval) ? "weekdays" : "weekday"));
      } else {
        this.add(e("on")).add(e("weekdays"));
      }
    } else if (this.byweekday && this.byweekday.isEveryDay) {
      this.add(e(this.plural(this.options.interval) ? "days" : "day"));
    } else {
      if (this.options.interval === 1) {
        this.add(e("week"));
      }
      if (this.origOptions.bymonth) {
        this.add(e("in"));
        this._bymonth();
      }
      if (this.bymonthday) {
        this._bymonthday();
      } else if (this.byweekday) {
        this._byweekday();
      }
      if (this.origOptions.byhour) {
        this._byhour();
      }
    }
  };
  e.prototype.MONTHLY = function () {
    var e = this.gettext;
    if (this.origOptions.bymonth) {
      if (this.options.interval !== 1) {
        this.add(this.options.interval.toString()).add(e("months"));
        if (this.plural(this.options.interval)) {
          this.add(e("in"));
        }
      }
      this._bymonth();
    } else {
      if (this.options.interval !== 1) {
        this.add(this.options.interval.toString());
      }
      this.add(e(this.plural(this.options.interval) ? "months" : "month"));
    }
    if (this.bymonthday) {
      this._bymonthday();
    } else if (this.byweekday && this.byweekday.isWeekdays) {
      this.add(e("on")).add(e("weekdays"));
    } else if (this.byweekday) {
      this._byweekday();
    }
  };
  e.prototype.YEARLY = function () {
    var e = this.gettext;
    if (this.origOptions.bymonth) {
      if (this.options.interval !== 1) {
        this.add(this.options.interval.toString());
        this.add(e("years"));
      }
      this._bymonth();
    } else {
      if (this.options.interval !== 1) {
        this.add(this.options.interval.toString());
      }
      this.add(e(this.plural(this.options.interval) ? "years" : "year"));
    }
    if (this.bymonthday) {
      this._bymonthday();
    } else if (this.byweekday) {
      this._byweekday();
    }
    if (this.options.byyearday) {
      this.add(e("on the")).add(this.list(this.options.byyearday, this.nth, e("and"))).add(e("day"));
    }
    if (this.options.byweekno) {
      this.add(e("in")).add(e(this.plural(this.options.byweekno.length) ? "weeks" : "week")).add(this.list(this.options.byweekno, undefined, e("and")));
    }
  };
  e.prototype._bymonthday = function () {
    var e = this.gettext;
    if (this.byweekday && this.byweekday.allWeeks) {
      this.add(e("on")).add(this.list(this.byweekday.allWeeks, this.weekdaytext, e("or"))).add(e("the")).add(this.list(this.bymonthday, this.nth, e("or")));
    } else {
      this.add(e("on the")).add(this.list(this.bymonthday, this.nth, e("and")));
    }
  };
  e.prototype._byweekday = function () {
    var e = this.gettext;
    if (this.byweekday.allWeeks && !this.byweekday.isWeekdays) {
      this.add(e("on")).add(this.list(this.byweekday.allWeeks, this.weekdaytext));
    }
    if (this.byweekday.someWeeks) {
      if (this.byweekday.allWeeks) {
        this.add(e("and"));
      }
      this.add(e("on the")).add(this.list(this.byweekday.someWeeks, this.weekdaytext, e("and")));
    }
  };
  e.prototype._byhour = function () {
    var e = this.gettext;
    this.add(e("at")).add(this.list(this.origOptions.byhour, undefined, e("and")));
  };
  e.prototype._bymonth = function () {
    this.add(this.list(this.options.bymonth, this.monthtext, this.gettext("and")));
  };
  e.prototype.nth = function (e) {
    e = parseInt(e.toString(), 10);
    var t;
    var r = this.gettext;
    if (e === -1) {
      return r("last");
    }
    var n = Math.abs(e);
    switch (n) {
      case 1:
      case 21:
      case 31:
        t = n + r("st");
        break;
      case 2:
      case 22:
        t = n + r("nd");
        break;
      case 3:
      case 23:
        t = n + r("rd");
        break;
      default:
        t = n + r("th");
    }
    if (e < 0) {
      return t + " " + r("last");
    } else {
      return t;
    }
  };
  e.prototype.monthtext = function (e) {
    return this.language.monthNames[e - 1];
  };
  e.prototype.weekdaytext = function (e) {
    var t = s(e) ? (e + 1) % 7 : e.getJsWeekday();
    return (e.n ? this.nth(e.n) + " " : "") + this.language.dayNames[t];
  };
  e.prototype.plural = function (e) {
    return e % 100 != 1;
  };
  e.prototype.add = function (e) {
    this.text.push(" ");
    this.text.push(e);
    return this;
  };
  e.prototype.list = function (e, t, r, n) {
    var i = this;
    if (n === undefined) {
      n = ",";
    }
    if (!l(e)) {
      e = [e];
    }
    function a(e, t, r) {
      var n = "";
      for (var i = 0; i < e.length; i++) {
        if (i !== 0) {
          if (i === e.length - 1) {
            n += " " + r + " ";
          } else {
            n += t + " ";
          }
        }
        n += e[i];
      }
      return n;
    }
    t = t || function (e) {
      return e.toString();
    };
    function o(e) {
      return t && t.call(i, e);
    }
    if (r) {
      return a(e.map(o), n, r);
    } else {
      return e.map(o).join(n + " ");
    }
  };
  return e;
}();
var Q = function () {
  function e(e) {
    this.done = true;
    this.rules = e;
  }
  e.prototype.start = function (e) {
    this.text = e;
    this.done = false;
    return this.nextSymbol();
  };
  e.prototype.isDone = function () {
    return this.done && this.symbol === null;
  };
  e.prototype.nextSymbol = function () {
    this.symbol = null;
    this.value = null;
    do {
      if (this.done) {
        return false;
      }
      var e;
      var t;
      var r = undefined;
      e = null;
      for (var n in this.rules) {
        var i = (r = this.rules[n]).exec(this.text);
        if (i && (e === null || i[0].length > e[0].length)) {
          e = i;
          t = n;
        }
      }
      if (e != null) {
        this.text = this.text.substr(e[0].length);
        if (this.text === "") {
          this.done = true;
        }
      }
      if (e == null) {
        this.done = true;
        this.symbol = null;
        this.value = null;
        return;
      }
    } while (t === "SKIP");
    this.symbol = t;
    this.value = e;
    return true;
  };
  e.prototype.accept = function (e) {
    if (this.symbol === e) {
      if (this.value) {
        var t = this.value;
        this.nextSymbol();
        return t;
      }
      this.nextSymbol();
      return true;
    }
    return false;
  };
  e.prototype.acceptNumber = function () {
    return this.accept("number");
  };
  e.prototype.expect = function (e) {
    if (this.accept(e)) {
      return true;
    }
    throw Error("expected " + e + " but found " + this.symbol);
  };
  return e;
}();
function K(e, t = Y) {
  var r = {};
  var n = new Q(t.tokens);
  if (!n.start(e)) {
    return null;
  }
  i();
  return r;
  function i() {
    n.expect("every");
    var e = n.acceptNumber();
    if (e) {
      r.interval = parseInt(e[0], 10);
    }
    if (n.isDone()) {
      throw Error("Unexpected end");
    }
    switch (n.symbol) {
      case "day(s)":
        r.freq = p3.DAILY;
        if (n.nextSymbol()) {
          o();
          d();
        }
        break;
      case "weekday(s)":
        r.freq = p3.WEEKLY;
        r.byweekday = [p3.MO, p3.TU, p3.WE, p3.TH, p3.FR];
        n.nextSymbol();
        o();
        d();
        break;
      case "week(s)":
        r.freq = p3.WEEKLY;
        if (n.nextSymbol()) {
          a();
          o();
          d();
        }
        break;
      case "hour(s)":
        r.freq = p3.HOURLY;
        if (n.nextSymbol()) {
          a();
          d();
        }
        break;
      case "minute(s)":
        r.freq = p3.MINUTELY;
        if (n.nextSymbol()) {
          a();
          d();
        }
        break;
      case "month(s)":
        r.freq = p3.MONTHLY;
        if (n.nextSymbol()) {
          a();
          d();
        }
        break;
      case "year(s)":
        r.freq = p3.YEARLY;
        if (n.nextSymbol()) {
          a();
          d();
        }
        break;
      case "monday":
      case "tuesday":
      case "wednesday":
      case "thursday":
      case "friday":
      case "saturday":
      case "sunday":
        r.freq = p3.WEEKLY;
        r.byweekday = [p3[n.symbol.substr(0, 2).toUpperCase()]];
        if (!n.nextSymbol()) {
          return;
        }
        while (n.accept("comma")) {
          if (n.isDone()) {
            throw Error("Unexpected end");
          }
          var t = u();
          if (!t) {
            throw Error("Unexpected symbol " + n.symbol + ", expected weekday");
          }
          r.byweekday.push(p3[t]);
          n.nextSymbol();
        }
        o();
        c();
        d();
        break;
      case "january":
      case "february":
      case "march":
      case "april":
      case "may":
      case "june":
      case "july":
      case "august":
      case "september":
      case "october":
      case "november":
      case "december":
        r.freq = p3.YEARLY;
        r.bymonth = [s()];
        if (!n.nextSymbol()) {
          return;
        }
        while (n.accept("comma")) {
          if (n.isDone()) {
            throw Error("Unexpected end");
          }
          var i = s();
          if (!i) {
            throw Error("Unexpected symbol " + n.symbol + ", expected month");
          }
          r.bymonth.push(i);
          n.nextSymbol();
        }
        a();
        d();
        break;
      default:
        throw Error("Unknown symbol");
    }
  }
  function a() {
    var e = n.accept("on");
    var t = n.accept("the");
    if (e || t) {
      do {
        var i = l();
        var a = u();
        var o = s();
        if (i) {
          if (a) {
            n.nextSymbol();
            r.byweekday ||= [];
            r.byweekday.push(p3[a].nth(i));
          } else {
            r.bymonthday ||= [];
            r.bymonthday.push(i);
            n.accept("day(s)");
          }
        } else if (a) {
          n.nextSymbol();
          r.byweekday ||= [];
          r.byweekday.push(p3[a]);
        } else if (n.symbol === "weekday(s)") {
          n.nextSymbol();
          r.byweekday ||= [p3.MO, p3.TU, p3.WE, p3.TH, p3.FR];
        } else if (n.symbol === "week(s)") {
          n.nextSymbol();
          var c = n.acceptNumber();
          if (!c) {
            throw Error("Unexpected symbol " + n.symbol + ", expected week number");
          }
          for (r.byweekno = [parseInt(c[0], 10)]; n.accept("comma");) {
            if (!(c = n.acceptNumber())) {
              throw Error("Unexpected symbol " + n.symbol + "; expected monthday");
            }
            r.byweekno.push(parseInt(c[0], 10));
          }
        } else {
          if (!o) {
            return;
          }
          n.nextSymbol();
          r.bymonth ||= [];
          r.bymonth.push(o);
        }
      } while (n.accept("comma") || n.accept("the") || n.accept("on"));
    }
  }
  function o() {
    if (n.accept("at")) {
      do {
        var e = n.acceptNumber();
        if (!e) {
          throw Error("Unexpected symbol " + n.symbol + ", expected hour");
        }
        for (r.byhour = [parseInt(e[0], 10)]; n.accept("comma");) {
          if (!(e = n.acceptNumber())) {
            throw Error("Unexpected symbol " + n.symbol + "; expected hour");
          }
          r.byhour.push(parseInt(e[0], 10));
        }
      } while (n.accept("comma") || n.accept("at"));
    }
  }
  function s() {
    switch (n.symbol) {
      case "january":
        return 1;
      case "february":
        return 2;
      case "march":
        return 3;
      case "april":
        return 4;
      case "may":
        return 5;
      case "june":
        return 6;
      case "july":
        return 7;
      case "august":
        return 8;
      case "september":
        return 9;
      case "october":
        return 10;
      case "november":
        return 11;
      case "december":
        return 12;
      default:
        return false;
    }
  }
  function u() {
    switch (n.symbol) {
      case "monday":
      case "tuesday":
      case "wednesday":
      case "thursday":
      case "friday":
      case "saturday":
      case "sunday":
        return n.symbol.substr(0, 2).toUpperCase();
      default:
        return false;
    }
  }
  function l() {
    switch (n.symbol) {
      case "last":
        n.nextSymbol();
        return -1;
      case "first":
        n.nextSymbol();
        return 1;
      case "second":
        n.nextSymbol();
        if (n.accept("last")) {
          return -2;
        } else {
          return 2;
        }
      case "third":
        n.nextSymbol();
        if (n.accept("last")) {
          return -3;
        } else {
          return 3;
        }
      case "nth":
        var e = parseInt(n.value[1], 10);
        if (e < -366 || e > 366) {
          throw Error("Nth out of range: " + e);
        }
        n.nextSymbol();
        if (n.accept("last")) {
          return -e;
        } else {
          return e;
        }
      default:
        return false;
    }
  }
  function c() {
    n.accept("on");
    n.accept("the");
    var e = l();
    if (e) {
      r.bymonthday = [e];
      n.nextSymbol();
      while (n.accept("comma")) {
        if (!(e = l())) {
          throw Error("Unexpected symbol " + n.symbol + "; expected monthday");
        }
        r.bymonthday.push(e);
        n.nextSymbol();
      }
    }
  }
  function d() {
    if (n.symbol === "until") {
      var e = Date.parse(n.text);
      if (!e) {
        throw Error("Cannot parse until date:" + n.text);
      }
      r.until = new Date(e);
    } else if (n.accept("for")) {
      r.count = parseInt(n.value[0], 10);
      n.expect("number");
    }
  }
}
function V(e) {
  return e < n.HOURLY;
}
(function (e) {
  e[e.YEARLY = 0] = "YEARLY";
  e[e.MONTHLY = 1] = "MONTHLY";
  e[e.WEEKLY = 2] = "WEEKLY";
  e[e.DAILY = 3] = "DAILY";
  e[e.HOURLY = 4] = "HOURLY";
  e[e.MINUTELY = 5] = "MINUTELY";
  e[e.SECONDLY = 6] = "SECONDLY";
})(n ||= {});
function ee(e, t = Y) {
  return new p3(K(e, t) || undefined);
}
var et = ["count", "until", "interval", "byweekday", "bymonthday", "bymonth"];
X.IMPLEMENTED = [];
X.IMPLEMENTED[n.HOURLY] = et;
X.IMPLEMENTED[n.MINUTELY] = et;
X.IMPLEMENTED[n.DAILY] = ["byhour"].concat(et);
X.IMPLEMENTED[n.WEEKLY] = et;
X.IMPLEMENTED[n.MONTHLY] = et;
X.IMPLEMENTED[n.YEARLY] = ["byweekno", "byyearday"].concat(et);
function er(e, t, r, n) {
  return new X(e, t, r, n).toString();
}
var en = X.isFullyConvertible;
var ei = function () {
  function e(e, t, r, n) {
    this.hour = e;
    this.minute = t;
    this.second = r;
    this.millisecond = n || 0;
  }
  e.prototype.getHours = function () {
    return this.hour;
  };
  e.prototype.getMinutes = function () {
    return this.minute;
  };
  e.prototype.getSeconds = function () {
    return this.second;
  };
  e.prototype.getMilliseconds = function () {
    return this.millisecond;
  };
  e.prototype.getTime = function () {
    return (this.hour * 60 * 60 + this.minute * 60 + this.second) * 1000 + this.millisecond;
  };
  return e;
}();
var ea = function (e) {
  function t(t, r, n, i, a, o, s) {
    var u = e.call(this, i, a, o, s) || this;
    u.year = t;
    u.month = r;
    u.day = n;
    return u;
  }
  (0, q.C6)(t, e);
  t.fromDate = function (e) {
    return new this(e.getUTCFullYear(), e.getUTCMonth() + 1, e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.valueOf() % 1000);
  };
  t.prototype.getWeekday = function () {
    return D(new Date(this.getTime()));
  };
  t.prototype.getTime = function () {
    return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond)).getTime();
  };
  t.prototype.getDay = function () {
    return this.day;
  };
  t.prototype.getMonth = function () {
    return this.month;
  };
  t.prototype.getYear = function () {
    return this.year;
  };
  t.prototype.addYears = function (e) {
    this.year += e;
  };
  t.prototype.addMonths = function (e) {
    this.month += e;
    if (this.month > 12) {
      var t = Math.floor(this.month / 12);
      var r = m(this.month, 12);
      this.month = r;
      this.year += t;
      if (this.month === 0) {
        this.month = 12;
        --this.year;
      }
    }
  };
  t.prototype.addWeekly = function (e, t) {
    if (t > this.getWeekday()) {
      this.day += -(this.getWeekday() + 1 + (6 - t)) + e * 7;
    } else {
      this.day += -(this.getWeekday() - t) + e * 7;
    }
    this.fixDay();
  };
  t.prototype.addDaily = function (e) {
    this.day += e;
    this.fixDay();
  };
  t.prototype.addHours = function (e, t, r) {
    for (t && (this.hour += Math.floor((23 - this.hour) / e) * e);;) {
      this.hour += e;
      var n = y(this.hour, 24);
      var i = n.div;
      var a = n.mod;
      if (i) {
        this.hour = a;
        this.addDaily(i);
      }
      if (g(r) || v(r, this.hour)) {
        break;
      }
    }
  };
  t.prototype.addMinutes = function (e, t, r, n) {
    for (t && (this.minute += Math.floor((1439 - (this.hour * 60 + this.minute)) / e) * e);;) {
      this.minute += e;
      var i = y(this.minute, 60);
      var a = i.div;
      var o = i.mod;
      if (a) {
        this.minute = o;
        this.addHours(a, false, r);
      }
      if ((g(r) || v(r, this.hour)) && (g(n) || v(n, this.minute))) {
        break;
      }
    }
  };
  t.prototype.addSeconds = function (e, t, r, n, i) {
    for (t && (this.second += Math.floor((86399 - (this.hour * 3600 + this.minute * 60 + this.second)) / e) * e);;) {
      this.second += e;
      var a = y(this.second, 60);
      var o = a.div;
      var s = a.mod;
      if (o) {
        this.second = s;
        this.addMinutes(o, false, r, n);
      }
      if ((g(r) || v(r, this.hour)) && (g(n) || v(n, this.minute)) && (g(i) || v(i, this.second))) {
        break;
      }
    }
  };
  t.prototype.fixDay = function () {
    if (!(this.day <= 28)) {
      var e = z(this.year, this.month - 1)[1];
      if (!(this.day <= e)) {
        while (this.day > e) {
          this.day -= e;
          ++this.month;
          if (this.month === 13 && (this.month = 1, ++this.year, this.year > k)) {
            return;
          }
          e = z(this.year, this.month - 1)[1];
        }
      }
    }
  };
  t.prototype.add = function (e, t) {
    var r = e.freq;
    var i = e.interval;
    var a = e.wkst;
    var o = e.byhour;
    var s = e.byminute;
    var u = e.bysecond;
    switch (r) {
      case n.YEARLY:
        return this.addYears(i);
      case n.MONTHLY:
        return this.addMonths(i);
      case n.WEEKLY:
        return this.addWeekly(i, a);
      case n.DAILY:
        return this.addDaily(i);
      case n.HOURLY:
        return this.addHours(i, t, o);
      case n.MINUTELY:
        return this.addMinutes(i, t, o, s);
      case n.SECONDLY:
        return this.addSeconds(i, t, o, s, u);
    }
  };
  return t;
}(ei);
function eo(e) {
  var t = [];
  var r = Object.keys(e);
  for (var n = 0, i = r; n < i.length; n++) {
    var a = i[n];
    if (!v(eK, a)) {
      t.push(a);
    }
    if (O(e[a]) && !E(e[a])) {
      t.push(a);
    }
  }
  if (t.length) {
    throw Error("Invalid options: " + t.join(", "));
  }
  return (0, q.Cl)({}, e);
}
function es(e) {
  var t = (0, q.Cl)((0, q.Cl)({}, eQ), eo(e));
  if (o(t.byeaster)) {
    t.freq = p3.YEARLY;
  }
  if (!o(t.freq) || !p3.FREQUENCIES[t.freq]) {
    throw Error(`Invalid frequency: ${t.freq} ${e.freq}`);
  }
  t.dtstart ||= new Date(new Date().setMilliseconds(0));
  if (o(t.wkst)) {
    if (!s(t.wkst)) {
      t.wkst = t.wkst.weekday;
    }
  } else {
    t.wkst = p3.MO.weekday;
  }
  if (o(t.bysetpos)) {
    if (s(t.bysetpos)) {
      t.bysetpos = [t.bysetpos];
    }
    for (var r = 0; r < t.bysetpos.length; r++) {
      var n = t.bysetpos[r];
      if (n === 0 || !(n >= -366) || !(n <= 366)) {
        throw Error("bysetpos must be between 1 and 366, or between -366 and -1");
      }
    }
  }
  if (!t.byweekno && !b(t.byweekno) && !b(t.byyearday) && !t.bymonthday && !b(t.bymonthday) && !o(t.byweekday) && !o(t.byeaster)) {
    switch (t.freq) {
      case p3.YEARLY:
        t.bymonth ||= t.dtstart.getUTCMonth() + 1;
        t.bymonthday = t.dtstart.getUTCDate();
        break;
      case p3.MONTHLY:
        t.bymonthday = t.dtstart.getUTCDate();
        break;
      case p3.WEEKLY:
        t.byweekday = [D(t.dtstart)];
    }
  }
  if (o(t.bymonth) && !l(t.bymonth)) {
    t.bymonth = [t.bymonth];
  }
  if (o(t.byyearday) && !l(t.byyearday) && s(t.byyearday)) {
    t.byyearday = [t.byyearday];
  }
  if (o(t.bymonthday)) {
    if (l(t.bymonthday)) {
      var i = [];
      var c = [];
      for (var r = 0; r < t.bymonthday.length; r++) {
        var n = t.bymonthday[r];
        if (n > 0) {
          i.push(n);
        } else if (n < 0) {
          c.push(n);
        }
      }
      t.bymonthday = i;
      t.bynmonthday = c;
    } else if (t.bymonthday < 0) {
      t.bynmonthday = [t.bymonthday];
      t.bymonthday = [];
    } else {
      t.bynmonthday = [];
      t.bymonthday = [t.bymonthday];
    }
  } else {
    t.bymonthday = [];
    t.bynmonthday = [];
  }
  if (o(t.byweekno) && !l(t.byweekno)) {
    t.byweekno = [t.byweekno];
  }
  if (o(t.byweekday)) {
    if (s(t.byweekday)) {
      t.byweekday = [t.byweekday];
      t.bynweekday = null;
    } else if (u(t.byweekday)) {
      t.byweekday = [a.fromStr(t.byweekday).weekday];
      t.bynweekday = null;
    } else if (t.byweekday instanceof a) {
      if (!t.byweekday.n || t.freq > p3.MONTHLY) {
        t.byweekday = [t.byweekday.weekday];
        t.bynweekday = null;
      } else {
        t.bynweekday = [[t.byweekday.weekday, t.byweekday.n]];
        t.byweekday = null;
      }
    } else {
      var d = [];
      var f = [];
      for (var r = 0; r < t.byweekday.length; r++) {
        var h = t.byweekday[r];
        if (s(h)) {
          d.push(h);
          continue;
        }
        if (u(h)) {
          d.push(a.fromStr(h).weekday);
          continue;
        }
        if (!h.n || t.freq > p3.MONTHLY) {
          d.push(h.weekday);
        } else {
          f.push([h.weekday, h.n]);
        }
      }
      t.byweekday = b(d) ? d : null;
      t.bynweekday = b(f) ? f : null;
    }
  } else {
    t.bynweekday = null;
  }
  if (o(t.byhour)) {
    if (s(t.byhour)) {
      t.byhour = [t.byhour];
    }
  } else {
    t.byhour = t.freq < p3.HOURLY ? [t.dtstart.getUTCHours()] : null;
  }
  if (o(t.byminute)) {
    if (s(t.byminute)) {
      t.byminute = [t.byminute];
    }
  } else {
    t.byminute = t.freq < p3.MINUTELY ? [t.dtstart.getUTCMinutes()] : null;
  }
  if (o(t.bysecond)) {
    if (s(t.bysecond)) {
      t.bysecond = [t.bysecond];
    }
  } else {
    t.bysecond = t.freq < p3.SECONDLY ? [t.dtstart.getUTCSeconds()] : null;
  }
  return {
    parsedOptions: t
  };
}
function eu(e) {
  var t = e.dtstart.getTime() % 1000;
  if (!V(e.freq)) {
    return [];
  }
  var r = [];
  e.byhour.forEach(function (n) {
    e.byminute.forEach(function (i) {
      e.bysecond.forEach(function (e) {
        r.push(new ei(n, i, e, t));
      });
    });
  });
  return r;
}
function el(e) {
  var t = e.split("\n").map(ed).filter(function (e) {
    return e !== null;
  });
  return (0, q.Cl)((0, q.Cl)({}, t[0]), t[1]);
}
function ec(e) {
  var t = {};
  var r = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(e);
  if (!r) {
    return t;
  }
  var n = r[1];
  var i = r[2];
  if (n) {
    t.tzid = n;
  }
  t.dtstart = L(i);
  return t;
}
function ed(e) {
  if (!(e = e.replace(/^\s+|\s+$/, "")).length) {
    return null;
  }
  var t = /^([A-Z]+?)[:;]/.exec(e.toUpperCase());
  if (!t) {
    return ef(e);
  }
  var r = t[1];
  switch (r.toUpperCase()) {
    case "RRULE":
    case "EXRULE":
      return ef(e);
    case "DTSTART":
      return ec(e);
    default:
      throw Error(`Unsupported RFC prop ${r} in ${e}`);
  }
}
function ef(e) {
  var t = ec(e.replace(/^RRULE:/i, ""));
  e.replace(/^(?:RRULE|EXRULE):/i, "").split(";").forEach(function (r) {
    var i = r.split("=");
    var a = i[0];
    var o = i[1];
    switch (a.toUpperCase()) {
      case "FREQ":
        t.freq = n[o.toUpperCase()];
        break;
      case "WKST":
        t.wkst = eX[o.toUpperCase()];
        break;
      case "COUNT":
      case "INTERVAL":
      case "BYSETPOS":
      case "BYMONTH":
      case "BYMONTHDAY":
      case "BYYEARDAY":
      case "BYWEEKNO":
      case "BYHOUR":
      case "BYMINUTE":
      case "BYSECOND":
        var s = eh(o);
        t[a.toLowerCase()] = s;
        break;
      case "BYWEEKDAY":
      case "BYDAY":
        t.byweekday = em(o);
        break;
      case "DTSTART":
      case "TZID":
        var u = ec(e);
        t.tzid = u.tzid;
        t.dtstart = u.dtstart;
        break;
      case "UNTIL":
        t.until = L(o);
        break;
      case "BYEASTER":
        t.byeaster = Number(o);
        break;
      default:
        throw Error("Unknown RRULE property '" + a + "'");
    }
  });
  return t;
}
function eh(e) {
  if (e.indexOf(",") !== -1) {
    return e.split(",").map(ep);
  } else {
    return ep(e);
  }
}
function ep(e) {
  if (/^[+-]?\d+$/.test(e)) {
    return Number(e);
  } else {
    return e;
  }
}
function em(e) {
  return e.split(",").map(function (e) {
    if (e.length === 2) {
      return eX[e];
    }
    var t = e.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
    if (!t || t.length < 3) {
      throw SyntaxError(`Invalid weekday string: ${e}`);
    }
    var r = Number(t[1]);
    return new a(eX[t[2]].weekday, r);
  });
}
var ey = function () {
  function e(e, t) {
    if (isNaN(e.getTime())) {
      throw RangeError("Invalid date passed to DateWithZone");
    }
    this.date = e;
    this.tzid = t;
  }
  Object.defineProperty(e.prototype, "isUTC", {
    get: function () {
      return !this.tzid || this.tzid.toUpperCase() === "UTC";
    },
    enumerable: false,
    configurable: true
  });
  e.prototype.toString = function () {
    var e = M(this.date.getTime(), this.isUTC);
    if (this.isUTC) {
      return `:${e}`;
    } else {
      return `;TZID=${this.tzid}:${e}`;
    }
  };
  e.prototype.getTime = function () {
    return this.date.getTime();
  };
  e.prototype.rezonedDate = function () {
    if (this.isUTC) {
      return this.date;
    } else {
      return F(this.date, this.tzid);
    }
  };
  return e;
}();
function eg(e) {
  var t = [];
  var r = "";
  for (var n = Object.keys(e), i = Object.keys(eQ), u = 0; u < n.length; u++) {
    if (n[u] !== "tzid" && v(i, n[u])) {
      var c = n[u].toUpperCase();
      var d = e[n[u]];
      var h = "";
      if (!!o(d) && (!l(d) || !!d.length)) {
        switch (c) {
          case "FREQ":
            h = p3.FREQUENCIES[e.freq];
            break;
          case "WKST":
            h = s(d) ? new a(d).toString() : d.toString();
            break;
          case "BYWEEKDAY":
            c = "BYDAY";
            h = f(d).map(function (e) {
              if (e instanceof a) {
                return e;
              } else if (l(e)) {
                return new a(e[0], e[1]);
              } else {
                return new a(e);
              }
            }).toString();
            break;
          case "DTSTART":
            r = eb(d, e.tzid);
            break;
          case "UNTIL":
            h = M(d, !e.tzid);
            break;
          default:
            if (l(d)) {
              var p = [];
              for (var m = 0; m < d.length; m++) {
                p[m] = String(d[m]);
              }
              h = p.toString();
            } else {
              h = String(d);
            }
        }
        if (h) {
          t.push([c, h]);
        }
      }
    }
  }
  var y = t.map(function (e) {
    var t = e[0];
    var r = e[1];
    return `${t}=${r.toString()}`;
  }).join(";");
  var g = "";
  if (y !== "") {
    g = `RRULE:${y}`;
  }
  return [r, g].filter(function (e) {
    return !!e;
  }).join("\n");
}
function eb(e, t) {
  if (e) {
    return "DTSTART" + new ey(new Date(e), t).toString();
  } else {
    return "";
  }
}
function ev(e, t) {
  if (Array.isArray(e)) {
    return !!Array.isArray(t) && e.length === t.length && e.every(function (e, r) {
      return e.getTime() === t[r].getTime();
    });
  } else if (e instanceof Date) {
    return t instanceof Date && e.getTime() === t.getTime();
  } else {
    return e === t;
  }
}
var ex = function () {
  function e() {
    this.all = false;
    this.before = [];
    this.after = [];
    this.between = [];
  }
  e.prototype._cacheAdd = function (e, t, r) {
    t &&= t instanceof Date ? P(t) : R(t);
    if (e === "all") {
      this.all = t;
    } else {
      r._value = t;
      this[e].push(r);
    }
  };
  e.prototype._cacheGet = function (e, t) {
    var r = false;
    var n = t ? Object.keys(t) : [];
    function i(e) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        if (!ev(t[i], e[i])) {
          return true;
        }
      }
      return false;
    }
    var a = this[e];
    if (e === "all") {
      r = this.all;
    } else if (l(a)) {
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!n.length || !i(s)) {
          r = s._value;
          break;
        }
      }
    }
    if (!r && this.all) {
      for (var u = new B(e, t), o = 0; o < this.all.length && u.accept(this.all[o]); o++);
      r = u.getValue();
      this._cacheAdd(e, r, t);
    }
    if (l(r)) {
      return R(r);
    } else if (r instanceof Date) {
      return P(r);
    } else {
      return r;
    }
  };
  return e;
}();
var ew = (0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)([], d(1, 31), true), d(2, 28), true), d(3, 31), true), d(4, 30), true), d(5, 31), true), d(6, 30), true), d(7, 31), true), d(8, 31), true), d(9, 30), true), d(10, 31), true), d(11, 30), true), d(12, 31), true), d(1, 7), true);
var e_ = (0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)([], d(1, 31), true), d(2, 29), true), d(3, 31), true), d(4, 30), true), d(5, 31), true), d(6, 30), true), d(7, 31), true), d(8, 31), true), d(9, 30), true), d(10, 31), true), d(11, 30), true), d(12, 31), true), d(1, 7), true);
var ek = c(1, 29);
var e$ = c(1, 30);
var eS = c(1, 31);
var eI = c(1, 32);
var eO = (0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)([], eI, true), e$, true), eI, true), eS, true), eI, true), eS, true), eI, true), eI, true), eS, true), eI, true), eS, true), eI, true), eI.slice(0, 7), true);
var eE = (0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)([], eI, true), ek, true), eI, true), eS, true), eI, true), eS, true), eI, true), eI, true), eS, true), eI, true), eS, true), eI, true), eI.slice(0, 7), true);
var ej = c(-28, 0);
var eU = c(-29, 0);
var eT = c(-30, 0);
var eA = c(-31, 0);
var eD = (0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)([], eA, true), eU, true), eA, true), eT, true), eA, true), eT, true), eA, true), eA, true), eT, true), eA, true), eT, true), eA, true), eA.slice(0, 7), true);
var ez = (0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)((0, q.fX)([], eA, true), ej, true), eA, true), eT, true), eA, true), eT, true), eA, true), eA, true), eT, true), eA, true), eT, true), eA, true), eA.slice(0, 7), true);
var eN = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
var eP = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
var eR = function () {
  var e = [];
  for (var t = 0; t < 55; t++) {
    e = e.concat(c(7));
  }
  return e;
}();
function eC(e, t) {
  var r;
  var n;
  var i = x(e, 1, 1);
  var a = I(e) ? 366 : 365;
  var o = I(e + 1) ? 366 : 365;
  var s = U(i);
  var u = D(i);
  var l = (0, q.Cl)((0, q.Cl)({
    yearlen: a,
    nextyearlen: o,
    yearordinal: s,
    yearweekday: u
  }, eM(e)), {
    wnomask: null
  });
  if (g(t.byweekno)) {
    return l;
  }
  l.wnomask = d(0, a + 7);
  var c = r = m(7 - u + t.wkst, 7);
  if (c >= 4) {
    c = 0;
    n = l.yearlen + m(u - t.wkst, 7);
  } else {
    n = a - c;
  }
  var f = Math.floor(Math.floor(n / 7) + m(n, 7) / 4);
  for (var h = 0; h < t.byweekno.length; h++) {
    var p = t.byweekno[h];
    if (p < 0) {
      p += f + 1;
    }
    if (p > 0 && p <= f) {
      var y = undefined;
      if (p > 1) {
        y = c + (p - 1) * 7;
        if (c !== r) {
          y -= 7 - r;
        }
      } else {
        y = c;
      }
      for (var b = 0; b < 7 && (l.wnomask[y] = 1, y++, l.wdaymask[y] !== t.wkst); b++);
    }
  }
  if (v(t.byweekno, 1)) {
    var y = c + f * 7;
    if (c !== r) {
      y -= 7 - r;
    }
    if (y < a) {
      for (var h = 0; h < 7 && (l.wnomask[y] = 1, y += 1, l.wdaymask[y] !== t.wkst); h++);
    }
  }
  if (c) {
    var w = undefined;
    if (v(t.byweekno, -1)) {
      w = -1;
    } else {
      var _ = D(x(e - 1, 1, 1));
      var k = m(7 - _.valueOf() + t.wkst, 7);
      var $ = I(e - 1) ? 366 : 365;
      var S = undefined;
      if (k >= 4) {
        k = 0;
        S = $ + m(_ - t.wkst, 7);
      } else {
        S = a - c;
      }
      w = Math.floor(52 + m(S, 7) / 4);
    }
    if (v(t.byweekno, w)) {
      for (var y = 0; y < c; y++) {
        l.wnomask[y] = 1;
      }
    }
  }
  return l;
}
function eM(e) {
  var t = I(e) ? 366 : 365;
  var r = D(x(e, 1, 1));
  if (t === 365) {
    return {
      mmask: ew,
      mdaymask: eE,
      nmdaymask: ez,
      wdaymask: eR.slice(r),
      mrange: eP
    };
  } else {
    return {
      mmask: e_,
      mdaymask: eO,
      nmdaymask: eD,
      wdaymask: eR.slice(r),
      mrange: eN
    };
  }
}
function eL(e, t, r, n, i, a) {
  var o = {
    lastyear: e,
    lastmonth: t,
    nwdaymask: []
  };
  var s = [];
  if (a.freq === p3.YEARLY) {
    if (g(a.bymonth)) {
      s = [[0, r]];
    } else {
      for (var u = 0; u < a.bymonth.length; u++) {
        t = a.bymonth[u];
        s.push(n.slice(t - 1, t + 1));
      }
    }
  } else if (a.freq === p3.MONTHLY) {
    s = [n.slice(t - 1, t + 1)];
  }
  if (g(s)) {
    return o;
  }
  o.nwdaymask = d(0, r);
  for (var u = 0; u < s.length; u++) {
    var l = s[u];
    var c = l[0];
    var f = l[1] - 1;
    for (var h = 0; h < a.bynweekday.length; h++) {
      var p = undefined;
      var y = a.bynweekday[h];
      var b = y[0];
      var v = y[1];
      if (v < 0) {
        p = f + (v + 1) * 7;
        p -= m(i[p] - b, 7);
      } else {
        p = c + (v - 1) * 7;
        p += m(7 - i[p] + b, 7);
      }
      if (c <= p && p <= f) {
        o.nwdaymask[p] = 1;
      }
    }
  }
  return o;
}
function eZ(e, t = 0) {
  var r = e % 19;
  var n = Math.floor(e / 100);
  var i = e % 100;
  var a = Math.floor(n / 4);
  var o = n % 4;
  var s = Math.floor((n + 8) / 25);
  var u = Math.floor((n - s + 1) / 3);
  var l = Math.floor(r * 19 + n - a - u + 15) % 30;
  var c = Math.floor(32 + o * 2 + Math.floor(i / 4) * 2 - l - i % 4) % 7;
  var d = Math.floor((r + l * 11 + c * 22) / 451);
  return [Math.ceil((Date.UTC(e, Math.floor((l + c - d * 7 + 114) / 31) - 1, (l + c - d * 7 + 114) % 31 + 1 + t) - Date.UTC(e, 0, 1)) / 86400000)];
}
let eF = function () {
  function e(e) {
    this.options = e;
  }
  e.prototype.rebuild = function (e, t) {
    var r = this.options;
    if (e !== this.lastyear) {
      this.yearinfo = eC(e, r);
    }
    if (b(r.bynweekday) && (t !== this.lastmonth || e !== this.lastyear)) {
      var n = this.yearinfo;
      var i = n.yearlen;
      var a = n.mrange;
      var s = n.wdaymask;
      this.monthinfo = eL(e, t, i, a, s, r);
    }
    if (o(r.byeaster)) {
      this.eastermask = eZ(e, r.byeaster);
    }
  };
  Object.defineProperty(e.prototype, "lastyear", {
    get: function () {
      if (this.monthinfo) {
        return this.monthinfo.lastyear;
      } else {
        return null;
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(e.prototype, "lastmonth", {
    get: function () {
      if (this.monthinfo) {
        return this.monthinfo.lastmonth;
      } else {
        return null;
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(e.prototype, "yearlen", {
    get: function () {
      return this.yearinfo.yearlen;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(e.prototype, "yearordinal", {
    get: function () {
      return this.yearinfo.yearordinal;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(e.prototype, "mrange", {
    get: function () {
      return this.yearinfo.mrange;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(e.prototype, "wdaymask", {
    get: function () {
      return this.yearinfo.wdaymask;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(e.prototype, "mmask", {
    get: function () {
      return this.yearinfo.mmask;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(e.prototype, "wnomask", {
    get: function () {
      return this.yearinfo.wnomask;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(e.prototype, "nwdaymask", {
    get: function () {
      if (this.monthinfo) {
        return this.monthinfo.nwdaymask;
      } else {
        return [];
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(e.prototype, "nextyearlen", {
    get: function () {
      return this.yearinfo.nextyearlen;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(e.prototype, "mdaymask", {
    get: function () {
      return this.yearinfo.mdaymask;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(e.prototype, "nmdaymask", {
    get: function () {
      return this.yearinfo.nmdaymask;
    },
    enumerable: false,
    configurable: true
  });
  e.prototype.ydayset = function () {
    return [c(this.yearlen), 0, this.yearlen];
  };
  e.prototype.mdayset = function (e, t) {
    var r = this.mrange[t - 1];
    for (var n = this.mrange[t], i = d(null, this.yearlen), a = r; a < n; a++) {
      i[a] = a;
    }
    return [i, r, n];
  };
  e.prototype.wdayset = function (e, t, r) {
    for (var n = d(null, this.yearlen + 7), i = U(x(e, t, r)) - this.yearordinal, a = i, o = 0; o < 7 && (n[i] = i, ++i, this.wdaymask[i] !== this.options.wkst); o++);
    return [n, a, i];
  };
  e.prototype.ddayset = function (e, t, r) {
    var n = d(null, this.yearlen);
    var i = U(x(e, t, r)) - this.yearordinal;
    n[i] = i;
    return [n, i, i + 1];
  };
  e.prototype.htimeset = function (e, t, r, n) {
    var i = this;
    var a = [];
    this.options.byminute.forEach(function (t) {
      a = a.concat(i.mtimeset(e, t, r, n));
    });
    C(a);
    return a;
  };
  e.prototype.mtimeset = function (e, t, r, n) {
    var i = this.options.bysecond.map(function (r) {
      return new ei(e, t, r, n);
    });
    C(i);
    return i;
  };
  e.prototype.stimeset = function (e, t, r, n) {
    return [new ei(e, t, r, n)];
  };
  e.prototype.getdayset = function (e) {
    switch (e) {
      case n.YEARLY:
        return this.ydayset.bind(this);
      case n.MONTHLY:
        return this.mdayset.bind(this);
      case n.WEEKLY:
        return this.wdayset.bind(this);
      case n.DAILY:
      default:
        return this.ddayset.bind(this);
    }
  };
  e.prototype.gettimeset = function (e) {
    switch (e) {
      case n.HOURLY:
        return this.htimeset.bind(this);
      case n.MINUTELY:
        return this.mtimeset.bind(this);
      case n.SECONDLY:
        return this.stimeset.bind(this);
    }
  };
  return e;
}();
function eB(e, t, r, n, i, a) {
  var s = [];
  for (var u = 0; u < e.length; u++) {
    var l = undefined;
    var c = undefined;
    var d = e[u];
    if (d < 0) {
      l = Math.floor(d / t.length);
      c = m(d, t.length);
    } else {
      l = Math.floor((d - 1) / t.length);
      c = m(d - 1, t.length);
    }
    var f = [];
    for (var h = r; h < n; h++) {
      var p = a[h];
      if (o(p)) {
        f.push(p);
      }
    }
    var y = undefined;
    y = l < 0 ? f.slice(l)[0] : f[l];
    var g = t[c];
    var b = N(T(i.yearordinal + y), g);
    if (!v(s, b)) {
      s.push(b);
    }
  }
  C(s);
  return s;
}
function eq(e, t) {
  var r = t.dtstart;
  var n = t.freq;
  var i = t.interval;
  var a = t.until;
  var s = t.bysetpos;
  var u = t.count;
  if (u === 0 || i === 0) {
    return eG(e);
  }
  var l = ea.fromDate(r);
  var c = new eF(t);
  c.rebuild(l.year, l.month);
  var d = eJ(c, l, t);
  for (;;) {
    var f = c.getdayset(n)(l.year, l.month, l.day);
    var h = f[0];
    var p = f[1];
    var m = f[2];
    var y = eH(h, p, m, c, t);
    if (b(s)) {
      for (var g = eB(s, d, p, m, c, h), v = 0; v < g.length; v++) {
        var x = g[v];
        if (a && x > a) {
          return eG(e);
        }
        if (x >= r) {
          var w = eY(x, t);
          if (!e.accept(w) || u && ! --u) {
            return eG(e);
          }
        }
      }
    } else {
      for (var v = p; v < m; v++) {
        var _ = h[v];
        if (o(_)) {
          var $ = T(c.yearordinal + _);
          for (var S = 0; S < d.length; S++) {
            var x = N($, d[S]);
            if (a && x > a) {
              return eG(e);
            }
            if (x >= r) {
              var w = eY(x, t);
              if (!e.accept(w) || u && ! --u) {
                return eG(e);
              }
            }
          }
        }
      }
    }
    if (t.interval === 0 || (l.add(t, y), l.year > k)) {
      return eG(e);
    }
    if (!V(n)) {
      d = c.gettimeset(n)(l.hour, l.minute, l.second, 0);
    }
    c.rebuild(l.year, l.month);
  }
}
function eW(e, t, r) {
  var n = r.bymonth;
  var i = r.byweekno;
  var a = r.byweekday;
  var o = r.byeaster;
  var s = r.bymonthday;
  var u = r.bynmonthday;
  var l = r.byyearday;
  return b(n) && !v(n, e.mmask[t]) || b(i) && !e.wnomask[t] || b(a) && !v(a, e.wdaymask[t]) || b(e.nwdaymask) && !e.nwdaymask[t] || o !== null && !v(e.eastermask, t) || (b(s) || b(u)) && !v(s, e.mdaymask[t]) && !v(u, e.nmdaymask[t]) || b(l) && (t < e.yearlen && !v(l, t + 1) && !v(l, -e.yearlen + t) || t >= e.yearlen && !v(l, t + 1 - e.yearlen) && !v(l, -e.nextyearlen + t - e.yearlen));
}
function eY(e, t) {
  return new ey(e, t.tzid).rezonedDate();
}
function eG(e) {
  return e.getValue();
}
function eH(e, t, r, n, i) {
  var a = false;
  for (var o = t; o < r; o++) {
    var s = e[o];
    if (a = eW(n, s, i)) {
      e[s] = null;
    }
  }
  return a;
}
function eJ(e, t, r) {
  var n = r.freq;
  var i = r.byhour;
  var a = r.byminute;
  var o = r.bysecond;
  if (V(n)) {
    return eu(r);
  } else if (n >= p3.HOURLY && b(i) && !v(i, t.hour) || n >= p3.MINUTELY && b(a) && !v(a, t.minute) || n >= p3.SECONDLY && b(o) && !v(o, t.second)) {
    return [];
  } else {
    return e.gettimeset(n)(t.hour, t.minute, t.second, t.millisecond);
  }
}
var eX = {
  MO: new a(0),
  TU: new a(1),
  WE: new a(2),
  TH: new a(3),
  FR: new a(4),
  SA: new a(5),
  SU: new a(6)
};
var eQ = {
  freq: n.YEARLY,
  dtstart: null,
  interval: 1,
  wkst: eX.MO,
  count: null,
  until: null,
  tzid: null,
  bysetpos: null,
  bymonth: null,
  bymonthday: null,
  bynmonthday: null,
  byyearday: null,
  byweekno: null,
  byweekday: null,
  bynweekday: null,
  byhour: null,
  byminute: null,
  bysecond: null,
  byeaster: null
};
var eK = Object.keys(eQ);
export var p3 = function () {
  function e(e = {}, t = false) {
    this._cache = t ? null : new ex();
    this.origOptions = eo(e);
    var r = es(e).parsedOptions;
    this.options = r;
  }
  e.parseText = function (e, t) {
    return K(e, t);
  };
  e.fromText = function (e, t) {
    return ee(e, t);
  };
  e.fromString = function (t) {
    return new e(e.parseString(t) || undefined);
  };
  e.prototype._iter = function (e) {
    return eq(e, this.options);
  };
  e.prototype._cacheGet = function (e, t) {
    return !!this._cache && this._cache._cacheGet(e, t);
  };
  e.prototype._cacheAdd = function (e, t, r) {
    if (this._cache) {
      return this._cache._cacheAdd(e, t, r);
    }
  };
  e.prototype.all = function (e) {
    if (e) {
      return this._iter(new W("all", {}, e));
    }
    var t = this._cacheGet("all");
    if (t === false) {
      t = this._iter(new B("all", {}));
      this._cacheAdd("all", t);
    }
    return t;
  };
  e.prototype.between = function (e, t, r = false, n) {
    if (!E(e) || !E(t)) {
      throw Error("Invalid date passed in to RRule.between");
    }
    var i = {
      before: t,
      after: e,
      inc: r
    };
    if (n) {
      return this._iter(new W("between", i, n));
    }
    var a = this._cacheGet("between", i);
    if (a === false) {
      a = this._iter(new B("between", i));
      this._cacheAdd("between", a, i);
    }
    return a;
  };
  e.prototype.before = function (e, t = false) {
    if (!E(e)) {
      throw Error("Invalid date passed in to RRule.before");
    }
    var r = {
      dt: e,
      inc: t
    };
    var n = this._cacheGet("before", r);
    if (n === false) {
      n = this._iter(new B("before", r));
      this._cacheAdd("before", n, r);
    }
    return n;
  };
  e.prototype.after = function (e, t = false) {
    if (!E(e)) {
      throw Error("Invalid date passed in to RRule.after");
    }
    var r = {
      dt: e,
      inc: t
    };
    var n = this._cacheGet("after", r);
    if (n === false) {
      n = this._iter(new B("after", r));
      this._cacheAdd("after", n, r);
    }
    return n;
  };
  e.prototype.count = function () {
    return this.all().length;
  };
  e.prototype.toString = function () {
    return eg(this.origOptions);
  };
  e.prototype.toText = function (e, t, r) {
    return er(this, e, t, r);
  };
  e.prototype.isFullyConvertibleToText = function () {
    return en(this);
  };
  e.prototype.clone = function () {
    return new e(this.origOptions);
  };
  e.FREQUENCIES = ["YEARLY", "MONTHLY", "WEEKLY", "DAILY", "HOURLY", "MINUTELY", "SECONDLY"];
  e.YEARLY = n.YEARLY;
  e.MONTHLY = n.MONTHLY;
  e.WEEKLY = n.WEEKLY;
  e.DAILY = n.DAILY;
  e.HOURLY = n.HOURLY;
  e.MINUTELY = n.MINUTELY;
  e.SECONDLY = n.SECONDLY;
  e.MO = eX.MO;
  e.TU = eX.TU;
  e.WE = eX.WE;
  e.TH = eX.TH;
  e.FR = eX.FR;
  e.SA = eX.SA;
  e.SU = eX.SU;
  e.parseString = el;
  e.optionsToString = eg;
  return e;
}();
function e0(e, t, r, n, i, a) {
  var o = {};
  var s = e.accept;
  function u(e, t) {
    r.forEach(function (r) {
      r.between(e, t, true).forEach(function (e) {
        o[Number(e)] = true;
      });
    });
  }
  i.forEach(function (e) {
    o[Number(new ey(e, a).rezonedDate())] = true;
  });
  e.accept = function (e) {
    var t = Number(e);
    if (isNaN(t)) {
      return s.call(this, e);
    } else {
      return !!o[t] || (u(new Date(t - 1), new Date(t + 1)), !!o[t]) || (o[t] = true, s.call(this, e));
    }
  };
  if (e.method === "between") {
    u(e.args.after, e.args.before);
    e.accept = function (e) {
      var t = Number(e);
      return !!o[t] || (o[t] = true, s.call(this, e));
    };
  }
  for (var l = 0; l < n.length; l++) {
    var c = new ey(n[l], a).rezonedDate();
    if (!e.accept(new Date(c.getTime()))) {
      break;
    }
  }
  t.forEach(function (t) {
    eq(e, t.options);
  });
  var d = e._result;
  C(d);
  switch (e.method) {
    case "all":
    case "between":
      return d;
    case "before":
      return d.length && d[d.length - 1] || null;
    default:
      return d.length && d[0] || null;
  }
}
var e1 = {
  dtstart: null,
  cache: false,
  unfold: false,
  forceset: false,
  compatible: false,
  tzid: null
};
function e6(e, t) {
  var r = [];
  var n = [];
  var i = [];
  var a = [];
  var o = ec(e);
  var s = o.dtstart;
  var u = o.tzid;
  e7(e, t.unfold).forEach(function (e) {
    if (e) {
      var o = e9(e);
      var s = o.name;
      var l = o.parms;
      var c = o.value;
      switch (s.toUpperCase()) {
        case "RRULE":
          if (l.length) {
            throw Error(`unsupported RRULE parm: ${l.join(",")}`);
          }
          r.push(el(e));
          break;
        case "RDATE":
          var d = /RDATE(?:;TZID=([^:=]+))?/i.exec(e) ?? [];
          var f = d[1];
          if (f && !u) {
            u = f;
          }
          n = n.concat(tt(c, l));
          break;
        case "EXRULE":
          if (l.length) {
            throw Error(`unsupported EXRULE parm: ${l.join(",")}`);
          }
          i.push(el(c));
          break;
        case "EXDATE":
          a = a.concat(tt(c, l));
          break;
        case "DTSTART":
          break;
        default:
          throw Error("unsupported property: " + s);
      }
    }
  });
  return {
    dtstart: s,
    tzid: u,
    rrulevals: r,
    rdatevals: n,
    exrulevals: i,
    exdatevals: a
  };
}
function e4(e, t) {
  var r = e6(e, t);
  var n = r.rrulevals;
  var i = r.rdatevals;
  var a = r.exrulevals;
  var o = r.exdatevals;
  var s = r.dtstart;
  var u = r.tzid;
  var l = t.cache === false;
  if (t.compatible) {
    t.forceset = true;
    t.unfold = true;
  }
  if (t.forceset || n.length > 1 || i.length || a.length || o.length) {
    var c = new tn(l);
    c.dtstart(s);
    c.tzid(u || undefined);
    n.forEach(function (e) {
      c.rrule(new p3(e3(e, s, u), l));
    });
    i.forEach(function (e) {
      c.rdate(e);
    });
    a.forEach(function (e) {
      c.exrule(new p3(e3(e, s, u), l));
    });
    o.forEach(function (e) {
      c.exdate(e);
    });
    if (t.compatible && t.dtstart) {
      c.rdate(s);
    }
    return c;
  }
  var d = n[0] || {};
  return new p3(e3(d, d.dtstart || t.dtstart || s, d.tzid || t.tzid || u), l);
}
function e2(e, t = {}) {
  return e4(e, e5(t));
}
function e3(e, t, r) {
  return (0, q.Cl)((0, q.Cl)({}, e), {
    dtstart: t,
    tzid: r
  });
}
function e5(e) {
  var t = [];
  var r = Object.keys(e);
  var n = Object.keys(e1);
  r.forEach(function (e) {
    if (!v(n, e)) {
      t.push(e);
    }
  });
  if (t.length) {
    throw Error("Invalid options: " + t.join(", "));
  }
  return (0, q.Cl)((0, q.Cl)({}, e1), e);
}
function e8(e) {
  if (e.indexOf(":") === -1) {
    return {
      name: "RRULE",
      value: e
    };
  }
  var t = p(e, ":", 1);
  return {
    name: t[0],
    value: t[1]
  };
}
function e9(e) {
  var t = e8(e);
  var r = t.name;
  var n = t.value;
  var i = r.split(";");
  if (!i) {
    throw Error("empty property name");
  }
  return {
    name: i[0].toUpperCase(),
    parms: i.slice(1),
    value: n
  };
}
function e7(e, t = false) {
  if (!(e = e && e.trim())) {
    throw Error("Invalid empty string");
  }
  if (!t) {
    return e.split(/\s/);
  }
  for (var r = e.split("\n"), n = 0; n < r.length;) {
    var i = r[n] = r[n].replace(/\s+$/g, "");
    if (i) {
      if (n > 0 && i[0] === " ") {
        r[n - 1] += i.slice(1);
        r.splice(n, 1);
      } else {
        n += 1;
      }
    } else {
      r.splice(n, 1);
    }
  }
  return r;
}
function te(e) {
  e.forEach(function (e) {
    if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(e)) {
      throw Error("unsupported RDATE/EXDATE parm: " + e);
    }
  });
}
function tt(e, t) {
  te(t);
  return e.split(",").map(function (e) {
    return L(e);
  });
}
function tr(e) {
  var t = this;
  return function (r) {
    if (r !== undefined) {
      t[`_${e}`] = r;
    }
    if (t[`_${e}`] !== undefined) {
      return t[`_${e}`];
    }
    for (var n = 0; n < t._rrule.length; n++) {
      var i = t._rrule[n].origOptions[e];
      if (i) {
        return i;
      }
    }
  };
}
var tn = function (e) {
  function t(t = false) {
    var r = e.call(this, {}, t) || this;
    r.dtstart = tr.apply(r, ["dtstart"]);
    r.tzid = tr.apply(r, ["tzid"]);
    r._rrule = [];
    r._rdate = [];
    r._exrule = [];
    r._exdate = [];
    return r;
  }
  (0, q.C6)(t, e);
  t.prototype._iter = function (e) {
    return e0(e, this._rrule, this._exrule, this._rdate, this._exdate, this.tzid());
  };
  t.prototype.rrule = function (e) {
    ti(e, this._rrule);
  };
  t.prototype.exrule = function (e) {
    ti(e, this._exrule);
  };
  t.prototype.rdate = function (e) {
    ta(e, this._rdate);
  };
  t.prototype.exdate = function (e) {
    ta(e, this._exdate);
  };
  t.prototype.rrules = function () {
    return this._rrule.map(function (e) {
      return e2(e.toString());
    });
  };
  t.prototype.exrules = function () {
    return this._exrule.map(function (e) {
      return e2(e.toString());
    });
  };
  t.prototype.rdates = function () {
    return this._rdate.map(function (e) {
      return new Date(e.getTime());
    });
  };
  t.prototype.exdates = function () {
    return this._exdate.map(function (e) {
      return new Date(e.getTime());
    });
  };
  t.prototype.valueOf = function () {
    var e = [];
    if (!this._rrule.length && this._dtstart) {
      e = e.concat(eg({
        dtstart: this._dtstart
      }));
    }
    this._rrule.forEach(function (t) {
      e = e.concat(t.toString().split("\n"));
    });
    this._exrule.forEach(function (t) {
      e = e.concat(t.toString().split("\n").map(function (e) {
        return e.replace(/^RRULE:/, "EXRULE:");
      }).filter(function (e) {
        return !/^DTSTART/.test(e);
      }));
    });
    if (this._rdate.length) {
      e.push(to("RDATE", this._rdate, this.tzid()));
    }
    if (this._exdate.length) {
      e.push(to("EXDATE", this._exdate, this.tzid()));
    }
    return e;
  };
  t.prototype.toString = function () {
    return this.valueOf().join("\n");
  };
  t.prototype.clone = function () {
    var e = new t(!!this._cache);
    this._rrule.forEach(function (t) {
      return e.rrule(t.clone());
    });
    this._exrule.forEach(function (t) {
      return e.exrule(t.clone());
    });
    this._rdate.forEach(function (t) {
      return e.rdate(new Date(t.getTime()));
    });
    this._exdate.forEach(function (t) {
      return e.exdate(new Date(t.getTime()));
    });
    return e;
  };
  return t;
}(p3);
function ti(e, t) {
  if (!(e instanceof p3)) {
    throw TypeError(String(e) + " is not RRule instance");
  }
  if (!v(t.map(String), String(e))) {
    t.push(e);
  }
}
function ta(e, t) {
  if (!(e instanceof Date)) {
    throw TypeError(String(e) + " is not Date instance");
  }
  if (!v(t.map(Number), Number(e))) {
    t.push(e);
    C(t);
  }
}
function to(e, t, r) {
  var n = !r || r.toUpperCase() === "UTC";
  var i = n ? `${e}:` : `${e};TZID=${r}:`;
  var a = t.map(function (e) {
    return M(e.valueOf(), n);
  }).join(",");
  return `${i}${a}`;
}