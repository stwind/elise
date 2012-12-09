var _ = require('underscore'),
    Picture = require('./picture');

var Board = function (images) {
  this.startedAt = +new Date;
  this.showIndex = 0;

  var container = this.container = new createjs.Container(),
      board = this;

  _.each(images, function (props, url) {
    container.addChild(new Picture(url));
  });

  board.pictures = container.children;
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

module.exports = Board;
