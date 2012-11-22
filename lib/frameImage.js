var _ = require('underscore');

var callbacks = {
  addChildAtLast: function (child, stage) {
    console.log(stage.children[0]);
    stage.addChildAt(child, 1);
  }
};

var offsetTween = function (tween, props) {
  return tween.wait(props.onStage);
}

var setContainerTween = function (container, stage, props) {
  var addChild = _.bind(stage.addChild, stage),
      removeChild = _.bind(stage.removeChild, stage),
      tween = createjs.Tween.get(container);

  return offsetTween(tween, props).call(callbacks.addChildAtLast, [container, stage])
                                  .wait(props.offStage - props.onStage)
                                  .call(removeChild, [container]);
};

var setFrameTween = function (container, stage, props) {
  var tween = createjs.Tween.get(container),
      tween1 = offsetTween(tween, props);
  _.each(props.frame.steps, function (params, func) {
    tween1[func].apply(tween1, params);
  });

  return tween1;
};

exports.create = function (url, props, stage, done) {

  var container = new createjs.Container(),
      bitmap = new createjs.Bitmap(url),
      mask = new createjs.Shape(),
      timeline = new createjs.Timeline();

  mask.graphics.rect(0, 0, props.frame.width, props.frame.height);
  bitmap.mask = mask;
  container.addChild(bitmap, mask);

  timeline.addTween(setContainerTween(container, stage, props));
  timeline.addTween(setFrameTween(container, stage, props));

  bitmap.image.onload = function () {
    done({
      container: container,
      bitmap: bitmap,
      timeline: timeline
    })
  };

};
