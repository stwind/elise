var _ = require('underscore'),
    images = {},
    imagePath = "images/";

images['1.jpg'] = { };

images['2.jpg'] = { };

images['3.jpg'] = { };

images['4.jpg'] = { };

exports.images = _.reduce(images, function (acc, props, key) {
  acc[imagePath + key] = props;
  return acc;
}, {});

exports.sound = "sound/LilKaiju_FullLength_3.mp3";
