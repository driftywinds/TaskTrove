var n = require("./65968.js");
var i = require("./18411.js");
export var k = class {
  #y;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout();
    if ((0, i.gn)(this.gcTime)) {
      this.#y = n.zs.setTimeout(() => {
        this.optionalRemove();
      }, this.gcTime);
    }
  }
  updateGcTime(e) {
    this.gcTime = Math.max(this.gcTime || 0, e ?? (i.S$ ? Infinity : 300000));
  }
  clearGcTimeout() {
    if (this.#y) {
      n.zs.clearTimeout(this.#y);
      this.#y = undefined;
    }
  }
};