var _ = require('./underscore'),
    timeline = [],
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
    var universe = this.universe,
        particles = universe.container.children,
        cw = this.canvas.width,
        ch = this.canvas.height;

    _.each(particles, function (p) {
      p.target.alpha = 1;
      //p.props.alpha = 1;
      p.target.x = Math.random() * cw;
      p.target.y = Math.random() * ch;
    });

    this.universe.update(
      new TranRandom(cw, ch),
      new TranSize(10),
      new TranImpulse()
    );
  }
});

timeline.push({
  t: 1070,
  c: function () {
    var universe = this.universe,
        particles = universe.container.children,
        cw = this.canvas.width,
        ch = this.canvas.height;

    this.universe.update(
      new TranSize(50, 100),
      new TranImpulse(-400, 400)
    );
  }
});

timeline.push({
  t: 2070,
  c: function () {
    var universe = this.universe,
        particles = universe.container.children,
        cw = this.canvas.width,
        ch = this.canvas.height;

    this.universe.update(
      new TranRandom(cw, ch),
      new TranSize(10),
      new TranImpulse()
    );
  }
});

module.exports = timeline;
