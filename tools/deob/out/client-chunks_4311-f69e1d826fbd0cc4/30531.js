export var Q = class {
  constructor() {
    this.listeners = new Set();
    this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    this.listeners.add(e);
    this.onSubscribe();
    return () => {
      this.listeners.delete(e);
      this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {}
  onUnsubscribe() {}
};