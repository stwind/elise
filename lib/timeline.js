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
  var board = this.board;
      picture = board.pictures[0];

  createjs.Tween.get(picture.bitmap).to({alpha: 1}, 500).call(function () {
    board.showing = picture;
  });
  this.universe.update(new TranRandom(this.canvas.width, this.canvas.height));
};

exports[2000] = function () {
  var board = this.board,
      last = board.showing,
      picture = board.pictures[1];

  createjs.Tween.get(last.bitmap).to({alpha: 0}, 500);
  createjs.Tween.get(picture.bitmap).to({alpha: 1}, 500).call(function () {
    board.showing = picture;
  });
  this.universe.update(new TranRandom(this.canvas.width, this.canvas.height));
};

exports[3000] = function () {
  var board = this.board,
      last = board.showing,
      picture = board.pictures[2];

  createjs.Tween.get(last.bitmap).to({alpha: 0}, 500);
  createjs.Tween.get(picture.bitmap).to({alpha: 1}, 500).call(function () {
    board.showing = picture;
  });
  this.universe.update(new TranRandom(this.canvas.width, this.canvas.height));
};

exports[4000] = function () {
  var board = this.board,
      last = board.showing,
      picture = board.pictures[3];

  createjs.Tween.get(last.bitmap).to({alpha: 0}, 500);
  createjs.Tween.get(picture.bitmap).to({alpha: 1}, 500).call(function () {
    board.showing = picture;
  });
  this.universe.update(new TranRandom(this.canvas.width, this.canvas.height));
};
