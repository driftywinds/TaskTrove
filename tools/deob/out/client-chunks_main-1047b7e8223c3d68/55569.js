Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = {
  HTML_LIMITED_BOT_UA_RE: function () {
    return o.HTML_LIMITED_BOT_UA_RE;
  },
  HTML_LIMITED_BOT_UA_RE_STRING: function () {
    return s;
  },
  getBotType: function () {
    return c;
  },
  isBot: function () {
    return l;
  }
};
for (var a in n) {
  Object.defineProperty(exports, a, {
    enumerable: true,
    get: n[a]
  });
}
let o = require("./19885.js");
let i = /Googlebot(?!-)|Googlebot$/i;
let s = o.HTML_LIMITED_BOT_UA_RE.source;
function u(e) {
  return o.HTML_LIMITED_BOT_UA_RE.test(e);
}
function l(e) {
  return i.test(e) || u(e);
}
function c(e) {
  if (i.test(e)) {
    return "dom";
  } else if (u(e)) {
    return "html";
  } else {
    return undefined;
  }
}