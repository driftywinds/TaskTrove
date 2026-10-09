Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "handleMutable", {
  enumerable: true,
  get: function () {
    return a;
  }
});
let n = require("./29568.js");
function u(e) {
  return e !== undefined;
}
function a(e, t) {
  let r = t.shouldScroll ?? true;
  let a = e.previousNextUrl;
  let l = e.nextUrl;
  if (u(t.patchedTree)) {
    let r = (0, n.computeChangedPath)(e.tree, t.patchedTree);
    if (r) {
      a = l;
      l = r;
    } else {
      l ||= e.canonicalUrl;
    }
  }
  return {
    canonicalUrl: t.canonicalUrl ?? e.canonicalUrl,
    renderedSearch: t.renderedSearch ?? e.renderedSearch,
    pushRef: {
      pendingPush: u(t.pendingPush) ? t.pendingPush : e.pushRef.pendingPush,
      mpaNavigation: u(t.mpaNavigation) ? t.mpaNavigation : e.pushRef.mpaNavigation,
      preserveCustomHistoryState: u(t.preserveCustomHistoryState) ? t.preserveCustomHistoryState : e.pushRef.preserveCustomHistoryState
    },
    focusAndScrollRef: {
      apply: !!r && (!!u(t?.scrollableSegments) || e.focusAndScrollRef.apply),
      onlyHashChange: t.onlyHashChange || false,
      hashFragment: r ? t.hashFragment && t.hashFragment !== "" ? decodeURIComponent(t.hashFragment.slice(1)) : e.focusAndScrollRef.hashFragment : null,
      segmentPaths: r ? t?.scrollableSegments ?? e.focusAndScrollRef.segmentPaths : []
    },
    cache: t.cache ? t.cache : e.cache,
    tree: u(t.patchedTree) ? t.patchedTree : e.tree,
    nextUrl: l,
    previousNextUrl: a,
    debugInfo: t.collectedDebugInfo ?? null
  };
}
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}