(() => {
  "use strict";

  if (typeof __nccwpck_require__ != "undefined") {
    __nccwpck_require__.ab = "//";
  }
  var t = {};
  (() => {
    function e(e, t = {}) {
      for (var r = function (e) {
          var t = [];
          for (var r = 0; r < e.length;) {
            var n = e[r];
            if (n === "*" || n === "+" || n === "?") {
              t.push({
                type: "MODIFIER",
                index: r,
                value: e[r++]
              });
              continue;
            }
            if (n === "\\") {
              t.push({
                type: "ESCAPED_CHAR",
                index: r++,
                value: e[r++]
              });
              continue;
            }
            if (n === "{") {
              t.push({
                type: "OPEN",
                index: r,
                value: e[r++]
              });
              continue;
            }
            if (n === "}") {
              t.push({
                type: "CLOSE",
                index: r,
                value: e[r++]
              });
              continue;
            }
            if (n === ":") {
              var a = "";
              for (var o = r + 1; o < e.length;) {
                var i = e.charCodeAt(o);
                if (i >= 48 && i <= 57 || i >= 65 && i <= 90 || i >= 97 && i <= 122 || i === 95) {
                  a += e[o++];
                  continue;
                }
                break;
              }
              if (!a) {
                throw TypeError(`Missing parameter name at ${r}`);
              }
              t.push({
                type: "NAME",
                index: r,
                value: a
              });
              r = o;
              continue;
            }
            if (n === "(") {
              var s = 1;
              var u = "";
              var o = r + 1;
              if (e[o] === "?") {
                throw TypeError(`Pattern cannot start with "?" at ${o}`);
              }
              while (o < e.length) {
                if (e[o] === "\\") {
                  u += e[o++] + e[o++];
                  continue;
                }
                if (e[o] === ")") {
                  if (--s == 0) {
                    o++;
                    break;
                  }
                } else if (e[o] === "(" && (s++, e[o + 1] !== "?")) {
                  throw TypeError(`Capturing groups are not allowed at ${o}`);
                }
                u += e[o++];
              }
              if (s) {
                throw TypeError(`Unbalanced pattern at ${r}`);
              }
              if (!u) {
                throw TypeError(`Missing pattern at ${r}`);
              }
              t.push({
                type: "PATTERN",
                index: r,
                value: u
              });
              r = o;
              continue;
            }
            t.push({
              type: "CHAR",
              index: r,
              value: e[r++]
            });
          }
          t.push({
            type: "END",
            index: r,
            value: ""
          });
          return t;
        }(e), n = t.prefixes, o = n === undefined ? "./" : n, i = t.delimiter, s = i === undefined ? "/#?" : i, u = [], l = 0, c = 0, f = "", d = function (e) {
          if (c < r.length && r[c].type === e) {
            return r[c++].value;
          }
        }, p = function (e) {
          var t = d(e);
          if (t !== undefined) {
            return t;
          }
          var n = r[c];
          var a = n.type;
          var o = n.index;
          throw TypeError(`Unexpected ${a} at ${o}, expected ${e}`);
        }, h = function () {
          for (var e, t = ""; e = d("CHAR") || d("ESCAPED_CHAR");) {
            t += e;
          }
          return t;
        }, _ = function (e) {
          for (var t = 0; t < s.length; t++) {
            var r = s[t];
            if (e.indexOf(r) > -1) {
              return true;
            }
          }
          return false;
        }, m = function (e) {
          var t = u[u.length - 1];
          var r = e || (t && typeof t == "string" ? t : "");
          if (t && !r) {
            throw TypeError(`Must have text between two parameters, missing text after "${t.name}"`);
          }
          if (!r || _(r)) {
            return `[^${a(s)}]+?`;
          } else {
            return `(?:(?!${a(r)})[^${a(s)}])+?`;
          }
        }; c < r.length;) {
        var g = d("CHAR");
        var E = d("NAME");
        var y = d("PATTERN");
        if (E || y) {
          var b = g || "";
          if (o.indexOf(b) === -1) {
            f += b;
            b = "";
          }
          if (f) {
            u.push(f);
            f = "";
          }
          u.push({
            name: E || l++,
            prefix: b,
            suffix: "",
            pattern: y || m(b),
            modifier: d("MODIFIER") || ""
          });
          continue;
        }
        var P = g || d("ESCAPED_CHAR");
        if (P) {
          f += P;
          continue;
        }
        if (f) {
          u.push(f);
          f = "";
        }
        if (d("OPEN")) {
          var b = h();
          var R = d("NAME") || "";
          var v = d("PATTERN") || "";
          var O = h();
          p("CLOSE");
          u.push({
            name: R || (v ? l++ : ""),
            pattern: R && !v ? m(b) : v,
            prefix: b,
            suffix: O,
            modifier: d("MODIFIER") || ""
          });
          continue;
        }
        p("END");
      }
      return u;
    }
    function r(e, t = {}) {
      var r = o(t);
      var n = t.encode;
      var a = n === undefined ? function (e) {
        return e;
      } : n;
      var i = t.validate;
      var s = i === undefined || i;
      var u = e.map(function (e) {
        if (typeof e == "object") {
          return new RegExp(`^(?:${e.pattern})\$`, r);
        }
      });
      return function (t) {
        var r = "";
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          if (typeof o == "string") {
            r += o;
            continue;
          }
          var i = t ? t[o.name] : undefined;
          var l = o.modifier === "?" || o.modifier === "*";
          var c = o.modifier === "*" || o.modifier === "+";
          if (Array.isArray(i)) {
            if (!c) {
              throw TypeError(`Expected "${o.name}" to not repeat, but got an array`);
            }
            if (i.length === 0) {
              if (l) {
                continue;
              }
              throw TypeError(`Expected "${o.name}" to not be empty`);
            }
            for (var f = 0; f < i.length; f++) {
              var d = a(i[f], o);
              if (s && !u[n].test(d)) {
                throw TypeError(`Expected all "${o.name}" to match "${o.pattern}", but got "${d}"`);
              }
              r += o.prefix + d + o.suffix;
            }
            continue;
          }
          if (typeof i == "string" || typeof i == "number") {
            var d = a(String(i), o);
            if (s && !u[n].test(d)) {
              throw TypeError(`Expected "${o.name}" to match "${o.pattern}", but got "${d}"`);
            }
            r += o.prefix + d + o.suffix;
            continue;
          }
          if (!l) {
            var p = c ? "an array" : "a string";
            throw TypeError(`Expected "${o.name}" to be ${p}`);
          }
        }
        return r;
      };
    }
    function n(e, t, r = {}) {
      var n = r.decode;
      var a = n === undefined ? function (e) {
        return e;
      } : n;
      return function (r) {
        var n = e.exec(r);
        if (!n) {
          return false;
        }
        var o = n[0];
        var i = n.index;
        var s = Object.create(null);
        for (var u = 1; u < n.length; u++) {
          (function (e) {
            if (n[e] !== undefined) {
              var r = t[e - 1];
              if (r.modifier === "*" || r.modifier === "+") {
                s[r.name] = n[e].split(r.prefix + r.suffix).map(function (e) {
                  return a(e, r);
                });
              } else {
                s[r.name] = a(n[e], r);
              }
            }
          })(u);
        }
        return {
          path: o,
          index: i,
          params: s
        };
      };
    }
    function a(e) {
      return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    function o(e) {
      if (e && e.sensitive) {
        return "";
      } else {
        return "i";
      }
    }
    function i(e, t, r = {}) {
      var n = r.strict;
      var i = n !== undefined && n;
      var s = r.start;
      var u = r.end;
      var l = r.encode;
      var c = l === undefined ? function (e) {
        return e;
      } : l;
      var f = r.delimiter;
      var d = r.endsWith;
      var p = `[${a(d === undefined ? "" : d)}]|\$`;
      var h = `[${a(f === undefined ? "/#?" : f)}]`;
      var _ = s === undefined || s ? "^" : "";
      for (var m = 0; m < e.length; m++) {
        var g = e[m];
        if (typeof g == "string") {
          _ += a(c(g));
        } else {
          var E = a(c(g.prefix));
          var y = a(c(g.suffix));
          if (g.pattern) {
            if (t) {
              t.push(g);
            }
            if (E || y) {
              if (g.modifier === "+" || g.modifier === "*") {
                var b = g.modifier === "*" ? "?" : "";
                _ += `(?:${E}((?:${g.pattern})(?:${y}${E}(?:${g.pattern}))*)${y})${b}`;
              } else {
                _ += `(?:${E}(${g.pattern})${y})${g.modifier}`;
              }
            } else {
              if (g.modifier === "+" || g.modifier === "*") {
                throw TypeError(`Can not repeat "${g.name}" without a prefix and suffix`);
              }
              _ += `(${g.pattern})${g.modifier}`;
            }
          } else {
            _ += `(?:${E}${y})${g.modifier}`;
          }
        }
      }
      if (u === undefined || u) {
        if (!i) {
          _ += `${h}?`;
        }
        _ += r.endsWith ? `(?=${p})` : "$";
      } else {
        var P = e[e.length - 1];
        var R = typeof P == "string" ? h.indexOf(P[P.length - 1]) > -1 : P === undefined;
        if (!i) {
          _ += `(?:${h}(?=${p}))?`;
        }
        if (!R) {
          _ += `(?=${h}|${p})`;
        }
      }
      return new RegExp(_, o(r));
    }
    function s(t, r, n) {
      if (t instanceof RegExp) {
        var a;
        if (!r) {
          return t;
        }
        var u = /\((?:\?<(.*?)>)?(?!\?)/g;
        var l = 0;
        for (var c = u.exec(t.source); c;) {
          r.push({
            name: c[1] || l++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
          });
          c = u.exec(t.source);
        }
        return t;
      }
      if (Array.isArray(t)) {
        a = t.map(function (e) {
          return s(e, r, n).source;
        });
        return new RegExp(`(?:${a.join("|")})`, o(n));
      } else {
        return i(e(t, n), r, n);
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
    t.pathToRegexp = t.tokensToRegexp = t.regexpToFunction = t.match = t.tokensToFunction = t.compile = t.parse = undefined;
    t.parse = e;
    t.compile = function (t, n) {
      return r(e(t, n), n);
    };
    t.tokensToFunction = r;
    t.match = function (e, t) {
      var r = [];
      return n(s(e, r, t), r, t);
    };
    t.regexpToFunction = n;
    t.tokensToRegexp = i;
    t.pathToRegexp = s;
  })();
  module.exports = t;
})();