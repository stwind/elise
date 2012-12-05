var Picture = function (url) {
  var bitmap = this.bitmap = new createjs.Bitmap(url),
      picture = this;

  bitmap.image.onload = function () {
    picture.loaded = true;
    picture.onLoadedCalback && picture.onLoadedCalback();
  };
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

p.onloaded = function (callback) {
  if (this.loaded) {
    callback();
  } else {
    this.onLoadedCalback = callback;
  }
};

module.exports = Picture;
