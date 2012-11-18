exports.create = function (image, props, done) {

  var container = new createjs.Container(),
      bitmap = new createjs.Bitmap(image),
      mask = new createjs.Shape(),
      g = mask.graphics,
      frame = props.frame,
      content = props.content;

  g.rect(0, 0, frame.width, frame.height);
  bitmap.mask = mask;

  container.addChild(bitmap, mask);

  bitmap.image.onload = function () {
    done({
      container: container,
      bitmap: bitmap,
      frame: frame
    })
  };

};
