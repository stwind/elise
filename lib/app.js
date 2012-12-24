var Elise = require('./elise');

$(function() {
  var main = $('#main'),
      canvas = $('#stage').get(0);

  main.css({
    width: window.innerWidth + 'px',
    height: window.innerHeight + 'px'
  });

  canvas.width = 1280;
  canvas.height = 728;

  $('#stage').css({
    'top': (main.innerHeight() - canvas.height) / 2 + 'px',
    'left': Math.max(0, (main.width() - canvas.width) / 2) + 'px'
  });
  
  $('#loading').css({
    'top': main.innerHeight() / 2 + 'px',
    'left': '412px',
  })

  var elise = new Elise(canvas);
  elise.init();
});
