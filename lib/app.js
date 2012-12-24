var Elise = require('./elise');

$(function() {
  var main = $('#main'),
      canvas = $('#stage').get(0);

  canvas.width = 1280;
  canvas.height = 800;

  $('#stage').css({
    'top': (main.height() - canvas.height) / 2 + 'px',
    'left': (main.width() - canvas.width) / 2 + 'px'
  });
  
  $('#loading').css({
    'top': main.height() / 2 + 'px',
    'left': '412px',
  })

  var elise = new Elise(canvas);
  elise.init();
});
