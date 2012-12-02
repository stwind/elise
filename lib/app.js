var Elise = require('./elise');

function resize(canvas) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

$(function() {
  var canvas = $('#stage').get(0);

  //$(window).on('resize', function () {
    //resize(canvas);
  //});

  //resize(canvas);

  var pjs = new Processing(canvas, Elise.sketch);
});
