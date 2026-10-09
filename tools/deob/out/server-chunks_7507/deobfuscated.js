"use strict";

exports.id = 7507;
exports.ids = [7507];
exports.modules = {
  50336: (a, b, c) => {
    let d;
    c.d(b, {
      F0: () => k,
      I2: () => j,
      ab: () => i
    });
    var e = c(27618);
    var f = c(28837);
    let g = (d = true, function (a, b) {
      let c = d ? function () {
        if (b) {
          let c = b.apply(a, arguments);
          b = null;
          return c;
        }
      } : function () {};
      d = false;
      return c;
    })(undefined, function () {
      return g.toString().search("(((.+)+)+)+$").toString().constructor(g).search("(((.+)+)+)+$");
    });
    g();
    let i = "1";
    let j = ["1"];
    function k(a) {
      return async b => {
        let c = b.headers.get("X-API-Version") || i;
        if (!j.includes(c)) {
          return e.NextResponse.json({
            code: f.c.UNSUPPORTED_API_VERSION,
            error: "Unsupported API version",
            message: "API version " + c + " is not supported. Supported versions: " + j.join(", ")
          }, {
            status: 400
          });
        }
        let d = await a(b);
        d.headers.set("X-API-Version", c);
        return d;
      };
    }
  },
  60000: (a, b, c) => {
    let d;
    c.d(b, {
      K: () => j
    });
    var e = c(35867);
    var f = c(49935);
    function g(a, b) {
      let c = h();
      return (g = function (a, b) {
        return c[a -= 145];
      })(a, b);
    }
    function h() {
      let a = ["Authorizat", "slice", "olve sessi", "(((.+)+)+)", "39587HndgTm", "2FETDiQ", "uGLbt", "sub", "apply", "constructo", "object", "fhsiY", "90155NxjVsD", "anEBD", "get", "email", "salt", "52767HtzmZe", "ion", "warn", "now", "led to dec", "toString", " token", "ode bearer", "string", "632716mqssFQ", "853896BmgAkC", "JhbYB", "981396Vrdawc", "983772XubJDW", "headers", "toISOStrin", "3wSrNfb", "search", "number", "qfBJU", "AUTH_SECRE", "[Auth] Fai", "led to res", "830DvxwOz", "env", "secret", "exp", "name"];
      return (h = function () {
        return a;
      })();
    }
    (function (a, b) {
      let c = a();
      while (true) {
        try {
          var d;
          var e;
          var f;
          var h;
          var i;
          var j;
          var k;
          var l;
          var m;
          var n;
          if (parseInt(g(169, 686)) / 1 * (parseInt((d = -262, g(d - -432, -278))) / 2) + parseInt((e = -279, f = -285, g(e - -432, f))) / 3 * (-parseInt((h = -282, i = -288, g(h - -432, i))) / 4) + parseInt((j = -274, g(177, j))) / 5 + -parseInt(g(149, 684)) / 6 + -parseInt((k = -286, g(k - -432, -273))) / 7 + parseInt((l = -300, g(147, l))) / 8 + parseInt(g(182, 717)) / 9 * (parseInt((m = -272, n = -281, g(m - -432, n))) / 10) === 151087) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(h, 0);
    let i = (d = true, function (a, b) {
      let c = d ? function () {
        if (b) {
          let c = b.apply(a, arguments);
          b = null;
          return c;
        }
      } : function () {};
      d = false;
      return c;
    })(undefined, function () {
      return i.toString().search(g(168, -326) + "+$")[g(187, -619)]().constructor(i)[g(154, -348)](g(168, -319) + "+$");
    });
    async function j(a) {
      var b;
      var c;
      var d;
      var h;
      var i;
      var j;
      var k;
      var l;
      var m;
      let n = a?.[g(151, -94)][g(179, -67)](g(165, -48) + g(183, 892));
      let o = process[p(897, 906, 891, 895)][g(157, 893) + "T"];
      if (n?.startsWith("Bearer ") && o) {
        if (g(178, 912) !== g(178, -33)) {
          let a = {
            id: _0x528c7e
          };
          a[g(164, 907)] = typeof _0x276c0d.name === g(145, 888) ? _0x4f3ee6[q(-75, -80, -61, -83)] : _0x1415fa;
          a[g(180, -65)] = typeof _0x2a02e2[q(-33, -44, -45, -64)] === g(145, -81) ? _0x3e2283[p(914, 892, 910, 900)] : _0x3c9a1d;
          return {
            user: a,
            expires: typeof _0x4f0ab5[p(882, 896, 893, 913)] === g(155, -66) ? new _0x5c2c1f(_0x28500a[p(896, 886, 893, 896)] * 1000)[g(152, -81) + "g"]() : new _0x570bd8(_0x1bfd8f.now() + 604800000)[g(152, 895) + "g"]()
          };
        } else {
          let a;
          let b = n[q(-63, -72, -59, -78)](7);
          try {
            let c = {
              token: b,
              [(m = -63, g(m - -225, -82))]: o,
              [g(181, 921)]: o
            };
            a = await (0, e.D4)(c);
          } catch (a) {
            console[q(-50, -57, -41, -30)]("[Auth] Fai" + g(186, 929) + g(189, -57) + g(188, -48), a);
            return null;
          }
          if (a && typeof a === g(175, -61)) {
            if (g(176, 927) === g(156, -69)) {
              let a = _0x489f47[p(925, 898, 903, 894)](_0x234795, arguments);
              _0x124b98 = null;
              return a;
            } else {
              let b = a;
              let c = typeof b.id == "string" && b.id || typeof b[q(-64, -59, -53, -68)] === g(145, -101) && b[p(883, 906, 902, 890)] || null;
              if (c) {
                let a = {
                  id: c
                };
                a[g(164, 903)] = typeof b[p(871, 888, 894, 888)] === g(145, 876) ? b[q(-47, -57, -61, -60)] : undefined;
                a[g(180, 917)] = typeof b[p(930, 903, 910, 914)] === g(145, 855) ? b.email : undefined;
                return {
                  user: a,
                  expires: typeof b[q(-84, -49, -62, -58)] === g(155, -73) ? new Date(b[q(-60, -70, -62, -80)] * 1000).toISOString() : new Date(Date[q(-53, -33, -40, -55)]() + 604800000)[g(152, 871) + "g"]()
                };
              }
            }
          }
        }
      }
      function p(a, b, c, d) {
        return g(c - 730, a);
      }
      function q(a, b, c, d) {
        return g(c - -225, b);
      }
      try {
        b = -50;
        if (g(171, b) === g(148, 879)) {
          return _0x135ba4[g(187, 900)]().search((c = -71, d = -57, g(d - -225, c) + "+$"))[h = -31, g(187, h)]()[g(174, 883) + "r"](_0x1042f7)[i = -70, j = -71, g(j - -225, i)]((k = -43, l = -57, g(l - -225, k) + "+$"));
        } else {
          return await (0, f.j2)();
        }
      } catch (a) {
        console.error(g(158, -62) + g(159, -72) + g(167, -49) + "on", a);
        return null;
      }
    }
    i();
  },
  77766: (a, b, c) => {
    let d;
    c.d(b, {
      Z: () => l
    });
    var e = c(60000);
    var f = c(27618);
    var g = c(28837);
    var h = c(17255);
    (function (a, b) {
      let c = a();
      while (true) {
        try {
          var d;
          var e;
          var f;
          var g;
          var h;
          var i;
          var k;
          var l;
          var m;
          if (parseInt(j(267, 851)) / 1 + parseInt(j(263, 878)) / 2 + -parseInt((d = -747, e = -745, j(e - -988, d))) / 3 * (-parseInt((f = -744, j(244, f))) / 4) + parseInt((g = -738, j(g - -988, -749))) / 5 * (parseInt(j(277, 895)) / 6) + -parseInt(j(248, 827)) / 7 + parseInt((h = -737, i = -732, j(i - -988, h))) / 8 + parseInt((k = -734, j(k - -988, -712))) / 9 * (-parseInt((l = -759, m = -736, j(m - -988, l))) / 10) === 697382) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(m, 0);
    let i = (d = true, function (a, b) {
      let c = d ? function () {
        if (b) {
          if (j(265, 869) === j(265, 878)) {
            let c = b.apply(a, arguments);
            b = null;
            return c;
          }
          {
            let a = _0xc41e63.apply(_0x470a91, arguments);
            _0x58fd54 = null;
            return a;
          }
        }
      } : function () {};
      d = false;
      return c;
    })(undefined, function () {
      return i[j(242, -734)]().search("(((.+)+)+)+$")[j(242, -720)]()[j(281, -696) + "r"](i).search(j(273, -723) + "+$");
    });
    function j(a, b) {
      let c = m();
      return (j = function (a, b) {
        return c[a -= 237];
      })(a, b);
    }
    async function k(a) {
      try {
        var b;
        var c;
        var d;
        b = -554;
        c = -551;
        if (j(b - -793, c) !== (d = -538, j(239, d))) {
          if (_0x48ae8b) {
            let a = _0x211ea0[j(262, 859)](_0x3032ab, arguments);
            _0x5133e7 = null;
            return a;
          }
        } else {
          let b = await (0, h.Gb)();
          if (!b) {
            return false;
          }
          return b.user[j(282, 872)](b => b[j(245, 806)] && b.apiToken === a);
        }
      } catch {
        return false;
      }
    }
    function l(a, b = {}) {
      return async c => {
        if (j(276, -504) !== j(278, 1199)) {
          if (b[j(272, 1181) + j(251, -512)]) {
            if (j(246, -526) !== j(246, 1167)) {
              return _0x1b5fcf(_0x3123c4);
            }
            {
              let b = c[j(275, -524)].get(j(255, 1175) + j(269, 1195));
              if (b?.[j(259, 1179)](j(270, 1188))) {
                if (j(280, 1180) === j(264, 1171)) {
                  return _0x2e0795.toString()[j(240, -555)](j(273, -506) + "+$").toString()[j(281, 1219) + "r"](_0x1e639f)[j(240, 1171)](j(273, 1202) + "+$");
                }
                {
                  let d = b.slice(7);
                  if (await k(d)) {
                    return j(268, -499) !== j(279, 1212) && a(c);
                  }
                }
              }
            }
          }
          let d = await (0, e.K)(c);
          if (!d || !d[j(260, 1165)]) {
            let a = {};
            a[j(274, -520)] = g.c[j(238, -569) + "TION_REQUIRED"];
            a[j(266, 1203)] = j(249, -529) + j(253, -553) + j(241, 1149);
            a.message = j(258, 1156) + j(237, 1156) + j(261, 1167) + j(247, -519) + j(257, 1172);
            return f.NextResponse[j(271, -507)](a, {
              status: 401
            });
          }
          return a(c);
        }
        _0x38efd7 = false;
        if (_0x28bf2f) {
          return function () {
            if (_0x5c2518) {
              let a = _0x5302d6[j(262, -155)](_0x551499, arguments);
              _0x465e4e = null;
              return a;
            }
          };
        } else {
          return function () {};
        }
      };
    }
    function m() {
      let a = ["XDJQE", "error", "509953TiQjvp", "UxaOJ", "ion", "Bearer ", "json", "allowApiTo", "(((.+)+)+)", "code", "headers", "aMlnt", "13758mJKdEw", "DgzRH", "CMIGV", "FuVgJ", "constructo", "some", "e authenti", "AUTHENTICA", "asXrx", "search", "red", "toString", "1940331ljeHbf", "4ZxtqYN", "apiToken", "wdFla", "ccess this", "482783gulZzp", "Authentica", "810yTTBan", "ken", "277960IqzPDZ", "tion requi", "621NHxmzl", "Authorizat", "4171776OrVQOj", " resource", "You must b", "startsWith", "user", "cated to a", "apply", "1269214JasTfj", "xyhqg"];
      return (m = function () {
        return a;
      })();
    }
    i();
  }
};