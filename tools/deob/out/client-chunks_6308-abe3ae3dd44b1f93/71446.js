export function mK(e, t, {
  checkForDefaultPrevented: r = true
} = {}) {
  return function (n) {
    e?.(n);
    if (r === false || !n.defaultPrevented) {
      return t?.(n);
    }
  };
}
if (typeof window != "undefined" && window.document) {
  window.document.createElement;
}