exports.random = function (min, max) {
  if (!max) {
    max = min;
    min = 0;
  }

  return min + Math.random() * (max - min);
};
