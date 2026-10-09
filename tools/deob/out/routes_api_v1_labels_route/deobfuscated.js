"use strict";

(() => {
  var a = {
    id: 2629,
    ids: [2629]
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
    40861: (a, b, c) => {
      let d;
      c.r(b);
      c.d(b, {
        handler: () => aA,
        patchFetch: () => az,
        routeModule: () => av,
        serverHooks: () => ay,
        workAsyncStorage: () => aw,
        workUnitAsyncStorage: () => ax
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
      var u = {};
      c.r(u);
      c.d(u, {
        DELETE: () => ar,
        GET: () => ae,
        PATCH: () => an,
        POST: () => ai
      });
      var v = c(51027);
      var w = c(95276);
      var x = c(19395);
      var y = c(58411);
      var z = c(45965);
      var A = c(88502);
      var B = c(49249);
      var C = c(261);
      var D = c(44575);
      var E = c(75537);
      var F = c(68843);
      var G = c(35368);
      var H = c(70438);
      var I = c(56412);
      var J = c(89526);
      var K = c(38915);
      var L = c(86439);
      var M = c(54609);
      var N = c(27618);
      var O = c(85425);
      var P = c(28837);
      var Q = c(20017);
      var R = c(45541);
      var S = c(5639);
      var T = c(17255);
      var U = c(5214);
      var V = c(74218);
      var W = c(7852);
      var X = c(77766);
      var Y = c(50336);
      var Z = c(27293);
      let $ = (d = true, function (a, b) {
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
        return $.toString().search("(((.+)+)+)+$").toString().constructor($).search("(((.+)+)+)+$");
      });
      async function ab(a) {
        let b = await (0, V.$7)(() => (0, T.Gb)(), "read-label-data-file", a.context);
        if (!b) {
          return (0, S.WX)("Failed to read data file", "File reading or validation failed", 500, P.c.DATA_FILE_READ_ERROR);
        }
        let c = Q.GN.safeParse(b);
        if (!c.success) {
          return (0, S.WX)("Failed to serialize data file", "Serialization failed", 500, P.c.DATA_FILE_VALIDATION_ERROR);
        }
        let d = c.data;
        let e = {
          labelsCount: d.labels.length
        };
        (0, V.jf)("labels_fetched", e, a.context);
        let f = {
          labels: d.labels,
          meta: {
            count: d.labels.length,
            timestamp: new Date().toISOString(),
            version: d.version || "v0.7.0"
          }
        };
        return N.NextResponse.json(f, {
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0"
          }
        });
      }
      $();
      let ac = {
        endpoint: "/api/v1/labels"
      };
      e = 0;
      f = 0;
      g = 259;
      ac.module = "api-v1-labels";
      let ad = {
        [(h = 0, i = 0, j = 350, "allowApiToken")]: true
      };
      let ae = (0, Y.F0)((0, W.D)((0, X.Z)((0, V.kF)(ab, ac), ad)));
      async function af(a) {
        let b = await (0, S.sv)(a, O.PL);
        if (!b.success) {
          return b.error;
        }
        let c = await (0, V.$7)(() => (0, T.Gb)(), "read-label-data-file", a.context);
        if (!c) {
          return (0, S.WX)("Failed to read data file", "File operation failed", 500, P.c.DATA_FILE_READ_ERROR);
        }
        let d = {
          id: (0, R.UJ)((0, U.A)()),
          name: b.data.name,
          color: b.data.color ?? Z.ai[0]
        };
        c.labels.push(d);
        let e = {
          data: c
        };
        if (!(await (0, V.QA)(() => (0, T.Ht)(e), "write-label-data-file", a.context, 500))) {
          return (0, S.WX)("Failed to save data", "File writing failed", 500, P.c.DATA_FILE_WRITE_ERROR);
        }
        let g = {
          labelId: d.id,
          name: d.name,
          color: d.color,
          totalLabels: c.labels.length
        };
        (0, V.jf)("label_created", g, a.context);
        let h = {
          success: true,
          labelIds: [d.id],
          message: "Label created successfully"
        };
        return N.NextResponse.json(h);
      }
      let ag = {
        endpoint: "/api/v1/labels"
      };
      k = 0;
      l = 0;
      m = 263;
      ag.module = "api-v1-lab" + (n = 0, o = 0, p = 360, "els");
      let ah = {
        ["allowApiTo" + (q = 0, r = 0, s = 286, "ken")]: true
      };
      let ai = (0, Y.F0)((0, W.D)((0, X.Z)((0, V.kF)(af, ag), ah)));
      async function aj(a) {
        let b;
        let c = await (0, S.sv)(a, O.OQ);
        if (!c.success) {
          return c.error;
        }
        let d = Array.isArray(c.data) ? c.data : [c.data];
        let f = await (0, V.$7)(() => (0, T.Gb)(), "read-label-data-file", a.context);
        if (!f) {
          return (0, S.WX)("Failed to update labels", "File reading or validation failed", 500, P.c.DATA_FILE_READ_ERROR);
        }
        if (d.length === f.labels.length && d.every(a => a.name !== undefined && a.color !== undefined)) {
          let a = new Set(f.labels.map(a => a.id));
          if (!d.every(b => a.has(b.id))) {
            return (0, S.WX)("Invalid label IDs in update", "Some label IDs do not exist", 400, P.c.VALIDATION_ERROR);
          }
          b = d;
        } else {
          let a = new Map(d.map(a => [a.id, a]));
          b = f.labels.map(b => {
            let d = a.get(b.id);
            if (d) {
              return {
                ...b,
                ...(d.name !== undefined && {
                  name: d.name
                }),
                ...(d.color !== undefined && {
                  color: d.color
                })
              };
            } else {
              return b;
            }
          });
        }
        let g = {
          ...f
        };
        g.labels = b;
        let h = {
          data: g
        };
        if (!(await (0, V.QA)(() => (0, T.Ht)(h), "write-label-data-file", a.context, 500))) {
          return (0, S.WX)("Failed to save data", "File writing failed", 500, P.c.DATA_FILE_WRITE_ERROR);
        }
        let i = b.filter(a => d.some(b => b.id === a.id));
        (0, V.jf)("labels_updated", {
          labelCount: d.length,
          updatedLabels: d.map(a => ({
            id: a.id
          })),
          totalLabels: b.length
        }, a.context);
        let j = {
          success: true,
          labels: i,
          count: d.length,
          message: d.length + " label(s) updated successfully"
        };
        return N.NextResponse.json(j);
      }
      let an = (0, Y.F0)((0, W.D)((0, X.Z)((0, V.kF)(aj, {
        endpoint: "/api/v1/labels",
        module: "api-v1-labels"
      }), {
        allowApiToken: true
      })));
      async function ao(a) {
        let b = await (0, S.sv)(a, O.KJ);
        if (!b.success) {
          return b.error;
        }
        let {
          id: c
        } = b.data;
        let d = await (0, V.$7)(() => (0, T.Gb)(), "read-label-data-file", a.context);
        if (!d) {
          return (0, S.WX)("Failed to read data file", "File reading or validation failed", 500, P.c.DATA_FILE_READ_ERROR);
        }
        let e = d.labels.length;
        d.labels = d.labels.filter(a => a.id !== c);
        let f = e - d.labels.length;
        let g = {
          data: d
        };
        if (!(await (0, V.QA)(() => (0, T.Ht)(g), "write-label-data-file", a.context, 500))) {
          return (0, S.WX)("Failed to save changes", "File writing failed", 500, P.c.DATA_FILE_WRITE_ERROR);
        }
        let h = {
          labelId: c,
          deletedCount: f,
          remainingLabels: d.labels.length
        };
        (0, V.jf)("label_deleted", h, a.context);
        let k = {
          success: true,
          labelIds: [c],
          message: f + " label(s) deleted successfully"
        };
        return N.NextResponse.json(k);
      }
      let ar = (0, Y.F0)((0, W.D)((0, X.Z)((0, V.kF)(ao, {
        endpoint: "/api/v1/labels",
        module: "api-v1-labels"
      }), {
        allowApiToken: true
      })));
      function as() {
        var a = ["43150896iVBzRS", "2pIllOD", "3727375NvBUpp", "toString", "10337592fzIVMt", "5202XqoToY", "580fmjOse", "search", "91442IFGYlJ", "4173484HHVUwo", "(((.+)+)+)", "6938370LsosGn"];
        return (as = function () {
          return a;
        })();
      }
      (function (a, b) {
        var c;
        var d;
        var e;
        var f;
        var g;
        var h;
        var i;
        var j = a();
        while (true) {
          try {
            if (parseInt(au(365, 613)) / 1 * (-parseInt((c = -341, au(c - -711, -346))) / 2) + -parseInt((d = -349, e = -351, au(d - -711, e))) / 3 * (parseInt(au(363, 609)) / 4) + -parseInt(au(371, 611)) / 5 + -parseInt(au(368, 619)) / 6 + -parseInt(au(366, 617)) / 7 + -parseInt((f = -350, g = -345, au(f - -711, g))) / 8 + parseInt((h = -342, i = -340, au(h - -711, i))) / 9 === 661391) {
              break;
            }
            j.push(j.shift());
          } catch (a) {
            j.push(j.shift());
          }
        }
      })(as, 0);
      var at = (t = true, function (a, b) {
        var c = t ? function () {
          if (b) {
            var c = b.apply(a, arguments);
            b = null;
            return c;
          }
        } : function () {};
        t = false;
        return c;
      })(undefined, function () {
        return at[au(372, 745)]()[au(364, 734)](au(367, 729) + "+$")[au(372, 738)]().constructor(at)[au(364, 730)](au(367, 1089) + "+$");
      });
      function au(a, b) {
        var c = as();
        return (au = function (a, b) {
          return c[a -= 361];
        })(a, b);
      }
      at();
      let av = new v.AppRouteRouteModule({
        definition: {
          kind: w.RouteKind.APP_ROUTE,
          page: "/api/v1/labels/route",
          pathname: "/api/v1/labels",
          filename: "route",
          bundlePath: "app/api/v1/labels/route"
        },
        distDir: ".next",
        relativeProjectDir: "",
        resolvedPagePath: "/app/apps/web.pro/app/api/v1/labels/route.ts",
        nextConfigOutput: "standalone",
        userland: u
      });
      let {
        workAsyncStorage: aw,
        workUnitAsyncStorage: ax,
        serverHooks: ay
      } = av;
      function az() {
        return (0, x.patchFetch)({
          workAsyncStorage: aw,
          workUnitAsyncStorage: ax
        });
      }
      async function aA(a, b, c) {
        if (av.isDev) {
          (0, y.addRequestMeta)(a, "devRequestTimingInternalsEnd", process.hrtime.bigint());
        }
        let d = "/api/v1/labels/route";
        if (d === "/index") {
          d = "/";
        }
        let e = await av.prepare(a, b, {
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
        let r = (0, C.normalizeAppPath)(d);
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
            throw new L.NoFallbackError();
          }
        }
        let u = null;
        if (!!s && !av.isDev && !j) {
          u = (u = o) === "/index" ? "/" : u;
        }
        let v = av.isDev === true || !s;
        let x = s && !v;
        if (q && p) {
          (0, A.setReferenceManifestsSingleton)({
            page: d,
            clientReferenceManifest: p,
            serverActionsManifest: q,
            serverModuleMap: (0, B.createServerModuleMap)({
              serverActionsManifest: q
            })
          });
        }
        let N = a.method || "GET";
        let O = (0, z.getTracer)();
        let P = O.getActiveScopeSpan();
        let Q = {
          params: g,
          prerenderManifest: k,
          renderOpts: {
            experimental: {
              authInterrupts: !!h.experimental.authInterrupts
            },
            cacheComponents: !!h.cacheComponents,
            supportsDynamicResponse: v,
            incrementalCache: (0, y.getRequestMeta)(a, "incrementalCache"),
            cacheLifeProfiles: h.cacheLife,
            waitUntil: c.waitUntil,
            onClose: a => {
              b.on("close", a);
            },
            onAfterTaskError: undefined,
            onInstrumentationRequestError: (b, c, d) => av.onRequestError(a, b, d, l)
          },
          sharedContext: {
            buildId: f
          }
        };
        let R = new D.NodeNextRequest(a);
        let S = new D.NodeNextResponse(b);
        let T = E.NextRequestAdapter.fromNodeNextRequest(R, (0, E.signalFromNodeResponse)(b));
        try {
          let e = async a => av.handle(T, Q).finally(() => {
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
            if (c.get("next.span_type") !== F.BaseServerSpan.handleRequest) {
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
          let f = !!(0, y.getRequestMeta)(a, "minimalMode");
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
                if (!s) {
                  await (0, H.I)(R, S, d, Q.renderOpts.pendingWaitUntil);
                  return null;
                }
                {
                  let a = await d.blob();
                  let b = (0, I.toNodeOutgoingHttpHeaders)(d.headers);
                  if (j) {
                    b[K.NEXT_CACHE_TAGS_HEADER] = j;
                  }
                  if (!b["content-type"] && a.type) {
                    b["content-type"] = a.type;
                  }
                  let c = Q.renderOpts.collectedRevalidate !== undefined && !(Q.renderOpts.collectedRevalidate >= K.INFINITE_CACHE) && Q.renderOpts.collectedRevalidate;
                  let e = Q.renderOpts.collectedExpire === undefined || Q.renderOpts.collectedExpire >= K.INFINITE_CACHE ? undefined : Q.renderOpts.collectedExpire;
                  return {
                    value: {
                      kind: M.CachedRouteKind.APP_ROUTE,
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
                  await av.onRequestError(a, b, {
                    routerKind: "App Router",
                    routePath: d,
                    routeType: "route",
                    revalidateReason: (0, G.c)({
                      isStaticGeneration: x,
                      isOnDemandRevalidate: m
                    })
                  }, l);
                }
                throw b;
              }
            };
            let q = await av.handleResponse({
              req: a,
              nextConfig: h,
              cacheKey: u,
              routeKind: w.RouteKind.APP_ROUTE,
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
            if ((q == null || (i = q.value) == null ? undefined : i.kind) !== M.CachedRouteKind.APP_ROUTE) {
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
            let r = (0, I.fromNodeOutgoingHttpHeaders)(q.value.headers);
            if (!f || !s) {
              r.delete(K.NEXT_CACHE_TAGS_HEADER);
            }
            if (!!q.cacheControl && !b.getHeader("Cache-Control") && !r.get("Cache-Control")) {
              r.set("Cache-Control", (0, J.getCacheControlHeader)(q.cacheControl));
            }
            await (0, H.I)(R, S, new Response(q.value.body, {
              headers: r,
              status: q.value.status || 200
            }));
            return null;
          };
          if (P) {
            await g(P);
          } else {
            await O.withPropagatedContext(a.headers, () => O.trace(F.BaseServerSpan.handleRequest, {
              spanName: `${N} ${d}`,
              kind: z.SpanKind.SERVER,
              attributes: {
                "http.method": N,
                "http.target": a.url
              }
            }, g));
          }
        } catch (b) {
          if (!(b instanceof L.NoFallbackError)) {
            await av.onRequestError(a, b, {
              routerKind: "App Router",
              routePath: r,
              routeType: "route",
              revalidateReason: (0, G.c)({
                isStaticGeneration: x,
                isOnDemandRevalidate: m
              })
            });
          }
          if (s) {
            throw b;
          }
          await (0, H.I)(R, S, new Response(null, {
            status: 500
          }));
          return null;
        }
      }
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
  var b = require("../../../../webpack-runtime.js");
  b.C(a);
  var c = b.X(0, [2468, 7618, 4624, 2962, 8264, 4049, 5474, 9437, 9428, 476, 9935, 3946, 7507, 4934], () => b(b.s = 40861));
  module.exports = c;
})();