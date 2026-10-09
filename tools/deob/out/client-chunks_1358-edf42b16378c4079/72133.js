let n;
var o = require("./22688.js");
var i = require(/*webcrack:missing*/"./84852.js");
var u = require(/*webcrack:missing*/"./61212.js");
var a = require(/*webcrack:missing*/"./10327.js");
var _l = require(/*webcrack:missing*/"./31453.js");
var s = require(/*webcrack:missing*/"./54932.js");
var c = require("./33006.js");
(function (e, t) {
  let r = e();
  while (true) {
    try {
      var n;
      var o;
      var i;
      var u;
      var a;
      var l;
      var s;
      var c;
      var d;
      var f;
      var x;
      var m;
      var _;
      var g;
      var b;
      if (-parseInt((n = -287, o = -287, p(n - -635, o))) / 1 + -parseInt(p(328, -168)) / 2 + parseInt((i = -151, p(i - -488, -147))) / 3 + parseInt((u = -155, a = -147, p(a - -488, u))) / 4 * (-parseInt((l = -166, s = -158, p(s - -488, l))) / 5) + parseInt((c = -139, d = -144, p(d - -488, c))) / 6 + -parseInt((f = -144, x = -141, p(x - -488, f))) / 7 * (parseInt((m = -139, _ = -148, p(_ - -488, m))) / 8) + parseInt((g = -154, b = -146, p(b - -488, g))) / 9 === 248158) {
        break;
      }
      r.push(r.shift());
    } catch (e) {
      r.push(r.shift());
    }
  }
})(f, 0);
let d = (n = true, function (e, t) {
  let r = n ? function () {
    if (p(331, -182) === "DgnQL") {
      return _0x2c0155[p(343, -172)]()[p(346, -166)]("(((.+)+)+)+$")[p(343, 538)]().constructor(_0x371497)[p(346, -153)]("(((.+)+)+)+$");
    }
    if (t) {
      if (p(349, -156) === "asiEx") {
        return _0x44eb39(_0x374510, _0x234c8b[p(334, -179)]);
      }
      {
        let r = t[p(332, -182)](e, arguments);
        t = null;
        return r;
      }
    }
  } : function () {};
  n = false;
  return r;
})(undefined, function () {
  return d.toString()[p(346, -132)](p(339, -143) + "+$")[p(343, 603)]()[p(338, 600) + "r"](d)[p(346, 625)](p(339, -147) + "+$");
});
function f() {
  let e = ["(test mode", "495945YLSDsu", "constructo", "(((.+)+)+)", "1553304faYDnT", "4DBdTbO", "4905351owQaIC", "toString", "1398324ulTrxX", "success", "search", "14jypLSB", "240207etWOCE", "UOJPP", "PATCH", "126958hQnbZz", "ingsMutati", "16190wXOgfo", "AXjzE", "apply", "V1_SETTING", "settings", "debugLabel"];
  return (f = function () {
    return e;
  })();
}
function p(e, t) {
  let r = f();
  return (p = function (e, t) {
    return r[e -= 328];
  })(e, t);
}
d();
export let l = (0, c.W)({
  method: p(350, -628),
  operationName: "Updated settings",
  apiEndpoint: u.QQ[p(333, -649) + "S"],
  resourceQueryKey: _l.bC,
  defaultResourceValue: a.cL,
  responseSchema: i.zf,
  serializationSchema: o.n9,
  logModule: "settings",
  testResponseFactory: e => {
    let t = (0, s.D9)(a.cL, e[n(539, 530, 528, 551)]);
    let r = {};
    function n(e, t, r, n) {
      return p(e - 637 - -432, t);
    }
    function o(e, t, r, n) {
      return p(n - 1234 - -432, r);
    }
    r[n(550, 550, 557, 551)] = true;
    r[o(1124, 1142, 1128, 1136)] = t;
    r.message = "Settings updated successfully " + o(1133, 1133, 1138, 1138) + ")";
    return r;
  },
  optimisticUpdateFn: (e, t) => (0, s.D9)(t, e[p(334, -485)])
});
l[p(335, -95)] = "updateSett" + p(329, -667) + "onAtom";