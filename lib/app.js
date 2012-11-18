var Elise = require("./elise.js"),
    ease = createjs.Ease;

var schema = {
  'images/1.jpg': {
    'onStage': null,
    wait: [3000],
    to: [{alpha: 0}, 5000, ease.sineOut],
    'offStage': null
  },
  'images/2.jpg': {
    'onStage': null,
    wait: [8000],
    to: [{alpha: 0}, 5000, ease.sineOut],
    'offStage': null
  },
  'images/3.jpg': {
    'onStage': null,
    wait: [13000],
    to: [{alpha: 0}, 5000, ease.sineOut],
    'offStage': null
  },
  'images/4.jpg': {
    'onStage': null,
    wait: [18000],
    to: [{alpha: 0}, 5000, ease.sineOut],
    'offStage': null
  },
  'images/5.jpg': {
    'onStage': null,
    wait: [23000],
    to: [{alpha: 0}, 5000, ease.sineOut],
    'offStage': null
  }
};

$(function() {
  var stage = $('#stage');

  Elise.init(stage.get(0));
  Elise.showStart(schema);
});
