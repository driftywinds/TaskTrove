var t = Object.defineProperty || false;
if (t) {
  try {
    t({}, "a", {
      value: 1
    });
  } catch (e) {
    t = false;
  }
}
module.exports = t;