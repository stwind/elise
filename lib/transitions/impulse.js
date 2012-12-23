var _ = require('underscore');

var Impulse = function (min, max) {
  this.min = min == undefined ? 400 : min;
  this.max = max == undefined ? this.min * 3 : max;
};

var p = Impulse.prototype;

p.update = function (particles) {
  var x = Math.random() * (this.max - this.min) + this.min,
      y = -Math.random() * 400;

  _.each(particles, function (p) {
    console.log(x, y);
    p.to({
      impulsX: x,
      impulsY: y
    });
  });
};

module.exports = Impulse;
