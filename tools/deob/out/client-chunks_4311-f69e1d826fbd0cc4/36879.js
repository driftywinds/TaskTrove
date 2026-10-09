var n = require("./41079.js").Buffer;
var i = n.isEncoding || function (e) {
  switch ((e = "" + e) && e.toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
    case "raw":
      return true;
    default:
      return false;
  }
};
function a(e) {
  var t;
  if (!e) {
    return "utf8";
  }
  while (true) {
    switch (e) {
      case "utf8":
      case "utf-8":
        return "utf8";
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return "utf16le";
      case "latin1":
      case "binary":
        return "latin1";
      case "base64":
      case "ascii":
      case "hex":
        return e;
      default:
        if (t) {
          return;
        }
        e = ("" + e).toLowerCase();
        t = true;
    }
  }
}
function o(e) {
  var t = a(e);
  if (typeof t != "string" && (n.isEncoding === i || !i(e))) {
    throw Error("Unknown encoding: " + e);
  }
  return t || e;
}
function s(e) {
  var t;
  this.encoding = o(e);
  switch (this.encoding) {
    case "utf16le":
      this.text = p;
      this.end = m;
      t = 4;
      break;
    case "utf8":
      this.fillLast = d;
      t = 4;
      break;
    case "base64":
      this.text = y;
      this.end = g;
      t = 3;
      break;
    default:
      this.write = b;
      this.end = v;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = n.allocUnsafe(t);
}
function u(e) {
  if (e <= 127) {
    return 0;
  } else if (e >> 5 == 6) {
    return 2;
  } else if (e >> 4 == 14) {
    return 3;
  } else if (e >> 3 == 30) {
    return 4;
  } else if (e >> 6 == 2) {
    return -1;
  } else {
    return -2;
  }
}
function l(e, t, r) {
  var n = t.length - 1;
  if (n < r) {
    return 0;
  }
  var i = u(t[n]);
  if (i >= 0) {
    if (i > 0) {
      e.lastNeed = i - 1;
    }
    return i;
  } else if (--n < r || i === -2) {
    return 0;
  } else if ((i = u(t[n])) >= 0) {
    if (i > 0) {
      e.lastNeed = i - 2;
    }
    return i;
  } else if (--n < r || i === -2) {
    return 0;
  } else if ((i = u(t[n])) >= 0) {
    if (i > 0) {
      if (i === 2) {
        i = 0;
      } else {
        e.lastNeed = i - 3;
      }
    }
    return i;
  } else {
    return 0;
  }
}
function c(e, t, r) {
  if ((t[0] & 192) != 128) {
    e.lastNeed = 0;
    return "�";
  }
  if (e.lastNeed > 1 && t.length > 1) {
    if ((t[1] & 192) != 128) {
      e.lastNeed = 1;
      return "�";
    }
    if (e.lastNeed > 2 && t.length > 2 && (t[2] & 192) != 128) {
      e.lastNeed = 2;
      return "�";
    }
  }
}
function d(e) {
  var t = this.lastTotal - this.lastNeed;
  var r = c(this, e, t);
  if (r !== undefined) {
    return r;
  } else if (this.lastNeed <= e.length) {
    e.copy(this.lastChar, t, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  } else {
    e.copy(this.lastChar, t, 0, e.length);
    this.lastNeed -= e.length;
    return;
  }
}
function f(e, t) {
  var r = l(this, e, t);
  if (!this.lastNeed) {
    return e.toString("utf8", t);
  }
  this.lastTotal = r;
  var n = e.length - (r - this.lastNeed);
  e.copy(this.lastChar, 0, n);
  return e.toString("utf8", t, n);
}
function h(e) {
  var t = e && e.length ? this.write(e) : "";
  if (this.lastNeed) {
    return t + "�";
  } else {
    return t;
  }
}
function p(e, t) {
  if ((e.length - t) % 2 == 0) {
    var r = e.toString("utf16le", t);
    if (r) {
      var n = r.charCodeAt(r.length - 1);
      if (n >= 55296 && n <= 56319) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = e[e.length - 2];
        this.lastChar[1] = e[e.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = e[e.length - 1];
  return e.toString("utf16le", t, e.length - 1);
}
function m(e) {
  var t = e && e.length ? this.write(e) : "";
  if (this.lastNeed) {
    var r = this.lastTotal - this.lastNeed;
    return t + this.lastChar.toString("utf16le", 0, r);
  }
  return t;
}
function y(e, t) {
  var r = (e.length - t) % 3;
  if (r === 0) {
    return e.toString("base64", t);
  } else {
    this.lastNeed = 3 - r;
    this.lastTotal = 3;
    if (r === 1) {
      this.lastChar[0] = e[e.length - 1];
    } else {
      this.lastChar[0] = e[e.length - 2];
      this.lastChar[1] = e[e.length - 1];
    }
    return e.toString("base64", t, e.length - r);
  }
}
function g(e) {
  var t = e && e.length ? this.write(e) : "";
  if (this.lastNeed) {
    return t + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
  } else {
    return t;
  }
}
function b(e) {
  return e.toString(this.encoding);
}
function v(e) {
  if (e && e.length) {
    return this.write(e);
  } else {
    return "";
  }
}
exports.StringDecoder = s;
s.prototype.write = function (e) {
  var t;
  var r;
  if (e.length === 0) {
    return "";
  }
  if (this.lastNeed) {
    if ((t = this.fillLast(e)) === undefined) {
      return "";
    }
    r = this.lastNeed;
    this.lastNeed = 0;
  } else {
    r = 0;
  }
  if (r < e.length) {
    if (t) {
      return t + this.text(e, r);
    } else {
      return this.text(e, r);
    }
  } else {
    return t || "";
  }
};
s.prototype.end = h;
s.prototype.text = f;
s.prototype.fillLast = function (e) {
  if (this.lastNeed <= e.length) {
    e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length);
  this.lastNeed -= e.length;
};