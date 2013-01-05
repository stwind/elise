var _ = require('underscore');

var White = function (width, height) {
  var white = this.white = new createjs.Shape();
  white.graphics.beginFill(createjs.Graphics.getRGB(255,255,255));
  white.graphics.rect(0, 0, width, height);
  white.alpha = 0;
};

var p = White.prototype;

p.draw = function () {
  return this.white.draw.apply(this.white, arguments);
};

p.isVisible = function () {
  return this.white.isVisible.apply(this.white, arguments);
};

p.updateContext = function () {
  return this.white.updateContext.apply(this.white, arguments);
};

p.show = function (duration) {
  createjs.Tween.get(this.white)
                .to({alpha: 1})
                .to({alpha: 0}, duration);
};

module.exports = White;
