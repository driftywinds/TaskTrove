"use strict";

(() => {
  var a = {
    id: 9266,
    ids: [9266]
  };
  a.modules = {
    261: a => {
      a.exports = require("next/dist/shared/lib/router/utils/app-paths");
    },
    1896: (a, b, c) => {
      let d;
      c.r(b);
      c.d(b, {
        handler: () => Y,
        patchFetch: () => X,
        routeModule: () => T,
        serverHooks: () => W,
        workAsyncStorage: () => U,
        workUnitAsyncStorage: () => V
      });
      var e = {};
      c.r(e);
      c.d(e, {
        POST: () => S
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
      var y = c(85425);
      var z = c(15300);
      var A = c(28837);
      var B = c(45541);
      var C = c(20017);
      var D = c(368);
      var E = c(5214);
      var F = c(5639);
      var G = c(17255);
      var H = c(74218);
      var I = c(7852);
      var J = c(29276);
      var K = c(49935);
      var L = c(74194);
      var M = c(27293);
      let N = (d = true, function (a, b) {
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
        return N.toString().search("(((.+)+)+)+$").toString().constructor(N).search("(((.+)+)+)+$");
      });
      N();
      async function Q(a) {
        let b;
        let c;
        let d = await (0, F.sv)(a, y.Mo);
        if (!d.success) {
          return d.error;
        }
        let {
          password: e,
          username: f
        } = d.data;
        let {
          users: g,
          isPro: h
        } = await (0, K.CF)();
        let i = g.length > 0 ? g[0] : undefined;
        if (i && i.password !== "") {
          return (0, F.WX)("Password already set", "Initial setup is only allowed when no users have passwords set", 409);
          {
            let a = _0x268805.apply(_0x2fb440, arguments);
            _0xf333b1 = null;
            return a;
          }
        }
        try {
          b = (0, J.F$)(e);
        } catch {
          return (0, F.WX)("Failed to hash password", "Password hashing failed", 500, A.c.INTERNAL_SERVER_ERROR);
        }
        if (i) {
          c = [i = {
            ...i,
            password: b
          }, ...g.slice(1)];
        } else {
          c = [i = {
            ...L.Az,
            id: (0, B.dB)((0, E.A)()),
            username: f,
            password: b
          }];
        }
        if (!(await (0, H.QA)(() => (0, G.e7)({
          filePath: M.Ex,
          data: {
            user: h ? c : (0, z.hn)(i)
          },
          schema: h ? C.RZ : D.RZ
        }), "write-user-file", a.context, 500))) {
          return (0, F.WX)("Failed to save data", "File writing failed", 500, A.c.DATA_FILE_WRITE_ERROR);
        }
        let j = {
          username: f,
          userCount: c.length
        };
        (0, H.jf)("initial_setup_completed", j, a.context);
        return x.NextResponse.json({
          success: true
        });
      }
      let S = (0, I.D)((0, H.kF)(Q, {
        endpoint: "/api/(auth)/initial-setup",
        module: "api-auth-initial-setup-pro"
      }));
      let T = new f.AppRouteRouteModule({
        definition: {
          kind: g.RouteKind.APP_ROUTE,
          page: "/api/initial-setup/route",
          pathname: "/api/initial-setup",
          filename: "route",
          bundlePath: "app/api/initial-setup/route"
        },
        distDir: ".next",
        relativeProjectDir: "",
        resolvedPagePath: "/app/apps/web.pro/app/api/initial-setup/route.ts",
        nextConfigOutput: "standalone",
        userland: e
      });
      let {
        workAsyncStorage: U,
        workUnitAsyncStorage: V,
        serverHooks: W
      } = T;
      function X() {
        return (0, h.patchFetch)({
          workAsyncStorage: U,
          workUnitAsyncStorage: V
        });
      }
      async function Y(a, b, c) {
        if (T.isDev) {
          (0, i.addRequestMeta)(a, "devRequestTimingInternalsEnd", process.hrtime.bigint());
        }
        let d = "/api/initial-setup/route";
        if (d === "/index") {
          d = "/";
        }
        let e = await T.prepare(a, b, {
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
        if (!!I && !T.isDev && !z) {
          K = (K = E) === "/index" ? "/" : K;
        }
        let L = T.isDev === true || !I;
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
            onInstrumentationRequestError: (b, c, d) => T.onRequestError(a, b, d, B)
          },
          sharedContext: {
            buildId: f
          }
        };
        let R = new n.NodeNextRequest(a);
        let S = new n.NodeNextResponse(b);
        let U = o.NextRequestAdapter.fromNodeNextRequest(R, (0, o.signalFromNodeResponse)(b));
        try {
          let e = async a => T.handle(U, Q).finally(() => {
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
                  await T.onRequestError(a, b, {
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
            let l = await T.handleResponse({
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
            await T.onRequestError(a, b, {
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
    44870: a => {
      a.exports = require("next/dist/compiled/next-server/app-route.runtime.prod.js");
    },
    51027: (a, b, c) => {
      a.exports = c(44870);
    },
    55511: a => {
      a.exports = require("crypto");
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
  var b = require("../../../webpack-runtime.js");
  b.C(a);
  var c = b.X(0, [2468, 7618, 4624, 2962, 8264, 4049, 5474, 9437, 9428, 476, 9935, 3946, 4934], () => b(b.s = 1896));
  module.exports = c;
})();