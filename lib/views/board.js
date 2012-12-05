var _ = require('underscore'),
    Picture = require('./picture'),
    async = require('./async');

var Board = function (images, canvas) {
  this.startedAt = +new Date;
  this.showIndex = 0;

  var container = this.container = new createjs.Container(),
      board = this;

  var pictures = _.map(images, function (props, url) {
    return new Picture(url, canvas);
  });

  async.forEach(pictures, function (pic, callback) {
    pic.onloaded(function () { 
      container.addChild(pic);
      callback(null); 
    });
  }, function () {
    board.loaded = true;
    board.onLoadedCalback && board.onLoadedCalback();
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

p.nextPic = function () {
  var children = this.container.children,
      showIndex = this.showIndex % children.length;

  if (this.showing) {
    this.showing.hide();
  }
  this.showing = children[showIndex].show();
  this.showIndex++;
};

p.onloaded = function (callback) {
  if (this.loaded) {
    callback();
  } else {
    this.onLoadedCalback = callback;
  }
};

module.exports = Board;
