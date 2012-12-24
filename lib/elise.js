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
    ShowTimeline = require('./timeline'),
    ShowTimelineTest = require('./timelineTest');

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
      $('#loading').hide();
      var board = self.board = new Board(schema.images);
      var timeline = new createjs.Timeline();

      stage.addChild(board);
      stage.addChild(universe);
      self.initWhiteFlash();

      _.each(ShowTimeline, function (point) {
        var tween = createjs.Tween.get(self);
        tween.wait(parseInt(point.t)).call(function () {
          console.log("[timeline] ======== ", point.t);
          point.c.call(self);
        });

        timeline.addTween(tween);
      });
      
      timeline.setPaused(true);
      timeline.gotoAndPlay(0);

      sound.play();
    });

  });

  createjs.Ticker.setFPS(30);
  createjs.Ticker.addListener(stage);
};

p.initWhiteFlash = function () {
  var stage = this.stage,
      cw = this.canvas.width,
      ch = this.canvas.height;

  var white = this.whiteFlash = new createjs.Shape();
  white.graphics.beginFill(createjs.Graphics.getRGB(255,255,255));
  white.graphics.rect(0, 0, cw, ch);
  white.alpha = 0;
  stage.addChild(white);
};

p.showWhiteFlash = function () {
  createjs.Tween.get(this.whiteFlash)
                .to({alpha: 1})
                .to({alpha: 0}, 500);
};

Elise.FPS = 30;
Elise.numParticle = 300;
Elise.BACKGROUND = createjs.Graphics.getRGB(0,0,0);

module.exports = Elise;
