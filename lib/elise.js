/*
 * elise
 * https://github.com/stwind/elise
 *
 * Copyright (c) 2012 stwind
 * Licensed under the MIT license.
 */

var _ = require('underscore'),
    async = require('async'),
    fImage = require('./frameImage');

var Elise = function (canvas) {
  this.canvas = canvas;
  this.stage = new createjs.Stage(canvas);

  window.addEventListener('resize', _.bind(this.drawBackground, this), false);
  this.resizeCanvas();
  createjs.Ticker.setFPS(Elise.FPS);
};
var p = Elise.prototype;

Elise.BACKGROUND = createjs.Graphics.getRGB(0,0,0);
Elise.FPS = 30;

p.showStart = function (schema) {
  var canvas = this.canvas,
      stage = this.stage,
      timeline = this.timeline = new createjs.Timeline(),
      elise = this;

  var schema1 = _.map(schema, function (props, url) {
    return {url: url, props: props};
  });

  async.map(schema1, function (img, done) {
    fImage.create(img.url, img.props, stage, function (image) {
      done(null, image);
    });
  }, function (err, images) {
    _.each(images, function (image) {
      timeline.addTween(image.timeline);
    });

    timeline._tweens.reverse();
    timeline.gotoAndPlay(12000);
    //timeline.setPaused(false);
  });
};

p.resizeCanvas = function () {
  var canvas = this.canvas;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  this.drawBackground();
};

p.drawBackground = function () {
  var bg = this.background,
      canvas = this.canvas,
      stage = this.stage;
  if (bg) {
    g = bg.graphics;
  } else {
    bg = this.background = new createjs.Shape();
    stage.addChild(bg);
  }
  bg.graphics.beginFill(Elise.BACKGROUND);
  bg.graphics.rect(0, 0, canvas.width, canvas.height);
  createjs.Ticker.addListener(stage);
};

module.exports = Elise;
