let n;
var o = require(/*webcrack:missing*/"./85980.js");
var i = require(/*webcrack:missing*/"./31453.js");
var u = require("./33006.js");
var a = require(/*webcrack:missing*/"./61212.js");
(function (e, t) {
  let r = e();
  while (true) {
    try {
      if (-parseInt(d(414, 537)) / 1 * (-parseInt(d(456, 686)) / 2) + parseInt(d(419, 583)) / 3 * (-parseInt(d(437, 643)) / 4) + -parseInt(d(453, 637)) / 5 + -parseInt(d(444, 638)) / 6 * (-parseInt(d(425, 590)) / 7) + parseInt(d(471, 668)) / 8 + -parseInt(d(415, 585)) / 9 + parseInt(d(435, 536)) / 10 * (parseInt(d(478, 622)) / 11) === 798691) {
        break;
      }
      r.push(r.shift());
    } catch (e) {
      r.push(r.shift());
    }
  }
})(f, 0);
let l = (n = true, function (e, t) {
  if (d(479, 955) === d(441, 551)) {
    _0x455836 = false;
    if (_0xf685e1) {
      return function () {
        if (_0x3ac3ec) {
          let e = _0x446a17[d(424, 108)](_0x9f9d1e, arguments);
          _0x47d890 = null;
          return e;
        }
      };
    } else {
      return function () {};
    }
  }
  {
    let r = n ? function () {
      if (t) {
        let r = t[d(424, 897)](e, arguments);
        t = null;
        return r;
      }
    } : function () {};
    n = false;
    return r;
  }
})(undefined, function () {
  return l[d(442, 283)]()[d(473, 341)](d(458, -157) + "+$")[d(442, 277)]()[d(446, 306) + "r"](l).search(d(458, -135) + "+$");
});
function s(e) {
  return typeof e === d(448, -24) && e !== null && "id" in e && typeof e.id === d(429, -72);
}
function c(e) {
  if (typeof e !== d(448, 1286) || e === null || !(d(472, 1313) in e)) {
    return false;
  }
  let t = e[d(472, 347)];
  return Array[d(445, 1330)](t) && t[d(417, 271)](e => typeof e === d(429, 1260));
}
function d(e, t) {
  let r = f();
  return (d = function (e, t) {
    return r[e -= 412];
  })(e, t);
}
function f() {
  let e = ["SYXbL", "25238byczTm", "y (test mo", "(((.+)+)+)", "uccessfull", "charAt", " deleted s", "V1_PROJECT", "V1_LABELS", "update", "DELETE", "Optimistic", "V1_SETTING", "PATCH", "POST", "setting", "9209296QVowMd", "ids", "search", " data requ", "tity \"", "request", "find", "20285727vEdbqr", "NtOnC", "label", "\" provided", "quayW", "response", "22usYjIY", "12714210XwSBDd", "project", "every", "length", "2435682wxLSao", "Unknown en", " create op", "V1_TASKS", "de)", "apply", "14ipeSod", "ired for ", "includes", "slice", "string", "hYGFO", "V1_GROUPS", "toUpperCas", "delete", "message", "10oUVuQg", "create", "4WzFuUA", "eration", "Qnchy", "KVxhs", "fYYuf", "toString", "map", "1365816DCDPRC", "isArray", "constructo", "group", "object", "jGfnG", "filter", "success", "data", "3524670zdbhRe", "task"];
  return (f = function () {
    return e;
  })();
}
function p(e) {
  return e[d(460, 958)](0)[d(432, -140) + "e"]() + e[d(428, -139)](1);
}
export function Xt(e) {
  let {
    entity: t,
    operation: r,
    schemas: n,
    apiEndpoint: l,
    resourceQueryKey: f,
    invalidateQueryKeys: x,
    operationName: m,
    logModule: _,
    testResponseFactory: g,
    optimisticDataFactory: b,
    optimisticUpdateFn: I
  } = e;
  let y = f ?? function (e) {
    switch (e) {
      case d(454, 1140):
        return i.si;
      case "project":
        return i.iu;
      case d(480, 195):
        return i.Fi;
      case d(447, 179):
        return i.Gd;
      case d(470, 1207):
        return i.bC;
      default:
        return [d(452, 165), e + "s"];
    }
  }(t);
  let h = x ?? (t === d(416, 1078) || t === d(480, 1414) ? [y, i.Gd] : [y]);
  let w = {
    method: r === d(436, 1074) ? d(469, 1119) : r === "update" ? d(468, 1414) : d(465, 1097),
    operationName: m ?? p(r) + "d " + t,
    apiEndpoint: l ?? function (e) {
      switch (e) {
        case d(454, 574):
          return a.QQ[d(422, 500)];
        case d(416, 502):
          return a.QQ[d(462, 500) + "S"];
        case d(480, 561):
          return a.QQ[d(463, 538)];
        case "group":
          return a.QQ[d(431, 506)];
        case d(470, 530):
          return a.QQ[d(467, 555) + "S"];
        default:
          throw Error("Unknown en" + d(475, 496) + e + d(481, 543));
      }
    }(t),
    resourceQueryKey: y,
    defaultResourceValue: [],
    invalidateQueryKeys: h,
    logModule: _ ?? t + "s",
    responseSchema: n[d(413, 1352)],
    serializationSchema: n[d(476, 1385)],
    testResponseFactory: g ?? (e => {
      let n;
      let i = p(t);
      let u = t + "Ids";
      switch (r) {
        case d(436, 217):
          n = {
            success: true,
            [u]: [(0, o.A)()],
            message: i + " created successfully (test mo" + d(423, 1066)
          };
          break;
        case "update":
          {
            let t = Array[d(445, 1066)](e) ? e[d(443, 1064)](e => {
              function t(e, t, r, n) {
                return d(t - 462 - -188, n);
              }
              function r(e, t, r, n) {
                return d(r - -994 - 627, t);
              }
              if (r(60, 97, 73, 39) === "sWouk") {
                let e = _0x5cf33d[r(93, 102, 78, 51)](_0x3a366f) ? _0x29ed49 : [_0x41274b];
                return _0xee9336[t(736, 717, 733, 728)](t => {
                  if (typeof t !== r(-86, 372, 81, 180) || t === null || !("id" in t)) {
                    return t;
                  }
                  let n = e[r(1010, 1172, 110, 977)](e => typeof e === r(998, 1159, 81, 942) && e !== null && "id" in e && e.id === t.id);
                  if (n) {
                    return {
                      ...t,
                      ...n
                    };
                  } else {
                    return t;
                  }
                });
              }
              if (s(e)) {
                if (t(751, 723, 742, 700) === "jGfnG") {
                  return e.id;
                } else {
                  let e = _0x42c36b(_0x45b2fe) ? _0x484d59[t(720, 746, 717, 775)] : _0x5beae8(_0x3b7897) ? [_0x4e9489.id] : [];
                  return _0x557abd[t(729, 724, 744, 745)](n => typeof n === t(688, 722, 750, 709) && n !== null && "id" in n && typeof n.id === t(704, 703, 720, 735) && !e[r(52, 31, 60, 52)](n.id));
                }
              }
              return (0, o.A)();
            }) : s(e) ? [e.id] : [(0, o.A)()];
            let r = {
              success: true,
              [u]: t
            };
            r[d(434, 1049)] = "" + i + (t.length > 1 ? "s" : "") + " updated successfull" + d(457, 271) + d(423, 222);
            n = r;
            break;
          }
        case d(433, 1078):
          if (d(439, 245) === "Wzjwo") {
            return _0x3f707a;
          }
          {
            let t = c(e) ? e[d(472, 1110)] : s(e) ? [e.id] : [(0, o.A)()];
            let r = {
              [d(451, 1073)]: true,
              [u]: t
            };
            r[d(434, 1042)] = "" + i + (t[d(418, 227)] > 1 ? "s" : "") + (d(461, 1061) + d(459, 304) + "y (test mo") + d(423, 1081);
            n = r;
            break;
          }
        default:
          {
            let e = {
              [d(451, 1107)]: true
            };
            n = e;
          }
      }
      return n;
    }),
    optimisticDataFactory: b,
    optimisticUpdateFn: I ?? function (e, t) {
      return (r, n, o) => {
        switch (t) {
          case d(436, -17):
            if (d(455, -526) === "SYXbL") {
              if (!o) {
                throw Error(d(466, -477) + d(474, -467) + d(426, -12) + e + " create op" + d(438, -519));
              }
              return [...n, o];
            }
            if (!_0x399d87) {
              throw new _0x2998ef(d(466, -37) + d(474, -494) + d(426, -57) + _0x4b9750 + (d(421, -518) + d(438, -531)));
            }
            return [..._0x15990c, _0x242724];
          case d(464, -31):
            {
              let e = Array[d(445, -502)](r) ? r : [r];
              let t = n[d(443, -539)](t => {
                function r(e, t, r, n) {
                  return d(e - 1389 - -471, t);
                }
                function n(e, t, r, n) {
                  return d(e - 1371 - -958, n);
                }
                if (n(843, 813, 862, 818) !== "pRcku") {
                  if (typeof t !== n(861, 878, 867, 877) || t === null || !("id" in t)) {
                    if (n(825, 858, 820, 836) === r(1330, 1351, 1342, 1345)) {
                      return t;
                    } else {
                      switch (_0x66a4f8) {
                        case r(1372, 1394, 1407, 1399):
                          return _0x2338e2.V1_TASKS;
                        case n(829, 819, 819, 859):
                          return _0xeaa2b6[r(1380, 1366, 1388, 1372) + "S"];
                        case n(893, 920, 913, 897):
                          return _0x5a152a.V1_LABELS;
                        case r(1365, 1371, 1362, 1378):
                          return _0x2ad491[r(1349, 1348, 1362, 1366)];
                        case "setting":
                          return _0x49fea2[n(880, 894, 903, 896) + "S"];
                        default:
                          throw new _0xe1dda8(n(833, 825, 822, 837) + n(888, 857, 882, 883) + _0x4c11e9 + n(894, 866, 896, 929));
                      }
                    }
                  }
                  let o = e[n(890, 877, 923, 908)](e => typeof e === r(1366, 1382, 1335, 1369) && e !== null && "id" in e && e.id === t.id);
                  if (o) {
                    return {
                      ...t,
                      ...o
                    };
                  } else {
                    return t;
                  }
                }
                if (_0x20e920) {
                  let e = _0x4ea4b3[r(1342, 1359, 1327, 1368)](_0x3a6aed, arguments);
                  _0x272c80 = null;
                  return e;
                }
              });
              return t;
            }
          case d(433, -70):
            {
              let e = c(r) ? r[d(472, -504)] : s(r) ? [r.id] : [];
              return n[d(450, -21)](t => typeof t === d(448, -519) && t !== null && "id" in t && typeof t.id === d(429, -51) && !e[d(427, -531)](t.id));
            }
          default:
            return n;
        }
      };
    }(t, r)
  };
  return (0, u.W)(w);
}
l();