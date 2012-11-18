exports.create = function (image, frame) {
  var container = new createjs.Container(),
      bitmap = new createjs.Bitmap(image),
      mask = new createjs.Shape(),
      g = mask.graphics;

  g.rect(0, 0, frame.width, frame.height);
  bitmap.mask = mask;

  container.addChild(bitmap, mask);


  container.bitmap = bitmap;

  return container;
};
