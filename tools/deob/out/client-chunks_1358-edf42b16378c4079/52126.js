let n;
export let x0 = I.x;
var o;
var i;
var u;
var a;
var l;
var s;
var c = require(/*webcrack:missing*/"./85980.js");
var d = require("./22688.js");
var f = require(/*webcrack:missing*/"./84852.js");
var p = require(/*webcrack:missing*/"./41356.js");
var x = require(/*webcrack:missing*/"./61212.js");
var m = require(/*webcrack:missing*/"./10327.js");
var _ = require(/*webcrack:missing*/"./31453.js");
var g = require(/*webcrack:missing*/"./54932.js");
var b = require("./33006.js");
var I = require("./78563.js");
(function (e, t) {
  let r = e();
  while (true) {
    try {
      var n;
      var o;
      var i;
      var u;
      var a;
      if (parseInt(U(412, 1018)) / 1 + parseInt(U(383, 961)) / 2 * (parseInt((n = -206, o = -212, U(o - -581, n))) / 3) + -parseInt(U(416, 1000)) / 4 * (parseInt(U(390, 988)) / 5) + -parseInt(U(413, 1016)) / 6 + -parseInt((i = -223, u = -202, U(u - -581, i))) / 7 * (-parseInt(U(392, 998)) / 8) + -parseInt((a = -207, U(a - -581, -206))) / 9 + parseInt(U(367, 967)) / 10 === 197662) {
        break;
      }
      r.push(r.shift());
    } catch (e) {
      r.push(r.shift());
    }
  }
})(w, 0);
let y = (n = true, function (e, t) {
  let r = n ? function () {
    if (t) {
      let r = t.apply(e, arguments);
      t = null;
      return r;
    }
  } : function () {};
  n = false;
  return r;
})(undefined, function () {
  return y.toString()[U(402, 825)](U(414, 1113) + "+$")[U(370, 1095)]().constructor(y).search(U(414, 848) + "+$");
});
function h(e, t, r, n) {
  return U(r - 635, e);
}
function w() {
  let e = ["debugLabel", "User delet", "327480zULdsa", "752436NOFInS", "(((.+)+)+)", "ted-test-a", "88fwLmaE", "createUser", "DELETE", "t mode)", "562100pHKnov", "imistic-pl", "1761rXQYru", "toString", "user", "deleteUser", "fully (tes", "3479004QCNPWj", "tar/simula", "message", "deletedUse", "avatar", "257915EVJwPa", "role", "rId", "data", "982Ralxtq", "Deleted us", "updateUser", "MutationAt", "Updated us", "$2a$10$moc", "vatar.png", "50045cvvxzq", "username", "56dXxrLW", "$2a$10$opt", "V1_USER", "map", "POST", "userId", "PATCH", "success", "assets/ava", "ionAtom", "search", "ed success", "aceholder", "ked-hashed", "AdminMutat", "labels", "-password", "Created us"];
  return (w = function () {
    return e;
  })();
}
y();
export let w5 = (0, b.W)({
  method: (o = 0, i = 705, u = 0, U(396, 705)),
  operationName: (a = 0, l = 715, s = 0, U(409, 715) + "er"),
  apiEndpoint: x.QQ[h(1036, 1014, 1029, 1004)],
  resourceQueryKey: _.CW,
  defaultResourceValue: [],
  invalidateQueryKeys: [_.CW, _.$t],
  responseSchema: f._5,
  serializationSchema: d.Oq,
  logModule: "user-admin",
  testResponseFactory: e => {
    let t = {
      id: (0, p.dB)((0, c.A)()),
      username: e[o(-308, -328, -324, -303)],
      password: r(-324, -327, -303, -305) + r(-315, -310, -320, -337) + r(-281, -307, -307, -287),
      role: e[o(-319, -296, -341, -305)],
      avatar: e[o(-321, -324, -309, -313)] ? (0, x.FY)(r(-307, -315, -312, -308) + r(-318, -340, -355, -340) + r(-309, -300, -300, -298) + o(-310, -332, -304, -316)) : undefined
    };
    function r(e, t, r, n) {
      return U(t - -1026 - 311, n);
    }
    let n = {};
    function o(e, t, r, n) {
      return U(e - -1010 - 311, r);
    }
    n[o(-300, -312, -293, -308)] = true;
    n[o(-328, -335, -333, -332)] = t;
    n.message = "User creat" + r(-308, -312, -317, -326) + o(-326, -340, -344, -342) + r(-287, -296, -302, -284);
    return n;
  },
  optimisticUpdateFn: (e, t) => {
    function r(e, t, r, n) {
      return U(n - -12 - 311, t);
    }
    return [...t, {
      id: (0, p.dB)((0, c.A)()),
      username: e[h(161, -206, 1026, 97)],
      password: r(666, 701, 695, 692) + r(643, 643, 682, 667) + r(685, 692, 703, 703),
      role: e[h(142, -238, 1015, 78)],
      avatar: undefined
    }];
  }
});
w5[U(410, 731)] = h(1040, 1066, 1052, 1048) + U(386, 697) + "om";
export let A1 = (0, b.W)({
  method: h(1050, 1045, 1033, 1047),
  operationName: h(1007, 1004, 1022, 1040) + "er",
  apiEndpoint: x.QQ[U(394, 697)],
  resourceQueryKey: _.CW,
  defaultResourceValue: [],
  invalidateQueryKeys: [_.CW, _.$t],
  responseSchema: f.Xs,
  serializationSchema: d.UM,
  logModule: "user-admin",
  testResponseFactory: e => {
    let t = (0, g.j7)(e);
    let r = e[o(74, 88, 82, 68)] !== undefined ? e[u(-75, -100, -92, -105)] === null ? undefined : (0, x.FY)(u(-82, -78, -90, -66) + u(-103, -103, -95, -106) + o(83, 112, 80, 105) + u(-83, -89, -83, -114)) : m.Az.avatar;
    let n = {
      ...m.Az,
      ...t
    };
    function o(e, t, r, n) {
      return h(t, t - 350, n - -945, n - 293);
    }
    n.id = e.id || m.Az.id;
    n.avatar = r;
    let i = {};
    function u(e, t, r, n) {
      return h(r, t - 121, t - -1113, n - 252);
    }
    i[o(95, 98, 72, 89)] = true;
    i[u(-105, -107, -97, -95)] = n;
    i[u(-90, -102, -128, -91)] = "User updat" + u(-60, -75, -98, -92) + o(78, 37, 77, 63) + "t mode)";
    return i;
  },
  optimisticUpdateFn: (e, t) => {
    let r = e.id || m.Az.id;
    function n(e, t, r, n) {
      return U(r - -563 - 311, t);
    }
    return t[n(149, 154, 143, 146)](t => {
      var o;
      if (t.id === r) {
        return {
          ...t,
          ...(0, g.j7)(e),
          avatar: t[o = 1317, n(902, 1317, 126, 920)]
        };
      } else {
        return t;
      }
    });
  }
});
function U(e, t) {
  let r = w();
  return (U = function (e, t) {
    return r[e -= 367];
  })(e, t);
}
A1.debugLabel = U(385, 719) + U(406, 736) + U(401, 736);
export let pP = (0, b.W)({
  method: h(1065, 1055, 1053, 1051),
  operationName: U(384, 683) + "er",
  apiEndpoint: x.QQ[h(1044, 1040, 1029, 1004)],
  resourceQueryKey: _.CW,
  defaultResourceValue: [],
  invalidateQueryKeys: [_.CW, _.$t, ["data", "tasks"], [h(1011, 1028, 1017, 1000), "projects"], [h(997, 991, 1017, 1008), h(1036, 1057, 1042, 1067)]],
  responseSchema: f.V_,
  serializationSchema: d.h0,
  logModule: "user-admin",
  testResponseFactory: e => {
    let t = {};
    function r(e, t, r, n) {
      return h(t, t - 251, r - -1385, n - 374);
    }
    function n(e, t, r, n) {
      return h(e, t - 224, r - -1447, n - 202);
    }
    t[n(-418, -407, -413, -420)] = true;
    t[n(-455, -429, -435, -444) + r(-362, -388, -369, -389)] = e[r(-359, -370, -353, -365)];
    t[n(-428, -460, -436, -448)] = n(-375, -392, -401, -426) + n(-410, -416, -409, -399) + n(-440, -421, -439, -425) + "t mode)";
    return t;
  },
  optimisticUpdateFn: (e, t) => t.filter(t => t.id !== e[h(-480, -795, 1032, -898)])
});
pP[h(1051, 1063, 1045, 1028)] = h(991, 1002, 1007, 1023) + U(386, 682) + "om";