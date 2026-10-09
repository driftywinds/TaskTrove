let n = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
let i = (e, t, r) => {
  let i;
  let a = n[e];
  i = typeof a == "string" ? a : t === 1 ? a.one : a.other.replace("{{count}}", t.toString());
  if (r?.addSuffix) {
    if (r.comparison && r.comparison > 0) {
      return "in " + i;
    } else {
      return i + " ago";
    }
  }
  return i;
};
function a(e) {
  return (t = {}) => {
    let r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
let o = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
let s = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
let u = {
  date: a({
    formats: {
      full: "EEEE, MMMM do, y",
      long: "MMMM do, y",
      medium: "MMM d, y",
      short: "MM/dd/yyyy"
    },
    defaultWidth: "full"
  }),
  time: a({
    formats: o,
    defaultWidth: "full"
  }),
  dateTime: a({
    formats: s,
    defaultWidth: "full"
  })
};
let l = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
let _c = (e, t, r, n) => l[e];
function d(e) {
  return (t, r) => {
    let n;
    if ((r?.context ? String(r.context) : "standalone") === "formatting" && e.formattingValues) {
      let t = e.defaultFormattingWidth || e.defaultWidth;
      let i = r?.width ? String(r.width) : t;
      n = e.formattingValues[i] || e.formattingValues[t];
    } else {
      let t = e.defaultWidth;
      let i = r?.width ? String(r.width) : e.defaultWidth;
      n = e.values[i] || e.values[t];
    }
    return n[e.argumentCallback ? e.argumentCallback(t) : t];
  };
}
let f = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
let h = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
let p = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
let m = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
let y = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
let g = {
  ordinalNumber: (e, t) => {
    let r = Number(e);
    let n = r % 100;
    if (n > 20 || n < 10) {
      switch (n % 10) {
        case 1:
          return r + "st";
        case 2:
          return r + "nd";
        case 3:
          return r + "rd";
      }
    }
    return r + "th";
  },
  era: d({
    values: {
      narrow: ["B", "A"],
      abbreviated: ["BC", "AD"],
      wide: ["Before Christ", "Anno Domini"]
    },
    defaultWidth: "wide"
  }),
  quarter: d({
    values: f,
    defaultWidth: "wide",
    argumentCallback: e => e - 1
  }),
  month: d({
    values: h,
    defaultWidth: "wide"
  }),
  day: d({
    values: p,
    defaultWidth: "wide"
  }),
  dayPeriod: d({
    values: m,
    defaultWidth: "wide",
    formattingValues: y,
    defaultFormattingWidth: "wide"
  })
};
function b(e) {
  return (t, r = {}) => {
    let n;
    let i = r.width;
    let a = i && e.matchPatterns[i] || e.matchPatterns[e.defaultMatchWidth];
    let o = t.match(a);
    if (!o) {
      return null;
    }
    let s = o[0];
    let u = i && e.parsePatterns[i] || e.parsePatterns[e.defaultParseWidth];
    let l = Array.isArray(u) ? x(u, e => e.test(s)) : v(u, e => e.test(s));
    n = e.valueCallback ? e.valueCallback(l) : l;
    return {
      value: n = r.valueCallback ? r.valueCallback(n) : n,
      rest: t.slice(s.length)
    };
  };
}
function v(e, t) {
  for (let r in e) {
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r])) {
      return r;
    }
  }
}
function x(e, t) {
  for (let r = 0; r < e.length; r++) {
    if (t(e[r])) {
      return r;
    }
  }
}
let w = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
let _ = {
  any: [/^b/i, /^(a|c)/i]
};
let k = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
let $ = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
let S = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
let I = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
let O = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
let E = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
let j = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
let U = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
export let c = {
  code: "en-US",
  formatDistance: i,
  formatLong: u,
  formatRelative: _c,
  localize: g,
  match: {
    ordinalNumber: function (e) {
      return (t, r = {}) => {
        let n = t.match(e.matchPattern);
        if (!n) {
          return null;
        }
        let i = n[0];
        let a = t.match(e.parsePattern);
        if (!a) {
          return null;
        }
        let o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
        return {
          value: o = r.valueCallback ? r.valueCallback(o) : o,
          rest: t.slice(i.length)
        };
      };
    }({
      matchPattern: /^(\d+)(th|st|nd|rd)?/i,
      parsePattern: /\d+/i,
      valueCallback: e => parseInt(e, 10)
    }),
    era: b({
      matchPatterns: w,
      defaultMatchWidth: "wide",
      parsePatterns: _,
      defaultParseWidth: "any"
    }),
    quarter: b({
      matchPatterns: k,
      defaultMatchWidth: "wide",
      parsePatterns: $,
      defaultParseWidth: "any",
      valueCallback: e => e + 1
    }),
    month: b({
      matchPatterns: S,
      defaultMatchWidth: "wide",
      parsePatterns: I,
      defaultParseWidth: "any"
    }),
    day: b({
      matchPatterns: O,
      defaultMatchWidth: "wide",
      parsePatterns: E,
      defaultParseWidth: "any"
    }),
    dayPeriod: b({
      matchPatterns: j,
      defaultMatchWidth: "any",
      parsePatterns: U,
      defaultParseWidth: "any"
    })
  },
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};