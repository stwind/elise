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
      universe = this.universe = new Universe(Elise.numParticle);
      board = this.board = new Board(ImgList, this.canvas),
      timeline = this.timeline,
      elise = this;

  board.onloaded(function () {
    stage.addChild(board);
    stage.addChild(universe);
  });

  createjs.Ticker.addListener(stage);

  _.each(ShowTimeline, function (callback, time) {
    var tween = createjs.Tween.get(elise);
    tween.wait(parseInt(time)).call(function () {
      console.log("[timeline] ", time);
      callback.call(elise);
    });
  });
};

Elise.FPS = 30;
Elise.numParticle = 1;

module.exports = Elise;
