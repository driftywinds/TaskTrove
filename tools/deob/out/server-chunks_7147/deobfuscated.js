exports.id = 7147;
exports.ids = [7147];
exports.modules = {
  2893: function (a, b, c) {
    var d;
    var e;
    var f;
    var g;
    var h;
    var i;
    var j;
    var k;
    var l;
    var m;
    let n;
    let o = (n = true, function (a, b) {
      var c;
      var d;
      {
        let c = n ? function () {
          if (b) {
            let c = b.apply(a, arguments);
            b = null;
            return c;
          }
        } : function () {};
        n = false;
        return c;
      }
    })(this, function () {
      return o.toString().search("(((.+)+)+)+$").toString().constructor(o).search("(((.+)+)+)+$");
    });
    "use strict";
    o();
    Object.defineProperty(b, "__esModule", {
      value: true
    });
    b[function (a, b, c, d) {
      return __DECODE_0__(c - -932, b);
    }(-510, -653, -567, -493) + "ery"] = b.syncCalendars = b[function (a, b, c, d) {
      return __DECODE_0__(c - -932, b);
    }(-542, -419, -494, -410) + "ndarObject"] = b[function (a, b, c, d) {
      return __DECODE_0__(c - -932, b);
    }(-438, -545, -537, -629) + "ndarObject"] = b[function (a, b, c, d) {
      return __DECODE_0__(c - -932, b);
    }(-691, -674, -603, -702) + "ndarObject"] = b["fetchCalen" + function (a, b, c, d) {
      return __DECODE_0__(c - -932, b);
    }(-757, -658, -669, -758)] = b.fetchCalendars = b[function (a, b, c, d) {
      return __DECODE_0__(c - -932, b);
    }(-619, -582, -552, -588) + "ar"] = b.calendarMultiGet = b["calendarQu" + function (a, b, c, d) {
      return __DECODE_0__(c - -932, b);
    }(-652, -609, -616, -531)] = b.fetchCalendarUserAddresses = undefined;
    d = c(31561);
    let q = d && d.__esModule ? d : {
      default: d
    };
    let r = c(14931);
    let s = c(11559);
    let t = c(77346);
    let u = c(88756);
    let v = c(60925);
    let w = (0, q.default)(function (a, b, c, d) {
      return __DECODE_0__(c - -932, b);
    }(-610, -461, -525, -524) + "ndar");
    let x = async a => {
      var b;
      var c;
      var d;
      let {
        account: e,
        headers: f,
        headersToExclude: g,
        fetchOptions: h = {}
      } = a;
      let j = ["principalUrl", "rootUrl"];
      if (!(0, v[k(1306, 1208, 1264, 1135)])(e, j)) {
        throw Error(k(1295, 1289, 1280, 1210) + k(1200, 1187, 1091, 1150) + (0, v.findMissingFieldNames)(e, j) + " before fetchUserAdd" + k(1252, 1260, 1360, 1214));
      }
      function k(a, b, c, d) {
        return function (a, b, c, d) {
          return __DECODE_0__(c - -932, b);
        }(a - 265, a, b - 1791, d - 373);
      }
      w(k(1122, 1156, 1219, 1162) + " addresses" + k(1215, 1223, 1167, 1207) + e.principalUrl);
      let l = {
        [s["DAVNamespa" + k(1213, 1236, 1166, 1178)][k(1260, 1288, 1292, 1246)] + ":calendar-user-address-set"]: {}
      };
      let m = (await (0, t.propfind)({
        url: e.principalUrl,
        props: l,
        depth: "0",
        headers: (0, u.excludeHeaders)(f, g),
        fetchOptions: h
      })).find(a => (0, u[k(1196, 1184, 1124, 1173) + "s"])(e.principalUrl, a.href));
      if (!m || !m.ok) {
        throw Error("cannot find calendar" + k(1143, 1154, 1219, 1071) + "ses");
      }
      let n = ((d = (c = (b = m == null ? undefined : m.props) == null ? undefined : b.calendarUserAddressSet) == null ? undefined : c.href) == null ? undefined : d.filter(Boolean)) || [];
      w(k(1240, 1221, 1164, 1209) + "lendar use" + k(1179, 1120, 1103, 1220) + "s " + n);
      return n;
    };
    b[function (a, b, c, d) {
      return __DECODE_0__(c - -932, b);
    }(-439, -574, -508, -581) + "darUserAddresses"] = x;
    let y = async a => {
      let {
        url: b,
        props: c,
        filters: d,
        timezone: e,
        depth: f,
        headers: g,
        headersToExclude: h,
        fetchOptions: i = {}
      } = a;
      function j(a, b, c, d) {
        return function (a, b, c, d) {
          return __DECODE_0__(c - -932, b);
        }(a - 61, b, c - -1, d - 396);
      }
      function k(a, b, c, d) {
        return function (a, b, c, d) {
          return __DECODE_0__(c - -932, b);
        }(a - 480, a, b - 1471, d - 429);
      }
      return (0, r[k(887, 815, 715, 909) + "Query"])({
        url: b,
        body: {
          "calendar-query": (0, u[k(753, 807, 866, 771) + "sy"])({
            _attributes: (0, u[k(1043, 954, 980, 916) + k(1037, 939, 982, 970)])([s[j(-518, -461, -525, -430) + "ce"][k(992, 968, 953, 869)], s[k(997, 947, 915, 873) + "ce"][j(-546, -572, -539, -620) + k(942, 931, 912, 874)], s[j(-616, -545, -525, -567) + "ce"][k(862, 958, 918, 908) + "LE"], s[j(-467, -451, -525, -559) + "ce"].DAV]),
            [s["DAVNamespa" + j(-639, -557, -556, -602)][k(957, 972, 1006, 1010)] + ":prop"]: c,
            filter: d,
            timezone: e
          })
        },
        defaultNamespace: s[j(-494, -471, -525, -616) + "ceShort"][j(-603, -506, -504, -509)],
        depth: f,
        headers: (0, u[k(855, 789, 820, 759) + k(807, 796, 874, 720)])(g, h),
        fetchOptions: i
      });
    };
    b["calendarQu" + function (a, b, c, d) {
      return __DECODE_0__(c - -932, b);
    }(-699, -681, -616, -522)] = y;
    let z = async a => {
      function b(a, b, c, d) {
        return function (a, b, c, d) {
          return __DECODE_0__(c - -932, b);
        }(a - 410, d, b - 296, d - 450);
      }
      function c(a, b, c, d) {
        return function (a, b, c, d) {
          return __DECODE_0__(c - -932, b);
        }(a - 397, c, b - 1036, d - 203);
      }
      let {
        url: d,
        props: e,
        objectUrls: f,
        filters: g,
        timezone: h,
        depth: i,
        headers: j,
        headersToExclude: k,
        fetchOptions: l = {}
      } = a;
      return (0, r[b(-397, -360, -296, -322) + b(-194, -286, -248, -277)])({
        url: d,
        body: {
          "calendar-multiget": (0, u.cleanupFalsy)({
            _attributes: (0, u[c(495, 519, 616, 480) + c(521, 504, 498, 600)])([s.DAVNamespace[c(458, 537, 578, 491)], s.DAVNamespace[b(-299, -207, -297, -214)]]),
            [s["DAVNamespa" + c(554, 481, 443, 543)][b(-271, -203, -178, -178)] + b(-261, -249, -283, -154)]: e,
            [s[b(-179, -228, -193, -278) + c(457, 481, 446, 505)][c(501, 537, 535, 626)] + ":href"]: f,
            filter: g,
            timezone: h
          })
        },
        defaultNamespace: s[b(-133, -228, -259, -234) + b(-238, -259, -197, -313)][b(-107, -207, -196, -244)],
        depth: i,
        headers: (0, u[c(422, 354, 402, 362) + "ders"])(j, k),
        fetchOptions: l
      });
    };
    b.calendarMultiGet = z;
    b.makeCalendar = async a => {
      function b(a, b, c, d) {
        return function (a, b, c, d) {
          return __DECODE_0__(c - -932, b);
        }(a - 497, b, a - 1290, d - 294);
      }
      let {
        url: c,
        props: d,
        depth: e,
        headers: f,
        headersToExclude: g,
        fetchOptions: h = {}
      } = a;
      let j = {
        depth: e,
        ...f
      };
      let k = {
        prop: d
      };
      return (0, t[b(612, 584, 700, 639)])({
        url: c,
        init: {
          method: "MKCALENDAR",
          headers: (0, u[b(608, 650, 665, 650) + "ders"])((0, u.cleanupFalsy)(j), g),
          namespace: s[b(766, 846, 721, 850) + "ceShort"].DAV,
          body: {
            [s[b(766, 859, 857, 672) + b(735, 774, 651, 636)].CALDAV + ":mkcalendar"]: {
              _attributes: (0, u["getDAVAttr" + b(758, 824, 754, 805)])([s[b(766, 671, 750, 718) + "ce"][b(791, 873, 748, 877)], s[b(766, 799, 676, 730) + "ce"].CALDAV, s.DAVNamespace.CALDAV_APPLE]),
              set: k
            }
          }
        },
        fetchOptions: h
      });
    };
    let A = async a => {
      let {
        headers: b,
        account: c,
        props: d,
        projectedProps: e,
        headersToExclude: f,
        fetchOptions: g = {}
      } = a ?? {};
      let h = [l(1153, 1231, 1185, 1187), l(1231, 1261, 1181, 1180)];
      if (!c || !(0, v.hasFields)(c, h)) {
        if (!c) {
          throw Error("no account for fetch" + l(1323, 1380, 1447, 1371));
        }
        throw Error("account must have " + (0, v.findMissingFieldNames)(c, h) + (l(1276, 1269, 1191, 1185) + l(1158, 1221, 1217, 1122) + "rs"));
      }
      let i = {
        [s[l(1339, 1346, 1295, 1372) + l(1287, 1315, 1342, 1278)].CALDAV + ":calendar-description"]: {},
        [s[l(1438, 1346, 1432, 1421) + l(1357, 1315, 1394, 1239)][l(1280, 1367, 1347, 1314)] + ":calendar-timezone"]: {},
        [s[l(1262, 1346, 1360, 1356) + l(1380, 1315, 1280, 1347)].DAV + ":displayname"]: {},
        [s["DAVNamespa" + l(1408, 1315, 1255, 1264)].CALDAV_APPLE + ":calendar-color"]: {},
        [s["DAVNamespa" + l(1411, 1315, 1301, 1384)].CALENDAR_SERVER + ":getctag"]: {},
        [s["DAVNamespa" + l(1221, 1315, 1235, 1386)].DAV + ":resourcetype"]: {},
        [s[l(1303, 1346, 1413, 1292) + "ceShort"].CALDAV + (":supported" + l(1332, 1359, 1418, 1291) + "component-set")]: {},
        [s.DAVNamespaceShort[l(1386, 1371, 1295, 1381)] + (l(1331, 1275, 1373, 1227) + "n")]: {}
      };
      let j = {};
      function l(a, b, c, d) {
        return function (a, b, c, d) {
          return __DECODE_0__(c - -932, b);
        }(a - 108, a, b - 1870, d - 380);
      }
      j[l(1112, 1200, 1196, 1177)] = c.homeUrl;
      j.props = d ?? i;
      j.depth = "1";
      j.headers = b ?? {};
      j.fetchOptions = g;
      let m = await (0, t[l(1283, 1238, 1244, 1299)])(j);
      if (m.length === 0 || !m.some(a => a.ok) || m.some(a => a.status === 404)) {
        if (l(1210, 1209, 1121, 1174) === "RFIPV") {
          throw new _0x495c0c(l(1306, 1319, 1377, 1412) + " for fetchCalendars");
        } else {
          let a = encodeURI(c[l(1324, 1231, 1276, 1191)]);
          for (let b of [a, new URL("user", c.homeUrl).href, new URL(l(1367, 1373, 1464, 1337), a).href]) {
            if (l(1272, 1262, 1204, 1316) !== "wxHoH") {
              _0x2de88f = false;
              if (_0x52d34c) {
                return function () {
                  if (_0x165e64) {
                    let a = _0xd1009e.apply(_0x1e3c3e, arguments);
                    _0x127463 = null;
                    return a;
                  }
                };
              } else {
                return function () {};
              }
            } else {
              if (b === j.url) {
                continue;
              }
              let a = {
                ...j
              };
              a.url = b;
              if ((m = await (0, t[l(1199, 1238, 1150, 1192)])(a)).length > 0 && m.some(a => a.ok)) {
                break;
              }
            }
          }
        }
      }
      return Promise.all(m.filter(a => {
        var d;
        return Object.keys(((d = a.props) == null ? undefined : d.resourcetype) ?? {}).includes("calendar");
        {
          let a = /^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?)?)?)?$/i;
          let d = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i;
          if ((!a.test(_0x1aac9a.start) || !a.test(_0x26f46a.end)) && (!d.test(_0x5ba622.start) || !d.test(_0x2f9113.end))) {
            throw new _0xb7297a("invalid timeRange format, not in ISO8601");
          }
        }
      }).filter(a => {
        var d;
        var e;
        var f;
        var g;
        var h;
        var i;
        return (Array.isArray((e = (d = a.props) == null ? undefined : d.supportedCalendarComponentSet) == null ? undefined : e.comp) ? (f = a.props) == null ? undefined : f.supportedCalendarComponentSet.comp.map(a => a._attributes.name) : [(i = (h = (g = a.props) == null ? undefined : g.supportedCalendarComponentSet) == null ? undefined : h.comp) == null ? undefined : i._attributes.name]).some(a => Object.values(s.ICALObjects).includes(a));
      }).map(a => {
        {
          var f;
          var g;
          var j;
          var l;
          var m;
          var o;
          var p;
          var q;
          var r;
          var s;
          var t;
          var v;
          let k = (f = a.props) == null ? undefined : f.calendarDescription;
          let x = (g = a.props) == null ? undefined : g.calendarTimezone;
          return {
            description: typeof k === "string" ? k : "",
            timezone: typeof x === "string" ? x : "",
            url: new URL(a.href ?? "", c.rootUrl ?? "").href,
            ctag: (j = a.props) == null ? undefined : j.getctag,
            calendarColor: (l = a.props) == null ? undefined : l.calendarColor,
            displayName: ((m = a.props) == null ? undefined : m.displayname._cdata) ?? ((o = a.props) == null ? undefined : o.displayname),
            components: Array.isArray((p = a.props) == null ? undefined : p.supportedCalendarComponentSet.comp) ? (q = a.props) == null ? undefined : q.supportedCalendarComponentSet.comp.map(a => a._attributes.name) : [(s = (r = a.props) == null ? undefined : r.supportedCalendarComponentSet.comp) == null ? undefined : s._attributes.name],
            resourcetype: Object.keys((t = a.props) == null ? undefined : t.resourcetype),
            syncToken: (v = a.props) == null ? undefined : v.syncToken,
            ...(0, u.conditionalParam)("projectedProps", Object.fromEntries(Object.entries(a.props ?? {}).filter(([a]) => e == null ? undefined : e[a])))
          };
        }
      })[l(1346, 1337, 1361, 1246)](async a => ({
        ...a,
        reports: await (0, r.supportedReportSet)({
          collection: a,
          headers: (0, u["excludeHea" + l(1146, 1195, 1160, 1227)])(b, f),
          fetchOptions: g
        })
      })));
    };
    b.fetchCalendars = A;
    let B = async a => {
      let {
        calendar: c,
        objectUrls: d,
        filters: e,
        timeRange: f,
        headers: g,
        expand: h,
        urlFilter: i = a => !!(a == null ? undefined : a.includes(".ics")),
        useMultiGet: j = true,
        headersToExclude: k,
        fetchOptions: l = {}
      } = a;
      if (f) {
        let a = /^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?)?)?)?$/i;
        let b = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i;
        if ((!a.test(f.start) || !a.test(f.end)) && (!b.test(f.start) || !b.test(f.end))) {
          throw Error("invalid timeRange format, not in ISO8601");
        }
      }
      w("Fetching calendar objects from " + (c == null ? undefined : c.url));
      let m = ["url"];
      if (!c || !(0, v.hasFields)(c, m)) {
        if (!c) {
          throw Error("cannot fetchCalendarObjects for undefined calendar");
        }
        throw Error("calendar must have " + (0, v.findMissingFieldNames)(c, m) + " before fetchCalendarObjects");
      }
      let r = e ?? [{
        "comp-filter": {
          _attributes: {
            name: "VCALENDAR"
          },
          "comp-filter": {
            _attributes: {
              name: "VEVENT"
            },
            ...(f ? {
              "time-range": {
                _attributes: {
                  start: new Date(f.start).toISOString().slice(0, 19).replace(/[-:.]/g, "") + "Z",
                  end: new Date(f.end).toISOString().slice(0, 19).replace(/[-:.]/g, "") + "Z"
                }
              }
            } : {})
          }
        }
      }];
      let t = (d ?? (await (0, b.calendarQuery)({
        url: c.url,
        props: {
          [s.DAVNamespaceShort.DAV + ":getetag"]: {
            ...(h && f ? {
              [s.DAVNamespaceShort.CALDAV + ":expand"]: {
                _attributes: {
                  start: new Date(f.start).toISOString().slice(0, 19).replace(/[-:.]/g, "") + "Z",
                  end: new Date(f.end).toISOString().slice(0, 19).replace(/[-:.]/g, "") + "Z"
                }
              }
            } : {})
          }
        },
        filters: r,
        depth: "1",
        headers: (0, u.excludeHeaders)(g, k),
        fetchOptions: l
      })).map(a => {
        return a.href ?? "";
      })).map(a => a.startsWith("http") || !a ? a : new URL(a, c.url).href).filter(i).map(a => new URL(a).pathname);
      let x = [];
      if (t.length > 0) {
        if (!j || h) {
          x = await (0, b.calendarQuery)({
            url: c.url,
            props: {
              [s.DAVNamespaceShort.DAV + ":getetag"]: {},
              [s.DAVNamespaceShort.CALDAV + ":calendar-data"]: {
                ...(h && f ? {
                  [s.DAVNamespaceShort.CALDAV + ":expand"]: {
                    _attributes: {
                      start: new Date(f.start).toISOString().slice(0, 19).replace(/[-:.]/g, "") + "Z",
                      end: new Date(f.end).toISOString().slice(0, 19).replace(/[-:.]/g, "") + "Z"
                    }
                  }
                } : {})
              }
            },
            filters: r,
            depth: "1",
            headers: (0, u.excludeHeaders)(g, k),
            fetchOptions: l
          });
        } else {
          x = await (0, b.calendarMultiGet)({
            url: c.url,
            props: {
              [s.DAVNamespaceShort.DAV + ":getetag"]: {},
              [s.DAVNamespaceShort.CALDAV + ":calendar-data"]: {
                ...(h && f ? {
                  [s.DAVNamespaceShort.CALDAV + ":expand"]: {
                    _attributes: {
                      start: new Date(f.start).toISOString().slice(0, 19).replace(/[-:.]/g, "") + "Z",
                      end: new Date(f.end).toISOString().slice(0, 19).replace(/[-:.]/g, "") + "Z"
                    }
                  }
                } : {})
              }
            },
            objectUrls: t,
            depth: "1",
            headers: (0, u.excludeHeaders)(g, k),
            fetchOptions: l
          });
        }
      }
      return x.map(a => {
        var d;
        var e;
        var f;
        var h;
        return {
          url: new URL(a.href ?? "", c.url).href,
          etag: "" + ((d = a.props) == null ? undefined : d.getetag),
          data: ((f = (e = a.props) == null ? undefined : e.calendarData) == null ? undefined : f._cdata) ?? ((h = a.props) == null ? undefined : h.calendarData)
        };
      });
    };
    b["fetchCalen" + function (a, b, c, d) {
      return __DECODE_0__(c - -932, b);
    }(-712, -597, -669, -639)] = B;
    let C = async a => {
      let {
        calendar: b,
        iCalString: c,
        filename: d,
        headers: e,
        headersToExclude: f,
        fetchOptions: g = {}
      } = a;
      let h = {
        "content-type": "text/calendar; charset=utf-8",
        "If-None-Match": "*",
        ...e
      };
      function j(a, b, c, d) {
        return function (a, b, c, d) {
          return __DECODE_0__(c - -932, b);
        }(a - 483, c, a - 88, d - 131);
      }
      return (0, t[j(-596, -635, -686, -647) + "ct"])({
        url: new URL(d, b.url).href,
        data: c,
        headers: (0, u[j(-594, -627, -670, -602) + j(-587, -541, -614, -492)])(h, f),
        fetchOptions: g
      });
    };
    b.createCalendarObject = C;
    let G = async a => {
      var b;
      var c;
      var d;
      let {
        calendarObject: e,
        headers: f,
        headersToExclude: g,
        fetchOptions: h = {}
      } = a;
      let i = {
        "content-type": (b = 0, c = 62, d = 0, "text/calendar; charset=utf-8"),
        ...f
      };
      return (0, t.updateObject)({
        url: e.url,
        data: e.data,
        etag: e.etag,
        headers: (0, u.excludeHeaders)(i, g),
        fetchOptions: h
      });
    };
    b[e = 0, f = -624, g = 0, "updateCalendarObject"] = G;
    let I = async a => {
      let {
        calendarObject: b,
        headers: c,
        headersToExclude: d,
        fetchOptions: e = {}
      } = a;
      return (0, t.deleteObject)({
        url: b.url,
        etag: b.etag,
        headers: (0, u.excludeHeaders)(c, d),
        fetchOptions: e
      });
    };
    b["deleteCale" + (h = 0, i = -671, j = 0, "ndarObject")] = I;
    let J = async a => {
      let {
        oldCalendars: d,
        account: e,
        detailedResult: f,
        headers: g,
        headersToExclude: h,
        fetchOptions: i = {}
      } = a;
      if (!e) {
        throw Error("Must have account before syncCalendars");
      }
      let k = d ?? e.calendars ?? [];
      let l = await (0, b.fetchCalendars)({
        account: e,
        headers: (0, u.excludeHeaders)(g, h),
        fetchOptions: i
      });
      let m = l.filter(a => k.every(b => !(0, u.urlContains)(b.url, a.url)));
      w("new calendars: " + m.map(a => a.displayName));
      let o = k.reduce((a, b) => {
        {
          let e = l.find(a => (0, u.urlContains)(a.url, b.url));
          if (e && (e.syncToken && "" + e.syncToken != "" + b.syncToken || e.ctag && "" + e.ctag != "" + b.ctag)) {
            return [...a, e];
          } else {
            return a;
          }
        }
      }, []);
      w("updated calendars: " + o.map(a => a.displayName));
      let p = await Promise.all(o.map(async a => {
        let f = {
          ...a
        };
        f.objectMultiGet = b.calendarMultiGet;
        return await (0, r.smartCollectionSync)({
          collection: f,
          method: "webdav",
          headers: (0, u.excludeHeaders)(g, h),
          account: e,
          fetchOptions: i
        });
        if (!_0x3f30e4) {
          throw new _0x236741("cannot fetchCalendarObjects for undefined calendar");
        }
        throw new _0x3e976b("calendar must have " + (0, _0x23111f.findMissingFieldNames)(_0x1ce599, _0x2f8879) + " before fetchCalendarObjects");
      }));
      let q = k.filter(a => l.every(b => !(0, u.urlContains)(b.url, a.url)));
      w("deleted calendars: " + q.map(a => a.displayName));
      let s = k.filter(a => l.some(b => (0, u.urlContains)(b.url, a.url) && (b.syncToken && "" + b.syncToken != "" + a.syncToken || b.ctag && "" + b.ctag != "" + a.ctag)));
      let t = {
        created: m,
        updated: o,
        deleted: q
      };
      if (f) {
        return t;
      } else {
        return [...s, ...m, ...p];
      }
    };
    b.syncCalendars = J;
    let K = async a => {
      let {
        url: c,
        timeRange: d,
        depth: e,
        headers: f,
        headersToExclude: g,
        fetchOptions: h = {}
      } = a;
      if (d) {
        let a = /^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?)?)?)?$/i;
        let c = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i;
        if ((!a.test(d.start) || !a.test(d.end)) && (!c.test(d.start) || !c.test(d.end))) {
          throw Error("invalid timeRange format, not in ISO8601");
        }
      } else {
        throw Error("timeRange is required");
      }
      return (await (0, r.collectionQuery)({
        url: c,
        body: {
          "free-busy-query": (0, u.cleanupFalsy)({
            _attributes: (0, u.getDAVAttribute)([s.DAVNamespace.CALDAV]),
            [s.DAVNamespaceShort.CALDAV + ":time-range"]: {
              _attributes: {
                start: new Date(d.start).toISOString().slice(0, 19).replace(/[-:.]/g, "") + "Z",
                end: new Date(d.end).toISOString().slice(0, 19).replace(/[-:.]/g, "") + "Z"
              }
            }
          })
        },
        defaultNamespace: s.DAVNamespaceShort.CALDAV,
        depth: e,
        headers: (0, u.excludeHeaders)(f, g),
        fetchOptions: h
      }))[0];
    };
    b[k = 0, l = -574, m = 0, "freeBusyQuery"] = K;
  },
  7147: (a, b, c) => {
    "use strict";

    let d;
    let e;
    let f;
    let g;
    let h;
    function i() {
      var a = ["26041QhXShG", "3lQANoS", "12qIBgkX", "8868460oiocWW", "constructo", "21XRoQdC", "14870207bKzUrc", "apply", "(((.+)+)+)", "toString", "50MbqHyT", "374000mpLUwV", "search", "3731640YInnPE", "3187524ryprRE", "54yirgUg", "474366BCojEb"];
      return (i = function () {
        return a;
      })();
    }
    function j(a, b) {
      var c = i();
      return (j = function (a, b) {
        return c[a -= 411];
      })(a, b);
    }
    c.d(b, {
      TU: () => O,
      s3: () => s,
      Ev: () => C,
      Ze: () => y,
      AO: () => S
    });
    (function (a, b) {
      var c = a();
      for (;;) {
        try {
          if (parseInt(j(419, 355)) / 1 * (-parseInt(j(412, 577)) / 2) + -parseInt(j(420, 592)) / 3 * (-parseInt(j(416, 593)) / 4) + parseInt(j(415, 591)) / 5 + parseInt(j(418, 347)) / 6 * (-parseInt(j(424, 343)) / 7) + -parseInt(j(413, 346)) / 8 * (-parseInt(j(417, 587)) / 9) + parseInt(j(422, 602)) / 10 + parseInt(j(425, 358)) / 11 * (-parseInt(j(421, 595)) / 12) === 470510) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(i, 0);
    var k;
    var l;
    var m;
    var n = (k = true, function (a, b) {
      var c = k ? function () {
        if (b) {
          var c = b[j(426, 595)](a, arguments);
          b = null;
          return c;
        }
      } : function () {};
      k = false;
      return c;
    })(undefined, function () {
      return n[j(411, 966)]()[j(414, -217)](j(427, 992) + "+$").toString()[j(423, -203) + "r"](n)[j(414, -218)](j(427, 982) + "+$");
    });
    n();
    var o = c(25011);
    function p(a, b) {
      let c = r();
      return (p = function (a, b) {
        return c[a -= 436];
      })(a, b);
    }
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
          var m;
          var n;
          if (parseInt((d = -374, e = -358, p(d - -850, e))) / 1 * (-parseInt(p(468, 58)) / 2) + parseInt((f = -394, p(f - -850, -391))) / 3 * (parseInt((g = -378, h = -392, p(g - -850, h))) / 4) + -parseInt((i = -370, p(i - -850, -384))) / 5 + parseInt((j = -405, p(j - -850, -391))) / 6 * (-parseInt(p(446, 41)) / 7) + -parseInt(p(457, 28)) / 8 * (-parseInt(p(437, 5)) / 9) + -parseInt((k = -402, l = -407, p(k - -850, l))) / 10 * (-parseInt((m = -369, n = -347, p(m - -850, n))) / 11) + parseInt(p(478, 62)) / 12 === 458565) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(r, 0);
    let q = (d = true, function (a, b) {
      let c = d ? function () {
        if (b) {
          let c = b[p(453, 34)](a, arguments);
          b = null;
          return c;
        }
      } : function () {};
      d = false;
      return c;
    })(undefined, function () {
      return q[p(451, 236)]().search(p(465, 233) + "+$")[p(451, 1295)]()[p(443, 248) + "r"](q).search(p(465, 236) + "+$");
    });
    function r() {
      let a = ["createCale", "ountType", "darObjects", "692viIDZe", "detailed c", "authMethod", "nt does no", "44719ZBODPh", "create", "5493756Rdtpks", "ult=true t", "2086210ueqIBG", "33IKnAfH", "t support ", "login", "tsdav clie", "serverUrl", "calendarMu", "11637UaxtNc", "caldav", "defaultAcc", "syncCalend", "fetchOptio", "Expected d", "constructo", "updateCale", "2526204PXBMTS", "14xTzENi", "ndarObject", "1176790NHqGyE", "isDetailed", "ltiGet", "toString", "deleteCale", "apply", "ars", "Sync", "15714SNNcTW", "1112DBxGSL", "credential", "hange sets", "client", "fetchCalen", "smartColle", "etailedRes", "bind", "(((.+)+)+)", "o return c", "Basic", "8evbEOJ"];
      return (r = function () {
        return a;
      })();
    }
    q();
    class s {
      constructor(a) {
        var b;
        this[524, 520, b = 570, p(460, b)] = a;
      }
      static async [p(477, -112)](a) {
        let b = {};
        function c(a, b, c, d) {
          return p(b - 1526 - -602, c);
        }
        b[c(1421, 1409, 1411, 1423)] = a[e(-105, -94, -73, -69)];
        b[c(1386, 1382, 1381, 1382) + "s"] = a[c(1358, 1382, 1394, 1377) + "s"];
        b.authMethod = a[c(1389, 1398, 1397, 1408)] ?? e(-96, -112, -89, -110);
        b[c(1376, 1363, 1384, 1374) + "ountType"] = a["defaultAcc" + e(-126, -109, -132, -93)] ?? e(-131, -141, -141, -123);
        b[c(1380, 1365, 1386, 1384) + "ns"] = a[c(1386, 1365, 1370, 1357) + "ns"];
        let d = new o.DAVClient(b);
        function e(a, b, c, d) {
          return p(b - 23 - -602, c);
        }
        await d[c(1419, 1407, 1397, 1420)]();
        return new s(d);
      }
      get [p(436, -167) + p(450, 353)]() {
        function a(a, b, c, d) {
          return p(d - 951 - -602, a);
        }
        return this[a(811, 807, 828, 809)]["calendarMu" + a(792, 791, 780, 799)][a(833, 834, 790, 813)](this[a(820, 800, 813, 809)]);
      }
      get [p(462, 333) + "ctionSync"]() {
        function a(a, b, c, d) {
          return p(a - 114 - -107, d);
        }
        return this.client[a(469, 477, 451, 487) + "ctionSync"][a(471, 470, 479, 448)](this[p(460, 589)]);
      }
      async [p(440, -178) + p(454, 368)](a) {
        let b = this[e(1439, 1450, 1471, 1439)][e(1448, 1430, 1431, 1410) + d(872, 880, 884, 867)][e(1434, 1454, 1460, 1470)](this[d(914, 875, 890, 908)]);
        if (!this[e(1453, 1439, 1439, 1444) + e(1447, 1445, 1435, 1425)](b)) {
          throw Error(e(1483, 1474, 1496, 1474) + d(909, 911, 905, 914) + e(1463, 1472, 1487, 1457) + d(923, 905, 903, 921) + "alendar sync");
        }
        let c = await b(a);
        function d(a, b, c, d) {
          return p(c - 537 - -107, b);
        }
        function e(a, b, c, d) {
          return p(b - 1097 - -107, c);
        }
        if (Array.isArray(c)) {
          throw Error(e(1407, 1432, 1456, 1442) + e(1438, 1453, 1474, 1466) + d(932, 909, 909, 927) + e(1432, 1456, 1434, 1465) + d(875, 878, 889, 873));
        }
        return c;
      }
      [p(461, -149) + p(471, 339)](a) {
        return this[p(460, 1388)][p(461, 1367) + p(471, 594)](a);
      }
      [p(469, -119) + p(447, -152)](a) {
        function b(a, b, c, d) {
          return p(c - 951 - -602, d);
        }
        return this[p(460, 800)][b(837, 808, 818, 835) + b(811, 771, 796, 789)](a);
      }
      [p(444, 322) + p(447, 323)](a) {
        return this[p(460, -363)].updateCalendarObject(a);
      }
      [p(452, -137) + p(447, 361)](a) {
        function b(a, b, c, d) {
          return p(c - -766 - -107, b);
        }
        return this[b(-389, -428, -413, -435)][b(-426, -428, -421, -441) + b(-422, -421, -426, -441)](a);
      }
      [p(449, -175) + p(455, 351)](a) {
        return typeof a == "function";
      }
    }
    var t = c(55511);
    var u = c(75754);
    var v = c(78306);
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
          if (-parseInt((d = -276, e = -276, z(d - -604, e))) / 1 + -parseInt(z(294, 12)) / 2 + -parseInt((f = -251, g = -277, z(f - -604, g))) / 3 * (parseInt(z(344, 93)) / 4) + parseInt((h = -280, i = -290, z(h - -604, i))) / 5 + parseInt(z(347, 50)) / 6 + -parseInt(z(337, 110)) / 7 + parseInt((j = -314, z(j - -604, -277))) / 8 === 841084) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(x, 0);
    let w = (e = true, function (a, b) {
      let c = e ? function () {
        if (b) {
          if (z(300, 1123) !== z(300, 1185)) {
            return _0xc657ab[z(331, 1184)]().search(z(345, 1184) + "+$").toString()[z(326, 307) + "r"](_0x3fced3)[z(359, 349)](z(345, 1235) + "+$");
          }
          {
            let c = b[z(357, 337)](a, arguments);
            b = null;
            return c;
          }
        }
      } : function () {};
      e = false;
      return c;
    })(undefined, function () {
      return w.toString().search(z(345, 331) + "+$")[z(331, 747)]().constructor(w).search("(((.+)+)+)+$");
    });
    function x() {
      let a = ["search", "map", "zone", "split", "Invalid al", "tes", "join", "endsWith", "endDate", "11117976gcQwUr", "Year", "getUTCMont", "descriptio", "354244yxogWc", "getUTCMinu", "location", "l-day date", "bcomponent", "Event", "nGxef", "VALUE=DATE", "end", "test", "fESlJ", "ror", "Type", "zOZOd", "match", "name", "endInputTy", "toISOStrin", "tzid", "getUTCDate", "replace", "type", "properties", "start", "utc", "title", "PwoXg", "trim", "toJSDate", "vevent", "7190130AsDDhP", "parameters", "constructo", "filter", "1253361MZZlfP", "Component", "components", "toString", "tasktrove-", "CS payload", "ttXbY", "gDPcr", "Failed to ", "9593451SuBNky", "uid", "ync", "isArray", "startsWith", " value: ", "MWQLz", "324lnePmK", "(((.+)+)+)", "getUTCHour", "6986214QEeqIV", "allDay", "string", "diwCl", "startDate", "value", "12966ZyBlIh", "parse", "getUTCFull", "summary", "apply", "includes"];
      return (x = function () {
        return a;
      })();
    }
    w();
    let y = a => {
      try {
        var b;
        var c;
        var d;
        var e;
        var f;
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
        b = -664;
        c = -645;
        if (z(c - -949, b) === z(307, 942)) {
          throw new _0x2b70a1((d = -701, e = -664, z(e - -949, d) + z(297, 932) + z(342, 1018) + _0x1f8c68));
        }
        {
          let b = u.A.parse(a);
          if (!Array[f = -601, g = -609, z(g - -949, f)](b)) {
            h = -599;
            if (z(h - -949, -572) !== (i = -627, z(334, i))) {
              return null;
            }
            if (_0x33756b) {
              let a = _0x5b3f6e[z(357, 997)](_0x5c2128, arguments);
              _0x4974cc = null;
              return a;
            }
          }
          let c = new u.A.Component(b).getFirstSubcomponent((j = -626, z(j - -949, -657)));
          if (!c) {
            return null;
          }
          let d = new u.A[z(299, 986)](c);
          let e = d[z(351, 990)].toJSDate();
          let s = d[z(289, 948)][z(322, 1008)]();
          return {
            start: e[k = -629, z(311, k) + "g"](),
            end: s[l = -640, m = -638, z(m - -949, l) + "g"](),
            timezone: d.startDate[n = -603, o = -588, z(o - -949, n)].tzid,
            summary: d.summary,
            description: d[z(293, 940) + "n"],
            location: d[p = -657, z(296, p)],
            uid: d[q = -577, r = -611, z(r - -949, q)],
            allDay: (a => {
              var b;
              var c;
              var d;
              var e;
              var f;
              let g = a[function (a, b, c, d) {
                return z(c - 101, d);
              }(430, 385, 415, 452)](/\r?\n[ \t]/g, "")[d = 0, e = 0, f = 429, z(308, 429)](/(?:^|\n)DTSTART([^:]*):([^\n]+)/);
              if (!g) {
                return false;
              }
              let [, h = "", i = ""] = g;
              let j = i[b = -144, z(321, b)]();
              return !!h[c = -103, z(358, c)](z(301, 433)) || /^\d{8}$/[z(303, 421)](j);
            })(a)
          };
        }
      } catch {
        return null;
      }
    };
    function z(a, b) {
      let c = x();
      return (z = function (a, b) {
        return c[a -= 284];
      })(a, b);
    }
    let A = a => {
      let b = new Date(a);
      return [b[z(355, -69) + z(291, -699)](), b[z(292, -159) + "h"]() + 1, b[z(313, -687)](), b[z(346, -648) + "s"](), b[z(295, -702) + z(286, -135)]()];
    };
    let B = a => {
      var b;
      var c;
      var d;
      var e;
      var f;
      var g;
      var h;
      var i;
      var j;
      var k;
      var l;
      let m = a[function (a, b, c, d) {
        return z(c - 714, b);
      }(1028, 994, 1022, 1011)](/^(\d{4})-(\d{2})-(\d{2})/);
      if (!m) {
        throw Error("Invalid al" + (b = 0, c = 0, z(297, -570)) + (d = 0, e = 1022, f = 0, z(342, 1022)) + a);
      }
      let n = Number(m[1]);
      let o = Number(m[2]);
      let p = Number(m[3]);
      if (!n || !o || !p) {
        throw Error((g = 0, h = 1012, i = 0, z(285, 1012) + "l-day date" + (j = 0, k = 1078, l = 0, z(342, 1078)) + a));
      }
      return [n, o, p];
    };
    let C = a => {
      var b;
      var c;
      var d;
      var e;
      var f;
      var g;
      var h;
      var i;
      var j;
      let k = {};
      k["startInput" + (b = 0, c = 0, z(306, -637))] = (d = 162, e = 0, f = 0, z(318, 162));
      k[g = 0, h = 0, z(310, -638) + "pe"] = (i = 0, j = 0, z(318, -623));
      let l = {
        start: a.allDay ? B(a[z(317, -605)]) : A(a.start),
        end: a[z(348, 167)] ? B(a[z(302, -637)]) : A(a.end),
        ...(a[z(348, -587)] ? {} : k),
        title: a[z(319, 180)],
        description: a[z(293, -662) + "n"],
        location: a[z(296, 160)],
        productId: z(332, -648) + "calendar-s" + z(339, -650)
      };
      if (a.uid) {
        l[z(338, 190)] = a.uid;
      }
      let {
        error: m,
        value: n
      } = (0, v.lh)(l);
      if (m || !n) {
        if (z(343, -589) !== "MWQLz") {
          let a = _0x1c3c63[z(354, 221)](_0x5f5437);
          if (!_0x1f442a.isArray(a)) {
            return null;
          }
          let b = new _0x285e51[z(329, 199)](a)["getFirstSu" + z(298, -645)](z(323, -607));
          if (!b) {
            return null;
          }
          let c = new _0xd8252c[z(299, 183)](b);
          let d = c[z(351, 167)].toJSDate();
          let e = c.endDate[z(322, 166)]();
          return {
            start: d[z(311, 161) + "g"](),
            end: e[z(311, -610) + "g"](),
            timezone: c[z(351, 171)][z(361, 194)][z(312, 131)],
            summary: c[z(356, 199)],
            description: c.description,
            location: c[z(296, -638)],
            uid: c.uid,
            allDay: _0x364144(_0x5b06ac)
          };
        }
        throw Error(z(336, 144) + "generate I" + z(333, -592) + ": " + (m ?? "unknown er" + z(305, 151)));
      }
      return (a => {
        var b;
        var c;
        var d;
        var e;
        var f;
        var g;
        let h = a[b = 0, c = 0, d = 261, z(284, 261)](/\r?\n/)[e = 0, f = 0, g = 337, z(327, 337)](a => !a[function (a, b, c, d) {
          return z(a - -497, b);
        }(-156, -129, -167, -126)]("METHOD"))[z(287, 284)]("\r\n");
        if (a[z(288, -226)]("\r\n")) {
          return h + "\r\n";
        } else {
          return h;
        }
      })(n);
    };
    (function (a, b) {
      let c = a();
      while (true) {
        try {
          if (parseInt(E(383, 1069)) / 1 * (parseInt(E(382, 211)) / 2) + parseInt(E(390, 204)) / 3 + -parseInt(E(392, 1070)) / 4 + parseInt(E(386, 1081)) / 5 * (-parseInt(E(400, 225)) / 6) + -parseInt(E(391, 1082)) / 7 * (parseInt(E(385, 1078)) / 8) + parseInt(E(387, 216)) / 9 * (parseInt(E(381, 198)) / 10) + parseInt(E(393, 221)) / 11 === 388813) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(F, 0);
    let D = (f = true, function (a, b) {
      let c = f ? function () {
        if (b) {
          let c = b.apply(a, arguments);
          b = null;
          return c;
        }
      } : function () {};
      f = false;
      return c;
    })(undefined, function () {
      return D[E(380, -588)]().search("(((.+)+)+)+$").toString().constructor(D)[E(398, -573)](E(397, -569) + "+$");
    });
    function E(a, b) {
      let c = F();
      return (E = function (a, b) {
        return c[a -= 380];
      })(a, b);
    }
    function F() {
      let a = ["4440940jeEKrK", "962400LMqjwp", "6996374fOrVUP", "apply", "mRPGa", "filter", "(((.+)+)+)", "search", "length", "24ENelZl", "split", "toString", "328520PPfbMu", "186984fqwxZB", "4qZURQK", "pathname", "8tpDwwM", "591010vHKVsY", "27sfnVfC", "event.ics", "kAZbL", "1884249wHCKyV"];
      return (F = function () {
        return a;
      })();
    }
    D();
    let G = (a, b) => {
      try {
        return new URL(b, a)[E(380, 1033)]();
      } catch {
        return b;
      }
    };
    let H = a => {
      try {
        let b = new URL(a)[E(384, 223)].split("/")[E(396, 228)](Boolean);
        return b[b[E(399, 887)] - 1] || E(388, 869);
      } catch {
        if (E(395, 877) !== E(389, 226)) {
          let b = a.split("/")[E(396, 877)](Boolean);
          return b[b[E(399, 236)] - 1] || "event.ics";
        }
        if (_0x3fb262) {
          let a = _0x161831[E(394, 888)](_0x52658c, arguments);
          _0x45fe14 = null;
          return a;
        }
      }
    };
    function I(a, b) {
      let c = N();
      return (I = function (a, b) {
        return c[a -= 183];
      })(a, b);
    }
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
          if (parseInt(I(295, 1049)) / 1 + -parseInt((d = -540, e = -569, I(e - -784, d))) / 2 * (-parseInt(I(243, 1067)) / 3) + -parseInt(I(210, 926)) / 4 + parseInt(I(283, 1026)) / 5 + -parseInt((f = -479, I(287, f))) / 6 + parseInt((g = -505, h = -547, I(h - -784, g))) / 7 * (parseInt((i = -556, j = -560, I(j - -784, i))) / 8) + -parseInt(I(218, 965)) / 9 === 208279) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(N, 0);
    let J = (g = true, function (a, b) {
      if (I(268, 414) !== "rffVr") {
        let c = g ? function () {
          if (b) {
            let c = b[I(212, 718)](a, arguments);
            b = null;
            return c;
          }
        } : function () {};
        g = false;
        return c;
      }
      this[I(277, -251) + "e"] = _0x4d5d4e;
    })(undefined, function () {
      return J[I(236, 356)]()[I(256, 132)](I(235, 70) + "+$")[I(236, 362)]()[I(229, 80) + "r"](J).search("(((.+)+)+)+$");
    });
    J();
    let K = a => {
      var b;
      var c;
      var d;
      var e;
      var f;
      var g;
      return {
        url: a[I(198, 564)],
        ctag: a[b = 59, c = 0, d = 0, I(251, 59)],
        syncToken: a[I(185, 615)],
        displayName: a[e = 123, f = 0, g = 0, I(276, 123)],
        timezone: a[I(265, 669)]
      };
    };
    let L = (a, b, c) => {
      let d = G(c, a[g(194, 134, 156, 102)]);
      function e(a, b, c, d) {
        return I(a - -515 - -142, b);
      }
      let f = typeof a[g(165, 217, 166, 208)] === e(-384, -376, -403, -421) ? y(a[g(174, 200, 166, 203)]) : null;
      function g(a, b, c, d) {
        return I(c - 100 - -142, a);
      }
      return {
        id: (0, t.randomUUID)(),
        calendarId: b,
        url: d,
        etag: a[g(169, 221, 222, 202)] ?? "",
        data: typeof a[g(111, 154, 166, 211)] === g(190, 240, 231, 231) ? a[e(-449, -441, -399, -419)] : "",
        start: f?.[e(-377, -416, -369, -326)],
        end: f?.[e(-441, -385, -411, -430)],
        summary: f?.[g(295, 243, 247, 278)],
        description: f?.[g(134, 161, 155, 121) + "n"],
        location: f?.location,
        timezone: f?.timezone,
        uid: f?.[e(-471, -454, -456, -469)],
        allDay: f?.[e(-388, -392, -383, -401)]
      };
    };
    let M = () => ({
      createdCalendars: 0,
      updatedCalendars: 0,
      deletedCalendars: 0,
      createdObjects: 0,
      updatedObjects: 0,
      deletedObjects: 0
    });
    function N() {
      let a = ["url", "smartColle", "ects", "endar", "UTC", "arObjects", "bject data", "updateCale", "updatedAt", "create cal", "data", "JpgBF", "305540lKjgGB", "delete cal", "apply", "pLqpW", "Calendar o", "2962HHdAVP", "end", "statusText", "2506032NXcSUm", "updatedCal", "ction", "TJvnU", "changes", "client", "824EemygN", "darObjects", "insertCale", "ndars", "deletedCal", "constructo", "get", "status", "calendarMu", "createdCal", "filter", "(((.+)+)+)", "toString", "13559UyIdkj", "map", "text", "includes", "sByUrls", "withTransa", "459XCKTjD", "createdObj", "pushLocalC", "update cal", "deleted", "userId", "ndarMetada", "hanges", "ctag", "location", "ation", "ndarObject", "endars", "search", "webdav", "Remote cal", "CcyOP", "source", "defaultTim", "syncFromRe", "listCalend", "etag", "timezone", "endar obje", "VFWDL", "UoplQ", "allDay", "sByCalenda", "ed for cre", "updatedObj", "string", "ject", "toISOStrin", "name", "persistenc", "deletedObj", "ltiGet", "start", "created", "UrMOo", "1627035AZDCaM", "ctionSync", "): ", "Failed to ", "1962666IAIstS", " is requir", "summary", "fetchCalen", "ct (", "ars", "deleteCale", "catch", "138712OZeqWW", "createCale", "length", "mote", "syncToken", "uid", "ByUrl", "ezone", "calendarId", "updated", "displayNam", "credential", ".ics", "calendarOb", "headers", "TigCU", "descriptio"];
      return (N = function () {
        return a;
      })();
    }
    class O {
      constructor(a) {
        this[function (a, c, d, e) {
          115;
          231;
          return I(277, 1067);
        }(0, 0, 0, 0) + "e"] = a;
      }
      async [I(262, 664) + I(184, 64)](a) {
        let b = (a.now ?? new Date()).toISOString();
        let c = await this[f(7, 4, -11, -50) + "e"][f(-12, -57, -25, -60) + f(-18, -46, 4, 5)](a[g(-444, -392, -431, -405)], a[f(-50, -27, -28, -46)]);
        let d = await a[f(-57, -82, -65, -36)]["syncCalend" + f(-45, -44, 4, 33)]({
          oldCalendars: c[g(-440, -402, -415, -427)](K),
          detailedResult: true
        });
        let e = M();
        function f(a, b, c, d) {
          return I(c - -146 - -142, a);
        }
        function g(a, b, c, d) {
          return I(b - -498 - -142, d);
        }
        let h = new Map(c[g(-376, -402, -397, -353)](a => [a.url, a]));
        await this.persistence["withTransa" + g(-460, -420, -403, -411)](async c => {
          if (d[f(264, 302, 273, 288)][i(863, 926, 913, 898)] > 0) {
            if (i(873, 941, 946, 928) === "pLqpW") {
              let a = d[i(1007, 965, 1016, 962)].map(a => a[f(192, 215, 224, 237)]);
              let b = a[f(311, 249, 264, 244)](a => h[i(998, 963, 950, 945)](a))[f(317, 288, 260, 310)](a => !!a);
              if (b[f(186, 215, 209, 174)] > 0) {
                if (f(180, 196, 235, 199) !== f(222, 252, 235, 214)) {
                  if (_0x524376) {
                    let a = _0x2fdc89.apply(_0x587071, arguments);
                    _0x4cd492 = null;
                    return a;
                  }
                } else {
                  let d = b[i(981, 962, 985, 953)](a => a.id);
                  for (let a of b) {
                    let b = await this[i(975, 1042, 1008, 992) + "e"][f(292, 316, 289, 340) + f(258, 198, 229, 236)](a.id, c);
                    e[f(256, 340, 304, 314) + f(206, 215, 226, 213)] += b.length;
                  }
                  await this[f(306, 341, 303, 268) + "e"]["deleteCalendarObject" + f(352, 347, 296, 330) + "rIds"](d, c);
                  await this[i(946, 993, 1022, 992) + "e"][f(310, 346, 319, 332) + "ndarsByUrls"](a, c);
                  e[i(965, 1000, 939, 943) + "endars"] += b[i(947, 880, 893, 898)];
                }
              }
            } else {
              let a = _0x469a66(_0xfcb71c, _0xdb2255[i(908, 924, 910, 913)]);
              let b = typeof _0x2bc91d[i(940, 958, 962, 923)] === i(993, 945, 933, 988) ? _0x241cfd(_0x52bb05[i(918, 928, 941, 923)]) : null;
              return {
                id: _0x2c7435(),
                calendarId: _0x4f97f4,
                url: a,
                etag: _0x38cbc6[f(326, 308, 290, 328)] ?? "",
                data: typeof _0x2e62aa.data === i(1031, 1030, 1019, 988) ? _0x946858[f(284, 215, 234, 217)] : "",
                start: b?.[i(961, 991, 1048, 995)],
                end: b?.end,
                summary: b?.[f(333, 288, 315, 340)],
                description: b?.description,
                location: b?.location,
                timezone: b?.[i(977, 951, 956, 980)],
                uid: b?.[f(194, 245, 212, 233)],
                allDay: b?.[i(988, 1033, 935, 984)]
              };
            }
          }
          function f(a, b, c, d) {
            return g(a - 90, c - 666, c - 222, b);
          }
          for (let g of d[f(271, 289, 307, 261)]) {
            let d = {
              id: (0, t.randomUUID)(),
              userId: a[i(917, 952, 989, 963)],
              timezone: g[i(1005, 925, 935, 980)] || a[f(265, 269, 287, 341) + f(240, 189, 214, 265)] || "UTC",
              name: typeof g[f(254, 203, 217, 166) + "e"] === f(289, 340, 299, 305) ? g[i(849, 860, 869, 906) + "e"] : "Remote cal" + i(938, 949, 890, 916),
              source: a.source,
              ctag: g[f(320, 224, 277, 313)] ?? "",
              syncToken: g[f(176, 223, 211, 254)] ?? "",
              url: g[f(265, 245, 224, 233)],
              credentialId: a[f(269, 178, 218, 238)].id,
              createdAt: b,
              updatedAt: b
            };
            await this[f(262, 311, 303, 320) + "e"][f(239, 196, 252, 201) + i(971, 981, 935, 942)]([d], c);
            e[f(224, 306, 259, 312) + i(1020, 968, 984, 970)] += 1;
            let h = {
              calendar: g
            };
            let j = (await a[i(947, 928, 976, 938)][i(998, 1024, 952, 1005) + i(990, 890, 944, 940)](h))[f(206, 303, 260, 243)](a => a[i(935, 889, 962, 913)][i(990, 991, 940, 955)](i(945, 890, 928, 908)))[f(228, 254, 264, 253)](a => L(a, d.id, g[f(278, 184, 224, 270)]));
            if (j[i(858, 885, 888, 898)] > 0) {
              await this[f(347, 279, 303, 250) + "e"][f(256, 254, 252, 231) + "ndarObjects"](j, c);
              e["createdObj" + f(268, 217, 226, 251)] += j[i(906, 907, 930, 898)];
            }
          }
          function i(a, b, c, d) {
            return g(a - 488, d - 1355, c - 30, a);
          }
          for (let g of d.updated) {
            let d = h[i(991, 955, 962, 945)](g[f(188, 252, 224, 197)]);
            if (!d) {
              let d = {
                id: (0, t.randomUUID)(),
                userId: a.userId,
                timezone: g[f(330, 256, 291, 315)] || a[f(286, 326, 287, 299) + f(248, 192, 214, 243)] || i(927, 948, 884, 917),
                name: typeof g[f(160, 227, 217, 274) + "e"] === f(331, 270, 299, 258) ? g.displayName : f(270, 286, 284, 271) + f(200, 240, 227, 261),
                source: a[i(1015, 1001, 1005, 975)],
                ctag: g.ctag ?? "",
                syncToken: g[f(243, 244, 211, 230)] ?? "",
                url: g[f(226, 225, 224, 194)],
                credentialId: a[f(238, 247, 218, 269)].id,
                createdAt: b,
                updatedAt: b
              };
              await this[i(999, 1001, 938, 992) + "e"][f(215, 243, 252, 270) + i(993, 987, 910, 942)]([d], c);
              e[i(996, 953, 942, 948) + i(922, 935, 982, 970)] += 1;
              continue;
            }
            let j = await this[i(1030, 979, 1013, 992) + "e"][f(324, 337, 289, 235) + f(184, 263, 229, 234)](d.id, c);
            let {
              objects: k
            } = await a[f(288, 302, 249, 247)][f(254, 216, 225, 247) + i(963, 1054, 1052, 999)]({
              collection: {
                url: d.url,
                ctag: d[f(242, 293, 277, 289)],
                syncToken: d[f(209, 265, 211, 160)],
                timezone: d[f(289, 300, 291, 344)],
                objectMultiGet: a.client[i(942, 907, 896, 947) + f(314, 337, 305, 331)],
                objects: j[f(303, 227, 264, 312)](a => ({
                  url: a[i(930, 948, 920, 913)],
                  etag: a.etag,
                  data: a[i(887, 968, 977, 923)]
                }))
              },
              method: f(294, 256, 283, 317),
              detailedResult: true
            });
            let l = k[f(363, 286, 307, 335)][f(299, 293, 260, 257)](a => a[i(891, 961, 965, 913)][f(224, 322, 266, 232)](i(911, 893, 927, 908)))[f(312, 218, 264, 260)](a => L(a, d.id, d[i(928, 873, 937, 913)]));
            if (l.length > 0) {
              if (f(278, 262, 222, 224) !== "EpnTq") {
                await this[f(266, 311, 303, 274) + "e"][i(985, 996, 992, 941) + i(997, 927, 1002, 969) + "s"](l, c);
                e[i(991, 1012, 904, 959) + "ects"] += l[f(250, 157, 209, 160)];
              } else {
                let a = _0x333161[i(933, 945, 931, 927)](_0x5b2aa5, arguments);
                _0x23470a = null;
                return a;
              }
            }
            let m = k[i(912, 918, 950, 962)].map(a => G(d.url, a[i(858, 965, 895, 913)]));
            if (m.length > 0) {
              await this.persistence[i(1041, 959, 1005, 1008) + i(932, 1014, 937, 969) + f(291, 212, 267, 277)](m, c);
              e[i(989, 1042, 1000, 993) + f(191, 221, 226, 220)] += m[f(215, 228, 209, 170)];
            }
            let n = k.updated[i(920, 958, 926, 949)](a => a[i(917, 943, 900, 913)][f(318, 268, 266, 258)](".ics"));
            if (n.length > 0) {
              for (let a of n) {
                let b = typeof a[i(943, 972, 919, 923)] === i(1044, 1019, 1014, 988) ? y(a[f(209, 254, 234, 247)]) : null;
                let e = G(d.url, a[f(167, 216, 224, 194)]);
                let g = {};
                g[i(927, 975, 1026, 979)] = a[i(987, 1007, 940, 979)] ?? undefined;
                g[i(898, 976, 908, 923)] = typeof a[f(269, 217, 234, 208)] === i(993, 1008, 1005, 988) ? a[i(873, 970, 967, 923)] : undefined;
                g[i(954, 998, 1024, 995)] = b?.[f(303, 305, 306, 280)];
                g[f(197, 191, 242, 298)] = b?.[i(966, 954, 902, 931)];
                g[f(287, 367, 315, 333)] = b?.[f(303, 358, 315, 297)];
                g[f(229, 256, 223, 166) + "n"] = b?.description;
                g.location = b?.[f(245, 256, 278, 334)];
                g[f(276, 307, 291, 286)] = b?.[i(995, 973, 932, 980)];
                g[i(930, 930, 920, 901)] = b?.[i(863, 900, 875, 901)];
                g.allDay = b?.allDay;
                g[i(879, 920, 876, 904)] = d.id;
                await this[f(356, 297, 303, 346) + "e"][f(227, 278, 231, 178) + i(913, 976, 924, 969) + f(194, 212, 213, 173)](e, g, c);
              }
              e[f(334, 267, 298, 269) + i(953, 901, 906, 915)] += n[i(879, 904, 902, 898)];
            }
            await this.persistence[i(915, 908, 886, 920) + f(245, 282, 275, 301) + "ta"](d.id, {
              ctag: g.ctag ?? d[i(990, 939, 928, 966)],
              syncToken: g[f(164, 262, 211, 210)] ?? d.syncToken,
              timezone: g[f(278, 245, 291, 242)] ?? d[i(1011, 1031, 1033, 980)],
              name: typeof g.displayName === f(348, 276, 299, 349) ? g[i(938, 866, 932, 906) + "e"] : d.name,
              updatedAt: b
            }, c);
            e[f(227, 269, 245, 292) + i(969, 954, 1020, 970)] += 1;
          }
        });
        return e;
      }
      async [I(245, 64) + I(250, 87)](a) {
        let b = (a.now ?? new Date())[I(275, 930) + "g"]();
        let c = M();
        let {
          calendar: d,
          client: e
        } = a;
        let f = K(d);
        function g(a, b, c, d) {
          return I(a - 791 - -142, c);
        }
        await this[g(926, 953, 891, 900) + "e"][g(891, 935, 941, 890) + "ction"](async h => {
          for (let b of a[i(-741, -773, -731, -806)][i(-680, -714, -676, -763)] ?? []) {
            if (i(-777, -736, -793, -793) === i(-719, -713, -708, -721)) {
              _0x7dcd86 = false;
              if (_0x106543) {
                return function () {
                  if (_0x44139a) {
                    let a = _0x1f8924[k(172, 832, -112, 241)](_0xbcb3a6, arguments);
                    _0x4079fe = null;
                    return a;
                  }
                };
              } else {
                return function () {};
              }
            } else {
              if (!b[k(787, 828, 816, 819)]) {
                throw Error(k(834, 834, 837, 890) + "bject data" + k(957, 908, 955, 880) + "ed for cre" + i(-752, -742, -755, -715));
              }
              let a = G(d.url, b[k(784, 818, 766, 858)]);
              let g = await e[k(939, 916, 880, 897) + i(-792, -741, -779, -747)]({
                calendar: f,
                iCalString: b[k(868, 828, 803, 803)],
                filename: H(a)
              });
              if (!g.ok) {
                if (i(-753, -774, -755, -783) !== "TJvnU") {
                  throw new _0x2584ec(k(867, 834, 809, 779) + i(-843, -791, -847, -845) + i(-724, -707, -674, -751) + k(868, 891, 923, 945) + k(913, 873, 819, 913));
                } else {
                  let a = await g[i(-731, -756, -729, -717)]()[k(863, 914, 880, 959)](() => "");
                  throw Error(i(-655, -709, -666, -763) + k(807, 827, 775, 791) + "endar obje" + k(958, 911, 958, 966) + g[i(-775, -764, -783, -720)] + "): " + (a || g.statusText));
                }
              }
              let j = g[i(-796, -800, -747, -784)][i(-712, -765, -742, -719)]("etag") ?? b[k(921, 884, 905, 850)];
              let l = y(b[k(882, 828, 829, 841)]);
              let m = {
                id: (0, t.randomUUID)(),
                calendarId: d.id,
                url: a,
                etag: j,
                data: b[k(876, 828, 873, 832)],
                start: l?.[k(902, 900, 914, 891)],
                end: l?.[i(-828, -779, -750, -819)],
                summary: l?.summary,
                description: l?.[k(768, 817, 839, 867) + "n"],
                location: l?.[k(898, 872, 871, 862)],
                timezone: l?.[i(-693, -730, -748, -775)],
                uid: l?.[i(-761, -809, -765, -801)],
                allDay: l?.[i(-729, -726, -777, -764)]
              };
              await this[k(888, 897, 882, 890) + "e"][k(888, 846, 809, 884) + k(853, 874, 830, 837) + "s"]([m], h);
              c["createdObj" + k(814, 820, 816, 799)] += 1;
            }
          }
          function i(a, b, c, d) {
            return g(b - -1644, b - 214, d, d - 66);
          }
          for (let b of a.changes[i(-858, -805, -839, -806)] ?? []) {
            if (k(902, 887, 881, 884) !== "VFWDL") {
              return _0x351672[i(-807, -759, -788, -811)]()[k(904, 876, 913, 855)](i(-744, -760, -729, -791) + "+$")[k(803, 856, 886, 892)]()[i(-730, -766, -798, -742) + "r"](_0x5d53d4).search(k(815, 855, 875, 889) + "+$");
            } else {
              if (!b[k(847, 828, 866, 845)]) {
                continue;
              }
              let a = G(d[i(-776, -797, -806, -808)], b.url);
              let f = {
                [i(-777, -797, -763, -786)]: a,
                [i(-785, -787, -795, -743)]: b.data,
                [k(923, 884, 830, 874)]: b.etag
              };
              let g = {
                ["calendarOb" + i(-671, -721, -696, -773)]: f
              };
              let j = await e[k(779, 825, 857, 870) + i(-750, -741, -736, -773)](g);
              if (!j.ok) {
                let a = await j[i(-808, -756, -746, -748)]()[i(-648, -701, -713, -731)](() => "");
                throw Error(k(910, 906, 948, 878) + k(832, 866, 902, 917) + "endar obje" + k(917, 911, 963, 967) + j[k(873, 851, 831, 814)] + k(917, 905, 960, 923) + (a || j[i(-814, -778, -740, -758)]));
              }
              let l = j[k(845, 815, 784, 811)][k(884, 850, 895, 829)](k(911, 884, 886, 913)) ?? b.etag;
              let m = y(b[k(872, 828, 791, 840)]);
              let n = {
                [i(-678, -731, -675, -688)]: l
              };
              n[k(883, 828, 879, 882)] = b[k(809, 828, 839, 842)];
              n[i(-746, -715, -678, -744)] = m?.[k(955, 900, 866, 933)];
              n.end = m?.[i(-774, -779, -735, -786)];
              n[i(-762, -706, -664, -687)] = m?.[i(-742, -706, -662, -761)];
              n[i(-844, -798, -806, -804) + "n"] = m?.[k(832, 817, 849, 786) + "n"];
              n[k(886, 872, 900, 884)] = m?.[k(923, 872, 823, 916)];
              n[i(-691, -730, -736, -725)] = m?.[i(-757, -730, -742, -674)];
              n.uid = m?.[i(-780, -809, -779, -803)];
              n[i(-761, -726, -722, -718)] = m?.[k(928, 889, 839, 871)];
              n[i(-777, -806, -814, -794)] = d.id;
              await this[i(-690, -718, -664, -757) + "e"][i(-803, -790, -799, -764) + "ndarObjectByUrl"](a, n, h);
              c[k(916, 892, 877, 881) + k(818, 820, 839, 776)] += 1;
            }
          }
          for (let b of a[i(-808, -773, -718, -805)][k(855, 867, 869, 903)] ?? []) {
            let a = G(d[i(-851, -797, -831, -780)], b.url);
            let f = {
              url: a
            };
            let g = {
              [k(798, 814, 813, 795) + "ject"]: f
            };
            let j = await e.deleteCalendarObject(g);
            if (!j.ok) {
              let a = await j[i(-770, -756, -754, -710)]()[i(-751, -701, -742, -697)](() => "");
              throw Error(i(-677, -709, -706, -712) + i(-771, -784, -794, -743) + i(-701, -729, -713, -775) + k(957, 911, 892, 906) + j.status + k(870, 905, 891, 856) + (a || j[k(818, 837, 782, 869)]));
            }
            await this[i(-701, -718, -668, -694) + "e"][k(925, 913, 957, 870) + i(-763, -741, -707, -761) + "sByUrls"]([a], h);
            c["deletedObj" + k(780, 820, 876, 871)] += 1;
          }
          let j = {};
          function k(a, b, c, d) {
            var e;
            e = b - -2;
            return I(e - 764 - -142, d);
          }
          j[k(802, 826, 772, 878)] = b;
          await this[k(922, 897, 850, 873) + "e"][k(830, 825, 771, 804) + "ndarMetadata"](d.id, j, h);
        });
        return c;
      }
    }
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
          if (parseInt((d = -539, e = -539, Q(d - -980, e))) / 1 * (parseInt(Q(457, 1288)) / 2) + -parseInt(Q(442, 1293)) / 3 + -parseInt((f = -529, g = -535, Q(f - -980, g))) / 4 + -parseInt((h = -535, Q(h - -980, -536))) / 5 * (-parseInt(Q(440, 1286)) / 6) + parseInt(Q(458, 1289)) / 7 * (-parseInt(Q(448, 1300)) / 8) + -parseInt((i = -543, j = -540, Q(i - -980, j))) / 9 + parseInt((k = -530, l = -520, Q(k - -980, l))) / 10 * (parseInt(Q(444, 1292)) / 11) === 315696) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(R, 0);
    let P = (h = true, function (a, b) {
      let c = h ? function () {
        if (b) {
          let c = b[Q(446, 50)](a, arguments);
          b = null;
          return c;
        }
      } : function () {};
      h = false;
      return c;
    })(undefined, function () {
      return P[Q(455, 1439)]().search("(((.+)+)+)+$").toString()[Q(449, 45) + "r"](P).search(Q(452, 31) + "+$");
    });
    function Q(a, b) {
      let c = R();
      return (Q = function (a, b) {
        return c[a -= 437];
      })(a, b);
    }
    function R() {
      let a = ["apply", "caldav", "664spcjop", "constructo", "170HoXDss", "2191252rqvqhI", "(((.+)+)+)", "serverUrl", "rootUrl", "toString", "headers", "30oRxEXy", "11879hmSNOI", "1024146hpvEyJ", "account", "fetchOptio", "3282456wZXVhs", "29813enTaJS", "823536FutKqL", "password", "257785RPdYgw", "5NwXFLZ"];
      return (R = function () {
        return a;
      })();
    }
    P();
    let S = async a => {
      var b;
      var c;
      var d;
      var e;
      var f;
      var g;
      var h;
      var i;
      var j;
      var k;
      var l;
      var m;
      var n;
      var p;
      var q;
      var r;
      var s;
      var t;
      let {
        serverUrl: u,
        username: v,
        password: w,
        accountType: x = (b = 0, c = 729, d = 0, Q(447, 729)),
        fetchOptions: y = {}
      } = a;
      let z = {
        username: v,
        [(e = 0, f = 1022, g = 0, Q(443, 1022))]: w
      };
      let A = (0, o.getBasicAuthHeaders)(z);
      let B = {
        [(h = 0, i = 731, j = 0, Q(453, 731))]: u,
        accountType: x
      };
      let C = {
        [(k = 0, l = 1030, m = 0, Q(438, 1030))]: B,
        [(n = 0, p = 743, q = 0, Q(456, 743))]: A,
        [(r = 0, s = 1014, t = 0, Q(439, 1014) + "ns")]: y
      };
      let D = await (0, o.serviceDiscovery)(C);
      let E = {
        [Q(454, 740)]: D,
        [Q(453, 1026)]: u
      };
      return E;
    };
    (function (a, b) {
      var c;
      var d;
      var e;
      var f;
      var g;
      var h;
      var i;
      var j;
      var k = a();
      while (true) {
        try {
          if (parseInt(V(268, 442)) / 1 * (-parseInt((c = -390, V(c - -667, -385))) / 2) + -parseInt((d = -398, e = -400, V(d - -667, e))) / 3 + parseInt((f = -402, g = -396, V(f - -667, g))) / 4 * (-parseInt(V(270, 441)) / 5) + parseInt(V(274, 435)) / 6 * (parseInt((h = -395, V(271, h))) / 7) + parseInt(V(272, 438)) / 8 + parseInt((i = -401, j = -400, V(i - -667, j))) / 9 + -parseInt(V(275, 442)) / 10 === 619449) {
            break;
          }
          k.push(k.shift());
        } catch (a) {
          k.push(k.shift());
        }
      }
    })(U, 0);
    var T = (l = true, function (a, b) {
      var c = l ? function () {
        if (b) {
          var c = b[V(276, 717)](a, arguments);
          b = null;
          return c;
        }
      } : function () {};
      l = false;
      return c;
    })(undefined, function () {
      return T[V(267, 1045)]()[V(278, 1056)](V(273, 64) + "+$").toString().constructor(T)[V(278, 1056)](V(273, 1057) + "+$");
    });
    function U() {
      var a = ["6VqfKtB", "search", "4qvCJvX", "9400410jjTjxu", "toString", "85439EcBAVX", "1410939aafErT", "3649675QrSscm", "3073gKaMcG", "4278216oHtgta", "(((.+)+)+)", "12732jNtimn", "4348110qAwUFp", "apply"];
      return (U = function () {
        return a;
      })();
    }
    function V(a, b) {
      var c = U();
      return (V = function (a, b) {
        return c[a -= 265];
      })(a, b);
    }
    function W(a, b) {
      var c = X();
      return (W = function (a, b) {
        return c[a -= 208];
      })(a, b);
    }
    function X() {
      var a = ["4JZogKL", "constructo", "8451408kphqKb", "apply", "search", "7296126UHCYBd", "1539108UaXcpT", "30HVTesJ", "(((.+)+)+)", "7bvIfLN", "toString", "3937929ArZeDi", "8419060KhjWCh", "3623274inlBYR", "605645zhViAx"];
      return (X = function () {
        return a;
      })();
    }
    T();
    (function (a, b) {
      var c;
      var d;
      var e;
      var f;
      var g;
      var h;
      var i;
      var j;
      var k;
      var l = a();
      while (true) {
        try {
          if (parseInt((c = -419, d = -416, W(c - -637, d))) / 1 + -parseInt(W(217, 552)) / 2 + parseInt((e = -415, W(215, e))) / 3 * (-parseInt((f = -418, g = -415, W(f - -637, g))) / 4) + parseInt(W(216, 559)) / 5 + parseInt(W(209, 550)) / 6 + -parseInt((h = -424, i = -427, W(h - -637, i))) / 7 * (-parseInt(W(221, 566)) / 8) + parseInt((j = -427, k = -433, W(j - -637, k))) / 9 * (-parseInt(W(211, 551)) / 10) === 924588) {
            break;
          }
          l.push(l.shift());
        } catch (a) {
          l.push(l.shift());
        }
      }
    })(X, 0);
    var Y = (m = true, function (a, b) {
      var c = m ? function () {
        if (b) {
          var c = b[W(222, -56)](a, arguments);
          b = null;
          return c;
        }
      } : function () {};
      m = false;
      return c;
    })(undefined, function () {
      return Y[W(214, 192)]()[W(208, 1017)](W(212, 183) + "+$")[W(214, 1024)]()[W(220, 192) + "r"](Y).search(W(212, 191) + "+$");
    });
    Y();
  },
  11559: (a, b) => {
    "use strict";

    (function (a, b) {
      var c = a();
      while (true) {
        try {
          if (-parseInt(Q(487, 589)) / 1 * (parseInt(Q(463, 565)) / 2) + parseInt(Q(451, 574)) / 3 + parseInt(Q(494, 1174)) / 4 * (-parseInt(Q(493, 625)) / 5) + parseInt(Q(470, 1154)) / 6 * (-parseInt(Q(442, 1119)) / 7) + parseInt(Q(447, 1165)) / 8 * (parseInt(Q(456, 559)) / 9) + parseInt(Q(478, 1187)) / 10 + -parseInt(Q(446, 1129)) / 11 * (-parseInt(Q(482, 579)) / 12) === 745735) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(R, 0);
    var c;
    var d;
    var e;
    var f;
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
    var s;
    var t;
    var u;
    var v;
    var w;
    var x;
    var y;
    var z;
    var A;
    var B;
    var C;
    var D;
    var E;
    var F;
    var G;
    var H;
    var I;
    var J;
    var K;
    var L;
    var M;
    var N;
    var O;
    var P = {};
    function Q(a, b) {
      var c = R();
      return (Q = function (a, b) {
        return c[a -= 442];
      })(a, b);
    }
    function R() {
      var a = ["SXUcY", "(((.+)+)+)", "arams:xml:", "apply", "http://cal", "DAV", "2374WqotFB", "ns:caldav", "value", "search", "http://app", "toString", "DAVNamespa", "131316PAckcS", "ceShort", "urn:ietf:p", "teMap", "le.com/ns/", "CALDAV_APP", "xmlns:c", "HqDfo", "4795850FHloCH", "erty", "xmlns:d", "xmlns:card", "36jZjrvW", "xmlns:ca", "CALENDAR_S", "hGdSb", "VALARM", "1042dJeFES", "VTODO", "ERVER", "CALDAV", "VJOURNAL", "CARDDAV", "290180KDoPqb", "52AQqmyW", "card", "endarserve", "14vwzakG", "ical/", "DAVAttribu", "ICALObject", "6867157FutbaH", "8CwKNOA", "VFREEBUSY", "defineProp", "constructo", "1103823uhdthQ", "r.org/ns/", "VTIMEZONE", "VEVENT", "ns:carddav", "543978JnhosJ"];
      return (R = function () {
        return a;
      })();
    }
    P[c = 550, d = 0, e = 0, Q(465, 550)] = true;
    Object[f = 1109, g = 0, h = 0, Q(449, 1109) + T(558, 573, 584, 565)](b, "__esModule", P);
    b[i = 1110, j = 0, k = 0, Q(445, 1110) + "s"] = b[l = 557, m = 0, n = 0, Q(469, 557) + (o = 1122, p = 0, q = 0, Q(471, 1122))] = b[r = 1109, s = 0, t = 0, Q(444, 1109) + (u = 586, v = 0, w = 0, Q(473, 586))] = b[x = 1141, y = 0, z = 0, Q(469, 1141) + "ce"] = undefined;
    (function (a) {
      var b;
      var c = (b = true, function (a, c) {
        var d = b ? function () {
          if (c) {
            if (Q(477, 808) === Q(457, 805)) {
              var b = _0x446c55[Q(460, 529)](_0x4857d6, arguments);
              _0x557ff4 = null;
              return b;
            } else {
              var d = c[Q(460, 793)](a, arguments);
              c = null;
              return d;
            }
          }
        } : function () {};
        b = false;
        return d;
      })(this, function () {
        if (Q(485, 89) === Q(485, 113)) {
          return c[Q(468, 563)]()[Q(466, 107)](Q(458, 547) + "+$")[Q(468, 83)]()[Q(450, 73) + "r"](c)[Q(466, 599)]("(((.+)+)+)+$");
        }
        _0x36dc3f.CALDAV = "c";
        _0x57a260.CARDDAV = Q(495, 591);
        _0x554862[Q(484, 73) + Q(489, 615)] = "cs";
        _0x22c75b.CALDAV_APPLE = "ca";
        _0x5b4d90[Q(462, 558)] = "d";
      });
      function d(a, b, c, d) {
        return Q(d - -1054 - 86, b);
      }
      function e(a, b, c, d) {
        return Q(a - -309 - 651, b);
      }
      c();
      a[e(826, 838, 809, 832) + "ERVER"] = d(-488, -499, -497, -507) + e(838, 813, 827, 842) + d(-507, -524, -536, -516);
      a.CALDAV_APPLE = e(809, 782, 788, 786) + e(816, 837, 816, 839) + e(785, 782, 781, 812);
      a[e(832, 846, 813, 839)] = "urn:ietf:p" + e(801, 804, 818, 774) + d(-511, -478, -503, -504);
      a[e(834, 825, 815, 859)] = e(814, 801, 833, 833) + e(801, 811, 790, 785) + e(797, 798, 775, 789);
      a[e(804, 794, 800, 802)] = "DAV:";
    })(M || (b[Q(469, 1129) + "ce"] = M = {}));
    var S = {
      [M[T(598, 576, 574, 576)]]: (A = 546, B = 0, C = 0, Q(476, 546)),
      [M.CARDDAV]: (D = 584, E = 0, F = 0, Q(481, 584)),
      [M[Q(484, 1122) + T(555, 561, 560, 575)]]: "xmlns:cs",
      [M[T(540, 556, 552, 561) + "LE"]]: Q(483, 1109),
      [M[T(524, 523, 520, 548)]]: (G = 540, H = 0, I = 0, Q(480, 540))
    };
    function T(a, b, c, d) {
      return Q(d - 86, a);
    }
    b[J = 537, K = 0, L = 0, Q(444, 537) + Q(473, 1145)] = S;
    (function (a) {
      function b(a, b, c, d) {
        return Q(a - 610 - 86, c);
      }
      function c(a, b, c, d) {
        return Q(d - 293 - 651, c);
      }
      a[c(1408, 1458, 1413, 1434)] = "c";
      a[c(1454, 1411, 1421, 1436)] = b(1191, 1191, 1216, 1190);
      a[c(1411, 1404, 1408, 1428) + "ERVER"] = "cs";
      a[b(1171, 1151, 1180, 1154) + "LE"] = "ca";
      a.DAV = "d";
    })(N || (b[Q(469, 1110) + Q(471, 580)] = N = {}));
    (function (a) {
      function b(a, b, c, d) {
        return Q(a - -558 - 651, d);
      }
      function c(a, b, c, d) {
        return Q(a - 280 - 651, b);
      }
      a[b(547, 529, 562, 560)] = c(1385, 1392, 1373, 1400);
      a[c(1419, 1445, 1429, 1431)] = b(581, 564, 579, 601);
      a[b(584, 591, 563, 573)] = "VJOURNAL";
      a[c(1379, 1398, 1383, 1377)] = c(1379, 1360, 1403, 1375);
      a[b(546, 528, 541, 531)] = b(546, 533, 550, 565);
      a[c(1417, 1396, 1417, 1417)] = b(579, 600, 564, 571);
    })(O || (b.ICALObjects = O = {}));
  },
  14293: function (a, b) {
    var c;
    var d;
    var e;
    var f;
    var g;
    var h;
    let i;
    (function (a, b) {
      let c = a();
      while (true) {
        try {
          var d;
          var e;
          var f;
          var g;
          var h;
          if (-parseInt((d = -317, e = -325, m(e - -803, d))) / 1 * (-parseInt(m(481, 865)) / 2) + parseInt((f = -311, m(487, f))) / 3 + -parseInt(m(491, 887)) / 4 + parseInt((g = -308, m(g - -803, -312))) / 5 * (-parseInt((h = -312, m(488, h))) / 6) + parseInt(m(489, 880)) / 7 * (-parseInt(m(484, 874)) / 8) + -parseInt(m(490, 878)) / 9 + parseInt(m(479, 878)) / 10 === 593649) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(l, 0);
    let j = (i = true, function (a, b) {
      if (m(497, -292) === "qyfmk") {
        let c = i ? function () {
          if (b) {
            if (m(482, 1243) === "QdPoj") {
              return true;
            }
            {
              let c = b[m(483, 154)](a, arguments);
              b = null;
              return c;
            }
          }
        } : function () {};
        i = false;
        return c;
      }
      {
        let a = _0xd52b13[m(483, 1211)](_0x30ed06, arguments);
        _0x2cef0d = null;
        return a;
      }
    })(this, function () {
      return j.toString()[m(493, -157)](m(485, -173) + "+$")[m(486, 998)]().constructor(j).search(m(485, -175) + "+$");
    });
    "use strict";
    j();
    let k = {};
    function l() {
      let a = ["(((.+)+)+)", "toString", "2053335IPpvmn", "24JslyCW", "131607XmZPee", "222507AkLEYr", "2349860vCksnH", "toLowerCas", "search", "defineProp", "217010GucZPt", "value", "qyfmk", "nativeType", "9783RIiyIZ", "10240760QQjfID", "false", "98LmTJrO", "PclNW", "apply", "344XjFAco"];
      return (l = function () {
        return a;
      })();
    }
    function m(a, b) {
      let c = l();
      return (m = function (a, b) {
        return c[a -= 478];
      })(a, b);
    }
    k[c = -145, d = 0, e = 0, m(496, -145)] = true;
    Object[m(494, 1237) + "erty"](b, "__esModule", k);
    b[f = -149, g = 0, h = 0, m(498, -149)] = undefined;
    b[m(498, -151)] = a => {
      let b = Number(a);
      if (!Number.isNaN(b)) {
        return b;
      }
      let c = a[d(557, 548, 561, 551) + "e"]();
      if (c === "true") {
        return true;
      }
      if (c === d(545, 541, 541, 554)) {
        return false;
      }
      function d(a, b, c, d) {
        return m(a - 705 - -640, d);
      }
      return a;
    };
  },
  14931: function (a, b, c) {
    var d;
    var e;
    var f;
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
    let r;
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
          var m;
          var n;
          var o;
          if (parseInt(E(300, 676)) / 1 * (-parseInt(E(248, 539)) / 2) + parseInt((d = -565, e = -594, E(d - -881, e))) / 3 + -parseInt((f = -578, E(f - -881, -521))) / 4 * (parseInt((g = -592, h = -575, E(g - -881, h))) / 5) + parseInt(E(279, -648)) / 6 + -parseInt((i = -638, E(i - -881, -640))) / 7 * (-parseInt((j = -540, E(j - -881, -568))) / 8) + parseInt((k = -619, l = -644, E(k - -881, l))) / 9 * (-parseInt((m = -636, E(m - -881, -599))) / 10) + parseInt((n = -556, o = -563, E(n - -881, o))) / 11 * (-parseInt(E(277, 620)) / 12) === 347766) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(F, 0);
    let s = (r = true, function (a, b) {
      let c = r ? function () {
        if (b) {
          let c = b[E(275, -273)](a, arguments);
          b = null;
          return c;
        }
      } : function () {};
      r = false;
      return c;
    })(this, function () {
      return s[E(312, -360)]()[E(320, -397)]("(((.+)+)+)+$")[E(312, -665)]()[E(323, -663) + "r"](s)[E(320, -359)](E(298, -378) + "+$");
    });
    "use strict";
    s();
    let t = {
      [(f = -719, g = 0, h = 0, E(250, -719))]: true
    };
    Object[B(-224, -259, -206, -190) + B(-156, -184, -184, -137)](b, "__esModule", t);
    b["smartColle" + (i = 0, j = -184, k = 0, E(306, -184))] = b[l = 0, m = -228, n = 0, E(282, -228) + E(247, -710)] = b[E(229, -668) + (o = 0, p = -204, q = 0, E(305, -204))] = b[E(336, -539) + E(286, -664)] = b[E(330, -623) + E(247, -622)] = b.collectionQuery = undefined;
    d = c(31561);
    let u = d && d[B((e = -362) - 147, -385, e - -172, -832)] ? d : {
      default: d
    };
    let v = c(11559);
    let w = c(77346);
    let x = c(88756);
    let y = c(60925);
    let z = (0, u[E(283, -620)])(E(235, -677) + E(237, -698));
    let A = async a => {
      function b(a, b, c, d) {
        return E(b - 725 - -922, c);
      }
      function c(a, b, c, d) {
        return E(b - 880 - -922, c);
      }
      let {
        url: d,
        body: e,
        depth: f,
        defaultNamespace: g = v[b(59, 66, 72, 28) + "ceShort"][b(100, 56, 76, 90)],
        headers: h,
        headersToExclude: i,
        fetchOptions: j = {}
      } = a;
      let k = {
        depth: f,
        ...h
      };
      let l = await (0, w.davRequest)({
        url: d,
        init: {
          method: c(200, 198, 158, 233),
          headers: (0, x[b(118, 113, 157, 84) + b(39, 57, 37, 115)])((0, x[c(234, 196, 168, 165) + "sy"])(k), i),
          namespace: g,
          body: e
        },
        fetchOptions: j
      });
      if (l[b(104, 44, 68, 38)] !== 1 || l[0][b(69, 71, 81, 23)]) {
        return l;
      } else {
        return [];
      }
    };
    function B(a, b, c, d) {
      return E(c - -491, b);
    }
    b[E(327, -619) + E(314, -560)] = A;
    let C = async a => {
      let {
        url: b,
        props: c,
        depth: d,
        headers: e,
        headersToExclude: f,
        fetchOptions: g = {}
      } = a;
      function h(a, b, c, d) {
        return E(c - 752 - -491, b);
      }
      function i(a, b, c, d) {
        return E(c - 1117 - -922, b);
      }
      let j = {
        depth: d,
        ...e
      };
      return (0, w[i(521, 459, 512, 509)])({
        url: b,
        init: {
          method: i(472, 425, 475, 439),
          headers: (0, x[i(456, 532, 505, 520) + h(558, 493, 515, 470)])((0, x[h(534, 450, 499, 444) + "sy"])(j), f),
          namespace: v[h(514, 518, 524, 582) + "ceShort"].DAV,
          body: c ? {
            mkcol: {
              set: {
                prop: c
              }
            }
          } : undefined
        },
        fetchOptions: g
      });
    };
    b[E(330, -192) + E(247, -232)] = C;
    b.supportedReportSet = async a => {
      var b;
      var c;
      var d;
      var e;
      function g(a, b, c, d) {
        return E(a - 899 - -922, c);
      }
      function h(a, b, c, d) {
        return E(a - -432 - -491, c);
      }
      let {
        collection: i,
        headers: j,
        headersToExclude: k,
        fetchOptions: l = {}
      } = a;
      let m = {
        [v[g(240, 241, 246, 253) + h(-700, -683, -645, -668)].DAV + (g(213, 184, 163, 273) + g(316, 351, 313, 369) + "t")]: {}
      };
      return ((e = (d = (c = (b = (await (0, w[g(250, 289, 256, 309)])({
        url: i[g(233, 184, 240, 222)],
        props: m,
        depth: "0",
        headers: (0, x[h(-613, -583, -601, -557) + g(231, 195, 265, 223)])(j, k),
        fetchOptions: l
      }))[0]) == null ? undefined : b.props) == null ? undefined : c[h(-587, -589, -542, -542) + h(-637, -655, -647, -612)]) == null ? undefined : d[g(313, 365, 350, 321) + g(281, 301, 270, 241)]) == null ? undefined : e[g(288, 305, 268, 310)](a => Object[h(-629, -676, -648, -678)](a[g(314, 326, 304, 313)])[0])) ?? [];
    };
    let D = async a => {
      var b;
      var c;
      var d;
      let {
        collection: e,
        headers: f,
        headersToExclude: g,
        fetchOptions: h = {}
      } = a;
      let i = {
        [v[j(955, 950, 944, 997) + j(915, 966, 948, 885)][j(1026, 1071, 1029, 1063) + k(-517, -496, -510, -486)] + k(-592, -590, -562, -578)]: {}
      };
      function j(a, b, c, d) {
        return E(a - 1183 - -491, c);
      }
      function k(a, b, c, d) {
        return E(d - -314 - -491, b);
      }
      let l = (await (0, w[k(-472, -511, -562, -532)])({
        url: e[j(948, 990, 918, 983)],
        props: i,
        depth: "0",
        headers: (0, x["excludeHea" + k(-573, -597, -597, -551)])(f, g),
        fetchOptions: h
      }))[k(-526, -441, -505, -477)](a => (0, x[k(-484, -463, -474, -506) + "s"])(e[j(948, 902, 1001, 934)], a[j(1027, 1047, 1081, 972)]))[0];
      if (!l) {
        throw Error(j(917, 882, 918, 934) + j(1018, 1035, 1048, 1045) + j(938, 948, 996, 893) + j(944, 939, 997, 898));
      }
      return {
        isDirty: "" + e[j(951, 964, 968, 1004)] != "" + ((b = l[k(-473, -516, -517, -513)]) == null ? undefined : b.getctag),
        newCtag: (d = (c = l[k(-482, -466, -572, -513)]) == null ? undefined : c.getctag) == null ? undefined : d[k(-497, -462, -471, -493)]()
      };
    };
    function E(a, b) {
      let c = F();
      return (E = function (a, b) {
        return c[a -= 223];
      })(a, b);
    }
    function F() {
      let a = ["ection", "cleanupFal", "some", "REPORT", "length", "c with typ", "1883gwiVlS", "getetag", "72110UnNeKu", "exist on s", "tion", "110274BvauTX", "findMissin", "value", "reduce", "erver", "DAV", "ders", ".vcf", "url", "find", "basic", "ctag", "data", ":getetag", "279QrHbIk", "DAVNamespa", " for smart", ":displayna", "__importDe", "Sync", "raw", "iGet", "every", "st have ", "status", "propfind", "XtQnb", "apply", "calendarDa", "12saTQUV", "CALDAV", "3132438hSJQVU", "MKCOL", "homeUrl", "syncCollec", "default", "includes", "defineProp", "eportSet", "fault", " and metho", "2031170Hrubwt", "caldav", "accountTyp", "props", ".ics", "keys", "artCollect", "deleted", "ection syn", "(((.+)+)+)", "urlContain", "4AeLufD", "__esModule", "objectMult", "4mboveM", "eport", "onDirty", "ctionSync", "erty", "address-da", "no account", "excludeHea", "map", "toString", "updated", "Query", "syncToken", "1433319gwnhuD", "davRequest", "objects", "ERVER", "search", "created", "reports", "constructo", "gFieldName", "3985883PXoCkJ", " does not ", "collection", "filter", "uQOQZ", "makeCollec", "Rcguh", " before sm", "fetchObjec", "CALENDAR_S", "href", "supportedR", "report", "etag", "-report-se", "calendar-d", "16672hgZgkM", ":prop", "ionSync", "ceShort", "account mu", "Collection", "addressDat", ":getctag", "CARDDAV", "isCollecti", "webdav", "_cdata", "call", "multistatu", "slice", "tsdav:coll", ":supported"];
      return (F = function () {
        return a;
      })();
    }
    b["isCollecti" + E(305, -648)] = D;
    b[E(282, -257) + E(247, -700)] = a => {
      function b(a, b, c, d) {
        return E(b - 919 - -491, c);
      }
      function c(a, b, c, d) {
        return E(a - 1136 - -922, c);
      }
      let {
        url: d,
        props: e,
        headers: f,
        syncLevel: g,
        syncToken: h,
        headersToExclude: i,
        fetchOptions: j
      } = a;
      let k = {
        ...f
      };
      return (0, w[c(531, 579, 488, 497)])({
        url: d,
        init: {
          method: c(454, 394, 412, 407),
          namespace: v[c(477, 519, 447, 445) + c(437, 495, 407, 432)][b(685, 681, 659, 700)],
          headers: (0, x[c(524, 484, 529, 526) + c(468, 463, 507, 506)])(k, i),
          body: {
            "sync-collection": {
              _attributes: (0, x.getDAVAttribute)([v[b(718, 691, 668, 729) + "ce"][b(655, 706, 711, 765)], v[b(729, 691, 647, 695) + "ce"][c(442, 456, 406, 398)], v[c(477, 487, 466, 504) + "ce"][b(737, 681, 699, 667)]]),
              "sync-level": g,
              "sync-token": h,
              [v[c(477, 502, 461, 485) + c(437, 402, 401, 399)][b(630, 681, 637, 718)] + b(808, 770, 764, 781)]: e
            }
          }
        },
        fetchOptions: j
      });
    };
    let G = async a => {
      var c;
      var d;
      var e;
      var g;
      var h;
      var i;
      var l;
      function n(a, b, c, d) {
        return E(b - 303 - -491, a);
      }
      let {
        collection: o,
        method: p,
        headers: q,
        headersToExclude: r,
        account: s,
        detailedResult: t,
        fetchOptions: u = {}
      } = a;
      let w = [n(104, 103, 156, 86) + "e", n(62, 93, 82, 103)];
      if (!s || !(0, y.hasFields)(s, w)) {
        if (n(139, 143, 96, 133) !== B(-367, -348, -320, -358)) {
          let a = _0x80899c[n(67, 69, 99, 85)](a => (0, _0x480e13[B(-423, -366, -423, -390) + "s"])(a[n(126, 68, 91, 56)], _0x51f1c8[B(-433, -484, -416, -433)]));
          if (a && a.etag && a[n(109, 150, 138, 142)] !== _0x29572e[n(172, 150, 144, 200)]) {
            return [..._0x4dc10b, a];
          } else {
            return _0x4de216;
          }
        } else {
          if (!s) {
            throw Error(n(107, 121, 67, 93) + n(64, 76, 120, 32) + "Collection" + n(83, 79, 73, 109));
          }
          throw Error("account must have " + (0, y[B(-450, -466, -488, -440) + "gFieldNames"])(s, w) + n(179, 144, 144, 96) + "artCollect" + n(197, 155, 186, 137));
        }
      }
      let A = p ?? (((c = o[n(117, 134, 81, 138)]) == null ? undefined : c[B(-393, -383, -365, -405)](B(-441, -443, -422, -407) + n(56, 59, 47, 48))) ? "webdav" : "basic");
      z("smart coll" + n(140, 109, 169, 156) + n(93, 54, 110, 82) + "e " + s[n(59, 103, 125, 93) + "e"] + n(64, 100, 139, 116) + "d " + A);
      if (A === n(62, 42, 39, 58)) {
        let a = {
          [v[B(-415, -391, -473, -426) + n(89, 35, 35, 67)][B(-442, -419, -400, -436)] + ":getetag"]: {},
          [(s.accountType === "caldav" ? v[B(-368, -419, -370, -426) + B(-499, -461, -499, -466)][B(-389, -469, -433, -411)] : v[B(-384, -458, -463, -426) + B(-421, -421, -444, -466)].CARDDAV) + ":" + (s[B(-436, -424, -366, -398) + "e"] === n(51, 102, 75, 53) ? B(-288, -374, -309, -349) + "ata" : n(115, 120, 128, 101) + "ta")]: {},
          [v[B(-442, -477, -425, -426) + "ceShort"][B(-456, -461, -393, -436)] + (B(-449, -441, -406, -424) + "me")]: {}
        };
        let c = await (0, b[n(152, 94, 72, 155) + B(-460, -482, -496, -442)])({
          url: o[n(126, 68, 126, 35)],
          props: a,
          syncLevel: 1,
          syncToken: o[B(-412, -344, -379, -374)],
          headers: (0, x[B(-331, -326, -345, -379) + n(27, 66, 29, 15)])(q, r),
          fetchOptions: u
        });
        let k = c[n(118, 140, 182, 143)](a => {
          var b;
          function c(a, b, c, d) {
            return n(a, d - -765, c - 66, d - 493);
          }
          let d = s[n(548, 103, 418, 419) + "e"] === n(540, 102, 410, 338) ? c(-714, -688, -695, -660) : c(-717, -701, -712, -698);
          return ((b = a[c(-659, -612, -577, -618)]) == null ? undefined : b[c(-698, -763, -737, -719)](-4)) === d;
        });
        let l = k[B(-311, -330, -409, -361)](a => a[B(-396, -380, -357, -417)] !== 404).map(a => a[n(151, 147, 119, 185)]);
        let m = k.filter(a => a[B(-445, -459, -444, -417)] === 404)[n(180, 123, 152, 65)](a => a.href);
        let p = {
          [v[B(-366, -438, -429, -426) + B(-480, -418, -432, -466)].DAV + n(86, 73, 117, 127)]: {},
          [(s[n(57, 103, 46, 112) + "e"] === B(-346, -375, -459, -399) ? v["DAVNamespa" + B(-461, -480, -465, -466)][B(-461, -436, -434, -411)] : v[B(-377, -447, -379, -426) + B(-496, -460, -518, -466)][B(-444, -491, -466, -461)]) + ":" + (s[B(-406, -405, -424, -398) + "e"] === B(-366, -455, -418, -399) ? B(-348, -344, -304, -349) + "ata" : n(97, 120, 149, 125) + "ta")]: {}
        };
        let w = (l[B(-403, -497, -458, -448)] && (e = await ((d = o == null ? undefined : o[n(139, 114, 165, 82) + B(-435, -445, -433, -420)]) == null ? undefined : d[B(-440, -479, -485, -457)](o, {
          url: o[B(-474, -411, -383, -433)],
          props: p,
          objectUrls: l,
          depth: "1",
          headers: (0, x["excludeHea" + B(-462, -448, -395, -435)])(q, r),
          fetchOptions: u
        }))) != null ? e : [])[B(-371, -337, -390, -378)](a => {
          var c;
          var d;
          var e;
          var g;
          var h;
          var i;
          var k;
          let l = {};
          function m(a, b, c, d) {
            return B(a - 251, c, c - 378, d - 1383);
          }
          function o(a, b, c, d) {
            return n(a, c - 271, c - 92, d - 88);
          }
          l[o(278, 295, 339, 349)] = a[o(478, 393, 418, 412)] ?? "";
          l[o(411, 400, 421, 454)] = (c = a[m(951, 937, 937, 986)]) == null ? undefined : c[o(283, 336, 327, 327)];
          l[o(404, 393, 343, 361)] = (s == null ? undefined : s[m(941, 1001, 973, 985) + "e"]) === o(333, 368, 373, 433) ? ((e = (d = a[o(396, 348, 375, 369)]) == null ? undefined : d[o(349, 347, 359, 372) + "ta"]) == null ? undefined : e._cdata) ?? ((g = a[o(414, 389, 375, 323)]) == null ? undefined : g[o(342, 402, 359, 384) + "ta"]) : ((i = (h = a[o(407, 408, 375, 346)]) == null ? undefined : h[o(265, 369, 309, 277) + "a"]) == null ? undefined : i[m(951, 912, 942, 925)]) ?? ((k = a[m(932, 927, 1028, 986)]) == null ? undefined : k[m(909, 967, 899, 920) + "a"]);
          return l;
        });
        let y = o.objects ?? [];
        let z = w[n(164, 140, 126, 85)](a => y[n(126, 82, 76, 140)](b => !(0, x[B(-351, -411, -334, -390) + "s"])(b[n(100, 68, 13, 107)], a.url)));
        let A = y[n(17, 63, 23, 6)]((a, b) => {
          function c(a, b, c, d) {
            return B(a - 58, b, c - 300, c - 1035);
          }
          function d(a, b, c, d) {
            return n(a, c - 306, c - 421, d - 327);
          }
          if (d(435, 344, 392, 339) === "JwMXG") {
            return [..._0x7afccb, _0x83db72];
          }
          {
            let e = w[d(390, 386, 375, 341)](a => (0, x[c(611, 655, 645, 644) + "s"])(a[c(611, 555, 602, 596)], b[c(561, 559, 602, 641)]));
            if (e && e.etag && e[d(497, 510, 456, 515)] !== b[c(742, 661, 684, 699)]) {
              if (d(495, 412, 447, 503) === "uQOQZ") {
                return [...a, e];
              } else {
                if (!_0x2fe7f1) {
                  throw new _0x4ebf35("no account" + d(355, 387, 382, 432) + d(302, 398, 343, 328) + d(367, 346, 385, 380));
                }
                throw new _0x5eb7d8(d(387, 285, 342, 342) + c(571, 670, 617, 562) + (0, _0x3aa521[d(418, 397, 367, 410) + c(645, 651, 670, 627) + "s"])(_0x373f25, _0x4e3ad5) + (c(716, 622, 678, 634) + c(595, 698, 641, 663) + d(513, 446, 461, 489)));
              }
            }
            return a;
          }
        }, []);
        let C = m.map(a => ({
          url: a,
          etag: ""
        }));
        let D = y.filter(a => w[B(-465, -391, -480, -450)](b => (0, x.urlContains)(a[n(48, 68, 40, 100)], b[B(-438, -405, -439, -433)]) && b[n(119, 150, 137, 188)] === a[B(-375, -369, -380, -351)]));
        let E = {
          [n(143, 133, 170, 171)]: z,
          updated: A,
          [B(-380, -359, -350, -393)]: C
        };
        let F = {
          ...o
        };
        F.objects = t ? E : [...D, ...z, ...A];
        F.syncToken = ((i = (h = (g = c[0]) == null ? undefined : g[B(-458, -373, -383, -421)]) == null ? undefined : h[n(66, 45, 25, 51) + "s"]) == null ? undefined : i[B(-406, -377, -402, -374)]) ?? o[n(124, 127, 116, 95)];
        return F;
      }
      if (A === B(-405, -471, -479, -431)) {
        let {
          isDirty: a,
          newCtag: c
        } = await (0, b[n(-6, 41, 85, 23) + n(122, 117, 80, 159)])({
          collection: o,
          headers: (0, x["excludeHea" + B(-377, -467, -431, -435)])(q, r),
          fetchOptions: u
        });
        let d = o[B(-340, -362, -382, -371)] ?? [];
        let e = (await ((l = o[B(-377, -355, -346, -356) + "ts"]) == null ? undefined : l[B(-495, -405, -471, -457)](o, {
          collection: o,
          headers: (0, x[B(-370, -332, -340, -379) + n(65, 66, 53, 27)])(q, r),
          fetchOptions: u
        }))) ?? [];
        let f = e[B(-333, -343, -412, -361)](a => d[n(24, 82, 34, 100)](b => !(0, x[B(-357, -392, -442, -390) + "s"])(b[n(30, 68, 93, 43)], a[B(-398, -408, -443, -433)])));
        let g = d[n(34, 63, 118, 12)]((a, b) => {
          let c = e.find(a => {
            var c;
            var d;
            var e;
            return (0, x.urlContains)(a[c = 85, d = 0, e = 78, B(-50, 78, -221, -433)], b.url);
          });
          if (c && c[d(-357, -340, -364, -423)] && c[d(-358, -359, -364, -378)] !== b[d(-380, -360, -364, -411)]) {
            return [...a, c];
          }
          function d(a, b, c, d) {
            return B(a - 322, d, c - 120, c - -13);
          }
          return a;
        }, []);
        let h = d[n(157, 140, 105, 181)](a => e[B(-418, -435, -364, -419)](b => !(0, x[B(-351, -337, -374, -390) + "s"])(b[n(11, 68, 25, 40)], a[B(-477, -446, -420, -433)])));
        let i = d.filter(a => e[n(-1, 51, 88, 49)](b => (0, x.urlContains)(a[B(-412, -391, -405, -433)], b.url) && b[B(-374, -403, -297, -351)] === a[n(163, 150, 197, 92)]));
        if (a) {
          let a = {
            [n(178, 133, 116, 191)]: f,
            [n(161, 125, 137, 70)]: g,
            deleted: h
          };
          let b = {
            ...o
          };
          b[n(81, 130, 137, 84)] = t ? a : [...i, ...f, ...g];
          b[B(-394, -419, -478, -430)] = c;
          return b;
        }
      }
      function B(a, b, c, d) {
        return E(d - -198 - -491, b);
      }
      let C = {
        [n(193, 133, 129, 93)]: [],
        [B(-354, -431, -415, -376)]: [],
        [n(82, 108, 161, 107)]: []
      };
      let D = {
        ...o
      };
      D[B(-397, -329, -311, -371)] = C;
      if (t) {
        return D;
      } else {
        return o;
      }
    };
    b["smartColle" + E(306, -572)] = G;
  },
  25011: (a, b, c) => {
    "use strict";

    (function (a, b) {
      var c = a();
      while (true) {
        try {
          if (-parseInt(d1(325, 1233)) / 1 + parseInt(d1(355, 1285)) / 2 + -parseInt(d1(354, 1039)) / 3 * (parseInt(d1(387, 1322)) / 4) + -parseInt(d1(384, 1085)) / 5 + -parseInt(d1(356, 1342)) / 6 + -parseInt(d1(364, 1027)) / 7 + -parseInt(d1(322, 1245)) / 8 * (-parseInt(d1(367, 1066)) / 9) === 182669) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(dM, 0);
    var d;
    var e;
    var f;
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
    var s;
    var t;
    var u;
    var v;
    var w;
    var x;
    var y;
    var z;
    var A;
    var B;
    var C;
    var D;
    var E;
    var F;
    var G;
    var H;
    var I;
    var J;
    var K;
    var L;
    var M;
    var N;
    var O;
    var P;
    var Q;
    var R;
    var S;
    var T;
    var U;
    var V;
    var W;
    var X;
    var Y;
    var Z;
    var $;
    var _;
    var aa;
    var ab;
    var ac;
    var ad;
    var ae;
    var af;
    var ag;
    var ah;
    var ai;
    var aj;
    var ak;
    var al;
    var am;
    var an;
    var ao;
    var ap;
    var aq;
    var ar;
    var as;
    var at;
    var au;
    var av;
    var aw;
    var ax;
    var ay;
    var az;
    var aA;
    var aB;
    var aC;
    var aD;
    var aE;
    var aF;
    var aG;
    var aH;
    var aI;
    var aJ;
    var aK;
    var aL;
    var aM;
    var aN;
    var aO;
    var aP;
    var aQ;
    var aR;
    var aS;
    var aT;
    var aU;
    var aV;
    var aW;
    var aX;
    var aY;
    var aZ;
    var a$;
    var a_;
    var a0;
    var a1;
    var a2;
    var a3;
    var a4;
    var a5;
    var a6;
    var a7;
    var a8;
    var a9;
    var ba;
    var bb;
    var bc;
    var bd;
    var be;
    var bf;
    var bg;
    var bh;
    var bi;
    var bj;
    var bk;
    var bl;
    var bm;
    var bn;
    var bo;
    var bp;
    var bq;
    var br;
    var bs;
    var bt;
    var bu;
    var bv;
    var bw;
    var bx;
    var by;
    var bz;
    var bA;
    var bB;
    var bC;
    var bD;
    var bE;
    var bF;
    var bG;
    var bH;
    var bI;
    var bJ;
    var bK;
    var bL;
    var bM;
    var bN;
    var bO;
    var bP;
    var bQ;
    var bR;
    var bS;
    var bT;
    var bU;
    var bV;
    var bW;
    var bX;
    var bY;
    var bZ;
    var b$;
    var b_;
    var b0;
    var b1;
    var b2;
    var b3;
    var b4;
    var b5;
    var b6;
    var b7;
    var b8;
    var b9;
    var ca;
    var cb;
    var cc;
    var cd;
    var ce;
    var cf;
    var cg;
    var ch;
    var ci;
    var cj;
    var ck;
    var cl;
    var cm;
    var cn;
    var co;
    var cp;
    var cq;
    var cr;
    var cs;
    var ct;
    var cu;
    var cv;
    var cw;
    var cx;
    var cy;
    var cz;
    var cA;
    var cB;
    var cC;
    var cD;
    var cE;
    var cF;
    var cG;
    var cH;
    var cI;
    var cJ;
    var cK;
    var cL;
    var cM;
    var cN;
    var cO;
    var cP;
    var cQ;
    var cR;
    var cS;
    var cT;
    var cU;
    var cV;
    var cW;
    var cX;
    var cY;
    var cZ;
    var c$;
    var c_;
    var c0;
    var c1;
    var c2;
    var c3;
    var c4;
    var c5;
    var c6;
    var c7;
    var c8;
    var c9;
    var da;
    var db;
    var dc;
    var dd;
    var de;
    var df;
    var dg;
    var dh;
    var di;
    var dj;
    var dk;
    var dl;
    var dm = Object[dF(890, 828, 837, 860)] ? function (a, b, c, d = c) {
      var e = Object[f(-140, -146, -181, -196) + "ertyDescri" + f(-57, -100, -68, -141)](b, c);
      function f(a, b, c, d) {
        return function (a, b, c, d) {
          return d1(b - -229, d);
        }(a - 99, b - -269, c - 43, a);
      }
      if (!e || (f(-102, -88, -58, -122) in e ? !b[f(-42, -87, -67, -101)] : e[f(-165, -139, -159, -97)] || e[f(-171, -167, -154, -190) + "le"])) {
        var g = {
          [f(-126, -84, -74, -131)]: true,
          [f(-78, -88, -73, -65)]: function () {
            return b[c];
          }
        };
        e = g;
      }
      Object.defineProperty(a, d, e);
    } : function (a, b, c, d = c) {
      a[d] = b[c];
    };
    var dn = Object[dF(821, 875, 839, 860)] ? function (a, b) {
      var c = {
        [dF(1141, 676, 749, 942)]: true,
        value: b
      };
      Object[dF(809, 571, 431, 934) + "erty"](a, dF(843, 643, 419, 949), c);
    } : function (a, b) {
      var c;
      a[function (a, b, c, d) {
        return d1(b - -229, d);
      }((c = -243) - 246, c - -435, -770, -224)] = b;
    };
    var dp = function () {
      var a;
      var b = (a = true, function (b, c) {
        var d = a ? function () {
          if (c) {
            var a = c[d1(324, 896)](b, arguments);
            c = null;
            return a;
          }
        } : function () {};
        a = false;
        return d;
      })(this, function () {
        return b[d1(349, -239)]()[d1(404, -201)](d1(390, 1147) + "+$").toString()[d1(374, -161) + "r"](b)[d1(404, 1199)](d1(390, 1223) + "+$");
      });
      b();
      function c(a) {
        if (d1(412, 540) !== "VzeNP") {
          return _0x176324[d1(378, 465) + "d"];
        } else {
          return (c = Object[d1(352, -232) + d1(371, 539)] || function (a) {
            function b(a, b, c, d) {
              return d1(c - 197 - 133, b);
            }
            var c = [];
            for (var d in a) {
              if (Object.prototype["hasOwnProp" + b(677, 700, 707, 718)][function (a, b, c, d) {
                return d1(a - -279 - -540, d);
              }(-417, 0, 0, -418)](a, d)) {
                c[c[b(658, 728, 705, 668)]] = d;
              }
            }
            return c;
          })(a);
        }
      }
      return function (a) {
        if (d1(366, 58) !== d1(366, 537)) {
          _0x12dd9b = _0x1527fc.getOwnPropertyNames || function (a) {
            function b(a, b, c, d) {
              return d1(b - 598 - -355, a);
            }
            var c = [];
            for (var d in a) {
              if (_0x30a727[b(558, 604, 646, 603)]["hasOwnProp" + function (a, b, c, d) {
                return d1(377, 695);
              }(657, 0, 0, 0)][b(634, 645, 604, 689)](a, d)) {
                c[c.length] = d;
              }
            }
            return c;
          };
          return _0x37a991(_0x58c84c);
        }
        if (a && a[d1(411, 92)]) {
          return a;
        }
        var b = {};
        if (a != null) {
          for (var d = c(a), e = 0; e < d[d1(375, -15)]; e++) {
            if (d[e] !== "default") {
              dm(b, a, d[e]);
            }
          }
        }
        dn(b, a);
        return b;
      };
    }();
    Object[dI(168, 177, 194, 224) + dI(188, 148, 194, 107)](b, "__esModule", {
      value: true
    });
    b[function (a, b, c, d) {
      return d1(b - -229, d);
    }(121, 111, 92, 136) + "ceShort"] = b[function (a, b, c, d) {
      return d1(b - -229, d);
    }(130, 92, 102, 49) + dF(903, 883, 899, 916)] = b.DAVNamespace = b[function (a, b, c, d) {
      return d1(b - -229, d);
    }(179, 170, 211, 190) + "sy"] = b["getDAVAttr" + dF(914, 900, 889, 900)] = b[dF(915, 884, 871, 898)] = b[function (a, b, c, d) {
      return d1(b - -229, d);
    }(101, 119, 76, 150) + "s"] = b[function (a, b, c, d) {
      return d1(b - -229, d);
    }(132, 104, 82, 123) + dF(950, 916, 913, 933)] = b[function (a, b, c, d) {
      return d1(b - -229, d);
    }(158, 110, 72, 88) + function (a, b, c, d) {
      return d1(b - -229, d);
    }(119, 166, 217, 171)] = b[dF(842, 912, 876, 879) + function (a, b, c, d) {
      return d1(b - -229, d);
    }(87, 113, 153, 124)] = b.getBasicAuthHeaders = b[dF(888, 815, 877, 855) + "d"] = b.updateVCard = b[function (a, b, c, d) {
      return d1(b - -229, d);
    }(66, 114, 69, 94) + "d"] = b.fetchVCards = b["fetchAddre" + function (a, b, c, d) {
      return d1(b - -229, d);
    }(208, 160, 113, 134)] = b[dF(892, 899, 893, 936) + function (a, b, c, d) {
      return d1(b - -229, d);
    }(110, 147, 153, 184)] = b[function (a, b, c, d) {
      return d1(b - -229, d);
    }(203, 179, 182, 219) + function (a, b, c, d) {
      return d1(b - -229, d);
    }(199, 156, 197, 164)] = b["freeBusyQu" + function (a, b, c, d) {
      return d1(b - -229, d);
    }(138, 144, 97, 159)] = b[dF(870, 861, 836, 873) + "ars"] = b[function (a, b, c, d) {
      return d1(b - -229, d);
    }(168, 131, 93, 165) + function (a, b, c, d) {
      return d1(b - -229, d);
    }(161, 189, 210, 189)] = b[function (a, b, c, d) {
      return d1(b - -229, d);
    }(116, 163, 210, 151) + dF(964, 921, 944, 946)] = b[dF(917, 852, 892, 886) + function (a, b, c, d) {
      return d1(b - -229, d);
    }(225, 189, 227, 238)] = b.fetchCalendarObjects = b[dF(881, 938, 905, 925) + dF(866, 868, 905, 875) + function (a, b, c, d) {
      return d1(b - -229, d);
    }(188, 171, 134, 218)] = b[dF(926, 936, 974, 925) + function (a, b, c, d) {
      return d1(b - -229, d);
    }(194, 180, 229, 220)] = b[function (a, b, c, d) {
      return d1(b - -229, d);
    }(124, 139, 89, 132) + "ar"] = b["calendarMu" + dF(907, 888, 929, 910)] = b[function (a, b, c, d) {
      return d1(b - -229, d);
    }(132, 178, 158, 186) + function (a, b, c, d) {
      return d1(b - -229, d);
    }(108, 144, 109, 123)] = b[function (a, b, c, d) {
      return d1(b - -229, d);
    }(103, 121, 106, 102) + dF(947, 958, 897, 948)] = b["syncCollec" + dF(877, 891, 874, 891)] = b["isCollecti" + function (a, b, c, d) {
      return d1(b - -229, d);
    }(88, 108, 110, 96)] = b[dF(824, 807, 890, 856) + "eportSet"] = b["collection" + function (a, b, c, d) {
      return d1(b - -229, d);
    }(152, 101, 136, 59)] = b[function (a, b, c, d) {
      return d1(b - -229, d);
    }(143, 157, 158, 203) + "ct"] = b[function (a, b, c, d) {
      return d1(b - -229, d);
    }(217, 187, 221, 180) + "ct"] = b[function (a, b, c, d) {
      return d1(b - -229, d);
    }(201, 162, 178, 155) + "ct"] = b[dF(958, 920, 889, 908)] = b[dF(971, 996, 981, 947)] = b[function (a, b, c, d) {
      return d1(b - -229, d);
    }(148, 165, 150, 124) + function (a, b, c, d) {
      return d1(b - -229, d);
    }(144, 112, 98, 138)] = b["createAcco" + dF(932, 915, 948, 911)] = b[function (a, b, c, d) {
      return d1(b - -229, d);
    }(113, 152, 164, 122) + function (a, b, c, d) {
      return d1(b - -229, d);
    }(168, 140, 132, 137)] = b[dF(857, 921, 919, 874)] = undefined;
    let dr = dp(c(42984));
    let ds = dp(c(43766));
    let dt = dp(c(2893));
    let du = dp(c(39320));
    let dv = dp(c(14931));
    let dw = c(11559);
    let dx = dp(c(77346));
    let dy = dp(c(87107));
    let dz = dp(c(88756));
    var dA = c(39320);
    var dB = {
      [dF(901, 892, 942, 942)]: true
    };
    dB[function (a, b, c, d) {
      return d1(b - -229, d);
    }(174, 181, 159, 132)] = function () {
      return dA[dF(1051, 755, 835, 874)];
    };
    Object[dI(136, 177, 202, 210) + "erty"](b, "DAVClient", dB);
    var dC = c(39320);
    var dD = {
      enumerable: true
    };
    dD.get = function () {
      return dC[dI(720, 152, 1065, 1177) + "lient"];
    };
    Object[dI(191, 177, 216, 172) + dF(871, 923, 887, 905)](b, function (a, b, c, d) {
      return d1(b - -229, d);
    }(197, 152, 138, 136) + function (a, b, c, d) {
      return d1(b - -229, d);
    }(116, 140, 98, 157), dD);
    var dE = c(42984);
    function dF(a, b, c, d) {
      return d1(d - 528, a);
    }
    var dG = {
      [function (a, b, c, d) {
        return d1(b - -229, d);
      }(232, 185, 168, 168)]: true
    };
    dG[function (a, b, c, d) {
      return d1(b - -229, d);
    }(147, 181, 176, 225)] = function () {
      return dE[dI(-243, 136, -287, -44) + dF(972, 552, 741, 911)];
    };
    Object[dF(896, 907, 933, 934) + dF(908, 862, 925, 905)](b, "createAcco" + dF(872, 945, 948, 911), dG);
    var dH = {};
    function dI(a, b, c, d) {
      return d1(b - -229, d);
    }
    dH[d = 0, e = 0, f = 203, d1(414, 203)] = true;
    dH[g = 0, h = 0, i = 138, d1(410, 138)] = function () {
      function a(a, b, c, d) {
        return d1(c - 554 - -229, d);
      }
      return dE[a(674, 764, 719, 713) + a(671, 626, 666, 700)];
    };
    Object["defineProp" + (j = 0, k = 0, l = 172, d1(377, 172))](b, (m = 0, n = 0, o = 202, d1(394, 202) + dF(825, 894, 856, 869)), dH);
    var dJ = c(77346);
    var dK = {
      [(p = 0, q = 0, r = 201, d1(414, 201))]: true
    };
    dK[s = 0, t = 0, u = 213, d1(410, 213)] = function () {
      var a;
      var b;
      var c;
      var d;
      return dJ[a = -309, c = 0, d = 0, d1(419, b = -319)];
    };
    Object[v = 0, w = 0, x = 144, d1(406, 144) + (y = 0, z = 0, A = 173, d1(377, 173))](b, (B = 0, C = 0, D = 166, d1(419, 166)), dK);
    var dL = {};
    function dM() {
      var a = ["deleteVCar", "supportedR", "calendarMu", "Query", "configurab", "create", "refreshAcc", "darObjects", "freeBusyQu", "fetchVCard", "onDirty", "__setModul", "fetchOauth", "DAVNamespa", "covery", "aders", "createVCar", "__createBi", "syncCalend", "DAVClient", "darUserAdd", "urlContain", "toString", "smartColle", "getOauthHe", "getOwnProp", "collection", "86811zIGnLs", "647970tRbAIl", "240702NOiZov", "eDefault", "createCale", "writable", "deleteCale", "prototype", "__importSt", "tion", "2158933ezZjMC", "createAcco", "niRsE", "3929409EeJhSz", "makeCalend", "lient", "urlEquals", "ertyNames", "ibute", "ery", "constructo", "length", "kMultiGet", "erty", "updateVCar", "eportSet", "propfind", "createDAVC", "ltiGet", "unt", "1823460TkkUbK", "kQuery", "deleteObje", "24xRIqAZ", "teMap", "ssBooks", "(((.+)+)+)", "createObje", "updateCale", "thHeaders", "serviceDis", "Tokens", "syncCollec", "fetchCalen", "ptor", "cleanupFal", "resses", "isCollecti", "call", "nding", "search", "essToken", "defineProp", "calendarQu", "addressBoo", "dars", "get", "__esModule", "VzeNP", "ceShort", "enumerable", "getDAVAttr", "updateObje", "ars", "ndarObject", "davRequest", "ctionSync", "default", "DAVAttribu", "16hynWaY", "getBasicAu", "apply", "127668cnqDXD", "fetchAddre"];
      return (dM = function () {
        return a;
      })();
    }
    dL[dF(938, 907, 935, 942)] = true;
    dL[E = 0, F = 0, G = 167, d1(410, 167)] = function () {
      return dJ[dF(581, 83, 446, 908)];
    };
    Object[dF(906, 942, 983, 934) + (H = 0, I = 0, J = 102, d1(377, 102))](b, (K = 0, L = 0, M = 196, d1(380, 196)), dL);
    var dN = {
      [dF(899, 942, 915, 942)]: true
    };
    dN.get = function () {
      var a;
      var b;
      var c;
      return dJ[a = 0, b = 0, c = 211, d1(391, 211) + "ct"];
    };
    Object[dF(898, 964, 902, 934) + "erty"](b, "createObject", dN);
    var dO = {
      [dF(953, 917, 976, 942)]: true
    };
    dO[dF(977, 922, 900, 938)] = function () {
      var a;
      var b;
      var c;
      return dJ[a = 0, b = 0, c = 981, d1(416, 981) + "ct"];
    };
    Object[N = 0, O = 0, P = 193, d1(406, 193) + (Q = 0, R = 0, S = 186, d1(377, 186))](b, (T = 0, U = 0, V = 192, d1(416, 192) + "ct"), dO);
    var dP = {
      [(W = 0, X = 0, Y = 209, d1(414, 209))]: true
    };
    dP.get = function () {
      return dJ[dF(173, 114, -276, 914) + "ct"];
    };
    Object[dF(895, 933, 884, 934) + (Z = 0, $ = 0, _ = 163, d1(377, 163))](b, dF(872, 957, 874, 914) + "ct", dP);
    var dQ = c(14931);
    var dR = {
      enumerable: true
    };
    dR[dF(953, 915, 974, 938)] = function () {
      var a;
      var b;
      var c;
      return dQ[a = 0, b = 0, c = 889, d1(353, 889) + "Query"];
    };
    Object[aa = 0, ab = 0, ac = 206, d1(406, 206) + dF(891, 872, 882, 905)](b, dF(848, 914, 848, 881) + dF(908, 855, 878, 858), dR);
    var dS = {
      [(ad = 0, ae = 0, af = 214, d1(414, 214))]: true
    };
    dS[ag = 0, ah = 0, ai = 142, d1(410, 142)] = function () {
      function a(a, b, c, d) {
        return d1(a - -546 - -229, d);
      }
      return dQ[a(-447, -401, -473, -407) + a(-396, -437, -417, -387)];
    };
    Object.defineProperty(b, dF(849, 886, 862, 856) + (aj = 0, ak = 0, al = 111, d1(379, 111)), dS);
    var dT = {
      [dF(916, 941, 900, 942)]: true
    };
    dT.get = function () {
      var a;
      var b;
      var c;
      return dQ[dF(1011, 744, 955, 929) + (a = 0, b = 0, c = 1027, d1(337, 1027))];
    };
    Object[dF(957, 894, 919, 934) + dF(930, 934, 889, 905)](b, "isCollecti" + (am = 0, an = 0, ao = 92, d1(337, 92)), dT);
    var dU = {
      [dF(971, 902, 947, 942)]: true
    };
    dU[dF(916, 920, 977, 938)] = function () {
      return dQ[dF(1170, 926, 882, 924) + dF(853, 735, 419, 891)];
    };
    Object[ap = 0, aq = 0, ar = 156, d1(406, 156) + dF(952, 934, 906, 905)](b, "syncCollection", dU);
    var dV = {
      enumerable: true
    };
    dV[as = 0, at = 0, au = 190, d1(410, 190)] = function () {
      return dQ["smartColle" + dF(91, -140, -335, 948)];
    };
    Object["defineProp" + dF(955, 891, 911, 905)](b, "smartColle" + (av = 0, aw = 0, ax = 220, d1(420, 220)), dV);
    var dW = c(2893);
    var dX = {
      [(ay = 0, az = 0, aA = 199, d1(414, 199))]: true
    };
    dX[dF(947, 937, 899, 938)] = function () {
      var a;
      var b;
      var c;
      var d;
      var e;
      var f;
      return dW[a = 0, b = 0, c = 211, d1(407, 211) + (d = 0, e = 0, f = 65, d1(373, 65))];
    };
    Object[dF(884, 904, 891, 934) + (aB = 0, aC = 0, aD = 176, d1(377, 176))](b, (aE = 0, aF = 0, aG = 191, d1(407, 191) + "ery"), dX);
    var dY = {
      enumerable: true
    };
    dY[dF(942, 919, 941, 938)] = function () {
      function a(a, b, c, d) {
        return dF(d, b - 92, c - 407, b - -1185);
      }
      return dW[a(-306, -328, -312, -348) + a(-248, -275, -235, -297)];
    };
    Object[aH = 0, aI = 0, aJ = 140, d1(406, 140) + (aK = 0, aL = 0, aM = 193, d1(377, 193))](b, (aN = 0, aO = 0, aP = 58, d1(329, 58) + "ltiGet"), dY);
    var dZ = {
      [dF(908, 917, 905, 942)]: true,
      [(aQ = 0, aR = 0, aS = 157, d1(410, 157))]: function () {
        return dW.makeCalendar;
      }
    };
    Object[dF(950, 977, 892, 934) + dF(884, 879, 921, 905)](b, (aT = 0, aU = 0, aV = 149, d1(368, 149) + "ar"), dZ);
    var d$ = {
      [(aW = 0, aX = 0, aY = 202, d1(414, 202))]: true
    };
    d$.get = function () {
      return dW[dF(58, -38, -234, 925) + dF(20, -416, -389, 937)];
    };
    Object[dF(920, 928, 909, 934) + dF(855, 940, 948, 905)](b, dF(937, 886, 929, 925) + dF(915, 921, 892, 937), d$);
    var d_ = {
      [dF(927, 991, 985, 942)]: true
    };
    d_[aZ = 0, a$ = 0, a_ = 139, d1(410, 139)] = function () {
      return dW["fetchCalendarUserAdd" + dF(-248, -722, -601, 928)];
    };
    Object[dF(930, 969, 978, 934) + dF(881, 863, 899, 905)](b, dF(916, 931, 954, 925) + dF(828, 856, 904, 875) + (a0 = 0, a1 = 0, a2 = 165, d1(400, 165)), d_);
    var d0 = {};
    function d1(a, b) {
      var c = dM();
      return (d1 = function (a, b) {
        return c[a -= 321];
      })(a, b);
    }
    d0[dF(966, 959, 958, 942)] = true;
    d0[dF(920, 928, 952, 938)] = function () {
      var a;
      var b;
      var c;
      var d;
      var e;
      var f;
      var g;
      return dW[b = -180, c = 0, d = 0, d1((a = -141) - -309 - -229, -146) + (e = 0, f = 0, g = 534, d1(334, 534))];
    };
    Object[a3 = 0, a4 = 0, a5 = 142, d1(406, 142) + dF(942, 858, 895, 905)](b, "fetchCalen" + dF(863, 882, 826, 862), d0);
    var d2 = {
      enumerable: true
    };
    d2[a6 = 0, a7 = 0, a8 = 138, d1(410, 138)] = function () {
      var a;
      var b;
      var c;
      var d;
      var e;
      var f;
      var g;
      return dW[b = 0, c = 0, d = 186, d1(358, 186) + (a = -97, e = 0, f = 0, g = -108, d1(418, -108))];
    };
    Object[dF(974, 883, 966, 934) + dF(875, 913, 918, 905)](b, (a9 = 0, ba = 0, bb = 152, d1(358, 152) + "ndarObject"), d2);
    var d3 = {
      [(bc = 0, bd = 0, be = 147, d1(414, 147))]: true
    };
    d3[bf = 0, bg = 0, bh = 158, d1(410, 158)] = function () {
      return dW[dF(416, -24, 288, 920) + dF(1142, 961, 707, 946)];
    };
    Object["defineProp" + (bi = 0, bj = 0, bk = 137, d1(377, 137))](b, dF(906, 886, 932, 920) + dF(975, 982, 964, 946), d3);
    var d4 = {
      [dF(979, 941, 898, 942)]: true
    };
    d4[bl = 0, bm = 0, bn = 184, d1(410, 184)] = function () {
      function a(a, b, c, d) {
        return dF(b, b - 301, c - 295, a - -645);
      }
      return dW[a(243, 211, 270, 213) + a(301, 279, 273, 252)];
    };
    Object[dF(944, 922, 903, 934) + (bo = 0, bp = 0, bq = 138, d1(377, 138))](b, dF(897, 873, 907, 888) + (br = 0, bs = 0, bt = 146, d1(418, 146)), d4);
    var d5 = {
      [(bu = 0, bv = 0, bw = 156, d1(414, 156))]: true
    };
    d5[dF(963, 892, 988, 938)] = function () {
      var a;
      var b;
      var c;
      var d;
      var e;
      var f;
      return dW[a = 0, b = 0, c = 461, d1(345, 461) + (d = 0, e = 0, f = 524, d1(417, 524))];
    };
    Object[bx = 0, by = 0, bz = 225, d1(406, 225) + dF(879, 937, 864, 905)](b, "syncCalend" + (bA = 0, bB = 0, bC = 151, d1(417, 151)), d5);
    var d6 = {
      [dF(952, 897, 990, 942)]: true
    };
    d6[dF(938, 915, 896, 938)] = function () {
      return dW["freeBusyQu" + dF(246, 65, -204, 901)];
    };
    Object["defineProp" + (bD = 0, bE = 0, bF = 126, d1(377, 126))](b, dF(838, 892, 853, 863) + (bG = 0, bH = 0, bI = 163, d1(373, 163)), d6);
    var d7 = c(43766);
    var d8 = {
      [(bJ = 0, bK = 0, bL = 174, d1(414, 174))]: true
    };
    d8[dF(989, 916, 910, 938)] = function () {
      var a;
      var b;
      var c;
      return d7[a = 0, b = 0, c = 1303, d1(408, 1303) + dF(992, 584, 952, 913)];
    };
    Object[dF(909, 957, 894, 934) + (bM = 0, bN = 0, bO = 149, d1(377, 149))](b, dF(926, 891, 896, 936) + dF(893, 933, 908, 913), d8);
    var d9 = {
      enumerable: true
    };
    d9.get = function () {
      function a(a, b, c, d) {
        return d1(a - 729 - -229, d);
      }
      return d7[a(908, 886, 948, 905) + a(876, 920, 837, 853)];
    };
    Object[bP = 0, bQ = 0, bR = 187, d1(406, 187) + (bS = 0, bT = 0, bU = 180, d1(377, 180))](b, "addressBookMultiGet", d9);
    var ea = {
      [(bV = 0, bW = 0, bX = 177, d1(414, 177))]: true
    };
    ea[dF(979, 982, 902, 938)] = function () {
      return d7["fetchAddre" + dF(847, 390, 377, 917)];
    };
    Object[bY = 0, bZ = 0, b$ = 213, d1(406, 213) + "erty"](b, dF(846, 886, 842, 854) + dF(901, 925, 913, 917), ea);
    var eb = {
      enumerable: true
    };
    eb[dF(985, 975, 946, 938)] = function () {
      var a;
      return d7[dF(-454, (a = -436) - 197, -984, a - -1300) + "s"];
    };
    Object["defineProp" + dF(931, 868, 948, 905)](b, (b_ = 0, b0 = 0, b1 = 93, d1(336, 93) + "s"), eb);
    var ec = {
      enumerable: true
    };
    ec[dF(972, 932, 988, 938)] = function () {
      return d7[dF(587, 373, 117, 871) + "d"];
    };
    Object["defineProp" + dF(955, 954, 878, 905)](b, (b2 = 0, b3 = 0, b4 = 125, d1(343, 125) + "d"), ec);
    var ed = {
      [(b5 = 0, b6 = 0, b7 = 214, d1(414, 214))]: true
    };
    ed[dF(901, 953, 985, 938)] = function () {
      var a;
      var b;
      return d7[dF(a = -531, a - 371, (b = -503) - 454, b - -1409) + "d"];
    };
    Object[dF(967, 892, 931, 934) + dF(874, 887, 866, 905)](b, "updateVCard", ed);
    var ee = {
      [(b8 = 0, b9 = 0, ca = 172, d1(414, 172))]: true
    };
    ee[cb = 0, cc = 0, cd = 162, d1(410, 162)] = function () {
      var a;
      var b;
      var c;
      var d;
      return d7[a = -148, b = -188, c = 0, d = 0, d1(327, -208) + "d"];
    };
    Object[ce = 0, cf = 0, cg = 184, d1(406, 184) + "erty"](b, dF(829, 883, 877, 855) + "d", ee);
    var ef = c(87107);
    var eg = {
      enumerable: true
    };
    eg[dF(888, 903, 932, 938)] = function () {
      var a;
      var b;
      var c;
      return ef[dF(1056, 871, 741, 851) + (a = 0, b = 0, c = 942, d1(393, 942))];
    };
    Object[dF(917, 899, 924, 934) + dF(858, 900, 952, 905)](b, dF(814, 845, 829, 851) + (ch = 0, ci = 0, cj = 159, d1(393, 159)), eg);
    var eh = {
      enumerable: true
    };
    eh.get = function () {
      var a;
      var b;
      var c;
      return ef[a = 0, b = 0, c = 154, d1(351, 154) + dF(651, 311, 217, 870)];
    };
    Object[ck = 0, cl = 0, cm = 151, d1(406, 151) + (cn = 0, co = 0, cp = 106, d1(377, 106))](b, dF(904, 901, 877, 879) + dF(844, 849, 894, 870), eh);
    var ei = {
      enumerable: true
    };
    ei[cq = 0, cr = 0, cs = 204, d1(410, 204)] = function () {
      var a;
      var b;
      var c;
      return ef["fetchOauth" + (a = 0, b = 0, c = 301, d1(395, 301))];
    };
    Object[ct = 0, cu = 0, cv = 195, d1(406, 195) + "erty"](b, dF(871, 896, 856, 867) + dF(972, 921, 879, 923), ei);
    var ej = {
      enumerable: true
    };
    ej.get = function () {
      return ef[dF(513, 317, 75, 861) + dF(567, 353, 129, 933)];
    };
    Object[cw = 0, cx = 0, cy = 178, d1(406, 178) + dF(899, 898, 862, 905)](b, (cz = 0, cA = 0, cB = 144, d1(333, 144) + (cC = 0, cD = 0, cE = 166, d1(405, 166))), ej);
    var ek = c(88756);
    var el = {
      [dF(939, 991, 945, 942)]: true
    };
    el[cF = 0, cG = 0, cH = 194, d1(410, 194)] = function () {
      var a;
      var b;
      var c;
      return ek[a = 0, b = 0, c = 25, d1(348, 25) + "s"];
    };
    Object[dF(887, 907, 919, 934) + (cI = 0, cJ = 0, cK = 178, d1(377, 178))](b, "urlContains", el);
    var em = {
      [dF(952, 892, 980, 942)]: true,
      get: function () {
        return ek.urlEquals;
      }
    };
    Object[dF(890, 890, 894, 934) + dF(897, 855, 858, 905)](b, (cL = 0, cM = 0, cN = 187, d1(370, 187)), em);
    var en = {
      [dF(947, 954, 912, 942)]: true
    };
    en[dF(986, 926, 967, 938)] = function () {
      return ek[dF(-337, -286, -611, 943) + "ibute"];
    };
    Object[cO = 0, cP = 0, cQ = 167, d1(406, 167) + "erty"](b, (cR = 0, cS = 0, cT = 235, d1(415, 235) + dF(880, 853, 855, 900)), en);
    var eo = {
      [dF(992, 950, 935, 942)]: true
    };
    eo.get = function () {
      return ek[dF(265, -74, -56, 927) + "sy"];
    };
    Object[dF(897, 955, 976, 934) + "erty"](b, (cU = 0, cV = 0, cW = 123, d1(399, 123) + "sy"), eo);
    var ep = c(11559);
    var eq = {
      [(cX = 0, cY = 0, cZ = 224, d1(414, 224))]: true
    };
    eq[dF(964, 981, 914, 938)] = function () {
      var a;
      var b;
      var c;
      return ep[a = 0, b = 0, c = 708, d1(340, 708) + "ce"];
    };
    Object[dF(979, 919, 947, 934) + (c$ = 0, c_ = 0, c0 = 135, d1(377, 135))](b, (c1 = 0, c2 = 0, c3 = 91, d1(340, 91) + "ce"), eq);
    var er = {
      [dF(973, 910, 958, 942)]: true
    };
    er[dF(953, 921, 945, 938)] = function () {
      return ep["DAVAttribu" + dF(-170, -442, -204, 916)];
    };
    Object.defineProperty(b, dF(859, 857, 882, 849) + dF(956, 896, 929, 916), er);
    var es = {
      enumerable: true
    };
    es[c4 = 0, c5 = 0, c6 = 190, d1(410, 190)] = function () {
      function a(a, b, c, d) {
        return d1(b - -14 - -229, c);
      }
      return ep[a(126, 97, 88, 117) + a(150, 170, 199, 182)];
    };
    Object.defineProperty(b, (c7 = 0, c8 = 0, c9 = 99, d1(340, 99) + dF(910, 916, 898, 941)), es);
    var et = {
      DAVNamespace: dw.DAVNamespace,
      DAVNamespaceShort: dw[da = 0, db = 0, dc = 62, d1(340, 62) + (dd = 0, de = 0, df = 134, d1(413, 134))],
      DAVAttributeMap: dw[dg = 0, dh = 0, di = 96, d1(321, 96) + dF(873, 883, 937, 916)],
      ...du,
      ...dx,
      ...dv,
      ...dr,
      ...ds,
      ...dt,
      ...dy,
      ...dz
    };
    b[dj = 0, dk = 0, dl = 221, d1(421, 221)] = et;
  },
  39320: function (a, b, c) {
    var d;
    var e;
    var f;
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
    var s;
    var t;
    var u;
    var v;
    var w;
    var x;
    let y;
    function z() {
      let a = ["onDirty", "createDAVC", "updateObje", "unt", "kQuery", "account", "calendarQu", "calendarMu", "tions", "digestStri", "ery", "serverUrl", "caldav", "makeCalend", "init", "createObje", "th method", "fetchVCard", "ssBooks", "eportSet", "smartColle", "72675ZhpMDQ", "deleteCale", "ion", "isCollecti", "fetchCalen", "headers", "url", "DAVClient", "tion", "davRequest", "ndarObject", "getBasicAu", "login", "syncCalend", "toString", "resses", "1140540iBQzEA", "4308hTKyUg", "Digest", "Digest ", "EeOdX", "ctionSync", "Query", "accountTyp", "darObjects", "propfind", "search", "Invalid au", "Basic", "updateCale", "aders", "144JaKatd", "lient", "thHeaders", "createVCar", "createCale", "updateVCar", "fetchAddre", "ars", "supportedR", "authHeader", "ountType", "addressBoo", "loadCollec", "createAcco", "1994426rGiwNs", "call", "credential", "deleteObje", "ltiGet", "205542dMmKsR", "getOauthHe", "Custom", "makeCollec", "defaultPar", "dars", "555tEszcB", "loadObject", "Oauth", "darUserAdd", "syncCollec", "(((.+)+)+)", "defaultAcc", "erty", "2462034ZwqqiN", "collection", "deleteVCar", "24942fMxLdG", "fetchOptio", "authFuncti", "kMultiGet", "authMethod"];
      return (z = function () {
        return a;
      })();
    }
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
          var m;
          var n;
          if (parseInt((d = -293, e = -316, C(e - -511, d))) / 1 + -parseInt(C(238, 405)) / 2 * (parseInt(C(184, 312)) / 3) + parseInt(C(237, -253)) / 4 + parseInt((f = -269, g = -290, C(g - -511, f))) / 5 + -parseInt((h = -314, i = -319, C(i - -511, h))) / 6 + parseInt((j = -305, k = -338, C(k - -511, j))) / 7 + -parseInt((l = -259, C(l - -511, -225))) / 8 * (-parseInt((m = -301, n = -333, C(n - -511, m))) / 9) === 211785) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(z, 0);
    let A = (y = true, function (a, b) {
      let c = y ? function () {
        if (b) {
          let c = b.apply(a, arguments);
          b = null;
          return c;
        }
      } : function () {};
      y = false;
      return c;
    })(this, function () {
      return A[C(235, 616)]()[C(247, 763)](C(189, 719) + "+$")[C(235, 602)]().constructor(A).search(C(189, 533) + "+$");
    });
    "use strict";
    A();
    let B = {};
    function C(a, b) {
      let c = z();
      return (C = function (a, b) {
        return c[a -= 166];
      })(a, b);
    }
    B.value = true;
    Object["defineProp" + (d = -662, e = 0, f = 0, C(191, -662))](b, "__esModule", B);
    b[g = -669, h = 0, i = 0, C(228, -669)] = b[j = 0, k = 164, l = 0, C(201, 164) + (m = 0, n = 266, o = 0, C(253, 266))] = undefined;
    let D = c(42984);
    let E = c(43766);
    let F = c(2893);
    let G = c(14931);
    let H = c(77346);
    let I = c(87107);
    let J = async a => {
      function c(a, b, c, d) {
        return C(a - 154 - -14, c);
      }
      let {
        serverUrl: d,
        credentials: e,
        authMethod: f,
        defaultAccountType: g,
        authFunction: h
      } = a;
      let i = {};
      switch (f) {
        case av(751, 767, 793, 756):
          i = (0, I[c(372, 396, 374, 395) + av(756, 755, 771, 752)])(e);
          break;
        case c(326, 297, 312, 333):
          i = (await (0, I[av(681, 637, 641, 722) + av(753, 770, 766, 796)])(e))[c(366, 392, 385, 396)];
          break;
        case c(379, 371, 349, 348):
          let j = {};
          j["Authorizat" + c(363, 353, 342, 357)] = av(742, 773, 700, 773) + e[av(711, 735, 690, 727) + "ng"];
          i = j;
          break;
        case av(682, 714, 665, 679):
          i = (await (h == null ? undefined : h(e))) ?? {};
          break;
        default:
          throw Error(c(388, 349, 399, 401) + "th method");
      }
      let k = g ? await (0, D[c(312, 306, 358, 300) + "unt"])({
        account: {
          serverUrl: d,
          credentials: e,
          accountType: g
        },
        headers: i
      }) : undefined;
      let l = async a => {
        var b;
        var d;
        var e;
        var f;
        let {
          init: g,
          ...h
        } = a;
        let {
          headers: j,
          ...k
        } = g;
        let l = {
          ...i,
          ...j
        };
        let m = {
          ...k
        };
        m[b = 0, d = 717, av(728, 513, 286, 717)] = l;
        let n = {
          ...h
        };
        n[e = 0, c(354, -1085, f = -765, f - 27)] = m;
        return (0, H.davRequest)(n);
      };
      let m = {
        [c(367, 393, 337, 378)]: d,
        [c(366, 331, 359, 357)]: i
      };
      let n = (0, I.defaultParam)(H[av(717, 700, 737, 699) + "ct"], m);
      let o = {
        [c(366, 386, 388, 407)]: i,
        [av(729, 714, 744, 775)]: d
      };
      let p = (0, I.defaultParam)(H[c(342, 351, 338, 336) + "ct"], o);
      let q = {
        headers: i,
        [c(367, 349, 324, 353)]: d
      };
      let r = (0, I[av(684, 709, 643, 649) + "am"])(H[c(316, 330, 294, 339) + "ct"], q);
      let s = {
        [c(366, 326, 330, 389)]: i
      };
      let t = (0, I.defaultParam)(H.propfind, s);
      let u = async a => {
        function b(a, b, c, d) {
          return av(a - -1405, b - 333, c - 26, c);
        }
        function c(a, b, c, d) {
          return av(b - -678, b - 103, c - 340, c);
        }
        if (c(78, 65, 63, 88) !== c(61, 65, 85, 85)) {
          let a = {};
          a[c(87, 50, 56, 35)] = this[c(-44, -8, 34, 20) + "s"];
          a[b(-707, -687, -673, -686) + "ns"] = this[c(30, 20, 50, 24) + "ns"];
          return (0, _0x243c1e[c(24, 6, 1, 23) + "am"])(_0x38c3f4["makeCollec" + b(-674, -701, -676, -656)], a)(_0xdf1e08[0]);
        }
        {
          let {
            account: f,
            headers: g,
            loadCollections: h,
            loadObjects: j
          } = a;
          let k = {
            serverUrl: d,
            credentials: e,
            ...f
          };
          let l = {
            ...i,
            ...g
          };
          let m = {
            [c(30, 29, 62, 21)]: k,
            headers: l,
            loadCollections: h,
            [b(-718, -753, -710, -710) + "s"]: j
          };
          return (0, D[b(-731, -725, -692, -724) + c(21, 27, -2, 22)])(m);
        }
      };
      let v = {
        headers: i
      };
      let w = (0, I[c(322, 335, 364, 306) + "am"])(G["collection" + c(383, 373, 384, 399)], v);
      let x = {
        [av(728, 690, 758, 746)]: i
      };
      let y = (0, I[av(684, 689, 666, 730) + "am"])(G["makeCollec" + c(369, 389, 396, 339)], x);
      let z = {
        [c(366, 379, 371, 402)]: i
      };
      let A = (0, I.defaultParam)(G[c(328, 291, 364, 364) + c(369, 381, 326, 388)], z);
      let B = {
        [c(366, 340, 352, 350)]: i
      };
      let J = (0, I[av(684, 638, 663, 637) + "am"])(G[av(669, 679, 659, 648) + c(359, 399, 349, 383)], B);
      let K = {
        headers: i
      };
      let L = (0, I[c(322, 302, 309, 335) + "am"])(G[av(726, 747, 713, 713) + "onDirty"], K);
      let M = {
        [c(366, 397, 341, 386)]: i,
        [c(345, 390, 306, 317)]: k
      };
      let N = (0, I.defaultParam)(G["smartColle" + c(382, 398, 371, 363)], M);
      let O = {
        [c(366, 333, 341, 341)]: i
      };
      let P = (0, I[av(684, 651, 709, 728) + "am"])(F[c(346, 358, 387, 329) + "ery"], O);
      let Q = {
        headers: i
      };
      let R = (0, I[av(684, 684, 650, 705) + "am"])(F[av(709, 664, 692, 730) + av(679, 689, 653, 660)], Q);
      let S = {
        [c(366, 409, 335, 334)]: i
      };
      let T = (0, I.defaultParam)(F.makeCalendar, S);
      let U = {
        [av(728, 750, 759, 722)]: i,
        [av(707, 667, 731, 691)]: k
      };
      let V = (0, I[c(322, 298, 291, 306) + "am"])(F["fetchCalen" + av(685, 685, 718, 699)], U);
      let W = {
        headers: i,
        [c(345, 355, 379, 303)]: k
      };
      let X = (0, I.defaultParam)(F[av(727, 711, 694, 693) + "darUserAddresses"], W);
      let Y = {
        headers: i
      };
      let Z = (0, I[c(322, 309, 296, 340) + "am"])(F[c(365, 401, 346, 368) + "darObjects"], Y);
      let $ = {
        [av(728, 759, 699, 723)]: i
      };
      let _ = (0, I[c(322, 369, 322, 345) + "am"])(F[c(396, 402, 423, 403) + av(733, 731, 713, 757)], $);
      let aa = {
        [av(728, 741, 744, 738)]: i
      };
      let ab = (0, I[c(322, 303, 292, 306) + "am"])(F[c(390, 350, 353, 398) + c(371, 343, 397, 345)], aa);
      let ac = {
        headers: i
      };
      let ad = (0, I.defaultParam)(F["deleteCale" + c(371, 364, 383, 354)], ac);
      let ae = {
        [c(345, 344, 355, 339)]: k,
        [av(728, 690, 719, 709)]: i
      };
      let af = (0, I[c(322, 367, 282, 317) + "am"])(F[av(736, 760, 768, 722) + av(668, 681, 683, 704)], ae);
      let ag = {
        headers: i
      };
      let ah = (0, I.defaultParam)(E[c(310, 277, 265, 266) + c(344, 381, 312, 344)], ag);
      let ai = {
        headers: i
      };
      let aj = (0, I[av(684, 669, 725, 669) + "am"])(E[av(672, 699, 637, 719) + c(338, 354, 307, 306)], ai);
      let ak = {
        [c(345, 348, 353, 355)]: k,
        [av(728, 712, 691, 761)]: i
      };
      let al = (0, I[av(684, 722, 716, 690) + "am"])(E[c(398, 362, 422, 370) + "ssBooks"], ak);
      let am = {
        [av(728, 773, 684, 768)]: i
      };
      let an = (0, I[av(684, 727, 689, 697) + "am"])(E[av(719, 683, 672, 734) + "s"], am);
      let ao = {
        [av(728, 768, 769, 756)]: i
      };
      let ap = (0, I[c(322, 297, 287, 320) + "am"])(E[av(757, 785, 792, 792) + "d"], ao);
      let aq = {
        [c(366, 344, 388, 392)]: i
      };
      let ar = (0, I.defaultParam)(E.updateVCard, aq);
      let as = {
        [av(728, 714, 699, 723)]: i
      };
      let at = (0, I.defaultParam)(E[c(334, 303, 352, 304) + "d"], as);
      let au = {};
      function av(a, b, c, d) {
        return C(a - 516 - -14, d);
      }
      au[av(732, 687, 691, 722)] = l;
      au[av(748, 793, 771, 774)] = t;
      au[av(674, 675, 641, 662) + "unt"] = u;
      au.createObject = n;
      au[c(342, 356, 303, 332) + "ct"] = p;
      au[c(316, 336, 286, 304) + "ct"] = r;
      au[av(708, 719, 683, 737) + "ery"] = P;
      au[av(672, 704, 636, 691) + av(706, 680, 675, 702)] = ah;
      au[av(695, 679, 733, 651) + "Query"] = w;
      au["makeCollec" + av(731, 712, 730, 749)] = y;
      au[c(347, 372, 337, 346) + av(679, 684, 653, 652)] = R;
      au[c(353, 386, 370, 334) + "ar"] = T;
      au["syncCollec" + c(369, 362, 336, 397)] = A;
      au[av(669, 680, 671, 702) + c(359, 389, 361, 358)] = J;
      au[av(726, 731, 688, 744) + c(340, 366, 367, 361)] = L;
      au[av(722, 734, 711, 701) + av(744, 728, 698, 735)] = N;
      au[c(365, 373, 397, 397) + av(685, 669, 655, 702)] = V;
      au[av(727, 737, 762, 723) + c(327, 355, 290, 313) + c(376, 341, 391, 417)] = X;
      au["fetchCalen" + av(747, 734, 769, 721)] = Z;
      au["createCale" + av(733, 770, 728, 762)] = _;
      au.updateCalendarObject = ab;
      au[c(362, 383, 379, 337) + c(371, 389, 400, 412)] = ad;
      au[av(736, 770, 727, 691) + av(668, 704, 636, 708)] = af;
      au[av(760, 779, 753, 741) + c(358, 379, 327, 335)] = al;
      au[av(672, 709, 718, 694) + av(700, 688, 724, 741)] = aj;
      au[c(357, 397, 328, 376) + "s"] = an;
      au[av(757, 799, 752, 782) + "d"] = ap;
      au.updateVCard = ar;
      au[av(696, 700, 658, 680) + "d"] = at;
      return au;
    };
    b[p = 0, q = 226, r = 0, C(201, 226) + (s = -606, t = 0, u = 0, C(253, -606))] = J;
    class K {
      constructor(a) {
        function h(a, b, c, d) {
          var e;
          var f;
          var h;
          e = b;
          f = 361;
          h = 437;
          return C(c - 1547 - -894, e);
        }
        function i(a, b, c, d) {
          var e;
          var g;
          var h;
          var i;
          e = a;
          g = 62;
          h = 493;
          i = b - 1171;
          return C(i - -894, e);
        }
        this[h(825, 824, 864, 865)] = a[h(909, 898, 864, 847)];
        this.credentials = a[h(826, 828, 828, 801) + "s"];
        this[h(854, 877, 852, 855)] = a[i(448, 476, 479, 474)] ?? h(886, 890, 902, 928);
        this[h(932, 923, 897, 880) + "e"] = a[i(499, 467, 451, 456) + i(438, 446, 442, 488)] ?? h(868, 891, 865, 842);
        this[h(868, 862, 850, 843) + "on"] = a[h(833, 824, 850, 846) + "on"];
        this[i(442, 473, 501, 510) + "ns"] = a[h(879, 842, 849, 879) + "ns"] ?? {};
      }
      async [C(233, -664)]() {
        var a;
        function b(a, b, c, d) {
          return C(d - -599 - -14, b);
        }
        function c(a, b, c, d) {
          return C(d - -418 - -14, a);
        }
        switch (this[c(-248, -228, -206, -233)]) {
          case b(-390, -408, -398, -364):
            this.authHeaders = (0, I["getBasicAu" + c(-165, -194, -152, -178)])(this[b(-457, -438, -393, -438) + "s"]);
            break;
          case c(-243, -269, -258, -246):
            this[b(-483, -484, -432, -445) + "s"] = (await (0, I[c(-214, -221, -259, -253) + c(-187, -168, -182, -181)])(this[c(-212, -251, -261, -257) + "s"], this.fetchOptions)).headers;
            break;
          case b(-364, -411, -366, -374):
            this[c(-223, -250, -306, -264) + "s"] = {
              Authorization: "Digest " + this.credentials[b(-448, -433, -382, -404) + "ng"]
            };
            break;
          case b(-421, -465, -455, -433):
            this[b(-476, -487, -433, -445) + "s"] = await ((a = this[c(-218, -239, -259, -235) + "on"]) == null ? undefined : a[c(-253, -275, -222, -258)](this, this[b(-438, -454, -451, -438) + "s"]));
            break;
          default:
            throw Error(c(-215, -198, -197, -184) + c(-201, -224, -242, -216));
        }
        this[c(-264, -225, -245, -227)] = this.accountType ? await (0, D[b(-464, -476, -468, -441) + "unt"])({
          account: {
            serverUrl: this[b(-392, -417, -396, -402)],
            credentials: this[c(-290, -292, -256, -257) + "s"],
            accountType: this[b(-362, -339, -399, -369) + "e"]
          },
          headers: this[b(-429, -408, -467, -445) + "s"],
          fetchOptions: this[b(-437, -444, -454, -417) + "ns"]
        }) : undefined;
      }
      async [C(230, 172)](a) {
        let {
          init: b,
          ...c
        } = a;
        let {
          headers: d,
          ...e
        } = b;
        let f = {
          ...this.authHeaders,
          ...d
        };
        let g = {
          ...e
        };
        function h(a, b, c, d) {
          return C(d - -692 - -14, a);
        }
        g[h(-471, -486, -448, -480)] = f;
        let i = {
          ...c
        };
        i[h(-530, -499, -522, -492)] = g;
        i.fetchOptions = this[h(-483, -493, -475, -510) + "ns"];
        return (0, H.davRequest)(i);
      }
      async createObject(...a) {
        let b = {};
        function c(a, b, c, d) {
          return C(a - 427 - -14, b);
        }
        function d(a, b, c, d) {
          return C(d - 1541 - -894, b);
        }
        b[c(640, 661, 649, 611)] = this.serverUrl;
        b.headers = this[d(818, 850, 845, 815) + "s"];
        b[c(609, 629, 619, 587) + "ns"] = this.fetchOptions;
        return (0, I[d(837, 816, 868, 829) + "am"])(H[c(628, 608, 643, 621) + "ct"], b)(a[0]);
      }
      async [C(202, -712) + "ct"](...a) {
        function b(a, b, c, d) {
          return C(a - -39 - -894, d);
        }
        let c = {};
        c[b(-706, -723, -663, -712)] = this[C(211, 687)];
        c.headers = this.authHeaders;
        c[b(-737, -767, -704, -781) + "ns"] = this[C(196, 603) + "ns"];
        return (0, I[b(-751, -726, -741, -736) + "am"])(H[b(-731, -739, -719, -710) + "ct"], c)(a[0]);
      }
      async deleteObject(...a) {
        let b = {};
        function c(a, b, c, d) {
          return C(c - -5 - -894, a);
        }
        function d(a, b, c, d) {
          return C(a - -293 - -14, c);
        }
        b[d(-80, -82, -59, -50)] = this.serverUrl;
        b[c(-628, -706, -673, -638)] = this[d(-139, -119, -150, -106) + "s"];
        b.fetchOptions = this[c(-747, -743, -703, -685) + "ns"];
        return (0, I[d(-125, -171, -158, -156) + "am"])(H.deleteObject, b)(a[0]);
      }
      async [C(246, 262)](...a) {
        let b = {};
        function c(a, b, c, d) {
          return C(a - 542 - -14, c);
        }
        b[c(754, 786, 725, 724)] = this[C(168, -477) + "s"];
        b.fetchOptions = this[c(724, 712, 737, 713) + "ns"];
        return (0, I[c(710, 747, 706, 683) + "am"])(H[c(774, 783, 778, 819)], b)(a[0]);
      }
      async [C(172, -739) + C(203, 205)](a) {
        let {
          account: b,
          headers: c,
          loadCollections: d,
          loadObjects: e,
          fetchOptions: f
        } = a;
        let g = {
          serverUrl: this[k(1114, 1083, 1123, 1126)],
          credentials: this.credentials,
          ...b
        };
        let h = {
          ...this[k(1123, 1062, 1125, 1083) + "s"],
          ...c
        };
        let i = {};
        function j(a, b, c, d) {
          return C(b - 1413 - -894, d);
        }
        function k(a, b, c, d) {
          return C(d - 929 - -14, b);
        }
        i[k(1079, 1151, 1114, 1120)] = g;
        i[k(1138, 1142, 1149, 1141)] = h;
        i[k(1084, 1051, 1087, 1086) + j(706, 727, 771, 719)] = d;
        i[j(733, 704, 684, 740) + "s"] = e;
        i[j(670, 715, 687, 750) + "ns"] = f ?? this.fetchOptions;
        return (0, D[j(694, 691, 716, 729) + k(1085, 1095, 1157, 1118)])(i);
      }
      async [C(193, -675) + C(243, 221)](...a) {
        let b = {};
        function c(a, b, c, d) {
          return C(b - 33 - -14, a);
        }
        b[C(226, -15)] = this.authHeaders;
        b[C(196, -68) + "ns"] = this[c(185, 215, 215, 256) + "ns"];
        return (0, I.defaultParam)(G["collection" + c(245, 262, 263, 245)], b)(a[0]);
      }
      async [C(181, 170) + C(229, -670)](...a) {
        let b = {};
        function c(a, b, c, d) {
          return C(d - 1548 - -894, a);
        }
        function d(a, b, c, d) {
          return C(c - 1868 - -894, b);
        }
        b[c(866, 840, 923, 880)] = this[c(809, 851, 799, 822) + "s"];
        b[d(1195, 1181, 1170, 1148) + "ns"] = this[c(826, 812, 839, 850) + "ns"];
        return (0, I[d(1140, 1193, 1156, 1113) + "am"])(G[d(1143, 1110, 1155, 1165) + d(1225, 1203, 1203, 1180)], b)(a[0]);
      }
      async syncCollection(...a) {
        function b(a, b, c, d) {
          return C(d - 1298 - -894, a);
        }
        let c = {
          [b(621, 604, 624, 630)]: this.authHeaders
        };
        c[b(577, 561, 591, 600) + "ns"] = this[C(196, -81) + "ns"];
        return (0, I.defaultParam)(G[b(596, 554, 568, 592) + b(598, 671, 630, 633)], c)(a[0]);
      }
      async [C(167, -698) + C(219, 245)](...a) {
        let b = {};
        function c(a, b, c, d) {
          return C(a - 1580 - -894, b);
        }
        function d(a, b, c, d) {
          return C(d - 1537 - -894, a);
        }
        b.headers = this[d(829, 796, 769, 811) + "s"];
        b[d(880, 863, 801, 839) + "ns"] = this[c(882, 871, 919, 904) + "ns"];
        return (0, I.defaultParam)(G[d(844, 818, 836, 810) + c(905, 885, 931, 889)], b)(a[0]);
      }
      async [C(224, -682) + C(200, -729)](...a) {
        function b(a, b, c, d) {
          return C(b - -330 - -14, a);
        }
        let c = {};
        c[b(-139, -118, -77, -78)] = this[b(-145, -176, -175, -188) + "s"];
        c.fetchOptions = this[b(-179, -148, -188, -150) + "ns"];
        return (0, I.defaultParam)(G["isCollecti" + C(200, 1111)], c)(a[0]);
      }
      async [C(220, -711) + C(242, 263)](...a) {
        let b = {};
        function c(a, b, c, d) {
          return C(b - 348 - -894, c);
        }
        function d(a, b, c, d) {
          return C(b - 550 - -894, a);
        }
        b[d(-129, -118, -159, -117)] = this[d(-199, -176, -181, -183) + "s"];
        b[c(-337, -350, -307, -384) + "ns"] = this.fetchOptions;
        b[d(-138, -139, -102, -129)] = this.account;
        return (0, I[c(-317, -364, -359, -345) + "am"])(G[d(-81, -124, -115, -151) + d(-72, -102, -68, -67)], b)(a[0]);
      }
      async ["calendarQu" + C(210, -654)](...a) {
        let b = {};
        function c(a, b, c, d) {
          return C(b - -545 - -14, c);
        }
        function d(a, b, c, d) {
          return C(d - 770 - -14, b);
        }
        b[c(-290, -333, -370, -356)] = this.authHeaders;
        b[d(920, 952, 930, 952) + "ns"] = this[c(-392, -363, -354, -358) + "ns"];
        return (0, I[d(894, 926, 928, 938) + "am"])(F[c(-391, -353, -350, -370) + "ery"], b)(a[0]);
      }
      async [C(213, 230) + "ar"](...a) {
        let b = {};
        function c(a, b, c, d) {
          return C(d - 1095 - -894, c);
        }
        b[c(398, 407, 428, 427)] = this[C(168, 1083) + "s"];
        b[c(379, 403, 416, 397) + "ns"] = this.fetchOptions;
        return (0, I[c(423, 423, 400, 383) + "am"])(F[c(424, 382, 390, 414) + "ar"], b)(a[0]);
      }
      async [C(207, -702) + C(177, -762)](...a) {
        let b = {};
        function c(a, b, c, d) {
          return C(b - -634 - -14, a);
        }
        b.headers = this[c(-441, -480, -466, -496) + "s"];
        b[c(-443, -452, -449, -431) + "ns"] = this.fetchOptions;
        return (0, I.defaultParam)(F["calendarMu" + c(-446, -471, -446, -467)], b)(a[0]);
      }
      async [C(225, 218) + "dars"](...a) {
        let b = {};
        function c(a, b, c, d) {
          return C(d - -13 - -894, b);
        }
        function d(a, b, c, d) {
          return C(b - 208 - -14, c);
        }
        b[d(377, 420, 386, 394)] = this[d(376, 362, 367, 347) + "s"];
        b[d(418, 399, 397, 423)] = this[c(-680, -672, -666, -702)];
        b[d(413, 390, 372, 394) + "ns"] = this.fetchOptions;
        return (0, I[d(366, 376, 371, 403) + "am"])(F[c(-718, -721, -674, -682) + d(379, 377, 364, 359)], b)(a == null ? undefined : a[0]);
      }
      async [C(225, -634) + C(187, -735) + C(236, 193)](...a) {
        let b = {};
        function c(a, b, c, d) {
          return C(b - 1221 - -894, d);
        }
        function d(a, b, c, d) {
          return C(c - 444 - -894, a);
        }
        b[d(-236, -192, -224, -258)] = this[d(-254, -244, -282, -236) + "s"];
        b[c(494, 532, 537, 525)] = this.account;
        b.fetchOptions = this[d(-238, -260, -254, -239) + "ns"];
        return (0, I[d(-244, -234, -268, -275) + "am"])(F[d(-243, -203, -225, -230) + c(507, 514, 497, 494) + d(-170, -216, -214, -215)], b)(a == null ? undefined : a[0]);
      }
      async [C(225, -663) + C(245, -611)](...a) {
        let b = {};
        b.headers = this[C(168, -796) + "s"];
        b[C(196, -764) + "ns"] = this[C(196, -493) + "ns"];
        return (0, I.defaultParam)(F.fetchCalendarObjects, b)(a[0]);
      }
      async [C(256, 216) + C(231, -621)](...a) {
        let b = {};
        function c(a, b, c, d) {
          return C(b - 80 - -14, a);
        }
        b[C(226, -462)] = this[c(253, 234, 244, 280) + "s"];
        b[c(280, 262, 261, 221) + "ns"] = this[c(272, 262, 232, 223) + "ns"];
        return (0, I.defaultParam)(F[C(256, -439) + c(313, 297, 336, 343)], b)(a[0]);
      }
      async updateCalendarObject(...a) {
        let b = {};
        function c(a, b, c, d) {
          return C(d - 1475 - -894, b);
        }
        b.headers = this[c(787, 743, 794, 749) + "s"];
        b[c(731, 786, 789, 777) + "ns"] = this[C(196, -236) + "ns"];
        return (0, I[c(760, 767, 759, 763) + "am"])(F[c(831, 859, 867, 831) + c(852, 798, 808, 812)], b)(a[0]);
      }
      async [C(222, 236) + C(231, 226)](...a) {
        let b = {};
        function c(a, b, c, d) {
          return C(c - 1024 - -894, d);
        }
        b[C(226, 1224)] = this[c(277, 251, 298, 277) + "s"];
        b.fetchOptions = this[c(333, 332, 326, 304) + "ns"];
        return (0, I.defaultParam)(F[C(222, 1241) + "ndarObject"], b)(a[0]);
      }
      async ["syncCalend" + C(166, -715)](...a) {
        function b(a, b, c, d) {
          return C(b - 1300 - -894, a);
        }
        let c = {};
        c.headers = this[b(614, 574, 534, 620) + "s"];
        c.account = this[b(573, 611, 610, 653)];
        c.fetchOptions = this[b(586, 602, 605, 579) + "ns"];
        return (0, I[C(182, -186) + "am"])(F[b(608, 640, 633, 606) + b(607, 572, 531, 554)], c)(a[0]);
      }
      async addressBookQuery(...a) {
        let b = {};
        function c(a, b, c, d) {
          return C(b - -835 - -14, c);
        }
        b.headers = this.authHeaders;
        b[c(-683, -653, -634, -683) + "ns"] = this[c(-644, -653, -665, -664) + "ns"];
        return (0, I.defaultParam)(E["addressBoo" + c(-645, -645, -684, -609)], b)(a[0]);
      }
      async ["addressBoo" + C(198, 187)](...a) {
        var b;
        var c;
        var d;
        var e;
        function f(a, b, c, d) {
          return C(b - -19 - -894, a);
        }
        let g = {};
        g[f(-727, -687, -726, -723)] = this[b = -544, d = -588, C(b - 182 - -894, d) + "s"];
        g.fetchOptions = this[f(-679, -717, -757, -723) + "ns"];
        return (0, I[f(-752, -731, -734, -751) + "am"])(E[f(-757, -743, -704, -712) + (c = -514, e = -484, C(c - 182 - -894, e))], g)(a[0]);
      }
      async [C(258, -637) + "ssBooks"](...a) {
        let b = {};
        function c(a, b, c, d) {
          return C(d - 938 - -14, a);
        }
        function d(a, b, c, d) {
          return C(d - 919 - -894, a);
        }
        b[d(288, 210, 210, 251)] = this[c(1047, 1087, 1078, 1092) + "s"];
        b[c(1164, 1118, 1142, 1129)] = this.account;
        b[c(1079, 1155, 1145, 1120) + "ns"] = this[c(1163, 1132, 1135, 1120) + "ns"];
        return (0, I[d(210, 213, 172, 207) + "am"])(E[c(1226, 1224, 1168, 1182) + d(227, 199, 280, 243)], b)(a == null ? undefined : a[0]);
      }
      async [C(217, -702) + "s"](...a) {
        function b(a, b, c, d) {
          return C(d - 522 - -894, b);
        }
        let c = {
          [b(-182, -145, -145, -146)]: this.authHeaders
        };
        c.fetchOptions = this[b(-216, -165, -183, -176) + "ns"];
        return (0, I[b(-194, -224, -234, -190) + "am"])(E[C(217, 243) + "s"], c)(a[0]);
      }
      async [C(255, 223) + "d"](...a) {
        function b(a, b, c, d) {
          return C(a - -687 - -14, c);
        }
        function c(a, b, c, d) {
          return C(a - 1470 - -894, c);
        }
        let d = {};
        d[b(-475, -487, -471, -460)] = this[c(744, 785, 715, 743) + "s"];
        d[c(772, 816, 781, 788) + "ns"] = this[c(772, 792, 774, 798) + "ns"];
        return (0, I[b(-519, -536, -482, -501) + "am"])(E.createVCard, d)(a[0]);
      }
      async [C(257, 207) + "d"](...a) {
        let b = {};
        function c(a, b, c, d) {
          return C(b - 503 - -14, d);
        }
        b.headers = this[C(168, 605) + "s"];
        b[c(708, 685, 666, 708) + "ns"] = this.fetchOptions;
        return (0, I[c(706, 671, 667, 656) + "am"])(E[c(703, 746, 792, 777) + "d"], b)(a[0]);
      }
      async [C(194, -667) + "d"](...a) {
        let b = {};
        function c(a, b, c, d) {
          return C(a - 243 - -894, d);
        }
        function d(a, b, c, d) {
          return C(d - 420 - -14, a);
        }
        b[d(643, 651, 669, 632)] = this[c(-483, -525, -444, -482) + "s"];
        b[c(-455, -410, -461, -466) + "ns"] = this[d(597, 563, 610, 602) + "ns"];
        return (0, I[c(-469, -474, -507, -428) + "am"])(E[d(593, 558, 597, 600) + "d"], b)(a[0]);
      }
    }
    b[v = 0, w = 231, x = 0, C(228, 231)] = K;
  },
  42984: function (a, b, c) {
    var d;
    var e;
    var f;
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
    var s;
    var t;
    var u;
    var v;
    var w;
    var x;
    var y;
    var z;
    var A;
    var B;
    var C;
    let D;
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
          var m;
          if (-parseInt(T(154, 144)) / 1 * (parseInt((d = -42, e = -110, T(e - -316, d))) / 2) + parseInt((f = -169, g = -169, T(g - -316, f))) / 3 * (-parseInt((h = -206, T(166, h))) / 4) + parseInt(T(179, 170)) / 5 * (-parseInt((i = -70, j = -80, T(j - -316, i))) / 6) + -parseInt((k = -87, T(k - -316, -117))) / 7 * (-parseInt((l = -37, m = -59, T(m - -316, l))) / 8) + parseInt(T(235, 285)) / 9 * (parseInt(T(159, 223)) / 10) + parseInt(T(132, 161)) / 11 + -parseInt(T(171, 96)) / 12 * (-parseInt(T(226, 266)) / 13) === 384499) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(P, 0);
    let E = (D = true, function (a, b) {
      {
        let c = D ? function () {
          if (b) {
            let c = b[T(263, 104)](a, arguments);
            b = null;
            return c;
          }
        } : function () {};
        D = false;
        return c;
      }
    })(this, function () {
      return E.toString()[T(203, 1044)](T(269, 1028) + "+$").toString()[T(175, 1021) + "r"](E)[T(203, -506)]("(((.+)+)+)+$");
    });
    "use strict";
    E();
    Object[O(578, 553, 529, 587) + O(596, 596, 620, 593)](b, (g = 0, h = 0, i = 466, T(135, 466)), {
      value: true
    });
    b["createAcco" + (j = -718, k = 0, l = 0, T(210, -718))] = b.fetchHomeUrl = b[m = 0, n = 0, o = 562, T(212, 562) + (p = 0, q = 0, r = 605, T(215, 605))] = b[s = -721, t = 0, u = 0, T(184, -721) + "covery"] = undefined;
    let G = c(49608);
    d = c(31561);
    let H = d && d[f = -710, v = 0, w = 0, T(135, e = -689)] ? d : {
      default: d
    };
    let I = c(43766);
    let J = c(2893);
    let K = c(11559);
    let L = c(77346);
    let M = c(88756);
    let N = c(60925);
    function O(a, b, c, d) {
      return T(b - 355, d);
    }
    function P() {
      let a = ["keFXl", "covery", "tus ", "jtEWr", "5177942gGDNZm", "gFieldName", "Principal ", "__esModule", "propfind", "dars", "tlxKI", "user", "stack", ":calendar-", "status", "ot found a", "length", "YXAZN", "fetchCalen", "6279vyOaeX", "PROPFIND", "incipal ur", "fault", "toString", "protocol", "d with sta", "4hEiqfX", "caldav", "not found ", "pal", "IhdKO", "980hYNcoZ", "neFVa", "cipal url ", "Fetching p", "homeUrl", "Service di", "edentials", "636mrjCCs", "some", "error", "TpWpr", "href missi", "1383636cibOWE", "kMeLe", "principalU", " url faile", "constructo", "scovery fa", "l; retryin", "rPrincipal", "11135opjASB", "DAVNamespa", "account mu", "calendars", "findMissin", "serviceDis", "Invalid cr", "tchPrincip", "meSet", "KUnvw", " url from ", "EUIOu", "hasFields", ":current-u", "iled: ", "directed t", "fetchAddre", "statusText", "rootUrl", "defineProp", "scovery re", "Fetch home", "urlContain", "fetch", "search", "BQWya", "url", "285202yxiQob", "yjGSk", "all", ":addressbo", "unt", "home-set", "fetchPrinc", "ting to ", "string", "ipalUrl", "DAV", "headers", "tchHomeUrl", "get", "etrying at", "/.well-kno", "Location", "tsdav:acco", "__importDe", "alUrl", "39tCGFts", "fetchVCard", "beCkU", "73661wJnNUI", "http", "ng; defaul", "Fetched pr", "ser-princi", "currentUse", "39843EwMmTA", "1374VLIsJf", "addressboo", "default", "darObjects", "cannot fin", "erty", " and error", "calendarHo", "QmBve", "carddav", "find", "hostname", "ders", "fetchHomeU", "dpGvb", "stringify", "AgDnX", "ok-home-se", "scovery...", "t principa", "props", "416JitnyE", "failed: ", "accountTyp", "d homeUrl", "port", "cpnvC", "apply", "ceShort", "st have ", "excludeHea", "CALDAV", "Fetch prin", "(((.+)+)+)", "me url ", "manual", "HPIyE", " before fe", "addressBoo", "map", "href"];
      return (P = function () {
        return a;
      })();
    }
    let Q = (0, H[x = -679, y = 0, z = 0, T(238, -679)])((A = -763, B = 0, C = 0, T(223, -763) + T(210, 565)));
    let R = async a => {
      Q(k(995, 1054, 1040, 966) + i(-124, -3, -75, -13));
      let {
        account: d,
        headers: e,
        headersToExclude: f,
        fetchOptions: g = {}
      } = a;
      let h = new URL(d.serverUrl);
      function i(a, b, c, d) {
        return T(c - 635 - -964, a);
      }
      let j = new URL(k(1162, 1040, 1097, 1116) + "wn/" + d[i(-113, -92, -70, -2) + "e"], h);
      j[k(956, 1073, 1028, 1014)] = h[k(1061, 996, 1028, 1000)] ?? i(-114, -57, -99, -139);
      try {
        if (k(1051, 1130, 1080, 1139) === k(1089, 1101, 1034, 966)) {
          if (_0x1b4b62) {
            let a = _0x2c0d22.apply(_0x56910a, arguments);
            _0x2122bf = null;
            return a;
          }
        } else {
          let a = await (0, G[k(1062, 1112, 1078, 1067)])(j[i(-1, -92, -53, -88)], {
            headers: (0, M[k(1154, 1165, 1142, 1195) + k(1119, 1136, 1124, 1084)])(e, f),
            method: i(-222, -236, -181, -251),
            redirect: i(-87, -14, -58, -6),
            ...g
          });
          if (a[i(-261, -211, -187, -140)] >= 300 && a[k(959, 1042, 1018, 981)] < 400) {
            if (i(-194, -169, -169, -141) === "neFVa") {
              let b = a.headers[k(1127, 1026, 1095, 1057)](k(1057, 1167, 1098, 1029));
              if (typeof b === i(-158, -103, -115, -95) && b.length) {
                Q(i(-120, -190, -165, -96) + "scovery re" + k(1097, 1073, 1070, 1124) + "o " + b);
                let a = new URL(b, h);
                if (a.hostname === j[k(1112, 1168, 1123, 1122)] && j[k(1188, 1201, 1137, 1131)] && !a[k(1126, 1115, 1137, 1124)]) {
                  if (i(-110, -121, -101, -73) !== i(-149, -135, -101, -167)) {
                    let a = _0x3a3eb4[i(-133, -135, -112, -138)][i(-175, -89, -110, -138)](i(-56, -84, -107, -127));
                    if (typeof a === k(1093, 1031, 1090, 1132) && a[k(1063, 1022, 1020, 1075)]) {
                      _0x243d1d(k(1044, 1005, 1040, 985) + "scovery re" + i(-85, -141, -135, -157) + "o " + a);
                      let b = new _0x5b72ce(a, _0x283fa5);
                      if (b[i(-74, -140, -82, -129)] === _0x49ef9b.hostname && _0x1ef955[i(-92, -4, -68, -19)] && !b[i(-68, -14, -68, -59)]) {
                        b[i(-29, -56, -68, -134)] = _0x3b6d74[i(-57, -70, -68, -60)];
                      }
                      b.protocol = (_0x191143 = _0x3e4cc.protocol) !== null && _0xb347e2 !== undefined ? _0x36d9bc : "http";
                      return b[k(1080, 1202, 1152, 1160)];
                    }
                  } else {
                    a[i(-135, -136, -68, -44)] = j[i(-30, -111, -68, -97)];
                  }
                }
                a[k(1020, 1095, 1028, 1077)] = h[k(1080, 969, 1028, 1044)] ?? k(1092, 1032, 1106, 1033);
                return a[k(1120, 1078, 1152, 1142)];
              }
            } else {
              _0xc9bb05("Service di" + i(-60, -105, -130, -74) + i(-86, -74, -135, -99) + "o " + _0x3c1c87);
              let a = new _0x5e5a68(_0xe720b, _0x228c86);
              if (a[k(1185, 1184, 1123, 1050)] === _0x2c8169[i(-95, -140, -82, -54)] && _0x38dd95[k(1135, 1124, 1137, 1146)] && !a[k(1140, 1140, 1137, 1188)]) {
                a[i(-57, -98, -68, -110)] = _0x4ac060.port;
              }
              a.protocol = (_0x27b1b0 = _0x29d418[i(-213, -122, -177, -174)]) !== null && _0x313e2d !== undefined ? _0x4fa93c : i(-43, -82, -99, -157);
              return a[k(1084, 1148, 1152, 1177)];
            }
          }
        }
      } catch (a) {
        if (i(-73, -34, -85, -111) !== "hbpfS") {
          Q(i(-176, -151, -165, -208) + k(1094, 1096, 1052, 982) + i(-176, -152, -136, -181) + a[k(982, 1060, 1016, 1034)]);
        } else {
          _0xcf63d8 = new _0x34c9a0("user", _0x58d54a[i(-85, -114, -132, -120)])[k(1187, 1180, 1152, 1226)];
          _0x511d4f(k(1007, 1083, 1010, 984) + k(974, 1118, 1046, 1028) + i(-86, -148, -98, -148) + k(1053, 1122, 1089, 1014) + _0x1c067a);
        }
      }
      function k(a, b, c, d) {
        return T(c - 1840 - -964, d);
      }
      return h[k(1199, 1085, 1152, 1175)];
    };
    b["serviceDis" + T(278, 608)] = R;
    let S = async a => {
      var b;
      var c;
      var d;
      var e;
      var f;
      var g;
      let {
        account: h,
        headers: i,
        headersToExclude: j,
        fetchOptions: k = {}
      } = a;
      let l = [m(1166, 1159, 1092, 1109)];
      if (!(0, N.hasFields)(h, l)) {
        throw Error("account mu" + s(-341, -278, -270, -240) + (0, N[s(-363, -409, -352, -388) + s(-456, -415, -402, -419) + "s"])(h, l) + (m(1130, 1121, 1168, 1129) + m(1065, 1046, 1081, 1032) + s(-300, -278, -310, -384)));
      }
      function m(a, b, c, d) {
        return T(c - 540 - 355, a);
      }
      Q(s(-331, -315, -373, -313) + "rincipal url from path " + h[s(-270, -291, -338, -386)]);
      let n = {
        [K[s(-396, -300, -355, -321) + s(-221, -306, -271, -281)][s(-368, -327, -319, -305)] + (s(-395, -280, -343, -350) + s(-244, -250, -302, -294) + s(-424, -356, -378, -309))]: {}
      };
      let o = {
        url: h.rootUrl,
        props: n,
        depth: "0",
        headers: (0, M[m(1216, 1115, 1161, 1168) + s(-316, -352, -287, -238)])(i, j),
        fetchOptions: k
      };
      let [p] = await (0, L[s(-375, -420, -399, -389)])(o);
      let q = (c = (b = p == null ? undefined : p[m(1204, 1092, 1151, 1103)]) == null ? undefined : b[m(1071, 1085, 1129, 1064) + m(1092, 1013, 1073, 1049)]) == null ? undefined : c.href;
      if (!(p == null ? undefined : p.ok) && (p == null ? undefined : p[m(1073, 1112, 1037, 1076)]) === 404 || !q) {
        if (s(-294, -333, -347, -299) !== m(1030, 1108, 1083, 1060)) {
          return _0x146c64[s(-377, -326, -384, -379)]()[m(1111, 1152, 1098, 1146)](m(1214, 1204, 1164, 1198) + "+$").toString()[s(-291, -350, -360, -335) + "r"](_0x5b1454).search("(((.+)+)+)+$");
        } else {
          let a = new URL("user", h[s(-360, -358, -338, -341)])[s(-284, -256, -259, -245)];
          Q("Principal " + s(-306, -420, -379, -348) + "at root, r" + m(1144, 1141, 1115, 1167) + " " + a);
          let b = {
            ...o
          };
          b[m(1091, 1136, 1100, 1135)] = a;
          let [c] = await (0, L.propfind)(b);
          if ((c == null ? undefined : c.ok) && ((e = (d = c.props) == null ? undefined : d["currentUse" + m(1139, 1088, 1073, 1109)]) == null ? undefined : e.href)) {
            return new URL(c[m(1110, 1088, 1151, 1181)][s(-254, -274, -301, -306) + s(-340, -371, -357, -385)][s(-229, -229, -259, -303)], h.rootUrl)[s(-185, -307, -259, -249)];
          }
        }
      }
      if (!p.ok && (Q("Fetch prin" + m(1118, 1083, 1056, 990) + "failed: " + (p == null ? undefined : p[m(1150, 1082, 1091, 1083)])), (p == null ? undefined : p[m(981, 1034, 1037, 1015)]) === 401)) {
        if (s(-227, -224, -255, -255) === s(-256, -280, -255, -246)) {
          throw Error(s(-328, -325, -350, -300) + m(1097, 1064, 1060, 1125));
        } else {
          let a = _0x291cb9[m(1187, 1140, 1158, 1094)](_0x38e6b3, arguments);
          _0x21c9f7 = null;
          return a;
        }
      }
      let r = (g = (f = p == null ? undefined : p[m(1168, 1141, 1151, 1083)]) == null ? undefined : f[m(1157, 1092, 1129, 1185) + m(1095, 1035, 1073, 1078)]) == null ? undefined : g[m(1139, 1162, 1171, 1116)];
      function s(a, b, c, d) {
        return T(c - -890 - 355, b);
      }
      if (r) {
        if (s(-302, -351, -285, -334) === s(-286, -394, -328, -334)) {
          return new _0x562546(_0x4f4e68[m(1186, 1194, 1151, 1197)][s(-312, -306, -301, -359) + m(1112, 1120, 1073, 1019)][s(-196, -250, -259, -236)], _0x3ad1b2[m(1158, 1066, 1092, 1045)])[s(-193, -195, -259, -200)];
        }
        r = new URL(r, h[m(1142, 1111, 1092, 1154)])[s(-257, -277, -259, -195)];
      } else {
        r = new URL(s(-408, -358, -396, -448), h.rootUrl)[s(-316, -262, -259, -199)];
        Q(m(1016, 979, 1029, 961) + "href missi" + m(1054, 1178, 1126, 1059) + "ting to " + r);
      }
      Q(m(1120, 1157, 1127, 1076) + s(-399, -372, -386, -313) + "l " + r);
      return r;
    };
    function T(a, b) {
      let c = P();
      return (T = function (a, b) {
        return c[a -= 132];
      })(a, b);
    }
    b.fetchPrincipalUrl = S;
    let U = async a => {
      var b;
      var c;
      let {
        account: d,
        headers: e,
        headersToExclude: f,
        fetchOptions: g = {}
      } = a;
      let h = ["principalUrl", o(-706, -708, -689, -715)];
      if (!(0, N[l(911, 907, 881, 902)])(d, h)) {
        if (o(-611, -597, -619, -640) === l(1061, 993, 1068, 1024)) {
          throw new _0x2b5a65(o(-727, -729, -781, -731) + "st have " + (0, _0x19d28c["findMissin" + l(878, 849, 899, 888) + "s"])(_0xe71ace, _0x3be597) + " before fe" + o(-769, -735, -787, -726) + "alUrl");
        } else {
          throw Error(l(955, 897, 825, 922) + l(995, 981, 1045, 1025) + (0, N[o(-661, -802, -659, -729) + l(856, 849, 911, 780) + "s"])(d, h) + (o(-603, -659, -666, -639) + o(-658, -642, -627, -694)));
        }
      }
      Q("Fetch home" + o(-678, -679, -724, -723) + d.principalUrl);
      let i = {
        [K[l(911, 896, 956, 921) + l(962, 980, 1015, 914)][l(1006, 983, 982, 954)] + (l(869, 857, 839, 806) + o(-640, -762, -682, -701))]: {}
      };
      let j = {
        [K[l(918, 896, 900, 938) + l(1028, 980, 963, 932)].CARDDAV + (l(854, 925, 918, 850) + o(-587, -704, -664, -659) + "t")]: {}
      };
      let k = {
        url: d[o(-788, -745, -717, -739) + "rl"],
        props: d[l(911, 975, 902, 952) + "e"] === l(847, 871, 889, 819) ? i : j,
        depth: "0",
        headers: (0, M[o(-624, -629, -718, -646) + o(-650, -713, -708, -664)])(e, f),
        fetchOptions: g
      };
      function l(a, b, c, d) {
        return T(b - 361 - 355, c);
      }
      let m = await (0, L[l(896, 852, 827, 806)])(k);
      if (m[l(848, 860, 845, 863)] === 0 || !m[o(-695, -711, -816, -745)](a => a.ok) || m[l(884, 883, 929, 823)](a => a[l(871, 858, 926, 900)] === 404)) {
        let a = new URL(o(-759, -716, -725, -773), d.principalUrl).href;
        Q("Home-set n" + l(788, 859, 885, 867) + l(978, 971, 915, 929) + o(-724, -716, -800, -735) + "g at " + a);
        let b = {
          ...k
        };
        b[l(981, 921, 846, 873)] = a;
        m = await (0, L.propfind)(b);
      }
      let n = m[l(918, 962, 997, 957)](a => (0, M[l(928, 917, 850, 980) + "s"])(d[o(-690, -741, -664, -739) + "rl"], a[o(-673, -619, -664, -636)]));
      if (!n || !n.ok) {
        if (o(-647, -702, -617, -660) === l(920, 968, 1001, 913)) {
          Q(o(-670, -693, -732, -712) + o(-812, -727, -811, -738) + o(-692, -815, -757, -759) + l(1001, 995, 1046, 1041) + (n == null ? undefined : n[o(-700, -728, -780, -716)]) + (o(-604, -699, -602, -670) + " ") + JSON[l(1037, 967, 920, 932)](m[o(-565, -707, -657, -637)](a => a[l(951, 884, 814, 905)])));
          throw Error(o(-717, -637, -710, -672) + o(-592, -711, -590, -652));
        } else {
          _0x553ff9(l(1005, 984, 913, 925) + l(809, 877, 862, 915) + l(1036, 974, 982, 990) + (_0x520f60 === null || _0x4ca086 === undefined ? undefined : _0x2b2bd5.statusText));
          if ((_0x4a47ca === null || _0xefd365 === undefined ? undefined : _0x590457[o(-736, -702, -748, -770)]) === 401) {
            throw new _0x4fa48b(o(-783, -741, -743, -727) + "edentials");
          }
        }
      }
      function o(a, b, c, d) {
        return T(d - -1267 - 355, a);
      }
      let p = new URL(d[l(1048, 975, 951, 948) + "e"] === o(-746, -829, -816, -757) ? (b = n == null ? undefined : n[o(-623, -605, -727, -656)]) == null ? undefined : b[o(-627, -620, -637, -669) + l(864, 903, 977, 876)][l(993, 992, 995, 1024)] : (c = n == null ? undefined : n.props) == null ? undefined : c[l(881, 953, 997, 981) + "kHomeSet"][o(-599, -602, -570, -636)], d[o(-652, -674, -736, -715)])[o(-622, -684, -656, -636)];
      Q("Fetched ho" + o(-588, -632, -696, -642) + p);
      return p;
    };
    b[T(249, 582) + "rl"] = U;
    let V = async a => {
      let {
        account: c,
        headers: d,
        loadCollections: e = false,
        loadObjects: f = false,
        headersToExclude: g,
        fetchOptions: h = {}
      } = a;
      function i(a, b, c, d) {
        return T(c - 999 - -964, a);
      }
      let j = {
        ...c
      };
      function k(a, b, c, d) {
        return T(c - 186 - -964, d);
      }
      j[i(180, 194, 232, 284)] = await (0, b["serviceDis" + k(-508, -498, -500, -467)])({
        account: c,
        headers: (0, M.excludeHeaders)(d, g),
        fetchOptions: h
      });
      j[i(223, 271, 208, 185) + "rl"] = await (0, b[k(-589, -496, -566, -577) + "ipalUrl"])({
        account: j,
        headers: (0, M[i(256, 351, 301, 270) + "ders"])(d, g),
        fetchOptions: h
      });
      j[i(168, 202, 198, 145)] = await (0, b[k(-534, -576, -529, -483) + "rl"])({
        account: j,
        headers: (0, M[i(312, 286, 301, 356) + i(295, 350, 283, 306)])(d, g),
        fetchOptions: h
      });
      if (e || f) {
        if (k(-525, -606, -588, -608) !== i(202, 225, 180, 195)) {
          if (c[k(-483, -508, -519, -457) + "e"] === i(249, 180, 190, 167)) {
            j[k(-566, -523, -596, -642)] = await (0, J[i(228, 254, 181, 233) + i(139, 184, 172, 183)])({
              headers: (0, M[i(293, 322, 301, 238) + k(-507, -590, -530, -602)])(d, g),
              account: j,
              fetchOptions: h
            });
          } else if (c[k(-582, -567, -519, -493) + "e"] === i(296, 335, 280, 314)) {
            if (k(-502, -466, -516, -561) !== i(282, 242, 207, 191)) {
              j[i(261, 291, 309, 247) + "ks"] = await (0, I[k(-524, -594, -583, -564) + "ssBooks"])({
                headers: (0, M[i(257, 346, 301, 229) + "ders"])(d, g),
                account: j,
                fetchOptions: h
              });
            } else {
              _0x3f489f(k(-637, -651, -578, -588) + " url faile" + i(183, 156, 188, 120) + i(288, 263, 314, 263) + (_0x471066 === null || _0x686c60 === undefined ? undefined : _0x8035f7.statusText) + i(337, 351, 277, 276) + " " + _0x5f2523.stringify(_0xf476e3[k(-507, -516, -503, -520)](a => a[i(242, 168, 203, 145)])));
              throw new _0x2f1b0a(k(-554, -574, -538, -613) + k(-541, -557, -518, -561));
            }
          }
        } else {
          let a = {
            [k(-603, -483, -540, -486)]: _0x364a6b
          };
          if (_0x1a3ced && _0x391d8e[i(135, 232, 170, 131)]) {
            return _0x2e5909;
          } else {
            return a;
          }
        }
      }
      if (f) {
        if (c[k(-476, -564, -519, -483) + "e"] === "caldav" && j[k(-602, -604, -596, -528)]) {
          if (k(-623, -605, -640, -700) !== "tlxKI") {
            _0x1f7901 = new _0x44d563(_0x34a2c2, _0x3c9058.rootUrl)[k(-511, -541, -502, -445)];
          } else {
            j[i(240, 221, 217, 281)] = await Promise.all(j[k(-631, -608, -596, -631)].map(async a => ({
              ...a,
              objects: await (0, J["fetchCalen" + k(-467, -561, -539, -546)])({
                calendar: a,
                headers: (0, M[i(306, 319, 301, 318) + k(-557, -514, -530, -563)])(d, g),
                fetchOptions: h
              })
            })));
          }
        } else if (c[k(-536, -576, -519, -592) + "e"] === "carddav" && j[i(332, 238, 309, 350) + "ks"]) {
          if (i(202, 229, 204, 137) === "TpWpr") {
            j[k(-509, -541, -504, -446) + "ks"] = await Promise[i(304, 296, 243, 288)](j[i(353, 383, 309, 374) + "ks"].map(async a => ({
              ...a,
              objects: await (0, I[i(324, 240, 262, 205) + "s"])({
                addressBook: a,
                headers: (0, M[k(-562, -456, -512, -509) + k(-517, -541, -530, -498)])(d, g),
                fetchOptions: h
              })
            })));
          } else {
            throw new _0x1bfe25(k(-625, -630, -593, -553) + k(-661, -545, -613, -603));
          }
        }
      }
      return j;
    };
    b.createAccount = V;
  },
  43766: function (a, b, c) {
    var d;
    var e;
    var f;
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
    var s;
    var t;
    var u;
    var v;
    var w;
    var x;
    var y;
    var z;
    var A;
    var B;
    let C;
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
          var m;
          var n;
          var o;
          var p;
          var q;
          var r;
          var s;
          var t;
          var u;
          if (-parseInt((d = -381, R(182, d))) / 1 + parseInt((e = -263, f = -215, R(f - -366, e))) / 2 * (parseInt((g = -395, h = -353, R(h - -582, g))) / 3) + -parseInt((i = -186, j = -153, R(j - -366, i))) / 4 * (-parseInt((k = -104, l = -152, R(l - -366, k))) / 5) + parseInt((m = -398, R(m - -582, -408))) / 6 + -parseInt((n = -163, o = -173, R(o - -366, n))) / 7 * (-parseInt((p = -197, q = -212, R(q - -366, p))) / 8) + -parseInt((r = -136, s = -170, R(s - -366, r))) / 9 + parseInt((t = -186, R(179, t))) / 10 * (-parseInt((u = -401, R(u - -582, -353))) / 11) === 705751) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(S, 0);
    let D = (C = true, function (a, b) {
      if (R(170, -371) === R(195, -330)) {
        return _0x17cdd0.toString()[R(222, -318)](R(173, 440) + "+$").toString()[R(183, 461) + "r"](_0x1cdf42)[R(222, 517)]("(((.+)+)+)+$");
      }
      {
        let c = C ? function () {
          function c(a, b, c, d) {
            return R(c - 1372 - -531, b);
          }
          function d(a, b, c, d) {
            return R(b - 94 - -531, a);
          }
          if (d(-320, -285, -339, -325) === c(1100, 1073, 1078, 1118)) {
            let a = _0x58648d[c(1038, 1004, 1047, 1076)](_0x48efbe, arguments);
            _0x3cbba0 = null;
            return a;
          }
          if (b) {
            let c = b[d(-286, -231, -272, -199)](a, arguments);
            b = null;
            return c;
          }
        } : function () {};
        C = false;
        return c;
      }
    })(this, function () {
      return D[R(185, 69)]().search(R(173, -27) + "+$")[R(185, 1072)]()[R(183, 27) + "r"](D)[R(222, 12)](R(173, 1030) + "+$");
    });
    "use strict";
    D();
    Object[U(-217, -182, -245, -167) + U(-227, -177, -280, -236)](b, "__esModule", {
      value: true
    });
    b[function (a, b, c, d) {
      return R(b - -286, a);
    }(-129, -142, -100, -124) + "d"] = b[function (a, b, c, d) {
      return R(b - -286, a);
    }(-35, -51, -75, -53) + "d"] = b.createVCard = b[e = 0, f = 0, g = -189, R(210, -189) + "s"] = b[function (a, b, c, d) {
      return R(b - -286, a);
    }(-146, -154, -119, -209) + function (a, b, c, d) {
      return R(b - -286, a);
    }(-160, -115, -75, -133)] = b[function (a, b, c, d) {
      return R(b - -286, a);
    }(-157, -121, -105, -176) + "kMultiGet"] = b[function (a, b, c, d) {
      return R(b - -286, a);
    }(-153, -121, -87, -103) + (h = 0, i = 0, j = -225, R(178, -225))] = undefined;
    d = c(31561);
    let F = d && d[N(78, -145, -233, -111)] ? d : {
      default: d
    };
    let G = c(14931);
    let H = c(11559);
    let I = c(77346);
    let J = c(88756);
    let K = c(60925);
    let L = (0, F[U(-178, -228, -158, -175)])(function (a, b, c, d) {
      return R(b - -286, a);
    }(-107, -71, -60, -18) + "essBook");
    let M = async a => {
      function b(a, b, c, d) {
        return R(b - 331 - -366, d);
      }
      let {
        url: c,
        props: d,
        filters: e,
        depth: f,
        headers: g,
        headersToExclude: h,
        fetchOptions: i = {}
      } = a;
      let j = {};
      function k(a, b, c, d) {
        return R(d - 32 - -366, c);
      }
      j[k(-198, -183, -185, -158)] = "FN";
      let l = {
        _attributes: j
      };
      let m = {
        [b(166, 168, 215, 132) + "r"]: l
      };
      return (0, G[b(165, 154, 98, 211) + b(113, 96, 104, 74)])({
        url: c,
        body: {
          "addressbook-query": (0, J[k(-128, -86, -121, -140) + "sy"])({
            _attributes: (0, J[k(-163, -204, -204, -209) + k(-222, -212, -247, -189)])([H[k(-64, -83, -108, -102) + "ce"][k(-185, -120, -112, -142)], H[b(187, 197, 189, 215) + "ce"][b(220, 182, 209, 210)]]),
            [H[k(-63, -136, -113, -102) + k(-171, -128, -139, -143)][k(-61, -153, -133, -117)] + k(-156, -124, -75, -110)]: d,
            filter: e ?? m
          })
        },
        defaultNamespace: H[k(-132, -77, -94, -102) + k(-92, -98, -166, -143)][b(112, 157, 181, 107)],
        depth: f,
        headers: (0, J[k(-170, -170, -142, -178) + k(-190, -138, -232, -184)])(g, h),
        fetchOptions: i
      });
    };
    function N(a, b, c, d) {
      return R(b - -286, a);
    }
    b["addressBoo" + (k = 0, l = 0, m = -198, R(178, -198))] = M;
    let O = async a => {
      function b(a, b, c, d) {
        return R(d - -247 - -366, c);
      }
      let {
        url: c,
        props: d,
        objectUrls: e,
        depth: f,
        headers: g,
        headersToExclude: h,
        fetchOptions: i = {}
      } = a;
      function j(a, b, c, d) {
        return R(a - 62 - -366, b);
      }
      return (0, G.collectionQuery)({
        url: c,
        body: {
          "addressbook-multiget": (0, J[j(-110, -111, -139, -154) + "sy"])({
            _attributes: (0, J[j(-179, -135, -138, -134) + j(-159, -184, -142, -108)])([H[b(-345, -439, -329, -381) + "ce"][j(-87, -123, -50, -74)], H[b(-356, -419, -406, -381) + "ce"][b(-396, -434, -387, -421)]]),
            [H[j(-72, -71, -107, -46) + b(-415, -469, -403, -422)][j(-87, -47, -42, -115)] + j(-80, -32, -40, -23)]: d,
            [H["DAVNamespa" + b(-477, -449, -369, -422)][b(-414, -448, -339, -396)] + j(-166, -174, -137, -173)]: e
          })
        },
        defaultNamespace: H[j(-72, -38, -14, -52) + "ceShort"][b(-413, -420, -462, -421)],
        depth: f,
        headers: (0, J[j(-148, -196, -113, -135) + "ders"])(g, h),
        fetchOptions: i
      });
    };
    b["addressBoo" + (n = -100, o = 0, p = 0, R(227, -100))] = O;
    let P = async a => {
      let {
        account: b,
        headers: c,
        props: d,
        headersToExclude: e,
        fetchOptions: f = {}
      } = a ?? {};
      function g(a, b, c, d) {
        return R(b - 135 - -366, a);
      }
      let h = [i(4, 5, 27, 79), i(-28, 2, 22, 6)];
      function i(a, b, c, d) {
        return R(c - 160 - -366, a);
      }
      if (!b || !(0, K[i(-18, -48, -31, -8)])(b, h)) {
        if (i(17, -47, 1, 32) !== i(-29, -46, 3, -8)) {
          if (!b) {
            throw Error(g(-71, -94, -74, -48) + " for fetch" + g(-50, -32, -36, -15) + "ks");
          }
          throw Error(i(35, 54, 10, 2) + i(1, -33, -53, -90) + (0, K[g(-38, -44, -90, -19) + i(-73, -12, -49, -46) + "s"])(b, h) + " before fe" + i(-38, 42, 6, -46) + "Books");
        } else {
          var j;
          return _0x43f9e2[g(-14, -57, -66, -53)](((j = _0x11c37d[g(10, -10, -49, -32)]) == null ? undefined : j.resourcetype) ?? {})[g(-37, -89, -42, -40)](i(77, -4, 30, -6) + "k");
        }
      }
      let l = {
        [H.DAVNamespaceShort.DAV + (g(-93, -98, -68, -83) + "me")]: {},
        [H[i(0, 19, 26, 1) + g(-55, -40, -60, -79)][g(10, -20, -75, 12) + "ERVER"] + i(-34, -35, -77, -101)]: {},
        [H[g(-40, 1, 0, -12) + i(4, -34, -15, -21)].DAV + (g(-42, -6, -9, 26) + "ype")]: {},
        [H["DAVNamespa" + g(-27, -40, -29, 3)][g(-17, -14, 34, -67)] + (i(-103, -28, -71, -14) + "n")]: {}
      };
      let m = await (0, I[i(-49, 15, -2, 9)])({
        url: b[g(59, 2, 50, 12)],
        props: d ?? l,
        depth: "1",
        headers: (0, J[g(-93, -75, -39, -45) + i(-75, -113, -56, -70)])(c, e),
        fetchOptions: f
      });
      return Promise[g(-36, -63, -20, -61)](m.filter(a => {
        function b(a, b, c, d) {
          return g(d, b - 23, c - 285, d - 268);
        }
        function c(a, b, c, d) {
          return i(d, b - 484, a - -344, d - 445);
        }
        if (c(-392, -405, -412, -360) === "cRxHm") {
          var d;
          return Object[b(-32, -34, -62, -87)](((d = a[b(-41, 13, -33, 34)]) == null ? undefined : d[c(-350, -322, -340, -388) + "pe"]) ?? {}).includes("addressbook");
        }
        {
          let {
            addressBook: a,
            vCardString: d,
            filename: e,
            headers: f,
            headersToExclude: g,
            fetchOptions: h = {}
          } = _0xddb727;
          let i = {
            "content-type": b(-20, 26, -11, 57) + "; charset=" + c(-381, -349, -407, -387),
            "If-None-Match": "*",
            ...f
          };
          return (0, _0x198fc8[c(-390, -408, -439, -440) + "ct"])({
            url: new _0x10d1fb(e, a[c(-383, -342, -405, -415)])[c(-395, -400, -431, -453)],
            data: d,
            headers: (0, _0x9e4f84.excludeHeaders)(i, g),
            fetchOptions: h
          });
        }
      }).map(a => {
        var c;
        var d;
        var f;
        var j;
        var k;
        var l;
        function m(a, b, c, d) {
          return i(d, b - 140, a - 954, d - 1);
        }
        let n = ((d = (c = a[o(-26, -46, 7, 3)]) == null ? undefined : c[o(-51, -49, -50, -51) + "e"]) == null ? undefined : d[m(910, 886, 964, 949)]) ?? ((f = a[o(54, 28, 7, -39)]) == null ? undefined : f[m(912, 860, 942, 969) + "e"]);
        function o(a, b, c, d) {
          return i(b, b - 20, c - -8, d - 473);
        }
        L(m(953, 914, 979, 969) + o(1, 14, 5, 8) + "amed " + (typeof n === o(15, -39, 4, -3) ? n : "") + (m(928, 898, 969, 966) + m(882, 841, 834, 885)) + ": " + JSON[o(-20, -20, 6, 31)](a[o(-26, -31, 7, -37)]));
        return {
          url: new URL(a[o(-10, -21, -59, -82)] ?? "", b[o(-36, 1, 14, 44)] ?? "")[o(-91, -45, -59, -51)],
          ctag: (j = a[m(969, 958, 929, 983)]) == null ? undefined : j[m(884, 869, 850, 833)],
          displayName: typeof n == "string" ? n : "",
          resourcetype: Object[o(-28, -95, -40, -65)]((k = a[o(37, 31, 7, 49)]) == null ? undefined : k[m(948, 894, 987, 917) + "pe"]),
          syncToken: (l = a[o(-25, -17, 7, 18)]) == null ? undefined : l.syncToken
        };
      }).map(async a => ({
        ...a,
        reports: await (0, G[i(-117, -90, -60, -24) + "eportSet"])({
          collection: a,
          headers: (0, J[g(-101, -75, -49, -128) + i(-54, -81, -56, -90)])(c, e),
          fetchOptions: f
        })
      })));
    };
    b[q = 0, r = 0, s = -269, R(132, -269) + (t = 0, u = 0, v = -238, R(171, -238))] = P;
    let Q = async a => {
      function c(a, b, c, d) {
        return R(b - 28 - -286, d);
      }
      let {
        addressBook: d,
        headers: e,
        objectUrls: f,
        headersToExclude: g,
        urlFilter: h = a => a,
        useMultiGet: i = true,
        fetchOptions: j = {}
      } = a;
      L(c(-166, -128, -74, -184) + c(24, -27, -10, -80) + " " + (d == null ? undefined : d[o(-325, -305, -326, -287)]));
      let k = [c(-121, -91, -76, -57)];
      if (!d || !(0, K[o(-370, -354, -318, -312)])(d, k)) {
        if (!d) {
          if (o(-362, -331, -367, -411) === c(-79, -132, -165, -152)) {
            throw Error(o(-390, -353, -353, -349) + c(-60, -115, -148, -78) + c(-11, -35, -82, 11) + o(-360, -372, -321, -361) + o(-330, -318, -292, -293));
          } else {
            let {
              url: a,
              props: b,
              filters: d,
              depth: e,
              headers: f,
              headersToExclude: g,
              fetchOptions: h = {}
            } = _0x1d7d52;
            let i = {
              [o(-261, -328, -317, -338)]: "FN"
            };
            let j = {
              _attributes: i
            };
            let k = {
              [c(-65, -55, -72, -39) + "r"]: j
            };
            return (0, _0x24c6db[o(-354, -292, -304, -327) + "Query"])({
              url: a,
              body: {
                "addressbook-query": (0, _0x118835[c(-15, -64, -68, -106) + "sy"])({
                  _attributes: (0, _0x5bcfc7["getDAVAttr" + c(-88, -113, -158, -68)])([_0x36981e[o(-219, -205, -261, -225) + "ce"].CARDDAV, _0x48b776[c(-20, -26, -35, -29) + "ce"][o(-310, -280, -276, -261)]]),
                  [_0x19581b[o(-303, -238, -261, -248) + o(-293, -313, -302, -354)][c(13, -41, 11, -17)] + o(-302, -266, -269, -324)]: b,
                  filter: d ?? k
                })
              },
              defaultNamespace: _0x2c743a["DAVNamespa" + c(-36, -67, -70, -99)][c(-17, -66, -103, -28)],
              depth: e,
              headers: (0, _0x111534[o(-376, -323, -337, -395) + c(-112, -108, -148, -88)])(f, g),
              fetchOptions: h
            });
          }
        }
        throw Error(c(-79, -93, -140, -120) + o(-320, -357, -327, -371) + "e " + (0, K[c(-31, -71, -17, -58) + c(-95, -101, -103, -63) + "s"])(d, k) + o(-307, -271, -303, -314) + "tchVCards");
      }
      let l = {
        [H[o(-244, -269, -261, -211) + "ceShort"][o(-272, -255, -276, -308)] + c(-74, -99, -58, -85)]: {}
      };
      let m = (f ?? (await (0, b[o(-325, -380, -328, -378) + "kQuery"])({
        url: d[o(-313, -298, -326, -294)],
        props: l,
        depth: "1",
        headers: (0, J[o(-381, -382, -337, -285) + "ders"])(e, g),
        fetchOptions: j
      }))[o(-308, -303, -345, -307)](a => {
        function b(a, b, d, e) {
          return c(a - 42, b - 222, d - 5, a);
        }
        function d(a, b, c, d) {
          return o(a - 410, d, b - 260, d - 110);
        }
        if (d(-142, -105, -111, -139) !== "aOZwa") {
          var e;
          if (a.ok && (e = a[d(-111, -78, -97, -41)]) != null) {
            return e;
          } else {
            return "";
          }
        }
        {
          let {
            url: a,
            props: c,
            objectUrls: e,
            depth: f,
            headers: g,
            headersToExclude: h,
            fetchOptions: i = {}
          } = _0x2c6617;
          return (0, _0x458f54[b(108, 153, 196, 153) + d(-136, -102, -145, -110)])({
            url: a,
            body: {
              "addressbook-multiget": (0, _0x13d18c[b(189, 158, 194, 109) + "sy"])({
                _attributes: (0, _0x35a0df["getDAVAttr" + d(-48, -88, -44, -91)])([_0x470692[b(161, 196, 189, 202) + "ce"][d(-18, -16, -6, 35)], _0x3b6dfa[d(50, -1, 5, -16) + "ce"].CARDDAV]),
                [_0x2941da[d(-14, -1, -41, 34) + d(-45, -42, -23, 13)][d(-56, -16, -52, -35)] + d(-65, -9, -14, 45)]: c,
                [_0x5ca3ea[d(-21, -1, -38, -13) + d(-93, -42, -99, -58)][b(182, 181, 153, 202)] + b(119, 102, 140, 48)]: e
              })
            },
            defaultNamespace: _0x468a62[d(15, -1, 10, -18) + b(181, 155, 208, 149)][d(-58, -41, -2, 12)],
            depth: f,
            headers: (0, _0x47b616[b(74, 120, 128, 167) + b(162, 114, 88, 92)])(g, h),
            fetchOptions: i
          });
        }
      }))[c(-82, -110, -62, -134)](a => a[c(-52, -50, -72, -24)](o(-378, -306, -332, -306)) || !a ? a : new URL(a, d[o(-348, -346, -326, -370)])[o(-327, -387, -338, -391)])[c(-185, -134, -190, -88)](h).map(a => new URL(a).pathname);
      let n = [];
      function o(a, b, c, d) {
        return R(c - -127 - -366, b);
      }
      if (m.length > 0) {
        if (i) {
          if (c(-92, -60, -5, -6) === "EWAYQ") {
            let {
              vCard: a,
              headers: b,
              headersToExclude: d,
              fetchOptions: e = {}
            } = _0x536dd5;
            let f = {
              "content-type": c(-19, -24, 33, -77) + o(-283, -284, -330, -280) + c(-97, -89, -41, -66),
              ...b
            };
            return (0, _0x2209a1.updateObject)({
              url: a[c(-116, -91, -108, -78)],
              data: a[c(-35, -72, -22, -37)],
              etag: a[c(-64, -20, 37, 0)],
              headers: (0, _0x1591dc["excludeHea" + o(-292, -324, -343, -309)])(f, d),
              fetchOptions: e
            });
          } else {
            let a = {
              [H[o(-228, -250, -261, -262) + "ceShort"][o(-253, -285, -276, -309)] + o(-369, -304, -334, -334)]: {},
              [H[c(-81, -26, -70, -9) + o(-316, -321, -302, -284)][o(-244, -254, -301, -329)] + ":address-d" + o(-238, -299, -267, -317)]: {}
            };
            n = await (0, b[c(-51, -93, -88, -115) + c(-71, -31, -27, -1)])({
              url: d.url,
              props: a,
              objectUrls: m,
              depth: "1",
              headers: (0, J[c(-92, -102, -107, -80) + o(-336, -308, -343, -300)])(e, g),
              fetchOptions: j
            });
          }
        } else {
          let a = {
            [H["DAVNamespa" + c(-84, -67, -94, -67)][c(-27, -41, -60, -44)] + c(-149, -99, -152, -153)]: {},
            [H[c(7, -26, -25, -67) + o(-321, -307, -302, -326)][o(-346, -307, -301, -313)] + ":address-d" + o(-261, -219, -267, -281)]: {}
          };
          n = await (0, b[c(-82, -93, -121, -98) + c(-33, -80, -78, -114)])({
            url: d[c(-79, -91, -65, -100)],
            props: a,
            depth: "1",
            headers: (0, J[c(-154, -102, -55, -68) + "ders"])(e, g),
            fetchOptions: j
          });
        }
      }
      return n[c(-102, -110, -96, -53)](a => {
        var e;
        var f;
        var g;
        var i;
        var j;
        function k(a, b, c, d) {
          return o(a - 178, c, d - 642, d - 183);
        }
        return {
          url: new URL(a.href ?? "", d.url)[k(264, 285, 249, 304)],
          etag: (e = a[k(408, 342, 362, 370)]) == null ? undefined : e[k(313, 345, 289, 296)],
          data: ((g = (f = a.props) == null ? undefined : f[k(297, 386, 352, 346) + "a"]) == null ? undefined : g[c(-197, (j = -3) - 93, j - 203, -45)]) ?? ((i = a[c(-53, -37, -147, 99)]) == null ? undefined : i.addressData)
        };
      });
    };
    function R(a, b) {
      let c = S();
      return (R = function (a, b) {
        return c[a -= 124];
      })(a, b);
    }
    function S() {
      let a = ["ders", "2wODdxr", "dgNxC", "st have ", "8avVAhF", "href", "excludeHea", "gFieldName", "cRxHm", ":getetag", "createObje", "http", "_cdata", "; charset=", "displaynam", "addressBoo", "k must hav", "url", "all", "utf-8", "PDMOD", "ssBooks", "ed address", "(((.+)+)+)", "keys", "hasFields", "name", "createVCar", "kQuery", "10GkoWij", ",\n        ", "22395065CAQwZn", "105041RTwGYW", "constructo", "7801776SnhAyG", "toString", "data", "findMissin", "default", "collection", " before fe", "ceShort", "CARDDAV", "5371352jrSJsz", "cleanupFal", "CsRVN", "2075688VBgBlN", "addressDat", "AuFJQ", "AddressBoo", "resourcety", "Book", "__importDe", "prop-filte", "propfind", "Found addr", "apply", "tWXXu", "startsWith", "szUUl", "fetchVCard", "CALENDAR_S", "tchAddress", "524idMeTl", "8915ejTphc", "tsdav:addr", "account mu", "DAV", "string", "ess book n", "stringify", "props", "search", "or undefin", ":prop", ":resourcet", "ata", "kMultiGet", "rootUrl", "2328402MLYBwG", "fault", "cards from", "DAVNamespa", "homeUrl", "text/vcard", "updateVCar", "addressboo", "AZHVd", "etag", "filter", "getDAVAttr", "QHJMq", "updateObje", "GpKWO", ":getctag", "Fetching v", "Query", "fetchAddre", ":displayna", "     props", ":sync-toke", "getctag", "no account", ":href", "erty", "cannot fet", "__esModule", "includes", "chVCards f", "deleteVCar", "ibute", "supportedR", "getetag", "map", "defineProp"];
      return (S = function () {
        return a;
      })();
    }
    b[w = 0, x = 0, y = -127, R(210, -127) + "s"] = Q;
    let T = async a => {
      var b;
      var c;
      var d;
      var e;
      let {
        addressBook: f,
        vCardString: g,
        filename: h,
        headers: i,
        headersToExclude: j,
        fetchOptions: k = {}
      } = a;
      function l(a, b, c, d) {
        return R(c - 1240 - -366, a);
      }
      let m = {
        "content-type": "text/vcard" + l(1040, 986, 1037, 1011) + l(1023, 1057, 1043, 1046),
        "If-None-Match": "*",
        ...i
      };
      return (0, I[c = -18, d = 0, e = 0, R(160, b = -39) + "ct"])({
        url: new URL(h, f[l(1073, 1016, 1041, 1047)]).href,
        data: g,
        headers: (0, J[l(985, 991, 1030, 1081) + "ders"])(m, j),
        fetchOptions: k
      });
    };
    function U(a, b, c, d) {
      return R(a - -366, d);
    }
    b[z = 0, A = 0, B = -164, R(177, -164) + "d"] = T;
    b.updateVCard = async a => {
      let {
        vCard: b,
        headers: c,
        headersToExclude: d,
        fetchOptions: e = {}
      } = a;
      function f(a, b, c, d) {
        return R(d - -178 - -286, b);
      }
      function g(a, b, c, d) {
        return R(c - 974 - -286, a);
      }
      let h = {
        "content-type": "text/vcard" + f(-322, -267, -330, -301) + f(-344, -244, -336, -295),
        ...c
      };
      return (0, I[g(800, 815, 815, 872) + "ct"])({
        url: b[f(-304, -300, -320, -297)],
        data: b[f(-258, -297, -252, -278)],
        etag: b[f(-181, -224, -218, -226)],
        headers: (0, J[g(822, 866, 844, 816) + f(-261, -329, -296, -314)])(h, d),
        fetchOptions: e
      });
    };
    let V = async a => {
      let {
        vCard: b,
        headers: c,
        headersToExclude: d,
        fetchOptions: e = {}
      } = a;
      function f(a, b, c, d) {
        return R(b - 569 - -366, c);
      }
      return (0, I.deleteObject)({
        url: b[f(366, 370, 357, 337)],
        etag: b.etag,
        headers: (0, J[f(339, 359, 374, 384) + "ders"])(c, d),
        fetchOptions: e
      });
    };
    b[R(144, -167) + "d"] = V;
  },
  60925: function (a, b) {
    var c;
    var d;
    var e;
    let f;
    (function (a, b) {
      let c = a();
      while (true) {
        try {
          if (-parseInt(j(479, 491)) / 1 + parseInt(j(485, 923)) / 2 + parseInt(j(481, 916)) / 3 * (parseInt(j(484, 926)) / 4) + parseInt(j(488, 923)) / 5 * (parseInt(j(496, 508)) / 6) + -parseInt(j(493, 498)) / 7 * (-parseInt(j(494, 930)) / 8) + -parseInt(j(487, 922)) / 9 + -parseInt(j(492, 492)) / 10 === 319576) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(h, 0);
    let g = (f = true, function (a, b) {
      let c = f ? function () {
        if (b) {
          let c = b.apply(a, arguments);
          b = null;
          return c;
        }
      } : function () {};
      f = false;
      return c;
    })(this, function () {
      return g[j(486, 940)]()[j(489, 952)](j(498, 1093) + "+$")[j(486, 945)]()[j(491, 1089) + "r"](g)[j(489, 934)](j(498, 1105) + "+$");
    });
    "use strict";
    function h() {
      let a = ["constructo", "10331170ozMSBp", "14KJWpyB", "2402528FCMFRH", "findMissin", "2005488sEnnQm", "value", "(((.+)+)+)", "__esModule", "every", "232140EtSBKw", "hasFields", "3GLRyEy", "gFieldName", "erty", "1783580WfZNGm", "865770rOzTcs", "toString", "2059443iSJkDb", "5VAPqSX", "search", "defineProp"];
      return (h = function () {
        return a;
      })();
    }
    g();
    let i = {};
    function j(a, b) {
      let c = h();
      return (j = function (a, b) {
        return c[a -= 477];
      })(a, b);
    }
    i[c = 1314, d = 0, e = 0, j(497, 1314)] = true;
    Object[j(490, 1297) + j(483, 1282)](b, j(477, 1293), i);
    b[j(495, 529) + j(482, 1301) + "s"] = undefined;
    b[j(480, 520)] = function (a, b) {
      let c = a => b[d(-448, -451, -458, -459)](b => a[b]);
      function d(a, b, c, d) {
        return j(b - -1738 - 809, c);
      }
      if (Array.isArray(a)) {
        return a[d(-457, -451, -444, -457)](a => c(a));
      } else {
        return c(a);
      }
    };
    b[j(495, 1299) + j(482, 1282) + "s"] = (a, b) => b.reduce((b, c) => a[c] ? b : (b.length ? b + "," : "") + c[j(486, 527)](), "");
  },
  61102: function (a, b) {
    let c;
    function d(a, b) {
      let c = g();
      return (d = function (a, b) {
        return c[a -= 219];
      })(a, b);
    }
    (function (a, b) {
      let c = a();
      while (true) {
        try {
          var e;
          var f;
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
          if (parseInt((e = -416, d(e - -641, -424))) / 1 * (-parseInt((f = -309, d(226, f))) / 2) + parseInt((g = -308, d(g - -541, -305))) / 3 + parseInt((h = -312, d(228, h))) / 4 + parseInt((i = -307, j = -312, d(j - -541, i))) / 5 * (parseInt((k = -414, d(k - -641, -417))) / 6) + parseInt((l = -326, m = -322, d(m - -541, l))) / 7 + -parseInt((n = -409, d(n - -641, -407))) / 8 * (parseInt((o = -413, d(234, o))) / 9) + parseInt((p = -327, q = -319, d(q - -541, p))) / 10 === 704906) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(g, 0);
    let e = (c = true, function (a, b) {
      let e = c ? function () {
        if (b) {
          let c = b[d(236, -248)](a, arguments);
          b = null;
          return c;
        }
      } : function () {};
      c = false;
      return e;
    })(this, function () {
      return e[d(230, -51)]()[d(235, 186)](d(220, -70) + "+$")[d(230, 174)]().constructor(e)[d(235, 182)](d(220, 170) + "+$");
    });
    "use strict";
    e();
    let f = {};
    function g() {
      let a = ["11218640IRkiyn", "camelCase", "erty", "326steHfD", "5734vhSWPb", "919284xIoFsM", "2525296jbRwEw", "35HngABx", "toString", "defineProp", "696qCfMnU", "534360XknccP", "144063aMWHUy", "search", "apply", "198457ntYpUn", "(((.+)+)+)", "value"];
      return (g = function () {
        return a;
      })();
    }
    f[d(221, 532)] = true;
    Object[d(231, 532) + d(224, 527)](b, "__esModule", f);
    b[d(223, 526)] = undefined;
    b[d(223, -208)] = a => a.replace(/([-_]\w)/g, a => a[1].toUpperCase());
  },
  77346: function (a, b, c) {
    let d;
    function e(a, b, c, d) {
      return g(d - 512, a);
    }
    (function (a, b) {
      let c = a();
      while (true) {
        try {
          var d;
          var e;
          var f;
          var h;
          var i;
          var j;
          if (-parseInt(g(291, 209)) / 1 + -parseInt((d = -713, e = -698, g(d - -977, e))) / 2 * (-parseInt((f = -687, h = -662, g(f - -977, h))) / 3) + parseInt(g(250, 107)) / 4 * (-parseInt(g(261, -686)) / 5) + -parseInt(g(280, 200)) / 6 * (-parseInt((i = -742, j = -751, g(i - -977, j))) / 7) + parseInt(g(285, 149)) / 8 * (parseInt(g(236, 140)) / 9) + -parseInt(g(270, 173)) / 10 + parseInt(g(262, 186)) / 11 === 102965) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(C, 0);
    let f = (d = true, function (a, c) {
      let e = d ? function () {
        if (c) {
          if (g(256, -570) !== g(265, 84)) {
            let b = c[g(237, -587)](a, arguments);
            c = null;
            return b;
          }
          {
            let {
              url: a,
              props: c,
              depth: d,
              headers: e,
              headersToExclude: f,
              fetchOptions: h = {}
            } = _0x3f9c31;
            let i = {
              depth: d,
              ...e
            };
            return (0, b[g(257, -574)])({
              url: a,
              init: {
                method: "PROPFIND",
                headers: (0, _0x56cd37["excludeHea" + g(266, -517)])((0, _0x5edf6f[g(268, -597) + "sy"])(i), f),
                namespace: _0x50250a[g(287, -556) + g(249, -551)][g(232, 41)],
                body: {
                  propfind: {
                    _attributes: (0, _0x546284["getDAVAttr" + g(302, -494)])([_0x1592f7.DAVNamespace.CALDAV, _0x16be19[g(287, -581) + "ce"][g(300, -496) + "LE"], _0x247c66[g(287, 77) + "ce"][g(273, -598) + g(233, 2)], _0x48dae3[g(287, -509) + "ce"][g(298, 104)], _0x1c60e6[g(287, 78) + "ce"][g(232, 18)]]),
                    prop: c
                  }
                }
              },
              fetchOptions: h
            });
          }
        }
      } : function () {};
      d = false;
      return e;
    })(this, function () {
      return f[g(277, 138)]()[g(234, 91)](g(253, -334) + "+$")[g(277, -327)]()[g(223, -333) + "r"](f).search(g(253, -312) + "+$");
    });
    function g(a, b) {
      let c = C();
      return (g = function (a, b) {
        return c[a -= 218];
      })(a, b);
    }
    "use strict";
    f();
    var h;
    var i;
    var j;
    var k;
    var l;
    var m;
    var n;
    var o;
    var p;
    function q(a) {
      if (a && a.__esModule) {
        return a;
      } else {
        return {
          default: a
        };
      }
    }
    let r = {
      [e(772, 765, 724, 755)]: true
    };
    Object[F(1176, 1176, 1142, 1136) + e(814, 837, 851, 817)](b, e(709, 756, 725, 738), r);
    b[e(755, 786, 772, 753) + "ct"] = b[e(722, 697, 753, 736) + "ct"] = b[e(761, 769, 760, 757) + "ct"] = b.propfind = b[h = 1171, i = 0, j = 0, g(257, 1171)] = undefined;
    let s = c(49608);
    let t = q(c(31561));
    let u = q(c(89428));
    let v = c(11559);
    let w = c(61102);
    let x = c(14293);
    let y = c(88756);
    let z = (0, t[F(1193, 1152, 1232, 1201)])((k = 1270, l = 0, m = 0, g(293, 1270) + e(730, 774, 706, 733)));
    let A = async a => {
      var b;
      function c(a, b, c, d) {
        return e(d, b - 316, c - 467, b - 207);
      }
      let {
        url: d,
        init: f,
        convertIncoming: g = true,
        parseOutgoing: h = true,
        fetchOptions: i = {}
      } = a;
      let {
        headers: j = {},
        body: k,
        namespace: l,
        method: m,
        attributes: n
      } = f;
      let o = {};
      o[B(292, 270, 234, 288)] = B(336, 297, 330, 287);
      o.encoding = B(304, 322, 293, 320);
      let p = {
        [c(1002, 965, 994, 997) + "s"]: o
      };
      let q = {
        _declaration: p,
        ...k
      };
      q[c(946, 965, 966, 969) + "s"] = n;
      let r = g ? u[B(271, 283, 303, 245)].js2xml(q, {
        compact: true,
        spaces: 2,
        elementNameFn: a => {
          var b;
          function c(a, b, c, d) {
            return B(a, d - -742, c - 42, d - 172);
          }
          if (B(-599, (b = -601) - -858, b - 64, -985) !== "wIVLZ") {
            return {
              ..._0x37b678,
              ...(_0x853c30 === null || _0x4ccce3 === undefined ? undefined : _0x26b78b[c(-413, -423, -448, -418)])
            };
          } else if (l && !/^.+:.+/[c(-438, -512, -465, -470)](a)) {
            return l + ":" + a;
          } else {
            return a;
          }
        }
      }) : k;
      let t = {
        ...i
      };
      delete t[B(266, 303, 291, 347)];
      let v = await (0, s.fetch)(d, {
        headers: {
          "Content-Type": B(327, 327, 283, 283) + "harset=UTF-8",
          ...(0, y.cleanupFalsy)(j),
          ...(i[B(343, 303, 270, 259)] || {})
        },
        body: r,
        method: m,
        ...t
      });
      let A = await v[B(330, 300, 333, 303)]();
      if (!v.ok || !((b = v.headers[c(969, 944, 937, 951)](c(1024, 1016, 986, 988) + "pe")) == null ? undefined : b[c(1017, 998, 1041, 955)]("xml")) || !h) {
        let a = {};
        a[c(1035, 993, 1035, 985)] = v[c(914, 958, 936, 959)];
        a.ok = v.ok;
        a[B(336, 331, 304, 334)] = v[c(1047, 1022, 1023, 1002)];
        a[c(976, 1001, 962, 997)] = v[B(306, 310, 280, 298)];
        a[c(986, 1005, 973, 1027)] = A;
        return [a];
      }
      function B(a, b, c, d) {
        return e(a, b - 462, c - 450, b - -484);
      }
      let C = u[c(937, 974, 1014, 975)][B(250, 247, 251, 228)](A, {
        compact: true,
        trim: true,
        textFn: (a, b) => {
          function d(a, b, d, e) {
            return c(a - 480, a - -142, d - 406, e);
          }
          function e(a, b, d, e) {
            return c(a - 497, e - -22, d - 419, d);
          }
          if (e(971, 959, 966, 968) === "iUouH") {
            _0x2454ea[_0x14bed9] = (0, _0x3f87c8[e(981, 967, 948, 957)])(_0x120e8b);
          } else {
            try {
              let c = b[d(817, 785, 810, 798)];
              let f = Object[e(940, 887, 893, 924)](c);
              let g = f[e(908, 951, 923, 928)];
              let h = f[g - 1];
              let i = c[h];
              if (i.length > 0) {
                let b = i[e(912, 913, 949, 928)] - 1;
                i[b] = (0, x.nativeType)(a);
              } else {
                c[h] = (0, x[d(837, 834, 853, 834)])(a);
              }
            } catch (a) {
              z(a[d(799, 804, 793, 795)]);
            }
          }
        },
        elementNameFn: a => (0, w[B(366, 329, 316, 363)])(a.replace(/^.+:/, "")),
        attributesFn: a => {
          var b;
          var c;
          var d;
          var e;
          let f = {
            ...a
          };
          delete f[b = 0, c = 0, d = 86, e = 53, B(86, 291, 37, -138)];
          return f;
        },
        ignoreDeclaration: true
      });
      return (Array[c(934, 949, 936, 991)](C[c(1004, 967, 996, 938) + "s"][B(220, 256, 237, 252)]) ? C[c(955, 967, 1000, 935) + "s"][B(285, 256, 259, 252)] : [C[B(317, 276, 261, 265) + "s"][B(235, 256, 220, 256)]])[B(320, 279, 313, 311)](a => {
        function b(a, b, d, e) {
          return c(a - 292, e - -208, d - 391, a);
        }
        function d(a, b, d, e) {
          return c(a - 359, d - -1531, d - 335, e);
        }
        if (b(829, 743, 798, 787) === d(-586, -542, -565, -606)) {
          return _0xdf1daa[d(-577, -524, -535, -530)]()[d(-565, -542, -578, -587)](d(-599, -519, -559, -521) + "+$").toString()[b(778, 765, 732, 734) + "r"](_0x5bb656)[b(708, 783, 756, 745)](b(763, 771, 800, 764) + "+$");
        }
        {
          var e;
          if (!a) {
            if (d(-544, -527, -528, -510) !== d(-570, -533, -528, -549)) {
              let {
                url: a,
                headers: c,
                etag: e,
                headersToExclude: f,
                fetchOptions: g = {}
              } = _0x59dae4;
              let h = {
                "If-Match": e,
                ...c
              };
              return (0, _0x288b22[d(-541, -489, -529, -528)])(a, {
                method: "DELETE",
                headers: (0, _0x59d779[d(-504, -557, -517, -510) + b(734, 753, 744, 777)])((0, _0x198230[b(820, 813, 817, 779) + "sy"])(h), f),
                ...g
              });
            } else {
              let a = {};
              a.status = v[d(-517, -544, -509, -509)];
              a.statusText = v[b(772, 765, 805, 793)];
              a.ok = v.ok;
              return a;
            }
          }
          let c = /^\S+\s(?<status>\d+)\s(?<statusText>.+)$/.exec(a[d(-482, -495, -509, -478)]);
          return {
            raw: C,
            href: a.href,
            status: (c == null ? undefined : c[b(759, 765, 777, 770)]) ? Number[b(778, 799, 772, 815)](c == null ? undefined : c[b(797, 809, 739, 770)][d(-483, -525, -509, -522)], 10) : v[b(825, 817, 781, 814)],
            statusText: ((e = c == null ? undefined : c.groups) == null ? undefined : e[b(799, 832, 818, 793)]) ?? v.statusText,
            ok: !a[b(832, 757, 792, 799)],
            error: a[b(800, 822, 796, 799)],
            responsedescription: a["responsede" + d(-513, -573, -545, -538)],
            props: (Array[d(-623, -561, -582, -602)](a[b(787, 790, 779, 765)]) ? a[d(-540, -534, -558, -536)] : [a[d(-554, -600, -558, -572)]])[d(-593, -538, -554, -549)]((a, b) => ({
              ...a,
              ...(b == null ? undefined : b.prop)
            }), {})
          };
        }
      });
    };
    b[e(806, 777, 785, 769)] = A;
    let B = async a => {
      let {
        url: c,
        props: d,
        depth: f,
        headers: h,
        headersToExclude: i,
        fetchOptions: j = {}
      } = a;
      function k(a, b, c, d) {
        return g(d - -790 - 938, c);
      }
      let l = {
        depth: f,
        ...h
      };
      function m(a, b, c, d) {
        return e(c, b - 56, c - 235, b - 367);
      }
      return (0, b.davRequest)({
        url: c,
        init: {
          method: k(471, 393, 443, 437),
          headers: (0, y[k(467, 434, 404, 443) + "ders"])((0, y[k(375, 458, 438, 416) + "sy"])(l), i),
          namespace: v[k(474, 419, 469, 435) + "ceShort"][m(1118, 1111, 1099, 1076)],
          body: {
            propfind: {
              _attributes: (0, y[m(1137, 1099, 1122, 1092) + m(1157, 1181, 1185, 1184)])([v.DAVNamespace[m(1135, 1157, 1123, 1131)], v.DAVNamespace[k(421, 476, 443, 448) + "LE"], v[m(1183, 1166, 1143, 1174) + "ce"][k(431, 399, 446, 421) + m(1112, 1112, 1086, 1139)], v[m(1199, 1166, 1199, 1186) + "ce"][k(442, 421, 486, 446)], v.DAVNamespace[k(372, 363, 387, 380)]]),
              prop: d
            }
          }
        },
        fetchOptions: j
      });
    };
    function C() {
      let a = ["cleanupFal", "1.0", "981950eBmlcE", "lwNKC", "text", "CALENDAR_S", "href", "headers", "WxIHF", "toString", "CALDAV", "includes", "97140yLtchu", "propfind", "statusText", "fetch", "IBgJZ", "2632XutsbX", "raw", "DAVNamespa", "error", "PROPFIND", "12237ZyrjCg", "128685KkHAam", "PUT", "tsdav:requ", "utf-8", "excludeHea", "prop", "content-ty", "CARDDAV", "text/xml;c", "CALDAV_APP", "camelCase", "ibute", "status", "parseInt", "erty", "__importDe", "xml2js", "getDAVAttr", "est", "stack", "constructo", "updateObje", "get", "__esModule", "keys", "response", "wIVLZ", "isArray", "length", "DAV", "ERVER", "search", "63fBmSvz", "1593zapucj", "apply", "defineProp", "url", "_parent", "deleteObje", "version", "value", "test", "createObje", "_attribute", "DrzhS", "multistatu", "ceShort", "117764AwHCgu", "map", "DELETE", "(((.+)+)+)", "propstat", "default", "BHUEL", "davRequest", "reduce", "groups", "nativeType", "25FqAVVq", "940203gGTTRV", "xmlns", "92kvtLgS", "bvlaM", "ders", "scription"];
      return (C = function () {
        return a;
      })();
    }
    b[e(759, 811, 818, 793)] = B;
    let D = async a => {
      var b;
      var c;
      var d;
      let {
        url: e,
        data: f,
        headers: h,
        headersToExclude: i,
        fetchOptions: j = {}
      } = a;
      return (0, s.fetch)(e, {
        method: (b = 995, c = 0, d = 0, g(292, 995)),
        body: f,
        headers: (0, y[F(1233, 685, 403, 376) + "ders"])(h, i),
        ...j
      });
    };
    b[n = 1206, o = 0, p = 0, g(245, 1206) + "ct"] = D;
    let E = async a => {
      var b;
      var c;
      let {
        url: d,
        data: f,
        etag: g,
        headers: h,
        headersToExclude: i,
        fetchOptions: j = {}
      } = a;
      let k = {
        "If-Match": g,
        ...h
      };
      return (0, s[e(617, 185, 144, 795)])(d, {
        method: e(609, 158, 218, 804),
        body: f,
        headers: (0, y["excludeHea" + e(-288, -450, -691, 778)])((0, y[e(b = -288, b - 162, (c = -280) - 409, c - -1060) + "sy"])(k), i),
        ...j
      });
    };
    function F(a, b, c, d) {
      return g(a - 938, b);
    }
    b[e(740, 700, 733, 736) + "ct"] = E;
    b.deleteObject = async a => {
      function b(a, b, c, d) {
        return e(c, b - 53, c - 288, a - -180);
      }
      let {
        url: c,
        headers: d,
        etag: f,
        headersToExclude: g,
        fetchOptions: h = {}
      } = a;
      let i = {
        "If-Match": f,
        ...d
      };
      return (0, s[e(135, 75, 71, 795)])(c, {
        method: b(584, 587, 576, 588),
        headers: (0, y[e(177, 56, 83, 807) + b(598, 642, 619, 592)])((0, y[b(600, 560, 561, 580) + "sy"])(i), g),
        ...h
      });
    };
  },
  87107: function (a, b, c) {
    var d;
    var e;
    var f;
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
    var s;
    var t;
    var u;
    var v;
    let w;
    (function (a, b) {
      let c = a();
      while (true) {
        try {
          if (parseInt(H(151, 1025)) / 1 + parseInt(H(214, 946)) / 2 * (-parseInt(H(206, 1087)) / 3) + parseInt(H(153, 882)) / 4 + -parseInt(H(171, 884)) / 5 * (-parseInt(H(161, 867)) / 6) + -parseInt(H(162, 887)) / 7 + parseInt(H(203, 897)) / 8 + -parseInt(H(199, 879)) / 9 === 360013) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(E, 0);
    let x = (w = true, function (a, b) {
      if (H(213, 851) === "bvQmi") {
        return _0x4eaf6f({
          ..._0x5b47f8,
          ..._0x4466c5[0]
        });
      }
      {
        let c = w ? function () {
          if (b) {
            let c = b.apply(a, arguments);
            b = null;
            return c;
          }
        } : function () {};
        w = false;
        return c;
      }
    })(this, function () {
      return x[H(202, 1096)]().search(H(174, -654) + "+$")[H(202, -663)]()[H(212, -644) + "r"](x).search(H(174, 1046) + "+$");
    });
    "use strict";
    x();
    let y = {
      [(e = 929, f = 0, g = 0, H(215, 929))]: true
    };
    Object.defineProperty(b, H(219, -650), y);
    b[h = 887, i = 0, j = 0, H(165, 887) + (k = 900, l = 0, m = 0, H(187, 900))] = b["refreshAcc" + (n = 928, o = 0, p = 0, H(176, 928))] = b[H(205, -662) + (q = 922, r = 0, s = 0, H(188, 922))] = b[t = 901, u = 0, v = 0, H(164, 901) + H(168, -689)] = b.defaultParam = undefined;
    let z = c(78365);
    let A = c(49608);
    let B = (d = c(31561)) && d.__esModule ? d : {
      default: d
    };
    let C = c(60925);
    let D = (0, B.default)(H(182, -696) + "Helper");
    function E() {
      let a = ["entials mi", "findMissin", "clientSecr", "ssing: ", "accessToke", "client_id", "refreshAcc", "tLLDg", "HnRgA", "fetch", "5906169onVbdJ", "ret", "redirect_u", "toString", "4753616oxuwAa", "Basic auth", "fetchOauth", "138xwDZeA", "username", "headers", "ded", "h tokens f", "length", "constructo", "qkhwR", "6898DTuLDj", "value", "redirectUr", "ken", "clientId", "__esModule", " failed: ", "n/x-www-fo", "tokenUrl", "POST", "defaultPar", "ion", "482778yhIWOm", "Oauth cred", "1596236JlNQjJ", "refreshTok", "ion_code", "Content-Ty", "Fetch Oaut", "access_tok", "applicatio", "rm-urlenco", "462396ESDFeP", "4265765MvectC", "auth heade", "getBasicAu", "getOauthHe", "apply", "password", "thHeaders", "ionCode", "Refresh ac", "20uEuPKi", "dqwmF", " token gen", "(((.+)+)+)", "authorizat", "essToken", "encode", "gFieldName", "fault", "cess token", "grant_type", "tsdav:auth", "client_sec", "hasFields", "text", "ailed: ", "aders", "Tokens"];
      return (E = function () {
        return a;
      })();
    }
    b[H(149, -743) + "am"] = (a, b) => (...c) => a({
      ...b,
      ...c[0]
    });
    b[H(164, -686) + "thHeaders"] = a => {
      function b(a, b, c, d) {
        return H(d - -758 - 723, b);
      }
      function c(a, b, c, d) {
        return H(b - 515 - -887, d);
      }
      D(c(-165, -168, -191, -169) + c(-217, -199, -217, -202) + "erated: " + (0, z[b(180, 119, 111, 142)])(a.username + ":" + a[b(133, 115, 97, 132)]));
      return {
        authorization: "Basic " + (0, z[c(-181, -195, -203, -204)])(a[c(-194, -165, -172, -185)] + ":" + a[b(158, 125, 155, 132)])
      };
    };
    let F = async (a, b) => {
      let c = [h(254, 281, 274, 237) + h(273, 249, 268, 250), h(347, 336, 315, 309) + "l", h(282, 344, 317, 280), h(281, 308, 290, 257) + "et", "tokenUrl"];
      if (!(0, C.hasFields)(a, c)) {
        throw Error(h(222, 265, 251, 221) + "entials mi" + f(-654, -631, -618, -662) + (0, C[h(320, 279, 289, 305) + h(311, 269, 277, 254) + "s"])(a, c));
      }
      let d = {};
      d[h(275, 258, 280, 257)] = h(275, 305, 274, 253) + f(-691, -662, -665, -690);
      d.code = a[f(-671, -661, -661, -633) + "ionCode"];
      d[h(265, 283, 300, 281) + "ri"] = a[h(346, 325, 315, 297) + "l"];
      d.client_id = a[h(289, 296, 317, 312)];
      d[h(251, 289, 282, 296) + h(331, 265, 299, 267)] = a.clientSecret;
      let e = new URLSearchParams(d);
      function f(a, b, c, d) {
        return H(a - 41 - -887, d);
      }
      D(a[f(-699, -729, -669, -710)]);
      D(e[f(-644, -674, -672, -611)]());
      let g = await (0, A[h(267, 314, 297, 268)])(a[h(270, 226, 246, 265)], {
        method: "POST",
        body: e[h(324, 309, 301, 282)](),
        headers: {
          "content-length": "" + e[h(297, 264, 301, 280)]()[f(-635, -620, -635, -610)],
          "content-type": f(-687, -663, -692, -651) + f(-625, -594, -663, -655) + f(-686, -677, -719, -701) + f(-637, -631, -663, -648)
        },
        ...(b ?? {})
      });
      function h(a, b, c, d) {
        return H(c - 986 - -887, b);
      }
      if (g.ok) {
        if (f(-674, -670, -649, -660) === "dqwmF") {
          return await g.json();
        } else {
          throw new _0x4a826e("Oauth cred" + f(-657, -665, -664, -673) + f(-654, -630, -690, -655) + (0, _0x6126ad.findMissingFieldNames)(_0x2de73c, _0x92dc39));
        }
      }
      D(h(280, 270, 256, 275) + h(288, 307, 309, 272) + h(315, 297, 285, 261) + (await g[h(254, 292, 284, 322)]()));
      return {};
    };
    b["fetchOauth" + H(188, -714)] = F;
    let G = async (a, b) => {
      let c = [h(501, 505, 480, 480) + "en", e(-787, -770, -735, -760), e(-761, -803, -814, -787) + "et", e(-831, -839, -842, -831)];
      if (!(0, C[e(-783, -817, -803, -794)])(a, c)) {
        throw Error(h(497, 489, 511, 478) + h(498, 526, 481, 515) + e(-804, -757, -761, -786) + (0, C[e(-783, -821, -826, -788) + h(525, 495, 488, 504) + "s"])(a, c));
      }
      let d = {};
      function e(a, b, c, d) {
        return H(d - -91 - -887, b);
      }
      d[h(518, 533, 550, 520)] = a[e(-793, -793, -745, -760)];
      d[e(-796, -809, -805, -795) + h(558, 541, 554, 526)] = a[e(-769, -757, -760, -787) + "et"];
      d["refresh_to" + h(545, 559, 541, 543)] = a[h(502, 512, 480, 480) + "en"];
      d[e(-778, -808, -762, -797)] = "refresh_to" + h(578, 512, 542, 543);
      let f = new URLSearchParams(d);
      let g = {};
      function h(a, b, c, d) {
        return H(d - -397 - 723, a);
      }
      g[e(-820, -803, -789, -822) + "pe"] = "application/x-www-fo" + e(-792, -851, -799, -818) + h(572, 517, 567, 535);
      let i = await (0, A[e(-751, -756, -785, -780)])(a[e(-816, -821, -864, -831)], {
        method: h(451, 492, 476, 474),
        body: f.toString(),
        headers: g,
        ...(b ?? {})
      });
      if (i.ok) {
        return await i.json();
      } else {
        D(e(-818, -786, -812, -808) + h(473, 488, 543, 506) + e(-734, -734, -739, -758) + (await i[e(-773, -806, -811, -793)]()));
        return {};
      }
    };
    function H(a, b) {
      let c = E();
      return (H = function (a, b) {
        return c[a -= 147];
      })(a, b);
    }
    b[H(195, -699) + H(176, -692)] = G;
    let I = async (a, c) => {
      function e(a, b, c, d) {
        return H(b - 254 - 723, d);
      }
      D("Fetching o" + g(-778, -753, -752, -788) + "rs");
      let f = {};
      if (a[e(1144, 1131, 1110, 1144) + "en"]) {
        if (a[g(-727, -762, -762, -782) + "en"] && !a[e(1145, 1170, 1150, 1161) + "n"] || Date.now() > (a.expiration ?? 0)) {
          f = await (0, b[e(1182, 1172, 1146, 1171) + g(-776, -740, -721, -703)])(a, c);
        }
      } else {
        if (e(1186, 1174, 1199, 1148) === e(1178, 1173, 1211, 1188)) {
          _0x5785b4 = false;
          if (_0x190b21) {
            return function () {
              if (_0x6f29b1) {
                var a;
                let b = _0x3b58b1[g(a = -657, -750, -1013, a - 492)](_0x4920a8, arguments);
                _0x29da40 = null;
                return b;
              }
            };
          } else {
            return function () {};
          }
        }
        f = await (0, b[g(-731, -711, -675, -740) + "Tokens"])(a, c);
      }
      function g(a, b, c, d) {
        return H(b - -1639 - 723, a);
      }
      D("Oauth tokens fetched: " + f[e(1137, 1135, 1133, 1160) + "en"]);
      let h = {
        tokens: f,
        [g(-742, -708, -733, -741)]: {}
      };
      h[g(-742, -708, -733, -741)][e(1166, 1152, 1190, 1163) + e(1116, 1127, 1128, 1144)] = "Bearer " + f[e(1147, 1135, 1168, 1133) + "en"];
      return h;
    };
    b[H(165, 856) + H(187, -722)] = I;
  },
  88756: function (a, b, c) {
    var d;
    var e;
    var f;
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
    var s;
    var t;
    var u;
    let v;
    (function (a, b) {
      let c = a();
      while (true) {
        try {
          if (-parseInt(A(470, 733)) / 1 + parseInt(A(460, 499)) / 2 + -parseInt(A(491, 762)) / 3 * (parseInt(A(490, 757)) / 4) + parseInt(A(477, 509)) / 5 + -parseInt(A(494, 515)) / 6 * (-parseInt(A(466, 484)) / 7) + -parseInt(A(484, 525)) / 8 + parseInt(A(473, 744)) / 9 === 175527) {
            break;
          }
          c.push(c.shift());
        } catch (a) {
          c.push(c.shift());
        }
      }
    })(y, 0);
    let w = (v = true, function (a, b) {
      let c = v ? function () {
        if (b) {
          if (A(486, -493) !== A(486, -466)) {
            return _0x4be922[A(479, 553)]().search("(((.+)+)+)+$").toString()[A(472, 547) + "r"](_0x12fb37)[A(493, -481)]("(((.+)+)+)+$");
          }
          {
            let c = b[A(482, 570)](a, arguments);
            b = null;
            return c;
          }
        }
      } : function () {};
      v = false;
      return c;
    })(this, function () {
      return w[A(479, 182)]()[A(493, 1255)]("(((.+)+)+)+$").toString()[A(472, 1208) + "r"](w)[A(493, 181)]("(((.+)+)+)+$");
    });
    "use strict";
    w();
    let x = {};
    function y() {
      let a = ["1470465ConTyQ", "WNyQx", "toString", "trim", "cleanupFal", "apply", "length", "1325264PAXwOq", "getDAVAttr", "wGtka", "czJqL", "excludeHea", "ders", "4IXGzCe", "325575kagNEM", "defineProp", "search", "378WkZQDk", "ibute", "abs", "262006ynFlgF", "teMap", "__esModule", "lParam", "conditiona", "reduce", "12992ENgAIT", "includes", "entries", "DAVAttribu", "302055WkUlzt", "urlEquals", "constructo", "1887669FeyVPE", "filter", "slice", "value"];
      return (y = function () {
        return a;
      })();
    }
    x[B(876, 860, 841, 849)] = true;
    Object[B(870, 876, 882, 884) + "erty"](b, (d = 0, e = 401, f = 0, A(462, 401)), x);
    b[g = 0, h = 410, i = 0, A(488, 410) + (j = 0, k = 418, l = 0, A(489, 418))] = b[B(860, 848, 862, 845) + B(847, 847, 862, 830)] = b[B(852, 865, 867, 858) + "sy"] = b[m = 0, n = 418, o = 0, A(485, 418) + (p = 0, q = 409, r = 0, A(495, 409))] = b.urlContains = b[B(857, 855, 848, 869)] = undefined;
    let z = c(11559);
    b[s = 0, t = 412, u = 0, A(471, 412)] = (a, b) => {
      if (!a && !b) {
        return true;
      }
      if (!a || !b) {
        return false;
      }
      function c(a, b, c, d) {
        return B(d, c - -994, c - 22, d - 342);
      }
      let d = a[g(431, 423, 427, 436)]();
      let e = b[g(433, 442, 427, 445)]();
      if (Math[g(424, 421, 406, 412)](d[c(-109, -138, -127, -118)] - e[g(421, 413, 430, 446)]) > 1) {
        return false;
      }
      let f = d[c(-143, -132, -135, -140)](-1) === "/" ? d[c(-141, -151, -135, -150)](0, -1) : d;
      function g(a, b, c, d) {
        return B(d, c - -437, c - 162, d - 289);
      }
      let h = e[g(418, 436, 422, 406)](-1) === "/" ? e.slice(0, -1) : e;
      return a[c(-155, -133, -143, -131)](h) || b[g(401, 413, 414, 421)](f);
    };
    function A(a, b) {
      let c = y();
      return (A = function (a, b) {
        return c[a -= 459];
      })(a, b);
    }
    function B(a, b, c, d) {
      return A(b - 384, a);
    }
    b.urlContains = (a, b) => {
      if (!a && !b) {
        if (h(69, 62, 58, 69) !== "ENBOX") {
          return true;
        } else {
          if (!_0x17c220 && !_0x40f544) {
            return true;
          }
          if (!_0x2add37 || !_0x46e05d) {
            return false;
          }
          let a = _0xd04a6a[c(1121, 1106, 1115, 1110)]();
          let b = _0x335350[c(1121, 1108, 1116, 1113)]();
          let d = a.slice(-1) === "/" ? a[c(1116, 1128, 1118, 1124)](0, -1) : a;
          let e = b[c(1116, 1107, 1125, 1111)](-1) === "/" ? b[c(1116, 1134, 1121, 1131)](0, -1) : b;
          return _0x4865ac[h(35, 42, 47, 32)](e) || _0x3e34d8[c(1108, 1120, 1117, 1100)](d);
        }
      }
      if (!a || !b) {
        return false;
      }
      function c(a, b, c, d) {
        return A(a - 714 - -73, b);
      }
      let d = a[h(40, 55, 42, 52)]();
      let e = b[c(1121, 1122, 1109, 1124)]();
      let f = d.slice(-1) === "/" ? d.slice(0, -1) : d;
      let g = e[h(31, 50, 68, 46)](-1) === "/" ? e[c(1116, 1121, 1131, 1125)](0, -1) : e;
      function h(a, b, c, d) {
        return A(b - -352 - -73, c);
      }
      return a[h(37, 42, 44, 50)](g) || b[c(1108, 1102, 1120, 1106)](f);
    };
    b[A(485, 405) + "ibute"] = a => a[B(862, 849, 849, 841)]((a, b) => ({
      ...a,
      [z[B(837, 853, 846, 848) + B(833, 845, 862, 846)][b]]: b
    }), {});
    b[B(851, 865, 868, 865) + "sy"] = a => Object.entries(a)[A(465, 377)]((a, [b, c]) => c ? {
      ...a,
      [b]: c
    } : a, {});
    b["conditiona" + B(858, 847, 857, 831)] = (a, b) => {
      if (b) {
        var c;
        if (B(-19, (c = -12) - -874, -443, c - 436) !== "WNyQx") {
          _0x4b2b3a = false;
          if (_0x22078d) {
            return function () {
              if (_0x2db359) {
                let a = _0x34fdfc[B(663, 866, 38, -444)](_0x2e039a, arguments);
                _0x203e28 = null;
                return a;
              }
            };
          } else {
            return function () {};
          }
        }
        {
          let c = {
            [a]: b
          };
          return c;
        }
      }
      return {};
    };
    b[B(878, 872, 858, 888) + "ders"] = (a, b) => {
      if (!a) {
        return {};
      }
      function c(a, b, c, d) {
        return B(a, b - 537, c - 376, d - 188);
      }
      if (b && b[c(1405, 1404, 1406, 1415)] !== 0) {
        return Object.fromEntries(Object[B(1442, 852, 1158, 1313)](a)[c(1381, 1395, 1379, 1388)](([a]) => !b.includes(a)));
      } else {
        return a;
      }
    };
  }
};