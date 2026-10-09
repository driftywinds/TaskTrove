"use strict";

exports.id = 1414;
exports.ids = [1414];
exports.modules = {
  41414: (a, b, c) => {
    let d;
    let e;
    c.d(b, {
      Dz: () => r,
      _C: () => s,
      eT: () => n
    });
    var f = c(29021);
    var g = c(33873);
    var h = c(27293);
    var i = c(69283);
    let j = (d = true, function (a, b) {
      let c = d ? function () {
        if (b) {
          let c = b.apply(a, arguments);
          b = null;
          return c;
          if (_0x153bbb) {
            let a = _0x49ce27.apply(_0x521fdd, arguments);
            _0x120523 = null;
            return a;
          }
        }
      } : function () {};
      d = false;
      return c;
    })(undefined, function () {
      return j.toString().search("(((.+)+)+)+$").toString().constructor(j).search("(((.+)+)+)+$");
    });
    async function m(a) {
      try {
        if (!(await f.promises.stat(a)).isDirectory()) {
          let b = {
            success: false,
            error: "Path exists but is not a directory: " + a,
            details: "Expected a directory but found a file at this path."
          };
          return b;
        }
        let b = (0, g.join)(a, ".tasktrove-permission-test");
        let c = "permission-test";
        try {
          await f.promises.writeFile(b, c);
          if ((await f.promises.readFile(b, "utf8")) !== c) {
            let b = {
              success: false,
              error: "Read permission test failed",
              details: "Unable to read back test file from " + a
            };
            return b;
          }
          await f.promises.unlink(b);
          return {
            success: true
          };
        } catch (b) {
          return {
            success: false,
            error: "Write permission denied",
            details: "Cannot write to directory " + a + ". Error: " + (b instanceof Error ? b.message : String(b))
          };
          {
            let a = {
              path: _0x19a266,
              error: _0x49c213.error || "Unknown error",
              details: _0x3ae13e.details || "No additional details available"
            };
            _0x5c41bf.push(a);
          }
        }
      } catch (b) {
        if (b && typeof b == "object" && "code" in b && b.code === "ENOENT") {
          let b = {
            success: false,
            error: "Directory does not exist",
            details: "Directory " + a + " was not found. Make sure to mount a volume to ./data or create the directory."
          };
          return b;
        }
        return {
          success: false,
          error: "Permission check failed",
          details: "Unable to access " + a + ". Error: " + (b instanceof Error ? b.message : String(b))
        };
      }
    }
    function n(a) {
      if (a.length === 0) {
        return "";
      }
      let c = a.map(({
        path: a,
        error: b,
        details: c
      }) => "❌ " + a + ": " + b + "\n   " + c);
      return ["🚨 TaskTrove Permission Errors:", "", ...c, "", "💡 Common solutions:", "   • Check that volumes are properly mounted", "   • Ensure the host directory has correct permissions (chmod 755)", "   • Verify the container user ID matches the host user ID", "", "📚 Docker run example:", "   docker run -v ./" + h.T6 + ":/app/" + h.T6 + " -p 3000:3000 ghcr.io/dohsimpson/tasktrove"].join("\n");
    }
    j();
    (function (a, b) {
      let c = a();
      while (true) {
        try {
          if (parseInt(q(366, 171)) / 1 + parseInt(q(413, 176)) / 2 * (parseInt(q(404, 1328)) / 3) + parseInt(q(376, 1333)) / 4 + parseInt(q(398, 1342)) / 5 * (-parseInt(q(397, 1297)) / 6) + parseInt(q(387, 195)) / 7 + parseInt(q(371, 165)) / 8 + -parseInt(q(418, 1322)) / 9 === 827581) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(p, 0);
    let o = (e = true, function (a, b) {
      if (q(357, 871) !== q(357, 735)) {
        _0x54f1da = false;
        if (_0x1e0634) {
          return function () {
            if (_0x2dc763) {
              let a = _0x226c89[q(368, -276)](_0x341ad6, arguments);
              _0x3d55a0 = null;
              return a;
            }
          };
        } else {
          return function () {};
        }
      }
      {
        let c = e ? function () {
          function c(a, b, c, d) {
            return q(d - -10 - 502, c);
          }
          function d(a, b, c, d) {
            return q(b - -60 - 502, a);
          }
          if (c(843, 886, 859, 865) !== c(900, 897, 830, 865)) {
            return {
              exists: true,
              error: "Data file " + d(799, 817, 817, 851),
              details: "Cannot rea" + d(861, 847, 876, 863) + d(868, 842, 856, 830) + c(884, 854, 869, 864) + (_0x1c85fd instanceof _0x2ba2e8 ? _0x2d109a[d(796, 820, 835, 807)] : _0xfb0f67(_0x4ff1ee))
            };
          }
          if (b) {
            if (d(863, 828, 805, 821) === c(905, 845, 870, 878)) {
              let c = b[d(801, 810, 832, 846)](a, arguments);
              b = null;
              return c;
            } else if (_0x4ba7d4) {
              let a = _0x5b0245[d(803, 810, 800, 779)](_0x5d3e52, arguments);
              _0x32ac0d = null;
              return a;
            }
          }
        } : function () {};
        e = false;
        return c;
      }
    })(undefined, function () {
      return o[q(393, 405)]()[q(347, 393)](q(399, -338) + "+$")[q(393, 411)]()[q(350, 376) + "r"](o)[q(347, -390)](q(399, 436) + "+$");
    });
    function p() {
      let a = [" data file", "Data file ", "readFile", "UOjRV", "toString", "No additio", "rror", "utf8", "145926gjlxgz", "45HNpdWc", "(((.+)+)+)", "n file. Er", "details", "rsQpd", "be initial", "14514axilrI", "d data.jso", "eck", "push", "ized.", "pro", "errors", "dataFileCh", "ime runnin", "104nmeaMn", "tion", "exists", "ess data.j", "length", "20071089hnXdAh", "jslKI", "needsEditi", "Cannot rea", "g TaskTrov", " needs to ", "validation", "search", "parse", "rs to be t", "constructo", "error", "s availabl", "access err", "edition", "path", "Unknown da", "JpwkX", "ta file va", "Cannot acc", "lidation e", "onMigratio", "base", "success", " error", "e Pro. The", "320489nvMLOF", "he first t", "apply", "object", "needsMigra", "12090712NDBlTE", "ror: ", "ndDuh", "needsIniti", "read error", "3131184Lxqveq", "code", "message", "fdPnQ", "vsqHP", "alization", "nfo", "nal detail", "son file. ", "Error: ", "syDgN", "2872737cYhvTF", "Unknown er"];
      return (p = function () {
        return a;
      })();
    }
    function q(a, b) {
      let c = p();
      return (q = function (a, b) {
        return c[a -= 347];
      })(a, b);
    }
    async function r() {
      var a;
      var b;
      var c;
      var d;
      var e;
      var g;
      var j;
      var k;
      var l;
      var m;
      var n;
      var o;
      var p;
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
      function M(a, b, c, d) {
        return q(b - 331, a);
      }
      let N = h.Ex;
      try {
        await f.promises.access(N);
        try {
          let h = await f.promises[a = -408, b = -444, q(b - -835, a)](N, (c = -440, q(396, c)));
          try {
            if ((d = -431, e = -455, q(e - -835, d)) === "btGYw") {
              let a = _0x14ab0b[g = -474, j = -467, q(j - -835, g)](_0x5ea5b8, arguments);
              _0x5ed706 = null;
              return a;
            }
            {
              let a = JSON[M(663, 679, 658, 696)](h);
              let b = (0, i.xQ)(a);
              let c = (typeof a === M(664, 700, 677, 711) && a !== null && !Array.isArray(a) && (k = -447, l = -481, q(l - -835, k) in a) && a[m = -457, n = -481, q(n - -835, m)] === "pro" ? M(764, 740, 712, 776) : "base") === M(703, 693, 683, 665);
              let d = {
                [(o = -420, q(o - -835, -396))]: true,
                [M(670, 701, 693, 740) + M(757, 745, 709, 767)]: b.needsMigration,
                ["migrationI" + M(729, 713, 683, 733)]: b,
                [(p = -416, q(420, p) + (r = -447, s = -474, q(s - -835, r)) + "n")]: c
              };
              return d;
            }
          } catch (a) {
            t = -438;
            u = -456;
            if (q(u - -835, t) === M(710, 710, 681, 741)) {
              let b = {
                [(v = -443, w = -420, q(w - -835, v))]: true
              };
              b[M(668, 682, 650, 656)] = M(732, 721, 688, 721) + (x = -411, q(x - -835, -396)) + M(682, 695, 723, 731);
              b[M(727, 732, 711, 712)] = a instanceof Error ? a[M(737, 709, 735, 725)] : M(676, 687, 650, 651) + M(673, 689, 702, 682) + (y = -503, z = -475, q(z - -835, y)) + "rror";
              return b;
            }
            {
              let a = {
                [M(712, 686, 696, 689)]: _0x2db54b
              };
              a[M(649, 682, 650, 689)] = _0x44647f[A = -481, B = -484, q(B - -835, A)] || (C = -473, D = -447, q(D - -835, C) + "ror");
              a[E = -467, F = -434, q(F - -835, E)] = _0xf530c3[q(401, -400)] || (G = -438, H = -441, q(H - -835, G) + "nal detail" + (I = -512, q(352, I)) + "e");
              _0x4d6635[M(751, 738, 703, 709)](a);
            }
          }
        } catch (a) {
          return {
            exists: true,
            error: M(756, 721, 727, 685) + (J = -497, K = -460, q(K - -835, J)),
            details: M(725, 752, 766, 726) + M(716, 736, 769, 737) + "n file. Er" + M(737, 703, 693, 727) + (a instanceof Error ? a[L = -457, q(L - -835, -450)] : String(a))
          };
        }
      } catch (a) {
        if (a && typeof a === M(692, 700, 690, 667) && M(703, 708, 720, 676) in a && a[q(377, -496)] === "ENOENT") {
          if (q(392, -439) !== "UOjRV") {
            if (_0x299741 && typeof _0x5dfe25 === q(369, -428) && M(733, 708, 743, 739) in _0x985bf7 && _0x1c7b5f.code === "ENOENT") {
              let a = {
                [M(707, 746, 755, 744)]: false,
                [q(374, -456) + q(381, -433)]: true
              };
              a[q(401, -410)] = "This appea" + q(349, -492) + M(669, 698, 665, 737) + q(412, -443) + q(422, -436) + q(365, -436) + M(728, 720, 755, 738) + q(423, -374) + "be initial" + q(408, -414);
              return a;
            }
            return {
              exists: false,
              error: q(390, -447) + q(353, -451) + "or",
              details: "Cannot acc" + q(416, -416) + q(384, -469) + q(385, -448) + (_0x4fc156 instanceof _0x5d560d ? _0x1009f9[q(378, -495)] : _0x663cc2(_0x309834))
            };
          }
          {
            let a = {
              exists: false,
              [q(374, -424) + M(679, 712, 746, 748)]: true
            };
            a[q(401, -455)] = "This appears to be t" + q(367, -496) + q(412, -458) + q(422, -388) + "e Pro. The data file needs to " + q(403, -447) + q(408, -394);
            return a;
          }
        }
        return {
          exists: false,
          error: M(737, 721, 711, 728) + q(353, -493) + "or",
          details: M(720, 690, 718, 681) + M(768, 747, 785, 710) + q(384, -476) + M(712, 716, 744, 727) + (a instanceof Error ? a[q(378, -424)] : String(a))
        };
      }
    }
    async function s() {
      let a = [h.T6];
      let b = [];
      for (let c of a) {
        if (q(419, -377) !== q(402, -392)) {
          let a = await m(c);
          if (!a[f(-383, -395, -400, -381)]) {
            let d = {
              path: c
            };
            d.error = a[f(-439, -446, -412, -404)] || q(388, -384) + "ror";
            d[q(401, -83)] = a[g(-48, -77, -11, -23)] || q(394, -63) + q(383, -71) + q(352, -121) + "e";
            b[f(-326, -393, -356, -335)](d);
          }
        } else {
          let a = {
            exists: true
          };
          a.error = "Data file " + q(424, -341) + q(364, -72);
          a[q(401, -351)] = _0x8181fc instanceof _0x487e1b ? _0x359fbe[f(-378, -419, -385, -373)] : "Unknown da" + q(358, -413) + q(360, -397) + q(395, -77);
          return a;
        }
      }
      let c = {
        [q(415, -40)]: false
      };
      let d = b[g(-32, 4, -43, -2)] === 0 ? await r() : c;
      let e = {};
      function f(a, b, c, d) {
        return q(c - -763, d);
      }
      function g(a, b, c, d) {
        return q(a - -449, c);
      }
      e[q(363, -435)] = b[q(417, -23)] === 0 && d.exists && !d[q(351, -428)];
      e[q(410, -72)] = b;
      e[q(411, -375) + q(406, -352)] = d;
      return e;
    }
    o();
  }
};