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
  var shape = new createjs.Shape();

  shape.graphics.beginFill(createjs.Graphics.getRGB(0,0,0));
  shape.graphics.rect(0, 0, canvas.width, canvas.height);

  this.stage.addChild(shape);
};

var p = Elise.prototype;

p.preload = function (callback) {
  var loader = new PxLoader(),
      elise = this;

  _.each(ImgList.images, function (props, url) {
    loader.add(new PxLoaderImage(url));
  });

  loader.addCompletionListener(function () {
    callback.call(elise);
  });

  loader.start();
};

p.init = function () {
  var stage = this.stage,
      universe = this.universe = new Universe(Elise.numParticle),
      elise = this;

  this.preload(function () {
    var board = this.board = new Board(ImgList.images);
    stage.addChild(board);
    stage.addChild(universe);

    _.each(ShowTimeline, function (callback, time) {
      var tween = createjs.Tween.get(elise);
      tween.wait(parseInt(time)).call(function () {
        console.log("[timeline] ", time);
        callback.call(elise);
      });
    });
  });

  createjs.Ticker.setFPS(30);
  createjs.Ticker.addListener(stage);
};

Elise.FPS = 30;
Elise.numParticle = 1;

module.exports = Elise;
