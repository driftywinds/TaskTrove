Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return i;
  }
});
let n = require("./34007.js")._(require("./31057.js"));
class a {
  constructor(e, t, r) {
    this.name = e;
    this.attributes = t.attributes ?? {};
    this.startTime = t.startTime ?? Date.now();
    this.onSpanEnd = r;
    this.state = {
      state: "inprogress"
    };
  }
  end(e) {
    if (this.state.state === "ended") {
      throw Object.defineProperty(Error("Span has already ended"), "__NEXT_ERROR_CODE", {
        value: "E17",
        enumerable: false,
        configurable: true
      });
    }
    this.state = {
      state: "ended",
      endTime: e ?? Date.now()
    };
    this.onSpanEnd(this);
  }
}
class o {
  startSpan(e, t) {
    return new a(e, t, this.handleSpanEnd);
  }
  onSpanEnd(e) {
    this._emitter.on("spanend", e);
    return () => {
      this._emitter.off("spanend", e);
    };
  }
  constructor() {
    this._emitter = (0, n.default)();
    this.handleSpanEnd = e => {
      this._emitter.emit("spanend", e);
    };
  }
}
let i = new o();
if ((typeof exports.default == "function" || typeof exports.default == "object" && exports.default !== null) && exports.default.__esModule === undefined) {
  Object.defineProperty(exports.default, "__esModule", {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}