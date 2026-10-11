(a, b, c) => {
  let d;
  (c.r(b),
    c.d(b, {
      handler: () => ag,
      patchFetch: () => af,
      routeModule: () => ab,
      serverHooks: () => ae,
      workAsyncStorage: () => ac,
      workUnitAsyncStorage: () => ad,
    }));
  var e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q = {};
  (c.r(q), c.d(q, { POST: () => aa }));
  var r = c(51027),
    s = c(95276),
    t = c(19395),
    u = c(58411),
    v = c(45965),
    w = c(88502),
    x = c(49249),
    y = c(261),
    z = c(44575),
    A = c(75537),
    B = c(68843),
    C = c(35368),
    D = c(70438),
    E = c(56412),
    F = c(89526),
    G = c(38915),
    H = c(86439),
    I = c(54609),
    J = c(27618),
    K = c(44708),
    L = c.n(K),
    M = c(74218),
    N = c(77766),
    O = c(50336),
    P = c(5639),
    Q = c(7147),
    R = c(92962),
    S = c(28837),
    T = c(33885);
  !(function (a, b) {
    let c = a();
    for (;;)
      try {
        var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;
        if (
          (-parseInt("3329RlNtKf") / 1) * (-parseInt("604uHHohF") / 2) +
            (parseInt(((d = -72), V(d - -402, -84))) / 3) *
              (parseInt(((e = -303), (f = -313), V(f - -662, e))) / 4) +
            (-parseInt(((g = -100), V(304, g))) / 5) *
              (parseInt(((h = -328), (i = -304), V(i - -662, h))) / 6) +
            -parseInt(((j = -67), (k = -41), V(k - -402, j))) / 7 +
            -parseInt(((l = -310), V(l - -662, -328))) / 8 +
            (parseInt(((m = -338), (n = -355), V(n - -662, m))) / 9) *
              (parseInt("60xRUkwD") / 10) +
            (parseInt(((o = -117), (p = -92), V(p - -402, o))) / 11) *
              (parseInt(((q = -72), (r = -68), V(r - -402, q))) / 12) ===
          751374
        )
          break;
        c.push(c.shift());
      } catch (a) {
        c.push(c.shift());
      }
  })(W, 0);
  let U = ((d = !0),
  function (a, b) {
    let c = d
      ? function () {
          if ("QfJdL" === "QfJdL") {
            if (b) {
              let c = b.apply(a, arguments);
              return ((b = null), c);
            }
          } else {
            let a = _0x4a3265["error"]["issues"];
            return _0x2bf897(
              "Invalid re" + "quest",
              a["map"]((a) => a.path["join"](".") + ": " + a["message"])[
                "join"
              ]("; "),
              400,
              _0x3d2c85.VALIDATION_ERROR,
            );
          }
        }
      : function () {};
    return ((d = !1), c);
  })(void 0, function () {
    return U["toString"]()
      ["search"]("(((.+)+)+)" + "+$")
      ["toString"]()
      ["constructo" + "r"](U)
      ["search"]("(((.+)+)+)" + "+$");
  });
  function V(a, b) {
    let c = W();
    return (V = function (a, b) {
      return c[(a -= 296)];
    })(a, b);
  }
  function W() {
    let a = [
      "Successful",
      "error",
      "iscovery f",
      "Agent",
      "V1_CALENDA",
      "string",
      "min",
      "3447100smVxAP",
      "_ERROR",
      "boolean",
      "10071936oUkSQE",
      "3329RlNtKf",
      "ERVER_ERRO",
      "red CalDAV",
      "QfJdL",
      "s required",
      "2089944PeLZJY",
      "enum",
      "safeParse",
      "1122205DvFEeQ",
      "success",
      "Invalid re",
      "carddav",
      "ror occurr",
      "toString",
      "accountTyp",
      "endpoint",
      "thorized",
      "15eGBriD",
      "search",
      "ailed",
      "693054zfxVJi",
      "VALIDATION",
      "60xRUkwD",
      "44jBFCJV",
      "fetchOptio",
      "serverUrl",
      "issues",
      "rootUrl",
      "rejectUnau",
      "Unknown er",
      "json",
      "caldav",
      "api-v1-cal",
      "password",
      "(((.+)+)+)",
      "bbwSb",
      "optional",
      "allowApiTo",
      " service a",
      "object",
      "Username i",
      "data",
      "url",
      "3OINJTw",
      "quest",
      "Invalid se",
      "constructo",
      "2659452hiaGhJ",
      "join",
      "map",
      "path",
      "604uHHohF",
      "Password i",
      "message",
      "R_DISCOVER",
    ];
    return (W = function () {
      return a;
    })();
  }
  U();
  let X = R["object"]({
    serverUrl: R["string"]()[((e = 0), (f = 0), (g = 1124), "url")](
      "Invalid se" + "rver URL",
    ),
    username: R[Y(1090, 1115, 1118, 1140)]()["min"](
      1,
      ((h = 0), (i = 0), (j = 1069), "Username i" + "s required"),
    ),
    password: R["string"]()[((k = 0), (l = 0), (m = 1089), "min")](
      1,
      "Password i" + "s required",
    ),
    accountType: R[Y(1138, 1151, 1130, 1159)](["caldav", "carddav"])[
      ((n = 0), (o = 0), (p = 1077), "optional")
    ](),
    allowInsecure: R[Y(1132, 1140, 1122, 1120)]().optional(),
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
      let d = await a[b(128, 101, 102, 153)](),
        e = X[b(171, 166, 175, 152)](d);
      if (!e[b(107, 90, 84, 78)]) {
        let a = e[b(154, 165, 185, 139)][c(-32, -58, -47, -46)];
        return (0, P.WX)(
          "Invalid request",
          a[c(-34, -45, -24, -5)](
            (a) =>
              a[c(6, -38, -23, -40)][c(-31, -38, -25, -8)](".") +
              ": " +
              a[c(9, -8, -20, -21)],
          )[c(-29, -5, -25, -39)]("; "),
          400,
          S.c[c(-78, -45, -52, -73) + b(161, 175, 168, 178)],
        );
      }
      let {
          serverUrl: f,
          username: g,
          password: h,
          accountType: i,
          allowInsecure: j,
        } = e[c(-24, -50, -32, -40)],
        k = {};
      k[c(-61, -40, -45, -58) + b(114, 124, 118, 83)] = !1;
      let l = j ? { agent: new (L()[b(156, 127, 187, 159)])(k) } : {},
        m = {};
      ((m.serverUrl = f),
        (m.username = g),
        (m[c(-11, -54, -40, -46)] = h),
        (m[b(112, 89, 115, 142) + "e"] = i || b(129, 109, 140, 157)),
        (m[c(-55, -16, -49, -43) + "ns"] = l));
      let n = await (0, Q.AO)(m),
        o = {};
      return (
        (o[c(-59, -39, -64, -36)] = !0),
        (o[b(123, 130, 116, 131)] = n.serverUrl),
        (o[c(-18, -39, -46, -70)] = n[b(125, 106, 157, 136)]),
        (o.message =
          b(153, 151, 141, 164) +
          "ly discove" +
          b(166, 145, 147, 170) +
          b(136, 129, 147, 151) +
          "t " +
          n[c(-31, -77, -46, -72)]),
        J.NextResponse.json(o)
      );
    } catch (a) {
      if (c(-61, -11, -38, -24) !== b(133, 142, 135, 163))
        return _0x2f7d93[b(111, 99, 142, 138)]()
          .search(b(132, 148, 125, 111) + "+$")
          [c(-45, -86, -60, -92)]()
          [b(144, 159, 117, 118) + "r"](_0x1c2c7f)
          [c(-37, -87, -55, -73)](b(132, 122, 157, 101) + "+$");
      {
        console[c(-42, -50, -17, 7)](
          "Calendar d" + b(155, 152, 142, 178) + "ailed:",
          a,
        );
        let d =
          a instanceof Error
            ? a[b(151, 166, 145, 167)]
            : c(-66, -26, -44, -19) + c(-44, -56, -61, -68) + "ed";
        return (0, P.WX)(
          "Calendar d" + b(155, 173, 131, 166) + b(117, 127, 123, 148),
          d,
          500,
          S.c["INTERNAL_S" + b(165, 198, 195, 150) + "R"],
        );
      }
    }
  }
  let $ = {};
  (($["endpoint"] = T.QQ["V1_CALENDA" + "R_DISCOVER"]),
    ($.module = "api-v1-cal" + "endar-discover"));
  let _ = {};
  _["allowApiTo" + "ken"] = !0;
  let aa = (0, O.F0)((0, N.Z)((0, M.kF)(Z, $), _)),
    ab = new r.AppRouteRouteModule({
      definition: {
        kind: s.RouteKind.APP_ROUTE,
        page: "/api/v1/calendar/discover/route",
        pathname: "/api/v1/calendar/discover",
        filename: "route",
        bundlePath: "app/api/v1/calendar/discover/route",
      },
      distDir: ".next",
      relativeProjectDir: "",
      resolvedPagePath:
        "/app/apps/web.pro/app/api/v1/calendar/discover/route.ts",
      nextConfigOutput: "standalone",
      userland: q,
    }),
    { workAsyncStorage: ac, workUnitAsyncStorage: ad, serverHooks: ae } = ab;
  function af() {
    return (0, t.patchFetch)({
      workAsyncStorage: ac,
      workUnitAsyncStorage: ad,
    });
  }
  async function ag(a, b, c) {
    ab.isDev &&
      (0, u.addRequestMeta)(
        a,
        "devRequestTimingInternalsEnd",
        process.hrtime.bigint(),
      );
    let d = "/api/v1/calendar/discover/route";
    "/index" === d && (d = "/");
    let e = await ab.prepare(a, b, { srcPage: d, multiZoneDraftMode: !1 });
    if (!e)
      return (
        (b.statusCode = 400),
        b.end("Bad Request"),
        null == c.waitUntil || c.waitUntil.call(c, Promise.resolve()),
        null
      );
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
        serverActionsManifest: q,
      } = e,
      r = (0, y.normalizeAppPath)(d),
      t = !!(k.dynamicRoutes[r] || k.routes[o]),
      J = async () => (
        (null == l ? void 0 : l.render404)
          ? await l.render404(a, b, i, !1)
          : b.end("This page could not be found"),
        null
      );
    if (t && !j) {
      let a = !!k.routes[o],
        b = k.dynamicRoutes[r];
      if (b && !1 === b.fallback && !a) {
        if (h.experimental.adapterPath) return await J();
        throw new H.NoFallbackError();
      }
    }
    let K = null;
    !t || ab.isDev || j || (K = "/index" === (K = o) ? "/" : K);
    let L = !0 === ab.isDev || !t,
      M = t && !L;
    q &&
      p &&
      (0, w.setReferenceManifestsSingleton)({
        page: d,
        clientReferenceManifest: p,
        serverActionsManifest: q,
        serverModuleMap: (0, x.createServerModuleMap)({
          serverActionsManifest: q,
        }),
      });
    let N = a.method || "GET",
      O = (0, v.getTracer)(),
      P = O.getActiveScopeSpan(),
      Q = {
        params: g,
        prerenderManifest: k,
        renderOpts: {
          experimental: { authInterrupts: !!h.experimental.authInterrupts },
          cacheComponents: !!h.cacheComponents,
          supportsDynamicResponse: L,
          incrementalCache: (0, u.getRequestMeta)(a, "incrementalCache"),
          cacheLifeProfiles: h.cacheLife,
          waitUntil: c.waitUntil,
          onClose: (a) => {
            b.on("close", a);
          },
          onAfterTaskError: void 0,
          onInstrumentationRequestError: (b, c, d) =>
            ab.onRequestError(a, b, d, l),
        },
        sharedContext: { buildId: f },
      },
      R = new z.NodeNextRequest(a),
      S = new z.NodeNextResponse(b),
      T = A.NextRequestAdapter.fromNodeNextRequest(
        R,
        (0, A.signalFromNodeResponse)(b),
      );
    try {
      let e = async (a) =>
          ab.handle(T, Q).finally(() => {
            if (!a) return;
            a.setAttributes({
              "http.status_code": b.statusCode,
              "next.rsc": !1,
            });
            let c = O.getRootSpanAttributes();
            if (!c) return;
            if (c.get("next.span_type") !== B.BaseServerSpan.handleRequest)
              return void console.warn(
                `Unexpected root span type '${c.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`,
              );
            let e = c.get("next.route");
            if (e) {
              let b = `${N} ${e}`;
              (a.setAttributes({
                "next.route": e,
                "http.route": e,
                "next.span_name": b,
              }),
                a.updateName(b));
            } else a.updateName(`${N} ${d}`);
          }),
        f = !!(0, u.getRequestMeta)(a, "minimalMode"),
        g = async (g) => {
          var i, o;
          let p = async ({ previousCacheEntry: h }) => {
              try {
                if (!f && m && n && !h)
                  return (
                    (b.statusCode = 404),
                    b.setHeader("x-nextjs-cache", "REVALIDATED"),
                    b.end("This page could not be found"),
                    null
                  );
                let d = await e(g);
                a.fetchMetrics = Q.renderOpts.fetchMetrics;
                let i = Q.renderOpts.pendingWaitUntil;
                i && c.waitUntil && (c.waitUntil(i), (i = void 0));
                let j = Q.renderOpts.collectedTags;
                if (!t)
                  return (
                    await (0, D.I)(R, S, d, Q.renderOpts.pendingWaitUntil),
                    null
                  );
                {
                  let a = await d.blob(),
                    b = (0, E.toNodeOutgoingHttpHeaders)(d.headers);
                  (j && (b[G.NEXT_CACHE_TAGS_HEADER] = j),
                    !b["content-type"] &&
                      a.type &&
                      (b["content-type"] = a.type));
                  let c =
                      void 0 !== Q.renderOpts.collectedRevalidate &&
                      !(Q.renderOpts.collectedRevalidate >= G.INFINITE_CACHE) &&
                      Q.renderOpts.collectedRevalidate,
                    e =
                      void 0 === Q.renderOpts.collectedExpire ||
                      Q.renderOpts.collectedExpire >= G.INFINITE_CACHE
                        ? void 0
                        : Q.renderOpts.collectedExpire;
                  return {
                    value: {
                      kind: I.CachedRouteKind.APP_ROUTE,
                      status: d.status,
                      body: Buffer.from(await a.arrayBuffer()),
                      headers: b,
                    },
                    cacheControl: { revalidate: c, expire: e },
                  };
                }
              } catch (b) {
                throw (
                  (null == h ? void 0 : h.isStale) &&
                    (await ab.onRequestError(
                      a,
                      b,
                      {
                        routerKind: "App Router",
                        routePath: d,
                        routeType: "route",
                        revalidateReason: (0, C.c)({
                          isStaticGeneration: M,
                          isOnDemandRevalidate: m,
                        }),
                      },
                      l,
                    )),
                  b
                );
              }
            },
            q = await ab.handleResponse({
              req: a,
              nextConfig: h,
              cacheKey: K,
              routeKind: s.RouteKind.APP_ROUTE,
              isFallback: !1,
              prerenderManifest: k,
              isRoutePPREnabled: !1,
              isOnDemandRevalidate: m,
              revalidateOnlyGenerated: n,
              responseGenerator: p,
              waitUntil: c.waitUntil,
              isMinimalMode: f,
            });
          if (!t) return null;
          if (
            (null == q || null == (i = q.value) ? void 0 : i.kind) !==
            I.CachedRouteKind.APP_ROUTE
          )
            throw Object.defineProperty(
              Error(
                `Invariant: app-route received invalid cache entry ${null == q || null == (o = q.value) ? void 0 : o.kind}`,
              ),
              "__NEXT_ERROR_CODE",
              { value: "E701", enumerable: !1, configurable: !0 },
            );
          (f ||
            b.setHeader(
              "x-nextjs-cache",
              m
                ? "REVALIDATED"
                : q.isMiss
                  ? "MISS"
                  : q.isStale
                    ? "STALE"
                    : "HIT",
            ),
            j &&
              b.setHeader(
                "Cache-Control",
                "private, no-cache, no-store, max-age=0, must-revalidate",
              ));
          let r = (0, E.fromNodeOutgoingHttpHeaders)(q.value.headers);
          return (
            (f && t) || r.delete(G.NEXT_CACHE_TAGS_HEADER),
            !q.cacheControl ||
              b.getHeader("Cache-Control") ||
              r.get("Cache-Control") ||
              r.set(
                "Cache-Control",
                (0, F.getCacheControlHeader)(q.cacheControl),
              ),
            await (0, D.I)(
              R,
              S,
              new Response(q.value.body, {
                headers: r,
                status: q.value.status || 200,
              }),
            ),
            null
          );
        };
      P
        ? await g(P)
        : await O.withPropagatedContext(a.headers, () =>
            O.trace(
              B.BaseServerSpan.handleRequest,
              {
                spanName: `${N} ${d}`,
                kind: v.SpanKind.SERVER,
                attributes: { "http.method": N, "http.target": a.url },
              },
              g,
            ),
          );
    } catch (b) {
      if (
        (b instanceof H.NoFallbackError ||
          (await ab.onRequestError(a, b, {
            routerKind: "App Router",
            routePath: r,
            routeType: "route",
            revalidateReason: (0, C.c)({
              isStaticGeneration: M,
              isOnDemandRevalidate: m,
            }),
          })),
        t)
      )
        throw b;
      return (await (0, D.I)(R, S, new Response(null, { status: 500 })), null);
    }
  }
};
