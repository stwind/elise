var Elise = require("./elise.js");

var schema = {
  'images/1.jpg': [
    {
      to: [{alpha: 0}, 3000, createjs.Ease.sineOut]
    }
  ]
};

$(function() {
  var stage = $('#stage');

  Elise.init(stage[0]);
  Elise.showStart(schema);
});
