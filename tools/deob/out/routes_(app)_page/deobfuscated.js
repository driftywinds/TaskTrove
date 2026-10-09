(() => {
  var a = {
    id: 9415,
    ids: [9415]
  };
  a.modules = {
    261: a => {
      "use strict";

      a.exports = require("next/dist/shared/lib/router/utils/app-paths");
    },
    3295: a => {
      "use strict";

      a.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");
    },
    10846: a => {
      "use strict";

      a.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
    },
    19121: a => {
      "use strict";

      a.exports = require("next/dist/server/app-render/action-async-storage.external.js");
    },
    26713: a => {
      "use strict";

      a.exports = require("next/dist/shared/lib/router/utils/is-bot");
    },
    28354: a => {
      "use strict";

      a.exports = require("util");
    },
    29294: a => {
      "use strict";

      a.exports = require("next/dist/server/app-render/work-async-storage.external.js");
    },
    33873: a => {
      "use strict";

      a.exports = require("path");
    },
    41025: a => {
      "use strict";

      a.exports = require("next/dist/server/app-render/dynamic-access-async-storage.external.js");
    },
    43954: a => {
      "use strict";

      a.exports = require("next/dist/shared/lib/router/utils/interception-routes");
    },
    52485: (a, b, c) => {
      "use strict";

      c.r(b);
      c.d(b, {
        GlobalError: () => D.a,
        __next_app__: () => L,
        handler: () => N,
        routeModule: () => M
      });
      var d = c(36067);
      var e = c(95276);
      var f = c(35368);
      var g = c(45965);
      var h = c(58411);
      var i = c(68843);
      var j = c(61442);
      var k = c(23655);
      var l = c(44575);
      var m = c(63701);
      var n = c(8929);
      var o = c(88502);
      var p = c(99608);
      var q = c(49249);
      var r = c(261);
      var s = c(88328);
      var t = c(22573);
      var u = c(26713);
      var v = c(54609);
      var w = c(99578);
      var x = c(67390);
      var y = c(38915);
      var z = c(52893);
      var A = c(71711);
      var B = c(86439);
      var C = c(67329);
      var D = c.n(C);
      var E = c(45113);
      var F = c(31312);
      var G = c(70722);
      var H = c(69935);
      var I = c(43954);
      var J = {};
      for (let a in E) {
        if (["default", "GlobalError", "__next_app__", "routeModule", "handler"].indexOf(a) < 0) {
          J[a] = () => E[a];
        }
      }
      c.d(b, J);
      let K = {
        children: ["", {
          children: ["(app)", {
            children: ["__PAGE__", {}, {
              page: [() => Promise.resolve().then(c.bind(c, 77039)), "/app/apps/web.pro/app/(app)/page.tsx"]
            }]
          }, {
            layout: [() => Promise.resolve().then(c.bind(c, 6288)), "/app/apps/web.pro/app/(app)/layout.tsx"],
            "not-found": [() => Promise.resolve().then(c.t.bind(c, 47045, 23)), "next/dist/client/components/builtin/not-found.js"],
            forbidden: [() => Promise.resolve().then(c.t.bind(c, 25736, 23)), "next/dist/client/components/builtin/forbidden.js"],
            unauthorized: [() => Promise.resolve().then(c.t.bind(c, 2299, 23)), "next/dist/client/components/builtin/unauthorized.js"],
            metadata: {
              icon: [async a => (await Promise.resolve().then(c.bind(c, 92602))).default(a)],
              apple: [],
              openGraph: [],
              twitter: [],
              manifest: "/manifest.webmanifest"
            }
          }]
        }, {
          layout: [() => Promise.resolve().then(c.bind(c, 16309)), "/app/apps/web.pro/app/layout.tsx"],
          "global-error": [() => Promise.resolve().then(c.t.bind(c, 67329, 23)), "next/dist/client/components/builtin/global-error.js"],
          "not-found": [() => Promise.resolve().then(c.t.bind(c, 47045, 23)), "next/dist/client/components/builtin/not-found.js"],
          forbidden: [() => Promise.resolve().then(c.t.bind(c, 25736, 23)), "next/dist/client/components/builtin/forbidden.js"],
          unauthorized: [() => Promise.resolve().then(c.t.bind(c, 2299, 23)), "next/dist/client/components/builtin/unauthorized.js"],
          metadata: {
            icon: [async a => (await Promise.resolve().then(c.bind(c, 92602))).default(a)],
            apple: [],
            openGraph: [],
            twitter: [],
            manifest: "/manifest.webmanifest"
          }
        }]
      }.children;
      let L = {
        require: c,
        loadChunk: () => Promise.resolve()
      };
      let M = new d.AppPageRouteModule({
        definition: {
          kind: e.RouteKind.APP_PAGE,
          page: "/(app)/page",
          pathname: "/",
          bundlePath: "",
          filename: "",
          appPaths: []
        },
        userland: {
          loaderTree: K
        },
        distDir: ".next",
        relativeProjectDir: ""
      });
      async function N(a, b, d) {
        var C;
        if (M.isDev) {
          (0, h.addRequestMeta)(a, "devRequestTimingInternalsEnd", process.hrtime.bigint());
        }
        let J = "/(app)/page";
        if (J === "/index") {
          J = "/";
        }
        let O = !!(0, h.getRequestMeta)(a, "minimalMode");
        let P = await M.prepare(a, b, {
          srcPage: J,
          multiZoneDraftMode: false
        });
        if (!P) {
          b.statusCode = 400;
          b.end("Bad Request");
          if (d.waitUntil != null) {
            d.waitUntil.call(d, Promise.resolve());
          }
          return null;
        }
        let {
          buildId: Q,
          query: R,
          params: S,
          pageIsDynamic: T,
          buildManifest: U,
          nextFontManifest: V,
          reactLoadableManifest: W,
          serverActionsManifest: X,
          clientReferenceManifest: Y,
          subresourceIntegrityManifest: Z,
          prerenderManifest: $,
          isDraftMode: _,
          resolvedPathname: aa,
          revalidateOnlyGenerated: ab,
          routerServerContext: ac,
          nextConfig: ad,
          parsedUrl: ae,
          interceptionRoutePatterns: af
        } = P;
        let ag = (0, r.normalizeAppPath)(J);
        let {
          isOnDemandRevalidate: ah
        } = P;
        let ai = ad.experimental.ppr && !ad.cacheComponents && (0, I.isInterceptionRouteAppPath)(aa) ? null : M.match(aa, $);
        let aj = !!$.routes[aa];
        let ak = a.headers["user-agent"] || "";
        let al = (0, u.getBotType)(ak);
        let am = (0, p.isHtmlBotRequest)(a);
        let an = (0, h.getRequestMeta)(a, "isPrefetchRSCRequest") ?? a.headers[t.NEXT_ROUTER_PREFETCH_HEADER] === "1";
        let ao = (0, h.getRequestMeta)(a, "isRSCRequest") ?? !!a.headers[t.RSC_HEADER];
        let ap = (0, s.getIsPossibleServerAction)(a);
        let aq = (0, m.checkIsAppPPREnabled)(ad.experimental.ppr) && ((C = $.routes[ag] ?? $.dynamicRoutes[ag]) == null ? undefined : C.renderingMode) === "PARTIALLY_STATIC";
        let ar = false;
        let as = false;
        let at = aq ? (0, h.getRequestMeta)(a, "postponed") : undefined;
        let au = aq && ao && !an;
        if (O) {
          au = au && !!at;
        }
        let av = (0, h.getRequestMeta)(a, "segmentPrefetchRSCRequest");
        let aw = (!am || !aq) && (!ak || (0, p.shouldServeStreamingMetadata)(ak, ad.htmlLimitedBots));
        let ax = (!!ai || !!aj || !!$.routes[ag]) && (!am || !aq);
        let ay = aq && ad.cacheComponents === true;
        let az = M.isDev === true || !ax || typeof at == "string" || (ay && (0, h.getRequestMeta)(a, "onCacheEntryV2") ? au && !O : au);
        let aA = am && aq;
        let aB = null;
        if (!_ && !!ax && !az && !ap && !at && !au) {
          aB = aa;
        }
        let aC = aB;
        if (!aC && M.isDev) {
          aC = aa;
        }
        if (!M.isDev && !_ && !!ax && !!ao && !au) {
          (0, k.d)(a.headers);
        }
        let aD = {
          ...E,
          tree: K,
          GlobalError: D(),
          handler: N,
          routeModule: M,
          __next_app__: L
        };
        if (X && Y) {
          (0, o.setReferenceManifestsSingleton)({
            page: J,
            clientReferenceManifest: Y,
            serverActionsManifest: X,
            serverModuleMap: (0, q.createServerModuleMap)({
              serverActionsManifest: X
            })
          });
        }
        let aE = a.method || "GET";
        let aF = (0, g.getTracer)();
        let aG = aF.getActiveScopeSpan();
        let aH = async () => {
          if (ac == null ? undefined : ac.render404) {
            await ac.render404(a, b, ae, false);
          } else {
            b.end("This page could not be found");
          }
          return null;
        };
        try {
          let f = M.getVaryHeader(aa, af);
          b.setHeader("Vary", f);
          let k = async (c, d) => {
            let e = new l.NodeNextRequest(a);
            let f = new l.NodeNextResponse(b);
            return M.render(e, f, d).finally(() => {
              if (!c) {
                return;
              }
              c.setAttributes({
                "http.status_code": b.statusCode,
                "next.rsc": false
              });
              let a = aF.getRootSpanAttributes();
              if (!a) {
                return;
              }
              if (a.get("next.span_type") !== i.BaseServerSpan.handleRequest) {
                console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);
                return;
              }
              let d = a.get("next.route");
              if (d) {
                let a = `${aE} ${d}`;
                c.setAttributes({
                  "next.route": d,
                  "http.route": d,
                  "next.span_name": a
                });
                c.updateName(a);
              } else {
                c.updateName(`${aE} ${J}`);
              }
            });
          };
          let m = (0, h.getRequestMeta)(a, "incrementalCache");
          let o = async ({
            span: e,
            postponed: f,
            fallbackRouteParams: g,
            forceStaticRender: i
          }) => {
            let l = {
              query: R,
              params: S,
              page: ag,
              sharedContext: {
                buildId: Q
              },
              serverComponentsHmrCache: (0, h.getRequestMeta)(a, "serverComponentsHmrCache"),
              fallbackRouteParams: g,
              renderOpts: {
                App: () => null,
                Document: () => null,
                pageConfig: {},
                ComponentMod: aD,
                Component: (0, j.T)(aD),
                params: S,
                routeModule: M,
                page: J,
                postponed: f,
                shouldWaitOnAllReady: aA,
                serveStreamingMetadata: aw,
                supportsDynamicResponse: typeof f == "string" || az,
                buildManifest: U,
                nextFontManifest: V,
                reactLoadableManifest: W,
                subresourceIntegrityManifest: Z,
                serverActionsManifest: X,
                clientReferenceManifest: Y,
                setCacheStatus: ac == null ? undefined : ac.setCacheStatus,
                setIsrStatus: ac == null ? undefined : ac.setIsrStatus,
                setReactDebugChannel: ac == null ? undefined : ac.setReactDebugChannel,
                dir: c(33873).join(process.cwd(), M.relativeProjectDir),
                isDraftMode: _,
                botType: al,
                isOnDemandRevalidate: ah,
                isPossibleServerAction: ap,
                assetPrefix: ad.assetPrefix,
                nextConfigOutput: ad.output,
                crossOrigin: ad.crossOrigin,
                trailingSlash: ad.trailingSlash,
                images: ad.images,
                previewProps: $.preview,
                deploymentId: ad.deploymentId,
                enableTainting: ad.experimental.taint,
                htmlLimitedBots: ad.htmlLimitedBots,
                reactMaxHeadersLength: ad.reactMaxHeadersLength,
                multiZoneDraftMode: false,
                incrementalCache: m,
                cacheLifeProfiles: ad.cacheLife,
                basePath: ad.basePath,
                serverActions: ad.experimental.serverActions,
                ...(ar || as ? {
                  nextExport: true,
                  supportsDynamicResponse: false,
                  isStaticGeneration: true,
                  isDebugDynamicAccesses: ar
                } : {}),
                cacheComponents: !!ad.cacheComponents,
                experimental: {
                  isRoutePPREnabled: aq,
                  expireTime: ad.expireTime,
                  staleTimes: ad.experimental.staleTimes,
                  dynamicOnHover: !!ad.experimental.dynamicOnHover,
                  inlineCss: !!ad.experimental.inlineCss,
                  authInterrupts: !!ad.experimental.authInterrupts,
                  clientTraceMetadata: ad.experimental.clientTraceMetadata || [],
                  clientParamParsingOrigins: ad.experimental.clientParamParsingOrigins
                },
                waitUntil: d.waitUntil,
                onClose: a => {
                  b.on("close", a);
                },
                onAfterTaskError: () => {},
                onInstrumentationRequestError: (b, c, d) => M.onRequestError(a, b, d, ac),
                err: (0, h.getRequestMeta)(a, "invokeError"),
                dev: M.isDev
              }
            };
            if (ar) {
              l.renderOpts.nextExport = true;
              l.renderOpts.supportsDynamicResponse = false;
              l.renderOpts.isDebugDynamicAccesses = ar;
            }
            if (i) {
              l.renderOpts.supportsDynamicResponse = false;
            }
            let n = await k(e, l);
            let {
              metadata: o
            } = n;
            let {
              cacheControl: p,
              headers: q = {},
              fetchTags: r,
              fetchMetrics: s
            } = o;
            if (r) {
              q[y.NEXT_CACHE_TAGS_HEADER] = r;
            }
            a.fetchMetrics = s;
            if (ax && (p == null ? undefined : p.revalidate) === 0 && !M.isDev && !aq) {
              let a = o.staticBailoutInfo;
              let b = Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${aa}${(a == null ? undefined : a.description) ? `, reason: ${a.description}` : ""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`), "__NEXT_ERROR_CODE", {
                value: "E132",
                enumerable: false,
                configurable: true
              });
              if (a == null ? undefined : a.stack) {
                let c = a.stack;
                b.stack = b.message + c.substring(c.indexOf("\n"));
              }
              throw b;
            }
            return {
              value: {
                kind: v.CachedRouteKind.APP_PAGE,
                html: n,
                headers: q,
                rscData: o.flightData,
                postponed: o.postponed,
                status: o.statusCode,
                segmentData: o.segmentData
              },
              cacheControl: p
            };
          };
          let p = async ({
            hasResolved: c,
            previousCacheEntry: f,
            isRevalidating: g,
            span: i,
            forceStaticRender: j = false
          }) => {
            let k;
            let l = M.isDev === false;
            let q = c || b.writableEnded;
            if (ah && ab && !f && !O) {
              if (ac == null ? undefined : ac.render404) {
                await ac.render404(a, b);
              } else {
                b.statusCode = 404;
                b.end("This page could not be found");
              }
              return null;
            }
            if (ai) {
              k = (0, w.parseFallbackField)(ai.fallback);
            }
            if (k === w.FallbackMode.PRERENDER && (0, u.isBot)(ak) && (!aq || am)) {
              k = w.FallbackMode.BLOCKING_STATIC_RENDER;
            }
            if ((f == null ? undefined : f.isStale) === -1) {
              ah = true;
            }
            if (ah && (k !== w.FallbackMode.NOT_FOUND || f)) {
              k = w.FallbackMode.BLOCKING_STATIC_RENDER;
            }
            if (!O && k !== w.FallbackMode.BLOCKING_STATIC_RENDER && aC && !q && !_ && T && (l || !aj)) {
              if ((l || ai) && k === w.FallbackMode.NOT_FOUND) {
                if (ad.experimental.adapterPath) {
                  return await aH();
                }
                throw new B.NoFallbackError();
              }
              if (aq && (ad.cacheComponents ? !au : !ao)) {
                let b = l && typeof (ai == null ? undefined : ai.fallback) == "string" ? ai.fallback : ag;
                let c = l && (ai == null ? undefined : ai.fallbackRouteParams) ? (0, n.createOpaqueFallbackRouteParams)(ai.fallbackRouteParams) : as ? (0, n.getFallbackRouteParams)(ag, M) : null;
                let f = await M.handleResponse({
                  cacheKey: b,
                  req: a,
                  nextConfig: ad,
                  routeKind: e.RouteKind.APP_PAGE,
                  isFallback: true,
                  prerenderManifest: $,
                  isRoutePPREnabled: aq,
                  responseGenerator: async () => o({
                    span: i,
                    postponed: undefined,
                    fallbackRouteParams: c,
                    forceStaticRender: false
                  }),
                  waitUntil: d.waitUntil,
                  isMinimalMode: O
                });
                if (f === null) {
                  return null;
                }
                if (f) {
                  delete f.cacheControl;
                  return f;
                }
              }
            }
            let r = ah || g || !at ? undefined : at;
            if (ay && !O && m && au && !j) {
              let b = await m.get(aa, {
                kind: v.IncrementalCacheKind.APP_PAGE,
                isRoutePPREnabled: true,
                isFallback: false
              });
              if (b && b.value && b.value.kind === v.CachedRouteKind.APP_PAGE) {
                r = b.value.postponed;
                if (b && (b.isStale === -1 || b.isStale === true)) {
                  (0, H.scheduleOnNextTick)(async () => {
                    let b = M.getResponseCache(a);
                    try {
                      await b.revalidate(aa, m, aq, false, a => p({
                        ...a,
                        forceStaticRender: true
                      }), null, c, d.waitUntil);
                    } catch (a) {
                      console.error("Error revalidating the page in the background", a);
                    }
                  });
                }
              }
            }
            if (ar && r !== undefined) {
              return {
                cacheControl: {
                  revalidate: 1,
                  expire: undefined
                },
                value: {
                  kind: v.CachedRouteKind.PAGES,
                  html: x.default.EMPTY,
                  pageData: {},
                  headers: undefined,
                  status: undefined
                }
              };
            }
            let s = l && (ai == null ? undefined : ai.fallbackRouteParams) && (0, h.getRequestMeta)(a, "renderFallbackShell") ? (0, n.createOpaqueFallbackRouteParams)(ai.fallbackRouteParams) : as ? (0, n.getFallbackRouteParams)(ag, M) : null;
            return o({
              span: i,
              postponed: r,
              fallbackRouteParams: s,
              forceStaticRender: j
            });
          };
          let q = async c => {
            var f;
            var g;
            var i;
            var j;
            var k;
            let l;
            let m = await M.handleResponse({
              cacheKey: aB,
              responseGenerator: a => p({
                span: c,
                ...a
              }),
              routeKind: e.RouteKind.APP_PAGE,
              isOnDemandRevalidate: ah,
              isRoutePPREnabled: aq,
              req: a,
              nextConfig: ad,
              prerenderManifest: $,
              waitUntil: d.waitUntil,
              isMinimalMode: O
            });
            if (_) {
              b.setHeader("Cache-Control", "private, no-cache, no-store, max-age=0, must-revalidate");
            }
            if (M.isDev) {
              b.setHeader("Cache-Control", "no-store, must-revalidate");
            }
            if (!m) {
              if (aB) {
                throw Object.defineProperty(Error("invariant: cache entry required but not generated"), "__NEXT_ERROR_CODE", {
                  value: "E62",
                  enumerable: false,
                  configurable: true
                });
              }
              return null;
            }
            if (((f = m.value) == null ? undefined : f.kind) !== v.CachedRouteKind.APP_PAGE) {
              throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${(i = m.value) == null ? undefined : i.kind}`), "__NEXT_ERROR_CODE", {
                value: "E707",
                enumerable: false,
                configurable: true
              });
            }
            let n = typeof m.value.postponed == "string";
            if (ax && !au && (!n || an)) {
              if (!O) {
                b.setHeader("x-nextjs-cache", ah ? "REVALIDATED" : m.isMiss ? "MISS" : m.isStale ? "STALE" : "HIT");
              }
              b.setHeader(t.NEXT_IS_PRERENDER_HEADER, "1");
            }
            let {
              value: q
            } = m;
            if (at) {
              l = {
                revalidate: 0,
                expire: undefined
              };
            } else if (au) {
              l = {
                revalidate: 0,
                expire: undefined
              };
            } else if (!M.isDev) {
              if (_) {
                l = {
                  revalidate: 0,
                  expire: undefined
                };
              } else if (ax) {
                if (m.cacheControl) {
                  if (typeof m.cacheControl.revalidate == "number") {
                    if (m.cacheControl.revalidate < 1) {
                      throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${m.cacheControl.revalidate} < 1`), "__NEXT_ERROR_CODE", {
                        value: "E22",
                        enumerable: false,
                        configurable: true
                      });
                    }
                    l = {
                      revalidate: m.cacheControl.revalidate,
                      expire: ((j = m.cacheControl) == null ? undefined : j.expire) ?? ad.expireTime
                    };
                  } else {
                    l = {
                      revalidate: y.CACHE_ONE_YEAR,
                      expire: undefined
                    };
                  }
                }
              } else if (!b.getHeader("Cache-Control")) {
                l = {
                  revalidate: 0,
                  expire: undefined
                };
              }
            }
            m.cacheControl = l;
            if (typeof av == "string" && (q == null ? undefined : q.kind) === v.CachedRouteKind.APP_PAGE && q.segmentData) {
              b.setHeader(t.NEXT_DID_POSTPONE_HEADER, "2");
              let c = (k = q.headers) == null ? undefined : k[y.NEXT_CACHE_TAGS_HEADER];
              if (O && ax && c && typeof c == "string") {
                b.setHeader(y.NEXT_CACHE_TAGS_HEADER, c);
              }
              let d = q.segmentData.get(av);
              if (d !== undefined) {
                return (0, A.sendRenderResult)({
                  req: a,
                  res: b,
                  generateEtags: ad.generateEtags,
                  poweredByHeader: ad.poweredByHeader,
                  result: x.default.fromStatic(d, t.RSC_CONTENT_TYPE_HEADER),
                  cacheControl: m.cacheControl
                });
              } else {
                b.statusCode = 204;
                return (0, A.sendRenderResult)({
                  req: a,
                  res: b,
                  generateEtags: ad.generateEtags,
                  poweredByHeader: ad.poweredByHeader,
                  result: x.default.EMPTY,
                  cacheControl: m.cacheControl
                });
              }
            }
            let r = ay ? (0, h.getRequestMeta)(a, "onCacheEntryV2") ?? (0, h.getRequestMeta)(a, "onCacheEntry") : (0, h.getRequestMeta)(a, "onCacheEntry");
            if (r && (await r(m, {
              url: (0, h.getRequestMeta)(a, "initURL") ?? a.url
            }))) {
              return null;
            }
            if (q.headers) {
              let a = {
                ...q.headers
              };
              if (!O || !ax) {
                delete a[y.NEXT_CACHE_TAGS_HEADER];
              }
              for (let [c, d] of Object.entries(a)) {
                if (d !== undefined) {
                  if (Array.isArray(d)) {
                    for (let a of d) {
                      b.appendHeader(c, a);
                    }
                  } else {
                    if (typeof d == "number") {
                      d = d.toString();
                    }
                    b.appendHeader(c, d);
                  }
                }
              }
            }
            let s = (g = q.headers) == null ? undefined : g[y.NEXT_CACHE_TAGS_HEADER];
            if (O && ax && s && typeof s == "string") {
              b.setHeader(y.NEXT_CACHE_TAGS_HEADER, s);
            }
            if (!!q.status && (!ao || !aq)) {
              b.statusCode = q.status;
            }
            if (!O && q.status && F.RedirectStatusCode[q.status] && ao) {
              b.statusCode = 200;
            }
            if (n && !au) {
              b.setHeader(t.NEXT_DID_POSTPONE_HEADER, "1");
            }
            if (ao && !_) {
              if (q.rscData === undefined) {
                if (q.html.contentType !== t.RSC_CONTENT_TYPE_HEADER) {
                  if (ad.cacheComponents) {
                    b.statusCode = 404;
                    return (0, A.sendRenderResult)({
                      req: a,
                      res: b,
                      generateEtags: ad.generateEtags,
                      poweredByHeader: ad.poweredByHeader,
                      result: x.default.EMPTY,
                      cacheControl: m.cacheControl
                    });
                  } else {
                    throw Object.defineProperty(new G.InvariantError(`Expected RSC response, got ${q.html.contentType}`), "__NEXT_ERROR_CODE", {
                      value: "E789",
                      enumerable: false,
                      configurable: true
                    });
                  }
                }
                return (0, A.sendRenderResult)({
                  req: a,
                  res: b,
                  generateEtags: ad.generateEtags,
                  poweredByHeader: ad.poweredByHeader,
                  result: q.html,
                  cacheControl: m.cacheControl
                });
              }
              return (0, A.sendRenderResult)({
                req: a,
                res: b,
                generateEtags: ad.generateEtags,
                poweredByHeader: ad.poweredByHeader,
                result: x.default.fromStatic(q.rscData, t.RSC_CONTENT_TYPE_HEADER),
                cacheControl: m.cacheControl
              });
            }
            let u = q.html;
            if (!n || O || ao) {
              return (0, A.sendRenderResult)({
                req: a,
                res: b,
                generateEtags: ad.generateEtags,
                poweredByHeader: ad.poweredByHeader,
                result: u,
                cacheControl: m.cacheControl
              });
            }
            if (ar) {
              u.push(new ReadableStream({
                start(a) {
                  a.enqueue(z.ENCODED_TAGS.CLOSED.BODY_AND_HTML);
                  a.close();
                }
              }));
              return (0, A.sendRenderResult)({
                req: a,
                res: b,
                generateEtags: ad.generateEtags,
                poweredByHeader: ad.poweredByHeader,
                result: u,
                cacheControl: {
                  revalidate: 0,
                  expire: undefined
                }
              });
            }
            let w = new TransformStream();
            u.push(w.readable);
            o({
              span: c,
              postponed: q.postponed,
              fallbackRouteParams: null,
              forceStaticRender: false
            }).then(async a => {
              var b;
              var c;
              if (!a) {
                throw Object.defineProperty(Error("Invariant: expected a result to be returned"), "__NEXT_ERROR_CODE", {
                  value: "E463",
                  enumerable: false,
                  configurable: true
                });
              }
              if (((b = a.value) == null ? undefined : b.kind) !== v.CachedRouteKind.APP_PAGE) {
                throw Object.defineProperty(Error(`Invariant: expected a page response, got ${(c = a.value) == null ? undefined : c.kind}`), "__NEXT_ERROR_CODE", {
                  value: "E305",
                  enumerable: false,
                  configurable: true
                });
              }
              await a.value.html.pipeTo(w.writable);
            }).catch(a => {
              w.writable.abort(a).catch(a => {
                console.error("couldn't abort transformer", a);
              });
            });
            return (0, A.sendRenderResult)({
              req: a,
              res: b,
              generateEtags: ad.generateEtags,
              poweredByHeader: ad.poweredByHeader,
              result: u,
              cacheControl: {
                revalidate: 0,
                expire: undefined
              }
            });
          };
          if (!aG) {
            return await aF.withPropagatedContext(a.headers, () => aF.trace(i.BaseServerSpan.handleRequest, {
              spanName: `${aE} ${J}`,
              kind: g.SpanKind.SERVER,
              attributes: {
                "http.method": aE,
                "http.target": a.url
              }
            }, q));
          }
          await q(aG);
        } catch (b) {
          if (!(b instanceof B.NoFallbackError)) {
            await M.onRequestError(a, b, {
              routerKind: "App Router",
              routePath: J,
              routeType: "render",
              revalidateReason: (0, f.c)({
                isStaticGeneration: ax,
                isOnDemandRevalidate: ah
              })
            }, ac);
          }
          throw b;
        }
      }
    },
    54889: (a, b, c) => {
      Promise.resolve().then(c.bind(c, 82280));
    },
    55511: a => {
      "use strict";

      a.exports = require("crypto");
    },
    63033: a => {
      "use strict";

      a.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
    },
    64617: (a, b, c) => {
      Promise.resolve().then(c.bind(c, 71494));
    },
    70722: a => {
      "use strict";

      a.exports = require("next/dist/shared/lib/invariant-error");
    },
    71494: (a, b, c) => {
      "use strict";

      c.d(b, {
        default: () => i
      });
      var d;
      var e = c(22541);
      var g = (d = true, function (a, b) {
        var c = d ? function () {
          if (b) {
            var c = b.apply(a, arguments);
            b = null;
            return c;
          }
        } : function () {};
        d = false;
        return c;
        return _0x48a208.toString().search("(((.+)+)+)+$").toString().constructor(_0x3d755b).search("(((.+)+)+)+$");
      })(undefined, function () {
        return g.toString().search("(((.+)+)+)+$").toString().constructor(g).search("(((.+)+)+)+$");
      });
      g();
      let i = (0, e.registerClientReference)(function () {
        throw Error("Attempted to call the default export of \"/app/apps/web/app/(app)/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
      }, "/app/apps/web/app/(app)/page.tsx", "default");
    },
    77039: (a, b, c) => {
      "use strict";

      c.r(b);
      c.d(b, {
        default: () => i
      });
      var d;
      var e = c(71494);
      function f(a, b) {
        var c = g();
        return (f = function (a, b) {
          return c[a -= 372];
        })(a, b);
      }
      function g() {
        var a = ["2288ujXGZB", "search", "6390584TBgVXk", "110QzUTOb", "constructo", "2908455mSFMiD", "3378384SCDiJj", "3163237PTxbUe", "apply", "916954ZZAVRZ", "3905850XiLRfI", "(((.+)+)+)", "toString", "9QptoEi", "7645NHulEf", "2uCYBnq"];
        return (g = function () {
          return a;
        })();
      }
      (function (a, b) {
        var c;
        var d;
        var e;
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
        var s = a();
        while (true) {
          try {
            if (parseInt((c = -82, f(387, c))) / 1 * (-parseInt((d = -221, e = -228, f(d - -602, e))) / 2) + -parseInt((g = -224, h = -231, f(g - -602, h))) / 3 + -parseInt((i = -224, f(372, i))) / 4 * (-parseInt((j = -83, k = -76, f(j - -469, k))) / 5) + -parseInt((l = -82, f(382, l))) / 6 + parseInt((m = -90, n = -89, f(m - -469, n))) / 7 + parseInt((o = -95, f(o - -469, -100))) / 8 * (-parseInt((p = -217, f(p - -602, -212))) / 9) + -parseInt((q = -227, r = -221, f(q - -602, r))) / 10 * (-parseInt(f(377, -232)) / 11) === 742054) {
              break;
            }
            s.push(s.shift());
          } catch (a) {
            s.push(s.shift());
          }
        }
      })(g, 0);
      var h = (d = true, function (a, b) {
        var c = d ? function () {
          if (b) {
            var c = b[f(380, -175)](a, arguments);
            b = null;
            return c;
          }
        } : function () {};
        d = false;
        return c;
      })(undefined, function () {
        return h[f(384, 1091)]()[f(373, 1072)]("(((.+)+)+)+$").toString()[f(376, 1075) + "r"](h)[f(373, 1175)](f(383, 1173) + "+$");
      });
      h();
      let i = e.default;
    },
    77598: a => {
      "use strict";

      a.exports = require("node:crypto");
    },
    82280: (a, b, c) => {
      "use strict";

      let d;
      c.d(b, {
        default: () => n
      });
      var e = c(11818);
      var f = c(95517);
      var g = c(3910);
      var h = c(99456);
      var i = c(10361);
      var j = c(87261);
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
            var n;
            if (parseInt(m(453, 487)) / 1 + -parseInt((d = -42, e = -32, m(e - -476, d))) / 2 * (-parseInt(m(460, 489)) / 3) + parseInt((f = -18, g = -27, m(g - -476, f))) / 4 + parseInt((h = -34, m(h - -476, -39))) / 5 + -parseInt((i = -31, m(i - -476, -32))) / 6 * (-parseInt(m(455, 506)) / 7) + parseInt(m(447, 500)) / 8 * (-parseInt((j = -41, k = -37, m(k - -476, j))) / 9) + -parseInt((l = -10, n = -14, m(n - -476, l))) / 10 === 735858) {
              break;
            }
            c.push(c.shift());
          } catch (a) {
            c.push(c.shift());
          }
        }
      })(l, 0);
      let k = (d = true, function (a, b) {
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
        return k[m(463, 1256)]()[m(443, 152)](m(461, 170) + "+$")[m(463, 1240)]()[m(456, 160) + "r"](k)[m(443, 1230)](m(461, 1241) + "+$");
      });
      function l() {
        let a = ["4589348sTpHYw", "env", "all", "__NEXT_PRI", "273573ZmXWKQ", "apply", "7wjTFUo", "constructo", "push", "zuyQh", "IZE_MACRO_", "497499yjslpF", "(((.+)+)+)", "25708420XRMkWY", "toString", "startView", "9JBxQPv", "VATE_MINIM", "lastViewed", "5292090etLcus", "search", "8HAdrzL", "4740438gbZjWG", "general", "5008264OCyPFM", "FALSE"];
        return (l = function () {
          return a;
        })();
      }
      function m(a, b) {
        let c = l();
        return (m = function (a, b) {
          return c[a -= 439];
        })(a, b);
      }
      function n() {
        let a = (0, f.useRouter)();
        let b = (0, g.md)(h.FU);
        let c = (0, g.md)(i.n_);
        if (process[m(450, 1088)][m(452, -303) + m(440, -325) + m(459, 1085) + m(448, 1073)]) {
          (0, e.useEffect)(() => {
            let d;
            let e = b[g(18, 19, 19, 25)][f(-195, -192, -191, -204)] ?? f(-194, -205, -204, -193);
            function f(a, b, c, d) {
              return m(c - 99 - -754, b);
            }
            function g(a, b, c, d) {
              return m(d - -1056 - 635, c);
            }
            if (e === f(-210, -227, -214, -209)) {
              d = (c && c !== "/" && c.startsWith("/") ? c : null) ?? j.Sg;
            } else if (f(-197, -189, -197, -186) !== f(-188, -206, -197, -198)) {
              if (_0x5361ca) {
                let a = _0x1624ed[f(-209, -189, -201, -191)](_0x2b0866, arguments);
                _0x3d6154 = null;
                return a;
              }
            } else {
              d = "/" + e;
            }
            a[g(25, 37, 29, 36)](d);
          }, [a, b, c]);
        }
        return null;
      }
      k();
    },
    86439: a => {
      "use strict";

      a.exports = require("next/dist/shared/lib/no-fallback-error.external");
    }
  };
  var b = require("../../webpack-runtime.js");
  b.C(a);
  var c = b.X(0, [2468, 4624, 233, 1431, 5363, 3454, 7259, 7258, 1752, 1320], () => b(b.s = 52485));
  module.exports = c;
})();