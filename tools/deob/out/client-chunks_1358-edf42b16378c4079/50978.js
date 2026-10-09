let n;
var o = require(/*webcrack:missing*/"./85980.js");
var i = require("./22688.js");
var u = require(/*webcrack:missing*/"./84852.js");
var a = require(/*webcrack:missing*/"./41356.js");
var l = require(/*webcrack:missing*/"./61212.js");
var s = require(/*webcrack:missing*/"./31453.js");
var c = require(/*webcrack:missing*/"./54932.js");
var d = require("./33006.js");
var f = require("./71420.js");
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
      if (parseInt((n = -392, o = -372, m(n - -520, o))) / 1 + parseInt((i = -375, u = -383, m(i - -520, u))) / 2 * (-parseInt(m(149, 163)) / 3) + -parseInt((a = -381, m(a - -520, -377))) / 4 * (parseInt((l = -390, s = -412, m(l - -520, s))) / 5) + -parseInt(m(118, 153)) / 6 + parseInt(m(137, 170)) / 7 * (-parseInt(m(150, 167)) / 8) + -parseInt(m(159, 172)) / 9 * (-parseInt((c = -408, m(134, c))) / 10) + -parseInt((d = -363, f = -368, m(d - -520, f))) / 11 * (-parseInt(m(136, 141)) / 12) === 873465) {
        break;
      }
      r.push(r.shift());
    } catch (e) {
      r.push(r.shift());
    }
  }
})(x, 0);
let p = (n = true, function (e, t) {
  let r = n ? function () {
    if (t) {
      if (m(160, 18) !== m(147, -9)) {
        let r = t[m(114, 830)](e, arguments);
        t = null;
        return r;
      }
      if (!_0x47f751) {
        throw new _0x4f2bbe("Optimistic" + m(129, -28) + m(126, 5));
      }
      return [..._0x234e60, _0x51d83e];
    }
  } : function () {};
  n = false;
  return r;
})(undefined, function () {
  return p[m(121, -837)]()[m(123, -509)](m(125, -503) + "+$").toString()[m(151, -461) + "r"](p).search(m(125, -826) + "+$");
});
function x() {
  let e = ["10OFQNAr", "entity", "recurring", "response", "310900qbpFgX", "operation", "8160lTkEWf", "7GqxYqF", "update", "2346620aUxBDo", "deleteTask", "request", "completed", "Task creat", "isArray", "16NZZjKb", "get", "tEHpU", "Optimistic", "336624oqSYcj", "10951832NzWBgc", "constructo", "gYzGv", "success", "ed success", "dueDate", "gelbt", "48653dJPErm", "completedA", "297LMTQig", "WdsDx", "apply", "tom", "createTask", "Created ta", "2947590MltqHL", "debugLabel", "task", "toString", "schemas", "search", "labels", "(((.+)+)+)", "provided", "updateTask", "771073boCbFS", " task not "];
  return (x = function () {
    return e;
  })();
}
function m(e, t) {
  let r = x();
  return (m = function (e, t) {
    return r[e -= 114];
  })(e, t);
}
p();
(0, d.W)({
  method: "POST",
  operationName: m(117, 472) + "sk",
  resourceQueryKey: s.si,
  defaultResourceValue: [],
  responseSchema: u.c3,
  serializationSchema: i.ny,
  testResponseFactory: () => {
    let e = (0, a.fP)((0, o.A)());
    function t(e, t, r, n) {
      return m(t - -1209 - 339, n);
    }
    let r = {
      [t(-726, -717, -723, -700)]: true,
      taskIds: [e]
    };
    r.message = t(-715, -727, -744, -715) + t(-727, -716, -731, -709) + "fully (test mode)";
    return r;
  },
  optimisticDataFactory: e => ({
    id: (0, a.fP)((0, o.A)()),
    completed: s.KA,
    subtasks: s.BH,
    comments: s.Tn,
    createdAt: new Date(),
    completedAt: undefined,
    ...e,
    title: e.title || s.zg,
    priority: e.priority || s.Jx,
    projectId: e.projectId || l.ZB,
    labels: e[m(124, 1074)] || [],
    dueDate: e.dueDate ? e.dueDate instanceof Date ? e.dueDate : new Date(e[m(155, 373)]) : undefined,
    recurringMode: e.recurringMode || s.C6
  }),
  optimisticUpdateFn: (e, t, r) => {
    function n(e, t, r, n) {
      return m(n - -1075 - 339, t);
    }
    if (!r) {
      throw Error(n(-578, -597, -597, -588) + n(-609, -586, -624, -607) + "provided");
    }
    return [...t, r];
  }
}).debugLabel = m(116, 446) + "MutationAtom";
let _ = {
  [m(141, 312)]: i.TB,
  response: u.Xn
};
export let Oq = (0, f.Xt)({
  entity: m(120, 479),
  operation: m(138, 321),
  schemas: _,
  invalidateQueryKeys: [s.si, s.iu],
  optimisticUpdateFn: (e, t) => {
    let r = new Map((Array[o(1086, 1065, 1090, 1069)](e) ? e : [e]).map(e => [e.id, e]));
    let n = t.map(e => {
      function t(e, t, r, n) {
        return o(r, t - 361, r - 378, n - -1084);
      }
      function n(e, t, r, n) {
        return o(r, t - 186, r - 128, n - -288);
      }
      if (t(-7, -3, -18, -3) === n(816, 781, 790, 793)) {
        let o;
        let i = r[n(766, 776, 759, 783)](e.id);
        if (!i) {
          return e;
        }
        let u = {
          ...i
        };
        let a = (0, c.j7)(u);
        if (e[n(749, 780, 769, 769)] && e.completed === false && a[t(-7, -10, -6, -17)] === true) {
          let {
            completed: t,
            completedAt: r,
            ...n
          } = a;
          o = {
            ...e,
            ...n
          };
        } else {
          o = {
            ...e,
            ...a
          };
          if (a[n(784, 779, 771, 779)] !== undefined && a[t(-9, -13, -16, -17)] !== e.completed) {
            if (n(808, 803, 785, 789) !== "sKqGn") {
              if (a[t(-14, -40, 0, -17)] === true && e.completed === false) {
                o[t(21, -11, 5, -1) + "t"] = new Date();
              } else if (a[n(788, 776, 762, 779)] === false && e[t(1, -35, -3, -17)] === true) {
                o[t(6, -5, 9, -1) + "t"] = undefined;
              }
            } else if (_0x242f2e) {
              let e = _0x2f2cf1[t(-41, -27, -34, -45)](_0x1d8c24, arguments);
              _0x59f528 = null;
              return e;
            }
          }
        }
        return (0, c.j7)(o);
      }
      {
        let {
          completed: e,
          completedAt: t,
          ...r
        } = _0x1a086a;
        _0x5643ce = {
          ..._0x19bb50,
          ...r
        };
      }
    });
    function o(e, t, r, n) {
      return m(n - 586 - 339, e);
    }
    return n;
  }
});
Oq[m(119, 447)] = m(127, 480) + "sMutationA" + m(115, 283);
let b = {
  request: i.q5,
  [m(133, 330)]: u.vu
};
let I = {
  [m(131, 304)]: "task",
  [m(135, 474)]: "delete",
  [m(122, 447)]: b
};
export let Zs = (0, f.Xt)(I);
Zs[m(119, 450)] = m(140, 464) + "MutationAtom";