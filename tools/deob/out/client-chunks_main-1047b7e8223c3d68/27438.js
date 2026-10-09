Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = {
  ACTION_SUFFIX: function () {
    return m;
  },
  APP_DIR_ALIAS: function () {
    return $;
  },
  CACHE_ONE_YEAR: function () {
    return A;
  },
  DOT_NEXT_ALIAS: function () {
    return D;
  },
  ESLINT_DEFAULT_DIRS: function () {
    return ea;
  },
  GSP_NO_RETURNED_VALUE: function () {
    return J;
  },
  GSSP_COMPONENT_MEMBER_ERROR: function () {
    return et;
  },
  GSSP_NO_RETURNED_VALUE: function () {
    return Z;
  },
  HTML_CONTENT_TYPE_HEADER: function () {
    return o;
  },
  INFINITE_CACHE: function () {
    return x;
  },
  INSTRUMENTATION_HOOK_FILENAME: function () {
    return M;
  },
  JSON_CONTENT_TYPE_HEADER: function () {
    return i;
  },
  MATCHED_PATH_HEADER: function () {
    return l;
  },
  MIDDLEWARE_FILENAME: function () {
    return w;
  },
  MIDDLEWARE_LOCATION_REGEXP: function () {
    return N;
  },
  NEXT_BODY_SUFFIX: function () {
    return y;
  },
  NEXT_CACHE_IMPLICIT_TAG_ID: function () {
    return j;
  },
  NEXT_CACHE_REVALIDATED_TAGS_HEADER: function () {
    return P;
  },
  NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function () {
    return R;
  },
  NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function () {
    return T;
  },
  NEXT_CACHE_TAGS_HEADER: function () {
    return b;
  },
  NEXT_CACHE_TAG_MAX_ITEMS: function () {
    return O;
  },
  NEXT_CACHE_TAG_MAX_LENGTH: function () {
    return S;
  },
  NEXT_DATA_SUFFIX: function () {
    return g;
  },
  NEXT_INTERCEPTION_MARKER_PREFIX: function () {
    return u;
  },
  NEXT_META_SUFFIX: function () {
    return E;
  },
  NEXT_QUERY_PARAM_PREFIX: function () {
    return s;
  },
  NEXT_RESUME_HEADER: function () {
    return v;
  },
  NON_STANDARD_NODE_ENV: function () {
    return er;
  },
  PAGES_DIR_ALIAS: function () {
    return L;
  },
  PRERENDER_REVALIDATE_HEADER: function () {
    return c;
  },
  PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function () {
    return f;
  },
  PROXY_FILENAME: function () {
    return C;
  },
  PROXY_LOCATION_REGEXP: function () {
    return I;
  },
  PUBLIC_DIR_MIDDLEWARE_CONFLICT: function () {
    return q;
  },
  ROOT_DIR_ALIAS: function () {
    return U;
  },
  RSC_ACTION_CLIENT_WRAPPER_ALIAS: function () {
    return G;
  },
  RSC_ACTION_ENCRYPTION_ALIAS: function () {
    return X;
  },
  RSC_ACTION_PROXY_ALIAS: function () {
    return B;
  },
  RSC_ACTION_VALIDATE_ALIAS: function () {
    return k;
  },
  RSC_CACHE_WRAPPER_ALIAS: function () {
    return H;
  },
  RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: function () {
    return W;
  },
  RSC_MOD_REF_PROXY_ALIAS: function () {
    return F;
  },
  RSC_PREFETCH_SUFFIX: function () {
    return d;
  },
  RSC_SEGMENTS_DIR_SUFFIX: function () {
    return p;
  },
  RSC_SEGMENT_SUFFIX: function () {
    return h;
  },
  RSC_SUFFIX: function () {
    return _;
  },
  SERVER_PROPS_EXPORT_ERROR: function () {
    return Q;
  },
  SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function () {
    return Y;
  },
  SERVER_PROPS_SSG_CONFLICT: function () {
    return V;
  },
  SERVER_RUNTIME: function () {
    return eo;
  },
  SSG_FALLBACK_EXPORT_ERROR: function () {
    return en;
  },
  SSG_GET_INITIAL_PROPS_CONFLICT: function () {
    return z;
  },
  STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function () {
    return K;
  },
  TEXT_PLAIN_CONTENT_TYPE_HEADER: function () {
    return a;
  },
  UNSTABLE_REVALIDATE_RENAME_ERROR: function () {
    return ee;
  },
  WEBPACK_LAYERS: function () {
    return eu;
  },
  WEBPACK_RESOURCE_QUERIES: function () {
    return el;
  },
  WEB_SOCKET_MAX_RECONNECTIONS: function () {
    return ei;
  }
};
for (var n in r) {
  Object.defineProperty(exports, n, {
    enumerable: true,
    get: r[n]
  });
}
let a = "text/plain";
let o = "text/html; charset=utf-8";
let i = "application/json; charset=utf-8";
let s = "nxtP";
let u = "nxtI";
let l = "x-matched-path";
let c = "x-prerender-revalidate";
let f = "x-prerender-revalidate-if-generated";
let d = ".prefetch.rsc";
let p = ".segments";
let h = ".segment.rsc";
let _ = ".rsc";
let m = ".action";
let g = ".json";
let E = ".meta";
let y = ".body";
let b = "x-next-cache-tags";
let P = "x-next-revalidated-tags";
let R = "x-next-revalidate-tag-token";
let v = "next-resume";
let O = 128;
let S = 256;
let T = 1024;
let j = "_N_T_";
let A = 31536000;
let x = 4294967294;
let w = "middleware";
let N = `(?:src/)?${w}`;
let C = "proxy";
let I = `(?:src/)?${C}`;
let M = "instrumentation";
let L = "private-next-pages";
let D = "private-dot-next";
let U = "private-next-root-dir";
let $ = "private-next-app-dir";
let F = "private-next-rsc-mod-ref-proxy";
let k = "private-next-rsc-action-validate";
let B = "private-next-rsc-server-reference";
let H = "private-next-rsc-cache-wrapper";
let W = "private-next-rsc-track-dynamic-import";
let X = "private-next-rsc-action-encryption";
let G = "private-next-rsc-action-client-wrapper";
let q = "You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict";
let z = "You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps";
let Y = "You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.";
let V = "You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps";
let K = "can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props";
let Q = "pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export";
let J = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
let Z = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
let ee = "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.";
let et = "can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member";
let er = "You are using a non-standard \"NODE_ENV\" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env";
let en = "Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export";
let ea = ["app", "pages", "components", "lib", "src"];
let eo = {
  edge: "edge",
  experimentalEdge: "experimental-edge",
  nodejs: "nodejs"
};
let ei = 12;
let es = {
  shared: "shared",
  reactServerComponents: "rsc",
  serverSideRendering: "ssr",
  actionBrowser: "action-browser",
  apiNode: "api-node",
  apiEdge: "api-edge",
  middleware: "middleware",
  instrument: "instrument",
  edgeAsset: "edge-asset",
  appPagesBrowser: "app-pages-browser",
  pagesDirBrowser: "pages-dir-browser",
  pagesDirEdge: "pages-dir-edge",
  pagesDirNode: "pages-dir-node"
};
let eu = {
  ...es,
  GROUP: {
    builtinReact: [es.reactServerComponents, es.actionBrowser],
    serverOnly: [es.reactServerComponents, es.actionBrowser, es.instrument, es.middleware],
    neutralTarget: [es.apiNode, es.apiEdge],
    clientOnly: [es.serverSideRendering, es.appPagesBrowser],
    bundled: [es.reactServerComponents, es.actionBrowser, es.serverSideRendering, es.appPagesBrowser, es.shared, es.instrument, es.middleware],
    appPages: [es.reactServerComponents, es.serverSideRendering, es.appPagesBrowser, es.actionBrowser]
  }
};
let el = {
  edgeSSREntry: "__next_edge_ssr_entry__",
  metadata: "__next_metadata__",
  metadataRoute: "__next_metadata_route__",
  metadataImageMeta: "__next_metadata_image_meta__"
};