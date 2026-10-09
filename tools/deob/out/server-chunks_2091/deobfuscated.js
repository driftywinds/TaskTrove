"use strict";

exports.id = 2091;
exports.ids = [2091];
exports.modules = {
  601: (a, b, c) => {
    let d;
    c.d(b, {
      Q: () => u
    });
    var e = c(12555);
    var f = c.n(e);
    var g = c(29021);
    var h = c(79748);
    var i = c(33873);
    var j = c.n(i);
    var k = c(27293);
    var l = c(17255);
    let m = (d = true, function (a, b) {
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
      return m.toString().search("(((.+)+)+)+$").toString().constructor(m).search("(((.+)+)+)+$");
    });
    m();
    let p = k.TX;
    function q(a) {
      if (typeof a !== "object" || a === null) {
        return;
      }
      let b = Reflect[function (a, b, c, d) {
        return __DECODE_0__(d - 218, b);
      }(562, 544, 540, 588)](a, "code");
      if (typeof b === "string") {
        return b;
      } else {
        return undefined;
      }
    }
    function r(a) {
      if (a instanceof Error) {
        let b = q(a);
        if (b) {
          return a.message + " (code: " + b + ")";
        } else {
          return a.message;
        }
      }
      return String(a);
    }
    async function s() {
      try {
        if (!(await (0, h.stat)(p))[-115, -146, "isDirectory"]()) {
          if ((-94, "WTinC") === "FPNLb") {
            let a = _0x559736(_0x3c039c);
            if (a) {
              return _0x2a2560[-93, -116, "message"] + " (code: " + a + ")";
            } else {
              return _0x3dc451.message;
            }
          }
          throw Error("Backup path is not a directory.");
        }
      } catch (a) {
        if (q(a) === "ENOENT") {
          throw Error("Backup directory does not exist.");
        }
        throw a;
      }
    }
    async function t(a) {
      try {
        if (a === -1) {
          if ((-127, -89, "FwKMy") !== "sfbes") {
            console.log("Unlimited " + (-45, -95, "backups co") + (-162, -205, "nfigured. ") + (-106, -78, "No rotatio") + "n needed.");
            return;
          }
          throw new _0x5ae375("Backup path is not a" + (-59, -118, " directory") + ".");
        }
        let r = await (0, h.readdir)(p);
        let O = /^backup-\d{4}-\d{2}-\d{2}T\d{2}-\d{2}-\d{2}\.zip$/;
        let P = r.filter(a => O.test(a))[-84, -149, "sort"]((a, b) => {
          return a[-100, "localeCompare"](b);
        });
        if (P.length <= a) {
          console[-49, -18, "log"]((-82, -149, "Rotation check: " + P.length + (-87, " backups f" + (-144, -133, "ound, less") + " than or equal to max ") + a + (-108, -59, ". No rotation needed") + "."));
          return;
        }
        console.log("Rotation c" + (-83, "heck: ") + P[-108, "length"] + (" backups found, exce" + (-65, "eding max ")) + a + (". Starting" + (-96, " rotation.")));
        let Q = (await Promise.all(P.map(async a => ({
          name: a,
          path: j().join(p, a),
          stats: await (0, h.stat)(j().join(p, a))
        }))))[-55, -26, "slice"](0, P.length - a);
        console[-49, "log"]("Identified " + Q.length + (-123, -139, " backups to delete."));
        await Promise[-160, -119, "all"](Q[-57, "map"](async a => {
          function b(a, b, c, d) {
            var e;
            e = a - -434;
            return __DECODE_0__(e - 267, d);
          }
          function c(a, b, c, d) {
            var e;
            e = b - 352;
            return __DECODE_0__(e - 267, d);
          }
          if (c(979, 987, 928, 1031) !== b(201, 238, 247, 139)) {
            _0x41c27f[c(1030, 1089, 1144, 1068)](b(307, 368, 259, 323) + c(1101, 1116, 1124, 1105) + b(241, 263, 298, 211) + "ion: " + _0xaae7d0(_0x294982));
            _0x5cd55a(_0x5203c9);
          } else {
            await (0, h.unlink)(a[c(1031, 1041, 1003, 1081)]);
            console[b(318, 280, 264, 315)]("Rotated (deleted) old backup: " + a[c(1052, 1038, 993, 1091)]);
          }
        }));
      } catch (a) {
        console.error("Error during backup rotation: " + r(a));
      }
    }
    async function u() {
      try {
        if ((-165, "zrHkC") === "zrHkC") {
          let a = k.$w;
          try {
            let f = await (0, l.Gb)();
            if (f?.settings.data.autoBackup.enabled === false) {
              console[-459, "log"]("Auto backup is disabled in settings. Ski" + (-248, -238, "pping back") + (-219, "up."));
              return;
            }
            if (f?.[-225, -189, "settings"][-559, "data"][-558, "autoBackup"][-515, -534, "maxBackups"] !== undefined) {
              -157;
              -188;
              if ((-191, -129, "viWfm") === "ZIPpe") {
                _0x2a1c67[-125, -179, "warn"]((-593, -575, "Archiver w" + (-553, -505, "arning (EN") + (-195, -248, "OENT): ") + _0x3d6baa(_0x2e5f5a)));
              } else {
                a = f[-140, -189, "settings"][-543, "data"][-565, -558, "autoBackup"][-543, -534, "maxBackups"];
              }
            }
          } catch {
            console.log("Data file " + (-513, -464, "not found ") + (-463, "or couldn'") + "t be read. Proceedin" + (-493, -545, "g with bac") + (-472, -480, "kup."));
          }
          console[-140, "log"]((-202, "Starting d" + (-237, "aily backu") + (-143, "p...")));
          await s();
          let aj = new Date()[-481, "toISOString"]().replace(/[:.]/g, "-")[-408, -465, "slice"](0, -5);
          let ak = "backup-" + aj + (-498, -524, ".zip");
          let al = j()[-557, "join"](p, ak);
          let am = (0, g.createWriteStream)(al);
          let an = {
            [(-560, "level")]: 9
          };
          let ao = {
            [(-182, -139, "zlib")]: an
          };
          let ap = f()((-411, -473, "zip"), ao);
          return new Promise((b, c) => {
            function d(a, b, c, d) {
              var e;
              e = c - 109;
              return __DECODE_0__(e - -625, b);
            }
            function e(a, b, c, d) {
              var e;
              e = d - 24;
              return __DECODE_0__(e - -944, a);
            }
            if (e(-470, -556, -539, -531) !== "kFmut") {
              if (_0x1e952c instanceof _0x37c863) {
                let a = _0x691225(_0x4cdcad);
                if (a) {
                  return _0x32e7f7.message + d(18, -45, -38, -71) + a + ")";
                } else {
                  return _0x147054[d(-127, -143, -81, -49)];
                }
              }
              return _0x33c6e2(_0x5a3207);
            }
            am.on("close", async () => {
              function c(a, b, c, e) {
                return d(a - 6, c, e - 664, e - 387);
              }
              function e(a, b, c, e) {
                return d(a - 193, a, e - 987, e - 412);
              }
              if (c(618, 622, 677, 631) !== c(638, 696, 625, 631)) {
                if (_0x5b6ba0.code === "ENOENT") {
                  _0xa2dca9.warn(e(849, 826, 876, 840) + c(572, 604, 547, 587) + e(793, 793, 797, 848) + _0x4aaf88(_0x4d5f73));
                } else {
                  _0x3698a1[c(584, 573, 606, 594)](e(874, 801, 834, 840) + "arning: " + _0x1e6050(_0x53d9d1));
                }
              } else {
                console.log(c(644, 599, 643, 604) + "ated succe" + e(865, 894, 903, 885) + ak + " (" + ap[e(902, 862, 914, 928)]() + (e(906, 853, 826, 874) + e(876, 918, 838, 880)));
                try {
                  await t(a);
                  b();
                } catch (a) {
                  if (c(678, 681, 629, 632) !== c(649, 617, 679, 632)) {
                    _0xb0417e[e(992, 924, 940, 956)]("Auto backu" + e(871, 829, 858, 856) + "led in set" + e(979, 942, 991, 932) + e(842, 837, 862, 858) + c(599, 530, 505, 554));
                    return;
                  }
                  console[c(673, 603, 567, 618)](e(926, 932, 927, 945) + "ng post-ba" + c(601, 561, 565, 572) + e(854, 926, 893, 915) + r(a));
                  b();
                }
              }
            });
            am.on(e(-480, -472, -470, -454), () => {
              var a;
              var b;
              function c(a, b, c, e) {
                return d(a - 98, e, c - 884, e - 449);
              }
              console[a = -28, b = -19, e(24, -247, a - 497, b - 416)](c(810, 877, 840, 802) + "e stream f" + c(794, 755, 813, 868) + c(729, 745, 780, 818) + ak);
            });
            ap.on(e(-423, -468, -435, -458), a => {
              function b(a, b, c, e) {
                return d(a - 500, b, c - 199, e - 125);
              }
              function c(a, b, c, e) {
                return d(a - 273, b, e - 1502, e - 486);
              }
              if (a[c(1481, 1357, 1379, 1419)] === c(1427, 1371, 1408, 1435)) {
                console[c(1367, 1365, 1399, 1432)](c(1413, 1313, 1405, 1355) + b(101, 175, 122, 150) + b(2, 2, 60, 31) + r(a));
              } else if (b(104, 57, 101, 125) === c(1420, 1524, 1513, 1473)) {
                throw new _0x58e217(c(1352, 1351, 1402, 1417) + c(1415, 1364, 1431, 1388) + c(1477, 1470, 1487, 1463) + "t.");
              } else {
                console[b(155, 68, 129, 176)](b(19, 101, 52, -3) + b(224, 204, 173, 213) + r(a));
              }
            });
            ap.on(d(-17, -79, -46, -49), a => {
              var b;
              function f(a, b, c, d) {
                return e(c, b - 276, c - 378, b - 1055);
              }
              console[f(620, 605, 549, 669)](f(449, 513, 570, 446) + (b = -392, d(-481, -455, b - -364, -569)) + r(a));
              c(a);
            });
            ap[d(-10, 35, -24, -58)](am);
            console[d(-4, 17, -31, -26)](d(-137, -29, -89, -128) + d(-170, -131, -119, -130) + "tory.");
            ap[e(-481, -552, -544, -504)](k.T6, false);
            console.log("Finalizing" + d(-65, -99, -84, -104) + ".");
            ap.finalize().catch(a => {
              function b(a, b, c, e) {
                return d(a - 299, a, c - 1194, e - 499);
              }
              console[d(-256, 169, -46, -197)](d(-192, 107, -42, -272) + b(1218, 1211, 1175, 1130) + b(1140, 1068, 1086, 1082) + b(1097, 1099, 1122, 1105) + r(a));
              c(a);
            });
          });
        }
        return _0x1bb944[-496, -449, "toString"]()[-281, -230, "search"]((-67, -132, "(((.+)+)+)+$"))[-386, -449, "toString"]()[-215, -229, "constructor"](_0x5451e4)[-549, "search"]((-74, "(((.+)+)+)+$"));
      } catch (a) {
        console.error("Failed to run backup: " + r(a));
        throw a;
        _0x544864.log("Rotation check: " + _0x1534b1.length + " backups found, less than or equal to max " + _0x26a9eb + ". No rotation needed.");
        return;
      }
    }
  },
  62091: (a, b, c) => {
    let d;
    c.d(b, {
      j: () => l
    });
    var e = c(27293);
    var f = c(17255);
    var g = c(601);
    (function (a, b) {
      let c = a();
      while (true) {
        try {
          var d;
          var e;
          var f;
          var g;
          var h;
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
          if (parseInt((d = -486, e = -456, i(d - -780, e))) / 1 * (parseInt((f = -471, i(291, f))) / 2) + -parseInt((g = -521, h = -519, i(g - -780, h))) / 3 * (parseInt((j = -489, k = -469, i(k - -751, j))) / 4) + -parseInt((l = -446, m = -451, i(m - -751, l))) / 5 * (-parseInt((n = -449, i(n - -751, -429))) / 6) + parseInt((o = -473, i(272, o))) / 7 * (parseInt((p = -476, q = -487, i(p - -780, q))) / 8) + parseInt((r = -471, s = -499, i(s - -751, r))) / 9 * (parseInt(i(293, -436)) / 10) + parseInt((t = -478, u = -509, i(u - -751, t))) / 11 + parseInt((v = -484, w = -503, i(w - -751, v))) / 12 * (-parseInt(i(273, -468)) / 13) === 834536) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(j, 0);
    let h = (d = true, function (a, b) {
      if (i(278, -233) === i(278, -217)) {
        let c = d ? function () {
          if (b) {
            let c = b.apply(a, arguments);
            b = null;
            return c;
          }
        } : function () {};
        d = false;
        return c;
      }
      if (_0x27b2d9[i(263, -239)](_0x284ad5)) {
        _0x32d68d[i(244, -261)](i(267, 123) + "p disabled" + i(283, -244) + i(305, -174) + i(262, -255) + i(268, -208) + i(284, 129));
      } else {
        _0x4bd40c[i(244, 97)](i(267, -219) + i(281, 120) + i(313, 151) + "p job regi" + i(243, -234));
      }
    })(undefined, function () {
      return h[i(292, 44)]()[i(312, 1107)](i(277, 1062) + "+$").toString().constructor(h)[i(312, 1113)](i(277, 1129) + "+$");
    });
    function i(a, b) {
      let c = j();
      return (i = function (a, b) {
        return c[a -= 242];
      })(a, b);
    }
    function j() {
      let a = ["p disabled", "4KoqjIx", ". Existing", "uler.", "kAOHe", "scheduled ", "enabled", "time ", ", using de", "up task...", "10qnwEJS", "toString", "1769540gvKgeA", "211553MkswPH", "apply", "constructo", "p job regi", "abled: tru", "] Schedule", "11410gMfaZl", "kup time ", "372PNIiQf", "toISOStrin", "10238424bgmPSw", " backup jo", "ask comple", "autoBackup", "iqgbg", "ask failed", "error", "backupTime", "search", ". No backu", "10545964bJiTiK", "stered.", "log", "] Running ", "runOnInit", " true, bac", "34572SqqDOj", "p settings", "faults (en", "ImjDz", "9IYFhpu", "mnijJ", "d backup t", "g defaults", "map", "Could not ", "Scheduling", "1918833nVuvyq", "load backu", "sfully.", "b removed ", "unregister", "split", "file, usin", " backup fo", "Auto backu", "from sched", "type", "daily-back", "replace", "7TSEkqR", "9659nIqbDs", " (enabled:", "rmlvG", "on: ", "(((.+)+)+)", "ebuUd", "daily back", "data"];
      return (j = function () {
        return a;
      })();
    }
    h();
    let k = i(270, 629) + "up";
    async function l(a) {
      let {
        backupTime: b,
        enabled: c,
        runOnInit: d
      } = await m();
      if (!c) {
        if (a[e(1232, 1233, 1244, 1278)](k)) {
          console[l(-635, -663, -657, -634)](e(1275, 1222, 1248, 1222) + "p disabled. Existing" + e(1289, 1265, 1286, 1301) + e(1232, 1256, 1243, 1242) + e(1213, 1245, 1249, 1259) + "uler.");
        } else if (l(-594, -594, -611, -625) === l(-594, -598, -614, -588)) {
          console[l(-635, -628, -669, -665)](l(-612, -621, -648, -622) + "p disabled" + l(-566, -588, -595, -580) + l(-582, -557, -595, -564) + l(-636, -651, -600, -632));
        } else if (_0x20030a) {
          let a = _0x521538.apply(_0x5a72a1, arguments);
          _0x45a4e2 = null;
          return a;
        }
        return;
      }
      function e(a, b, c, d) {
        return i(c - 653 - 328, d);
      }
      let f = function (a) {
        let [b, c] = a[function (a, b, c, d) {
          return i(b - -1178 - 328, c);
        }(0, -586, -593, 0)](":")[function (a, b, c, d) {
          return i(256, 824);
        }(0, 0, 815, 824)](Number);
        return c + " " + b + " * * *";
      }(b);
      console[e(1221, 1253, 1225, 1198)](l(-621, -650, -621, -596) + l(-613, -615, -622, -591) + "r " + b + " daily (cr" + e(1255, 1282, 1257, 1278) + f + ")");
      let h = {
        [e(1261, 1258, 1250, 1267)]: "cron",
        expression: f
      };
      let j = {};
      function l(a, b, c, d) {
        return i(a - -1207 - 328, d);
      }
      j[e(1229, 1270, 1252, 1242)] = true;
      a.register({
        id: k,
        schedule: h,
        runOnInit: d,
        handler: async () => {
          function a(a, b, c, d) {
            return l(a - 1470, b - 53, c - 415, b);
          }
          function b(a, b, c, d) {
            return l(d - 593, b - 100, c - 279, a);
          }
          console[a(835, 837, 830, 836)]("[" + new Date().toISOString() + (b(-68, -29, -14, -41) + a(877, 905, 872, 842) + b(-26, -13, -41, -7) + b(17, -21, -18, 4)));
          try {
            if (a(842, 824, 813, 839) !== "ImjDz") {
              return _0x163db0[a(883, 876, 917, 899)]()[a(903, 880, 872, 910)](a(868, 893, 902, 884) + "+$")[a(883, 854, 875, 851)]()[b(-16, -8, -14, 10) + "r"](_0x43b529)[a(903, 906, 891, 892)](b(13, 16, -32, -9) + "+$");
            }
            await (0, g.Q)();
            console[a(835, 804, 863, 825)]("[" + new Date()[a(894, 916, 924, 880) + "g"]() + (b(38, -3, -14, 13) + a(845, 811, 861, 828) + a(897, 892, 894, 892)) + "ted succes" + b(-49, -56, 4, -25));
          } catch (c) {
            console[a(901, 915, 897, 871)]("[" + new Date().toISOString() + (b(3, 18, 15, 13) + b(2, -8, -23, -32) + a(900, 915, 928, 909)) + ":", c);
          }
        }
      }, j);
    }
    async function m() {
      function a(a, b, c, d) {
        return i(b - 60 - 328, c);
      }
      function b(a, b, c, d) {
        return i(d - 593 - 328, b);
      }
      try {
        if (a(713, 696, 667, 671) !== b(1221, 1176, 1170, 1196)) {
          let c = await (0, f.Gb)();
          if (!c) {
            if (b(1175, 1182, 1169, 1174) !== a(647, 641, 652, 648)) {
              _0x2e7b03[b(1158, 1154, 1153, 1165)](a(661, 655, 640, 647) + a(639, 669, 691, 634) + b(1199, 1260, 1254, 1234) + a(712, 685, 687, 699) + a(640, 631, 645, 638));
            } else {
              console[a(616, 632, 633, 614)](a(617, 645, 666, 636) + "load data " + a(646, 653, 688, 632) + a(630, 643, 634, 644) + a(637, 662, 636, 698) + a(652, 635, 654, 653) + a(722, 689, 692, 717) + e.tn + ")");
              let c = {
                [a(721, 699, 683, 732)]: e.tn,
                [b(1211, 1218, 1193, 1208)]: true,
                runOnInit: e.Gn
              };
              return c;
            }
          }
          let d = c.settings[b(1174, 1193, 1177, 1201)][b(1262, 1243, 1240, 1228)];
          let g = d[b(1192, 1211, 1197, 1208)] !== false;
          let h = d[a(680, 699, 667, 677)] || e.tn;
          let i = d[a(659, 634, 612, 621)] ?? e.Gn;
          let j = {
            [b(1245, 1231, 1200, 1232)]: h,
            enabled: g,
            [b(1143, 1185, 1169, 1167)]: i
          };
          return j;
        }
        {
          let b = _0x357689 ? function () {
            if (_0xea92f3) {
              let b = _0xe2fd6f[a(312, 683, 727, 287)](_0x4cc3a7, arguments);
              _0x3dba95 = null;
              return b;
            }
          } : function () {};
          _0x31e4f9 = false;
          return b;
        }
      } catch {
        console[b(1199, 1143, 1176, 1165)]("Could not " + a(671, 648, 667, 615) + a(614, 637, 659, 642) + a(659, 677, 669, 695) + b(1146, 1195, 1175, 1171) + a(668, 686, 655, 654) + "e, backup " + a(682, 676, 688, 643) + e.tn + ")");
        let c = {
          [b(1263, 1240, 1199, 1232)]: e.tn,
          enabled: true,
          [b(1144, 1181, 1178, 1167)]: e.Gn
        };
        return c;
      }
    }
  }
};