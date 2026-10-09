let r;
var u;
var a;
var i;
var f;
var o;
var l;
var s;
var c;
var p;
var d;
var x;
var _;
var h = require(/*webcrack:missing*/"./90311.js");
var I = require(/*webcrack:missing*/"./31453.js");
(function (e, t) {
  let n = e();
  while (true) {
    try {
      if (-parseInt(v(459, 1400)) / 1 * (-parseInt(v(451, 1401)) / 2) + parseInt(v(449, 1405)) / 3 * (parseInt(v(460, 1410)) / 4) + -parseInt(v(463, 1396)) / 5 + -parseInt(v(468, 1406)) / 6 + parseInt(v(446, 1032)) / 7 * (parseInt(v(452, 1050)) / 8) + -parseInt(v(453, 1043)) / 9 * (-parseInt(v(444, 1045)) / 10) + -parseInt(v(462, 1060)) / 11 === 331499) {
        break;
      }
      n.push(n.shift());
    } catch (e) {
      n.push(n.shift());
    }
  }
})(R, 0);
let b = (r = true, function (e, t) {
  let n = r ? function () {
    if (t) {
      let n = t[v(454, -70)](e, arguments);
      t = null;
      return n;
    }
  } : function () {};
  r = false;
  return n;
})(undefined, function () {
  return b[v(464, 1323)]()[v(457, 1320)](v(455, 1323) + "+$")[v(464, 1179)]().constructor(b).search(v(455, 1327) + "+$");
});
b();
export let Pq = h[T(1328, 1334, 1341, 1324)]({
  autoBackup: h[T(1328, 1332, 1324, 1326)]({
    enabled: h[D(420, 437, 433, 428)](),
    backupTime: h[T(1325, 1319, 1317, 1326)]().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
    runOnInit: h[T(1338, 1342, 1343, 1326)]().optional(),
    maxBackups: h[T(1346, 1335, 1339, 1359)]()
  })
});
export let sV = h[T(1328, 1318, 1331, 1319)]({
  enabled: h.boolean(),
  requireInteraction: h[D(422, 441, 429, 428)]()
});
export let H7 = h[T(1328, 1318, 1336, 1321)]({
  startView: h.union([h[D(428, 430, 417, 420)](I.HV), h[D(423, 419, 437, 431)]("lastViewed")]),
  soundEnabled: h[D(430, 429, 437, 428)](),
  linkifyEnabled: h[D(426, 423, 419, 428)](),
  markdownEnabled: h[T(1338, 1325, 1340, 1339)](),
  popoverHoverOpen: h[T(1338, 1325, 1328, 1334)](),
  preferDayMonthFormat: h[D(423, 430, 426, 428)]()
});
function v(e, t) {
  let n = R();
  return (v = function (e, t) {
    return n[e -= 443];
  })(e, t);
}
export let hA = h[D(423, 425, 412, 418)]({
  weekStartsOn: h[D(428, 411, 413, 417)]([h[D(418, 432, 424, 431)](0), h[T(1341, 1328, 1341, 1332)](1), h[D(420, 444, 437, 431)](2), h[T(1341, 1351, 1332, 1354)](3), h.literal(4), h.literal(5), h[T(1341, 1344, 1347, 1339)](6)])[function (e, t, n, r) {
    return v(r - -30, t);
  }(409, 400, 409, 413)](),
  showWeekNumber: h[D(425, 440, 426, 428)]()[function (e, t, n, r) {
    return v(r - -30, t);
  }(403, 417, 408, 413)](),
  use24HourTime: h[D(417, 437, 432, 428)]()[function (e, t, n, r) {
    return v(r - -30, t);
  }(426, 400, 400, 413)]()
});
let E = {};
function D(e, t, n, r) {
  return v(r - -30, t);
}
E.data = Pq;
E.notifications = sV;
E[u = 0, a = 424, i = 0, v(467, 424)] = H7;
E[T(1345, 1336, 1335, 1349)] = hA;
export let aK = h[f = 0, o = 417, l = 0, v(448, 417)](E);
function T(e, t, n, r) {
  return v(e - 880, r);
}
function R() {
  let e = ["enum", "10jkXCSZ", "62960enYeuP", "2595357ahPpHS", "apply", "(((.+)+)+)", "partial", "search", "boolean", "99455mSnKcD", "68arsBxL", "literal", "8503539gWoszT", "2484385JSZgrB", "toString", "uiSettings", "number", "general", "1171872PzFLlO", "optional", "10AXIBYc", "string", "378cncBHG", "union", "object", "103431TevlZO"];
  return (R = function () {
    return e;
  })();
}
export let Jv = h[T(1328, 1337, 1341, 1322)]({
  data: Pq[T(1336, 1340, 1340, 1342)]()[s = 0, c = 405, p = 0, v(443, 405)](),
  notifications: sV.partial()[T(1323, 1335, 1329, 1311)](),
  general: H7.partial().optional(),
  uiSettings: hA[d = 0, x = 439, _ = 0, v(456, 439)]().optional()
});