var _ = require('./underscore'),
    TranRandom = require('./transitions/random');

exports[0] = function () {
  var pictures = this.board.pictures,
      canvas = this.canvas;

  _.each(pictures, function (pic) {
    var bitmap = pic.bitmap;
    bitmap.x = (canvas.width - bitmap.image.width) /2;
    bitmap.y = (canvas.height - bitmap.image.height) /2;
    bitmap.alpha = 0;
  });
};

exports[1000] = function () {
  var picture = this.board.pictures[0];
  this.board.showing = picture;

  createjs.Tween.get(picture.bitmap).to({alpha: 1}, 500);
  this.universe.update(new TranRandom(this.canvas.width, this.canvas.height));
};

exports[2000] = function () {
  var last = this.board.showing,
      picture = this.board.pictures[0];
  this.board.showing = picture;

  createjs.Tween.get(last.bitmap).to({alpha: 0}, 500);
  createjs.Tween.get(picture.bitmap).to({alpha: 1}, 500);
  this.universe.update(new TranRandom(this.canvas.width, this.canvas.height));
};

exports[3000] = function () {
  var last = this.board.showing,
      picture = this.board.pictures[1];
  this.board.showing = picture;

  createjs.Tween.get(last.bitmap).to({alpha: 0}, 500);
  createjs.Tween.get(picture.bitmap).to({alpha: 1}, 500);
  this.universe.update(new TranRandom(this.canvas.width, this.canvas.height));
};

exports[4000] = function () {
  var last = this.board.showing,
      picture = this.board.pictures[0];
  this.board.showing = picture;

  createjs.Tween.get(last.bitmap).to({alpha: 0}, 500);
  createjs.Tween.get(picture.bitmap).to({alpha: 1}, 500);
  this.universe.update(new TranRandom(this.canvas.width, this.canvas.height));
};
