var _ = require('underscore'),
    Picture = require('./picture'),
    Ease = createjs.Ease;

var Board = function (images) {
  var container = this.container = new createjs.Container(),
      pictures = this.pictures = {};

  _.each(images, function (props, name) {
    var pic = new Picture(props);
    pictures[name] = pic;
    container.addChild(pic);
  });
};

var p = Board.prototype;

p.draw = function () {
  return this.container.draw.apply(this.container, arguments);
};

p.isVisible = function () {
  return this.container.isVisible.apply(this.container, arguments);
};

p.updateContext = function () {
  return this.container.updateContext.apply(this.container, arguments);
};

p.next = function (p) {
  var picture = this.pictures[p.id];

  picture.container.x = p.x;
  picture.container.y = p.y;
  createjs.Tween.get(picture.container)
                .call(picture.start, [p.duration, Ease.cubicOut])
                .to({alpha: 1}, 3000)
                .wait(p.duration - 3000 - 3000)
                .to({alpha: 0}, 3000, Ease.quartIn);
}

module.exports = Board;
