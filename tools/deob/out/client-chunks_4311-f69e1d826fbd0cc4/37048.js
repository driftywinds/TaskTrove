var n = require("./23353.js");
function i() {
  return !!n;
}
i.hasArrayLengthDefineBug = function () {
  if (!n) {
    return null;
  }
  try {
    return n([], "length", {
      value: 1
    }).length !== 1;
  } catch (e) {
    return true;
  }
};
module.exports = i;