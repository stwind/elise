var Elise = require('./elise');

$(function() {
  var canvas = $('#stage').get(0);

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var elise = new Elise(canvas);
  elise.init();
});
