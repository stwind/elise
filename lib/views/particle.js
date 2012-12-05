var _ = require('underscore');

var Particle = function () {
  this.target = new createjs.Shape();

  this.props = {
    speedX: 10,
    speedY: 10,
    toX: 100,
    toY: 100
  };

  var g = this.target.graphics;
  g.beginFill(createjs.Graphics.getRGB(255,255,255))
  g.drawCircle(0, 0, 50);
};

var p = Particle.prototype;

p.draw = function () {
  var target = this.target;

  this.update();

  return target.draw.apply(target, arguments);
};

p.isVisible = function () {
  return this.target.isVisible.apply(this.target, arguments);
};

p.updateContext = function () {
  return this.target.updateContext.apply(this.target, arguments);
};

p.to = function (props) {
  this.props = _.extend(this.props, props);
};

p.update = function () {
  var target = this.target,
      p = this.props;

  target.x = target.x + Math.floor((p.toX - target.x) / 10);
  target.y = target.y + Math.floor((p.toY - target.y) / 10);
};

module.exports = Particle;
