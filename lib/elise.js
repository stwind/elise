/*
 * elise
 * https://github.com/stwind/elise
 *
 * Copyright (c) 2012 stwind
 * Licensed under the MIT license.
 */

var _ = require('underscore'),
    Universe = require('./views/Universe'),
    Board = require('./views/board'),
    ImgList = require('./imglist'),
    TranRandom = require('./transitions/random'),
    ShowTimeline = require('./timeline');

var Elise = function (canvas) {
  this.canvas = canvas;
  this.stage = new createjs.Stage(canvas);
  this.timeline = new createjs.Timeline();
  var shape = new createjs.Shape();

  shape.graphics.beginFill(createjs.Graphics.getRGB(0,0,0));
  shape.graphics.rect(0, 0, canvas.width, canvas.height);

  this.stage.addChild(shape);

  createjs.Ticker.setFPS(30);
};

var p = Elise.prototype;

p.init = function () {
  var stage = this.stage,
      transitions = [
        {time: 1000, trans: new TranRandom(this.canvas.width, this.canvas.height)},
      ];
      universe = this.universe = new Universe(Elise.numParticle, transitions);
      board = this.board = new Board(ImgList, this.canvas),
      timeline = this.timeline;

  //stage.addChild(universe);
  board.onloaded(function () {
    stage.addChild(board);
  });

  createjs.Ticker.addListener(stage);

  var tween = _.reduce(ShowTimeline, function (tween, callback, time) {
    return tween.wait(time).call(callback);
  }, createjs.Tween.get(this));

  timeline.addTween(tween);
  timeline.gotoAndPlay(0);
};

Elise.FPS = 30;
Elise.numParticle = 1;

module.exports = Elise;
