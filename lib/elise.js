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
    White = require('./views/whiteflash'),
    schema = require('./schema'),
    ShowTimeline = require('./timeline'),
    ShowTimelineTest = require('./timelineTest'),
    imagePath = "images/",
    soundPath = 'sound/';

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

  _.each(schema.images(imagePath), function (props, url) {
    loader.add(new PxLoaderImage(url));
  });

  loader.addCompletionListener(callback);
  loader.start();
};

p.init = function () {
  var stage = this.stage,
      universe = this.universe = new Universe(Elise.numParticle),
      cw = this.canvas.width,
      ch = this.canvas.height;
      self = this;

  this.preload(function () {
    var sound = new buzz.sound(schema.sound(soundPath));

    sound.bind('canplaythrough', function () {
      $('#loading').hide();
      var board = self.board = new Board(schema.images(imagePath));
      var white = self.white = new White(cw, ch);
      var timeline = new createjs.Timeline();

      stage.addChild(board);
      stage.addChild(universe);
      stage.addChild(white);

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

Elise.FPS = 30;
Elise.numParticle = 300;
Elise.BACKGROUND = createjs.Graphics.getRGB(0,0,0);

module.exports = Elise;
