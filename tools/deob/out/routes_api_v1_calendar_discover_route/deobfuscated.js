"use strict";

(() => {
  var a = {
    id: 2632,
    ids: [2632]
  };
  a.modules = {
    261: a => {
      a.exports = require("next/dist/shared/lib/router/utils/app-paths");
    },
    3295: a => {
      a.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");
    },
    5639: (a, b, c) => {
      let d;
      c.d(b, {
        WX: () => l,
        sv: () => k
      });
      var e = c(27618);
      var f = c(28837);
      var g = c(63282);
      let h = (d = true, function (a, b) {
        let c = d ? function () {
          if (b) {
            let c = b.apply(a, arguments);
            b = null;
            return c;
          }
        } : function () {};
        d = false;
        return c;
      })(undefined, function () {
        return h.toString().search("(((.+)+)+)+$").toString().constructor(h).search("(((.+)+)+)+$");
      });
      async function k(a, b) {
        try {
          let m = await a.json();
          let n = b.safeParse(m);
          if (!n.success) {
            let a = {
              code: f.c.VALIDATION_ERROR,
              error: "Validation failed",
              message: (0, g.Mt)(n[-322, -301, "error"])
            };
            return {
              success: false,
              error: e.NextResponse[-305, -287, "json"](a, {
                status: 400
              })
            };
          }
          let o = {
            success: true,
            [(-285, -298, "data")]: n.data
          };
          return o;
        } catch (a) {
          {
            let b = {
              code: f.c.INVALID_REQUEST_BODY,
              error: "Invalid JSON in request body",
              message: a instanceof Error ? a.message : "Unknown parsing error"
            };
            return {
              success: false,
              error: e.NextResponse.json(b, {
                status: 400
              })
            };
          }
        }
      }
      function l(a, b, c = 500, d = f.c[function (a, b, c, d) {
        return "INTERNAL_S";
      }(0, 0, 0, 0) + function (a, b, c, d) {
        return "ERVER_ERRO";
      }(0, 0, 0, 0) + "R"], g) {
        let h = {
          code: d,
          error: a,
          message: b,
          ...g
        };
        let i = {
          [function (a, b, c, d) {
            return "status";
          }(0, 108, 104, 0)]: c
        };
        return e.NextResponse.json(h, i);
      }
      h();
    },
    7097: (a, b, c) => {
      let d;
      c.r(b);
      c.d(b, {
        handler: () => ag,
        patchFetch: () => af,
        routeModule: () => ab,
        serverHooks: () => ae,
        workAsyncStorage: () => ac,
        workUnitAsyncStorage: () => ad
      });
      var e;
      var f;
      var g;
      var h;
      var i;
      var j;
      var k;
      var l;
      var m;
      var n;
      var o;
      var p;
      var q = {};
      c.r(q);
      c.d(q, {
        POST: () => aa
      });
      var r = c(51027);
      var s = c(95276);
      var t = c(19395);
      var u = c(58411);
      var v = c(45965);
      var w = c(88502);
      var x = c(49249);
      var y = c(261);
      var z = c(44575);
      var A = c(75537);
      var B = c(68843);
      var C = c(35368);
      var D = c(70438);
      var E = c(56412);
      var F = c(89526);
      var G = c(38915);
      var H = c(86439);
      var I = c(54609);
      var J = c(27618);
      var K = c(44708);
      var L = c.n(K);
      var M = c(74218);
      var N = c(77766);
      var O = c(50336);
      var P = c(5639);
      var Q = c(7147);
      var R = c(92962);
      var S = c(28837);
      var T = c(33885);
      (function (a, b) {
        let c = a();
        while (true) {
          try {
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
            var n;
            var o;
            var p;
            var q;
            var r;
            if (-parseInt(V(353, -279)) / 1 * (-parseInt(V(338, -339)) / 2) + parseInt((d = -72, V(d - -402, -84))) / 3 * (parseInt((e = -303, f = -313, V(f - -662, e))) / 4) + -parseInt((g = -100, V(304, g))) / 5 * (parseInt((h = -328, i = -304, V(i - -662, h))) / 6) + -parseInt((j = -67, k = -41, V(k - -402, j))) / 7 + -parseInt((l = -310, V(l - -662, -328))) / 8 + parseInt((m = -338, n = -355, V(n - -662, m))) / 9 * (parseInt(V(309, -348)) / 10) + parseInt((o = -117, p = -92, V(p - -402, o))) / 11 * (parseInt((q = -72, r = -68, V(r - -402, q))) / 12) === 751374) {
              break;
            }
            c.push(c.shift());
          } catch (a) {
            c.push(c.shift());
          }
        }
      })(W, 0);
      let U = (d = true, function (a, b) {
        let c = d ? function () {
          if (V(356, 405) === "QfJdL") {
            if (b) {
              let c = b.apply(a, arguments);
              b = null;
              return c;
            }
          } else {
            let a = _0x4a3265[V(343, 721)][V(313, 748)];
            return _0x2bf897(V(297, 379) + V(331, 760), a[V(336, 741)](a => a.path[V(335, 374)](".") + ": " + a[V(340, 776)])[V(335, 745)]("; "), 400, _0x3d2c85.VALIDATION_ERROR);
          }
        } : function () {};
        d = false;
        return c;
      })(undefined, function () {
        return U[V(300, 1124)]()[V(305, 47)](V(321, 1149) + "+$")[V(300, 63)]()[V(333, 1199) + "r"](U)[V(305, 29)](V(321, 1188) + "+$");
      });
      function V(a, b) {
        let c = W();
        return (V = function (a, b) {
          return c[a -= 296];
        })(a, b);
      }
      function W() {
        let a = ["Successful", "error", "iscovery f", "Agent", "V1_CALENDA", "string", "min", "3447100smVxAP", "_ERROR", "boolean", "10071936oUkSQE", "3329RlNtKf", "ERVER_ERRO", "red CalDAV", "QfJdL", "s required", "2089944PeLZJY", "enum", "safeParse", "1122205DvFEeQ", "success", "Invalid re", "carddav", "ror occurr", "toString", "accountTyp", "endpoint", "thorized", "15eGBriD", "search", "ailed", "693054zfxVJi", "VALIDATION", "60xRUkwD", "44jBFCJV", "fetchOptio", "serverUrl", "issues", "rootUrl", "rejectUnau", "Unknown er", "json", "caldav", "api-v1-cal", "password", "(((.+)+)+)", "bbwSb", "optional", "allowApiTo", " service a", "object", "Username i", "data", "url", "3OINJTw", "quest", "Invalid se", "constructo", "2659452hiaGhJ", "join", "map", "path", "604uHHohF", "Password i", "message", "R_DISCOVER"];
        return (W = function () {
          return a;
        })();
      }
      U();
      let X = R[V(326, 1137)]({
        serverUrl: R[V(347, 1154)]()[e = 0, f = 0, g = 1124, V(329, 1124)](V(332, 1171) + "rver URL"),
        username: R[Y(1090, 1115, 1118, 1140)]()[V(348, 1150)](1, (h = 0, i = 0, j = 1069, V(327, 1069) + V(357, 1168))),
        password: R[V(347, 1197)]()[k = 0, l = 0, m = 1089, V(348, 1089)](1, V(339, 1190) + "s required"),
        accountType: R[Y(1138, 1151, 1130, 1159)]([V(318, 1168), V(298, 1135)])[n = 0, o = 0, p = 1077, V(323, 1077)](),
        allowInsecure: R[Y(1132, 1140, 1122, 1120)]().optional()
      });
      function Y(a, b, c, d) {
        return V(c - 771, d);
      }
      async function Z(a) {
        function b(a, b, c, d) {
          return V(a - -960 - 771, d);
        }
        function c(a, b, c, d) {
          return V(c - -1131 - 771, a);
        }
        try {
          let d = await a[b(128, 101, 102, 153)]();
          let e = X[b(171, 166, 175, 152)](d);
          if (!e[b(107, 90, 84, 78)]) {
            let a = e[b(154, 165, 185, 139)][c(-32, -58, -47, -46)];
            return (0, P.WX)("Invalid request", a[c(-34, -45, -24, -5)](a => a[c(6, -38, -23, -40)][c(-31, -38, -25, -8)](".") + ": " + a[c(9, -8, -20, -21)])[c(-29, -5, -25, -39)]("; "), 400, S.c[c(-78, -45, -52, -73) + b(161, 175, 168, 178)]);
          }
          let {
            serverUrl: f,
            username: g,
            password: h,
            accountType: i,
            allowInsecure: j
          } = e[c(-24, -50, -32, -40)];
          let k = {
            [c(-61, -40, -45, -58) + b(114, 124, 118, 83)]: false
          };
          let l = j ? {
            agent: new (L()[b(156, 127, 187, 159)])(k)
          } : {};
          let m = {
            serverUrl: f,
            username: g,
            [c(-11, -54, -40, -46)]: h
          };
          m[b(112, 89, 115, 142) + "e"] = i || b(129, 109, 140, 157);
          m[c(-55, -16, -49, -43) + "ns"] = l;
          let n = await (0, Q.AO)(m);
          let o = {
            [c(-59, -39, -64, -36)]: true,
            [b(123, 130, 116, 131)]: n.serverUrl
          };
          o[c(-18, -39, -46, -70)] = n[b(125, 106, 157, 136)];
          o.message = b(153, 151, 141, 164) + "ly discove" + b(166, 145, 147, 170) + b(136, 129, 147, 151) + "t " + n[c(-31, -77, -46, -72)];
          return J.NextResponse.json(o);
        } catch (a) {
          if (c(-61, -11, -38, -24) !== b(133, 142, 135, 163)) {
            return _0x2f7d93[b(111, 99, 142, 138)]().search(b(132, 148, 125, 111) + "+$")[c(-45, -86, -60, -92)]()[b(144, 159, 117, 118) + "r"](_0x1c2c7f)[c(-37, -87, -55, -73)](b(132, 122, 157, 101) + "+$");
          }
          {
            console[c(-42, -50, -17, 7)]("Calendar d" + b(155, 152, 142, 178) + "ailed:", a);
            let d = a instanceof Error ? a[b(151, 166, 145, 167)] : c(-66, -26, -44, -19) + c(-44, -56, -61, -68) + "ed";
            return (0, P.WX)("Calendar d" + b(155, 173, 131, 166) + b(117, 127, 123, 148), d, 500, S.c["INTERNAL_S" + b(165, 198, 195, 150) + "R"]);
          }
        }
      }
      let $ = {};
      $[V(302, 1080)] = T.QQ[V(346, 1153) + V(341, 1100)];
      $.module = V(319, 1092) + "endar-discover";
      let _ = {
        [V(324, 1099) + "ken"]: true
      };
      let aa = (0, O.F0)((0, N.Z)((0, M.kF)(Z, $), _));
      let ab = new r.AppRouteRouteModule({
        definition: {
          kind: s.RouteKind.APP_ROUTE,
          page: "/api/v1/calendar/discover/route",
          pathname: "/api/v1/calendar/discover",
          filename: "route",
          bundlePath: "app/api/v1/calendar/discover/route"
        },
        distDir: ".next",
        relativeProjectDir: "",
        resolvedPagePath: "/app/apps/web.pro/app/api/v1/calendar/discover/route.ts",
        nextConfigOutput: "standalone",
        userland: q
      });
      let {
        workAsyncStorage: ac,
        workUnitAsyncStorage: ad,
        serverHooks: ae
      } = ab;
      function af() {
        return (0, t.patchFetch)({
          workAsyncStorage: ac,
          workUnitAsyncStorage: ad
        });
      }
      async function ag(a, b, c) {
        if (ab.isDev) {
          (0, u.addRequestMeta)(a, "devRequestTimingInternalsEnd", process.hrtime.bigint());
        }
        let d = "/api/v1/calendar/discover/route";
        if (d === "/index") {
          d = "/";
        }
        let e = await ab.prepare(a, b, {
          srcPage: d,
          multiZoneDraftMode: false
        });
        if (!e) {
          b.statusCode = 400;
          b.end("Bad Request");
          if (c.waitUntil != null) {
            c.waitUntil.call(c, Promise.resolve());
          }
          return null;
        }
        let {
          buildId: f,
          params: g,
          nextConfig: h,
          parsedUrl: i,
          isDraftMode: j,
          prerenderManifest: k,
          routerServerContext: l,
          isOnDemandRevalidate: m,
          revalidateOnlyGenerated: n,
          resolvedPathname: o,
          clientReferenceManifest: p,
          serverActionsManifest: q
        } = e;
        let r = (0, y.normalizeAppPath)(d);
        let t = !!k.dynamicRoutes[r] || !!k.routes[o];
        let J = async () => {
          if (l == null ? undefined : l.render404) {
            await l.render404(a, b, i, false);
          } else {
            b.end("This page could not be found");
          }
          return null;
        };
        if (t && !j) {
          let a = !!k.routes[o];
          let b = k.dynamicRoutes[r];
          if (b && b.fallback === false && !a) {
            if (h.experimental.adapterPath) {
              return await J();
            }
            throw new H.NoFallbackError();
          }
        }
        let K = null;
        if (!!t && !ab.isDev && !j) {
          K = (K = o) === "/index" ? "/" : K;
        }
        let L = ab.isDev === true || !t;
        let M = t && !L;
        if (q && p) {
          (0, w.setReferenceManifestsSingleton)({
            page: d,
            clientReferenceManifest: p,
            serverActionsManifest: q,
            serverModuleMap: (0, x.createServerModuleMap)({
              serverActionsManifest: q
            })
          });
        }
        let N = a.method || "GET";
        let O = (0, v.getTracer)();
        let P = O.getActiveScopeSpan();
        let Q = {
          params: g,
          prerenderManifest: k,
          renderOpts: {
            experimental: {
              authInterrupts: !!h.experimental.authInterrupts
            },
            cacheComponents: !!h.cacheComponents,
            supportsDynamicResponse: L,
            incrementalCache: (0, u.getRequestMeta)(a, "incrementalCache"),
            cacheLifeProfiles: h.cacheLife,
            waitUntil: c.waitUntil,
            onClose: a => {
              b.on("close", a);
            },
            onAfterTaskError: undefined,
            onInstrumentationRequestError: (b, c, d) => ab.onRequestError(a, b, d, l)
          },
          sharedContext: {
            buildId: f
          }
        };
        let R = new z.NodeNextRequest(a);
        let S = new z.NodeNextResponse(b);
        let T = A.NextRequestAdapter.fromNodeNextRequest(R, (0, A.signalFromNodeResponse)(b));
        try {
          let e = async a => ab.handle(T, Q).finally(() => {
            if (!a) {
              return;
            }
            a.setAttributes({
              "http.status_code": b.statusCode,
              "next.rsc": false
            });
            let c = O.getRootSpanAttributes();
            if (!c) {
              return;
            }
            if (c.get("next.span_type") !== B.BaseServerSpan.handleRequest) {
              console.warn(`Unexpected root span type '${c.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);
              return;
            }
            let e = c.get("next.route");
            if (e) {
              let b = `${N} ${e}`;
              a.setAttributes({
                "next.route": e,
                "http.route": e,
                "next.span_name": b
              });
              a.updateName(b);
            } else {
              a.updateName(`${N} ${d}`);
            }
          });
          let f = !!(0, u.getRequestMeta)(a, "minimalMode");
          let g = async g => {
            var i;
            var o;
            let p = async ({
              previousCacheEntry: h
            }) => {
              try {
                if (!f && m && n && !h) {
                  b.statusCode = 404;
                  b.setHeader("x-nextjs-cache", "REVALIDATED");
                  b.end("This page could not be found");
                  return null;
                }
                let d = await e(g);
                a.fetchMetrics = Q.renderOpts.fetchMetrics;
                let i = Q.renderOpts.pendingWaitUntil;
                if (i && c.waitUntil) {
                  c.waitUntil(i);
                  i = undefined;
                }
                let j = Q.renderOpts.collectedTags;
                if (!t) {
                  await (0, D.I)(R, S, d, Q.renderOpts.pendingWaitUntil);
                  return null;
                }
                {
                  let a = await d.blob();
                  let b = (0, E.toNodeOutgoingHttpHeaders)(d.headers);
                  if (j) {
                    b[G.NEXT_CACHE_TAGS_HEADER] = j;
                  }
                  if (!b["content-type"] && a.type) {
                    b["content-type"] = a.type;
                  }
                  let c = Q.renderOpts.collectedRevalidate !== undefined && !(Q.renderOpts.collectedRevalidate >= G.INFINITE_CACHE) && Q.renderOpts.collectedRevalidate;
                  let e = Q.renderOpts.collectedExpire === undefined || Q.renderOpts.collectedExpire >= G.INFINITE_CACHE ? undefined : Q.renderOpts.collectedExpire;
                  return {
                    value: {
                      kind: I.CachedRouteKind.APP_ROUTE,
                      status: d.status,
                      body: Buffer.from(await a.arrayBuffer()),
                      headers: b
                    },
                    cacheControl: {
                      revalidate: c,
                      expire: e
                    }
                  };
                }
              } catch (b) {
                if (h == null ? undefined : h.isStale) {
                  await ab.onRequestError(a, b, {
                    routerKind: "App Router",
                    routePath: d,
                    routeType: "route",
                    revalidateReason: (0, C.c)({
                      isStaticGeneration: M,
                      isOnDemandRevalidate: m
                    })
                  }, l);
                }
                throw b;
              }
            };
            let q = await ab.handleResponse({
              req: a,
              nextConfig: h,
              cacheKey: K,
              routeKind: s.RouteKind.APP_ROUTE,
              isFallback: false,
              prerenderManifest: k,
              isRoutePPREnabled: false,
              isOnDemandRevalidate: m,
              revalidateOnlyGenerated: n,
              responseGenerator: p,
              waitUntil: c.waitUntil,
              isMinimalMode: f
            });
            if (!t) {
              return null;
            }
            if ((q == null || (i = q.value) == null ? undefined : i.kind) !== I.CachedRouteKind.APP_ROUTE) {
              throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${q == null || (o = q.value) == null ? undefined : o.kind}`), "__NEXT_ERROR_CODE", {
                value: "E701",
                enumerable: false,
                configurable: true
              });
            }
            if (!f) {
              b.setHeader("x-nextjs-cache", m ? "REVALIDATED" : q.isMiss ? "MISS" : q.isStale ? "STALE" : "HIT");
            }
            if (j) {
              b.setHeader("Cache-Control", "private, no-cache, no-store, max-age=0, must-revalidate");
            }
            let r = (0, E.fromNodeOutgoingHttpHeaders)(q.value.headers);
            if (!f || !t) {
              r.delete(G.NEXT_CACHE_TAGS_HEADER);
            }
            if (!!q.cacheControl && !b.getHeader("Cache-Control") && !r.get("Cache-Control")) {
              r.set("Cache-Control", (0, F.getCacheControlHeader)(q.cacheControl));
            }
            await (0, D.I)(R, S, new Response(q.value.body, {
              headers: r,
              status: q.value.status || 200
            }));
            return null;
          };
          if (P) {
            await g(P);
          } else {
            await O.withPropagatedContext(a.headers, () => O.trace(B.BaseServerSpan.handleRequest, {
              spanName: `${N} ${d}`,
              kind: v.SpanKind.SERVER,
              attributes: {
                "http.method": N,
                "http.target": a.url
              }
            }, g));
          }
        } catch (b) {
          if (!(b instanceof H.NoFallbackError)) {
            await ab.onRequestError(a, b, {
              routerKind: "App Router",
              routePath: r,
              routeType: "route",
              revalidateReason: (0, C.c)({
                isStaticGeneration: M,
                isOnDemandRevalidate: m
              })
            });
          }
          if (t) {
            throw b;
          }
          await (0, D.I)(R, S, new Response(null, {
            status: 500
          }));
          return null;
        }
      }
    },
    10846: a => {
      a.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
    },
    11997: a => {
      a.exports = require("punycode");
    },
    19121: a => {
      a.exports = require("next/dist/server/app-render/action-async-storage.external.js");
    },
    21820: a => {
      a.exports = require("os");
    },
    27910: a => {
      a.exports = require("stream");
    },
    28354: a => {
      a.exports = require("util");
    },
    29294: a => {
      a.exports = require("next/dist/server/app-render/work-async-storage.external.js");
    },
    33873: a => {
      a.exports = require("path");
    },
    41204: a => {
      a.exports = require("string_decoder");
    },
    44708: a => {
      a.exports = require("node:https");
    },
    44870: a => {
      a.exports = require("next/dist/compiled/next-server/app-route.runtime.prod.js");
    },
    55511: a => {
      a.exports = require("crypto");
    },
    55591: a => {
      a.exports = require("https");
    },
    63033: a => {
      a.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
    },
    74075: a => {
      a.exports = require("zlib");
    },
    77598: a => {
      a.exports = require("node:crypto");
    },
    79551: a => {
      a.exports = require("url");
    },
    79748: a => {
      a.exports = require("fs/promises");
    },
    81630: a => {
      a.exports = require("http");
    },
    83997: a => {
      a.exports = require("tty");
    },
    86439: a => {
      a.exports = require("next/dist/shared/lib/no-fallback-error.external");
    }
  };
  var b = require("../../../../../webpack-runtime.js");
  b.C(a);
  var c = b.X(0, [2468, 7618, 4624, 2962, 8264, 4049, 5474, 8880, 9437, 9428, 476, 9935, 3946, 7507, 7147], () => b(b.s = 7097));
  module.exports = c;
})();