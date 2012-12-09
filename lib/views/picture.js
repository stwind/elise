var Picture = function (url) {
  this.bitmap = new createjs.Bitmap(url),

  this.url = url;
};

var p = Picture.prototype;

p.draw = function () {
  return this.bitmap.draw.apply(this.bitmap, arguments);
};

p.isVisible = function () {
  return this.bitmap.isVisible.apply(this.bitmap, arguments);
};

p.updateContext = function () {
  return this.bitmap.updateContext.apply(this.bitmap, arguments);
};

module.exports = Picture;
