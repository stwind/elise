var _ = require('./underscore');

var Picture = function (url, props) {
  this._initProps(props);

  var bitmap = this.bitmap = new createjs.Bitmap(url),
      container = this.container = new createjs.Container(),
      mask = new createjs.Shape(),
      g = mask.graphics,
      w = this.width = props.width ? props.width : bitmap.image.width,
      h = this.height = props.height ? props.height : bitmap.image.height;

  g.rect(0, 0, w, h);

  bitmap.mask = mask;
  bitmap.x = props.x;
  bitmap.y = props.y;
  bitmap.scaleX = props.scale;
  bitmap.scaleY = props.scale;

  container.addChild(mask);
  container.addChild(bitmap);

  _.bindAll(this);

  this.url = url;
};

var p = Picture.prototype;

p._initProps = function (props) {
  var x = props.x == undefined ? 0 : props.x,
      y = props.y == undefined ? 0 : props.y,
      scale = props.scale == undefined ? 1 : props.scale;

  this.props = _.extend(props, {
    x: x, y: y, scale: scale,
    toX: props.toX == undefined ? x : props.toX,
    toY: props.toY == undefined ? y : props.toY,
    toScale: props.toScale == undefined ? props.scale : props.toScale
  });
};

p.draw = function () {
  return this.container.draw.apply(this.container, arguments);
};

p.isVisible = function () {
  return this.container.isVisible.apply(this.container, arguments);
};

p.updateContext = function () {
  return this.container.updateContext.apply(this.container, arguments);
};

p.start = function (duration, easing) {
  var props = this.props;
  createjs.Tween.get(this.bitmap).to({
    x: props.toX,
    y: props.toY,
    scaleX: props.toScale,
    scaleY: props.toScale
  }, duration, easing || createjs.Ease.linear);
};

module.exports = Picture;
