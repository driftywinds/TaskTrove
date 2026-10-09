Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  HTML_LIMITED_BOT_UA_RE: function () {
    return a.HTML_LIMITED_BOT_UA_RE;
  },
  HTML_LIMITED_BOT_UA_RE_STRING: function () {
    return o;
  },
  getBotType: function () {
    return c;
  },
  isBot: function () {
    return s;
  }
};
for (var u in n) {
  Object.defineProperty(exports, u, {
    enumerable: true,
    get: n[u]
  });
}
let a = require("./4510.js");
let l = /Googlebot(?!-)|Googlebot$/i;
let o = a.HTML_LIMITED_BOT_UA_RE.source;
function i(e) {
  return a.HTML_LIMITED_BOT_UA_RE.test(e);
}
function s(e) {
  return l.test(e) || i(e);
}
function c(e) {
  if (l.test(e)) {
    return "dom";
  } else if (i(e)) {
    return "html";
  } else {
    return undefined;
  }
}