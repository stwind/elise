var _ = require('./underscore'),
    timeline = [],
    TranRandom = require('./transitions/random');

var BORDER = 30;

timeline.push({
  t: 0,
  c: function () {
    var pictures = this.board.pictures,
        universe = this.universe,
        canvas = this.canvas;

    _.each(pictures, function (pic) {
      var bitmap = pic.bitmap;
      bitmap.alpha = 0;
    });

    _.each(universe.container.children, function (p) {
      p.to({
        bound: {x: 0, y:0, width: canvas.width, height: canvas.height}
      });
    });
  }
});

timeline.push({
  t: 70,
  c: function () {
    var board = this.board,
        cw = this.canvas.width,
        ch = this.canvas.height,
        picture = board.pictures[0],
        bitmap = picture.bitmap;

    picture.bitmap.x = cw - bitmap.image.width - BORDER;
    picture.bitmap.y = (ch - bitmap.image.height) / 2;
    createjs.Tween.get(picture.bitmap)
                  .to({alpha: 1}, 1000).call(function () {
                    board.showing = picture;
                  });
    //this.universe.update(new TranRandom(this.canvas.width, this.canvas.height));
  }
});

timeline.push({
  t: 6000,
  c: function () {
    var board = this.board,
        showing = this.board.showing;

    createjs.Tween.get(showing.bitmap).to({alpha: 0}, 1000).call(function () {
      board.showing = null;
    });
  }
});

timeline.push({
  t: 7300,
  c: function () {
    var board = this.board,
        cw = this.canvas.width,
        ch = this.canvas.height,
        picture = board.pictures[1],
        bitmap = picture.bitmap;

    picture.bitmap.x = BORDER;
    picture.bitmap.y = (ch - bitmap.image.height) / 2;
    createjs.Tween.get(picture.bitmap)
                  .to({alpha: 1}, 800).call(function () {
                    board.showing = picture;
                  });
  }
});

timeline.push({
  t: 14000,
  c: function () {
    var board = this.board,
        picture = this.board.showing;

    createjs.Tween.get(picture.bitmap).to({alpha: 0}, 1000).call(function () {
      board.showing = null;
    });
  }
});

timeline.push({
  t: 17000,
  c: function () {
    var board = this.board,
        cw = this.canvas.width,
        ch = this.canvas.height,
        picture = board.pictures[2],
        bitmap = picture.bitmap;

    picture.bitmap.x = cw - bitmap.image.width - BORDER;
    picture.bitmap.y = (ch - bitmap.image.height) / 2;
    createjs.Tween.get(picture.bitmap)
                  .to({alpha: 1}, 1000).call(function () {
                    board.showing = picture;
                  });
  }
});

timeline.push({
  t: 22000,
  c: function () {
    var board = this.board,
        showing = this.board.showing;

    createjs.Tween.get(showing.bitmap).to({alpha: 0}, 1000).call(function () {
      board.showing = null;
    });
  }
});

timeline.push({
  t: 24300,
  c: function () {
    var board = this.board,
        cw = this.canvas.width,
        ch = this.canvas.height,
        picture = board.pictures[3],
        bitmap = picture.bitmap;

    picture.bitmap.x = BORDER;
    picture.bitmap.y = (ch - bitmap.image.height) / 2;
    createjs.Tween.get(picture.bitmap)
                  .to({alpha: 1}, 800).call(function () {
                    board.showing = picture;
                  });
  }
});

timeline.push({
  t: 33000,
  c: function () {
    var board = this.board,
        picture = this.board.showing;

    createjs.Tween.get(picture.bitmap).to({alpha: 0}, 1000).call(function () {
      board.showing = null;
    });
  }
});

module.exports = timeline;
