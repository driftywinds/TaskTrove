a, b, c) => {
    let d;
    c.d(b, {
      H7: () => j,
      Jv: () => o,
      Pq: () => h,
      aK: () => n,
      hA: () => k,
      sV: () => i
    });
    var e = c(74828);
    var f = c(87261);
    (function (a, b) {
      let c = a();
      while (true) {
        try {
          if (-parseInt("13VYIyqE") / 1 * (-parseInt("13798pOWDSt") / 2) + parseInt("4088019tVPtjV") / 3 + -parseInt("4806924bRhbUr") / 4 + parseInt("528935nMexLN") / 5 + parseInt("1903854uhEwZU") / 6 * (parseInt("28LHJxCf") / 7) + -parseInt("3804712HbvFOD") / 8 * (-parseInt("9KbaKhy") / 9) + -parseInt("13451600iljEyS") / 10 === 756081) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(p, 0);
    let g = (d = true, function (a, b) {
      let c = d ? function () {
        if (b) {
          let c = b["apply"](a, arguments);
          b = null;
          return c;
        }
      } : function () {};
      d = false;
      return c;
    })(undefined, function () {
      return g["toString"]().search("(((.+)+)+)+$")["toString"]()["constructo" + "r"](g)["search"]("(((.+)+)+)" + "+$");
    });
    g();
    let h = e.object({
      autoBackup: e["object"]({
        enabled: e["boolean"](),
        backupTime: e["string"]()["regex"](/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
        runOnInit: e["boolean"]()["optional"](),
        maxBackups: e["number"]()
      })
    });
    let i = e["object"]({
      enabled: e["boolean"](),
      requireInteraction: e["boolean"]()
    });
    let j = e.object({
      startView: e.union([e.enum(f.HV), e.literal("lastViewed")]),
      soundEnabled: e.boolean(),
      linkifyEnabled: e["boolean"](),
      markdownEnabled: e.boolean(),
      popoverHoverOpen: e["boolean"](),
      preferDayMonthFormat: e.boolean()
    });
    let k = e["object"]({
      weekStartsOn: e.union([e["literal"](0), e["literal"](1), e["literal"](2), e["literal"](3), e["literal"](4), e["literal"](5), e["literal"](6)])["optional"](),
      showWeekNumber: e.boolean().optional(),
      use24HourTime: e.boolean().optional()
    });
    let l = {};
    function m(a, b) {
      let c = p();
      return (m = function (a, b) {
        return c[a -= 348];
      })(a, b);
    }
    l["data"] = h;
    l["notificati" + "ons"] = i;
    l["general"] = j;
    l.uiSettings = k;
    let n = e["object"](l);
    let o = e["object"]({
      data: h.partial().optional(),
      notifications: i.partial().optional(),
      general: j["partial"]()["optional"](),
      uiSettings: k.partial()["optional"]()
    });
    function p() {
      let a = ["1903854uhEwZU", "boolean", "toString", "28LHJxCf", "4806924bRhbUr", "notificati", "4088019tVPtjV", "object", "ons", "13798pOWDSt", "apply", "general", "regex", "528935nMexLN", "3804712HbvFOD", "9KbaKhy", "literal", "search", "data", "constructo", "13451600iljEyS", "partial", "number", "13VYIyqE", "string", "optional", "(((.+)+)+)"];
      return (p = function () {
        return a;
      })();
    }
  },
