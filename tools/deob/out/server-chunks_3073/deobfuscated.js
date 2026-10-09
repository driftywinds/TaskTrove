"use strict";

exports.id = 3073;
exports.ids = [3073];
exports.modules = {
  35867: (a, b, c) => {
    c.d(b, {
      D4: () => d.D4,
      lF: () => d.lF
    });
    var d = c(47589);
  },
  51027: (a, b, c) => {
    a.exports = c(44870);
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
  99358: (a, b, c) => {
    let d;
    let e;
    c.d(b, {
      pI: () => ab,
      kN: () => ac,
      Dd: () => ak,
      _: () => al
    });
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
    var x;
    var y;
    var z;
    var A;
    var B;
    var C;
    var D;
    var E;
    var F;
    var G;
    var H;
    var I;
    var J;
    var K;
    var L;
    var M = c(27618);
    var N = c(79748);
    var O = c(33873);
    var P = c(29021);
    var Q = c(27293);
    let R = (d = true, function (a, b) {
      let c = d ? function () {
        if (b) {
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
      return R.toString().search("(((.+)+)+)+$").toString().constructor(R).search("(((.+)+)+)+$");
    });
    R();
    var U = c(28837);
    var V = c(33885);
    var W = c(77766);
    var X = c(50336);
    var Y = c(74218);
    (function (a, b) {
      let c = a();
      while (true) {
        try {
          if (-parseInt(ae(440, 176)) / 1 + -parseInt(ae(373, 268)) / 2 + parseInt(ae(301, 48)) / 3 * (parseInt(ae(451, 351)) / 4) + parseInt(ae(319, 132)) / 5 + parseInt(ae(365, 327)) / 6 * (-parseInt(ae(421, 258)) / 7) + parseInt(ae(445, 198)) / 8 + parseInt(ae(348, 283)) / 9 === 410470) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })($, 0);
    let Z = (e = true, function (a, b) {
      if (ae(399, -244) !== ae(399, -267)) {
        return {
          response: _0x2885cb()
        };
      }
      {
        let c = e ? function () {
          if (b) {
            let c = b[ae(378, 544)](a, arguments);
            b = null;
            return c;
          }
        } : function () {};
        e = false;
        return c;
      }
    })(undefined, function () {
      return Z[ae(351, -90)]()[ae(370, -209)](ae(388, -36) + "+$")[ae(351, 749)]().constructor(Z)[ae(370, -169)](ae(388, -35) + "+$");
    });
    function $() {
      let a = ["Asset path", "3900870iOuGlI", "dy exists", "could not ", "file", "csv", "search", "done", "Asset upda", "1134448CQQQMk", "ted asset ", "image/jpeg", "ed asset e", "code", "apply", "sfully", "pathSegmen", "text/csv", "RSAL_DETEC", "push", "from", "ted succes", "ld not be ", "FOUND", "(((.+)+)+)", "No asset p", "ath provid", "join", "quest body", "pop", " is requir", "image/svg+", "cancel", "x-age=3600", "create", "iLwcK", "aMjgY", "ned from p", "jpeg", "ed in requ", "concat", "length", "ensions", "TED", "xhfwb", "found", "Asset crea", "Asset dele", " is not a ", "gif", "includes", "securePath", "public, ma", "value", "rsal attem", "usGlu", "medium", "7Kjuqdq", "QuLxZ", "path-trave", " maximum a", "INVALID_AS", "allowedExt", "isFile", "api-v1-ass", "Asset too ", "QUEST_BODY", "Cache-Cont", "The reques", "Asset not ", "headers", "body", "toLowerCas", "image/png", "FRhzp", "Invalid as", "319491RwGAxI", "is not all", "nxGWp", "read", "svg", "1583720nBVQgl", "ets", "pt detecte", "arrayBuffe", "module", "LViGu", "72mdgjQj", "ASSET_NOT_", "ngth", "rol", "png", "delete", "rsal-attem", "The upload", "55095bRqDUe", "INVALID_RE", "AtGiu", "ion", "endpoint", "nosniff", "response", "mZESp", "message", "path alrea", "Path trave", "allowApiTo", "set path", "ath", "PATH_TRAVE", "llowed siz", "NbRLA", "file does ", "3824390CrNXDi", "ream", "error", "ken", "json", "Requested ", "SET_PATH", "split", "getReader", "large", "applicatio", "le name", "EVHaU", "t body cou", "extension ", "owed", "V1_ASSETS", "ady exists", "gEHVw", "image/gif", "webp", "context", "MNFMY", "File name ", "requireAut", "be determi", "not exist", "Type-Optio", "jeIHi", "5885253nSYaAi", "isFinite", "jpg", "toString", "status", "recursive", "content-le", "gdHAM", "ENOENT", "maxBytes", "pisuY", "Invalid fi", "xml", "Asset alre", "MFCnE", "set extens"];
      return ($ = function () {
        return a;
      })();
    }
    Z();
    let _ = {};
    function aa(a, b, c, d) {
      return ae(a - 735, c);
    }
    f = -189;
    g = 0;
    h = 0;
    _.jpg = ae(375, -189);
    _[i = -31, j = 0, k = 0, ae(402, -31)] = (l = -106, m = 0, n = 0, ae(375, -106));
    _.png = aa(1172, 1121, 1127, 1155);
    _[aa(1148, 1141, 1161, 1128)] = (o = -111, p = 0, q = 0, ae(338, -111));
    _[r = -170, s = 0, t = 0, ae(339, -170)] = "image/webp";
    _[u = -13, v = 0, w = 0, ae(444, -13)] = (x = -127, y = 0, z = 0, ae(395, -127) + (A = -132, B = 0, C = 0, ae(360, -132)));
    _.pdf = "application/pdf";
    _.txt = "text/plain";
    _.json = "application/json";
    _[D = -80, E = 0, F = 0, ae(369, -80)] = (G = -115, H = 0, I = 0, ae(381, -115));
    let ab = ["webp", "gif", (J = -251, K = 0, L = 0, ae(297, -251)), aa(1085, 1147, 1096, 1031), aa(1137, 1124, 1198, 1169)];
    let ac = 10485760;
    function ad() {
      let a = {};
      a[d(1301, 1276, 1271, 1320)] = U.c[d(1220, 1283, 1235, 1245) + "QUEST_BODY"];
      a.error = c(245, 267, 231, 197) + d(1316, 1309, 1345, 1271);
      a[c(125, 133, 101, 160)] = c(116, 192, 132, 161) + d(1371, 1272, 1275, 1319) + "xceeds the" + d(1436, 1388, 1442, 1367) + d(1218, 1225, 1258, 1259) + "e";
      let b = {};
      function c(a, b, c, d) {
        return ae(a - 314 - -498, c);
      }
      function d(a, b, c, d) {
        return ae(d - 1441 - -498, a);
      }
      b[d(1339, 1351, 1282, 1295)] = 413;
      return M.NextResponse[d(1241, 1206, 1290, 1266)](a, b);
    }
    function ae(a, b) {
      let c = $();
      return (ae = function (a, b) {
        return c[a -= 295];
      })(a, b);
    }
    function af() {
      function a(a, b, c, d) {
        return ae(c - 1127 - -498, a);
      }
      let b = {};
      function c(a, b, c, d) {
        return aa(c - -926, b - 200, d, d - 258);
      }
      b.code = U.c[a(1051, 1073, 1081, 1044) + a(974, 1090, 1016, 948)];
      b.error = a(1117, 994, 1062, 1079) + c(161, 161, 218, 250);
      b[a(887, 991, 938, 870)] = "The reques" + c(216, 143, 183, 159) + "file does not exist";
      return M.NextResponse.json(b, {
        status: 404
      });
    }
    function ag(a, b) {
      function c(a, b, c, d) {
        return aa(c - -1243, b - 8, b, d - 160);
      }
      if (b[d(74, 165, 125, 88)] === 0) {
        return {
          response: function () {
            let a = {};
            function b(a, b, c, d) {
              return aa(c - 71, b - 262, b, d - 418);
            }
            function c(a, b, c, d) {
              return ae(a - -13 - -498, b);
            }
            a[b(1129, 1126, 1183, 1141)] = U.c[c(-86, -158, -31, -23) + c(-186, -264, -210, -261)];
            a[b(1153, 1116, 1127, 1201)] = c(-147, -173, -224, -178) + c(-117, -43, -163, -157) + "ed";
            a[c(-202, -236, -191, -262)] = c(-122, -160, -143, -55) + c(-121, -56, -140, -113) + c(-108, -81, -92, -172) + "est";
            let d = {
              [b(1110, 1186, 1158, 1233)]: 400
            };
            return M.NextResponse.json(a, d);
          }()
        };
      }
      function d(a, b, c, d) {
        return aa(d - -1052, b - 314, c, d - 222);
      }
      let e = function (a) {
        let b;
        if (!function (a) {
          if (a.length === 0) {
            return {
              valid: false,
              error: "Path cannot be empty"
            };
          }
          for (let c = 0; c < a.length; c++) {
            let e = a[c];
            if (!e || e.trim() === "") {
              return {
                valid: false,
                error: "Path segments cannot be empty"
              };
            }
            if (e === ".." || e.includes("..")) {
              return {
                valid: false,
                error: "Path traversal is not allowed"
              };
            }
            if ((0, O.isAbsolute)(e)) {
              return {
                valid: false,
                error: "Absolute paths are not allowed"
              };
            }
            if (e.startsWith("/") || e.startsWith("\\")) {
              return {
                valid: false,
                error: "Path segments cannot start with separators"
              };
            }
            if (e.includes("\0")) {
              return {
                valid: false,
                error: "Null bytes are not allowed in paths"
              };
            }
            if (/^[a-zA-Z]:/.test(e)) {
              return {
                valid: false,
                error: "Drive letters are not allowed"
              };
            }
          }
          return {
            valid: true
          };
        }(a).valid) {
          return null;
        }
        let c = (0, O.resolve)(process.cwd(), Q.T6, Q.KT);
        try {
          let d = (0, P.realpathSync)(c);
          let e = (0, O.join)(...a);
          b = (0, O.join)(d, e);
          b = (0, O.resolve)(b);
        } catch {
          return null;
        }
        let d = (0, P.realpathSync)(c);
        if (b === d) {
          "bZFmY" !== "aylWi";
          return null;
        }
        if (!b.startsWith(d + O.sep)) {
          return null;
        }
        let f = d;
        for (let b of a) {
          f = (0, O.join)(f, b);
          try {
            if ((0, P.lstatSync)(f).isSymbolicLink()) {
              return null;
            }
          } catch (a) {
            if (a instanceof Error && "code" in a && a.code === "ENOENT") {
              break;
            }
            throw a;
          }
        }
        return b;
      }(b);
      if (!e) {
        if (d(27, 30, 111, 105) !== "tDiqV") {
          return {
            response: function (a, b) {
              let c = {};
              function d(a, b, c, d) {
                return ae(a - 24 - -498, b);
              }
              c[f(266, 334, 245, 320) + "ts"] = b.length;
              (0, Y.h4)(f(344, 338, 376, 363) + f(252, 312, 177, 239) + "pt", d(-54, 12, -58, 5), c, a[f(337, 249, 332, 280)]);
              let e = {};
              function f(a, b, c, d) {
                return aa(d - -795, b - 27, c, d - 226);
              }
              e.code = U.c[f(205, 255, 213, 255) + d(-92, -144, -98, -25) + f(381, 332, 299, 347)];
              e[d(-153, -173, -119, -165)] = d(-35, -62, 24, 37) + "set path";
              e.message = d(-163, -189, -131, -174) + f(314, 385, 428, 358) + f(465, 313, 382, 387) + "d";
              let g = {
                [f(224, 360, 336, 292)]: 400
              };
              return M.NextResponse[d(-151, -166, -214, -194)](e, g);
            }(a, b)
          };
        } else {
          let a = {
            [d(139, 7, 113, 60)]: _0x4a109c.ASSET_NOT_FOUND
          };
          a[c(-193, -254, -187, -152)] = c(-50, -10, -75, -57) + c(-63, -174, -99, -67);
          a.message = c(-126, -138, -184, -138) + "asset path" + c(-62, -169, -96, -18) + c(-85, -85, -140, -125);
          let b = {
            [d(31, 57, 60, 35)]: 404
          };
          return _0x49f719[c(-247, -159, -185, -156)](a, b);
        }
      }
      let f = {
        [d(62, 142, 59, 98)]: e
      };
      return f;
    }
    async function ah(a) {
      function b(a, b, c, d) {
        return aa(d - 52, b - 149, c, d - 217);
      }
      function c(a, b, c, d) {
        return ae(b - -397 - -498, a);
      }
      try {
        return await (0, N.stat)(a);
      } catch (a) {
        if (b(1065, 1121, 1188, 1128) !== c(-602, -554, -487, -492)) {
          let a = {};
          a[b(1216, 1113, 1229, 1167) + "ts"] = _0x1f7c6e[c(-523, -490, -471, -558)];
          _0x332c78("path-traversal-attempt", "medium", a, _0x16ec5c[c(-553, -555, -479, -514)]);
          let d = {};
          d[b(1162, 1172, 1144, 1164)] = _0x4e98d1[b(1090, 1176, 1090, 1102) + c(-547, -513, -558, -533) + b(1219, 1136, 1241, 1194)];
          d[b(1175, 1032, 1057, 1108)] = c(-497, -456, -496, -397) + b(1076, 1174, 1059, 1100);
          d.message = "Path traversal attem" + c(-492, -448, -382, -519) + "d";
          return _0x2396fb[c(-615, -572, -649, -538)](d, {
            status: 400
          });
        }
        if (a instanceof Error && c(-518, -518, -509, -552) in a && a.code === "ENOENT") {
          return null;
        }
        throw a;
      }
    }
    async function ai(a, b) {
      function c(a, b, c, d) {
        return ae(d - 1394 - -498, c);
      }
      let d = ag(a, b);
      if (c(1188, 1143, 1235, 1203) in d) {
        if (f(265, 271, 318, 325) !== f(362, 352, 358, 341)) {
          return d.response;
        } else {
          let a = _0x3b2851[f(340, 326, 366, 291)](_0x50c6d6, arguments);
          _0x452f17 = null;
          return a;
        }
      }
      let {
        securePath: e
      } = d;
      function f(a, b, c, d) {
        return aa(a - -773, b - 283, d, d - 464);
      }
      try {
        if (!(await (0, N.stat)(e))[f(389, 468, 350, 310)]()) {
          if (c(1263, 1228, 1242, 1243) !== "jeIHi") {
            return _0x1ae101();
          } else {
            let a = {};
            a[c(1229, 1274, 1277, 1273)] = U.c["ASSET_NOT_" + f(349, 332, 425, 366)];
            a[f(283, 360, 339, 256)] = "Asset not found";
            a[c(1177, 1151, 1159, 1205)] = c(1292, 1285, 1296, 1220) + "asset path" + c(1233, 1272, 1245, 1308) + "file";
            let b = {
              [c(1226, 1238, 1195, 1248)]: 404
            };
            return M.NextResponse[f(285, 331, 234, 317)](a, b);
          }
        }
        let a = await (0, N.readFile)(e);
        let d = b[b.length - 1];
        if (!d) {
          if (f(279, 247, 345, 337) !== f(279, 262, 249, 343)) {
            return null;
          } else {
            let a = {};
            a[c(1212, 1310, 1231, 1273)] = U.c[c(1373, 1258, 1376, 1321) + c(1171, 1226, 1201, 1221)];
            a[f(283, 323, 346, 245)] = "Invalid file name";
            a[f(271, 213, 213, 294)] = c(1308, 1173, 1305, 1238) + c(1245, 1218, 1231, 1263) + c(1179, 1256, 1182, 1240) + c(1338, 1237, 1338, 1297) + c(1286, 1131, 1210, 1210);
            let b = {
              [c(1193, 1305, 1257, 1248)]: 400
            };
            return M.NextResponse.json(a, b);
          }
        }
        let g = d[c(1198, 1178, 1173, 1222)](".")[f(355, 398, 319, 301)]()?.[c(1281, 1257, 1316, 1332) + "e"]();
        let h = g ? _[g] ?? f(291, 247, 312, 240) + "n/octet-st" + c(1167, 1253, 1274, 1216) : c(1296, 1214, 1148, 1225) + "n/octet-st" + f(282, 275, 353, 358);
        let i = {
          "Content-Type": h
        };
        i["X-Content-" + f(308, 306, 231, 278) + "ns"] = c(1260, 1160, 1225, 1202);
        i[c(1291, 1290, 1340, 1327) + c(1239, 1184, 1133, 1192)] = f(378, 434, 312, 363) + f(359, 425, 353, 312);
        let j = {
          [f(314, 254, 276, 343)]: 200,
          [c(1396, 1361, 1266, 1330)]: i
        };
        return new M.NextResponse(a, j);
      } catch (a) {
        if (a instanceof Error && f(339, 304, 412, 262) in a && a.code === c(1311, 1254, 1176, 1252)) {
          if (f(400, 420, 366, 337) === c(1361, 1407, 1390, 1334)) {
            let a = {};
            a[f(339, 413, 300, 398)] = U.c[c(1377, 1311, 1370, 1348) + "FOUND"];
            a.error = f(395, 402, 456, 365) + c(1244, 1318, 1245, 1305);
            a[c(1197, 1204, 1267, 1205)] = f(394, 440, 464, 471) + f(336, 341, 410, 374) + f(280, 272, 269, 281) + c(1296, 1308, 1207, 1241);
            let b = {
              [c(1174, 1299, 1236, 1248)]: 404
            };
            return M.NextResponse[c(1166, 1176, 1285, 1219)](a, b);
          } else {
            let a = _0xcb401c[_0x24dd7c[f(367, 298, 401, 432)] - 1];
            let b = a?.[f(288, 282, 350, 318)](".")[c(1334, 1320, 1366, 1289)]()?.[f(398, 378, 388, 365) + "e"]();
            if (!b || !_0x559453["allowedExt" + c(1336, 1347, 1308, 1302)][c(1309, 1250, 1354, 1310)](b)) {
              let a = {};
              a[c(1213, 1287, 1257, 1273)] = _0x1dfc83["INVALID_AS" + f(287, 216, 323, 236)];
              a[f(283, 275, 288, 241)] = c(1286, 1408, 1259, 1335) + "set extens" + c(1194, 1175, 1180, 1200);
              a[f(271, 311, 273, 311)] = f(394, 453, 455, 365) + c(1244, 1206, 1288, 1270) + c(1271, 1287, 1157, 1229) + c(1352, 1399, 1319, 1337) + c(1228, 1190, 1224, 1230);
              let b = {
                [f(314, 266, 245, 247)]: 400
              };
              return _0x244d71[c(1203, 1225, 1207, 1219)](a, b);
            }
          }
        }
        throw a;
      }
    }
    async function aj(a, b, c, d) {
      let e;
      let f = ag(a, b);
      if ("response" in f) {
        if (l(990, 963, 929, 988) === h(1253, 1296, 1247, 1276)) {
          return f[l(837, 907, 878, 945)];
        } else {
          if (_0x29e7be instanceof _0x701273 && h(1292, 1315, 1341, 1268) in _0x26ca58 && _0x5dcbbb[h(1374, 1315, 1356, 1362)] === h(1355, 1294, 1215, 1287)) {
            let a = {};
            a[h(1335, 1315, 1301, 1274)] = _0x505873[h(1413, 1390, 1337, 1316) + h(1290, 1325, 1281, 1342)];
            a[h(1305, 1259, 1223, 1265)] = "Asset not " + l(1051, 1051, 980, 985);
            a[h(1309, 1247, 1184, 1171)] = l(992, 1040, 1003, 935) + h(1278, 1312, 1258, 1239) + h(1287, 1256, 1218, 1281) + l(914, 946, 916, 883);
            let b = {
              [h(1335, 1290, 1290, 1291)]: 404
            };
            return _0x3cf4d5.json(a, b);
          }
          throw _0x9a6636;
        }
      }
      let {
        securePath: g
      } = f;
      if (d?.[h(1399, 1364, 1392, 1433) + "ensions"]?.[h(1331, 1343, 1279, 1382)]) {
        if (h(1446, 1388, 1362, 1447) !== "XdFXd") {
          let a = b[b.length - 1];
          let c = a?.[h(1300, 1264, 1213, 1282)](".")[h(1395, 1331, 1321, 1283)]()?.[h(1336, 1374, 1352, 1410) + "e"]();
          if (!c || !d[l(1044, 955, 997, 980) + h(1267, 1344, 1318, 1328)][h(1297, 1352, 1314, 1319)](c)) {
            let a = {};
            a[h(1242, 1315, 1277, 1252)] = U.c[h(1402, 1363, 1419, 1362) + l(918, 826, 896, 842)];
            a[l(963, 964, 892, 915)] = "Invalid as" + h(1232, 1301, 1374, 1269) + "ion";
            a.message = l(953, 932, 1003, 1044) + l(916, 976, 945, 887) + h(1235, 1271, 1319, 1287) + "is not allowed";
            return M.NextResponse[h(1211, 1261, 1215, 1255)](a, {
              status: 400
            });
          }
        } else {
          let a = {};
          a[h(1381, 1315, 1320, 1238)] = _0x4375ab[h(1162, 1240, 1225, 1239) + h(1369, 1368, 1427, 1331)];
          a.error = "Invalid re" + h(1330, 1330, 1324, 1259);
          a[l(945, 858, 880, 906)] = h(1345, 1370, 1385, 1315) + l(825, 947, 903, 883) + l(886, 914, 957, 1014) + "read";
          let b = {
            [l(965, 974, 923, 918)]: 400
          };
          return _0xe1d970[h(1316, 1261, 1293, 1295)](a, b);
        }
      }
      if (c === l(948, 903, 869, 900)) {
        let a = await ah(g);
        if (!a || !a.isFile()) {
          if (l(900, 972, 933, 873) !== l(1029, 950, 990, 993)) {
            return af();
          } else {
            let a = _0x31fd53.headers.get("content-le" + h(1296, 1233, 1263, 1178));
            let b = a ? _0x1f1e49(a) : _0x1b889b;
            if (_0x2ad2a4[h(1307, 1287, 1319, 1338)](b) && b > _0x19905f) {
              return _0x436d22();
            }
          }
        }
        await (0, N.unlink)(g);
        let c = {
          [h(1234, 1290, 1294, 1221)]: 200
        };
        return M.NextResponse.json({
          message: l(1040, 1025, 982, 974) + l(1014, 914, 956, 984) + l(959, 886, 950, 979),
          path: b[h(1305, 1329, 1293, 1394)]("/")
        }, c);
      }
      function h(a, b, c, d) {
        return aa(b - 203, b - 324, c, d - 76);
      }
      let i = d?.[l(903, 876, 928, 925)];
      if (i) {
        let b = a[l(1001, 936, 1005, 1073)].get(l(892, 888, 925, 879) + l(881, 924, 866, 819));
        let c = b ? Number(b) : NaN;
        if (Number.isFinite(c) && c > i) {
          return ad();
        }
      }
      if (i) {
        let b = a[h(1430, 1373, 1303, 1371)]?.[l(868, 972, 898, 920)]();
        if (!b) {
          let a = {};
          function j(a, b, c, d) {
            return aa(b - -1187, b - 425, a, d - 483);
          }
          a[j(-108, -75, -112, -121)] = U.c["INVALID_RE" + j(18, -22, 38, -42)];
          a[k(1276, 1277, 1308, 1285)] = "Invalid request body";
          a.message = k(1384, 1388, 1347, 1342) + "t body cou" + j(-15, -66, -47, -62) + j(-46, -9, 53, 33);
          let b = {};
          function k(a, b, c, d) {
            return aa(b - 221, b - 234, d, d - 433);
          }
          b.status = 400;
          return M.NextResponse[k(1342, 1279, 1329, 1347)](a, b);
        }
        let c = [];
        let d = 0;
        while (true) {
          if (h(1216, 1246, 1209, 1316) === h(1210, 1246, 1167, 1317)) {
            let a = await b[h(1451, 1381, 1330, 1385)]();
            if (a[h(1234, 1309, 1362, 1355)]) {
              break;
            }
            let e = a[l(1051, 968, 988, 951)];
            let f = d + e.byteLength;
            if (f > i) {
              await b[h(1264, 1334, 1374, 1274)]();
              return ad();
            }
            d = f;
            c[h(1279, 1321, 1263, 1326)](e);
          } else {
            let a = {};
            a.code = _0x23525b[h(1317, 1390, 1441, 1414) + l(1027, 952, 958, 982)];
            a[l(936, 846, 892, 951)] = l(962, 969, 1004, 943) + h(1383, 1347, 1410, 1297);
            a[l(957, 847, 880, 841)] = h(1408, 1370, 1339, 1423) + h(1320, 1312, 1263, 1378) + l(923, 815, 889, 834) + h(1321, 1283, 1362, 1248);
            let b = {
              [h(1364, 1290, 1352, 1279)]: 404
            };
            return _0xdd7f17[l(945, 817, 894, 840)](a, b);
          }
        }
        e = Buffer[l(1005, 907, 975, 1045)](c, d);
      } else {
        if (h(1256, 1269, 1209, 1285) === l(1089, 1024, 1013, 1029)) {
          return _0x48301();
        }
        e = Buffer[l(1000, 960, 955, 948)](await a[h(1337, 1386, 1418, 1428) + "r"]());
      }
      function l(a, b, c, d) {
        return aa(c - -164, b - 357, d, d - 115);
      }
      let m = await ah(g);
      if (c === l(1037, 997, 969, 963)) {
        if (m) {
          if (l(879, 854, 926, 949) === l(947, 1010, 979, 917)) {
            let a = {};
            a[l(998, 932, 948, 896)] = _0x1ed1db[l(1001, 1041, 1023, 990) + l(982, 986, 958, 895)];
            a[l(949, 879, 892, 929)] = h(1295, 1371, 1450, 1302) + "found";
            a.message = h(1318, 1370, 1447, 1339) + "ted asset " + l(914, 892, 889, 841) + h(1221, 1283, 1290, 1209);
            let b = {
              [h(1349, 1290, 1286, 1347)]: 404
            };
            return _0x554ede[l(932, 839, 894, 887)](a, b);
          } else {
            let a = {};
            a[l(981, 887, 948, 1027)] = U.c[h(1319, 1363, 1373, 1384) + l(868, 861, 896, 922)];
            a.error = h(1315, 1299, 1262, 1281) + h(1296, 1274, 1285, 1224);
            a[l(900, 870, 880, 807)] = h(1372, 1370, 1320, 1352) + l(922, 978, 945, 950) + h(1282, 1248, 1238, 1192) + h(1278, 1304, 1263, 1340);
            let b = {
              [h(1344, 1290, 1247, 1224)]: 409
            };
            return M.NextResponse[l(893, 824, 894, 915)](a, b);
          }
        }
        let a = {
          [h(1345, 1291, 1246, 1258)]: true
        };
        await (0, N.mkdir)((0, O.dirname)(g), a);
        await (0, N.writeFile)(g, e);
        let c = {
          [h(1308, 1290, 1320, 1238)]: 201
        };
        return M.NextResponse[l(871, 837, 894, 853)]({
          message: l(923, 1034, 981, 934) + h(1313, 1323, 1363, 1334) + h(1363, 1317, 1385, 1240),
          path: b[h(1308, 1329, 1308, 1404)]("/")
        }, c);
      }
      if (!m || !m[l(993, 922, 998, 1036)]()) {
        if (h(1279, 1275, 1226, 1218) === "gEHVw") {
          return af();
        } else {
          return _0x4279af();
        }
      }
      await (0, N.writeFile)(g, e);
      let n = {
        [l(884, 868, 923, 876)]: 200
      };
      return M.NextResponse.json({
        message: l(998, 885, 943, 903) + h(1268, 1323, 1387, 1342) + h(1379, 1317, 1329, 1244),
        path: b[l(891, 926, 962, 1013)]("/")
      }, n);
    }
    function ak(a, b) {
      let c = {};
      c[h(967, 967, 1020, 1005)] = V.QQ[h(997, 1019, 1071, 971)];
      c[h(1111, 1110, 1184, 1059)] = f(1226, 1343, 1218, 1269) + f(1251, 1341, 1276, 1287);
      let d = (0, Y.kF)(b => ai(b, a), c);
      let e = b?.requireAuth ?? true;
      function f(a, b, c, d) {
        return aa(d - 106, b - 396, c, d - 257);
      }
      let g = {};
      function h(a, b, c, d) {
        return ae(a - 1160 - -498, b);
      }
      g[f(1157, 1151, 1131, 1153) + f(1112, 1231, 1127, 1163)] = true;
      return (0, X.F0)(e ? (0, W.Z)(d, g) : d);
    }
    function al(a, b, c) {
      function d(a, b, c, d) {
        return aa(d - -530, b - 35, b, d - 167);
      }
      let e = {};
      e[i(1177, 1055, 1154, 1104)] = V.QQ[i(1187, 1143, 1104, 1134)];
      e[d(709, 726, 722, 654)] = i(1212, 1295, 1292, 1227) + d(593, 667, 662, 651);
      let f = (0, Y.kF)(d => aj(d, a, b, c), e);
      let g = c?.[d(573, 546, 510, 548) + "h"] ?? true;
      let h = {};
      function i(a, b, c, d) {
        return ae(d - 1297 - -498, c);
      }
      h[d(465, 439, 467, 517) + d(519, 475, 574, 527)] = true;
      return (0, X.F0)(g ? (0, W.Z)(f, h) : f);
    }
  }
};