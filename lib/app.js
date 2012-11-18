var Elise = require('./elise'),
    schema = require('./schema');

$(function() {
  var stage = $('#stage'),
      elise = new Elise(stage.get(0));

  elise.showStart(schema);
});
