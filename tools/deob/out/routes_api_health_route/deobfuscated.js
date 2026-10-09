"use strict";

(() => {
  var a = {
    id: 2772,
    ids: [2772]
  };
  a.modules = {
    261: a => {
      a.exports = require("next/dist/shared/lib/router/utils/app-paths");
    },
    3295: a => {
      a.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");
    },
    7852: (a, b, c) => {
      let d;
      c.d(b, {
        D: () => i
      });
      let e = (d = true, function (a, b) {
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
        return e.toString().search("(((.+)+)+)+$").toString().constructor(e).search("(((.+)+)+)+$");
      });
      e();
      class f {
        async withMutex(a) {
          return new Promise((b, c) => {
            let d = async () => {
              try {
                if ("hlwSX" === "pPDvj") {
                  return async a => _0x3cc031.withMutex(() => _0xaa92b4(a));
                }
                {
                  let c = await a();
                  b(c);
                }
              } catch (a) {
                c(a instanceof Error ? a : Error(String(a)));
              }
            };
            this.queue.push(d);
            this.processQueue();
          });
        }
        async processQueue() {
          if (!this.isProcessing && this.queue.length !== 0) {
            for (this.isProcessing = true; this.queue.length > 0;) {
              let a = this.queue.shift();
              if (a) {
                await a();
              }
            }
            this.isProcessing = false;
          }
        }
        constructor() {
          this[function (a, c, d, e) {
            146;
            107;
            return __DECODE_0__(420, a);
          }(117, 0, 121, 132)] = [];
          this[function (a, b, d, e) {
            var f;
            f = b - 507;
            218;
            267;
            return __DECODE_0__(f - -803, a);
          }(118, 125, 114, 120) + "ng"] = false;
        }
      }
      let g = new f();
      function i(a) {
        return async b => {
          return g.withMutex(() => a(b));
        };
      }
    },
    10846: a => {
      a.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
    },
    29021: a => {
      a.exports = require("fs");
    },
    29294: a => {
      a.exports = require("next/dist/server/app-render/work-async-storage.external.js");
    },
    33873: a => {
      a.exports = require("path");
    },
    44870: a => {
      a.exports = require("next/dist/compiled/next-server/app-route.runtime.prod.js");
    },
    50336: (a, b, c) => {
      let d;
      c.d(b, {
        F0: () => k,
        I2: () => j,
        ab: () => i
      });
      var e = c(27618);
      var f = c(28837);
      (function (a, b) {
        let c = a();
        while (true) {
          try {
            if (-parseInt(h(288, 164)) / 1 + -parseInt(h(290, 635)) / 2 + parseInt(h(295, 170)) / 3 + parseInt(h(275, 176)) / 4 + -parseInt(h(267, 167)) / 5 + parseInt(h(282, 183)) / 6 * (parseInt(h(270, 595)) / 7) + parseInt(h(264, 150)) / 8 * (parseInt(h(261, 154)) / 9) === 811732) {
              break;
            }
            c.push(c.shift());
          } catch (a) {
            c.push(c.shift());
          }
        }
      })(l, 0);
      let g = (d = true, function (a, b) {
        let c = d ? function () {
          if (h(271, 1) !== h(271, 238)) {
            if (_0x1d2dd4) {
              let a = _0x4d6ee9[h(280, 251)](_0x4b3df0, arguments);
              _0x27ef52 = null;
              return a;
            }
          } else if (b) {
            let c = b[h(280, 224)](a, arguments);
            b = null;
            return c;
          }
        } : function () {};
        d = false;
        return c;
      })(undefined, function () {
        return g.toString().search(h(296, 836) + "+$")[h(269, 793)]()[h(259, 782) + "r"](g)[h(260, -482)](h(296, -433) + "+$");
      });
      function h(a, b) {
        let c = l();
        return (h = function (a, b) {
          return c[a -= 258];
        })(a, b);
      }
      g();
      let i = "1";
      let j = ["1"];
      function k(a) {
        return async b => {
          let c = b[g(-662, -680, -693, -671)].get(h(272, -695) + "ion") || i;
          if (!j[g(-678, -670, -668, -666)](c)) {
            let a = {
              [h(262, -686)]: 400
            };
            return e.NextResponse[h(283, -655)]({
              code: f.c[h(286, -684) + h(289, -676) + h(274, -693)],
              error: h(265, -694) + h(279, -698) + h(268, -693),
              message: "API version " + c + (h(292, -675) + h(278, -693)) + "upported v" + h(276, -687) + j[h(263, -700)](", ")
            }, a);
          }
          let d = await a(b);
          function g(a, b, c, d) {
            return h(b - -957, a);
          }
          d[h(277, -662)].set(h(272, -687) + "ion", c);
          return d;
        };
      }
      function l() {
        let a = ["7868015UNLXPR", "ion", "toString", "14GPCCJb", "wLjml", "X-API-Vers", "lease use ", "ION", "3604500lAbOQI", "ersions: ", "headers", "pported. S", "d API vers", "apply", "int is dep", "305310vfuDwR", "json", "ion-Warnin", "X-Deprecat", "UNSUPPORTE", "includes", "793188xUyKuf", "D_API_VERS", "2901746guOqZX", "true", " is not su", "set", "recated. P", "2878521ctHTbJ", "(((.+)+)+)", "Deprecatio", "constructo", "search", "1411938QPKfLN", "status", "join", "136JQKtqG", "Unsupporte", " instead."];
        return (l = function () {
          return a;
        })();
      }
    },
    51027: (a, b, c) => {
      a.exports = c(44870);
    },
    63033: a => {
      a.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
    },
    70438: (a, b, c) => {
      Object.defineProperty(b, "I", {
        enumerable: true,
        get: function () {
          return g;
        }
      });
      let d = c(47302);
      let e = c(81435);
      let f = c(56412);
      async function g(a, b, c, g) {
        if ((0, d.isNodeNextResponse)(b)) {
          var h;
          b.statusCode = c.status;
          b.statusMessage = c.statusText;
          let d = ["set-cookie", "www-authenticate", "proxy-authenticate", "vary"];
          if ((h = c.headers) != null) {
            h.forEach((a, c) => {
              if (c.toLowerCase() !== "x-middleware-set-cookie") {
                if (c.toLowerCase() === "set-cookie") {
                  for (let d of (0, f.splitCookiesString)(a)) {
                    b.appendHeader(c, d);
                  }
                } else {
                  let e = b.getHeader(c) !== undefined;
                  if (d.includes(c.toLowerCase()) || !e) {
                    b.appendHeader(c, a);
                  }
                }
              }
            });
          }
          let {
            originalResponse: i
          } = b;
          if (c.body && a.method !== "HEAD") {
            await (0, e.pipeToNodeResponse)(c.body, i, g);
          } else {
            i.end();
          }
        }
      }
    },
    74164: (a, b, c) => {
      let d;
      c.d(b, {
        Cu: () => e.Cu,
        am: () => i
      });
      var e = c(34413);
      function f() {
        let a = ["11487ltCSzQ", "76226xEEvxD", "QXlKp", "414EGeEoi", "34392xYDsyF", "20WLhKkd", "232125CMoAsN", "28608690YwXElM", "toString", "1773ZQrYye", "3983050FfgDFt", "600888arOalJ", "constructo", "18AeQODk", "search", "(((.+)+)+)"];
        return (f = function () {
          return a;
        })();
      }
      function g(a, b) {
        let c = f();
        return (g = function (a, b) {
          return c[a -= 205];
        })(a, b);
      }
      (function (a, b) {
        let c = a();
        while (true) {
          try {
            if (-parseInt(g(213, 476)) / 1 * (-parseInt(g(217, 359)) / 2) + -parseInt(g(211, 475)) / 3 * (parseInt(g(205, 353)) / 4) + -parseInt(g(206, 357)) / 5 + -parseInt(g(219, 476)) / 6 * (parseInt(g(216, 358)) / 7) + -parseInt(g(220, 477)) / 8 * (parseInt(g(209, 472)) / 9) + -parseInt(g(210, 354)) / 10 + parseInt(g(207, 344)) / 11 === 880482) {
              break;
            }
            c.push(c.shift());
          } catch (a) {
            c.push(c.shift());
          }
        }
      })(f, 0);
      let h = (d = true, function (a, b) {
        let c = d ? function () {
          if (b) {
            if (g(218, 1103) !== "QXlKp") {
              return _0x19cd02.toString()[g(214, 1095)]("(((.+)+)+)+$")[g(208, 1098)]()[g(212, 1093) + "r"](_0x588cbd)[g(214, -90)](g(215, -84) + "+$");
            }
            {
              let c = b.apply(a, arguments);
              b = null;
              return c;
            }
          }
        } : function () {};
        d = false;
        return c;
      })(undefined, function () {
        return h[g(208, 81)]()[g(214, 980)]("(((.+)+)+)+$")[g(208, 973)]()[g(212, 77) + "r"](h)[g(214, 976)](g(215, 85) + "+$");
      });
      h();
      let i = () => true;
    },
    77598: a => {
      a.exports = require("node:crypto");
    },
    79748: a => {
      a.exports = require("fs/promises");
    },
    86439: a => {
      a.exports = require("next/dist/shared/lib/no-fallback-error.external");
    },
    95884: (a, b, c) => {
      let d;
      c.r(b);
      c.d(b, {
        handler: () => W,
        patchFetch: () => V,
        routeModule: () => R,
        serverHooks: () => U,
        workAsyncStorage: () => S,
        workUnitAsyncStorage: () => T
      });
      var e = {};
      c.r(e);
      c.d(e, {
        GET: () => Q
      });
      var f = c(51027);
      var g = c(95276);
      var h = c(19395);
      var i = c(58411);
      var j = c(45965);
      var k = c(88502);
      var l = c(49249);
      var m = c(261);
      var n = c(44575);
      var o = c(75537);
      var p = c(68843);
      var q = c(35368);
      var r = c(70438);
      var s = c(56412);
      var t = c(89526);
      var u = c(38915);
      var v = c(86439);
      var w = c(54609);
      var x = c(27618);
      var y = c(7852);
      var z = c(74218);
      var A = c(50336);
      var B = c(33885);
      var C = c(41414);
      var D = c(17255);
      var E = c(65269);
      var F = c(74164);
      (function (a, b) {
        let c = a();
        while (true) {
          try {
            if (-parseInt(H(457, 1059)) / 1 + -parseInt(H(430, 682)) / 2 + parseInt(H(450, 1069)) / 3 + -parseInt(H(480, 1069)) / 4 * (-parseInt(H(429, 677)) / 5) + parseInt(H(433, 687)) / 6 + -parseInt(H(460, 740)) / 7 + -parseInt(H(443, 1032)) / 8 * (parseInt(H(469, 1087)) / 9) === 316553) {
              break;
            }
            c.push(c.shift());
          } catch (a) {
            c.push(c.shift());
          }
        }
      })(G, 0);
      function G() {
        let a = ["zed", "ation", "error", "All permis", "base", " check fai", "constructo", "20968swzhyL", "message", "Data file ", "KfbJv", "led", "needs to b", "status", "977805NKhtdB", "HEALTH", "nzBEF", "needsMigra", "e initiali", "alization", "e migrated", "61509PZxBZi", "toString", "version", "2340926CmLWxP", "preCheck", "pro", "GxPyU", "sion check", "dataFileCh", "ysKum", "apply", "healthy", "225bvlwVQ", "s passed", "(((.+)+)+)", "needs_migr", "lth", "Health che", "eck", "zECuD", "success", "nfo", "search", "2388flwBBm", "tion", "migrationI", "module", "errors", "4995pGhiWR", "735142OYcbVq", "json", "ck failed:", "1339428AYFnAL", "needs_init", "toISOStrin"];
        return (G = function () {
          return a;
        })();
      }
      function H(a, b) {
        let c = G();
        return (H = function (a, b) {
          return c[a -= 426];
        })(a, b);
      }
      async function I(a = {}) {
        var b;
        var c;
        var d;
        var e;
        var f;
        var g;
        var h;
        var i;
        var j;
        var k;
        var l;
        var m;
        var n;
        var o;
        var p;
        var q;
        var r;
        var s;
        var t;
        var u;
        var v;
        var w;
        var y;
        var z;
        var B;
        var G;
        var J;
        var K;
        var L;
        var M;
        var N;
        var O;
        var P;
        var Q;
        var R;
        var S;
        var T;
        var U;
        var V;
        var W;
        var X;
        var Y;
        var Z;
        var $;
        var _;
        var aa;
        var ab;
        let ac;
        let ad = (ac = true, function (a, b) {
          let c = ac ? function () {
            if (b) {
              if (H(452, 1072) !== "nzBEF") {
                return _0x22aace;
              }
              {
                let c = b[H(467, 76)](a, arguments);
                b = null;
                return c;
              }
            }
          } : function () {};
          ac = false;
          return c;
        })(this, function () {
          return ad.toString()[H(479, 69)](H(471, 491) + "+$")[H(458, 41)]()[H(442, 430) + "r"](ad).search(H(471, 59) + "+$");
        });
        ad();
        try {
          if (H(446, 525) !== (b = -415, c = -396, H(b - -891, c))) {
            let b = await (0, C._C)();
            let c = (0, F.am)() ? H(462, 500) : H(440, 524);
            let I = (await (0, E.s)()).version;
            let T = a[H(461, 543)] ? await a[H(461, 537)](b) : null;
            if (T) {
              if (H(466, 548) === "oAEPE") {
                return _0x30eb04[H(458, 498)]().search(H(471, 521) + "+$")[H(458, 521)]()[H(442, -453) + "r"](_0x2e53c5)[H(479, 534)]("(((.+)+)+)+$");
              } else {
                return T;
              }
            }
            if (b[H(477, 554)]) {
              if (b[d = -426, H(d - -891, -426) + H(475, 537)][e = -438, f = -439, H(e - -891, f) + H(481, 531)]) {
                if ((g = -428, h = -449, H(g - -891, h)) !== "GxPyU") {
                  let a = _0x4538c8 ? function () {
                    if (_0x176bdf) {
                      let a = _0x10008f[H(467, 899)](_0x5cef45, arguments);
                      _0x57bc1d = null;
                      return a;
                    }
                  } : function () {};
                  _0x41b2c0 = false;
                  return a;
                }
                {
                  let a = {
                    status: H(472, 509) + "ation",
                    edition: c,
                    serverVersion: I,
                    apiVersion: A.ab,
                    supportedVersions: A.I2,
                    message: H(445, 528) + (i = -443, j = -468, H(i - -891, j)) + H(456, 493),
                    dataFileCheck: b[H(465, 534) + (k = -416, H(k - -891, -433))],
                    migrationInfo: b[l = -426, H(l - -891, -427) + (m = -416, n = -408, H(m - -891, n))][o = -465, p = -477, H(o - -891, p) + (q = -413, r = -434, H(q - -891, r))],
                    timestamp: new Date()[s = -456, H(s - -891, -478) + "g"]()
                  };
                  return x.NextResponse[t = -460, u = -481, H(t - -891, u)](a);
                }
              }
              if (!(await (0, D.Gb)())) {
                let a = {
                  status: (v = -453, w = -434, H(v - -891, w)),
                  edition: c,
                  serverVersion: I,
                  apiVersion: A.ab,
                  supportedVersions: A.I2,
                  message: "Data file validation failed",
                  timestamp: new Date().toISOString(),
                  migrationInfo: b[H(465, 540) + H(475, 515)][H(426, 483) + H(478, 543)]
                };
                let d = {
                  [(y = -454, H(449, y))]: 500
                };
                return x.NextResponse.json(a, d);
              }
              let a = {
                status: (z = -423, B = -405, H(z - -891, B)),
                edition: c,
                serverVersion: I,
                apiVersion: A.ab,
                supportedVersions: A.I2,
                message: H(439, 502) + H(464, 543) + H(470, 530),
                timestamp: new Date()[G = -456, J = -463, H(G - -891, J) + "g"]()
              };
              return x.NextResponse[H(431, 480)](a);
            }
            {
              if (b[K = -426, L = -434, H(K - -891, L) + H(475, 531)]["needsIniti" + H(455, 503)]) {
                let a = {
                  status: H(434, 480) + "ialization",
                  edition: c,
                  serverVersion: I,
                  apiVersion: A.ab,
                  supportedVersions: A.I2,
                  message: H(445, 518) + H(448, -430) + H(454, 508) + (M = -455, N = -467, H(M - -891, N)),
                  dataFileCheck: b[O = -426, P = -400, H(O - -891, P) + (Q = -416, H(Q - -891, -418))],
                  timestamp: new Date()[H(435, 514) + "g"]()
                };
                return x.NextResponse[R = -433, H(431, R)](a);
              }
              let a = (0, C.eT)(b[H(428, 488)]);
              console[S = -434, H(438, S)]("\n" + a);
              let d = {
                status: H(438, 485),
                edition: c,
                serverVersion: I,
                apiVersion: A.ab,
                supportedVersions: A.I2,
                message: "Permission" + H(441, 504) + H(447, 517),
                errors: b.errors,
                details: a,
                timestamp: new Date()[H(435, 473) + "g"]()
              };
              let e = {
                [H(449, 491)]: 500
              };
              return x.NextResponse.json(d, e);
            }
          }
          {
            let a = {
              status: H(472, 550) + H(437, 501),
              edition: _0x592a5c,
              serverVersion: _0x5e49a3,
              apiVersion: _0x437714,
              supportedVersions: _0x51d2a7,
              message: "Data file " + (T = -443, U = -429, H(T - -891, U)) + (V = -429, H(456, V)),
              dataFileCheck: _0x6f8bff[H(465, 534) + (W = -416, X = -437, H(W - -891, X))],
              migrationInfo: _0x363daa[Y = -426, Z = -400, H(Y - -891, Z) + "eck"][$ = -465, H($ - -891, -489) + "nfo"],
              timestamp: new _0x222945()[_ = -456, H(_ - -891, -472) + "g"]()
            };
            return _0x19a12f[aa = -460, ab = -468, H(aa - -891, ab)](a);
          }
        } catch (e) {
          let a = H(474, -426) + H(432, 516) + " " + (e instanceof Error ? e[H(444, -474)] : String(e));
          console[H(438, -472)](a);
          let b = await (0, E.s)();
          let c = {
            status: H(438, -460),
            edition: (0, F.am)() ? "pro" : H(440, 481),
            serverVersion: b[H(459, -427)],
            apiVersion: A.ab,
            supportedVersions: A.I2,
            message: a,
            timestamp: new Date()[H(435, -470) + "g"]()
          };
          let d = {
            [H(449, -466)]: 500
          };
          return x.NextResponse[H(431, 466)](c, d);
        }
      }
      let J = {};
      J.endpoint = B.QQ[H(451, 1038)];
      J[H(427, 907)] = "api-v1-hea" + H(473, 1096);
      (0, A.F0)((0, y.D)((0, z.kF)(() => I(), J)));
      (function (a, b) {
        let c = a();
        while (true) {
          try {
            if (-parseInt(O(253, 1077)) / 1 + -parseInt(O(242, 1043)) / 2 + parseInt(O(229, 1035)) / 3 + -parseInt(O(248, 1052)) / 4 + parseInt(O(234, 1050)) / 5 * (parseInt(O(241, 558)) / 6) + -parseInt(O(255, 564)) / 7 + parseInt(O(243, 1043)) / 8 === 715064) {
              break;
            }
            c.push(c.shift());
          } catch (a) {
            c.push(c.shift());
          }
        }
      })(L, 0);
      let K = (d = true, function (a, b) {
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
        return K.toString().search("(((.+)+)+)+$").toString().constructor(K)[O(250, 608)](O(252, 607) + "+$");
      });
      function L() {
        let a = ["onMigratio", "json", "needsEditi", "2848293aMzPAu", "endpoint", "preCheck", "api-v1-hea", "eck", "985PftXpw", "module", "needs edit", "ion_migrat", "base", "ion", "Data file ", "7734iLBfmV", "2377758IfswOk", "19736944oEYwcd", "needs_edit", "HEALTH", "ase to Pro", "dataFileCh", "1309012zvUCme", "lth", "search", "nfo", "(((.+)+)+)", "361372kjuOIk", "version", "7545398scvFnn"];
        return (L = function () {
          return a;
        })();
      }
      K();
      let M = async a => {
        var b;
        var c;
        var d;
        var e;
        var f;
        var g;
        var h;
        var i;
        var j;
        var k;
        var l;
        var m;
        var n;
        var o;
        var p;
        var q;
        var r;
        var s;
        var t;
        var u;
        var v;
        var w;
        var y;
        var z;
        if (a.success && a[O(247, -340) + B(676, 661, 663, 649)][O(228, -361) + (b = 0, c = 695, d = 0, O(256, 695)) + "n"]) {
          let b = await (0, E.s)();
          let c = {
            status: O(244, -334) + (e = 0, f = 658, g = 0, O(237, 658)) + (h = 0, i = 664, j = 0, O(239, 664)),
            edition: (0, F.am)() ? "pro" : O(238, -357),
            serverVersion: b[B(697, 672, 684, 682)],
            apiVersion: A.ab,
            supportedVersions: A.I2,
            message: (k = 0, l = 664, m = 0, O(240, 664) + (n = 0, o = 658, p = 0, O(236, 658)) + "ion migration from b" + (q = 0, r = 679, s = 0, O(246, 679))),
            dataFileCheck: a["dataFileCh" + O(233, -351)],
            migrationInfo: a[B(662, 692, 677, 686) + O(233, -348)]["migrationI" + (t = 0, u = 693, v = 0, O(251, 693))],
            timestamp: new Date().toISOString()
          };
          return x.NextResponse[w = 0, y = 644, z = 0, O(227, 644)](c);
        }
        function B(a, b, c, d) {
          return O(c - 430, b);
        }
        return null;
      };
      let N = {};
      function O(a, b) {
        let c = L();
        return (O = function (a, b) {
          return c[a -= 227];
        })(a, b);
      }
      N[O(231, -511)] = M;
      let P = {};
      P[O(230, 1014)] = B.QQ[O(245, 1043)];
      P[O(235, 1031)] = O(232, 1021) + O(249, -492);
      let Q = (0, A.F0)((0, y.D)((0, z.kF)(() => I(N), P)));
      let R = new f.AppRouteRouteModule({
        definition: {
          kind: g.RouteKind.APP_ROUTE,
          page: "/api/health/route",
          pathname: "/api/health",
          filename: "route",
          bundlePath: "app/api/health/route"
        },
        distDir: ".next",
        relativeProjectDir: "",
        resolvedPagePath: "/app/apps/web.pro/app/api/health/route.ts",
        nextConfigOutput: "standalone",
        userland: e
      });
      let {
        workAsyncStorage: S,
        workUnitAsyncStorage: T,
        serverHooks: U
      } = R;
      function V() {
        return (0, h.patchFetch)({
          workAsyncStorage: S,
          workUnitAsyncStorage: T
        });
      }
      async function W(a, b, c) {
        if (R.isDev) {
          (0, i.addRequestMeta)(a, "devRequestTimingInternalsEnd", process.hrtime.bigint());
        }
        let d = "/api/health/route";
        if (d === "/index") {
          d = "/";
        }
        let e = await R.prepare(a, b, {
          srcPage: d,
          multiZoneDraftMode: false
        });
        if (!e) {
          b.statusCode = 400;
          b.end("Bad Request");
          if (c.waitUntil != null) {
            c.waitUntil.call(c, Promise.resolve());
          }
          return null;
        }
        let {
          buildId: f,
          params: h,
          nextConfig: x,
          parsedUrl: y,
          isDraftMode: z,
          prerenderManifest: A,
          routerServerContext: B,
          isOnDemandRevalidate: C,
          revalidateOnlyGenerated: D,
          resolvedPathname: E,
          clientReferenceManifest: F,
          serverActionsManifest: G
        } = e;
        let H = (0, m.normalizeAppPath)(d);
        let I = !!A.dynamicRoutes[H] || !!A.routes[E];
        let J = async () => {
          if (B == null ? undefined : B.render404) {
            await B.render404(a, b, y, false);
          } else {
            b.end("This page could not be found");
          }
          return null;
        };
        if (I && !z) {
          let a = !!A.routes[E];
          let b = A.dynamicRoutes[H];
          if (b && b.fallback === false && !a) {
            if (x.experimental.adapterPath) {
              return await J();
            }
            throw new v.NoFallbackError();
          }
        }
        let K = null;
        if (!!I && !R.isDev && !z) {
          K = (K = E) === "/index" ? "/" : K;
        }
        let L = R.isDev === true || !I;
        let M = I && !L;
        if (G && F) {
          (0, k.setReferenceManifestsSingleton)({
            page: d,
            clientReferenceManifest: F,
            serverActionsManifest: G,
            serverModuleMap: (0, l.createServerModuleMap)({
              serverActionsManifest: G
            })
          });
        }
        let N = a.method || "GET";
        let O = (0, j.getTracer)();
        let P = O.getActiveScopeSpan();
        let Q = {
          params: h,
          prerenderManifest: A,
          renderOpts: {
            experimental: {
              authInterrupts: !!x.experimental.authInterrupts
            },
            cacheComponents: !!x.cacheComponents,
            supportsDynamicResponse: L,
            incrementalCache: (0, i.getRequestMeta)(a, "incrementalCache"),
            cacheLifeProfiles: x.cacheLife,
            waitUntil: c.waitUntil,
            onClose: a => {
              b.on("close", a);
            },
            onAfterTaskError: undefined,
            onInstrumentationRequestError: (b, c, d) => R.onRequestError(a, b, d, B)
          },
          sharedContext: {
            buildId: f
          }
        };
        let S = new n.NodeNextRequest(a);
        let T = new n.NodeNextResponse(b);
        let U = o.NextRequestAdapter.fromNodeNextRequest(S, (0, o.signalFromNodeResponse)(b));
        try {
          let e = async a => R.handle(U, Q).finally(() => {
            if (!a) {
              return;
            }
            a.setAttributes({
              "http.status_code": b.statusCode,
              "next.rsc": false
            });
            let c = O.getRootSpanAttributes();
            if (!c) {
              return;
            }
            if (c.get("next.span_type") !== p.BaseServerSpan.handleRequest) {
              console.warn(`Unexpected root span type '${c.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);
              return;
            }
            let e = c.get("next.route");
            if (e) {
              let b = `${N} ${e}`;
              a.setAttributes({
                "next.route": e,
                "http.route": e,
                "next.span_name": b
              });
              a.updateName(b);
            } else {
              a.updateName(`${N} ${d}`);
            }
          });
          let f = !!(0, i.getRequestMeta)(a, "minimalMode");
          let h = async h => {
            var i;
            var j;
            let k = async ({
              previousCacheEntry: g
            }) => {
              try {
                if (!f && C && D && !g) {
                  b.statusCode = 404;
                  b.setHeader("x-nextjs-cache", "REVALIDATED");
                  b.end("This page could not be found");
                  return null;
                }
                let d = await e(h);
                a.fetchMetrics = Q.renderOpts.fetchMetrics;
                let i = Q.renderOpts.pendingWaitUntil;
                if (i && c.waitUntil) {
                  c.waitUntil(i);
                  i = undefined;
                }
                let j = Q.renderOpts.collectedTags;
                if (!I) {
                  await (0, r.I)(S, T, d, Q.renderOpts.pendingWaitUntil);
                  return null;
                }
                {
                  let a = await d.blob();
                  let b = (0, s.toNodeOutgoingHttpHeaders)(d.headers);
                  if (j) {
                    b[u.NEXT_CACHE_TAGS_HEADER] = j;
                  }
                  if (!b["content-type"] && a.type) {
                    b["content-type"] = a.type;
                  }
                  let c = Q.renderOpts.collectedRevalidate !== undefined && !(Q.renderOpts.collectedRevalidate >= u.INFINITE_CACHE) && Q.renderOpts.collectedRevalidate;
                  let e = Q.renderOpts.collectedExpire === undefined || Q.renderOpts.collectedExpire >= u.INFINITE_CACHE ? undefined : Q.renderOpts.collectedExpire;
                  return {
                    value: {
                      kind: w.CachedRouteKind.APP_ROUTE,
                      status: d.status,
                      body: Buffer.from(await a.arrayBuffer()),
                      headers: b
                    },
                    cacheControl: {
                      revalidate: c,
                      expire: e
                    }
                  };
                }
              } catch (b) {
                if (g == null ? undefined : g.isStale) {
                  await R.onRequestError(a, b, {
                    routerKind: "App Router",
                    routePath: d,
                    routeType: "route",
                    revalidateReason: (0, q.c)({
                      isStaticGeneration: M,
                      isOnDemandRevalidate: C
                    })
                  }, B);
                }
                throw b;
              }
            };
            let l = await R.handleResponse({
              req: a,
              nextConfig: x,
              cacheKey: K,
              routeKind: g.RouteKind.APP_ROUTE,
              isFallback: false,
              prerenderManifest: A,
              isRoutePPREnabled: false,
              isOnDemandRevalidate: C,
              revalidateOnlyGenerated: D,
              responseGenerator: k,
              waitUntil: c.waitUntil,
              isMinimalMode: f
            });
            if (!I) {
              return null;
            }
            if ((l == null || (i = l.value) == null ? undefined : i.kind) !== w.CachedRouteKind.APP_ROUTE) {
              throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${l == null || (j = l.value) == null ? undefined : j.kind}`), "__NEXT_ERROR_CODE", {
                value: "E701",
                enumerable: false,
                configurable: true
              });
            }
            if (!f) {
              b.setHeader("x-nextjs-cache", C ? "REVALIDATED" : l.isMiss ? "MISS" : l.isStale ? "STALE" : "HIT");
            }
            if (z) {
              b.setHeader("Cache-Control", "private, no-cache, no-store, max-age=0, must-revalidate");
            }
            let m = (0, s.fromNodeOutgoingHttpHeaders)(l.value.headers);
            if (!f || !I) {
              m.delete(u.NEXT_CACHE_TAGS_HEADER);
            }
            if (!!l.cacheControl && !b.getHeader("Cache-Control") && !m.get("Cache-Control")) {
              m.set("Cache-Control", (0, t.getCacheControlHeader)(l.cacheControl));
            }
            await (0, r.I)(S, T, new Response(l.value.body, {
              headers: m,
              status: l.value.status || 200
            }));
            return null;
          };
          if (P) {
            await h(P);
          } else {
            await O.withPropagatedContext(a.headers, () => O.trace(p.BaseServerSpan.handleRequest, {
              spanName: `${N} ${d}`,
              kind: j.SpanKind.SERVER,
              attributes: {
                "http.method": N,
                "http.target": a.url
              }
            }, h));
          }
        } catch (b) {
          if (!(b instanceof v.NoFallbackError)) {
            await R.onRequestError(a, b, {
              routerKind: "App Router",
              routePath: H,
              routeType: "route",
              revalidateReason: (0, q.c)({
                isStaticGeneration: M,
                isOnDemandRevalidate: C
              })
            });
          }
          if (I) {
            throw b;
          }
          await (0, r.I)(S, T, new Response(null, {
            status: 500
          }));
          return null;
        }
      }
    }
  };
  var b = require("../../../webpack-runtime.js");
  b.C(a);
  var c = b.X(0, [2468, 7618, 2962, 8264, 9437, 9428, 3946, 9283, 1414], () => b(b.s = 95884));
  module.exports = c;
})();