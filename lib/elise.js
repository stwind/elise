/*
 * elise
 * https://github.com/stwind/elise
 *
 * Copyright (c) 2012 stwind
 * Licensed under the MIT license.
 */

exports.sketch = function (processing) {
  var p = processing;

  var radius = 50.0,
      x, y, nx, ny,
      delay = 16;

  p.setup = function () {
    p.size(window.innerWidth, window.innerHeight);
    p.strokeWeight(10);
    p.frameRate(30);
    nx = x = p.width / 2;
    ny = y = p.height / 2;
  };

  p.draw = function () {
    radius = radius + p.sin(p.frameCount / 4);

    x += (nx - x) / delay;
    y += (ny - y) / delay;

    p.background(100);

    p.fill(0, 121, 184);

    p.stroke(255);

    p.ellipse(x, y, radius, radius);
  };
}
