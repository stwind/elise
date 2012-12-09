var _ = require('underscore');

var Particle = function () {
  this.target = new createjs.Shape();

  this.props = {
    speedX: (Math.random() - 0.5) * 2,
    speedY: (Math.random() - 0.5) * 2,
    toX: 100,
    toY: 100
  };

  var g = this.target.graphics;
  g.beginFill(createjs.Graphics.getRGB(255,255,255))
  g.drawCircle(0, 0, 10);
};

var p = Particle.prototype;

p.draw = function () {
  this.update();

  return this.target.draw.apply(this.target, arguments);
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
  p.toX += p.speedX;
  p.toY += p.speedY;
};

module.exports = Particle;
