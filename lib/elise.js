/*
 * elise
 * https://github.com/stwind/elise
 *
 * Copyright (c) 2012 stwind
 * Licensed under the MIT license.
 */

var elise = exports;

elise.BACKGROUND = createjs.Graphics.getRGB(0,0,0);

elise.init = function(canvas) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var stage = this.stage = new createjs.Stage(canvas);

  var g = new createjs.Graphics();
  g.beginFill(elise.BACKGROUND);
  g.rect(0, 0, canvas.width, canvas.height);

  var s = new createjs.Shape(g);
  stage.addChild(s);
  stage.update();
};

elise.loadImg = function (url) {
  var stage = this.stage,
  bitmap = new createjs.Bitmap(url);

  bitmap.image.onload = function () {
    stage.addChild(bitmap);

    createjs.Tween.get(bitmap).to({x: 100}, 1000);
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addListener(stage, false);
  }
}
