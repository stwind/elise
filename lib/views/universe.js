var _ = require('underscore'),
    Particle = require('./particle');

var Universe = function (num) {
  var container = this.container = new createjs.Container();
  
  for (var i = 0; i < num; i++) {
    container.children.push(new Particle());
  }
};

var p = Universe.prototype;

p.draw = function () {
  return this.container.draw.apply(this.container, arguments);
};

p.isVisible = function () {
  return this.container.isVisible.apply(this.container, arguments);
};

p.updateContext = function () {
  return this.container.updateContext.apply(this.container, arguments);
};

p.update = function () {
  var particles = this.container.children;

  _.each(arguments, function (tran) {
    tran.update(particles);
  });
};

p.setMode = function (mode) {
  var particles = this.container.children;

  _.each(particles, function (p) {
    p.mode = mode;
  });
};

module.exports = Universe;
