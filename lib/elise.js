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
    schema = require('./schema'),
    ShowTimeline = require('./timeline');

var Elise = function (canvas) {
  this.canvas = canvas;
  this.stage = new createjs.Stage(canvas);
  var shape = new createjs.Shape();

  shape.graphics.beginFill(Elise.BACKGROUND);
  shape.graphics.rect(0, 0, canvas.width, canvas.height);

  this.stage.addChild(shape);
};

var p = Elise.prototype;

p.preload = function (callback) {
  var loader = new PxLoader();

  _.each(schema.images, function (props, url) {
    loader.add(new PxLoaderImage(url));
  });

  loader.addCompletionListener(callback);
  loader.start();
};

p.init = function () {
  var stage = this.stage,
      universe = this.universe = new Universe(Elise.numParticle),
      self = this;

  this.preload(function () {
    var sound = new buzz.sound(schema.sound);

    sound.bind('canplaythrough', function () {
      var board = self.board = new Board(schema.images);
      stage.addChild(board);
      stage.addChild(universe);

      _.each(ShowTimeline, function (point) {
        var tween = createjs.Tween.get(self);
        tween.wait(parseInt(point.t)).call(function () {
          console.log("[timeline] ======== ", point.t);
          point.c.call(self);
        });
      });
      sound.play();
    });

  });

  createjs.Ticker.setFPS(30);
  createjs.Ticker.addListener(stage);
};

Elise.FPS = 30;
Elise.numParticle = 1;
Elise.BACKGROUND = createjs.Graphics.getRGB(0,0,0);

module.exports = Elise;
