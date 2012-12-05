var TranRandom = require('./transitions/random');

exports[1000] = function () {
  this.board.nextPic();
};

exports[2000] = function () {
  this.board.nextPic();
};

exports[3000] = function () {
  this.universe.update(new TranRandom(this.canvas.width, this.canvas.height));
  this.board.nextPic();
};

exports[4000] = function () {
  this.board.nextPic();
};
