var _ = require('underscore'),
    Graphics = createjs.Graphics;

var Particle = function () {
  this.target = new createjs.Shape();

  this.props = {
    speedX: 0,
    speedY: 0,
    toX: 0,
    toY: 0,
    angle: Math.random() * Math.PI * 2,
    impulsX: 0,
    impulsY: 0,
    impulsToX: 0,
    impulsToY: 0,
    alpha: Math.random(),
    toR: 232,
    toG: 150,
    toB: 200,
    r: 0,
    g: 0,
    b: 0,
    size: 1,
    toSize: ~~(Math.random() * 4) + 1
  };

  this.target.x = 0;
  this.target.y = 0;
  this.target.alpha = 0;

  this.mode = 'impulse';
};

var p = Particle.prototype;

p.draw = function () {
  this.update();

  var g = this.target.graphics,
      p = this.props;

  this.target.alpha = p.alpha;

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

var modes = {
  impulse: function () {
    var target = this.target,
        p = this.props;

    target.x += (p.toX - target.x) / 10;
    target.y += (p.toY - target.y) / 10;

    p.size += (p.toSize - p.size) / 10;

    p.r += ~~((p.toR - p.r) / 10);
    p.g += ~~((p.toG - p.g) / 10);
    p.b += ~~((p.toB - p.b) / 10);

    p.toX += p.speedX;
    p.toY += p.speedY;

    p.toX += ~~(p.impulsX * p.size / 30);
    p.toY += ~~(p.impulsY * p.size / 30);

    p.impulsX += (p.impulsToX - p.impulsX) / 30;
    p.impulsY += (p.impulsToY - p.impulsY) / 30;

    if (Math.random() > 0.992) {
      p.size = Math.random() * 15;
    }

    this._checkBounds();
  },
  move: function () {
    var target = this.target,
        p = this.props;

    target.x += p.speedX;
    target.y += p.speedY;

    if (p.bound) {
      var radius = p.size / 2;
      if (target.x < p.bound.x - radius) {
        target.x = p.bound.width + radius;
      }

      if (target.y < p.bound.y - radius) {
        target.y = p.bound.height + radius;
      }

      if (target.x > p.bound.width + radius) {
        target.x = p.bound.x - radius;
      }

      if (target.y > p.bound.height + radius) {
        target.y = p.bound.y - radius;
      }
    }
  }
};

p.changeMode = function (mode) {
  this.mode = mode
};

p.update = function () {
  modes[this.mode].apply(this);
};

p._checkBounds = function () {
  var target = this.target,
      p = this.props;

  if (p.bound) {
    var radius = p.size / 2;
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
