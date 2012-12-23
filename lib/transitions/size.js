var _ = require('underscore');

var Size = function (min, max) {
  this.min = min;
  this.max = max == undefined ? min : max;
};

var p = Size.prototype;

p.update = function (particles) {
  var min = this.min, max = this.max;

  _.each(particles, function (p) {
    p.to({
      size: Math.random() * (max - min) + min
    });
  });
};

module.exports = Size;
