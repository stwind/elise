var ease = createjs.Ease,
    schema = exports,
    _ = require('underscore');

schema['images/1.jpg'] = {
  onStage: 0, offStage: 13000,
  frame: {
    steps: [
      {f: 'to', p: [{alpha: 0}]},
      {f: 'to', p: [{alpha: 1}, 5000, ease.sineOut]},
      {f: 'wait', p: [3000]},
      {f: 'to', p: [{alpha: 0}, 5000, ease.sineOut]}
    ]
  },
  content: {
    mask: { width: 550, height: 550 },
    image: {
      steps: [
        {f: 'to', p: [{x: -180, y: -100, scaleX: 1.2, scaleY: 1.2}, 11000, ease.sineOut]}
      ]
    }
  }
};

schema['images/2.jpg'] = {
  onStage: 8000, offStage: 21000,
  frame: {
    steps: [
      {f: 'to', p: [{alpha: 0}]},
      {f: 'to', p: [{alpha: 1}, 5000, ease.sineOut]},
      {f: 'wait', p: [3000]},
      {f: 'to', p: [{alpha: 0}, 5000, ease.sineOut]}
    ]
  },
  content: {
    mask: { width: 400, height: 550 },
    image: {
      steps: [
        {f: 'to', p: [{x: -50, y: -100, scaleX: 1.2, scaleY: 1.2}, 11000, ease.sineOut]}
      ]
    }
  }
};

schema['images/3.jpg'] = {
  onStage: 16000, offStage: 29000,
  frame: {
    steps: [
      {f: 'to', p: [{alpha: 0}]},
      {f: 'to', p: [{alpha: 1}, 5000, ease.sineOut]},
      {f: 'wait', p: [3000]},
      {f: 'to', p: [{alpha: 0}, 5000, ease.sineOut]}
    ]
  },
  content: {
    mask: { width: 600, height: 600 },
    image: {
      steps: [
        {f: 'to', p: [{x: -50, y: -30}]},
        {f: 'to', p: [{x: -100, scaleX: 1.2, scaleY: 1.2}, 11000, ease.sineOut]}
      ]
    }
  }
};
