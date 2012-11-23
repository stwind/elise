var _ = require('underscore');

var offsetTween = function (tween, props) {
  return tween.wait(props.onStage);
}

var setContainerTween = function (container, stage, props) {
  var addChildAt = _.bind(stage.addChildAt, stage),
      removeChild = _.bind(stage.removeChild, stage),
      tween = createjs.Tween.get(container);

  return offsetTween(tween, props).call(addChildAt, [container, 1])
                                  .wait(props.offStage - props.onStage)
                                  .call(removeChild, [container]);
};

var setFrameTween = function (container, stage, props) {
  var tween1 = offsetTween(createjs.Tween.get(container), props);
      tween2 = _.reduce(props.frame.steps, function (tween, step) {
        return tween[step.f].apply(tween, step.p);
      }, tween1);

  return tween2;
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
