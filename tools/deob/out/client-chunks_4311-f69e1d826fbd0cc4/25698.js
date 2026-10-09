var n = require("./84377.js");
var i = require("./61060.js");
var a = require("./15653.js");
var o = require("./25936.js");
var s = require("./913.js");
function u(e, t) {
  let r = (0, s.a)(e, t?.in);
  return (0, a.m)(r, (0, o.D)(r)) + 1;
}
var l = require("./97480.js");
var c = require("./47556.js");
var d = require("./71033.js");
var f = require("./35061.js");
function h(e, t) {
  return (e < 0 ? "-" : "") + Math.abs(e).toString().padStart(t, "0");
}
let p = {
  y(e, t) {
    let r = e.getFullYear();
    let n = r > 0 ? r : 1 - r;
    return h(t === "yy" ? n % 100 : n, t.length);
  },
  M(e, t) {
    let r = e.getMonth();
    if (t === "M") {
      return String(r + 1);
    } else {
      return h(r + 1, 2);
    }
  },
  d: (e, t) => h(e.getDate(), t.length),
  a(e, t) {
    let r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      default:
        if (r === "am") {
          return "a.m.";
        } else {
          return "p.m.";
        }
    }
  },
  h: (e, t) => h(e.getHours() % 12 || 12, t.length),
  H: (e, t) => h(e.getHours(), t.length),
  m: (e, t) => h(e.getMinutes(), t.length),
  s: (e, t) => h(e.getSeconds(), t.length),
  S(e, t) {
    let r = t.length;
    return h(Math.trunc(e.getMilliseconds() * Math.pow(10, r - 3)), t.length);
  }
};
let m = "midnight";
let y = "noon";
let g = "morning";
let b = "afternoon";
let v = "evening";
let x = "night";
let w = {
  G: function (e, t, r) {
    let n = +(e.getFullYear() > 0);
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(n, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(n, {
          width: "narrow"
        });
      default:
        return r.era(n, {
          width: "wide"
        });
    }
  },
  y: function (e, t, r) {
    if (t === "yo") {
      let t = e.getFullYear();
      let n = t > 0 ? t : 1 - t;
      return r.ordinalNumber(n, {
        unit: "year"
      });
    }
    return p.y(e, t);
  },
  Y: function (e, t, r, n) {
    let i = (0, f.h)(e, n);
    let a = i > 0 ? i : 1 - i;
    if (t === "YY") {
      return h(a % 100, 2);
    } else if (t === "Yo") {
      return r.ordinalNumber(a, {
        unit: "year"
      });
    } else {
      return h(a, t.length);
    }
  },
  R: function (e, t) {
    return h((0, c.p)(e), t.length);
  },
  u: function (e, t) {
    return h(e.getFullYear(), t.length);
  },
  Q: function (e, t, r) {
    let n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(n);
      case "QQ":
        return h(n, 2);
      case "Qo":
        return r.ordinalNumber(n, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function (e, t, r) {
    let n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(n);
      case "qq":
        return h(n, 2);
      case "qo":
        return r.ordinalNumber(n, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return r.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function (e, t, r) {
    let n = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return p.M(e, t);
      case "Mo":
        return r.ordinalNumber(n + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(n, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.month(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function (e, t, r) {
    let n = e.getMonth();
    switch (t) {
      case "L":
        return String(n + 1);
      case "LL":
        return h(n + 1, 2);
      case "Lo":
        return r.ordinalNumber(n + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(n, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return r.month(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function (e, t, r, n) {
    let i = (0, d.N)(e, n);
    if (t === "wo") {
      return r.ordinalNumber(i, {
        unit: "week"
      });
    } else {
      return h(i, t.length);
    }
  },
  I: function (e, t, r) {
    let n = (0, l.s)(e);
    if (t === "Io") {
      return r.ordinalNumber(n, {
        unit: "week"
      });
    } else {
      return h(n, t.length);
    }
  },
  d: function (e, t, r) {
    if (t === "do") {
      return r.ordinalNumber(e.getDate(), {
        unit: "date"
      });
    } else {
      return p.d(e, t);
    }
  },
  D: function (e, t, r) {
    let n = u(e);
    if (t === "Do") {
      return r.ordinalNumber(n, {
        unit: "dayOfYear"
      });
    } else {
      return h(n, t.length);
    }
  },
  E: function (e, t, r) {
    let n = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function (e, t, r, n) {
    let i = e.getDay();
    let a = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return h(a, 2);
      case "eo":
        return r.ordinalNumber(a, {
          unit: "day"
        });
      case "eee":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function (e, t, r, n) {
    let i = e.getDay();
    let a = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return h(a, t.length);
      case "co":
        return r.ordinalNumber(a, {
          unit: "day"
        });
      case "ccc":
        return r.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(i, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(i, {
          width: "short",
          context: "standalone"
        });
      default:
        return r.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function (e, t, r) {
    let n = e.getDay();
    let i = n === 0 ? 7 : n;
    switch (t) {
      case "i":
        return String(i);
      case "ii":
        return h(i, t.length);
      case "io":
        return r.ordinalNumber(i, {
          unit: "day"
        });
      case "iii":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function (e, t, r) {
    let n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function (e, t, r) {
    let n;
    let i = e.getHours();
    n = i === 12 ? y : i === 0 ? m : i / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "b":
      case "bb":
        return r.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function (e, t, r) {
    let n;
    let i = e.getHours();
    n = i >= 17 ? v : i >= 12 ? b : i >= 4 ? g : x;
    switch (t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function (e, t, r) {
    if (t === "ho") {
      let t = e.getHours() % 12;
      if (t === 0) {
        t = 12;
      }
      return r.ordinalNumber(t, {
        unit: "hour"
      });
    }
    return p.h(e, t);
  },
  H: function (e, t, r) {
    if (t === "Ho") {
      return r.ordinalNumber(e.getHours(), {
        unit: "hour"
      });
    } else {
      return p.H(e, t);
    }
  },
  K: function (e, t, r) {
    let n = e.getHours() % 12;
    if (t === "Ko") {
      return r.ordinalNumber(n, {
        unit: "hour"
      });
    } else {
      return h(n, t.length);
    }
  },
  k: function (e, t, r) {
    let n = e.getHours();
    if (n === 0) {
      n = 24;
    }
    if (t === "ko") {
      return r.ordinalNumber(n, {
        unit: "hour"
      });
    } else {
      return h(n, t.length);
    }
  },
  m: function (e, t, r) {
    if (t === "mo") {
      return r.ordinalNumber(e.getMinutes(), {
        unit: "minute"
      });
    } else {
      return p.m(e, t);
    }
  },
  s: function (e, t, r) {
    if (t === "so") {
      return r.ordinalNumber(e.getSeconds(), {
        unit: "second"
      });
    } else {
      return p.s(e, t);
    }
  },
  S: function (e, t) {
    return p.S(e, t);
  },
  X: function (e, t, r) {
    let n = e.getTimezoneOffset();
    if (n === 0) {
      return "Z";
    }
    switch (t) {
      case "X":
        return k(n);
      case "XXXX":
      case "XX":
        return $(n);
      default:
        return $(n, ":");
    }
  },
  x: function (e, t, r) {
    let n = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return k(n);
      case "xxxx":
      case "xx":
        return $(n);
      default:
        return $(n, ":");
    }
  },
  O: function (e, t, r) {
    let n = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + _(n, ":");
      default:
        return "GMT" + $(n, ":");
    }
  },
  z: function (e, t, r) {
    let n = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + _(n, ":");
      default:
        return "GMT" + $(n, ":");
    }
  },
  t: function (e, t, r) {
    return h(Math.trunc(e / 1000), t.length);
  },
  T: function (e, t, r) {
    return h(+e, t.length);
  }
};
function _(e, t = "") {
  let r = e > 0 ? "-" : "+";
  let n = Math.abs(e);
  let i = Math.trunc(n / 60);
  let a = n % 60;
  if (a === 0) {
    return r + String(i);
  } else {
    return r + String(i) + t + h(a, 2);
  }
}
function k(e, t) {
  if (e % 60 == 0) {
    return (e > 0 ? "-" : "+") + h(Math.abs(e) / 60, 2);
  } else {
    return $(e, t);
  }
}
function $(e, t = "") {
  let r = e > 0 ? "-" : "+";
  let n = Math.abs(e);
  return r + h(Math.trunc(n / 60), 2) + t + h(n % 60, 2);
}
var S = require("./65070.js");
var I = require("./52435.js");
var O = require("./90094.js");
let E = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
let j = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
let U = /^'([^]*?)'?$/;
let T = /''/g;
let A = /[a-zA-Z]/;
export function GP(e, t, r) {
  let a = (0, i.q)();
  let o = r?.locale ?? a.locale ?? n.c;
  let u = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1;
  let l = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0;
  let c = (0, s.a)(e, r?.in);
  if (!(0, O.f)(c)) {
    throw RangeError("Invalid time value");
  }
  let d = t.match(j).map(e => {
    let t = e[0];
    if (t === "p" || t === "P") {
      return (0, S.m[t])(e, o.formatLong);
    } else {
      return e;
    }
  }).join("").match(E).map(e => {
    if (e === "''") {
      return {
        isToken: false,
        value: "'"
      };
    }
    let t = e[0];
    if (t === "'") {
      return {
        isToken: false,
        value: z(e)
      };
    }
    if (w[t]) {
      return {
        isToken: true,
        value: e
      };
    }
    if (t.match(A)) {
      throw RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
    }
    return {
      isToken: false,
      value: e
    };
  });
  if (o.localize.preprocessor) {
    d = o.localize.preprocessor(c, d);
  }
  let f = {
    firstWeekContainsDate: u,
    weekStartsOn: l,
    locale: o
  };
  return d.map(n => {
    if (!n.isToken) {
      return n.value;
    }
    let i = n.value;
    if (!r?.useAdditionalWeekYearTokens && (0, I.xM)(i) || !r?.useAdditionalDayOfYearTokens && (0, I.ef)(i)) {
      (0, I.Ss)(i, t, String(e));
    }
    return (0, w[i[0]])(c, i, o.localize, f);
  }).join("");
}
function z(e) {
  let t = e.match(U);
  if (t) {
    return t[1].replace(T, "'");
  } else {
    return e;
  }
}