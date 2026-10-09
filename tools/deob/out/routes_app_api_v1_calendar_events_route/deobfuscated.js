"use strict";

(() => {
  var a = {
    id: 8670,
    ids: [8670]
  };
  a.modules = {
    261: a => {
      a.exports = require("next/dist/shared/lib/router/utils/app-paths");
    },
    3295: a => {
      a.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");
    },
    5876: (a, b, c) => {
      let d;
      c.r(b);
      c.d(b, {
        handler: () => bw,
        patchFetch: () => bv,
        routeModule: () => br,
        serverHooks: () => bu,
        workAsyncStorage: () => bs,
        workUnitAsyncStorage: () => bt
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
      var q;
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
      var aC = {};
      c.r(aC);
      c.d(aC, {
        DELETE: () => bo,
        PATCH: () => bk,
        POST: () => bh
      });
      var aD = c(51027);
      var aE = c(95276);
      var aF = c(19395);
      var aG = c(58411);
      var aH = c(45965);
      var aI = c(88502);
      var aJ = c(49249);
      var aK = c(261);
      var aL = c(44575);
      var aM = c(75537);
      var aN = c(68843);
      var aO = c(35368);
      var aP = c(70438);
      var aQ = c(56412);
      var aR = c(89526);
      var aS = c(38915);
      var aT = c(86439);
      var aU = c(54609);
      var aV = c(27618);
      var aW = c(55511);
      var aX = c(74218);
      var aY = c(77766);
      var aZ = c(50336);
      var a$ = c(7852);
      var a_ = c(5639);
      var a0 = c(43729);
      var a1 = c(28837);
      var a2 = c(33885);
      var a3 = c(85425);
      var a4 = c(7147);
      let a5 = (d = true, function (a, b) {
        {
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
        return a5.toString().search("(((.+)+)+)+$").toString().constructor(a5).search("(((.+)+)+)+$");
      });
      a5();
      let a6 = {
        ["Cache-Cont" + (e = 0, f = 0, g = 59, "rol")]: (h = 0, i = 0, j = 129, "no-cache, " + (k = 0, l = 450, m = 0, "no-store, ") + (n = 0, o = 266, p = 0, "must-reval") + (q = 0, r = 355, s = 0, "idate")),
        [(t = 0, u = 0, v = 156, "Pragma")]: (w = 0, x = 403, y = 0, "no-cache"),
        [(z = 0, A = 373, B = 0, "Expires")]: "0"
      };
      let a7 = {
        [(C = 0, D = 0, E = 206, "headers")]: a6
      };
      let a8 = a => {
        var b;
        var c;
        var d;
        return aV.NextResponse[b = 0, c = 375, d = 0, "json"](a, a7);
      };
      let a9 = (a, b) => a.find(a => a.url === b);
      let ba = /\((\d{3})\)/;
      let bb = a => {
        let b = a.trim();
        if (b.toLowerCase().includes("operation exceeded timeout")) {
          let b = {
            status: 504,
            code: a1.c.INTERNAL_SERVER_ERROR,
            message: "Calendar sync timed out. Please try again.",
            additionalData: {
              retryable: true
            }
          };
          return b;
        }
        if (b === "No calendar sync connections configured.") {
          let a = {
            status: 400,
            code: a1.c.RESOURCE_NOT_FOUND,
            message: "No calendar connections are configured."
          };
          return a;
        }
        if (b === "Calendar not found.") {
          let a = {
            status: 404,
            code: a1.c.RESOURCE_NOT_FOUND,
            message: "Calendar not found."
          };
          return a;
        }
        if (b === "Calendar credentials not found.") {
          let a = {
            status: 401,
            code: a1.c.INVALID_CREDENTIALS,
            message: "Calendar credentials are missing or invalid."
          };
          return a;
        }
        let c = b.match(ba);
        let d = c ? Number(c[1]) : undefined;
        if (d) {
          if (d === 401) {
            let a = {
              status: d,
              code: a1.c.INVALID_CREDENTIALS,
              message: "Calendar credentials are invalid or expired."
            };
            return a;
          }
          if (d === 403) {
            let a = {
              status: d,
              code: a1.c.AUTHORIZATION_DENIED,
              message: "Calendar access is not permitted."
            };
            return a;
          }
          if (d === 404) {
            let a = {
              status: d,
              code: a1.c.RESOURCE_NOT_FOUND,
              message: "Calendar event could not be found."
            };
            return a;
          }
          if (d === 409 || d === 412 || d === 423) {
            let b = {
              status: d,
              code: a1.c.RESOURCE_CONFLICT,
              message: "This event has changed on the server. Refresh and try again.",
              additionalData: {
                conflict: true,
                retryable: true
              }
            };
            return b;
          }
          if (d === 400) {
            let a = {
              status: d,
              code: a1.c.VALIDATION_ERROR,
              message: "Calendar event data was rejected by the server."
            };
            return a;
          }
          if (d === 429) {
            let b = {
              status: d,
              code: a1.c.INTERNAL_SERVER_ERROR,
              message: "Calendar server rate limit reached. Try again shortly.",
              additionalData: {
                retryable: true
              }
            };
            return b;
          }
          if (d >= 500) {
            let b = {
              status: d,
              code: a1.c.INTERNAL_SERVER_ERROR,
              message: "Calendar server error. Please try again.",
              additionalData: {
                retryable: true
              }
            };
            return b;
          }
        }
        let f = {
          status: 500,
          code: a1.c.INTERNAL_SERVER_ERROR,
          message: b || "Unable to process calendar event."
        };
        return f;
      };
      async function bc(a) {
        let b = await (0, a_.sv)(a, a3.Hz);
        if (!b.success) {
          return b.error;
        }
        try {
          {
            let a = await (0, a0.sq)();
            if (a.calendars.length === 0) {
              return (0, a_.WX)("No calendars available", "Connect a calendar before creating events.", 400, a1.c.RESOURCE_NOT_FOUND);
            }
            let e = b.data.calendarId ?? a.calendars[0]?.id;
            if (!e) {
              return (0, a_.WX)("Calendar not found", "Unable to resolve target calendar.", 404, a1.c.RESOURCE_NOT_FOUND);
            }
            let f = (0, aW.randomUUID)();
            let g = {
              title: b.data.title,
              description: b.data.description,
              location: b.data.location,
              start: b.data.start,
              end: b.data.end,
              uid: f,
              timezone: b.data.timezone,
              allDay: b.data.allDay
            };
            let h = (0, a4.Ev)(g);
            let i = await (0, a0.ay)({
              calendarId: e,
              changes: {
                created: [{
                  url: (0, aW.randomUUID)() + ".ics",
                  data: h,
                  etag: ""
                }]
              }
            });
            let j = {
              ...(await (0, a0.sq)())
            };
            j.summary = i;
            return a8(j);
          }
        } catch (a) {
          {
            let b = bb(a instanceof Error ? a.message : String(a));
            return (0, a_.WX)("Calendar event creation failed", b.message, b.status, b.code, b.additionalData);
          }
        }
      }
      async function bd(a) {
        let b = await (0, a_.sv)(a, a3.Kq);
        if (!b.success) {
          return b.error;
        }
        try {
          {
            let a = await (0, a0.sq)();
            let e = a9(a.objects, b.data.url);
            let f = b.data.calendarId ?? e?.calendarId;
            if (!f) {
              return (0, a_.WX)("Calendar not found", "Unable to resolve calendar for the requested event.", 404, a1.c.RESOURCE_NOT_FOUND);
            }
            let g = e?.data ? (0, a4.Ze)(e.data) : null;
            let h = g?.uid ?? (0, aW.randomUUID)();
            let i = {
              title: b.data.title,
              description: b.data.description,
              location: b.data.location,
              start: b.data.start,
              end: b.data.end,
              uid: h,
              timezone: b.data.timezone,
              allDay: b.data.allDay
            };
            let j = (0, a4.Ev)(i);
            let k = {
              url: b.data.url,
              etag: b.data.etag ?? e?.etag ?? "",
              data: j
            };
            let l = {
              updated: [k]
            };
            let m = {
              calendarId: f,
              changes: l
            };
            let n = await (0, a0.ay)(m);
            let o = {
              ...(await (0, a0.sq)())
            };
            o.summary = n;
            return a8(o);
          }
        } catch (a) {
          let b = bb(a instanceof Error ? a.message : String(a));
          return (0, a_.WX)("Calendar event update failed", b.message, b.status, b.code, b.additionalData);
          if (_0x175460) {
            let a = _0x173282.apply(_0x2e8e9d, arguments);
            _0x3f8707 = null;
            return a;
          }
        }
      }
      async function be(a) {
        let b = await (0, a_.sv)(a, a3.ce);
        if (!b.success) {
          return b.error;
        }
        try {
          let a = await (0, a0.sq)();
          let e = a9(a.objects, b.data.url);
          let f = b.data.calendarId ?? e?.calendarId;
          if (!f) {
            return (0, a_.WX)("Calendar not found", "Unable to resolve calendar for the requested event.", 404, a1.c.RESOURCE_NOT_FOUND);
          }
          let g = {
            url: b.data.url
          };
          let h = {
            deleted: [g]
          };
          let i = {
            calendarId: f,
            changes: h
          };
          let j = await (0, a0.ay)(i);
          let k = {
            ...(await (0, a0.sq)())
          };
          k.summary = j;
          return a8(k);
        } catch (a) {
          {
            let b = bb(a instanceof Error ? a.message : String(a));
            return (0, a_.WX)("Calendar event deletion failed", b.message, b.status, b.code, b.additionalData);
          }
        }
      }
      let bf = {
        [(F = 0, G = 0, H = 274, "endpoint")]: a2.QQ["V1_CALENDA" + (I = 0, J = 356, K = 0, "R_EVENTS")],
        module: "api-v1-cal" + (L = 0, M = 439, N = 0, "endar-even") + "ts"
      };
      let bg = {
        [(O = 0, P = 468, Q = 0, "allowApiToken")]: true
      };
      let bh = (0, aZ.F0)((0, a$.D)((0, aY.Z)((0, aX.kF)(bc, bf), bg)));
      let bi = {
        [(R = 0, S = 378, T = 0, "endpoint")]: a2.QQ[U = 0, V = 503, W = 0, "V1_CALENDA" + (X = 0, Y = 0, Z = 117, "R_EVENTS")],
        [($ = 0, _ = 0, aa = 95, "module")]: (ab = 0, ac = 0, ad = 124, "api-v1-cal" + (ae = 0, af = 0, ag = 178, "endar-even") + "ts")
      };
      let bk = (0, aZ.F0)((0, a$.D)((0, aY.Z)((0, aX.kF)(bd, bi), {
        allowApiToken: true
      })));
      let bl = {
        [(ah = 0, ai = 0, aj = 246, "endpoint")]: a2.QQ[ak = 0, al = 441, am = 0, "V1_CALENDA" + (an = 0, ao = 386, ap = 0, "R_EVENTS")],
        [(aq = 0, ar = 0, as = 111, "module")]: (at = 0, au = 365, av = 0, "api-v1-cal" + (aw = 0, ax = 455, ay = 0, "endar-even") + "ts")
      };
      let bn = {
        ["allowApiTo" + (az = 0, aA = 404, aB = 0, "ken")]: true
      };
      let bo = (0, aZ.F0)((0, a$.D)((0, aY.Z)((0, aX.kF)(be, bl), bn)));
      let br = new aD.AppRouteRouteModule({
        definition: {
          kind: aE.RouteKind.APP_ROUTE,
          page: "/api/v1/calendar/events/route",
          pathname: "/api/v1/calendar/events",
          filename: "route",
          bundlePath: "app/api/v1/calendar/events/route"
        },
        distDir: ".next",
        relativeProjectDir: "",
        resolvedPagePath: "/app/apps/web.pro/app/api/v1/calendar/events/route.ts",
        nextConfigOutput: "standalone",
        userland: aC
      });
      let {
        workAsyncStorage: bs,
        workUnitAsyncStorage: bt,
        serverHooks: bu
      } = br;
      function bv() {
        return (0, aF.patchFetch)({
          workAsyncStorage: bs,
          workUnitAsyncStorage: bt
        });
      }
      async function bw(a, b, c) {
        if (br.isDev) {
          (0, aG.addRequestMeta)(a, "devRequestTimingInternalsEnd", process.hrtime.bigint());
        }
        let d = "/api/v1/calendar/events/route";
        if (d === "/index") {
          d = "/";
        }
        let e = await br.prepare(a, b, {
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
        let r = (0, aK.normalizeAppPath)(d);
        let s = !!k.dynamicRoutes[r] || !!k.routes[o];
        let t = async () => {
          if (l == null ? undefined : l.render404) {
            await l.render404(a, b, i, false);
          } else {
            b.end("This page could not be found");
          }
          return null;
        };
        if (s && !j) {
          let a = !!k.routes[o];
          let b = k.dynamicRoutes[r];
          if (b && b.fallback === false && !a) {
            if (h.experimental.adapterPath) {
              return await t();
            }
            throw new aT.NoFallbackError();
          }
        }
        let u = null;
        if (!!s && !br.isDev && !j) {
          u = (u = o) === "/index" ? "/" : u;
        }
        let v = br.isDev === true || !s;
        let w = s && !v;
        if (q && p) {
          (0, aI.setReferenceManifestsSingleton)({
            page: d,
            clientReferenceManifest: p,
            serverActionsManifest: q,
            serverModuleMap: (0, aJ.createServerModuleMap)({
              serverActionsManifest: q
            })
          });
        }
        let x = a.method || "GET";
        let y = (0, aH.getTracer)();
        let z = y.getActiveScopeSpan();
        let A = {
          params: g,
          prerenderManifest: k,
          renderOpts: {
            experimental: {
              authInterrupts: !!h.experimental.authInterrupts
            },
            cacheComponents: !!h.cacheComponents,
            supportsDynamicResponse: v,
            incrementalCache: (0, aG.getRequestMeta)(a, "incrementalCache"),
            cacheLifeProfiles: h.cacheLife,
            waitUntil: c.waitUntil,
            onClose: a => {
              b.on("close", a);
            },
            onAfterTaskError: undefined,
            onInstrumentationRequestError: (b, c, d) => br.onRequestError(a, b, d, l)
          },
          sharedContext: {
            buildId: f
          }
        };
        let B = new aL.NodeNextRequest(a);
        let C = new aL.NodeNextResponse(b);
        let D = aM.NextRequestAdapter.fromNodeNextRequest(B, (0, aM.signalFromNodeResponse)(b));
        try {
          let e = async a => br.handle(D, A).finally(() => {
            if (!a) {
              return;
            }
            a.setAttributes({
              "http.status_code": b.statusCode,
              "next.rsc": false
            });
            let c = y.getRootSpanAttributes();
            if (!c) {
              return;
            }
            if (c.get("next.span_type") !== aN.BaseServerSpan.handleRequest) {
              console.warn(`Unexpected root span type '${c.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);
              return;
            }
            let e = c.get("next.route");
            if (e) {
              let b = `${x} ${e}`;
              a.setAttributes({
                "next.route": e,
                "http.route": e,
                "next.span_name": b
              });
              a.updateName(b);
            } else {
              a.updateName(`${x} ${d}`);
            }
          });
          let f = !!(0, aG.getRequestMeta)(a, "minimalMode");
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
                a.fetchMetrics = A.renderOpts.fetchMetrics;
                let i = A.renderOpts.pendingWaitUntil;
                if (i && c.waitUntil) {
                  c.waitUntil(i);
                  i = undefined;
                }
                let j = A.renderOpts.collectedTags;
                if (!s) {
                  await (0, aP.I)(B, C, d, A.renderOpts.pendingWaitUntil);
                  return null;
                }
                {
                  let a = await d.blob();
                  let b = (0, aQ.toNodeOutgoingHttpHeaders)(d.headers);
                  if (j) {
                    b[aS.NEXT_CACHE_TAGS_HEADER] = j;
                  }
                  if (!b["content-type"] && a.type) {
                    b["content-type"] = a.type;
                  }
                  let c = A.renderOpts.collectedRevalidate !== undefined && !(A.renderOpts.collectedRevalidate >= aS.INFINITE_CACHE) && A.renderOpts.collectedRevalidate;
                  let e = A.renderOpts.collectedExpire === undefined || A.renderOpts.collectedExpire >= aS.INFINITE_CACHE ? undefined : A.renderOpts.collectedExpire;
                  return {
                    value: {
                      kind: aU.CachedRouteKind.APP_ROUTE,
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
                  await br.onRequestError(a, b, {
                    routerKind: "App Router",
                    routePath: d,
                    routeType: "route",
                    revalidateReason: (0, aO.c)({
                      isStaticGeneration: w,
                      isOnDemandRevalidate: m
                    })
                  }, l);
                }
                throw b;
              }
            };
            let q = await br.handleResponse({
              req: a,
              nextConfig: h,
              cacheKey: u,
              routeKind: aE.RouteKind.APP_ROUTE,
              isFallback: false,
              prerenderManifest: k,
              isRoutePPREnabled: false,
              isOnDemandRevalidate: m,
              revalidateOnlyGenerated: n,
              responseGenerator: p,
              waitUntil: c.waitUntil,
              isMinimalMode: f
            });
            if (!s) {
              return null;
            }
            if ((q == null || (i = q.value) == null ? undefined : i.kind) !== aU.CachedRouteKind.APP_ROUTE) {
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
            let r = (0, aQ.fromNodeOutgoingHttpHeaders)(q.value.headers);
            if (!f || !s) {
              r.delete(aS.NEXT_CACHE_TAGS_HEADER);
            }
            if (!!q.cacheControl && !b.getHeader("Cache-Control") && !r.get("Cache-Control")) {
              r.set("Cache-Control", (0, aR.getCacheControlHeader)(q.cacheControl));
            }
            await (0, aP.I)(B, C, new Response(q.value.body, {
              headers: r,
              status: q.value.status || 200
            }));
            return null;
          };
          if (z) {
            await g(z);
          } else {
            await y.withPropagatedContext(a.headers, () => y.trace(aN.BaseServerSpan.handleRequest, {
              spanName: `${x} ${d}`,
              kind: aH.SpanKind.SERVER,
              attributes: {
                "http.method": x,
                "http.target": a.url
              }
            }, g));
          }
        } catch (b) {
          if (!(b instanceof aT.NoFallbackError)) {
            await br.onRequestError(a, b, {
              routerKind: "App Router",
              routePath: r,
              routeType: "route",
              revalidateReason: (0, aO.c)({
                isStaticGeneration: w,
                isOnDemandRevalidate: m
              })
            });
          }
          if (s) {
            throw b;
          }
          await (0, aP.I)(B, C, new Response(null, {
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
  var c = b.X(0, [2468, 7618, 4624, 2962, 8264, 4049, 5474, 8880, 9437, 9428, 476, 9935, 3946, 7507, 4934, 7147, 3729], () => b(b.s = 5876));
  module.exports = c;
})();