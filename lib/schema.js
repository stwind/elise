var ease = createjs.Ease,
    schema = exports,
    _ = require('underscore');

schema['images/1.jpg'] = {
  onStage: 0, offStage: 11000,
  frame: {
    width: 600, height: 600,
    steps: {
      wait: [3000],
      to: [{alpha: 0}, 8000, ease.sineOut]
    }
  },
  content: {
  }
};

schema['images/2.jpg'] = {
  onStage: 3000, offStage: 20000,
  frame: {
    width: 600, height: 600,
    steps: {
      wait: [9000],
      to: [{alpha: 0}, 8000, ease.sineOut]
    }
  },
  content: {
  }
};
