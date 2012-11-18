var ease = createjs.Ease,
    schema = exports;

var frame = {
    width: 600,
    height: 600
};

schema['images/1.jpg'] = {
  frame: frame,
  content: {
    'onStage': null,
    wait: [3000],
    to: [{alpha: 0}, 5000, ease.sineOut],
    'offStage': null
  }
};

schema['images/2.jpg'] = {
  frame: frame,
  content: {
    'onStage': null,
    wait: [8000],
    to: [{alpha: 0}, 5000, ease.sineOut],
    'offStage': null
  }
};

schema['images/3.jpg'] = {
  frame: frame,
  content: {
    'onStage': null,
    wait: [13000],
    to: [{alpha: 0}, 5000, ease.sineOut],
    'offStage': null
  }
};


schema['images/4.jpg'] = {
  frame: frame,
  content: {
    'onStage': null,
    wait: [18000],
    to: [{alpha: 0}, 5000, ease.sineOut],
    'offStage': null
  }
};

schema['images/5.jpg'] = {
  frame: frame,
  content: {
    'onStage': null,
    wait: [23000],
    to: [{alpha: 0}, 5000, ease.sineOut],
    'offStage': null
  }
};
