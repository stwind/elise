var _ = require('underscore');

var Random = function (width, height) {
  this.width = width;
  this.height = height;
};

var p = Random.prototype;

p.update = function (particles) {
  var width = this.width,
      height = this.height;

  _.each(particles, function (p) {
    p.to({
      //speedX: 5,
      //speedY: 5,
      toX: Math.random() * width,
      toY: Math.random() * height
    });
  });
};

module.exports = Random;
