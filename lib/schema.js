var _ = require('underscore'),
    images = {},
    imagePath = "images/";

images['e001'] = { 
  width: 453,
  height: 680,
  x: -40,
  y: 0,
  toX: -40,
  toY: -50,
};

images['e002'] = { 
  width: 453,
  height: 680,
  x: -10,
  y: -50,
  toX: -10,
  toY: 0
};

images['e003'] = { 
  width: 453,
  height: 680,
  x: -10,
  toScale: 0.9
};

images['e004'] = { 
  width: 453,
  height: 680,
  scale: 0.9,
  toScale: 1
};

images['e005'] = { };
images['e006'] = { };
images['e007'] = { };
images['e008'] = { };
images['e009'] = { };
images['e010'] = { };
images['e011'] = { };
images['e012'] = { };
images['e013'] = { };
images['e014'] = { };
images['e015'] = { };
images['e016'] = { };
images['e017'] = { };
images['e018'] = { };
images['e019'] = { };

images['e020'] = {
  width: 1280,
  height: 800,
  x: -320,
  y: -267,
  toX: -80,
  toY: -180,
  toScale: 0.85
};

images['e021'] = {
  width: 1280,
  height: 800,
  x: -100,
  y: -190,
  scale: 0.85,
  toScale: 1
};

images['e022'] = {
  width: 1280,
  height: 800,
  x: 0,
  y: -100,
  scale: 1,
  toScale: 0.85
};

images['e023'] = {
  width: 1280,
  height: 800,
  x: 0,
  y: -100,
  scale: 0.85,
  toScale: 1
};

images['e024'] = {
  width: 367,
  height: 550,
  scale: 0.85,
  toScale: 1
};

images['e025'] = {
  width: 367,
  height: 550,
  scale: 0.85,
  y: -10,
  toY: -40
};

images['e026'] = {
  width: 367,
  height: 550,
  x: -20,
  scale: 1,
  toScale: 0.9
};

images['e027'] = {
  width: 367,
  height: 550,
  y: -40,
  toY: -10,
  scale: 0.85
};

images['e028'] = {
  width: 367,
  height: 550,
  y: -40,
  toY: -10,
  scale: 1,
  toScale: 0.85
};

images['e029'] = {
  width: 367,
  height: 550,
  x: -40,
  toX: -10,
  y: -40,
  toY: -10,
  scale: 0.85
};

images['e030'] = {
  width: 367,
  height: 550,
  y: -40,
  toY: -10,
  scale: 0.85
};

images['e031'] = {
  width: 367,
  height: 550,
  x: -40,
  toX: -10,
  y: -40,
  toY: -10,
  scale: 1,
  toScale: 0.85
};

images['e032'] = {
  width: 367,
  height: 550,
  x: -40,
  toX: -10,
  y: -40,
  toY: -10,
  scale: 1,
  toScale: 0.85
};

exports.images = _.reduce(images, function (acc, props, key) {
  acc[imagePath + key + '.jpg'] = _.extend(props, {name: key});
  return acc;
}, {});

exports.sound = "sound/LilKaiju_FullLength_3.mp3";
