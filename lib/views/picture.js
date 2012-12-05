var Picture = function (url, canvas) {
  this.canvas = canvas;
  var bitmap = this.bitmap = new createjs.Bitmap(url),
      picture = this;

  bitmap.image.onload = function () {
    picture.loaded = true;
    picture.onLoadedCalback && picture.onLoadedCalback();
  };

  this.hide();
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

p.hide = function () {
  this.bitmap.visible = false;
};

p.show = function () {
  this.bitmap.visible = true;
};

module.exports = Picture;
