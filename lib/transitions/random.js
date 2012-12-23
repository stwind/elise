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
    var sx = Math.cos(p.props.angle) * Math.random() * 3,
        sy = Math.sin(p.props.angle) * Math.random() * 3;

    p.to({
      toX: Math.random() * width,
      toY: Math.random() * height,
      speedX: sx,
      speedY: sy
    });
  });
};

module.exports = Random;
