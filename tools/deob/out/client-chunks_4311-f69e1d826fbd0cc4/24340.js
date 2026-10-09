var n = require("./17394.js");
module.exports = function (e) {
  if (n(e) || e === 0) {
    return e;
  } else if (e < 0) {
    return -1;
  } else {
    return 1;
  }
};