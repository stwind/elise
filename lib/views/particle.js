var _ = require('underscore'),
    Graphics = createjs.Graphics;

var Particle = function () {
  this.target = new createjs.Shape();

  this.props = {
    speedX: (Math.random() - 0.5) * 2,
    speedY: (Math.random() - 0.5) * 2,
    toX: 100,
    toY: 100,
    angle: Math.random() * Math.PI * 2,
    impulsX: 0,
    impulsY: 0,
    impulsToX: 0,
    impulsToY: 0,
    toR: 232,
    toG: 150,
    toB: 200,
    r: 0,
    g: 0,
    b: 0,
    size: Math.random() * 4 + 50,
    toSize: 10
  };

};

var p = Particle.prototype;

p.draw = function () {
  this.update();

  var g = this.target.graphics,
      p = this.props;

  var color = Graphics.getRGB(p.r, p.g, p.b);
  g.clear();
  g.beginFill(color);
  g.drawCircle(0, 0, p.size);

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

  target.x = target.x + ~~((p.toX - target.x) / 10);
  target.y = target.y + ~~((p.toY - target.y) / 10);

  p.impulsX = p.impulsX + (p.impulsToX - p.impulsX) / 30;
  p.impulsY = p.impulsY + (p.impulsToY - p.impulsY) / 30;

  p.size = p.size + (p.toSize - p.size) / 10;

  p.r = p.r + ~~((p.toR - p.r) / 10);
  p.g = p.g + ~~((p.toG - p.g) / 10);
  p.b = p.b + ~~((p.toB - p.b) / 10);

  p.toX += p.speedX;
  p.toY += p.speedY;

  p.toX += ~~(p.impulsX * p.size / 30);
  p.toY += ~~(p.impulsY * p.size / 30);

  if (p.bound) {
    var radius = ~~(p.size / 2);
    if (target.x < p.bound.x - radius) {
      target.x = p.bound.width + radius;
      p.toX = p.bound.width - radius;
    }

    if (target.y < p.bound.y - radius) {
      target.y = p.bound.height + radius;
      p.toY = p.bound.height - radius;
    }

    if (target.x > p.bound.width + radius) {
      target.x = p.bound.x - radius;
      p.toX = p.bound.x + radius;
    }

    if (target.y > p.bound.height + radius) {
      target.y = p.bound.y - radius;
      p.toY = p.bound.y + radius;
    }
  }
};

module.exports = Particle;
