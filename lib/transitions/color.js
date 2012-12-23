var _ = require('underscore');

var White = function (r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
};

var p = White.prototype;

p.update = function (particles) {
  var r = this.r,
      g = this.g,
      b = this.b;

  _.each(particles, function (p) {
    p.to({ r: r, g: g, b: b });
  });
};

module.exports = White;
