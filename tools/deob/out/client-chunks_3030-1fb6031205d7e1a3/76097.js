let r;
var u = require(/*webcrack:missing*/"./34733.js");
var a = require(/*webcrack:missing*/"./68182.js");
var i = require(/*webcrack:missing*/"./27880.js");
var f = require(/*webcrack:missing*/"./78105.js");
var o = require(/*webcrack:missing*/"./95856.js");
var l = require(/*webcrack:missing*/"./6032.js");
var s = require(/*webcrack:missing*/"./3971.js");
var c = require("./41931.js");
(function (e, t) {
  let n = e();
  while (true) {
    try {
      var r;
      var u;
      var a;
      var i;
      var f;
      var o;
      var l;
      var s;
      var c;
      var p;
      var x;
      var _;
      var h;
      var I;
      if (-parseInt((r = -208, u = -195, d(u - -373, r))) / 1 + -parseInt((a = -196, i = -224, d(i - -373, a))) / 2 * (-parseInt((f = -196, d(154, f))) / 3) + -parseInt((o = -280, d(o - -468, -265))) / 4 + -parseInt((l = -236, s = -222, d(s - -373, l))) / 5 * (parseInt((c = -272, d(182, c))) / 6) + parseInt((p = -242, x = -223, d(x - -373, p))) / 7 + parseInt((_ = -296, d(_ - -468, -322))) / 8 + parseInt((h = -183, I = -182, d(I - -373, h))) / 9 === 456100) {
        break;
      }
      n.push(n.shift());
    } catch (e) {
      n.push(n.shift());
    }
  }
})(I, 0);
let p = (r = true, function (e, t) {
  let n = r ? function () {
    if (t) {
      if (d(173, 605) !== d(139, 523)) {
        let n = t[d(176, 603)](e, arguments);
        t = null;
        return n;
      }
      {
        if (!_0x45b3a9) {
          return false;
        }
        let e = _0x685095(_0x1a8adf);
        return !!e && _0x1876ef >= e[d(185, -338)] && _0x1bbe3f <= e[d(190, -363)];
      }
    }
  } : function () {};
  r = false;
  return n;
})(undefined, function () {
  return p[d(187, 541)]().search("(((.+)+)+)+$")[d(187, 508)]().constructor(p)[d(184, -268)]("(((.+)+)+)+$");
});
function d(e, t) {
  let n = I();
  return (d = function (e, t) {
    return n[e -= 136];
  })(e, t);
}
export function K5(e, t) {
  if (!t) {
    switch (e) {
      case d(162, 544):
        return d(168, 519);
      case d(192, 557):
        return d(163, 550);
      case d(174, 531):
        return d(165, 535);
      case d(156, 808):
        return d(137, 766);
      case d(169, 514):
        return d(164, 807);
      case d(161, 834):
        return d(160, 500) + "e";
      default:
        return e;
    }
  }
  switch (e) {
    case d(162, 503):
      return t(d(145, 517) + d(183, 847) + "due", d(168, 812));
    case d(192, 581):
      return t(d(145, 522) + d(153, 813) + "y", d(163, 541));
    case d(174, 800):
      return t(d(145, 538) + d(148, 793) + d(179, 551), "Tomorrow");
    case d(156, 787):
      return t(d(145, 501) + d(166, 522) + d(146, 512), d(137, 478));
    case "nextWeek":
      return t(d(145, 505) + d(175, 528) + d(146, 514), "Next Week");
    case d(161, 792):
      return t(d(145, 534) + "esets.noDu" + d(193, 562), "No Due Date");
    default:
      return e;
  }
}
export function xs(e, t, n) {
  let {
    start: r,
    end: u
  } = e;
  if (typeof r === d(177, 1082)) {
    if (f(927, 950, 947, 913) === d(142, 1039)) {
      r = new Date(r);
    } else {
      if (!_0x453776) {
        switch (_0x122a60) {
          case "overdue":
            return f(953, 956, 932, 931);
          case f(977, 948, 951, 983):
            return d(163, 1069);
          case d(174, 1064):
            return "Tomorrow";
          case d(156, 1029):
            return "This Week";
          case d(169, 1038):
            return f(949, 938, 945, 975);
          case f(946, 945, 939, 921):
            return "No Due Date";
          default:
            return _0x3639f3;
        }
      }
      switch (_0x30c9bc) {
        case "overdue":
          return _0xe62150(d(145, 1026) + "esets.over" + f(974, 972, 988, 997), f(953, 965, 930, 959));
        case d(192, 1080):
          return _0x4a6d8f(d(145, 1022) + d(153, 1060) + "y", f(948, 923, 936, 962));
        case f(959, 982, 955, 968):
          return _0x2c331b(f(930, 925, 948, 939) + d(148, 1041) + f(964, 943, 981, 963), f(950, 921, 966, 950));
        case f(941, 947, 944, 956):
          return _0x3874c0(d(145, 1052) + "esets.this" + d(146, 1023), f(922, 929, 914, 898));
        case f(954, 933, 935, 965):
          return _0x50068d("filters.pr" + f(960, 943, 972, 967) + "Week", "Next Week");
        case d(161, 1046):
          return _0x3f25ea(d(145, 1022) + f(943, 918, 948, 937) + d(193, 1075), "No Due Date");
        default:
          return _0x10ac12;
      }
    }
  }
  if (typeof u === d(177, 1081)) {
    u = new Date(u);
  }
  let a = n?.[d(159, 1048) + "r"] ?? true;
  let i = {
    ...n
  };
  function f(e, t, n, r) {
    return d(e - 785, n);
  }
  i[d(159, 1061) + "r"] = a;
  if (r && u) {
    return (0, c.um)(r, i) + " - " + (0, c.um)(u, i);
  } else if (r) {
    return (t ? t(f(955, 971, 939, 973) + "teRange.from", d(181, 1067)) : d(181, 1068)) + " " + (0, c.um)(r, i);
  } else if (u) {
    return (t ? t("filters.da" + f(932, 955, 928, 922) + "til", "Until") : d(171, 1081)) + " " + (0, c.um)(u, i);
  } else if (t) {
    return t("filters.da" + f(940, 935, 963, 968) + f(923, 939, 910, 919), d(136, 1030) + "ge");
  } else {
    return f(921, 941, 950, 900) + "ge";
  }
}
export function $V(e) {
  let t = {
    [d(162, -769)]: 0,
    [d(192, 1148)]: 0,
    [d(174, 1092)]: 0,
    thisWeek: 0,
    [d(169, 1128)]: 0,
    [d(161, 1081)]: 0
  };
  for (let n of e) {
    for (let e of [d(162, 1106), d(192, 1105), d(174, -767), d(156, 1073), d(169, 1083), d(161, -765)]) {
      if (function (e, t, n, r) {
        if (n) {
          if (d(141, -478) !== "crYTy") {
            if (!_0x2fb93c) {
              return false;
            }
            let {
              start: e,
              end: t
            } = _0x2e1f4e;
            let n = !e || _0x4ed439 >= _0x4b2349(e);
            let r = !t || _0x211a23 <= _0x41cff7(t);
            return n && r;
          } else {
            switch (n) {
              case d(161, -111):
                return !e;
              case "overdue":
                if (t || !e) {
                  return false;
                }
                return (0, s.Y)(e, (0, u.o)(new Date()));
              default:
                if (d(143, -482) === "XFRFI") {
                  if (!e) {
                    return false;
                  }
                  let t = function (e) {
                    let t = new Date();
                    let n = (0, u.o)(t);
                    switch (e) {
                      case d(162, 1031):
                        return {
                          start: new Date(0),
                          end: (0, a.D)((0, i.f)(n, -1))
                        };
                      case d(192, 1061):
                        return {
                          start: (0, u.o)(n),
                          end: (0, a.D)(n)
                        };
                      case "tomorrow":
                        if (d(180, -769) === d(180, -766)) {
                          let e = (0, i.f)(n, 1);
                          return {
                            start: (0, u.o)(e),
                            end: (0, a.D)(e)
                          };
                        }
                        _0x252aab = false;
                        if (_0x3cb524) {
                          return function () {
                            if (_0x501e23) {
                              let e = _0x4fead0[d(176, -112)](_0x4f7c07, arguments);
                              _0x5e985f = null;
                              return e;
                            }
                          };
                        } else {
                          return function () {};
                        }
                      case d(156, -772):
                        let r = {
                          [d(144, 1015) + "On"]: 1
                        };
                        let s = {
                          [d(144, -799) + "On"]: 1
                        };
                        return {
                          start: (0, f.k)(n, r),
                          end: (0, o.$)(n, s)
                        };
                      case d(169, 1050):
                        if (d(140, 1010) === d(140, 986)) {
                          let t = (0, l.J)((0, f.k)(n, {
                            weekStartsOn: 1
                          }), 1);
                          let r = {
                            [d(144, 1015) + "On"]: 1
                          };
                          return {
                            start: t,
                            end: (0, o.$)(t, r)
                          };
                        }
                        if (_0x426002) {
                          let e = _0x54e003[d(176, -784)](_0x24ff2b, arguments);
                          _0x50b172 = null;
                          return e;
                        }
                      case d(161, 993):
                      default:
                        return null;
                    }
                  }(n);
                  if (!t) {
                    return false;
                  }
                  return e >= t.start && e <= t[function (e, t, n, r) {
                    return d(e - -640, n);
                  }(-450, -441, -456, -440)];
                }
                {
                  let e = _0x197efc(new _0x3dcfbc());
                  switch (_0x5a4856) {
                    case d(162, -466):
                      return {
                        start: new _0x329c2b(0),
                        end: _0x5811b9(_0x374fd2(e, -1))
                      };
                    case d(192, -463):
                      return {
                        start: _0x19d059(e),
                        end: _0x5baba8(e)
                      };
                    case d(174, -100):
                      {
                        let t = _0x15e6e0(e, 1);
                        return {
                          start: _0x30c250(t),
                          end: _0x522b78(t)
                        };
                      }
                    case d(156, -117):
                      let t = {
                        [d(144, -482) + "On"]: 1
                      };
                      let n = {
                        [d(144, -105) + "On"]: 1
                      };
                      return {
                        start: _0x5e6573(e, t),
                        end: _0x14b8ce(e, n)
                      };
                    case d(169, -95):
                      {
                        let t = {
                          [d(144, -475) + "On"]: 1
                        };
                        let n = _0x27db7f(_0x2c5748(e, t), 1);
                        let r = {
                          [d(144, -125) + "On"]: 1
                        };
                        return {
                          start: n,
                          end: _0x294238(n, r)
                        };
                      }
                    case d(161, -72):
                    default:
                      return null;
                  }
                }
            }
          }
        }
        return true;
      }(n[d(157, 1068)], n[d(167, -766)], e)) {
        if (d(186, -791) !== "oVcKH") {
          t[e]++;
        } else {
          if (_0x37af61) {
            switch (_0x459c3a) {
              case d(161, -787):
                return !_0x341c8b;
              case d(162, 1068):
                if (_0x23dc66 || !_0x4daedb) {
                  return false;
                }
                return _0x63eec6(_0x40cb49, _0x1575c0(new _0x10647f()));
              default:
                {
                  if (!_0x444b56) {
                    return false;
                  }
                  let e = _0xb65403(_0x487760);
                  if (!e) {
                    return false;
                  }
                  return _0x363aa6 >= e[d(185, -764)] && _0x2c1959 <= e.end;
                }
            }
          }
          if (_0x364407 && (_0x1c1e8f[d(185, -789)] || _0x1fda3e[d(190, -771)])) {
            if (!_0x4ea4f8) {
              return false;
            }
            let {
              start: e,
              end: t
            } = _0x3820be;
            let n = !e || _0x46660c >= _0x37d3fb(e);
            let r = !t || _0x446301 <= _0x23fbd8(t);
            return n && r;
          }
          return true;
        }
      }
    }
  }
  return t;
}
function I() {
  let e = ["search", "start", "SkPEc", "toString", "2192472Zblewi", "due", "end", "4177818dTwrOX", "today", "eDate", "Custom Ran", "This Week", "bel", "KGTfj", "iuXpa", "crYTy", "MCIqy", "XFRFI", "weekStarts", "filters.pr", "Week", "teRange.un", "esets.tomo", "14GMnSWy", "4479916flyrGb", "1205qhTZFu", "YfgMo", "esets.toda", "156225GGvfyf", "teRange.la", "thisWeek", "dueDate", "esets.noDu", "includeYea", "No Due Dat", "noDueDate", "overdue", "Today", "Next Week", "Tomorrow", "esets.this", "completed", "Overdue", "nextWeek", "filters.da", "Until", "7249656Zgqswt", "ujQqQ", "tomorrow", "esets.next", "apply", "string", "796401OKLKvz", "rrow", "pGsNv", "From", "14298LDNRbi", "esets.over"];
  return (I = function () {
    return e;
  })();
}
p();