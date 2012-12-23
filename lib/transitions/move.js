var _ = require('underscore');

var Tran = function (minX, maxX, minY, maxY) {
  this.minX = minX;
  this.maxX = maxX;
  this.minY = minY;
  this.maxY = maxY;
};

var p = Tran.prototype;

p.update = function (particles) {
  var minX = this.minX, maxX = this.maxX, 
      minY = this.minY, maxY = this.maxY;

  _.each(particles, function (p) {
    var sx = Math.sin(p.props.angle) * Math.random() * 3,
        sy = Math.cos(p.props.angle) * Math.random() * 3;

    p.to({
      toX: Math.random() * (maxX - minX) + minX,
      toY: Math.random() * (maxY - minY) + minY,
      speedX: sx,
      speedY: sy
    });
  });
};

module.exports = Tran;
