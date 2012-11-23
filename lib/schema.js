var ease = createjs.Ease,
    schema = exports,
    _ = require('underscore');

schema['images/1.jpg'] = {
  onStage: 0, offStage: 13000,
  frame: {
    width: 600, height: 600,
    steps: [
      {f: 'to', p: [{alpha: 0}]},
      {f: 'to', p: [{alpha: 1}, 5000, ease.sineOut]},
      {f: 'wait', p: [3000]},
      {f: 'to', p: [{alpha: 0}, 5000, ease.sineOut]}
    ]
  },
  content: {
  }
};

schema['images/2.jpg'] = {
  onStage: 8000, offStage: 21000,
  frame: {
    width: 600, height: 600,
    steps: [
      {f: 'to', p: [{alpha: 0}]},
      {f: 'to', p: [{alpha: 1}, 5000, ease.sineOut]},
      {f: 'wait', p: [3000]},
      {f: 'to', p: [{alpha: 0}, 5000, ease.sineOut]}
    ]
  },
  content: {
  }
};

schema['images/3.jpg'] = {
  onStage: 16000, offStage: 29000,
  frame: {
    width: 600, height: 600,
    steps: [
      {f: 'to', p: [{alpha: 0}]},
      {f: 'to', p: [{alpha: 1}, 5000, ease.sineOut]},
      {f: 'wait', p: [3000]},
      {f: 'to', p: [{alpha: 0}, 5000, ease.sineOut]}
    ]
  },
  content: {
  }
};
