let n;
var o = require(/*webcrack:missing*/"./57145.js");
var i = require(/*webcrack:missing*/"./62759.js");
var u = require(/*webcrack:missing*/"./51547.js");
var a = require(/*webcrack:missing*/"./61212.js");
function l(e, t) {
  let r = c();
  return (l = function (e, t) {
    return r[e -= 192];
  })(e, t);
}
(function (e, t) {
  let r = e();
  while (true) {
    try {
      var n;
      var o;
      var i;
      var u;
      var a;
      var s;
      if (parseInt(l(218, 112)) / 1 * (-parseInt(l(230, 129)) / 2) + -parseInt(l(258, 124)) / 3 * (-parseInt(l(250, 113)) / 4) + parseInt((n = -464, o = -440, l(o - -710, n))) / 5 + -parseInt(l(199, 132)) / 6 * (-parseInt((i = -453, u = -470, l(u - -710, i))) / 7) + -parseInt(l(192, 76)) / 8 * (parseInt(l(211, -493)) / 9) + parseInt(l(210, -512)) / 10 * (parseInt(l(213, 97)) / 11) + -parseInt((a = -422, s = -448, l(s - -710, a))) / 12 === 470433) {
        break;
      }
      r.push(r.shift());
    } catch (e) {
      r.push(r.shift());
    }
  }
})(c, 0);
let s = (n = true, function (e, t) {
  let r = n ? function () {
    if (t) {
      if (l(244, 459) === l(216, 780)) {
        let e = {
          [l(261, 473)]: _0x863859,
          [l(242, 848)]: _0x4c6afe
        };
        _0x1add6d[l(261, 497)](e, l(205, 772) + _0x526b63[l(241, 815) + "e"]() + l(239, 792));
        _0x4df719[l(261, 431)](l(205, 820) + _0x1ad0f8[l(241, 793) + "e"]() + ": " + _0x368de2[l(266, 488)]);
        let t = _0x2e01d5(_0x1fc923);
        if (_0x1c527d?.[l(235, 799) + "ta"] !== _0x5b2da5) {
          t[l(229, 823) + "ta"](_0x15477c, _0xe9688d.previousData);
        }
      } else {
        let r = t[l(245, 844)](e, arguments);
        t = null;
        return r;
      }
    }
  } : function () {};
  n = false;
  return r;
})(undefined, function () {
  return s[l(256, 947)]()[l(248, 915)]("(((.+)+)+)+$").toString().constructor(s)[l(248, 953)](l(220, 325) + "+$");
});
function c() {
  let e = ["getQueryDa", "applicatio", "onment: Si", "serialize ", "72258ybIDOz", " response:", "count", "Unknown va", " request: ", "statusText", "Failed to ", "info", "mulating ", " response", "Failed API", "1039240yNrUyq", "622179ngcqfl", "r response", "66MajRQr", "warn", "object", "dHzOg", "invalidate", "23prNXVf", " data: ", "(((.+)+)+)", "variables", "length", "Could not ", "rror", "queryKey", "Details", "status", "yaLEE", "setQueryDa", "14030Dejosy", "MyITJ", "cancelQuer", "test", "stringify", "previousDa", "lidation e", " successfu", "Queries", " via API", "371XlawET", "toLowerCas", "module", "success", "TYDIB", "apply", "forEach", "turned fro", "search", "data", "4GFuAqo", "Test envir", "lly", "No data re", "tZKMF", "UzSUB", "toString", "LUpMj", "1212447UbJyWR", "API Error ", "ies", "error", "13731888ZrEyvc", "ShJvj", "safeParse", "reportInpu", "message", "Data", "errorData", "V1_TASKS", "1241960ELTjKr", "Content-Ty", "ybyJz", "SHKQf", "16rgIFxY", "n/json", "taskIds"];
  return (c = function () {
    return e;
  })();
}
async function d(e, t) {
  var r;
  var n;
  var o;
  var i;
  var a;
  let s = e[l(227, -261)] + " " + e[l(204, 806)];
  try {
    let c = await e.json();
    s = c[r = -195, l(266, r)] || c[n = -239, o = -250, l(n - -500, o)] || s;
    let d = {
      [l(268, 857)]: c,
      module: t
    };
    u.Rm.error(d, (i = -241, a = -218, l(i - -500, a) + l(226, 832)));
  } catch (r) {
    let e = {
      parseError: r,
      module: t
    };
    u.Rm.error(e, l(223, 840) + "parse erro" + l(212, -257));
  }
  throw Error(l(209, 813) + l(203, -270) + s);
}
export function W(e) {
  let {
    method: t,
    operationName: r,
    responseSchema: n,
    serializationSchema: s,
    testResponseFactory: c,
    resourceQueryKey: f,
    defaultResourceValue: p,
    invalidateQueryKeys: x = [f],
    optimisticUpdateFn: m,
    optimisticDataFactory: _,
    logModule: g = "tasks",
    apiEndpoint: b = a.QQ[l(269, 139)],
    showSuccessToast: I = true
  } = e;
  return (0, o.vy)(e => ({
    mutationFn: async e => {
      if (f(132, 148, 157, 118) === "undefined" || I(-474, -480, -461, -438) === "production") {
        let t = {};
        t[I(-472, -486, -452, -462)] = I(-473, -459, -461, -466);
        u.Rm[f(109, 75, 82, 109)](t, f(149, 169, 167, 154) + I(-532, -507, -497, -460) + f(96, 147, 137, 110) + r[I(-484, -465, -453, -462) + "e"]());
        return c(e);
      }
      let o = e;
      let a = s.safeParse(e, {
        reportInput: true
      });
      if (!a.success) {
        if (f(124, 163, 132, 134) !== "MyITJ") {
          return _0x2fcde1 !== null && typeof _0x213249 === f(104, 139, 104, 118) && f(65, 129, 129, 97) in _0x3c84a3;
        } else {
          throw Error(f(145, 141, 127, 108) + "serialize " + r[f(131, 138, 111, 144) + "e"]() + I(-511, -487, -475, -440) + (a[I(-446, -430, -433, -458)].message || "Unknown va" + I(-448, -467, -458, -429) + f(161, 111, 133, 127)));
        }
      }
      function f(e, t, r, n) {
        return l(n - 45 - -142, r);
      }
      o = a[f(176, 114, 185, 152)];
      let p = {};
      p[I(-408, -460, -423, -391) + "pe"] = I(-464, -481, -498, -527) + I(-501, -481, -501, -541);
      let x = await fetch(b, {
        method: t,
        headers: p,
        body: JSON[f(123, 143, 129, 137)](o)
      });
      if (!x.ok) {
        if (f(195, 167, 139, 175) === "RxJvC") {
          return _0x243bd3 !== null && _0x1e9e94 !== _0x48ddc6;
        } else {
          await d(x, g);
        }
      }
      let m = await x.json();
      let _ = {};
      function I(e, t, r, n) {
        return l(r - -552 - -142, n);
      }
      _[I(-462, -432, -429, -397) + "t"] = true;
      let y = n[I(-406, -414, -430, -416)](m, _);
      if (!y.success) {
        if (f(173, 155, 123, 160) !== f(143, 140, 178, 160)) {
          _0x39cb08[I(-460, -430, -465, -449) + "ta"](_0x3fcf7c, _0x3bc260[I(-476, -484, -459, -441) + "ta"]);
        } else {
          throw Error(f(123, 142, 76, 108) + "parse " + r[I(-425, -484, -453, -449) + "e"]() + f(122, 69, 95, 103) + " " + (y[I(-412, -421, -433, -439)][f(133, 203, 150, 169)] || f(113, 144, 123, 105) + f(139, 149, 146, 139) + "rror"));
        }
      }
      if (!y[I(-450, -451, -445, -434)]) {
        throw Error(f(188, 131, 194, 156) + I(-435, -462, -447, -445) + "m " + r[f(121, 125, 106, 144) + "e"]() + I(-494, -458, -486, -501));
      }
      return y[f(151, 139, 126, 152)];
    },
    onMutate: async t => {
      let r = e(i.lg);
      let n = {};
      function o(e, t, r, n) {
        return l(n - -365 - -142, r);
      }
      n[d(-367, -363, -349, -359)] = f;
      await r[d(-336, -330, -364, -352) + o(-252, -233, -224, -247)](n);
      let u = r[o(-283, -283, -328, -312) + "ta"](f);
      let a = _ ? _(t, u ?? p, e) : undefined;
      let s = function (e, t, r, n) {
        let o = e.getQueryData(t);
        e[l(229, -286) + "ta"](t, e => {
          function t(e, t, r, n) {
            return l(t - 115 - -508, e);
          }
          if (e == null) {
            if (t(-103, -130, -153, -116) === l(263, -545)) {
              return r(n);
            }
            {
              let e = _0x2671e7[l(195, -593) + "ta"](_0x42c19d);
              _0x42b10[t(-197, -164, -134, -183) + "ta"](_0x5d9cd3, e => _0x27642c(e) ? _0xe2f886(e) : _0x10fe3a(_0x54d2b6));
              return e;
            }
          }
          return r(e);
        });
        return o;
      }(r, f, e => m(t, e, a), p);
      let c = {};
      function d(e, t, r, n) {
        return l(n - -442 - -142, r);
      }
      c[d(-369, -347, -317, -349) + "ta"] = s;
      c[d(-334, -366, -323, -363)] = t;
      c["optimistic" + o(-229, -209, -273, -240)] = a;
      return c;
    },
    onSuccess: t => {
      function n(e, t, r, n) {
        return l(e - 988 - -142, r);
      }
      function o(e, t, r, n) {
        return l(n - 198 - -142, r);
      }
      if (n(1119, 1142, 1160, 1153) === o(343, 341, 301, 310)) {
        _0x43cf2d = false;
        if (_0x18ef70) {
          return function () {
            if (_0x5eb156) {
              let e = _0xab97df[o(-303, -86, 166, 301)](_0x14ee4d, arguments);
              _0x1014fe = null;
              return e;
            }
          };
        } else {
          return function () {};
        }
      }
      {
        let a = !function (e) {
          function t(e, t, r, n) {
            return o(e - 224, t - 255, n, r - -971);
          }
          return e !== null && typeof e === t(-715, -722, -700, -692) && t(-722, -742, -721, -688) in e;
        }(t) ? 1 : t[o(287, 232, 217, 250)][n(1068, 1033, 1058, 1101)];
        let l = t === null || typeof t != "object" || !(n(1089, -681, -264, -501) in t) || t[n(1089, 1081, 1064, 1080)] !== false;
        let s = l ? u.Rm.info : u.Rm[o(298, 290, 244, 270)];
        let c = {
          [o(260, 254, 286, 257)]: a,
          [n(1088, 1103, 1124, 1107)]: g
        };
        s(c, r + n(1085, 1049, 1060, 1053));
        if (l && I) {
          u.oR[o(329, 258, 294, 299)](r + (o(306, 320, 303, 293) + o(337, 285, 317, 308)));
        }
        let d = e(i.lg);
        x[n(1092, 1085, 1059, 1100)](e => {
          let t = {
            [o(441, 512, 515, 281)]: e
          };
          d[o(426, 437, 485, 273) + n(1084, 1051, 1223, 746)](t);
        });
      }
    },
    onError: (t, n, o) => {
      function a(e, t, r, n) {
        return l(r - -258 - -142, n);
      }
      function s(e, t, r, n) {
        return l(e - 937 - -142, n);
      }
      if (a(-141, -172, -145, -173) === "UzSUB") {
        let n = {
          error: t,
          [s(1037, 1029, 1067, 1046)]: g
        };
        u.Rm[a(-150, -139, -139, -141)](n, a(-181, -220, -195, -215) + r.toLowerCase() + s(1034, 1032, 1002, 1008));
        u.oR[s(1056, 1065, 1067, 1024)](a(-173, -180, -195, -167) + r.toLowerCase() + ": " + t[a(-133, -139, -134, -112)]);
        let l = e(i.lg);
        if (o?.previousData !== undefined) {
          if (s(1023, 1056, 990, 1062) === "wANNb") {
            throw new _0x12a01d(s(1000, 1005, 974, 979) + s(993, 992, 984, 1017) + _0x34f4a6[a(-121, -153, -159, -121) + "e"]() + s(1014, 1045, 1054, 1038) + (_0x32214a[a(-156, -116, -139, -162)][s(1061, 1037, 1097, 1046)] || s(997, 1026, 1014, 958) + a(-191, -170, -164, -202) + s(1019, 1004, 1043, 1030)));
          } else {
            l.setQueryData(f, o[s(1030, 1062, 1069, 1057) + "ta"]);
          }
        }
      } else {
        throw new _0xc5d050(s(1048, 1041, 1053, 1015) + s(1042, 1049, 1038, 1082) + "m " + _0x1ea9ed.toLowerCase() + a(-214, -218, -192, -198));
      }
    }
  }));
}
s();