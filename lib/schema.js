var ease = createjs.Ease,
    schema = exports,
    _ = require('underscore');

var frame = {
    width: 600,
    height: 600,
    steps: [
      'onStage',
      {f: 'wait', p: [3000]},
      {f: 'to', p: [{alpha: 0}, 5000, ease.sineOut]},
      'offStage'
    ]
};

var addStep = function (frame, step, index) {
  var steps = frame.steps.slice();
  steps.splice(index ? index : steps.length, 0, step);
  return updateSteps(frame, steps);
};

var replaceStep = function (frame, step, index) {
  var steps = frame.steps.slice();
  steps.splice(index ? index : steps.length, 1, step);
  return updateSteps(frame, steps);
};

var updateSteps = function (frame, steps) {
  var frame2 = _.clone(frame);
  frame2.steps = steps;
  return frame2;
};

schema['images/1.jpg'] = {
  frame: frame,
  content: {
  }
};

schema['images/2.jpg'] = {
  frame: replaceStep(frame, {f: 'wait', p: [8000]}, 1),
  content: {
  }
};

schema['images/3.jpg'] = {
  frame: replaceStep(frame, {f: 'wait', p: [13000]}, 1),
  content: {
  }
};


schema['images/4.jpg'] = {
  frame: replaceStep(frame, {f: 'wait', p: [18000]}, 1),
  content: {
  }
};

schema['images/5.jpg'] = {
  frame: replaceStep(frame, {f: 'wait', p: [23000]}, 1),
  content: {
  }
};
