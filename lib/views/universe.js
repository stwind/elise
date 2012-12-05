var _ = require('underscore'),
    Particle = require('./particle');

var Universe = function (num, transitions) {
  var container = this.container = new createjs.Container();
  this.transitions = transitions;
  
  this.resetIndex();

  for (var i = 0; i < num; i++) {
    container.children.push(new Particle());
  }
};

var p = Universe.prototype;

p.draw = function () {
  var particles = this.container.children,
      startedAt = this.startedAt,
      transition = this.transitions[this.transIdx];

  if (transition) {
    if (+new Date - startedAt > transition.time) {
      this.transIdx++;
      transition.trans.update(particles);
    }
  } else {
    this.resetIndex();
  }

  return this.container.draw.apply(this.container, arguments);
};

p.isVisible = function () {
  return this.container.isVisible.apply(this.container, arguments);
};

p.updateContext = function () {
  return this.container.updateContext.apply(this.container, arguments);
};

p.resetIndex = function () {
  this.transIdx = 0;
  this.startedAt = +new Date;
}

module.exports = Universe;
