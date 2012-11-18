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
  var canvas = this.canvas;

  var schema1 = _.map(schema, function (props, url) {
    return {url: url, props: props};
  });

  async.map(schema1, function (img, done) {
    var bitmap = new createjs.Bitmap(img.url);
    bitmap.image.onload = function () {
      done(null, {target: bitmap, props: img.props});
    };
  }, function (err, bitmaps) {
    _.each(bitmaps, function (bitmap) {
      var target = bitmap.target,
          tween = createjs.Tween.get(target).set({
            x: (canvas.width - target.image.width) / 2,
            y: (canvas.height - target.image.height) / 2
          });

      _.each(bitmap.props, function (params, func) {
        elise.tweenStep(tween, func, params)
      });
    })
  });
};

elise.resizeCanvas = function () {
  var canvas = this.canvas;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  elise.drawBackground();
};

elise.tweenStep = function (tween, func, params) {
  var stage = this.stage,
      target = tween.target,
      canvas = this.canvas,
      addChild = _.bind(stage.addChild, stage),
      removeChild = _.bind(stage.removeChild, stage);

  switch (func) {
    case 'onStage':
      tween.call(addChild, [target]); break;
    case 'offStage':
      tween.call(removeChild, [target]); break;
    default:
      tween[func].apply(tween, params);
  }
};

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
};
