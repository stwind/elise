/*
 * elise
 * https://github.com/stwind/elise
 *
 * Copyright (c) 2012 stwind
 * Licensed under the MIT license.
 */

var _ = require('underscore'),
    async = require('async');

var elise = exports;

elise.BACKGROUND = createjs.Graphics.getRGB(0,0,0);
elise.FPS = 30;

elise.init = function(canvas) {
  this.canvas = canvas;
  this.stage = new createjs.Stage(canvas);

  window.addEventListener('resize', _.bind(this.drawBackground, this), false);
  this.resizeCanvas();
  createjs.Ticker.setFPS(elise.FPS);
};

elise.showStart = function (schema) {
  var stage = this.stage,
      canvas = this.canvas;

  async.map(_.keys(schema), function (url, done) {
    var bitmap = new createjs.Bitmap(url);
    bitmap.image.onload = function () {
      done(null, bitmap);
    };
  }, function (err, bitmaps) {
    _.each(bitmaps, function (bitmap) {
      bitmap.x = (canvas.width - bitmap.image.width) / 2;
      bitmap.y = (canvas.height - bitmap.image.height) / 2;
      createjs.Tween.get(bitmap)
              .call(_.bind(stage.addChild, stage), [bitmap])
              .to({alpha: 0}, 3000, createjs.Ease.sineOut)
              .call(_.bind(stage.removeChild, stage), [bitmap]);
    })
  });
}

elise.resizeCanvas = function () {
  var canvas = this.canvas;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  elise.drawBackground();
}

elise.drawBackground = function () {
  var bg = this.background,
      canvas = this.canvas,
      stage = this.stage;
  if (bg) {
    g = bg.graphics;
  } else {
    g = new createjs.Graphics();
    bg = this.background = new createjs.Shape(g);
    stage.addChild(bg);
  }
  g.beginFill(elise.BACKGROUND);
  g.rect(0, 0, canvas.width, canvas.height);
  createjs.Ticker.addListener(stage);
}
