var n = require("./84377.js");
var i = require("./65070.js");
var a = require("./52435.js");
var o = require("./22461.js");
var s = require("./61060.js");
function u() {
  return Object.assign({}, (0, s.q)());
}
var l = require("./913.js");
function c(e, t) {
  let r = d(t) ? new t(0) : (0, o.w)(t, 0);
  r.setFullYear(e.getFullYear(), e.getMonth(), e.getDate());
  r.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
  return r;
}
function d(e) {
  return typeof e == "function" && e.prototype?.constructor === e;
}
let f = 10;
class h {
  validate(e, t) {
    return true;
  }
  constructor() {
    this.subPriority = 0;
  }
}
class p extends h {
  constructor(e, t, r, n, i) {
    super();
    this.value = e;
    this.validateValue = t;
    this.setValue = r;
    this.priority = n;
    if (i) {
      this.subPriority = i;
    }
  }
  validate(e, t) {
    return this.validateValue(e, this.value, t);
  }
  set(e, t, r) {
    return this.setValue(e, t, this.value, r);
  }
}
class m extends h {
  constructor(e, t) {
    super();
    this.priority = f;
    this.subPriority = -1;
    this.context = e || (e => (0, o.w)(t, e));
  }
  set(e, t) {
    if (t.timestampIsSet) {
      return e;
    } else {
      return (0, o.w)(e, c(e, this.context));
    }
  }
}
class y {
  run(e, t, r, n) {
    let i = this.parse(e, t, r, n);
    if (i) {
      return {
        setter: new p(i.value, this.validate, this.set, this.priority, this.subPriority),
        rest: i.rest
      };
    } else {
      return null;
    }
  }
  validate(e, t, r) {
    return true;
  }
}
class g extends y {
  parse(e, t, r) {
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(e, {
          width: "abbreviated"
        }) || r.era(e, {
          width: "narrow"
        });
      case "GGGGG":
        return r.era(e, {
          width: "narrow"
        });
      default:
        return r.era(e, {
          width: "wide"
        }) || r.era(e, {
          width: "abbreviated"
        }) || r.era(e, {
          width: "narrow"
        });
    }
  }
  set(e, t, r) {
    t.era = r;
    e.setFullYear(r, 0, 1);
    e.setHours(0, 0, 0, 0);
    return e;
  }
  constructor(...e) {
    super(...e);
    this.priority = 140;
    this.incompatibleTokens = ["R", "u", "t", "T"];
  }
}
var b = require("./62193.js");
let v = /^(1[0-2]|0?\d)/;
let x = /^(3[0-1]|[0-2]?\d)/;
let w = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/;
let _ = /^(5[0-3]|[0-4]?\d)/;
let k = /^(2[0-3]|[0-1]?\d)/;
let $ = /^(2[0-4]|[0-1]?\d)/;
let S = /^(1[0-1]|0?\d)/;
let I = /^(1[0-2]|0?\d)/;
let O = /^[0-5]?\d/;
let E = /^[0-5]?\d/;
let j = /^\d/;
let U = /^\d{1,2}/;
let T = /^\d{1,3}/;
let A = /^\d{1,4}/;
let D = /^-?\d+/;
let z = /^-?\d/;
let N = /^-?\d{1,2}/;
let P = /^-?\d{1,3}/;
let R = /^-?\d{1,4}/;
let C = /^([+-])(\d{2})(\d{2})?|Z/;
let M = /^([+-])(\d{2})(\d{2})|Z/;
let L = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/;
let Z = /^([+-])(\d{2}):(\d{2})|Z/;
let F = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;
function B(e, t) {
  if (e) {
    return {
      value: t(e.value),
      rest: e.rest
    };
  } else {
    return e;
  }
}
function q(e, t) {
  let r = t.match(e);
  if (r) {
    return {
      value: parseInt(r[0], 10),
      rest: t.slice(r[0].length)
    };
  } else {
    return null;
  }
}
function W(e, t) {
  let r = t.match(e);
  if (!r) {
    return null;
  }
  if (r[0] === "Z") {
    return {
      value: 0,
      rest: t.slice(1)
    };
  }
  let n = r[1] === "+" ? 1 : -1;
  let i = r[2] ? parseInt(r[2], 10) : 0;
  let a = r[3] ? parseInt(r[3], 10) : 0;
  let o = r[5] ? parseInt(r[5], 10) : 0;
  return {
    value: n * (i * b.s0 + a * b.Cg + o * b._m),
    rest: t.slice(r[0].length)
  };
}
function Y(e) {
  return q(D, e);
}
function G(e, t) {
  switch (e) {
    case 1:
      return q(j, t);
    case 2:
      return q(U, t);
    case 3:
      return q(T, t);
    case 4:
      return q(A, t);
    default:
      return q(RegExp("^\\d{1," + e + "}"), t);
  }
}
function H(e, t) {
  switch (e) {
    case 1:
      return q(z, t);
    case 2:
      return q(N, t);
    case 3:
      return q(P, t);
    case 4:
      return q(R, t);
    default:
      return q(RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function J(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    default:
      return 0;
  }
}
function X(e, t) {
  let r;
  let n = t > 0;
  let i = n ? t : 1 - t;
  if (i <= 50) {
    r = e || 100;
  } else {
    let t = i + 50;
    let n = Math.trunc(t / 100) * 100;
    let a = e >= t % 100;
    r = e + n - !!a * 100;
  }
  if (n) {
    return r;
  } else {
    return 1 - r;
  }
}
function Q(e) {
  return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
}
class K extends y {
  parse(e, t, r) {
    let n = e => ({
      year: e,
      isTwoDigitYear: t === "yy"
    });
    switch (t) {
      case "y":
        return B(G(4, e), n);
      case "yo":
        return B(r.ordinalNumber(e, {
          unit: "year"
        }), n);
      default:
        return B(G(t.length, e), n);
    }
  }
  validate(e, t) {
    return t.isTwoDigitYear || t.year > 0;
  }
  set(e, t, r) {
    let n = e.getFullYear();
    if (r.isTwoDigitYear) {
      let t = X(r.year, n);
      e.setFullYear(t, 0, 1);
      e.setHours(0, 0, 0, 0);
      return e;
    }
    let i = "era" in t && t.era !== 1 ? 1 - r.year : r.year;
    e.setFullYear(i, 0, 1);
    e.setHours(0, 0, 0, 0);
    return e;
  }
  constructor(...e) {
    super(...e);
    this.priority = 130;
    this.incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];
  }
}
var V = require("./35061.js");
var ee = require("./78105.js");
class et extends y {
  parse(e, t, r) {
    let n = e => ({
      year: e,
      isTwoDigitYear: t === "YY"
    });
    switch (t) {
      case "Y":
        return B(G(4, e), n);
      case "Yo":
        return B(r.ordinalNumber(e, {
          unit: "year"
        }), n);
      default:
        return B(G(t.length, e), n);
    }
  }
  validate(e, t) {
    return t.isTwoDigitYear || t.year > 0;
  }
  set(e, t, r, n) {
    let i = (0, V.h)(e, n);
    if (r.isTwoDigitYear) {
      let t = X(r.year, i);
      e.setFullYear(t, 0, n.firstWeekContainsDate);
      e.setHours(0, 0, 0, 0);
      return (0, ee.k)(e, n);
    }
    let a = "era" in t && t.era !== 1 ? 1 - r.year : r.year;
    e.setFullYear(a, 0, n.firstWeekContainsDate);
    e.setHours(0, 0, 0, 0);
    return (0, ee.k)(e, n);
  }
  constructor(...e) {
    super(...e);
    this.priority = 130;
    this.incompatibleTokens = ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"];
  }
}
var er = require("./23514.js");
class en extends y {
  parse(e, t) {
    if (t === "R") {
      return H(4, e);
    } else {
      return H(t.length, e);
    }
  }
  set(e, t, r) {
    let n = (0, o.w)(e, 0);
    n.setFullYear(r, 0, 4);
    n.setHours(0, 0, 0, 0);
    return (0, er.b)(n);
  }
  constructor(...e) {
    super(...e);
    this.priority = 130;
    this.incompatibleTokens = ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"];
  }
}
class ei extends y {
  parse(e, t) {
    if (t === "u") {
      return H(4, e);
    } else {
      return H(t.length, e);
    }
  }
  set(e, t, r) {
    e.setFullYear(r, 0, 1);
    e.setHours(0, 0, 0, 0);
    return e;
  }
  constructor(...e) {
    super(...e);
    this.priority = 130;
    this.incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
  }
}
class ea extends y {
  parse(e, t, r) {
    switch (t) {
      case "Q":
      case "QQ":
        return G(t.length, e);
      case "Qo":
        return r.ordinalNumber(e, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.quarter(e, {
          width: "wide",
          context: "formatting"
        }) || r.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 4;
  }
  set(e, t, r) {
    e.setMonth((r - 1) * 3, 1);
    e.setHours(0, 0, 0, 0);
    return e;
  }
  constructor(...e) {
    super(...e);
    this.priority = 120;
    this.incompatibleTokens = ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"];
  }
}
class eo extends y {
  parse(e, t, r) {
    switch (t) {
      case "q":
      case "qq":
        return G(t.length, e);
      case "qo":
        return r.ordinalNumber(e, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        }) || r.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return r.quarter(e, {
          width: "wide",
          context: "standalone"
        }) || r.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        }) || r.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 4;
  }
  set(e, t, r) {
    e.setMonth((r - 1) * 3, 1);
    e.setHours(0, 0, 0, 0);
    return e;
  }
  constructor(...e) {
    super(...e);
    this.priority = 120;
    this.incompatibleTokens = ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"];
  }
}
class es extends y {
  parse(e, t, r) {
    let n = e => e - 1;
    switch (t) {
      case "M":
        return B(q(v, e), n);
      case "MM":
        return B(G(2, e), n);
      case "Mo":
        return B(r.ordinalNumber(e, {
          unit: "month"
        }), n);
      case "MMM":
        return r.month(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(e, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(e, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.month(e, {
          width: "wide",
          context: "formatting"
        }) || r.month(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, r) {
    e.setMonth(r, 1);
    e.setHours(0, 0, 0, 0);
    return e;
  }
  constructor(...e) {
    super(...e);
    this.incompatibleTokens = ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"];
    this.priority = 110;
  }
}
class eu extends y {
  parse(e, t, r) {
    let n = e => e - 1;
    switch (t) {
      case "L":
        return B(q(v, e), n);
      case "LL":
        return B(G(2, e), n);
      case "Lo":
        return B(r.ordinalNumber(e, {
          unit: "month"
        }), n);
      case "LLL":
        return r.month(e, {
          width: "abbreviated",
          context: "standalone"
        }) || r.month(e, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(e, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return r.month(e, {
          width: "wide",
          context: "standalone"
        }) || r.month(e, {
          width: "abbreviated",
          context: "standalone"
        }) || r.month(e, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, r) {
    e.setMonth(r, 1);
    e.setHours(0, 0, 0, 0);
    return e;
  }
  constructor(...e) {
    super(...e);
    this.priority = 110;
    this.incompatibleTokens = ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"];
  }
}
var el = require("./71033.js");
function ec(e, t, r) {
  let n = (0, l.a)(e, r?.in);
  let i = (0, el.N)(n, r) - t;
  n.setDate(n.getDate() - i * 7);
  return (0, l.a)(n, r?.in);
}
class ed extends y {
  parse(e, t, r) {
    switch (t) {
      case "w":
        return q(_, e);
      case "wo":
        return r.ordinalNumber(e, {
          unit: "week"
        });
      default:
        return G(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 53;
  }
  set(e, t, r, n) {
    return (0, ee.k)(ec(e, r, n), n);
  }
  constructor(...e) {
    super(...e);
    this.priority = 100;
    this.incompatibleTokens = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"];
  }
}
var ef = require("./97480.js");
function eh(e, t, r) {
  let n = (0, l.a)(e, r?.in);
  let i = (0, ef.s)(n, r) - t;
  n.setDate(n.getDate() - i * 7);
  return n;
}
class ep extends y {
  parse(e, t, r) {
    switch (t) {
      case "I":
        return q(_, e);
      case "Io":
        return r.ordinalNumber(e, {
          unit: "week"
        });
      default:
        return G(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 53;
  }
  set(e, t, r) {
    return (0, er.b)(eh(e, r));
  }
  constructor(...e) {
    super(...e);
    this.priority = 100;
    this.incompatibleTokens = ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"];
  }
}
let em = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let ey = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
class eg extends y {
  parse(e, t, r) {
    switch (t) {
      case "d":
        return q(x, e);
      case "do":
        return r.ordinalNumber(e, {
          unit: "date"
        });
      default:
        return G(t.length, e);
    }
  }
  validate(e, t) {
    let r = Q(e.getFullYear());
    let n = e.getMonth();
    if (r) {
      return t >= 1 && t <= ey[n];
    } else {
      return t >= 1 && t <= em[n];
    }
  }
  set(e, t, r) {
    e.setDate(r);
    e.setHours(0, 0, 0, 0);
    return e;
  }
  constructor(...e) {
    super(...e);
    this.priority = 90;
    this.subPriority = 1;
    this.incompatibleTokens = ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"];
  }
}
class eb extends y {
  parse(e, t, r) {
    switch (t) {
      case "D":
      case "DD":
        return q(w, e);
      case "Do":
        return r.ordinalNumber(e, {
          unit: "date"
        });
      default:
        return G(t.length, e);
    }
  }
  validate(e, t) {
    if (Q(e.getFullYear())) {
      return t >= 1 && t <= 366;
    } else {
      return t >= 1 && t <= 365;
    }
  }
  set(e, t, r) {
    e.setMonth(0, r);
    e.setHours(0, 0, 0, 0);
    return e;
  }
  constructor(...e) {
    super(...e);
    this.priority = 90;
    this.subpriority = 1;
    this.incompatibleTokens = ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"];
  }
}
var ev = require("./27880.js");
function ex(e, t, r) {
  let n = (0, s.q)();
  let i = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0;
  let a = (0, l.a)(e, r?.in);
  let o = a.getDay();
  let u = (t % 7 + 7) % 7;
  let c = 7 - i;
  let d = t < 0 || t > 6 ? t - (o + c) % 7 : (u + c) % 7 - (o + c) % 7;
  return (0, ev.f)(a, d, r);
}
class ew extends y {
  parse(e, t, r) {
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(e, {
          width: "short",
          context: "formatting"
        }) || r.day(e, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(e, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(e, {
          width: "short",
          context: "formatting"
        }) || r.day(e, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.day(e, {
          width: "wide",
          context: "formatting"
        }) || r.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(e, {
          width: "short",
          context: "formatting"
        }) || r.day(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, r, n) {
    (e = ex(e, r, n)).setHours(0, 0, 0, 0);
    return e;
  }
  constructor(...e) {
    super(...e);
    this.priority = 90;
    this.incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
  }
}
class e_ extends y {
  parse(e, t, r, n) {
    let i = e => {
      let t = Math.floor((e - 1) / 7) * 7;
      return (e + n.weekStartsOn + 6) % 7 + t;
    };
    switch (t) {
      case "e":
      case "ee":
        return B(G(t.length, e), i);
      case "eo":
        return B(r.ordinalNumber(e, {
          unit: "day"
        }), i);
      case "eee":
        return r.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(e, {
          width: "short",
          context: "formatting"
        }) || r.day(e, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeee":
        return r.day(e, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(e, {
          width: "short",
          context: "formatting"
        }) || r.day(e, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.day(e, {
          width: "wide",
          context: "formatting"
        }) || r.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(e, {
          width: "short",
          context: "formatting"
        }) || r.day(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, r, n) {
    (e = ex(e, r, n)).setHours(0, 0, 0, 0);
    return e;
  }
  constructor(...e) {
    super(...e);
    this.priority = 90;
    this.incompatibleTokens = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"];
  }
}
class ek extends y {
  parse(e, t, r, n) {
    let i = e => {
      let t = Math.floor((e - 1) / 7) * 7;
      return (e + n.weekStartsOn + 6) % 7 + t;
    };
    switch (t) {
      case "c":
      case "cc":
        return B(G(t.length, e), i);
      case "co":
        return B(r.ordinalNumber(e, {
          unit: "day"
        }), i);
      case "ccc":
        return r.day(e, {
          width: "abbreviated",
          context: "standalone"
        }) || r.day(e, {
          width: "short",
          context: "standalone"
        }) || r.day(e, {
          width: "narrow",
          context: "standalone"
        });
      case "ccccc":
        return r.day(e, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(e, {
          width: "short",
          context: "standalone"
        }) || r.day(e, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return r.day(e, {
          width: "wide",
          context: "standalone"
        }) || r.day(e, {
          width: "abbreviated",
          context: "standalone"
        }) || r.day(e, {
          width: "short",
          context: "standalone"
        }) || r.day(e, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, r, n) {
    (e = ex(e, r, n)).setHours(0, 0, 0, 0);
    return e;
  }
  constructor(...e) {
    super(...e);
    this.priority = 90;
    this.incompatibleTokens = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"];
  }
}
function e$(e, t) {
  let r = (0, l.a)(e, t?.in).getDay();
  if (r === 0) {
    return 7;
  } else {
    return r;
  }
}
function eS(e, t, r) {
  let n = (0, l.a)(e, r?.in);
  let i = t - e$(n, r);
  return (0, ev.f)(n, i, r);
}
class eI extends y {
  parse(e, t, r) {
    let n = e => e === 0 ? 7 : e;
    switch (t) {
      case "i":
      case "ii":
        return G(t.length, e);
      case "io":
        return r.ordinalNumber(e, {
          unit: "day"
        });
      case "iii":
        return B(r.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(e, {
          width: "short",
          context: "formatting"
        }) || r.day(e, {
          width: "narrow",
          context: "formatting"
        }), n);
      case "iiiii":
        return B(r.day(e, {
          width: "narrow",
          context: "formatting"
        }), n);
      case "iiiiii":
        return B(r.day(e, {
          width: "short",
          context: "formatting"
        }) || r.day(e, {
          width: "narrow",
          context: "formatting"
        }), n);
      default:
        return B(r.day(e, {
          width: "wide",
          context: "formatting"
        }) || r.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(e, {
          width: "short",
          context: "formatting"
        }) || r.day(e, {
          width: "narrow",
          context: "formatting"
        }), n);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 7;
  }
  set(e, t, r) {
    (e = eS(e, r)).setHours(0, 0, 0, 0);
    return e;
  }
  constructor(...e) {
    super(...e);
    this.priority = 90;
    this.incompatibleTokens = ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"];
  }
}
class eO extends y {
  parse(e, t, r) {
    switch (t) {
      case "a":
      case "aa":
      case "aaa":
        return r.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, t, r) {
    e.setHours(J(r), 0, 0, 0);
    return e;
  }
  constructor(...e) {
    super(...e);
    this.priority = 80;
    this.incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
  }
}
class eE extends y {
  parse(e, t, r) {
    switch (t) {
      case "b":
      case "bb":
      case "bbb":
        return r.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, t, r) {
    e.setHours(J(r), 0, 0, 0);
    return e;
  }
  constructor(...e) {
    super(...e);
    this.priority = 80;
    this.incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
  }
}
class ej extends y {
  parse(e, t, r) {
    switch (t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, t, r) {
    e.setHours(J(r), 0, 0, 0);
    return e;
  }
  constructor(...e) {
    super(...e);
    this.priority = 80;
    this.incompatibleTokens = ["a", "b", "t", "T"];
  }
}
class eU extends y {
  parse(e, t, r) {
    switch (t) {
      case "h":
        return q(I, e);
      case "ho":
        return r.ordinalNumber(e, {
          unit: "hour"
        });
      default:
        return G(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 12;
  }
  set(e, t, r) {
    let n = e.getHours() >= 12;
    if (n && r < 12) {
      e.setHours(r + 12, 0, 0, 0);
    } else if (n || r !== 12) {
      e.setHours(r, 0, 0, 0);
    } else {
      e.setHours(0, 0, 0, 0);
    }
    return e;
  }
  constructor(...e) {
    super(...e);
    this.priority = 70;
    this.incompatibleTokens = ["H", "K", "k", "t", "T"];
  }
}
class eT extends y {
  parse(e, t, r) {
    switch (t) {
      case "H":
        return q(k, e);
      case "Ho":
        return r.ordinalNumber(e, {
          unit: "hour"
        });
      default:
        return G(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 23;
  }
  set(e, t, r) {
    e.setHours(r, 0, 0, 0);
    return e;
  }
  constructor(...e) {
    super(...e);
    this.priority = 70;
    this.incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"];
  }
}
class eA extends y {
  parse(e, t, r) {
    switch (t) {
      case "K":
        return q(S, e);
      case "Ko":
        return r.ordinalNumber(e, {
          unit: "hour"
        });
      default:
        return G(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, r) {
    if (e.getHours() >= 12 && r < 12) {
      e.setHours(r + 12, 0, 0, 0);
    } else {
      e.setHours(r, 0, 0, 0);
    }
    return e;
  }
  constructor(...e) {
    super(...e);
    this.priority = 70;
    this.incompatibleTokens = ["h", "H", "k", "t", "T"];
  }
}
class eD extends y {
  parse(e, t, r) {
    switch (t) {
      case "k":
        return q($, e);
      case "ko":
        return r.ordinalNumber(e, {
          unit: "hour"
        });
      default:
        return G(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 24;
  }
  set(e, t, r) {
    let n = r <= 24 ? r % 24 : r;
    e.setHours(n, 0, 0, 0);
    return e;
  }
  constructor(...e) {
    super(...e);
    this.priority = 70;
    this.incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"];
  }
}
class ez extends y {
  parse(e, t, r) {
    switch (t) {
      case "m":
        return q(O, e);
      case "mo":
        return r.ordinalNumber(e, {
          unit: "minute"
        });
      default:
        return G(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 59;
  }
  set(e, t, r) {
    e.setMinutes(r, 0, 0);
    return e;
  }
  constructor(...e) {
    super(...e);
    this.priority = 60;
    this.incompatibleTokens = ["t", "T"];
  }
}
class eN extends y {
  parse(e, t, r) {
    switch (t) {
      case "s":
        return q(E, e);
      case "so":
        return r.ordinalNumber(e, {
          unit: "second"
        });
      default:
        return G(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 59;
  }
  set(e, t, r) {
    e.setSeconds(r, 0);
    return e;
  }
  constructor(...e) {
    super(...e);
    this.priority = 50;
    this.incompatibleTokens = ["t", "T"];
  }
}
class eP extends y {
  parse(e, t) {
    let r = e => Math.trunc(e * Math.pow(10, -t.length + 3));
    return B(G(t.length, e), r);
  }
  set(e, t, r) {
    e.setMilliseconds(r);
    return e;
  }
  constructor(...e) {
    super(...e);
    this.priority = 30;
    this.incompatibleTokens = ["t", "T"];
  }
}
var eR = require("./55574.js");
class eC extends y {
  parse(e, t) {
    switch (t) {
      case "X":
        return W(C, e);
      case "XX":
        return W(M, e);
      case "XXXX":
        return W(L, e);
      case "XXXXX":
        return W(F, e);
      default:
        return W(Z, e);
    }
  }
  set(e, t, r) {
    if (t.timestampIsSet) {
      return e;
    } else {
      return (0, o.w)(e, e.getTime() - (0, eR.G)(e) - r);
    }
  }
  constructor(...e) {
    super(...e);
    this.priority = 10;
    this.incompatibleTokens = ["t", "T", "x"];
  }
}
class eM extends y {
  parse(e, t) {
    switch (t) {
      case "x":
        return W(C, e);
      case "xx":
        return W(M, e);
      case "xxxx":
        return W(L, e);
      case "xxxxx":
        return W(F, e);
      default:
        return W(Z, e);
    }
  }
  set(e, t, r) {
    if (t.timestampIsSet) {
      return e;
    } else {
      return (0, o.w)(e, e.getTime() - (0, eR.G)(e) - r);
    }
  }
  constructor(...e) {
    super(...e);
    this.priority = 10;
    this.incompatibleTokens = ["t", "T", "X"];
  }
}
class eL extends y {
  parse(e) {
    return Y(e);
  }
  set(e, t, r) {
    return [(0, o.w)(e, r * 1000), {
      timestampIsSet: true
    }];
  }
  constructor(...e) {
    super(...e);
    this.priority = 40;
    this.incompatibleTokens = "*";
  }
}
class eZ extends y {
  parse(e) {
    return Y(e);
  }
  set(e, t, r) {
    return [(0, o.w)(e, r), {
      timestampIsSet: true
    }];
  }
  constructor(...e) {
    super(...e);
    this.priority = 20;
    this.incompatibleTokens = "*";
  }
}
let eF = {
  G: new g(),
  y: new K(),
  Y: new et(),
  R: new en(),
  u: new ei(),
  Q: new ea(),
  q: new eo(),
  M: new es(),
  L: new eu(),
  w: new ed(),
  I: new ep(),
  d: new eg(),
  D: new eb(),
  E: new ew(),
  e: new e_(),
  c: new ek(),
  i: new eI(),
  a: new eO(),
  b: new eE(),
  B: new ej(),
  h: new eU(),
  H: new eT(),
  K: new eA(),
  k: new eD(),
  m: new ez(),
  s: new eN(),
  S: new eP(),
  X: new eC(),
  x: new eM(),
  t: new eL(),
  T: new eZ()
};
let eB = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
let eq = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
let eW = /^'([^]*?)'?$/;
let eY = /''/g;
let eG = /\S/;
let eH = /[a-zA-Z]/;
export function qg(e, t, r, s) {
  let c = () => (0, o.w)(s?.in || r, NaN);
  let d = u();
  let f = s?.locale ?? d.locale ?? n.c;
  let h = s?.firstWeekContainsDate ?? s?.locale?.options?.firstWeekContainsDate ?? d.firstWeekContainsDate ?? d.locale?.options?.firstWeekContainsDate ?? 1;
  let p = s?.weekStartsOn ?? s?.locale?.options?.weekStartsOn ?? d.weekStartsOn ?? d.locale?.options?.weekStartsOn ?? 0;
  if (!t) {
    if (e) {
      return c();
    } else {
      return (0, l.a)(r, s?.in);
    }
  }
  let y = {
    firstWeekContainsDate: h,
    weekStartsOn: p,
    locale: f
  };
  let g = [new m(s?.in, r)];
  let b = t.match(eq).map(e => {
    let t = e[0];
    if (t in i.m) {
      return (0, i.m[t])(e, f.formatLong);
    } else {
      return e;
    }
  }).join("").match(eB);
  let v = [];
  for (let r of b) {
    if (!s?.useAdditionalWeekYearTokens && (0, a.xM)(r)) {
      (0, a.Ss)(r, t, e);
    }
    if (!s?.useAdditionalDayOfYearTokens && (0, a.ef)(r)) {
      (0, a.Ss)(r, t, e);
    }
    let n = r[0];
    let i = eF[n];
    if (i) {
      let {
        incompatibleTokens: t
      } = i;
      if (Array.isArray(t)) {
        let e = v.find(e => t.includes(e.token) || e.token === n);
        if (e) {
          throw RangeError(`The format string mustn't contain \`${e.fullToken}\` and \`${r}\` at the same time`);
        }
      } else if (i.incompatibleTokens === "*" && v.length > 0) {
        throw RangeError(`The format string mustn't contain \`${r}\` and any other token at the same time`);
      }
      v.push({
        token: n,
        fullToken: r
      });
      let a = i.run(e, r, f.match, y);
      if (!a) {
        return c();
      }
      g.push(a.setter);
      e = a.rest;
    } else {
      if (n.match(eH)) {
        throw RangeError("Format string contains an unescaped latin alphabet character `" + n + "`");
      }
      if (r === "''") {
        r = "'";
      } else if (n === "'") {
        r = eX(r);
      }
      if (e.indexOf(r) !== 0) {
        return c();
      }
      e = e.slice(r.length);
    }
  }
  if (e.length > 0 && eG.test(e)) {
    return c();
  }
  let x = g.map(e => e.priority).sort((e, t) => t - e).filter((e, t, r) => r.indexOf(e) === t).map(e => g.filter(t => t.priority === e).sort((e, t) => t.subPriority - e.subPriority)).map(e => e[0]);
  let w = (0, l.a)(r, s?.in);
  if (isNaN(+w)) {
    return c();
  }
  let _ = {};
  for (let e of x) {
    if (!e.validate(w, y)) {
      return c();
    }
    let t = e.set(w, _, y);
    if (Array.isArray(t)) {
      w = t[0];
      Object.assign(_, t[1]);
    } else {
      w = t;
    }
  }
  return w;
}
function eX(e) {
  return e.match(eW)[1].replace(eY, "'");
}