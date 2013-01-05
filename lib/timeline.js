var _ = require('./underscore'),
    timeline = [],
    Ease = createjs.Ease,
    TranRandom = require('./transitions/random'),
    TranColor = require('./transitions/color'),
    TranSize = require('./transitions/size'),
    TranImpulse = require('./transitions/impulse'),
    TranMove = require('./transitions/move');

var BORDER = 30;

timeline.push({
  t: 0,
  c: function () {
    var pictures = this.board.pictures,
        universe = this.universe,
        canvas = this.canvas;

    _.each(pictures, function (pic) {
      pic.container.alpha = 0;
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
        picture = board.pictures['e001'],
        bitmap = picture.bitmap;

    picture.container.x = cw - picture.width - BORDER;
    picture.container.y = (ch - picture.height) / 2;
    createjs.Tween.get(picture.container)
                  .call(picture.start, [6300])
                  .to({alpha: 1}, 1000)
                  .wait(4300)
                  .to({alpha: 0}, 1000);
  }
});

timeline.push({
  t: 7300,
  c: function () {
    var cw = this.canvas.width,
        ch = this.canvas.height,
        picture = this.board.pictures['e002'],
        bitmap = picture.bitmap;

    picture.container.x = BORDER;
    picture.container.y = (ch - picture.height) / 2;
    createjs.Tween.get(picture.container)
                  .call(picture.start, [7700])
                  .to({alpha: 1}, 1000)
                  .wait(5700)
                  .to({alpha: 0}, 1000);
  }
});

timeline.push({
  t: 17000,
  c: function () {
    var cw = this.canvas.width,
        ch = this.canvas.height,
        picture = this.board.pictures['e003'],
        bitmap = picture.bitmap;

    picture.container.x = cw - picture.width - BORDER;
    picture.container.y = (ch - picture.height) / 2;
    createjs.Tween.get(picture.container)
                  .call(picture.start, [6000])
                  .to({alpha: 1}, 1000)
                  .wait(4000)
                  .to({alpha: 0}, 1000);
  }
});

timeline.push({
  t: 24300,
  c: function () {
    var cw = this.canvas.width,
        ch = this.canvas.height,
        picture = this.board.pictures['e004'],
        bitmap = picture.bitmap;

    picture.container.x = BORDER;
    picture.container.y = (ch - picture.height) / 2;
    createjs.Tween.get(picture.container)
                  .call(picture.start, [8200])
                  .to({alpha: 1}, 800)
                  .wait(6400)
                  .to({alpha: 0}, 1000);
  }
});

timeline.push({
  t: 36000,
  c: function () {
    var particles = this.universe.container.children,
        cw = this.canvas.width,
        ch = this.canvas.height;

    _.each(particles, function (p) {
      var startX = Math.random() * cw,
          startY = Math.random() * ch;

      createjs.Tween.get(p.target)
              .to({x: startX, y: startY})
              .call(function () {
                p.to({toX: startX, toY: startY});
              })
              .wait(Math.random() * 12000)
              .to({alpha: Math.min(Math.random() + 0.1, 1)}, 1000)
              .call(function () {
                var speed = Math.random() / 3;
                p.to({
                  speedX: p.target.x > cw/2 ? speed : -speed, 
                  speedY: p.target.y > ch/2 ? speed : -speed
                })
              })
    });
  }
});

timeline.push({
  t: 49000,
  c: function () {
    var universe = this.universe;
    this.universe.update(
      new TranRandom(this.canvas.width, this.canvas.height),
      new TranColor(255,255,255), 
      new TranSize(50, 100), 
      new TranImpulse(200, 200));
  }
});

timeline.push({
  t: 52999,
  c: function () {
      var board = this.board, universe = this.universe;
      this.stage.swapChildren(board, universe);
  }
});

/// montage

_.each(_.shuffle(_.range(5, 20)), function (i, k) {
  timeline.push({
    t: 53000 + k * 570,
    c: function () {
      var board = this.board,
          universe = this.universe;
          cw = this.canvas.width,
          ch = this.canvas.height,
          name = i < 10 ? 'e00' + i : 'e0' + i,
          picture = board.pictures[name],
          w = picture.width,
          h = picture.height;

      picture.container.x = Math.random() * (cw - BORDER - w) + BORDER;
      picture.container.y = Math.random() * (ch - BORDER - h) + BORDER;
      createjs.Tween.get(picture.container)
                    .to({alpha: 1}, 100)
                    .wait(320)
                    .to({alpha: 0}, 100);

      this.universe.update(
        new TranRandom(cw, ch),
        new TranImpulse());
      }
  });
});

/// big pictures

timeline.push({
  t: 61700,
  c: function () {
    this.white.show(500);

    var board = this.board,
        cw = this.canvas.width,
        ch = this.canvas.height,
        picture = board.pictures['e020'],
        bitmap = picture.bitmap;

    this.universe.container.alpha = 0;
    createjs.Tween.get(picture.container)
                  .call(picture.start, [8600])
                  .to({alpha: 1})
                  .wait(8600)
                  .to({alpha: 0});
  }
});

timeline.push({
  t: 70200,
  c: function () {
    this.white.show(500);
    
    var board = this.board,
        cw = this.canvas.width,
        ch = this.canvas.height,
        picture = board.pictures['e021'],
        bitmap = picture.bitmap;

    createjs.Tween.get(picture.container)
                  .call(picture.start, [8400])
                  .to({alpha: 1})
                  .wait(8400)
                  .to({alpha: 0});
  }
});

timeline.push({
  t: 78600,
  c: function () {
    this.white.show(500);

    var board = this.board,
        cw = this.canvas.width,
        ch = this.canvas.height,
        picture = board.pictures['e022'],
        bitmap = picture.bitmap;

    createjs.Tween.get(picture.container)
                  .call(picture.start, [7500])
                  .to({alpha: 1})
                  .wait(7500)
                  .to({alpha: 0});
  }
});

timeline.push({
  t: 86100,
  c: function () {
    this.white.show(500);

    var board = this.board,
        cw = this.canvas.width,
        ch = this.canvas.height,
        picture = board.pictures['e023'],
        bitmap = picture.bitmap;

    createjs.Tween.get(picture.container)
                  .call(picture.start, [9000])
                  .to({alpha: 1})
                  .wait(8000)
                  .to({alpha: 0}, 1000);
  }
});

timeline.push({
  t: 92999,
  c: function () {
      var board = this.board, universe = this.universe;
      this.stage.swapChildren(board, universe);
      this.universe.container.alpha = 1;
  }
});

_.each(_.range(5), function (i) {
  timeline.push({
    t: 93000 + i * 400,
    c: function () {
      var cw = this.canvas.width,
          ch = this.canvas.height;

      this.universe.update(
        new TranRandom(cw, ch),
        new TranImpulse()
      );
    }
  });
});

/// small montage

timeline.push({
  t: 95499,
  c: function () {
      var board = this.board, universe = this.universe;
      this.stage.swapChildren(board, universe);
  }
});

timeline.push({
  t: 95500,
  c: function () {
    var board = this.board,
        cw = this.canvas.width,
        ch = this.canvas.height,
        picture = board.pictures['e024'],
        bitmap = picture.bitmap;

    picture.container.x = cw - picture.width - BORDER;
    picture.container.y = (ch - picture.height) / 2;
    createjs.Tween.get(picture.container)
                  .call(picture.start, [4500])
                  .to({alpha: 1}, 800)
                  .wait(2200)
                  .to({alpha: 0}, 1500, Ease.quartIn);
  }
});

timeline.push({
  t: 100000,
  c: function () {
    var board = this.board,
        cw = this.canvas.width,
        ch = this.canvas.height,
        picture = board.pictures['e025'],
        bitmap = picture.bitmap;

    picture.container.x = BORDER;
    picture.container.y = (ch - picture.height) / 2;
    createjs.Tween.get(picture.container)
                  .call(picture.start, [4000])
                  .to({alpha: 1}, 800)
                  .wait(2200)
                  .to({alpha: 0}, 1000, Ease.quartIn);
  }
});

timeline.push({
  t: 104000,
  c: function () {
    var board = this.board,
        cw = this.canvas.width,
        ch = this.canvas.height,
        picture = board.pictures['e026'],
        bitmap = picture.bitmap;

    picture.container.x = (cw - picture.width) / 2;
    picture.container.y = (ch - picture.height) / 2;
    createjs.Tween.get(picture.container)
                  .call(picture.start, [4300])
                  .to({alpha: 1}, 800)
                  .wait(2500)
                  .to({alpha: 0}, 1000, Ease.quartIn);
  }
});

timeline.push({
  t: 108300,
  c: function () {
    var board = this.board,
        cw = this.canvas.width,
        ch = this.canvas.height,
        picture = board.pictures['e027'],
        bitmap = picture.bitmap;

    picture.container.x = cw - picture.width - BORDER;
    picture.container.y = (ch - picture.height) / 2;
    createjs.Tween.get(picture.container)
                  .call(picture.start, [4200])
                  .to({alpha: 1}, 800)
                  .wait(2400)
                  .to({alpha: 0}, 1000, Ease.quartIn);
  }
});

timeline.push({
  t: 112500,
  c: function () {
    var board = this.board,
        cw = this.canvas.width,
        ch = this.canvas.height,
        picture = board.pictures['e028'],
        bitmap = picture.bitmap;

    picture.container.x = BORDER;
    picture.container.y = (ch - picture.height) / 2;
    createjs.Tween.get(picture.container)
                  .call(picture.start, [4500])
                  .to({alpha: 1}, 800)
                  .wait(2700)
                  .to({alpha: 0}, 1000, Ease.quartIn);
  }
});

timeline.push({
  t: 117000,
  c: function () {
    var board = this.board,
        cw = this.canvas.width,
        ch = this.canvas.height,
        picture = board.pictures['e029'],
        bitmap = picture.bitmap;

    picture.container.x = (cw - picture.width) / 2;
    picture.container.y = (ch - picture.height) / 2;
    createjs.Tween.get(picture.container)
                  .call(picture.start, [4000])
                  .to({alpha: 1}, 800)
                  .wait(2200)
                  .to({alpha: 0}, 1000, Ease.quartIn);
  }
});

timeline.push({
  t: 121000,
  c: function () {
    var board = this.board,
        cw = this.canvas.width,
        ch = this.canvas.height,
        picture = board.pictures['e030'],
        bitmap = picture.bitmap;

    picture.container.x = cw - picture.width - BORDER;
    picture.container.y = (ch - picture.height) / 2;
    createjs.Tween.get(picture.container)
                  .call(picture.start, [4500])
                  .to({alpha: 1}, 800)
                  .wait(2700)
                  .to({alpha: 0}, 1000, Ease.quartIn);
  }
});

timeline.push({
  t: 125500,
  c: function () {
    var board = this.board,
        cw = this.canvas.width,
        ch = this.canvas.height,
        picture = board.pictures['e031'],
        bitmap = picture.bitmap;

    picture.container.x = BORDER;
    picture.container.y = (ch - picture.height) / 2;
    createjs.Tween.get(picture.container)
                  .call(picture.start, [4000])
                  .to({alpha: 1}, 800)
                  .wait(2200)
                  .to({alpha: 0}, 1000, Ease.quartIn);
  }
});

timeline.push({
  t: 129499,
  c: function () {
    var particles = this.universe.container.children;

    _.each(particles, function (p, i) {
      createjs.Tween.get(p.target)
              .wait(i * 20)
              .to({alpha: 0}, 100);
    });
  }
});

timeline.push({
  t: 129500,
  c: function () {
    var board = this.board,
        cw = this.canvas.width,
        ch = this.canvas.height,
        picture = board.pictures['e032'],
        bitmap = picture.bitmap;

    picture.container.x = (cw - picture.width) / 2;
    picture.container.y = (ch - picture.height) / 2;
    createjs.Tween.get(picture.container)
                  .call(picture.start, [4500, Ease.cubicOut])
                  .to({alpha: 1}, 800)
                  .wait(3700)
                  .to({alpha: 0}, 3000, Ease.quartIn);
  }
});

module.exports = timeline;
