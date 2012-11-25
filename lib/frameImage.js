var _ = require('underscore');

var offsetTween = function (tween, props) {
  return tween.wait(props.onStage);
};

var setContainerTween = function (container, stage, props) {
  var addChildAt = _.bind(stage.addChildAt, stage),
      removeChild = _.bind(stage.removeChild, stage),
      tween = createjs.Tween.get(container);

  return offsetTween(tween, props).call(addChildAt, [container, 1])
                                  .wait(props.offStage - props.onStage)
                                  .call(removeChild, [container]);
};

var setFrameTween = function (container, stage, props) {
  var tween = offsetTween(createjs.Tween.get(container), props);

  return setupTween(tween, props.frame.steps);
};

//var setBitmapRect = function (bitmap, props) {
  //var rect = props.content.rect;
  //if (rect) {
    //var width = rect.w == 'auto' || rect.w == null ? bitmap.image.width : rect.w,
        //height = rect.h == 'auto' || rect.h == null ? bitmap.image.height : rect.h,
        //x  = rect.x == null ? 0 : rect.x,
        //y  = rect.y == null ? 0 : rect.y;

    //bitmap.sourceRect = new createjs.Rectangle(x, y, width, height);
  //}
//};

//var setBitmapRectTween = function (bitmap, props) {
  //var steps = props.content.rect.steps,
      //tween = offsetTween(createjs.Tween.get(bitmap.sourceRect), props);

  //return setupTween(tween, steps);
//};

var setBitmapTween = function (bitmap, props) {
  var image = props.content.image,
      tween = offsetTween(createjs.Tween.get(bitmap), props);

  return setupTween(tween, image.steps);
};

var setupTween = function (tween, steps) {
  return  _.reduce(steps, function (tween, step) {
    return tween[step.f].apply(tween, step.p);
  }, tween);
};

var setupMask = function (container, bitmap, props) {
  var w = props.content.mask.width,
      h = props.content.mask.height,
      shape = new createjs.Shape();

  shape.graphics.rect(0, 0, w, h);

  bitmap.mask = shape;
  container.addChild(shape);
};

exports.create = function (url, props, stage, done) {

  var container = new createjs.Container(),
      bitmap = new createjs.Bitmap(url),
      timeline = new createjs.Timeline();

  container.addChild(bitmap);
  setupMask(container, bitmap, props);

  bitmap.image.onload = function () {

    timeline.addTween(setContainerTween(container, stage, props));
    timeline.addTween(setFrameTween(container, stage, props));

    //setBitmapRect(bitmap, props);
    //timeline.addTween(setBitmapRectTween(bitmap, props));

    timeline.addTween(setBitmapTween(bitmap, props));

    //createjs.Ticker.addListener({tick: function () {
      //console.log(bitmap.scaleX);
    //}});

    done({
      container: container,
      bitmap: bitmap,
      timeline: timeline
    })
  };

};
