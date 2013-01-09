var _ = require('underscore');

var Pattern = function () {
  var container = this.container = new createjs.Container();
};

var p = Pattern.prototype;

p.draw = function () {
  return this.container.draw.apply(this.container, arguments);
};

p.isVisible = function () {
  return this.container.isVisible.apply(this.container, arguments);
};

p.updateContext = function () {
  return this.container.updateContext.apply(this.container, arguments);
};

p.next = function () {
  
};

module.exports = Pattern;
