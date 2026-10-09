"use strict";

(() => {
  var a = {
    id: 9896,
    ids: [9896]
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
    19121: a => {
      a.exports = require("next/dist/server/app-render/action-async-storage.external.js");
    },
    29294: a => {
      a.exports = require("next/dist/server/app-render/work-async-storage.external.js");
    },
    33873: a => {
      a.exports = require("path");
    },
    35867: (a, b, c) => {
      c.d(b, {
        D4: () => d.D4,
        lF: () => d.lF
      });
      var d = c(47589);
    },
    44870: a => {
      a.exports = require("next/dist/compiled/next-server/app-route.runtime.prod.js");
    },
    51027: (a, b, c) => {
      a.exports = c(44870);
    },
    55511: a => {
      a.exports = require("crypto");
    },
    59451: (a, b, c) => {
      let d;
      c.r(b);
      c.d(b, {
        handler: () => _,
        patchFetch: () => $,
        routeModule: () => W,
        serverHooks: () => Z,
        workAsyncStorage: () => X,
        workUnitAsyncStorage: () => Y
      });
      var e = {};
      c.r(e);
      c.d(e, {
        GET: () => Q,
        POST: () => V
      });
      var f = c(51027);
      var g = c(95276);
      var h = c(19395);
      var i = c(58411);
      var j = c(45965);
      var k = c(88502);
      var l = c(49249);
      var m = c(261);
      var n = c(44575);
      var o = c(75537);
      var p = c(68843);
      var q = c(35368);
      var r = c(70438);
      var s = c(56412);
      var t = c(89526);
      var u = c(38915);
      var v = c(86439);
      var w = c(54609);
      var x = c(27618);
      var y = c(5214);
      var z = c(20017);
      var A = c(85425);
      var B = c(28837);
      var C = c(33885);
      var D = c(45541);
      var E = c(5639);
      var F = c(17255);
      var G = c(74218);
      var H = c(7852);
      var I = c(77766);
      var J = c(50336);
      var K = c(60000);
      let L = (d = true, function (a, b) {
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
        return L.toString().search("(((.+)+)+)+$").toString().constructor(L).search("(((.+)+)+)+$");
      });
      async function M(a) {
        let b = await (0, G.$7)(() => (0, F.Gb)(), "read-rewards-data-file", a.context);
        if (!b) {
          return (0, E.WX)("Failed to read data file", "File reading or validation failed", 500, B.c.DATA_FILE_READ_ERROR);
        }
        let c = z.GN.parse(b);
        let d = c.rewardEvents;
        let e = c.currencyRewardEvents ?? [];
        let f = {
          eventsCount: d.length + e.length
        };
        (0, G.jf)("rewards_fetched", f, a.context);
        let g = {
          rewardEvents: d,
          currencyRewardEvents: e,
          meta: {
            count: d.length + e.length,
            timestamp: new Date().toISOString()
          }
        };
        return x.NextResponse.json(g, {
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0"
          }
        });
      }
      L();
      let Q = (0, J.F0)((0, H.D)((0, I.Z)((0, G.kF)(M, {
        endpoint: "/api/v1/rewards",
        module: "api-v1-rewards"
      }), {
        allowApiToken: true
      })));
      async function R(a) {
        let b = await (0, E.sv)(a, A.IF);
        if (!b.success) {
          return b.error;
        }
        let c = await (0, G.$7)(() => (0, F.Gb)(), "read-rewards-data-file", a.context);
        if (!c) {
          return (0, E.WX)("Failed to read data file", "File reading or validation failed", 500, B.c.DATA_FILE_READ_ERROR);
        }
        let d = await (0, K.K)(a);
        if (!d?.user?.id) {
          return (0, E.WX)("Session not found", "Could not determine current user", 401, B.c.AUTHENTICATION_REQUIRED);
        }
        let e = D._k.parse(d.user.id);
        let g = {
          ...c
        };
        g.rewardEvents = c.rewardEvents;
        g.currencyRewardEvents = c.currencyRewardEvents ?? [];
        if (b.data.type === "WISHLIST_REDEEMED" && !b.data.currencyId) {
          return (0, E.WX)("Invalid wishlist redemption", "Wishlist redemptions must include currencyId and amount", 400, B.c.VALIDATION_ERROR);
        }
        if (b.data.currencyId) {
          let a = [...g.currencyRewardEvents, {
            id: (0, y.A)(),
            userId: e,
            entityId: b.data.entityId,
            type: b.data.type,
            currencyId: b.data.currencyId,
            amount: b.data.amount ?? 0,
            timestamp: new Date()
          }];
          g.currencyRewardEvents = a;
        } else {
          let a = {
            id: (0, y.A)(),
            userId: e,
            type: b.data.type,
            entityId: b.data.entityId,
            points: C.Uo,
            timestamp: new Date()
          };
          g.rewardEvents = [...g.rewardEvents, a];
        }
        let h = {
          data: g
        };
        if (!(await (0, G.QA)(() => (0, F.Ht)(h), "write-reward-event", a.context, 500))) {
          return (0, E.WX)("Failed to save reward event", "File writing failed", 500, B.c.DATA_FILE_WRITE_ERROR);
        }
        if (b.data.currencyId) {
          let b = g.currencyRewardEvents.at(-1);
          let c = {
            eventId: b?.id,
            type: b?.type,
            entityId: b?.entityId,
            currencyId: b?.currencyId,
            amount: b?.amount,
            totalEvents: g.currencyRewardEvents.length
          };
          (0, G.jf)("currency_reward_event_created", c, a.context);
          let d = {
            success: true,
            eventId: b?.id ?? "",
            message: "Currency reward event created successfully"
          };
          return x.NextResponse.json(d);
        }
        let i = g.rewardEvents.at(-1);
        let j = {
          eventId: i?.id,
          type: i?.type,
          entityId: i?.entityId,
          points: i?.points,
          totalEvents: g.rewardEvents.length
        };
        (0, G.jf)("reward_event_created", j, a.context);
        let k = {
          success: true,
          eventId: i?.id ?? "",
          message: "Reward event created successfully"
        };
        return x.NextResponse.json(k);
      }
      let V = (0, J.F0)((0, H.D)((0, I.Z)((0, G.kF)(R, {
        endpoint: "/api/v1/rewards",
        module: "api-v1-rewards"
      }), {
        allowApiToken: true
      })));
      let W = new f.AppRouteRouteModule({
        definition: {
          kind: g.RouteKind.APP_ROUTE,
          page: "/api/v1/rewards/route",
          pathname: "/api/v1/rewards",
          filename: "route",
          bundlePath: "app/api/v1/rewards/route"
        },
        distDir: ".next",
        relativeProjectDir: "",
        resolvedPagePath: "/app/apps/web.pro/app/api/v1/rewards/route.ts",
        nextConfigOutput: "standalone",
        userland: e
      });
      let {
        workAsyncStorage: X,
        workUnitAsyncStorage: Y,
        serverHooks: Z
      } = W;
      function $() {
        return (0, h.patchFetch)({
          workAsyncStorage: X,
          workUnitAsyncStorage: Y
        });
      }
      async function _(a, b, c) {
        if (W.isDev) {
          (0, i.addRequestMeta)(a, "devRequestTimingInternalsEnd", process.hrtime.bigint());
        }
        let d = "/api/v1/rewards/route";
        if (d === "/index") {
          d = "/";
        }
        let e = await W.prepare(a, b, {
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
          params: h,
          nextConfig: x,
          parsedUrl: y,
          isDraftMode: z,
          prerenderManifest: A,
          routerServerContext: B,
          isOnDemandRevalidate: C,
          revalidateOnlyGenerated: D,
          resolvedPathname: E,
          clientReferenceManifest: F,
          serverActionsManifest: G
        } = e;
        let H = (0, m.normalizeAppPath)(d);
        let I = !!A.dynamicRoutes[H] || !!A.routes[E];
        let J = async () => {
          if (B == null ? undefined : B.render404) {
            await B.render404(a, b, y, false);
          } else {
            b.end("This page could not be found");
          }
          return null;
        };
        if (I && !z) {
          let a = !!A.routes[E];
          let b = A.dynamicRoutes[H];
          if (b && b.fallback === false && !a) {
            if (x.experimental.adapterPath) {
              return await J();
            }
            throw new v.NoFallbackError();
          }
        }
        let K = null;
        if (!!I && !W.isDev && !z) {
          K = (K = E) === "/index" ? "/" : K;
        }
        let L = W.isDev === true || !I;
        let M = I && !L;
        if (G && F) {
          (0, k.setReferenceManifestsSingleton)({
            page: d,
            clientReferenceManifest: F,
            serverActionsManifest: G,
            serverModuleMap: (0, l.createServerModuleMap)({
              serverActionsManifest: G
            })
          });
        }
        let N = a.method || "GET";
        let O = (0, j.getTracer)();
        let P = O.getActiveScopeSpan();
        let Q = {
          params: h,
          prerenderManifest: A,
          renderOpts: {
            experimental: {
              authInterrupts: !!x.experimental.authInterrupts
            },
            cacheComponents: !!x.cacheComponents,
            supportsDynamicResponse: L,
            incrementalCache: (0, i.getRequestMeta)(a, "incrementalCache"),
            cacheLifeProfiles: x.cacheLife,
            waitUntil: c.waitUntil,
            onClose: a => {
              b.on("close", a);
            },
            onAfterTaskError: undefined,
            onInstrumentationRequestError: (b, c, d) => W.onRequestError(a, b, d, B)
          },
          sharedContext: {
            buildId: f
          }
        };
        let R = new n.NodeNextRequest(a);
        let S = new n.NodeNextResponse(b);
        let T = o.NextRequestAdapter.fromNodeNextRequest(R, (0, o.signalFromNodeResponse)(b));
        try {
          let e = async a => W.handle(T, Q).finally(() => {
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
            if (c.get("next.span_type") !== p.BaseServerSpan.handleRequest) {
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
          let f = !!(0, i.getRequestMeta)(a, "minimalMode");
          let h = async h => {
            var i;
            var j;
            let k = async ({
              previousCacheEntry: g
            }) => {
              try {
                if (!f && C && D && !g) {
                  b.statusCode = 404;
                  b.setHeader("x-nextjs-cache", "REVALIDATED");
                  b.end("This page could not be found");
                  return null;
                }
                let d = await e(h);
                a.fetchMetrics = Q.renderOpts.fetchMetrics;
                let i = Q.renderOpts.pendingWaitUntil;
                if (i && c.waitUntil) {
                  c.waitUntil(i);
                  i = undefined;
                }
                let j = Q.renderOpts.collectedTags;
                if (!I) {
                  await (0, r.I)(R, S, d, Q.renderOpts.pendingWaitUntil);
                  return null;
                }
                {
                  let a = await d.blob();
                  let b = (0, s.toNodeOutgoingHttpHeaders)(d.headers);
                  if (j) {
                    b[u.NEXT_CACHE_TAGS_HEADER] = j;
                  }
                  if (!b["content-type"] && a.type) {
                    b["content-type"] = a.type;
                  }
                  let c = Q.renderOpts.collectedRevalidate !== undefined && !(Q.renderOpts.collectedRevalidate >= u.INFINITE_CACHE) && Q.renderOpts.collectedRevalidate;
                  let e = Q.renderOpts.collectedExpire === undefined || Q.renderOpts.collectedExpire >= u.INFINITE_CACHE ? undefined : Q.renderOpts.collectedExpire;
                  return {
                    value: {
                      kind: w.CachedRouteKind.APP_ROUTE,
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
                if (g == null ? undefined : g.isStale) {
                  await W.onRequestError(a, b, {
                    routerKind: "App Router",
                    routePath: d,
                    routeType: "route",
                    revalidateReason: (0, q.c)({
                      isStaticGeneration: M,
                      isOnDemandRevalidate: C
                    })
                  }, B);
                }
                throw b;
              }
            };
            let l = await W.handleResponse({
              req: a,
              nextConfig: x,
              cacheKey: K,
              routeKind: g.RouteKind.APP_ROUTE,
              isFallback: false,
              prerenderManifest: A,
              isRoutePPREnabled: false,
              isOnDemandRevalidate: C,
              revalidateOnlyGenerated: D,
              responseGenerator: k,
              waitUntil: c.waitUntil,
              isMinimalMode: f
            });
            if (!I) {
              return null;
            }
            if ((l == null || (i = l.value) == null ? undefined : i.kind) !== w.CachedRouteKind.APP_ROUTE) {
              throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${l == null || (j = l.value) == null ? undefined : j.kind}`), "__NEXT_ERROR_CODE", {
                value: "E701",
                enumerable: false,
                configurable: true
              });
            }
            if (!f) {
              b.setHeader("x-nextjs-cache", C ? "REVALIDATED" : l.isMiss ? "MISS" : l.isStale ? "STALE" : "HIT");
            }
            if (z) {
              b.setHeader("Cache-Control", "private, no-cache, no-store, max-age=0, must-revalidate");
            }
            let m = (0, s.fromNodeOutgoingHttpHeaders)(l.value.headers);
            if (!f || !I) {
              m.delete(u.NEXT_CACHE_TAGS_HEADER);
            }
            if (!!l.cacheControl && !b.getHeader("Cache-Control") && !m.get("Cache-Control")) {
              m.set("Cache-Control", (0, t.getCacheControlHeader)(l.cacheControl));
            }
            await (0, r.I)(R, S, new Response(l.value.body, {
              headers: m,
              status: l.value.status || 200
            }));
            return null;
          };
          if (P) {
            await h(P);
          } else {
            await O.withPropagatedContext(a.headers, () => O.trace(p.BaseServerSpan.handleRequest, {
              spanName: `${N} ${d}`,
              kind: j.SpanKind.SERVER,
              attributes: {
                "http.method": N,
                "http.target": a.url
              }
            }, h));
          }
        } catch (b) {
          if (!(b instanceof v.NoFallbackError)) {
            await W.onRequestError(a, b, {
              routerKind: "App Router",
              routePath: H,
              routeType: "route",
              revalidateReason: (0, q.c)({
                isStaticGeneration: M,
                isOnDemandRevalidate: C
              })
            });
          }
          if (I) {
            throw b;
          }
          await (0, r.I)(R, S, new Response(null, {
            status: 500
          }));
          return null;
        }
      }
    },
    63033: a => {
      a.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
    },
    70438: (a, b, c) => {
      Object.defineProperty(b, "I", {
        enumerable: true,
        get: function () {
          return g;
        }
      });
      let d = c(47302);
      let e = c(81435);
      let f = c(56412);
      async function g(a, b, c, g) {
        if ((0, d.isNodeNextResponse)(b)) {
          var h;
          b.statusCode = c.status;
          b.statusMessage = c.statusText;
          let d = ["set-cookie", "www-authenticate", "proxy-authenticate", "vary"];
          if ((h = c.headers) != null) {
            h.forEach((a, c) => {
              if (c.toLowerCase() !== "x-middleware-set-cookie") {
                if (c.toLowerCase() === "set-cookie") {
                  for (let d of (0, f.splitCookiesString)(a)) {
                    b.appendHeader(c, d);
                  }
                } else {
                  let e = b.getHeader(c) !== undefined;
                  if (d.includes(c.toLowerCase()) || !e) {
                    b.appendHeader(c, a);
                  }
                }
              }
            });
          }
          let {
            originalResponse: i
          } = b;
          if (c.body && a.method !== "HEAD") {
            await (0, e.pipeToNodeResponse)(c.body, i, g);
          } else {
            i.end();
          }
        }
      }
    },
    77598: a => {
      a.exports = require("node:crypto");
    },
    79748: a => {
      a.exports = require("fs/promises");
    },
    86439: a => {
      a.exports = require("next/dist/shared/lib/no-fallback-error.external");
    }
  };
  var b = require("../../../../webpack-runtime.js");
  b.C(a);
  var c = b.X(0, [2468, 7618, 4624, 2962, 8264, 4049, 5474, 9437, 9428, 476, 9935, 3946, 7507, 4934], () => b(b.s = 59451));
  module.exports = c;
})();