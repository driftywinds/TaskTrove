"use strict";

exports.id = 9283;
exports.ids = [9283];
exports.modules = {
  65269: (a, b, c) => {
    c.d(b, {
      s: () => i
    });
    let d = {
      name: "web",
      version: "0.12.2",
      private: true,
      type: "module",
      scripts: {
        build: "pnpm build:sw && next build",
        "build:sw": "esbuild lib/service-worker.ts --outfile=public/sw.js --target=es2020 --format=iife --bundle --minify",
        "build:analyze": "ANALYZE=true next build",
        dev: "next dev",
        lint: "eslint .",
        start: "next start",
        typecheck: "tsgo --noEmit",
        "typecheck:watch": "tsgo --noEmit --watch",
        test: "node ../../scripts/run-vitest.mjs run --reporter=dot --no-coverage",
        "test:changed": "node ../../scripts/run-vitest.mjs run --run --changed --reporter=dot --no-coverage",
        "test:file": "node ../../scripts/run-vitest.mjs run --run",
        "test:watch": "node ../../scripts/run-vitest.mjs --watch",
        "test:coverage": "node ../../scripts/run-vitest.mjs run --coverage",
        check: "tsgo --noEmit && pnpm lint && pnpm test",
        "i18n:extract": "i18next-cli extract --config i18next.config.ts",
        "i18n:extract:watch": "i18next-cli extract --config i18next.config.ts --watch",
        "i18n:status": "i18next-cli status --config i18next.config.ts",
        "i18n:types": "i18next-cli types --config i18next.config.ts",
        "i18n:lint": "i18next-cli lint --config i18next.config.ts",
        "generate-data": "tsx scripts/generate-data-cli.ts"
      },
      dependencies: {
        "@atlaskit/pragmatic-drag-and-drop": "catalog:",
        "@atlaskit/pragmatic-drag-and-drop-auto-scroll": "catalog:",
        "@atlaskit/pragmatic-drag-and-drop-hitbox": "catalog:",
        "@atlaskit/pragmatic-drag-and-drop-react-drop-indicator": "catalog:",
        "@hookform/resolvers": "catalog:",
        "@icons-pack/react-simple-icons": "catalog:",
        "@khmyznikov/pwa-install": "catalog:",
        "@radix-ui/react-accordion": "catalog:",
        "@radix-ui/react-alert-dialog": "catalog:",
        "@radix-ui/react-aspect-ratio": "catalog:",
        "@radix-ui/react-avatar": "catalog:",
        "@radix-ui/react-checkbox": "catalog:",
        "@radix-ui/react-collapsible": "catalog:",
        "@radix-ui/react-context-menu": "catalog:",
        "@radix-ui/react-dialog": "catalog:",
        "@radix-ui/react-dropdown-menu": "catalog:",
        "@radix-ui/react-hover-card": "catalog:",
        "@radix-ui/react-label": "catalog:",
        "@radix-ui/react-menubar": "catalog:",
        "@radix-ui/react-navigation-menu": "catalog:",
        "@radix-ui/react-popover": "catalog:",
        "@radix-ui/react-progress": "catalog:",
        "@radix-ui/react-radio-group": "catalog:",
        "@radix-ui/react-scroll-area": "catalog:",
        "@radix-ui/react-select": "catalog:",
        "@radix-ui/react-separator": "catalog:",
        "@radix-ui/react-slider": "catalog:",
        "@radix-ui/react-slot": "catalog:",
        "@radix-ui/react-switch": "catalog:",
        "@radix-ui/react-tabs": "catalog:",
        "@radix-ui/react-toast": "catalog:",
        "@radix-ui/react-toggle": "catalog:",
        "@radix-ui/react-toggle-group": "catalog:",
        "@radix-ui/react-tooltip": "catalog:",
        "@radix-ui/react-visually-hidden": "catalog:",
        "@tanstack/query-core": "catalog:",
        "@tanstack/react-query": "catalog:",
        "@tanstack/react-virtual": "catalog:",
        "@tasktrove/atoms": "workspace:*",
        "@tasktrove/constants": "workspace:*",
        "@tasktrove/dom-utils": "workspace:*",
        "@tasktrove/i18n": "workspace:^",
        "@tasktrove/parser": "workspace:*",
        "@tasktrove/scheduler": "workspace:*",
        "@tasktrove/types": "workspace:*",
        "@tasktrove/utils": "workspace:*",
        "@uidotdev/usehooks": "catalog:",
        "accept-language": "catalog:",
        archiver: "catalog:",
        "async-mutex": "catalog:",
        "auto-scroll-while-dragging": "catalog:",
        "class-variance-authority": "catalog:",
        clsx: "catalog:",
        cmdk: "catalog:",
        color: "catalog:",
        "date-fns": "latest",
        "embla-carousel-react": "catalog:",
        i18next: "catalog:",
        "i18next-browser-languagedetector": "catalog:",
        "i18next-resources-to-backend": "catalog:",
        "input-otp": "catalog:",
        jotai: "catalog:",
        "jotai-history": "catalog:",
        "jotai-tanstack-query": "catalog:",
        "linkify-react": "catalog:",
        linkifyjs: "catalog:",
        "lucide-react": "catalog:",
        motion: "catalog:",
        next: "catalog:",
        "next-auth": "5.0.0-beta.30",
        "next-logger": "catalog:",
        "next-themes": "catalog:",
        pino: "catalog:",
        "radix-ui": "catalog:",
        react: "catalog:",
        "react-day-picker": "catalog:",
        "react-dom": "catalog:",
        "react-hook-form": "catalog:",
        "react-i18next": "catalog:",
        "react-resizable-panels": "catalog:",
        recharts: "catalog:",
        slugify: "catalog:",
        sonner: "catalog:",
        "tailwind-merge": "catalog:",
        uuid: "catalog:",
        vaul: "catalog:",
        zod: "catalog:"
      },
      devDependencies: {
        "@next/bundle-analyzer": "catalog:",
        "@repo/eslint-config": "workspace:*",
        "@repo/typescript-config": "workspace:*",
        "@repo/vitest-config": "workspace:*",
        "@tailwindcss/postcss": "catalog:",
        "@tanstack/react-query-devtools": "catalog:",
        "@testing-library/jest-dom": "catalog:",
        "@testing-library/react": "catalog:",
        "@testing-library/user-event": "catalog:",
        "@types/archiver": "catalog:",
        "@types/color": "catalog:",
        "@types/node": "catalog:",
        "@types/react": "catalog:",
        "@types/react-dom": "catalog:",
        "@types/uuid": "catalog:",
        "@typescript/native-preview": "catalog:",
        "@vitest/coverage-v8": "catalog:",
        "animate.css": "catalog:",
        commander: "catalog:",
        esbuild: "catalog:",
        eslint: "catalog:",
        "happy-dom": "catalog:",
        "i18next-cli": "catalog:",
        "jotai-devtools": "catalog:",
        jsdom: "catalog:",
        "pino-pretty": "catalog:",
        postcss: "catalog:",
        "postcss-import": "catalog:",
        "postcss-import-ext-glob": "catalog:",
        tailwindcss: "catalog:",
        tsx: "catalog:",
        "tw-animate-css": "catalog:",
        typescript: "catalog:",
        vitest: "catalog:"
      }
    };
    var g;
    var h = (g = true, function (a, b) {
      var c = g ? function () {
        if (b) {
          var c = b.apply(a, arguments);
          b = null;
          return c;
        }
      } : function () {};
      g = false;
      return c;
    })(undefined, function () {
      return h.toString().search("(((.+)+)+)+$").toString().constructor(h).search("(((.+)+)+)+$");
    });
    async function i() {
      var a = {
        version: d.version,
        native: false
      };
      return a;
    }
    h();
  },
  69283: (a, b, c) => {
    let d;
    let e;
    let f;
    c.d(b, {
      Qf: () => J,
      xQ: () => F,
      K_: () => D,
      iz: () => E
    });
    var g;
    var h = c(20017);
    var i = c(45541);
    var j = c(419);
    var k = c(65269);
    var l = c(16105);
    var m = c(27293);
    var n = c(74194);
    var o = c(15300);
    (function (a, b) {
      let c = a();
      while (true) {
        try {
          if (-parseInt(r(249, 815)) / 1 + parseInt(r(321, 842)) / 2 * (parseInt(r(179, 766)) / 3) + parseInt(r(226, 874)) / 4 * (parseInt(r(277, 133)) / 5) + -parseInt(r(289, 864)) / 6 + -parseInt(r(237, 136)) / 7 + -parseInt(r(206, 197)) / 8 + -parseInt(r(165, 80)) / 9 * (-parseInt(r(183, 816)) / 10) === 762342) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(q, 0);
    let p = (d = true, function (a, b) {
      if (r(241, -509) === "EFILx") {
        _0x59ee7b[r(217, 704)](r(181, 670) + r(215, 760) + r(239, -619) + "tasks:", _0x3442db);
      } else {
        let c = d ? function () {
          if (b) {
            let c = b.apply(a, arguments);
            b = null;
            return c;
          }
        } : function () {};
        d = false;
        return c;
      }
    })(undefined, function () {
      return p.toString()[r(200, -142)](r(191, -154) + "+$")[r(319, -128)]()[r(211, -226) + "r"](p).search(r(191, -43) + "+$");
    });
    function q() {
      let a = ["(v0.10.0).", "nnmZK", "section", "(((.+)+)+)", "- restorin", "tion v0.12", "er object,", "Adding use", "e present ", "✓ Added we", "ups", " project(s", "search", "HROFd", "user", " settings", "OmQQn", "labelGroup", "5808920HKSJMg", "settings", "0.11.0)...", "NjjrD", "hLaZy", "constructo", "kuUIN", "length", "bsrpB", "t clean up", "bwXUw", "warn", "ktERp", "name", "referDayMo", "find", "gEmxJ", "isDefault", "✓ Adding d", "Ndmtb", "4pweitx", "userId", "QDFHW", "projects", "✓ Adding i", "defaults", "hBnrL", "XqnSt", "oject ", "EscAT", "g task sec", "4502498pvpfPk", "iwMJl", " dangling ", "log", "lFZys", "ings", "projectGro", "parse", "preferDayM", "LrigG", "dDmFw", "igration c", "468800pbonFZ", "uiSettings", "ekStartsOn", "from v0.7.", "DALDr", "tTOWh", "stringify", "tion assig", "ct with id", "items", "rId to tas", "nments", "OzfsV", " missing o", "tracking I", "string", "ts have se", "values", "✓ Adding m", "Migration ", "EaVoe", "✓ Adding p", "ompleted", "color", " to uiSett", "ctions", "g defaults", "abled", "1898430exxjKR", "erId to ta", "fault sect", "weekStarts", "sections", " and ensur", "Cqxws", "invalid - ", "tion to pr", "input must", "get", "✓ Adding u", "5497632RNcUBh", "lts", "flag to ge", "⚠️ General ", "markdownEn", "labels", "data file ", "to general", "type", " task(s)", "recurring", " field", "ing projec", "Migrating ", "✓ Creating", "HuBgT", "nthFormat ", "tasks", "sk comment", "entries", "map", "iSettings ", "vVxhx", "isArray", "with defau", " be a JSON", " recurring", "fApkP", "up danglin", "onthFormat", "toString", "✓ Rebased ", "1156kRnfHy", "k comments", "TKuZa", "arkdownEna", "efault sec", "STywK", " object", ", id to us", "to ensure ", "settings m", "object", "PSwXW", "bled flag ", "uJoeK", "set", "⚠️ Settings", "9YYUqQN", "lfcso", "FuOtp", "d field to", "qftJT", "eiAPm", "r invalid ", "✓ Cleaned ", "frAOq", "EPpCo", "trackingId", "oHKvk", "0...", "general", "6630hngpjA", "ions to ", "⚠ Could no", "comments", "18596770XJdedk", "tasks:", " user obje", "lfdFj", "neral sett"];
      return (q = function () {
        return a;
      })();
    }
    function r(a, b) {
      let c = q();
      return (r = function (a, b) {
        return c[a -= 159];
      })(a, b);
    }
    p();
    var s = c(2021);
    var t = c(33885);
    (function (a, b) {
      let c = a();
      while (true) {
        try {
          if (-parseInt(v(326, 930)) / 1 * (parseInt(v(343, 944)) / 2) + parseInt(v(338, 759)) / 3 * (parseInt(v(330, 762)) / 4) + -parseInt(v(336, 933)) / 5 + parseInt(v(315, 925)) / 6 * (-parseInt(v(313, 714)) / 7) + parseInt(v(353, 815)) / 8 + parseInt(v(347, 776)) / 9 + -parseInt(v(331, 793)) / 10 * (-parseInt(v(312, 748)) / 11) === 213063) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(w, 0);
    let u = (e = true, function (a, b) {
      let c = e ? function () {
        if (b) {
          let c = b[v(357, 35)](a, arguments);
          b = null;
          return c;
        }
      } : function () {};
      e = false;
      return c;
    })(undefined, function () {
      return u[v(329, 137)]()[v(350, 760)](v(364, 214) + "+$")[v(329, 188)]().constructor(u)[v(350, 195)]("(((.+)+)+)+$");
    });
    function v(a, b) {
      let c = w();
      return (v = function (a, b) {
        return c[a -= 296];
      })(a, b);
    }
    function w() {
      let a = ["currency", "some", "map", "productivi", "exchangeRa", "4aXPqVU", "undefined", "ems", "toString", "71620vXtAxH", "10zhGlSJ", "boolean", "bJCIA", "push", "wardsEnabl", "794295BJCDim", "wishlistIt", "69sWrenA", "wzalY", "tasks", "input must", "rVbua", "185014yCoXVI", "string", "uiSettings", "taskId", "357498KnIICn", "totan", "trim", "search", "pPabL", "amount", "677792vlCATC", "entries", "settings", " object", "apply", "value", "customCurr", "length", "XhoqY", "rewardEven", "KqRLA", "(((.+)+)+)", "name", "MKOzk", "hGQPd", "isArray", "stringify", "uLLqT", "dEFnq", "ZTIpx", "GwGYf", "currencyId", "currencyRe", "reward", "KWaYX", "forEach", "Zxpzb", "object", "unshift", "LGFqd", "bled", "points", "filter", "YWGIt", "encies", "wardEvents", "rewardsEna", "chutB", "rewardThem", "2442011LQZynq", "14273YhiHoX", "Migration ", "48GxQZpa", "yLRIP", "treNT", "entityId", "number", " be a JSON"];
      return (w = function () {
        return a;
      })();
    }
    u();
    (function (a, b) {
      let c = a();
      while (true) {
        try {
          if (parseInt(y(243, 404)) / 1 * (-parseInt(y(228, 428)) / 2) + parseInt(y(284, 506)) / 3 * (parseInt(y(324, 488)) / 4) + parseInt(y(272, 156)) / 5 * (parseInt(y(286, 119)) / 6) + parseInt(y(260, 490)) / 7 + -parseInt(y(248, 74)) / 8 + parseInt(y(276, 117)) / 9 * (parseInt(y(328, 488)) / 10) + parseInt(y(333, 203)) / 11 * (parseInt(y(306, 518)) / 12) === 171462) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(B, 0);
    let x = (f = true, function (a, b) {
      if (y(264, -596) === y(264, 730)) {
        let c = f ? function () {
          if (b) {
            let c = b[y(319, 450)](a, arguments);
            b = null;
            return c;
          }
        } : function () {};
        f = false;
        return c;
      }
      _0x128943[_0x6a7c88] = _0x308735;
    })(undefined, function () {
      return x[y(307, -741)]()[y(242, -11)](y(278, 20) + "+$").toString()[y(289, 29) + "r"](x)[y(242, 0)](y(278, -689) + "+$");
    });
    function y(a, b) {
      let c = B();
      return (y = function (a, b) {
        return c[a -= 224];
      })(a, b);
    }
    x();
    let z = (0, i.M0)(y(270, 391));
    let A = [{
      version: (0, i.M0)(y(270, 359)),
      migrate: function (a) {
        var b;
        var c;
        var d;
        var e;
        var f;
        var g;
        var i;
        var j;
        var k;
        var l;
        var p;
        var q;
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
        var M;
        var N;
        var O;
        var P;
        var Q;
        var R;
        var S;
        var T;
        var U;
        var V;
        var W;
        var X;
        var Y;
        var Z;
        var $;
        var _;
        var aa;
        var ab;
        var ac;
        var ad;
        var ae;
        var af;
        var ag;
        var ah;
        var ai;
        var aj;
        var ak;
        var al;
        var am;
        var an;
        var ao;
        var ap;
        var aq;
        var ar;
        var as;
        var at;
        var au;
        var av;
        var aw;
        var ax;
        var ay;
        var az;
        var aA;
        var aB;
        var aC;
        var aD;
        var aE;
        var aF;
        var aG;
        var aH;
        var aI;
        var aJ;
        var aK;
        var aL;
        var aM;
        var aN;
        var aO;
        var aP;
        var aQ;
        var aR;
        var aS;
        var aT;
        var aU;
        var aV;
        var aW;
        var aX;
        var aY;
        var aZ;
        var a$;
        var a_;
        var a0;
        var a1;
        var a2;
        var a3;
        var a4;
        var a5;
        var a6;
        var a7;
        var a8;
        var a9;
        var ba;
        var bb;
        var bc;
        var bd;
        var be;
        var bf;
        var bg;
        console[bi(420, 487, 435, 551)](bi(562, 549, 569, 475) + bi(614, 542, 499, 495) + bi(458, 499, 570, 477) + "0 to v0.8." + bi(481, 424, 417, 468));
        console[bj(15, 111, 80, 160)]((b = 0, c = 26, d = 0, r(195, 26) + bi(517, 506, 580, 470) + bi(566, 569, 517, 570) + bi(501, 575, 501, 652) + (e = 0, f = 28, g = 0, r(194, 28)) + (i = 0, j = 156, k = 0, r(282, 156)) + bi(628, 548, 521, 529) + (l = 0, p = 95, q = 0, r(265, 95)) + (s = 0, t = 156, u = 0, r(274, 156))));
        if (typeof a != "object" || a === null || Array[bi(543, 559, 480, 633)](a)) {
          v = 0;
          w = 125;
          x = 0;
          if (r(201, 125) !== (y = 0, z = 37, A = 0, r(253, 37))) {
            throw Error(bi(568, 515, 547, 465) + (B = 0, C = 145, D = 0, r(286, 145)) + bi(556, 561, 624, 574) + (E = 0, F = 241, G = 0, r(327, 241)));
          } else {
            if (!_0x48229e(_0x1c8f86)) {
              return _0xd092d5;
            }
            let {
              slug: a,
              items: b,
              ...c
            } = _0x1d203e;
            let d = _0x1781b1[bi(596, 559, 630, 519)](b) ? b[bj(63, 63, 149, 230)](a => _0x4e7fe0(a) ? _0x47d7a2(a) : a) : b;
            if (b === _0x4140ea) {
              return c;
            } else {
              return {
                ...c,
                items: d
              };
            }
          }
        }
        let bh = {};
        for (let [b, c] of Object[bi(517, 555, 519, 484)](a)) {
          bh[b] = c;
        }
        if (Array[bi(570, 559, 634, 546)](bh[bi(508, 553, 595, 618)])) {
          if (bi(492, 456, 530, 378) === "sLlaF") {
            _0x1384a2[_0x53b478] = _0xccb3a4;
          } else {
            bh.tasks = bh[bj(72, 148, 146, 130)][H = 0, I = 64, J = 0, r(309, 64)](a => {
              function b(a, b, c, d) {
                return r(a - 765 - -160, d);
              }
              function c(a, b, c, d) {
                return bi(a - 477, d - -256, c - 26, c);
              }
              if (b(767, 726, 769, 791) === b(815, 799, 813, 733)) {
                return _0xe40dc8;
              }
              {
                if (typeof a != "object" || a === null || Array[b(917, 994, 860, 853)](a)) {
                  return a;
                }
                let d = {};
                for (let [e, f] of Object[c(250, 374, 301, 299)](a)) {
                  if (c(221, 237, 164, 226) === "EscAT") {
                    d[e] = f;
                  } else {
                    if (typeof _0x5f3d66 !== b(764, 820, 829, 766) || _0x2705c7 === null || _0x4da6c1[c(218, 380, 377, 303)](_0x4f2b2d)) {
                      return _0x44f356;
                    }
                    let a = {};
                    for (let [b, c] of _0x4cc0d2.entries(_0xa28265)) {
                      a[b] = c;
                    }
                    if (!_0x23339f[c(308, 364, 308, 303)](a[b(886, 833, 941, 802)]) || a[c(267, 307, 211, 272)][b(818, 787, 737, 738)] === 0) {
                      _0x1a0fbc[b(845, 930, 823, 778)](b(829, 901, 753, 799) + c(310, 357, 265, 316) + "tion to pr" + b(839, 864, 891, 907) + a.id);
                      let d = {
                        id: _0x24908d,
                        [c(218, 263, 152, 210)]: _0x4abd43,
                        [b(877, 889, 807, 898)]: _0x448414
                      };
                      d[c(343, 328, 283, 288)] = b(795, 826, 879, 870);
                      d[c(201, 274, 186, 249)] = [];
                      d[c(265, 214, 278, 214)] = true;
                      a[c(350, 265, 263, 272)] = [d];
                      _0x1df0e9++;
                    }
                    return a;
                  }
                }
                if (Array.isArray(d[c(173, 195, 116, 173)])) {
                  if (b(874, 854, 799, 915) === "vaRmt") {
                    let a = _0x82bb7.apply(_0x5d473c, arguments);
                    _0x4efeb6 = null;
                    return a;
                  } else {
                    d[c(112, 181, 183, 173)] = d[b(787, 833, 790, 787)][c(322, 348, 340, 300)](a => {
                      if (typeof a != "object" || a === null || Array.isArray(a)) {
                        return a;
                      }
                      let c = {};
                      function d(a, c, d, e) {
                        return b(c - -970, c - 205, d - 333, a);
                      }
                      for (let [b, e] of Object[d(-32, -57, 11, -119)](a)) {
                        c[b] = e;
                      }
                      if (!(d(-218, -138, -141, -127) in c)) {
                        if (d(-225, -192, -204, -243) !== b(823, 633, 614, 674)) {
                          c[d(-70, -138, -129, -219)] = m.sD;
                        } else {
                          _0x1cda1f.projects = _0x1642e6[d(-117, -56, -121, -109)](_0x8515e0);
                        }
                      }
                      return c;
                    });
                  }
                }
                return d;
              }
            });
            console[bi(487, 487, 470, 496)]("✓ Added us" + (K = 0, L = 84, M = 0, r(278, 84)) + (N = 0, O = 121, P = 0, r(307, 121)) + "s");
          }
        }
        if (typeof bh[bi(378, 449, 438, 411)] !== (Q = 0, R = 14, S = 0, r(159, 14)) || bh.user === null || Array.isArray(bh[bi(371, 449, 531, 534)])) {
          console[bi(440, 487, 417, 457)]((T = 0, U = 184, V = 0, r(303, 184) + (W = 0, X = 94, Y = 0, r(185, 94)) + (Z = 0, $ = 180, _ = 0, r(257, 180)) + (aa = 0, ab = 190, ac = 0, r(300, 190))));
          let a = {
            ...n.Az
          };
          a.id = m.sD;
          bh[ad = 0, ae = 0, r(202, -35)] = a;
        } else {
          let a = {};
          for (let [b, c] of Object.entries(bh.user)) {
            if (bi(576, 563, 591, 498) === (af = 0, ag = 205, ah = 0, r(316, 205))) {
              a[b] = c;
            } else {
              _0x11a51c[bi(468, 527, 448, 596) + "On"] = _0xf7b6d5.weekStartsOn;
              _0x3e7594[bj(153, 75, 80, 81)](bi(467, 444, 368, 406) + (ai = 0, aj = 73, ak = 0, r(251, 73)) + (al = 0, am = 30, an = 0, r(273, 30)) + "ings");
            }
          }
          if (!("id" in a)) {
            if (bi(506, 480, 396, 465) !== (ao = 0, ap = 0, aq = 0, r(238, 0))) {
              console[bi(433, 487, 442, 448)]((ar = 0, as = 0, r(230, -14) + (at = 0, au = -76, av = 0, r(168, -76)) + (aw = 0, ax = 100, ay = 0, r(185, 100)) + "ct"));
              a.id = m.sD;
            } else {
              _0x5ef696[_0x4f1b37] = _0x5ba97f;
            }
          }
          bh[az = 0, aA = 120, aB = 0, r(202, 120)] = a;
        }
        if (Array[bi(641, 559, 521, 474)](bh.projects)) {
          if (bi(435, 461, 375, 420) !== "bsrpB") {
            _0x4c73e1 = false;
            if (_0x28ad82) {
              return function () {
                if (_0x320c6f) {
                  let a = _0x2e279b.apply(_0x445d0d, arguments);
                  _0x3bbefc = null;
                  return a;
                }
              };
            } else {
              return function () {};
            }
          } else {
            let a = 0;
            bh.projects = bh.projects[aC = 0, aD = 87, aE = 0, r(309, 87)](b => {
              if (typeof b !== d(197, 180, 167, 156) || b === null || Array[d(291, 333, 417, 280)](b)) {
                if (e(-387, -320, -341, -298) !== e(-397, -473, -474, -470)) {
                  return b;
                } else {
                  _0x305325[_0x3f3df9] = _0x4f338e;
                }
              }
              let c = {};
              for (let [a, d] of Object[e(-371, -335, -344, -290)](b)) {
                c[a] = d;
              }
              function d(a, b, c, d) {
                return r(b - 181 - -160, a);
              }
              function e(a, b, c, d) {
                return r(b - -483 - -160, a);
              }
              if (!Array[d(285, 333, 312, 360)](c[e(-401, -362, -386, -310)]) || c[e(-290, -362, -380, -440)][e(-372, -430, -424, -442)] === 0) {
                console.log("✓ Adding d" + d(332, 346, 289, 356) + e(-291, -358, -281, -279) + d(225, 255, 178, 195) + c.id);
                let b = {
                  id: m.sD,
                  [e(-415, -424, -456, -373)]: m.zV,
                  [d(276, 293, 233, 345)]: m.c6
                };
                b[e(-314, -346, -278, -401)] = d(199, 211, 188, 280);
                b[d(328, 279, 198, 250)] = [];
                b[d(168, 244, 198, 280)] = true;
                c[e(-284, -362, -323, -403)] = [b];
                a++;
              }
              return c;
            });
            if (a > 0) {
              if (bi(386, 414, 413, 483) !== "FuOtp") {
                let a = {};
                for (let [b, c] of _0x4a43c7[bj(115, 225, 148, 163)](_0x536147[bi(498, 449, 423, 434)])) {
                  a[b] = c;
                }
                if (!("id" in a)) {
                  _0x1a104a[bj(24, 6, 80, 1)]((aF = 0, aG = 0, r(230, -4) + bi(417, 415, 460, 455) + (aH = 0, aI = 63, aJ = 0, r(185, 63)) + "ct"));
                  a.id = _0x58d2d6;
                }
                _0x25cf51[aK = 0, aL = 92, aM = 0, r(202, 92)] = a;
              } else {
                console[bj(88, -3, 80, 136)]("✓ Added de" + (aN = 0, aO = 143, aP = 0, r(279, 143)) + bi(461, 427, 509, 353) + a + bi(505, 446, 366, 527) + ")");
              }
            }
          }
        }
        function bi(a, b, c, d) {
          return r(b - 247, d);
        }
        try {
          aQ = 0;
          aR = -5;
          aS = 0;
          if (r(176, -5) !== bi(413, 451, 486, 470)) {
            if (Array[bi(477, 559, 491, 567)](bh[bi(609, 553, 607, 495)]) && Array[bi(509, 559, 625, 642)](bh.projects)) {
              if (bi(447, 479, 531, 515) === "eeuZD") {
                _0x1d8d10[bi(413, 410, 378, 338)](_0x1ee5a7, [_0xa0219]);
              } else {
                let a = h.Wk[aT = 0, aU = 165, aV = 0, r(244, 165)](bh);
                let b = (0, o.yO)(a.tasks, a[bi(545, 476, 456, 482)]);
                bh[aW = 0, aX = 137, aY = 0, r(229, 137)] = JSON[bj(75, 0, 84, 150)](JSON.stringify(b));
                console[bj(126, 55, 80, 93)](bi(358, 419, 447, 460) + (aZ = 0, a$ = 228, a_ = 0, r(317, 228)) + (a0 = 0, a1 = 42, a2 = 0, r(236, 42)) + (a3 = 0, a4 = 60, a5 = 0, r(256, 60)) + bi(468, 507, 508, 574));
              }
            }
          } else {
            _0x4258d8[a6 = 0, a7 = 22, a8 = 0, r(175, 22)] = _0x11a8d0;
            _0x29501d++;
          }
        } catch (a) {
          console[bj(10, 135, 57, 12)]((a9 = 0, ba = 0, r(181, -35) + bi(493, 462, 404, 403) + (bb = 0, bc = 121, bd = 0, r(239, 121)) + (be = 0, bf = 5, bg = 0, r(184, 5))), a);
        }
        function bj(a, b, c, d) {
          return r(c - -160, b);
        }
        console[r(240, 54)]("✓ v0.8.0 m" + r(248, 23) + r(271, 117));
        return JSON[bi(412, 491, 506, 416)](JSON[r(255, 147)](bh));
      }
    }, {
      version: (0, i.M0)("v0.10.0"),
      migrate: function (a) {
        var b;
        var c;
        var d;
        var e;
        var f;
        var g;
        var i;
        var j;
        var k;
        var l;
        var m;
        var p;
        var q;
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
        var M;
        var N;
        var O;
        var P;
        var Q;
        var R;
        var S;
        var T;
        var U;
        var V;
        var W;
        var X;
        var Y;
        var Z;
        var $;
        var _;
        var aa;
        var ab;
        var ac;
        var ad;
        var ae;
        var af;
        var ag;
        let ah;
        let ai;
        console.log("Migrating " + (g = 0, i = 0, j = 1194, r(295, 1194)) + (k = 0, l = 0, m = 1341, r(329, 1341)) + "markdown settings ar" + (p = 0, q = 0, s = 1211, r(196, 1211)) + (t = 0, u = 0, v = 1158, r(188, 1158)) + "..");
        if (typeof a != "object" || a === null || Array[ak(-411, -456, -497, -477)](a)) {
          throw Error((w = 0, x = 0, y = 1154, r(268, 1154) + "input must be a JSON" + (z = 0, A = 0, B = 1319, r(327, 1319))));
        }
        let aj = {};
        for (let [b, c] of Object.entries(a)) {
          if (r(246, 1205) !== r(246, 1151)) {
            if (!_0x48a2fe(_0x55b7af)) {
              return _0x60f21c;
            }
            let {
              slug: a,
              ...b
            } = _0x3fa33a;
            return b;
          }
          aj[b] = c;
        }
        if (typeof aj.settings != "object" || aj.settings === null || Array[r(312, 1283)](aj[r(207, 1176)])) {
          console.log(r(164, 1079) + (C = 0, D = 0, r(262, -559)) + r(171, 1028) + (E = 0, F = -674, G = 0, r(192, -674)) + (H = 0, I = 0, r(275, -568)));
          ah = {
            ...n.cL
          };
        } else if (r(311, 1282) !== r(311, 1306)) {
          _0x296a9e[ak(-635, -629, -569, -632)](r(230, 1126) + "d field to" + r(185, 1061) + "ct");
          _0xef84c8.id = _0x5f2893;
        } else {
          let a = {};
          for (let [b, c] of Object[ak(-461, -468, -501, -514)](aj[r(207, 1147)])) {
            a[b] = c;
          }
          ah = a;
        }
        if (typeof ah[ak(-553, -672, -631, -696)] !== r(159, 1135) || ah[r(178, 1051)] === null || Array[r(312, 1285)](ah[r(178, 1065)])) {
          console[ak(-515, -499, -569, -538)](r(292, 1217) + r(330, 1203) + "issing or " + (J = 0, K = 0, r(284, -539)) + "restoring " + r(231, 1210));
          ai = {
            ...n.FX
          };
        } else {
          let a = {};
          for (let [b, c] of Object[r(308, 1299)](ah[ak(-674, -665, -631, -692)])) {
            if ((L = 0, M = 0, r(225, -508)) !== "Ndmtb") {
              _0x4a32c7[r(240, 1112)]("✓ Adding u" + (N = 0, O = 0, r(310, -547)) + r(313, 1218) + r(290, 1210));
              let a = {
                ..._0x28059d
              };
              _0x5b4f11[P = 0, Q = 0, r(250, -534)] = a;
            } else {
              a[b] = c;
            }
          }
          ai = a;
        }
        function ak(a, b, c, d) {
          return r(c - -809, b);
        }
        if (!("markdownEn" + r(276, 1211) in ai)) {
          if ((R = 0, S = -690, T = 0, r(166, -690)) !== "lfcso") {
            _0x3646e9[U = 0, V = 0, r(240, -576)](r(267, 1167) + (W = 0, X = -536, Y = 0, r(324, -536)) + (Z = 0, $ = 0, r(161, -692)) + r(296, 1259) + " settings");
            _0x2cf0d7.markdownEnabled = _0x5e6cc9[r(293, 1294) + "abled"];
          } else {
            console[_ = 0, aa = 0, r(240, -617)]("✓ Adding markdownEna" + r(161, 1095) + (ab = 0, ac = 0, r(296, -549)) + (ad = 0, ae = 0, r(203, -671)));
            ai[r(293, 1243) + r(276, 1146)] = n.FX[af = 0, ag = 0, r(293, -476) + "abled"];
          }
        }
        ah[r(178, 1129)] = ai;
        aj[r(207, 1100)] = ah;
        try {
          if (Array[r(312, 1215)](aj[r(306, 1205)]) && Array[b = -497, r(b - -809, -572)](aj.projects)) {
            if (r(186, 1109) === "ARzyd") {
              return _0x206b7a;
            }
            {
              let a = h.Wk.parse(aj);
              let b = (0, o.yO)(a.tasks, a[r(229, 1181)]);
              aj[r(229, 1119)] = JSON.parse(JSON.stringify(b));
              console.log(r(172, 1167) + "up danglin" + (c = -527, d = -573, r(d - -809, c)) + "tion assig" + (e = -514, f = -549, r(f - -809, e)));
            }
          }
        } catch (a) {
          console[r(217, 1139)](r(181, 1206) + r(215, 1162) + r(239, 1097) + r(184, 1124), a);
        }
        if (Array.isArray(aj[r(306, 1249)])) {
          if (r(254, 1189) === r(160, -729)) {
            return _0x2bb692;
          }
          {
            let a = aj[r(306, -507)];
            let b = new Map();
            for (let c of a) {
              if (typeof c !== r(159, 1127) || Array[r(312, 1302)](c)) {
                continue;
              }
              let a = typeof c.id == "string" ? c.id : undefined;
              let d = typeof c[r(175, 1080)] === r(264, 1200) ? c[r(175, -695)] : a;
              if (!d) {
                continue;
              }
              let e = b[r(287, 1171)](d);
              if (e) {
                if (r(247, -571) === "SwEmn") {
                  _0x4a3223.userId = _0x4b6728;
                } else {
                  e.push(c);
                }
              } else {
                b.set(d, [c]);
              }
            }
            let c = 0;
            for (let a of b[r(266, 1193)]()) {
              if (r(326, -449) === "leFSf") {
                _0x32e964[_0x364638] = _0x4e134a;
              } else {
                let b = a[r(221, 1199)](a => a[r(299, -508)] && a.completed !== true);
                if (!b) {
                  continue;
                }
                let d = typeof b.id === r(264, -518) ? b.id : typeof b.trackingId === r(264, -561) ? b[r(175, 1094)] : undefined;
                if (!d) {
                  if (r(283, -586) === r(283, 1217)) {
                    continue;
                  }
                  throw new _0x4f2b93(r(268, 1241) + "input must" + r(314, 1212) + r(327, -441));
                }
                for (let b of a) {
                  if (r(304, -554) !== "HuBgT") {
                    _0x368487[r(240, 1159)]("⚠️ Settings missing o" + r(171, -611) + "- restorin" + r(275, 1257));
                    _0x3f9909 = {
                      ..._0x40fac5
                    };
                  } else if (b.trackingId !== d) {
                    b[r(175, 1037)] = d;
                    c++;
                  }
                }
              }
            }
            if (c > 0) {
              if (r(261, 1251) === r(261, 1167)) {
                console.log(r(320, -533) + r(263, 1224) + "Ds for " + c + (r(315, 1194) + r(298, -434)));
              } else if (_0x3c7932) {
                let a = _0x524d9a.apply(_0x188782, arguments);
                _0x4d97d8 = null;
                return a;
              }
            }
          }
        }
        return JSON[r(244, -649)](JSON[r(255, -604)](aj));
      }
    }, {
      version: (0, i.M0)(y(235, 392)),
      migrate: function (a) {
        var b;
        var c;
        var d;
        var e;
        var f;
        var g;
        let h;
        console[function (a, b, c, d) {
          return r(b - -592, c);
        }(-309, -352, -318, -317)]("Migrating " + (b = 0, c = 0, r(295, -633)) + "to add uiSettings (v" + (d = 0, e = 0, r(208, -680)));
        if (typeof a != "object" || a === null || Array[j(-458, -536, -492, -560)](a)) {
          throw Error("Migration " + (f = 0, g = 0, r(286, -592)) + " be a JSON object");
        }
        let i = {};
        for (let [b, c] of Object[j(-615, -540, -560, -537)](a)) {
          i[b] = c;
        }
        function j(a, b, c, d) {
          return r(b - -848, a);
        }
        if (typeof i[r(207, -683)] !== r(159, -684) || i[r(207, -429)] === null || Array[r(312, -341)](i[r(207, -652)])) {
          if (r(228, -338) === "dywuT") {
            if (_0x4f8fe6[r(312, -255)](_0x249a22[r(306, -276)]) && _0x12ad60[r(312, -456)](_0x14329c[r(229, -627)])) {
              let a = _0x434a80[r(244, -529)](_0x29e92e);
              let b = _0x49c887(a[r(306, -501)], a[r(229, -581)]);
              _0x1c257f[r(229, -537)] = _0xf8d338.parse(_0x369453[r(255, -256)](b));
              _0x425284[r(240, -434)](r(172, -456) + r(317, -233) + r(236, -638) + "tion assignments");
            }
          } else {
            console.log(r(164, -720) + r(262, -279) + r(171, -684) + r(192, -722) + r(275, -541));
            h = {
              ...n.cL
            };
          }
        } else if (r(189, -382) === "nnmZK") {
          h = {
            ...i[r(207, -643)]
          };
        } else {
          _0x4885f2[r(243, -669) + r(198, -595)] = _0x3b233f(_0x197033["projectGro" + r(198, -623)]);
        }
        if (typeof h[r(250, -675)] != "object" || h[r(250, -349)] === null || Array[r(312, -584)](h[r(250, -662)])) {
          if (r(174, -368) === r(174, -722)) {
            console[r(240, -420)](r(288, -541) + r(310, -341) + "with defau" + r(290, -617));
            let a = {
              ...n.Xc
            };
            h[r(250, -649)] = a;
          } else {
            let a = _0x525075.parse(_0x506eda);
            let b = _0x30f02e(a.tasks, a[r(229, -422)]);
            _0x35b224[r(229, -543)] = _0x5415b2[r(244, -575)](_0x3dd34e[r(255, -365)](b));
            _0x8bb4ba.log("✓ Cleaned " + r(317, -504) + r(236, -648) + r(256, -368) + r(260, -658));
          }
        } else if (r(169, -688) !== r(216, -592)) {
          let a = {
            ...h.uiSettings
          };
          if (!(r(280, -294) + "On" in a) && n.Xc[r(280, -601) + "On"] !== undefined) {
            a.weekStartsOn = n.Xc[r(280, -487) + "On"];
            console[r(240, -438)]("✓ Added we" + r(251, -297) + r(273, -257) + r(242, -278));
          }
          h[r(250, -351)] = a;
        } else {
          _0x37f9fa[r(240, -326)](r(224, -684) + r(325, -227) + r(285, -635) + r(234, -341) + _0x3c56c1.id);
          let a = {
            id: _0x1c19d7,
            [r(219, -324)]: _0x32d0d8,
            [r(272, -623)]: _0x70a7d
          };
          a[r(297, -295)] = r(190, -644);
          a[r(258, -583)] = [];
          a[r(223, -304)] = true;
          _0x5a3745[r(281, -318)] = [a];
          _0x5e120a++;
        }
        i.settings = h;
        return JSON[r(244, -554)](JSON.stringify(i));
      }
    }, {
      version: (0, i.M0)(y(327, 785)),
      migrate: function (a) {
        var b;
        var c;
        var d;
        var e;
        var f;
        var g;
        var h;
        var i;
        var j;
        var k;
        var l;
        var m;
        var o;
        var p;
        var q;
        var u;
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
        var M;
        var N;
        var O;
        var P;
        var Q;
        var R;
        var S;
        var T;
        var U;
        var V;
        var W;
        var X;
        var Y;
        var Z;
        var $;
        var _;
        var aa;
        var ab;
        var ac;
        var ad;
        var ae;
        var af;
        var ag;
        var ah;
        var ai;
        var aj;
        var ak;
        var al;
        var am;
        var an;
        var ao;
        var ap;
        var aq;
        var ar;
        var as;
        var at;
        var au;
        var av;
        var aw;
        var ax;
        var ay;
        var az;
        var aA;
        var aB;
        var aC;
        var aD;
        var aE;
        var aF;
        var aG;
        var aH;
        var aI;
        var aJ;
        var aK;
        var aL;
        var aM;
        var aN;
        var aO;
        var aP;
        var aQ;
        var aR;
        var aS;
        var aT;
        var aU;
        var aV;
        var aW;
        var aX;
        var aY;
        var aZ;
        var a$;
        var a_;
        var a0;
        var a1;
        var a2;
        var a3;
        var a4;
        var a5;
        let a6 = function (a) {
          var b;
          var c;
          var d;
          var e;
          var f;
          var g;
          var h;
          var i;
          var j;
          var k;
          var l;
          var m;
          var o;
          var p;
          var q;
          var s;
          var t;
          var u;
          let v;
          console[z(251, 232, 159, 305)]("Base migra" + (b = 0, c = 174, d = 0, r(193, 174)) + ".0");
          if (typeof a !== (e = 0, f = 66, g = 0, r(159, 66)) || a === null || Array.isArray(a)) {
            throw Error((h = 0, i = 272, j = 0, r(268, 272) + (k = 0, l = 213, m = 0, r(286, 213)) + (o = 0, p = 334, q = 0, r(314, 334)) + (s = 0, t = 371, u = 0, r(327, 371))));
          }
          let w = {};
          for (let [b, c] of Object[r(308, 300)](a)) {
            w[b] = c;
          }
          let x = w[z(114, 199, 138, 122)];
          let y = typeof x == "object" && x !== null && !Array[r(312, 275)](x);
          function z(a, b, c, d) {
            return r(b - -8, c);
          }
          let A = {
            ...x
          };
          let B = {
            ...n.cL
          };
          let C = y ? A : B;
          let D = C[r(250, 224)];
          let E = typeof D === r(159, 177) && D !== null && !Array[r(312, 281)](D);
          let F = {
            ...n.Xc
          };
          C[r(250, 228)] = E ? D : F;
          let G = C.general;
          if (typeof G !== r(159, 195) || G === null || Array.isArray(G)) {
            v = {
              ...n.FX
            };
          } else {
            let a = {};
            for (let [b, c] of Object[r(308, 322)](G)) {
              if (r(222, 266) !== "gEmxJ") {
                _0x29e3ef.warn(r(181, 131) + r(215, 114) + r(239, 216) + r(184, 232), _0x4df78e);
              } else {
                a[b] = c;
              }
            }
            v = a;
          }
          if (!(r(245, 213) + r(318, 228) in v)) {
            console.log(r(270, 290) + r(220, 159) + r(305, 317) + r(291, 282) + r(187, 216) + r(242, 156));
            v[r(245, 303) + r(318, 362)] = n.FX[r(245, 184) + r(318, 323)];
          }
          C[r(178, 171)] = v;
          w[r(207, 162)] = C;
          let H = a => typeof a == "object" && a !== null && !Array.isArray(a);
          let I = a => {
            if (!H(a)) {
              return a;
            }
            let {
              slug: b,
              ...c
            } = a;
            return c;
          };
          let J = a => {
            if (!H(a)) {
              return a;
            }
            let {
              slug: b,
              items: c,
              ...d
            } = a;
            let e = Array[r(312, 159)](c) ? c.map(a => H(a) ? J(a) : a) : c;
            if (c === undefined) {
              return d;
            } else {
              return {
                ...d,
                items: e
              };
            }
          };
          let K = w[r(229, 289)];
          if (Array[r(312, 210)](K)) {
            w.projects = K.map(a => {
              if (!H(a)) {
                return a;
              }
              let {
                slug: b,
                sections: c,
                ...d
              } = a;
              let e = Array[r(312, 930)](c) ? c[function (a, b, c, d) {
                return r(c - -396 - -17, -181);
              }(0, 0, -104, -181)](I) : c;
              if (c === undefined) {
                return d;
              } else {
                return {
                  ...d,
                  sections: e
                };
              }
            });
          }
          let L = w[r(294, 306)];
          if (Array[r(312, 231)](L)) {
            w[r(294, 284)] = L[r(309, 326)](a => {
              var b;
              function c(a, b, c, d) {
                return r(c - -450 - -17, d);
              }
              if (c(-180, -213, -255, -331) !== "ukTOn") {
                if (!H(a)) {
                  return a;
                }
                let {
                  slug: b,
                  ...c
                } = a;
                return c;
              }
              _0x448817[c(-146, -272, -227, -203)]("⚠️ Settings" + r(262, b = -326) + c(-280, -328, -296, -233) + c(-197, -248, -275, -237) + "g defaults");
              _0x244d28 = {
                ..._0x1e17b3
              };
            });
          }
          if (H(w[r(243, 281) + "ups"])) {
            w[r(243, 169) + r(198, 193)] = J(w[r(243, 303) + "ups"]);
          }
          if (H(w[r(205, 199) + "s"])) {
            w[r(205, 257) + "s"] = J(w[r(205, 265) + "s"]);
          }
          return JSON[r(244, 158)](JSON.stringify(w));
        }(a);
        if (typeof a6 !== (b = 0, c = 0, d = 764, v(300, 764)) || a6 === null || Array[be(859, 850, 852, 839)](a6)) {
          throw Error((e = 0, f = 0, g = 787, v(314, 787) + (h = 0, i = 0, j = 867, v(341, 867)) + (k = 743, l = 0, m = 0, v(320, 743)) + " object"));
        }
        let a7 = {};
        for (let [a, b] of Object[bf(771, 806, 776, 835)](a6)) {
          a7[a] = b;
        }
        let a8 = typeof a7.settings !== (o = 766, p = 0, q = 0, v(300, 766)) || a7[bf(799, 807, 840, 785)] === null || Array.isArray(a7.settings) ? {} : {
          ...a7[bf(801, 807, 800, 773)]
        };
        let a9 = {
          ...s.Ry
        };
        let ba = typeof a8.productivity != "object" || a8[be(815, 837, 846, 833) + "ty"] === null || Array.isArray(a8[be(815, 781, 777, 805) + "ty"]) ? a9 : {
          ...a8[bf(748, 776, 743, 742) + "ty"]
        };
        let bb = Array.isArray(ba[bf(844, 811, 776, 813) + "encies"]) ? ba["customCurr" + be(798, 769, 838, 820)][u = 0, w = 0, x = 836, v(305, 836)](a => {
          var b;
          var c;
          var d;
          return typeof a === (b = 722, c = 0, d = 0, v(300, 722)) && a !== null && !Array[bf(847, 820, 806, 836)](a);
        })[y = 0, z = 0, A = 830, v(323, 830)](a => {
          let b = {
            ...a
          };
          function c(a, b, c, d) {
            return v(b - -944 - 491, a);
          }
          function d(a, b, c, d) {
            return v(c - -1346 - 452, d);
          }
          if (typeof b.exchangeRate !== c(-139, -134, -124, -129) || b[d(-597, -566, -569, -529) + "te"] <= 0) {
            b[c(-136, -128, -139, -161) + "te"] = 1;
          }
          if (typeof b[d(-537, -553, -529, -518)] != "string" || b[c(-80, -88, -99, -61)].trim()[d(-570, -546, -534, -573)] === 0) {
            if (c(-106, -136, -151, -133) === d(-581, -561, -577, -590)) {
              b[d(-549, -498, -529, -489)] = typeof b.id === d(-549, -524, -550, -549) && b.id === s.Q1 ? s.Aq : d(-604, -593, -573, -571);
            } else {
              _0xa9f727[_0x34bb8d] = _0x122019;
            }
          } else {
            if (d(-566, -564, -533, -538) === d(-538, -601, -561, -560)) {
              return;
            }
            b[d(-506, -553, -529, -562)] = b.name[c(-90, -104, -82, -72)]();
          }
          return b;
        }) : [];
        if (!bb[bf(799, 774, 782, 765)](a => {
          var b;
          var c;
          var d;
          return typeof a.id === (b = 0, c = 0, d = 840, v(344, 840)) && a.id === s.Q1;
        })) {
          let a = {
            id: s.Q1,
            [(B = 832, C = 0, D = 0, v(365, 832))]: s.Aq,
            [(E = 805, F = 0, G = 0, v(325, 805) + "te")]: 1
          };
          bb[bf(770, 753, 731, 720)](a);
        }
        let bc = [];
        let bd = new Set();
        function be(a, b, c, d) {
          return v(a - 491, d);
        }
        bb[bf(737, 750, 726, 739)](a => {
          function b(a, b, c, d) {
            return v(c - 300 - 491, a);
          }
          function c(a, b, c, d) {
            return v(c - 195 - 491, d);
          }
          if (b(1125, 1159, 1133, 1138) !== "rVbua") {
            _0x48593d[b(1131, 1173, 1143, 1161)] = _0x1c8e79[b(1163, 1111, 1149, 1116)];
          } else {
            let b = typeof a.id === c(990, 1046, 1030, 1059) ? a.id : null;
            if (b === null || bd.has(b)) {
              if (c(1071, 1073, 1034, 999) !== c(1000, 976, 985, 967)) {
                return;
              } else {
                _0x17605b.points = _0x2d9c57;
              }
            }
            bd.add(b);
            bc[c(1033, 1033, 1020, 1034)](a);
          }
        });
        ba[H = 0, I = 0, J = 818, v(359, 818) + (K = 0, L = 0, M = 767, v(307, 767))] = bc;
        if (typeof ba[bf(830, 827, 860, 830) + (N = 0, O = 0, P = 859, v(335, 859)) + "ed"] !== (Q = 795, R = 0, S = 0, v(332, 795))) {
          if ((T = 742, U = 0, V = 0, v(302, 742)) !== "LGFqd") {
            _0x4047bf.name = _0x35f002[W = 0, X = 0, Y = 870, v(365, 870)][Z = 799, $ = 0, _ = 0, v(349, 799)]();
          } else {
            ba[aa = 789, ab = 0, ac = 0, v(375, 789) + (ad = 0, ae = 0, af = 792, v(335, 792)) + "ed"] = s.Ry[ag = 790, ah = 0, ai = 0, v(375, 790) + (aj = 762, ak = 0, al = 0, v(335, 762)) + "ed"];
          }
        }
        if (typeof ba[bf(740, 761, 736, 781) + "bled"] !== (am = 0, an = 0, ao = 824, v(332, 824))) {
          ba[ap = 737, aq = 0, ar = 0, v(309, 737) + (as = 0, at = 0, au = 788, v(303, 788))] = s.Ry[av = 774, aw = 0, ax = 0, v(309, 774) + (ay = 0, az = 0, aA = 770, v(303, 770))];
        }
        if (typeof ba[v(311, 769) + "e"] !== (aB = 785, aC = 0, aD = 0, v(344, 785))) {
          ba.rewardTheme = s.Ry.rewardTheme;
        }
        a8[v(324, 775) + "ty"] = ba;
        if (typeof a8[v(345, 864)] !== v(300, 756) || a8.uiSettings === null || Array[v(368, 849)](a8[bf(788, 797, 782, 763)])) {
          let a = {
            ...n.Xc
          };
          a8[aE = 803, aF = 0, aG = 0, v(345, 803)] = a;
        }
        a7[v(355, 842)] = a8;
        if (Array[v(368, 857)](a7[bf(783, 792, 814, 760)])) {
          aH = 859;
          aI = 0;
          aJ = 0;
          if (v(373, 859) !== (aK = 790, aL = 0, aM = 0, v(373, 790))) {
            return _0x2e4e1e;
          } else {
            a7[aN = 757, aO = 0, aP = 0, v(340, 757)] = a7[bf(769, 792, 775, 825)].map(a => {
              if (typeof a !== d(770, 750, 765, 747) || a === null || Array[c(722, 689, 664, 656)](a) || typeof a[c(602, 617, 616, 578)] != "object" || a[d(766, 789, 740, 757)] === null || Array[d(838, 807, 877, 826)](a.reward)) {
                if (d(833, 825, 811, 870) === c(690, 684, 709, 708)) {
                  return a;
                } else {
                  _0x1044e4.name = typeof _0x49ecd2.id === c(656, 665, 673, 650) && _0x48ea6f.id === _0x470771 ? _0x10c42f : c(622, 642, 643, 640);
                }
              }
              let b = {
                ...a[d(766, 773, 800, 740)]
              };
              function c(a, b, c, d) {
                return v(b - -131 - 452, c);
              }
              function d(a, b, c, d) {
                return v(a - 18 - 452, d);
              }
              if (b[c(678, 673, 663, 644)] === undefined || typeof b.amount != "number") {
                if (c(703, 691, 685, 665) !== c(686, 688, 697, 698)) {
                  if (typeof b[d(828, 788, 788, 849)] === d(789, 795, 762, 796)) {
                    b.amount = b.value;
                  } else {
                    b[d(822, 810, 802, 801)] = s.p2;
                  }
                } else {
                  _0x3bf16c[c(680, 658, 682, 698) + c(647, 649, 685, 650)] = [];
                }
              }
              if (b[d(844, 830, 826, 843)] === undefined || typeof b[d(844, 823, 855, 855)] != "string") {
                if (d(821, 816, 795, 796) === "ohDwe") {
                  _0x3f03f7.points = _0x5474f9[d(822, 816, 844, 832)];
                } else {
                  b[c(729, 695, 711, 670)] = s.Q1;
                }
              }
              let e = {
                ...a
              };
              e[c(600, 617, 590, 590)] = b;
              return e;
            });
          }
        }
        function bf(a, b, c, d) {
          return v(b - 452, a);
        }
        if (Array[v(368, 880)](a7[bf(800, 814, 817, 837) + "ts"])) {
          if ((aQ = 753, aR = 0, aS = 0, v(297, 753)) !== "KWaYX") {
            _0x2e3879[v(309, 812) + (aT = 750, aU = 0, aV = 0, v(303, 750))] = _0x492af9[bf(786, 761, 790, 793) + "bled"];
          } else {
            a7[v(362, 820) + "ts"] = a7[v(362, 884) + "ts"][aW = 787, aX = 0, aY = 0, v(323, 787)](a => {
              function b(a, b, c, d) {
                return v(d - -314 - 491, c);
              }
              function c(a, b, c, d) {
                return v(c - -862 - 491, d);
              }
              if (b(587, 565, 561, 549) === c(-50, -80, -61, -48)) {
                let a = {
                  ..._0x235835
                };
                if (typeof a[c(-57, -26, -46, -80) + "te"] != "number" || a[b(510, 482, 526, 502) + "te"] <= 0) {
                  a[c(-22, -11, -46, -21) + "te"] = 1;
                }
                if (typeof a[c(32, 34, -6, -5)] !== c(-42, 13, -27, -49) || a.name[b(529, 519, 512, 526)]()[b(527, 531, 528, 537)] === 0) {
                  a[c(20, 7, -6, -34)] = typeof a.id === b(559, 503, 510, 521) && a.id === _0x590e35 ? _0x3a8f35 : b(515, 492, 500, 498);
                } else {
                  a.name = a[c(-30, 34, -6, 8)].trim();
                }
                return a;
              }
              {
                if (typeof a !== b(511, 472, 484, 477) || a === null || Array[c(-20, -3, -3, -3)](a)) {
                  return a;
                }
                let d = {
                  ...a
                };
                if (typeof d[b(475, 514, 520, 495)] !== c(-66, -50, -27, -20) && typeof d.taskId === b(512, 538, 481, 521)) {
                  if (c(-48, -73, -65, -96) === c(-61, -81, -65, -54)) {
                    d[c(-31, -71, -53, -70)] = d[b(489, 506, 536, 523)];
                    delete d[b(489, 483, 519, 523)];
                  } else if (typeof _0x332c7d.value === c(-69, -42, -52, -40)) {
                    _0x59f794[c(-52, -38, -19, 1)] = _0x13be1e.value;
                  } else {
                    _0x112615[c(-6, -58, -19, -52)] = _0x23f74c;
                  }
                }
                if (d[c(-85, -79, -67, -41)] === undefined || typeof d[c(-66, -73, -67, -92)] !== b(486, 459, 497, 496)) {
                  if (b(558, 561, 573, 543) !== b(493, 545, 489, 516)) {
                    if (typeof d.amount == "number") {
                      d[b(462, 509, 450, 481)] = d[c(8, -37, -19, 16)];
                    } else {
                      d[c(-72, -80, -67, -101)] = t.Uo;
                    }
                  } else {
                    throw new _0x1353ef(b(515, 481, 520, 491) + b(510, 490, 479, 518) + c(-75, -82, -51, -18) + b(547, 555, 511, 533));
                  }
                }
                return d;
              }
            });
          }
        }
        if (Array.isArray(a7[v(375, 884) + v(308, 771)])) {
          a7[v(375, 836) + v(308, 829)] = a7[v(375, 898) + bf(781, 760, 758, 766)][aZ = 814, a$ = 0, a_ = 0, v(323, 814)](a => {
            function b(a, b, c, d) {
              return v(a - -376 - 452, b);
            }
            if (typeof a !== b(376, 360, 357, 363) || a === null || Array.isArray(a)) {
              return a;
            }
            let c = {
              ...a
            };
            function d(a, b, c, d) {
              return v(c - -12 - 491, b);
            }
            if (typeof c[b(394, 406, 397, 363)] != "string" && typeof c[d(811, 827, 825, 806)] == "string") {
              if (b(447, 443, 454, 413) === d(807, 787, 795, 824)) {
                return _0xe11934;
              } else {
                c[b(394, 382, 392, 395)] = c[d(811, 853, 825, 843)];
                delete c[d(801, 832, 825, 826)];
              }
            }
            return c;
          });
        } else {
          a7[a0 = 864, a1 = 0, a2 = 0, v(375, 864) + (a3 = 782, a4 = 0, a5 = 0, v(308, 782))] = [];
        }
        if (typeof ba[v(337, 823) + "ems"] === v(327, 762) || !Array[v(368, 893)](ba[v(337, 777) + v(328, 797)])) {
          ba[v(337, 864) + v(328, 836)] = [];
        }
        return JSON.parse(JSON[v(369, 891)](a7));
      }
    }];
    function B() {
      let a = ["cOoRf", "must be a ", "string (e.", "...", "apply", "newer befo", "Migration ", "step at in", "version is", "147088GAjxEV", "N object w", "riginal st", "v0.12.0", "40zDEPSv", ". Data rev", "n failed:", "LseSd", "igration t", "695904dFlOTc", "ata migrat", " to ", "invalid da", "ted. Minim", "object", "ed version", "map", "166nlAPoG", "des a vali", " returned ", "ion proper", "failed: ", "Data migra", "et ", "v0.11.0", "JSON objec", "ith a vers", "version ", ". Please e", "isArray", "ion from v", "search", "3047TvGwBr", "✓ Successf", "d version ", " is undefi", "entries", "522184XhzGvk", "0\").", "v0.8.0 or ", "dorFh", "pgrade to ", "Data file ", "log", "parse", "l version:", "o version ", "No migrati", "supported ", "879816eioEeG", "t be a JSO", "pCwBC", "ger suppor", "uFVAR", "Aborting m", "ta structu", "to ", " returning", "version", "v0.8.0", "al state (", "320450IkTaht", " with targ", ". Please u", "EAjzl", "80316AdMJqD", "ate.", "(((.+)+)+)", "trim", "ted to ver", " to origin", "bZXIc", "is missing", "6AWymkn", "string", "12AmdESj", "Applying m", "migrate", "constructo", "✗ Migratio", "ng.", "erted to o", "message", "file inclu", "YVUwx", "ned", "cMemj", "igration -", " is no lon", "ons needed", "g., \"v0.8.", "Starting d", "error", "um support", " is ", "24uVfxkg", "toString", "LYito", "nwszF", "findIndex", "wdtXv", "ully migra", "re migrati", "Record mus"];
      return (B = function () {
        return a;
      })();
    }
    function C(a) {
      function b(a, b, c, d) {
        return y(a - 125 - 115, b);
      }
      if (typeof a !== d(549, 565, 574, 590) || a === null || Array[d(537, 580, 551, 606)](a) || !(b(509, 485, 454, 560) in a)) {
        throw Error(b(554, 513, 604, 503) + d(566, 601, 616, 570) + d(685, 665, 704, 621) + b(477, 425, 426, 505) + d(516, 571, 569, 560) + "ty");
      }
      let c = a.version;
      function d(a, b, c, d) {
        return y(b - 225 - 115, a);
      }
      if (typeof c !== d(667, 625, 648, 578) || c[b(519, 468, 487, 465)]() === "") {
        if (d(600, 651, 660, 630) !== b(551, 553, 549, 553)) {
          return _0x4b25cf(_0x5558ab, _0x212e2d);
        } else {
          throw Error("Data file " + b(523, 526, 563, 518) + " a version. Minimum " + b(499, 477, 555, 516) + d(618, 663, 647, 627) + " " + z + (d(547, 579, 573, 578) + "nsure the " + d(626, 634, 604, 599) + b(469, 433, 462, 433) + b(485, 481, 520, 515) + d(666, 657, 661, 647)) + b(541, 503, 491, 519) + b(489, 525, 455, 454));
        }
      }
      return (0, i.M0)(c);
    }
    async function D(a) {
      function b(a, b, c, d) {
        return y(b - -659 - 411, c);
      }
      let c = j.K;
      let d = await (0, k.s)();
      let e = c || (0, i.M0)("v" + d[b(69, 21, 77, 27)]);
      if (typeof a !== b(-27, -23, -34, -62) || a === null || Array[n(-540, -595, -634, -635)](a)) {
        throw Error(b(-11, 5, 9, -37) + "must be a JSON object");
      }
      let f = {};
      for (let [c, d] of Object[n(-579, -588, -576, -562)](a)) {
        if (b(10, 60, 62, 83) !== b(71, 60, 116, 92)) {
          _0x3bb6fe.log(n(-547, -577, -566, -599) + n(-514, -535, -532, -554) + " from " + _0x58a719 + n(-455, -500, -492, -553) + _0x22f744);
          return _0x472c95[n(-601, -580, -550, -617)](_0xf25d56);
        } else {
          f[c] = d;
        }
      }
      let g = C(a);
      if ((0, l.zV)(g, z)) {
        if (b(32, 83, 70, 97) === "KJQiY") {
          return _0x472a9a[b(32, 59, 23, 108)]()[b(-25, -6, 42, -61)]("(((.+)+)+)+$")[n(-563, -528, -585, -547)]()[b(97, 41, 13, 68) + "r"](_0x2d6cb8)[n(-594, -593, -606, -625)]("(((.+)+)+)+$");
        } else {
          throw Error(n(-631, -582, -610, -603) + n(-547, -597, -649, -594) + g + (b(57, 51, 21, 84) + n(-515, -572, -539, -532) + n(-568, -611, -565, -617) + b(74, 56, 107, 48) + n(-605, -609, -618, -652) + n(-565, -530, -537, -565)) + z + (n(-506, -561, -550, -591) + n(-587, -583, -541, -637) + "TaskTrove " + n(-581, -585, -555, -611) + n(-475, -515, -542, -503)) + n(-527, -522, -507, -470) + b(18, 43, 96, 36));
        }
      }
      console[b(7, 6, -28, -12)](n(-562, -533, -555, -539) + n(-517, -501, -531, -516) + b(-7, -7, -50, -26) + "ersion " + g + (n(-537, -562, -521, -568) + n(-575, -601, -633, -566)) + e);
      let m = A[b(50, 62, 50, 49)](a => (0, l.zV)(g, a.version));
      if (m === -1) {
        if (b(37, 34, 65, 54) === b(20, 34, 7, 53)) {
          console[n(-610, -581, -601, -554)]("No migrations needed from " + g + n(-484, -500, -546, -488) + e);
          return h.Wk[n(-557, -580, -594, -528)](f);
        } else {
          throw new _0x57201a(b(97, 66, 107, 27) + b(67, 13, -43, 65) + "N object with a vers" + n(-611, -604, -569, -589) + "ty");
        }
      }
      function n(a, b, c, d) {
        return y(b - -1246 - 411, a);
      }
      let o = {
        ...f
      };
      try {
        for (let a = m; a < A.length; a++) {
          let d = A[a];
          if (!d) {
            if (n(-509, -520, -468, -470) === "KomPB") {
              _0xdfdbd8[b(20, 55, 94, 20)]("✗ Migratio" + n(-524, -505, -527, -496), _0x48eb88);
              _0x2a96d5.error(n(-583, -570, -531, -561) + n(-492, -537, -590, -533) + b(-12, 20, 27, 73) + n(-564, -554, -577, -571) + n(-598, -564, -597, -613) + _0x35fc65 + ")");
              throw new _0x3363a5(b(103, 73, 86, 30) + n(-550, -603, -635, -558) + (_0x45761d instanceof _0x3e00e3 ? _0x213a38.message : _0x1c46ec(_0x5a1a9c)) + (n(-475, -506, -469, -494) + b(48, 44, 29, -6) + n(-541, -509, -473, -549) + n(-529, -558, -503, -579)));
            } else {
              console[n(-498, -532, -566, -494)](b(17, 73, 80, 113) + b(38, 74, 74, 109) + "dex " + a + (n(-536, -589, -590, -614) + n(-519, -539, -590, -522)));
              continue;
            }
          }
          if (c && (0, l.zV)(e, d[n(-519, -566, -584, -515)])) {
            break;
          }
          console.log(b(91, 39, 36, 34) + b(81, 84, 79, 137) + n(-564, -578, -525, -591) + d[b(-24, 21, 12, -29)] + b(92, 70, 74, 58));
          let f = JSON.parse(JSON.stringify(o));
          let g = d[n(-553, -547, -498, -535)](f);
          if (typeof g !== b(-51, -23, -10, -70) || g === null || Array[n(-644, -595, -557, -633)](g)) {
            if (n(-556, -526, -560, -516) !== "UxiDP") {
              throw Error(b(90, 73, 55, 71) + n(-594, -568, -591, -539) + d.version + (n(-552, -605, -609, -564) + n(-551, -499, -497, -539) + "ta structure"));
            } else {
              _0x58647d[_0x18d2a6] = _0x47c0a2;
            }
          }
          let h = {};
          for (let [a, c] of Object.entries(g)) {
            if (n(-577, -538, -544, -558) !== "xgbuL") {
              h[a] = c;
            } else {
              throw new _0x48f441(b(23, 73, 68, 59) + n(-518, -568, -539, -587) + _0x2769e9[n(-537, -566, -554, -571)] + (n(-635, -605, -566, -559) + n(-534, -499, -454, -458) + n(-551, -569, -587, -514) + "re"));
            }
          }
          (o = h)[n(-583, -566, -596, -554)] = d[n(-617, -566, -623, -547)];
          console[b(-4, 6, -39, -20)](b(-9, -4, 13, -53) + b(99, 64, 51, 35) + n(-545, -555, -595, -507) + "sion " + d[n(-598, -566, -539, -616)]);
        }
        let a = h.Wk[b(-8, 7, 61, 60)](o);
        console[b(-26, 6, -12, -45)](b(1, -15, -42, -44) + "tion completed. Fina" + n(-528, -579, -600, -585) + " " + (a.version || g));
        return a;
      } catch (a) {
        if (b(-17, 27, 52, 2) !== n(-591, -584, -536, -579)) {
          console[n(-577, -532, -567, -509)](n(-550, -545, -586, -561) + n(-538, -505, -503, -449), a);
          console.error(n(-586, -570, -583, -614) + b(42, 50, 64, 11) + b(-28, 20, -14, -25) + n(-523, -554, -530, -602) + "al state (" + g + ")");
          throw Error("Migration " + b(-57, -16, -64, -52) + (a instanceof Error ? a[b(12, 45, 100, -5)] : String(a)) + n(-556, -506, -516, -513) + "erted to original state.");
        }
        throw new _0x146b97(b(36, 5, -26, 25) + n(-570, -519, -538, -511) + b(27, -12, -4, -36) + "t");
      }
    }
    function E(a) {
      if (typeof a !== b(-77, -134, -47, -109) || a === null || Array.isArray(a)) {
        throw Error("Data file " + b(14, -3, 33, 8) + function (a, b, c, d) {
          return y(b - -1082 - 411, a);
        }(-437, -435, 0, 0) + "t");
      }
      function b(a, b, c, d) {
        return y(a - -417 - 115, c);
      }
      let c = C(a);
      let d = j.K;
      return !!d && (0, l.zV)(c, d);
    }
    function F(a) {
      if (typeof a !== d(82, 98, 134, 173) || a === null || Array[c(-32, -55, -100, -62)](a)) {
        if (c(-51, -12, -4, -7) === d(193, 147, 171, 192)) {
          throw new _0x193e47("Data file " + d(241, 174, 225, 244) + "JSON object");
        } else {
          throw Error(c(-104, -53, -49, -49) + d(269, 209, 225, 204) + c(-38, -28, -13, -66) + "t");
        }
      }
      let b = C(a);
      function c(a, b, c, d) {
        return y(d - -713 - 411, a);
      }
      function d(a, b, c, d) {
        return y(c - -502 - 411, d);
      }
      return {
        currentVersion: b,
        targetVersion: j.K || b,
        needsMigration: E(a)
      };
    }
    (function (a, b) {
      var c = a();
      while (true) {
        try {
          if (parseInt(H(434, 1376)) / 1 * (parseInt(H(442, 438)) / 2) + parseInt(H(421, 1348)) / 3 + parseInt(H(433, 442)) / 4 * (parseInt(H(423, 423)) / 5) + -parseInt(H(438, 1365)) / 6 * (-parseInt(H(431, 1366)) / 7) + parseInt(H(435, 444)) / 8 * (-parseInt(H(441, 1372)) / 9) + parseInt(H(437, 451)) / 10 * (-parseInt(H(427, 1366)) / 11) + parseInt(H(432, 1362)) / 12 * (parseInt(H(429, 1353)) / 13) === 602878) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(I, 0);
    var G = (g = true, function (a, b) {
      var c = g ? function () {
        if (b) {
          if (H(430, 1356) === "pjHaz") {
            _0x77315 = false;
            if (_0x3c4616) {
              return function () {
                if (_0x5575f3) {
                  var a = _0x30fb80[H(425, 280)](_0x354d95, arguments);
                  _0x4cfeb5 = null;
                  return a;
                }
              };
            } else {
              return function () {};
            }
          }
          var c = b[H(425, 724)](a, arguments);
          b = null;
          return c;
        }
      } : function () {};
      g = false;
      return c;
    })(undefined, function () {
      return G[H(436, -70)]()[H(422, -338)](H(424, -320) + "+$")[H(436, -332)]().constructor(G).search(H(424, -106) + "+$");
    });
    function H(a, b) {
      var c = I();
      return (H = function (a, b) {
        return c[a -= 417];
      })(a, b);
    }
    function I() {
      var a = ["tasks", "labelGroup", "736668iHKydL", "search", "5lPHNuC", "(((.+)+)+)", "apply", "version", "656249vSjQcF", "labels", "74893rECPWz", "FkEEc", "7rQTxJv", "120DnoMRZ", "177932oIErwZ", "376763qoOgFt", "192BBHPuL", "toString", "150NdofPh", "1024710CjqlxL", "ups", "user", "56610skWURl", "6sBzpkg", "projects", "settings"];
      return (I = function () {
        return a;
      })();
    }
    function J(a) {
      var b = {
        ...n.m_
      };
      b[H(426, 1221)] = a.version;
      b[H(419, 1212)] = a.tasks;
      b[H(417, 1211)] = a[H(417, -177)];
      b.labels = a[H(428, -154)];
      b["projectGro" + H(439, -168)] = a["projectGro" + H(439, 1250)];
      b[H(420, -185) + "s"] = a[H(420, -184) + "s"];
      b.settings = a[H(418, 1213)];
      b[H(440, 1233)] = [{
        ...n.Az,
        ...a[H(440, 1246)]
      }];
      return b;
    }
    G();
  }
};