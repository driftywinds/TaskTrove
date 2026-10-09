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
var h;
var I;
var b;
var y;
var g;
var m;
var v;
var w;
var E;
var D;
var A;
var T;
var R;
var S;
var k;
var N;
var M;
var L;
var j;
var V;
var Y;
var U;
var O;
var C;
var F = require(/*webcrack:missing*/"./90311.js");
var P = require("./19749.js");
var H = require("./16085.js");
var W = require("./61535.js");
var $ = require("./40659.js");
(function (e, t) {
  let n = e();
  while (true) {
    try {
      if (parseInt(er(377, 239)) / 1 + -parseInt(er(399, 288)) / 2 * (parseInt(er(359, 256)) / 3) + parseInt(er(361, 232)) / 4 * (parseInt(er(378, 259)) / 5) + parseInt(er(379, 235)) / 6 * (parseInt(er(387, 242)) / 7) + parseInt(er(398, 242)) / 8 * (parseInt(er(374, 221)) / 9) + parseInt(er(368, 229)) / 10 + -parseInt(er(395, 285)) / 11 * (parseInt(er(376, 237)) / 12) === 729458) {
        break;
      }
      n.push(n.shift());
    } catch (e) {
      n.push(n.shift());
    }
  }
})(J, 0);
let G = (r = true, function (e, t) {
  let n = r ? function () {
    if (t) {
      let n = t[er(364, 1233)](e, arguments);
      t = null;
      return n;
    }
  } : function () {};
  r = false;
  return n;
})(undefined, function () {
  return G[er(373, -321)]()[er(357, -343)](er(390, -287) + "+$")[er(373, -293)]()[er(358, 702) + "r"](G)[er(357, -334)](er(390, 743) + "+$");
});
G();
let q = F[z(379, 380, 407, 429)]({
  id: P.c2,
  title: F[B(1305, 1306, 1332, 1318)](),
  completed: F[z(383, 396, 395, 370)](),
  order: F[B(1292, 1296, 1281, 1318)]().optional(),
  estimation: F[B(1299, 1296, 1310, 1281)]()[B(1286, 1291, 1278, 1285)]()
});
export let W9 = F[B(1291, 1297, 1270, 1283)]({
  id: P.yU,
  content: F[B(1332, 1306, 1326, 1327)](),
  createdAt: H.AV,
  userId: P._k
});
function B(e, t, n, r) {
  return er(t - 925, r);
}
export let h4 = F[B(1271, 1297, 1299, 1316)]({
  id: P._k,
  username: F.string(),
  password: F.string(),
  avatar: H.mN[B(1284, 1291, 1291, 1297)](),
  apiToken: F[B(1304, 1306, 1289, 1283)]()[B(1312, 1319, 1301, 1327)](32)[u = 445, a = 0, i = 0, er(404, 445)](/^[0-9a-f]{32}$/, B(1299, 1307, 1281, 1332) + (f = 400, o = 0, l = 0, er(386, 400)) + B(1326, 1314, 1338, 1320) + B(1307, 1279, 1262, 1286) + (s = 453, c = 0, p = 0, er(392, 453)) + "g").optional()
});
export let Ol = F[z(388, 400, 407, 386)]({
  viewMode: F.enum([(d = 462, x = 0, _ = 0, er(402, 462)), B(1317, 1310, 1301, 1328), (h = 431, I = 0, b = 0, er(388, 431)), B(1308, 1330, 1335, 1328), "stats"]),
  sortBy: F.string(),
  sortDirection: F.enum([(y = 397, g = 0, m = 0, er(362, 397)), "desc"]),
  showCompleted: F[z(405, 381, 395, 387)](),
  showArchived: F[B(1281, 1285, 1292, 1292)]()[B(1285, 1291, 1296, 1271)](),
  showOverdue: F[z(376, 396, 395, 376)](),
  searchQuery: F[z(398, 416, 416, 420)](),
  showSidePanel: F[B(1276, 1285, 1280, 1277)](),
  showPlanner: F[z(412, 410, 395, 370)]()[v = 387, w = 0, E = 0, er(366, 387)](),
  compactView: F[B(1302, 1285, 1261, 1265)](),
  collapsedSections: F[B(1325, 1326, 1332, 1311)](F[z(395, 390, 416, 442)]()).optional(),
  activeFilters: F.object({
    projectIds: F[B(1335, 1326, 1342, 1310)](P.Qt)[D = 402, A = 0, T = 0, er(366, 402)](),
    labels: F[z(443, 453, 436, 433)](P.zy)[B(1277, 1281, 1302, 1279)]()[B(1316, 1291, 1275, 1271)](),
    priorities: F[B(1340, 1326, 1323, 1338)](F[B(1309, 1294, 1307, 1272)]([F.literal(1), F.literal(2), F[z(414, 446, 419, 432)](3), F[z(432, 426, 419, 425)](4)])).optional(),
    completed: F.boolean()[R = 391, S = 0, k = 0, er(366, 391)](),
    dueDateFilter: F[B(1313, 1297, 1283, 1292)]({
      preset: F[z(451, 437, 438, 447)]([(N = 392, M = 0, L = 0, er(355, 392)), B(1311, 1290, 1264, 1268), B(1305, 1295, 1305, 1294), "thisWeek", B(1330, 1308, 1321, 1297), B(1268, 1275, 1285, 1300)])[B(1265, 1291, 1295, 1268)](),
      customRange: F[B(1317, 1297, 1314, 1319)]({
        start: F[B(1341, 1322, 1348, 1314)]()[B(1272, 1291, 1310, 1290)](),
        end: F.date()[j = 422, V = 0, Y = 0, er(366, 422)]()
      })[U = 374, O = 0, C = 0, er(366, 374)]()
    })[B(1287, 1291, 1316, 1283)]()
  })[B(1308, 1291, 1319, 1312)]()
});
function z(e, t, n, r) {
  return er(n - 35, e);
}
F[B(1298, 1325, 1337, 1327)](F[er(381, 415)](), Ol);
F[B(1298, 1297, 1270, 1281)]({
  sidePanelWidth: F[B(1284, 1296, 1299, 1278)]()[er(393, 411)](20)[er(396, 412)](80),
  sideBarWidth: F[er(371, 432)]()[B(1326, 1318, 1310, 1308)](250)[er(396, 457)](480),
  showSidePanel: F.boolean(),
  showCalendarEvents: F[B(1271, 1285, 1262, 1313)](),
  calendarAutoSyncMinutes: F.number().int().nonnegative(),
  peopleOwnerCollapsed: F[er(360, 371)](),
  peopleAssigneesCollapsed: F.boolean(),
  dismissedUi: F.record(F.string(), F[B(1285, 1285, 1280, 1302)]())[B(1254, 1278, 1255, 1288)]({}),
  recentViewDays: F.number()[er(351, 410)]().positive()
});
export let pj = F.object({
  id: P.I_,
  title: F[B(1321, 1306, 1306, 1332)](),
  description: F[er(381, 405)]().optional(),
  completed: F[er(360, 378)](),
  archived: F.boolean()[er(366, 406)](),
  priority: F[er(369, 416)]([F.literal(1), F[B(1282, 1309, 1317, 1287)](2), F.literal(3), F[er(384, 413)](4)]),
  dueDate: H.jb.optional(),
  dueTime: H.ii[B(1316, 1291, 1283, 1267)](),
  projectId: P.Qt[er(366, 375)](),
  labels: F[er(401, 449)](P.zy),
  subtasks: F[B(1349, 1326, 1305, 1301)](q),
  comments: F[er(401, 428)](W9),
  createdAt: H.AV,
  completedAt: H.AV.optional(),
  recurring: F[B(1330, 1306, 1302, 1311)]()[B(1303, 1291, 1278, 1281)]()[er(363, 408) + "e"](W.B_),
  recurringMode: F[er(369, 408)]([F[B(1299, 1309, 1297, 1289)](er(352, 401)), F[er(384, 442)](er(380, 401) + "t"), F.literal("autoRollover")]),
  estimation: F[er(371, 430)]().optional(),
  trackingId: P.I_.optional()
});
function J() {
  let e = ["table", "noDueDate", "int", "dueDate", "default", "er hexadec", "overdue", "nullable", "search", "constructo", "1669593mMpdKX", "boolean", "4mMcpDH", "asc", "superRefin", "apply", "today", "optional", "due", "2064550WebBEL", "union", "tomorrow", "number", "object", "toString", "9SHDNim", "reminder", "5475636awuvPV", "1433936bIzPfK", "5156825lBmMJZ", "6KGuaTi", "completedA", "string", "API token ", "nextWeek", "literal", "kanban", "must be a ", "3018883ABvWaU", "calendar", "32-charact", "(((.+)+)+)", "set", "imal strin", "min", "length", "55LawmtO", "max", "date", "3715832PUyXGu", "2EFLVSh", "record", "array", "list", "enum", "regex"];
  return (J = function () {
    return e;
  })();
}
export let J8 = F[er(372, 434)]({
  id: P.Qt,
  name: F.string(),
  color: F[er(381, 404)](),
  sections: F[er(401, 426)]($._d)[B(1303, 1318, 1302, 1330)](1)
});
export let Wp = F[er(372, 387)]({
  id: P.zy,
  name: F[B(1331, 1306, 1286, 1304)](),
  color: F[B(1280, 1306, 1288, 1288)]()
});
let en = F[B(1290, 1297, 1323, 1270)]({
  taskId: P.I_,
  taskTitle: F[er(381, 442)](),
  notifyAt: H.AV,
  type: F.enum([er(367, 375), B(1277, 1300, 1287, 1319)])
});
function er(e, t) {
  let n = J();
  return (er = function (e, t) {
    return n[e -= 350];
  })(e, t);
}
F[B(1337, 1316, 1316, 1294)](en);