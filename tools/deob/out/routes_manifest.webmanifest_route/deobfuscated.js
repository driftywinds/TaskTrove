"use strict";

(() => {
  var a = {
    id: 1337,
    ids: [1337]
  };
  a.modules = {
    261: a => {
      a.exports = require("next/dist/shared/lib/router/utils/app-paths");
    },
    3295: a => {
      a.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");
    },
    8905: (a, b) => {
      Object.defineProperty(b, "__esModule", {
        value: true
      });
      var c = {
        getOrigin: function () {
          return g;
        },
        resolveArray: function () {
          return e;
        },
        resolveAsArrayOrUndefined: function () {
          return f;
        }
      };
      for (var d in c) {
        Object.defineProperty(b, d, {
          enumerable: true,
          get: c[d]
        });
      }
      function e(a) {
        if (Array.isArray(a)) {
          return a;
        } else {
          return [a];
        }
      }
      function f(a) {
        if (a != null) {
          return e(a);
        }
      }
      function g(a) {
        let b;
        if (typeof a == "string") {
          try {
            b = (a = new URL(a)).origin;
          } catch {}
        }
        return b;
      }
    },
    10846: a => {
      a.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
    },
    29294: a => {
      a.exports = require("next/dist/server/app-render/work-async-storage.external.js");
    },
    44870: a => {
      a.exports = require("next/dist/compiled/next-server/app-route.runtime.prod.js");
    },
    51027: (a, b, c) => {
      a.exports = c(44870);
    },
    56995: (a, b, c) => {
      Object.defineProperty(b, "__esModule", {
        value: true
      });
      var d = {
        resolveManifest: function () {
          return i;
        },
        resolveRobots: function () {
          return g;
        },
        resolveRouteData: function () {
          return j;
        },
        resolveSitemap: function () {
          return h;
        }
      };
      for (var e in d) {
        Object.defineProperty(b, e, {
          enumerable: true,
          get: d[e]
        });
      }
      let f = c(8905);
      function g(a) {
        let b = "";
        for (let c of Array.isArray(a.rules) ? a.rules : [a.rules]) {
          for (let a of (0, f.resolveArray)(c.userAgent || ["*"])) {
            b += `User-Agent: ${a}
`;
          }
          if (c.allow) {
            for (let a of (0, f.resolveArray)(c.allow)) {
              b += `Allow: ${a}
`;
            }
          }
          if (c.disallow) {
            for (let a of (0, f.resolveArray)(c.disallow)) {
              b += `Disallow: ${a}
`;
            }
          }
          if (c.crawlDelay) {
            b += `Crawl-delay: ${c.crawlDelay}
`;
          }
          b += "\n";
        }
        if (a.host) {
          b += `Host: ${a.host}
`;
        }
        if (a.sitemap) {
          (0, f.resolveArray)(a.sitemap).forEach(a => {
            b += `Sitemap: ${a}
`;
          });
        }
        return b;
      }
      function h(a) {
        let b = a.some(a => Object.keys(a.alternates ?? {}).length > 0);
        let c = a.some(a => {
          var b;
          return !!((b = a.images) == null ? undefined : b.length);
        });
        let d = a.some(a => {
          var b;
          return !!((b = a.videos) == null ? undefined : b.length);
        });
        let e = "";
        e += "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
        e += "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\"";
        if (c) {
          e += " xmlns:image=\"http://www.google.com/schemas/sitemap-image/1.1\"";
        }
        if (d) {
          e += " xmlns:video=\"http://www.google.com/schemas/sitemap-video/1.1\"";
        }
        if (b) {
          e += " xmlns:xhtml=\"http://www.w3.org/1999/xhtml\">\n";
        } else {
          e += ">\n";
        }
        for (let i of a) {
          var f;
          var g;
          var h;
          e += "<url>\n";
          e += `<loc>${i.url}</loc>
`;
          let a = (f = i.alternates) == null ? undefined : f.languages;
          if (a && Object.keys(a).length) {
            for (let b in a) {
              e += `<xhtml:link rel="alternate" hreflang="${b}" href="${a[b]}" />
`;
            }
          }
          if ((g = i.images) == null ? undefined : g.length) {
            for (let a of i.images) {
              e += `<image:image>
<image:loc>${a}</image:loc>
</image:image>
`;
            }
          }
          if ((h = i.videos) == null ? undefined : h.length) {
            for (let a of i.videos) {
              e += ["<video:video>", `<video:title>${a.title}</video:title>`, `<video:thumbnail_loc>${a.thumbnail_loc}</video:thumbnail_loc>`, `<video:description>${a.description}</video:description>`, a.content_loc && `<video:content_loc>${a.content_loc}</video:content_loc>`, a.player_loc && `<video:player_loc>${a.player_loc}</video:player_loc>`, a.duration && `<video:duration>${a.duration}</video:duration>`, a.view_count && `<video:view_count>${a.view_count}</video:view_count>`, a.tag && `<video:tag>${a.tag}</video:tag>`, a.rating && `<video:rating>${a.rating}</video:rating>`, a.expiration_date && `<video:expiration_date>${a.expiration_date}</video:expiration_date>`, a.publication_date && `<video:publication_date>${a.publication_date}</video:publication_date>`, a.family_friendly && `<video:family_friendly>${a.family_friendly}</video:family_friendly>`, a.requires_subscription && `<video:requires_subscription>${a.requires_subscription}</video:requires_subscription>`, a.live && `<video:live>${a.live}</video:live>`, a.restriction && `<video:restriction relationship="${a.restriction.relationship}">${a.restriction.content}</video:restriction>`, a.platform && `<video:platform relationship="${a.platform.relationship}">${a.platform.content}</video:platform>`, a.uploader && `<video:uploader${a.uploader.info && ` info="${a.uploader.info}"`}>${a.uploader.content}</video:uploader>`, `</video:video>
`].filter(Boolean).join("\n");
            }
          }
          if (i.lastModified) {
            let a = i.lastModified instanceof Date ? i.lastModified.toISOString() : i.lastModified;
            e += `<lastmod>${a}</lastmod>
`;
          }
          if (i.changeFrequency) {
            e += `<changefreq>${i.changeFrequency}</changefreq>
`;
          }
          if (typeof i.priority == "number") {
            e += `<priority>${i.priority}</priority>
`;
          }
          e += "</url>\n";
        }
        return e + "</urlset>\n";
      }
      function i(a) {
        return JSON.stringify(a);
      }
      function j(a, b) {
        if (b === "robots") {
          return g(a);
        } else if (b === "sitemap") {
          return h(a);
        } else if (b === "manifest") {
          return i(a);
        } else {
          return "";
        }
      }
    },
    63033: a => {
      a.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
    },
    65915: (a, b, c) => {
      c.r(b);
      c.d(b, {
        handler: () => N,
        patchFetch: () => M,
        routeModule: () => I,
        serverHooks: () => L,
        workAsyncStorage: () => J,
        workUnitAsyncStorage: () => K
      });
      var d;
      var e;
      var f = {};
      c.r(f);
      c.d(f, {
        GET: () => H
      });
      var g = c(51027);
      var h = c(95276);
      var i = c(19395);
      var j = c(58411);
      var k = c(45965);
      var l = c(88502);
      var m = c(49249);
      var n = c(261);
      var o = c(44575);
      var p = c(75537);
      var q = c(68843);
      var r = c(35368);
      var s = c(70438);
      var t = c(56412);
      var u = c(89526);
      var v = c(38915);
      var w = c(86439);
      var x = c(54609);
      var y = c(27618);
      var z = c(27293);
      var A = (d = true, function (a, b) {
        var c = d ? function () {
          if (b) {
            var c = b.apply(a, arguments);
            b = null;
            return c;
          }
        } : function () {};
        d = false;
        return c;
      })(undefined, function () {
        return A.toString().search("(((.+)+)+)+$").toString().constructor(A).search("(((.+)+)+)+$");
      });
      function D(a, b) {
        var c = F();
        return (D = function (a, b) {
          return c[a -= 145];
        })(a, b);
      }
      A();
      (function (a, b) {
        var c;
        var d;
        var e;
        var f;
        var g;
        var h = a();
        while (true) {
          try {
            if (-parseInt(D(146, -178)) / 1 + -parseInt((c = -168, d = -165, D(c - -323, d))) / 2 + -parseInt(D(159, 996)) / 3 + -parseInt(D(147, 988)) / 4 * (parseInt((e = -165, D(e - -323, -163))) / 5) + -parseInt(D(152, 995)) / 6 * (-parseInt(D(151, 979)) / 7) + -parseInt((f = -178, D(f - -323, -178))) / 8 + parseInt((g = -167, D(g - -323, -172))) / 9 === 987645) {
              break;
            }
            h.push(h.shift());
          } catch (a) {
            h.push(h.shift());
          }
        }
      })(F, 0);
      var E = (e = true, function (a, b) {
        var c = e ? function () {
          if (b) {
            if (D(149, 839) !== "lEcCx") {
              var c = b[D(153, 845)](a, arguments);
              b = null;
              return c;
            }
            if (_0xe332d4) {
              var d = _0x9d80a2[D(153, 1055)](_0x2bbd6f, arguments);
              _0x329f32 = null;
              return d;
            }
          }
        } : function () {};
        e = false;
        return c;
      })(undefined, function () {
        return E[D(161, 877)]().search(D(160, 739) + "+$").toString()[D(150, 735) + "r"](E)[D(148, 873)]("(((.+)+)+)+$");
      });
      function F() {
        var a = ["constructo", "49aXntAZ", "843846kIejXs", "apply", "Pro", "1364198BPUPpd", "31423716VqgMfT", "TaskTrove ", "26525CSNDXy", "4066029WFpUgm", "(((.+)+)+)", "toString", "7225952XmGACt", "404445XpDeRQ", "108ymrTNp", "search", "TLZuG"];
        return (F = function () {
          return a;
        })();
      }
      E();
      var G = c(56995);
      async function H() {
        let a = await function () {
          return {
            ...function () {
              var c = {
                name: "TaskTrove",
                short_name: "TaskTrove",
                description: "Task management application",
                start_url: "/",
                scope: "/",
                display: "standalone",
                background_color: z.lt.pwaBackground,
                theme_color: z.lt.pwaTheme,
                icons: [{
                  src: "/web-app-manifest-192x192.png",
                  sizes: "192x192",
                  type: "image/png",
                  purpose: "any"
                }, {
                  src: "/web-app-manifest-512x512.png",
                  sizes: "512x512",
                  type: "image/png",
                  purpose: "any"
                }]
              };
              return c;
            }(),
            name: D(157, 132) + "Pro",
            short_name: "TaskTrove " + D(154, 126)
          };
        }();
        let b = (0, G.resolveRouteData)(a, "manifest");
        return new y.NextResponse(b, {
          headers: {
            "Content-Type": "application/manifest+json",
            "Cache-Control": "public, max-age=0, must-revalidate"
          }
        });
      }
      let I = new g.AppRouteRouteModule({
        definition: {
          kind: h.RouteKind.APP_ROUTE,
          page: "/manifest.webmanifest/route",
          pathname: "/manifest.webmanifest",
          filename: "manifest",
          bundlePath: "app/manifest.webmanifest/route"
        },
        distDir: ".next",
        relativeProjectDir: "",
        resolvedPagePath: "next-metadata-route-loader?filePath=%2Fapp%2Fapps%2Fweb.pro%2Fapp%2Fmanifest.ts&isDynamicRouteExtension=1!?__next_metadata_route__",
        nextConfigOutput: "standalone",
        userland: f
      });
      let {
        workAsyncStorage: J,
        workUnitAsyncStorage: K,
        serverHooks: L
      } = I;
      function M() {
        return (0, i.patchFetch)({
          workAsyncStorage: J,
          workUnitAsyncStorage: K
        });
      }
      async function N(a, b, c) {
        if (I.isDev) {
          (0, j.addRequestMeta)(a, "devRequestTimingInternalsEnd", process.hrtime.bigint());
        }
        let d = "/manifest.webmanifest/route";
        if (d === "/index") {
          d = "/";
        }
        let e = await I.prepare(a, b, {
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
          nextConfig: i,
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
        let H = (0, n.normalizeAppPath)(d);
        let J = !!A.dynamicRoutes[H] || !!A.routes[E];
        let K = async () => {
          if (B == null ? undefined : B.render404) {
            await B.render404(a, b, y, false);
          } else {
            b.end("This page could not be found");
          }
          return null;
        };
        if (J && !z) {
          let a = !!A.routes[E];
          let b = A.dynamicRoutes[H];
          if (b && b.fallback === false && !a) {
            if (i.experimental.adapterPath) {
              return await K();
            }
            throw new w.NoFallbackError();
          }
        }
        let L = null;
        if (!!J && !I.isDev && !z) {
          L = (L = E) === "/index" ? "/" : L;
        }
        let M = I.isDev === true || !J;
        let N = J && !M;
        if (G && F) {
          (0, l.setReferenceManifestsSingleton)({
            page: d,
            clientReferenceManifest: F,
            serverActionsManifest: G,
            serverModuleMap: (0, m.createServerModuleMap)({
              serverActionsManifest: G
            })
          });
        }
        let O = a.method || "GET";
        let P = (0, k.getTracer)();
        let Q = P.getActiveScopeSpan();
        let R = {
          params: g,
          prerenderManifest: A,
          renderOpts: {
            experimental: {
              authInterrupts: !!i.experimental.authInterrupts
            },
            cacheComponents: !!i.cacheComponents,
            supportsDynamicResponse: M,
            incrementalCache: (0, j.getRequestMeta)(a, "incrementalCache"),
            cacheLifeProfiles: i.cacheLife,
            waitUntil: c.waitUntil,
            onClose: a => {
              b.on("close", a);
            },
            onAfterTaskError: undefined,
            onInstrumentationRequestError: (b, c, d) => I.onRequestError(a, b, d, B)
          },
          sharedContext: {
            buildId: f
          }
        };
        let S = new o.NodeNextRequest(a);
        let T = new o.NodeNextResponse(b);
        let U = p.NextRequestAdapter.fromNodeNextRequest(S, (0, p.signalFromNodeResponse)(b));
        try {
          let e = async a => I.handle(U, R).finally(() => {
            if (!a) {
              return;
            }
            a.setAttributes({
              "http.status_code": b.statusCode,
              "next.rsc": false
            });
            let c = P.getRootSpanAttributes();
            if (!c) {
              return;
            }
            if (c.get("next.span_type") !== q.BaseServerSpan.handleRequest) {
              console.warn(`Unexpected root span type '${c.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);
              return;
            }
            let e = c.get("next.route");
            if (e) {
              let b = `${O} ${e}`;
              a.setAttributes({
                "next.route": e,
                "http.route": e,
                "next.span_name": b
              });
              a.updateName(b);
            } else {
              a.updateName(`${O} ${d}`);
            }
          });
          let f = !!(0, j.getRequestMeta)(a, "minimalMode");
          let g = async g => {
            var j;
            var k;
            let l = async ({
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
                a.fetchMetrics = R.renderOpts.fetchMetrics;
                let i = R.renderOpts.pendingWaitUntil;
                if (i && c.waitUntil) {
                  c.waitUntil(i);
                  i = undefined;
                }
                let j = R.renderOpts.collectedTags;
                if (!J) {
                  await (0, s.I)(S, T, d, R.renderOpts.pendingWaitUntil);
                  return null;
                }
                {
                  let a = await d.blob();
                  let b = (0, t.toNodeOutgoingHttpHeaders)(d.headers);
                  if (j) {
                    b[v.NEXT_CACHE_TAGS_HEADER] = j;
                  }
                  if (!b["content-type"] && a.type) {
                    b["content-type"] = a.type;
                  }
                  let c = R.renderOpts.collectedRevalidate !== undefined && !(R.renderOpts.collectedRevalidate >= v.INFINITE_CACHE) && R.renderOpts.collectedRevalidate;
                  let e = R.renderOpts.collectedExpire === undefined || R.renderOpts.collectedExpire >= v.INFINITE_CACHE ? undefined : R.renderOpts.collectedExpire;
                  return {
                    value: {
                      kind: x.CachedRouteKind.APP_ROUTE,
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
                  await I.onRequestError(a, b, {
                    routerKind: "App Router",
                    routePath: d,
                    routeType: "route",
                    revalidateReason: (0, r.c)({
                      isStaticGeneration: N,
                      isOnDemandRevalidate: C
                    })
                  }, B);
                }
                throw b;
              }
            };
            let m = await I.handleResponse({
              req: a,
              nextConfig: i,
              cacheKey: L,
              routeKind: h.RouteKind.APP_ROUTE,
              isFallback: false,
              prerenderManifest: A,
              isRoutePPREnabled: false,
              isOnDemandRevalidate: C,
              revalidateOnlyGenerated: D,
              responseGenerator: l,
              waitUntil: c.waitUntil,
              isMinimalMode: f
            });
            if (!J) {
              return null;
            }
            if ((m == null || (j = m.value) == null ? undefined : j.kind) !== x.CachedRouteKind.APP_ROUTE) {
              throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${m == null || (k = m.value) == null ? undefined : k.kind}`), "__NEXT_ERROR_CODE", {
                value: "E701",
                enumerable: false,
                configurable: true
              });
            }
            if (!f) {
              b.setHeader("x-nextjs-cache", C ? "REVALIDATED" : m.isMiss ? "MISS" : m.isStale ? "STALE" : "HIT");
            }
            if (z) {
              b.setHeader("Cache-Control", "private, no-cache, no-store, max-age=0, must-revalidate");
            }
            let n = (0, t.fromNodeOutgoingHttpHeaders)(m.value.headers);
            if (!f || !J) {
              n.delete(v.NEXT_CACHE_TAGS_HEADER);
            }
            if (!!m.cacheControl && !b.getHeader("Cache-Control") && !n.get("Cache-Control")) {
              n.set("Cache-Control", (0, u.getCacheControlHeader)(m.cacheControl));
            }
            await (0, s.I)(S, T, new Response(m.value.body, {
              headers: n,
              status: m.value.status || 200
            }));
            return null;
          };
          if (Q) {
            await g(Q);
          } else {
            await P.withPropagatedContext(a.headers, () => P.trace(q.BaseServerSpan.handleRequest, {
              spanName: `${O} ${d}`,
              kind: k.SpanKind.SERVER,
              attributes: {
                "http.method": O,
                "http.target": a.url
              }
            }, g));
          }
        } catch (b) {
          if (!(b instanceof w.NoFallbackError)) {
            await I.onRequestError(a, b, {
              routerKind: "App Router",
              routePath: H,
              routeType: "route",
              revalidateReason: (0, r.c)({
                isStaticGeneration: N,
                isOnDemandRevalidate: C
              })
            });
          }
          if (J) {
            throw b;
          }
          await (0, s.I)(S, T, new Response(null, {
            status: 500
          }));
          return null;
        }
      }
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
    86439: a => {
      a.exports = require("next/dist/shared/lib/no-fallback-error.external");
    }
  };
  var b = require("../../webpack-runtime.js");
  b.C(a);
  var c = b.X(0, [2468, 7618, 9437], () => b(b.s = 65915));
  module.exports = c;
})();