var Elise = require('./elise'),
    schema = require('./schema');

$(function() {
  var stage = $('#stage');

  Elise.init(stage.get(0));
  Elise.showStart(schema);
});
