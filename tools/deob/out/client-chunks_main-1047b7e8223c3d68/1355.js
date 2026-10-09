Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BloomFilter", {
  enumerable: true,
  get: function () {
    return r;
  }
});
class r {
  constructor(e, t = 0.0001) {
    this.numItems = e;
    this.errorRate = t;
    this.numBits = Math.ceil(-(e * Math.log(t)) / (Math.log(2) * Math.log(2)));
    this.numHashes = Math.ceil(this.numBits / e * Math.log(2));
    this.bitArray = Array(this.numBits).fill(0);
  }
  static from(e, t = 0.0001) {
    let n = new r(e.length, t);
    for (let t of e) {
      n.add(t);
    }
    return n;
  }
  export() {
    return {
      numItems: this.numItems,
      errorRate: this.errorRate,
      numBits: this.numBits,
      numHashes: this.numHashes,
      bitArray: this.bitArray
    };
  }
  import(e) {
    this.numItems = e.numItems;
    this.errorRate = e.errorRate;
    this.numBits = e.numBits;
    this.numHashes = e.numHashes;
    this.bitArray = e.bitArray;
  }
  add(e) {
    this.getHashValues(e).forEach(e => {
      this.bitArray[e] = 1;
    });
  }
  contains(e) {
    return this.getHashValues(e).every(e => this.bitArray[e]);
  }
  getHashValues(e) {
    let t = [];
    for (let r = 1; r <= this.numHashes; r++) {
      let n = function (e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          t = Math.imul(t ^ e.charCodeAt(r), 1540483477);
          t ^= t >>> 13;
          t = Math.imul(t, 1540483477);
        }
        return t >>> 0;
      }(`${e}${r}`) % this.numBits;
      t.push(n);
    }
    return t;
  }
}