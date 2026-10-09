export function A(e) {
  return {
    type: "backend",
    init: function (e, t, s) {},
    read: function (t, s, i) {
      if (typeof e == "function") {
        if (e.length < 3) {
          try {
            var o = e(t, s);
            if (o && typeof o.then == "function") {
              o.then(function (e) {
                return i(null, e && e.default || e);
              }).catch(i);
            } else {
              i(null, o);
            }
          } catch (e) {
            i(e);
          }
          return;
        }
        e(t, s, i);
        return;
      }
      i(null, e && e[t] && e[t][s]);
    }
  };
}