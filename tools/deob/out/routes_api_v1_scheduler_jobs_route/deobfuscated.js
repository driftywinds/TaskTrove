"use strict";

(() => {
  var a = {
    id: 6,
    ids: [6]
  };
  a.modules = {
    261: a => {
      a.exports = require("next/dist/shared/lib/router/utils/app-paths");
    },
    3295: a => {
      a.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");
    },
    10846: a => {
      a.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
    },
    11997: a => {
      a.exports = require("punycode");
    },
    12412: a => {
      a.exports = require("assert");
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
    29021: a => {
      a.exports = require("fs");
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
    46193: a => {
      a.exports = require("node:string_decoder");
    },
    49213: (a, b, c) => {
      let d;
      c.r(b);
      c.d(b, {
        handler: () => W,
        patchFetch: () => V,
        routeModule: () => R,
        serverHooks: () => U,
        workAsyncStorage: () => S,
        workUnitAsyncStorage: () => T
      });
      var e;
      var f;
      var g;
      var h;
      var i = {};
      c.r(i);
      c.d(i, {
        GET: () => N
      });
      var j = c(51027);
      var k = c(95276);
      var l = c(19395);
      var m = c(58411);
      var n = c(45965);
      var o = c(88502);
      var p = c(49249);
      var q = c(261);
      var r = c(44575);
      var s = c(75537);
      var t = c(68843);
      var u = c(35368);
      var v = c(70438);
      var w = c(56412);
      var x = c(89526);
      var y = c(38915);
      var z = c(86439);
      var A = c(54609);
      var B = c(27618);
      var C = c(74218);
      var D = c(77766);
      var E = c(50336);
      var F = c(9069);
      var G = c(16119);
      let H = (d = true, function (a, b) {
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
        return H.toString().search("(((.+)+)+)+$").toString().constructor(H).search("(((.+)+)+)+$");
      });
      async function I() {
        await (0, F.g)();
        let a = (0, G.K)();
        let b = {
          jobs: a[function (a, b, c, d) {
            return __DECODE_0__(b - -377, d);
          }(-156, -150, -154, -155)](),
          running: a[function (a, b, c, d) {
            return __DECODE_0__(c - -167, a);
          }(37, 58, 51, 37)](),
          serverTime: new Date().toISOString()
        };
        return B.NextResponse.json(b, {
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0"
          }
        });
      }
      H();
      let K = {
        endpoint: "/api/v1/scheduler/jobs",
        [(e = 0, f = 0, g = 1122, "module")]: "api-v1-scheduler"
      };
      let N = (0, E.F0)((0, D.Z)((0, C.kF)(I, K), {
        allowApiToken: true
      }));
      function O(a, b) {
        var c = Q();
        return (O = function (a, b) {
          return c[a -= 144];
        })(a, b);
      }
      (function (a, b) {
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
        var n;
        var o = a();
        while (true) {
          try {
            if (parseInt((c = -382, O(155, c))) / 1 * (parseInt((d = -383, e = -387, O(d - -532, e))) / 2) + -parseInt((f = -378, g = -371, O(f - -532, g))) / 3 * (parseInt(O(147, 939)) / 4) + -parseInt(O(145, 939)) / 5 + parseInt(O(151, 942)) / 6 * (-parseInt((h = -388, O(h - -532, -380))) / 7) + -parseInt(O(160, 960)) / 8 + -parseInt((i = -379, j = -371, O(i - -532, j))) / 9 * (parseInt((k = -371, O(159, k))) / 10) + parseInt((l = -372, O(156, l))) / 11 * (parseInt((m = -380, n = -377, O(m - -532, n))) / 12) === 336292) {
              break;
            }
            o.push(o.shift());
          } catch (a) {
            o.push(o.shift());
          }
        }
      })(Q, 0);
      var P = (h = true, function (a, b) {
        var c = h ? function () {
          if (b) {
            var c = b[O(157, 901)](a, arguments);
            b = null;
            return c;
          }
        } : function () {};
        h = false;
        return c;
      })(undefined, function () {
        return P[O(150, 286)]()[O(146, -43)](O(158, 297) + "+$")[O(150, 294)]()[O(148, 288) + "r"](P)[O(146, 288)](O(158, 304) + "+$");
      });
      function Q() {
        var a = ["28VCMmYc", "constructo", "2UkbshQ", "toString", "234NpgmDH", "25167612XkjBBZ", "55503PaWtIt", "168783TZvzWc", "24869EolWCd", "11lzeEcr", "apply", "(((.+)+)+)", "790kYEbRY", "2701192jvzILG", "20874GxRhWK", "2254555joHrkd", "search"];
        return (Q = function () {
          return a;
        })();
      }
      P();
      let R = new j.AppRouteRouteModule({
        definition: {
          kind: k.RouteKind.APP_ROUTE,
          page: "/api/v1/scheduler/jobs/route",
          pathname: "/api/v1/scheduler/jobs",
          filename: "route",
          bundlePath: "app/api/v1/scheduler/jobs/route"
        },
        distDir: ".next",
        relativeProjectDir: "",
        resolvedPagePath: "/app/apps/web.pro/app/api/v1/scheduler/jobs/route.ts",
        nextConfigOutput: "standalone",
        userland: i
      });
      let {
        workAsyncStorage: S,
        workUnitAsyncStorage: T,
        serverHooks: U
      } = R;
      function V() {
        return (0, l.patchFetch)({
          workAsyncStorage: S,
          workUnitAsyncStorage: T
        });
      }
      async function W(a, b, c) {
        if (R.isDev) {
          (0, m.addRequestMeta)(a, "devRequestTimingInternalsEnd", process.hrtime.bigint());
        }
        let d = "/api/v1/scheduler/jobs/route";
        if (d === "/index") {
          d = "/";
        }
        let e = await R.prepare(a, b, {
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
          prerenderManifest: l,
          routerServerContext: B,
          isOnDemandRevalidate: C,
          revalidateOnlyGenerated: D,
          resolvedPathname: E,
          clientReferenceManifest: F,
          serverActionsManifest: G
        } = e;
        let H = (0, q.normalizeAppPath)(d);
        let I = !!l.dynamicRoutes[H] || !!l.routes[E];
        let J = async () => {
          if (B == null ? undefined : B.render404) {
            await B.render404(a, b, i, false);
          } else {
            b.end("This page could not be found");
          }
          return null;
        };
        if (I && !j) {
          let a = !!l.routes[E];
          let b = l.dynamicRoutes[H];
          if (b && b.fallback === false && !a) {
            if (h.experimental.adapterPath) {
              return await J();
            }
            throw new z.NoFallbackError();
          }
        }
        let K = null;
        if (!!I && !R.isDev && !j) {
          K = (K = E) === "/index" ? "/" : K;
        }
        let L = R.isDev === true || !I;
        let M = I && !L;
        if (G && F) {
          (0, o.setReferenceManifestsSingleton)({
            page: d,
            clientReferenceManifest: F,
            serverActionsManifest: G,
            serverModuleMap: (0, p.createServerModuleMap)({
              serverActionsManifest: G
            })
          });
        }
        let N = a.method || "GET";
        let O = (0, n.getTracer)();
        let P = O.getActiveScopeSpan();
        let Q = {
          params: g,
          prerenderManifest: l,
          renderOpts: {
            experimental: {
              authInterrupts: !!h.experimental.authInterrupts
            },
            cacheComponents: !!h.cacheComponents,
            supportsDynamicResponse: L,
            incrementalCache: (0, m.getRequestMeta)(a, "incrementalCache"),
            cacheLifeProfiles: h.cacheLife,
            waitUntil: c.waitUntil,
            onClose: a => {
              b.on("close", a);
            },
            onAfterTaskError: undefined,
            onInstrumentationRequestError: (b, c, d) => R.onRequestError(a, b, d, B)
          },
          sharedContext: {
            buildId: f
          }
        };
        let S = new r.NodeNextRequest(a);
        let T = new r.NodeNextResponse(b);
        let U = s.NextRequestAdapter.fromNodeNextRequest(S, (0, s.signalFromNodeResponse)(b));
        try {
          let e = async a => R.handle(U, Q).finally(() => {
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
            if (c.get("next.span_type") !== t.BaseServerSpan.handleRequest) {
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
          let f = !!(0, m.getRequestMeta)(a, "minimalMode");
          let g = async g => {
            var i;
            var m;
            let n = async ({
              previousCacheEntry: h
            }) => {
              try {
                if (!f && C && D && !h) {
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
                if (!I) {
                  await (0, v.I)(S, T, d, Q.renderOpts.pendingWaitUntil);
                  return null;
                }
                {
                  let a = await d.blob();
                  let b = (0, w.toNodeOutgoingHttpHeaders)(d.headers);
                  if (j) {
                    b[y.NEXT_CACHE_TAGS_HEADER] = j;
                  }
                  if (!b["content-type"] && a.type) {
                    b["content-type"] = a.type;
                  }
                  let c = Q.renderOpts.collectedRevalidate !== undefined && !(Q.renderOpts.collectedRevalidate >= y.INFINITE_CACHE) && Q.renderOpts.collectedRevalidate;
                  let e = Q.renderOpts.collectedExpire === undefined || Q.renderOpts.collectedExpire >= y.INFINITE_CACHE ? undefined : Q.renderOpts.collectedExpire;
                  return {
                    value: {
                      kind: A.CachedRouteKind.APP_ROUTE,
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
                  await R.onRequestError(a, b, {
                    routerKind: "App Router",
                    routePath: d,
                    routeType: "route",
                    revalidateReason: (0, u.c)({
                      isStaticGeneration: M,
                      isOnDemandRevalidate: C
                    })
                  }, B);
                }
                throw b;
              }
            };
            let o = await R.handleResponse({
              req: a,
              nextConfig: h,
              cacheKey: K,
              routeKind: k.RouteKind.APP_ROUTE,
              isFallback: false,
              prerenderManifest: l,
              isRoutePPREnabled: false,
              isOnDemandRevalidate: C,
              revalidateOnlyGenerated: D,
              responseGenerator: n,
              waitUntil: c.waitUntil,
              isMinimalMode: f
            });
            if (!I) {
              return null;
            }
            if ((o == null || (i = o.value) == null ? undefined : i.kind) !== A.CachedRouteKind.APP_ROUTE) {
              throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${o == null || (m = o.value) == null ? undefined : m.kind}`), "__NEXT_ERROR_CODE", {
                value: "E701",
                enumerable: false,
                configurable: true
              });
            }
            if (!f) {
              b.setHeader("x-nextjs-cache", C ? "REVALIDATED" : o.isMiss ? "MISS" : o.isStale ? "STALE" : "HIT");
            }
            if (j) {
              b.setHeader("Cache-Control", "private, no-cache, no-store, max-age=0, must-revalidate");
            }
            let p = (0, w.fromNodeOutgoingHttpHeaders)(o.value.headers);
            if (!f || !I) {
              p.delete(y.NEXT_CACHE_TAGS_HEADER);
            }
            if (!!o.cacheControl && !b.getHeader("Cache-Control") && !p.get("Cache-Control")) {
              p.set("Cache-Control", (0, x.getCacheControlHeader)(o.cacheControl));
            }
            await (0, v.I)(S, T, new Response(o.value.body, {
              headers: p,
              status: o.value.status || 200
            }));
            return null;
          };
          if (P) {
            await g(P);
          } else {
            await O.withPropagatedContext(a.headers, () => O.trace(t.BaseServerSpan.handleRequest, {
              spanName: `${N} ${d}`,
              kind: n.SpanKind.SERVER,
              attributes: {
                "http.method": N,
                "http.target": a.url
              }
            }, g));
          }
        } catch (b) {
          if (!(b instanceof z.NoFallbackError)) {
            await R.onRequestError(a, b, {
              routerKind: "App Router",
              routePath: H,
              routeType: "route",
              revalidateReason: (0, u.c)({
                isStaticGeneration: M,
                isOnDemandRevalidate: C
              })
            });
          }
          if (I) {
            throw b;
          }
          await (0, v.I)(S, T, new Response(null, {
            status: 500
          }));
          return null;
        }
      }
    },
    51455: a => {
      a.exports = require("node:fs/promises");
    },
    55511: a => {
      a.exports = require("crypto");
    },
    55591: a => {
      a.exports = require("https");
    },
    57075: a => {
      a.exports = require("node:stream");
    },
    63033: a => {
      a.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
    },
    73024: a => {
      a.exports = require("node:fs");
    },
    73136: a => {
      a.exports = require("node:url");
    },
    74075: a => {
      a.exports = require("zlib");
    },
    76760: a => {
      a.exports = require("node:path");
    },
    77598: a => {
      a.exports = require("node:crypto");
    },
    78474: a => {
      a.exports = require("node:events");
    },
    79428: a => {
      a.exports = require("buffer");
    },
    79551: a => {
      a.exports = require("url");
    },
    79748: a => {
      a.exports = require("fs/promises");
    },
    81115: a => {
      a.exports = require("constants");
    },
    81630: a => {
      a.exports = require("http");
    },
    83997: a => {
      a.exports = require("tty");
    },
    86439: a => {
      a.exports = require("next/dist/shared/lib/no-fallback-error.external");
    },
    94735: a => {
      a.exports = require("events");
    }
  };
  var b = require("../../../../../webpack-runtime.js");
  b.C(a);
  var c = b.X(0, [2468, 7618, 4624, 2962, 8264, 4049, 5474, 8880, 2555, 6277, 9437, 9428, 476, 9935, 3946, 7507, 7147, 3729, 6315, 2091, 9069], () => b(b.s = 49213));
  module.exports = c;
})();