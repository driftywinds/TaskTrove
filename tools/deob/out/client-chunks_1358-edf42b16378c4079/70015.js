let n;
export let Zs = x.Zs;
var o = require(/*webcrack:missing*/"./22814.js");
var i = require(/*webcrack:missing*/"./85980.js");
var u = require("./33006.js");
var a = require("./22688.js");
var l = require(/*webcrack:missing*/"./84852.js");
var s = require(/*webcrack:missing*/"./41356.js");
var c = require(/*webcrack:missing*/"./61212.js");
var d = require(/*webcrack:missing*/"./31453.js");
var f = require("./48795.js");
var p = require(/*webcrack:missing*/"./51547.js");
var x = require("./50978.js");
var m = require("./27085.js");
var _ = require("./99512.js");
var g = require(/*webcrack:missing*/"./54932.js");
(function (e, t) {
  let r = e();
  while (true) {
    try {
      if (parseInt(y(400, 221)) / 1 + -parseInt(y(414, 272)) / 2 * (-parseInt(y(378, 13)) / 3) + -parseInt(y(422, 91)) / 4 * (-parseInt(y(403, 86)) / 5) + parseInt(y(401, 260)) / 6 + -parseInt(y(402, 225)) / 7 + -parseInt(y(399, 87)) / 8 * (parseInt(y(411, 73)) / 9) + parseInt(y(388, 30)) / 10 === 760887) {
        break;
      }
      r.push(r.shift());
    } catch (e) {
      r.push(r.shift());
    }
  }
})(I, 0);
let b = (n = true, function (e, t) {
  let r = n ? function () {
    if (t) {
      if (y(359, -111) !== y(359, -134)) {
        let e = _0x25f308[y(405, 1345)](_0x176ccb, arguments);
        _0x1406cb = null;
        return e;
      }
      {
        let r = t[y(405, 1318)](e, arguments);
        t = null;
        return r;
      }
    }
  } : function () {};
  n = false;
  return r;
})(undefined, function () {
  return b.toString()[y(419, 1340)](y(410, 644) + "+$")[y(379, 633)]()[y(363, 664) + "r"](b)[y(419, 719)](y(410, 710) + "+$");
});
function I() {
  let e = ["taskId", "max", "debugLabel", "t mode)", "dPointCap", "7099952oesdNS", "569892BrdROK", "1446366ZsxagT", "8580740YGiYTa", "19930NuWmOO", "igger] Fai", "apply", "rewardsEna", "completed", "dueDate", "type", "(((.+)+)+)", "9QpvrhX", "mutateAsyn", "Idhfq", "10uASuuQ", "nts", "tsuVE", "isArray", "ask", "search", "projectId", "AOoip", "932SPFEsK", "wardsEnabl", "currencyRe", "iudSA", "cap reache", "bled", "ate reward", "amount", "Optimistic", "dailyRewar", "productivi", "entityId", "POST", "ly reward ", "GLatQ", "Created ta", "ntEsG", "recurringM", "led to cre", "eventType", "constructo", "g event", "ode", "ZESbV", "assignees", "MutationAt", "ETED", " task not ", " event:", "cydvZ", "events", "PLETED", "d, skippin", "userId", "rLxcj", "307413niuquq", "toString", "[reward-tr", "TASK_COMPL", "createTask", "info", "priority", "ownerId", "currencyId", "message", "6221550sKZOEF", "reward", "provided", "labels", "Task creat", "cap"];
  return (I = function () {
    return e;
  })();
}
function y(e, t) {
  let r = I();
  return (y = function (e, t) {
    return r[e -= 358];
  })(e, t);
}
b();
export let Ei = (0, u.W)({
  method: y(434, 843),
  operationName: y(358, 737) + "sk",
  resourceQueryKey: d.si,
  defaultResourceValue: [],
  responseSchema: l.c3,
  serializationSchema: a.ny,
  testResponseFactory: () => {
    let e = (0, s.fP)((0, i.A)());
    let t = {};
    function r(e, t, r, n) {
      return y(t - -893 - 383, n);
    }
    t.success = true;
    t.taskIds = [e];
    t[r(-123, -123, -99, -108)] = y(392, 1068) + "ed successfully (tes" + r(-143, -113, -133, -125);
    return t;
  },
  optimisticDataFactory: e => {
    function t(e, t, r, n) {
      return y(t - -936 - 383, n);
    }
    function r(e, t, r, n) {
      return y(e - -991 - 383, r);
    }
    return {
      id: (0, s.fP)((0, i.A)()),
      completed: d.KA,
      subtasks: d.BH,
      comments: d.Tn,
      createdAt: new Date(),
      completedAt: undefined,
      ...e,
      title: e.title || d.zg,
      priority: e[t(-132, -169, -177, -148)] || d.Jx,
      projectId: e[r(-188, -196, -188, -209)] || c.ZB,
      labels: e[r(-217, -250, -224, -232)] || [],
      ownerId: e[r(-223, -229, -230, -202)],
      assignees: e[t(-190, -186, -189, -209)],
      dueDate: e[t(-169, -145, -131, -115)] ? e[r(-200, -160, -169, -187)] instanceof Date ? e[r(-200, -166, -222, -194)] : new Date(e[t(-144, -145, -165, -167)]) : undefined,
      recurringMode: e[r(-248, -244, -252, -267) + t(-204, -188, -178, -210)] || d.C6
    };
  },
  optimisticUpdateFn: (e, t, r) => {
    function n(e, t, r, n) {
      return y(t - -525 - 689, n);
    }
    if (!r) {
      throw Error(n(630, 594, 591, 584) + y(370, 294) + n(579, 554, 551, 518));
    }
    return [...t, r];
  }
});
Ei[y(396, 1063)] = y(382, 1055) + y(368, 1021) + "om";
export let Oq = (0, o.eU)(e => {
  let t = e(x.Oq);
  return {
    ...t,
    mutateAsync: async r => {
      var n;
      var o;
      var i;
      var u;
      var a;
      var l;
      var s;
      var d;
      var x;
      var b;
      var I;
      var h;
      var w;
      var v;
      var A;
      function U(e, t, r, n) {
        return y(r - 920, e);
      }
      if (y(377, -618) !== "CehGG") {
        let j = e(f.yK);
        let k = e(_.Uw);
        let S = e(f.p9);
        let R = e(f.FU);
        let P = R.productivity?.[y(406, 51) + y(427, 212)] ?? true;
        let T = R.productivity?.["currencyRe" + y(423, 825) + "ed"] ?? true;
        let D = await t[y(412, -558) + "c"](r);
        if (P) {
          let t = e(m.e);
          let f = Array[U(1328, 1361, 1337, 1315)](r) ? r : [r];
          let _ = R[U(1349, 1359, 1352, 1361) + "ty"]?.[U(1336, 1348, 1351, 1382) + U(1309, 1357, 1318, 1339)];
          let P = 0;
          for (let e of f) {
            if (U(1309, 1269, 1292, 1279) === U(1353, 1300, 1333, 1364)) {
              return _0x3ea151.productivity?.[U(1335, 1313, 1344, 1308) + "wardsEnabled"] ?? true;
            } else if (e.completed !== undefined) {
              let r = j.find(t => t.id === e.id);
              if (r && r[U(1315, 1300, 1327, 1320)] !== e[y(407, -602)]) {
                if (U(1364, 1333, 1356, 1338) !== "GKswj") {
                  let f = e[U(1343, 1361, 1327, 1324)] ? U(1294, 1335, 1301, 1274) + U(1267, 1251, 1289, 1278) : "TASK_UNCOM" + U(1298, 1282, 1294, 1267);
                  let m = y(389, -602) in e ? e[y(389, -587)] : r.reward;
                  let j = {
                    [y(373, -654)]: k,
                    [y(376, -574)]: S.id,
                    cap: _,
                    ["pointsPerT" + y(418, -533)]: c.Uo,
                    ["pendingPoi" + U(1303, 1361, 1335, 1347)]: P
                  };
                  if (f === y(381, -586) + y(369, -626) && (0, g.a4)(j)) {
                    if (y(366, -630) !== "XOHWB") {
                      let t = {
                        [y(394, -629)]: e.id,
                        [y(393, -607)]: _,
                        [y(376, -603)]: S.id
                      };
                      p.Rm[U(1342, 1275, 1303, 1342)](t, "[reward-trigger] Dai" + y(435, -583) + U(1338, 1314, 1346, 1364) + U(1319, 1275, 1295, 1333) + y(364, -611));
                      continue;
                    }
                    if (_0x4fc158) {
                      let e = _0x2a887d[U(1302, 1331, 1325, 1332)](_0x5580d9, arguments);
                      _0x275c0b = null;
                      return e;
                    }
                  }
                  try {
                    let r = {
                      [(n = -608, y(409, n))]: f,
                      [U(1373, 1354, 1353, 1370)]: e.id
                    };
                    await t.mutateAsync(r);
                    if (T && m?.[U(1283, 1308, 1306, 1336)] && m[o = -560, i = -580, y(o - -989, i)] !== undefined) {
                      let r = {
                        [(u = -580, a = -566, y(u - -989, a))]: f,
                        [U(1316, 1343, 1353, 1318)]: e.id
                      };
                      r[U(1310, 1329, 1306, 1280)] = m[l = -565, y(386, l)];
                      r[s = -532, y(429, s)] = m[U(1380, 1369, 1349, 1387)];
                      await t[d = -577, y(d - -989, -552) + "c"](r);
                    }
                    if (f === (x = -608, b = -591, y(x - -989, b) + (I = -620, h = -620, y(I - -989, h)))) {
                      if (U(1306, 1309, 1341, 1357) !== "AOoip") {
                        _0x5f0b71 = _0x24fcc5[U(1312, 1314, 1315, 1317)](0, _0x2b1e7e - _0x46a0b0);
                      } else {
                        P += c.Uo;
                      }
                    } else {
                      P = Math[U(1312, 1319, 1315, 1317)](0, P - c.Uo);
                    }
                    let _ = {
                      [U(1282, 1298, 1314, 1324)]: e.id,
                      [U(1267, 1246, 1282, 1251)]: f
                    };
                    p.Rm[w = -606, y(w - -989, -624)](_, (v = -609, A = -621, y(v - -989, A) + "igger] Reward event created"));
                  } catch (e) {
                    if (y(416, -596) === y(425, -550)) {
                      return _0x20e452[U(1368, 1323, 1352, 1348) + "ty"]?.[U(1358, 1310, 1326, 1327) + "bled"] ?? true;
                    }
                    p.Rm.error("[reward-tr" + U(1344, 1361, 1324, 1303) + U(1308, 1318, 1281, 1273) + "ate reward" + y(371, -645), e);
                  }
                } else {
                  _0x5392c7.error(U(1333, 1315, 1300, 1321) + "igger] Fai" + y(361, -628) + U(1333, 1380, 1348, 1381) + " event:", _0x42ea5b);
                }
              }
            }
          }
        }
        return D;
      }
      _0x2f86c6 = false;
      if (_0x1eaadb) {
        return function () {
          if (_0x1f0f59) {
            let e = _0x27fc81[U(96, -84, 1325, -372)](_0x3a6b33, arguments);
            _0x528cac = null;
            return e;
          }
        };
      } else {
        return function () {};
      }
    }
  };
});
Oq[y(396, 817)] = "updateTasksMutationAtom";