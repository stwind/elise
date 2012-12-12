var _ = require('underscore'),
    images = {},
    imagePath = "images/";

images['e1.jpg'] = { };

images['e2.jpg'] = { };

images['e3.jpg'] = { };

images['e4.jpg'] = { };

exports.images = _.reduce(images, function (acc, props, key) {
  acc[imagePath + key] = props;
  return acc;
}, {});

exports.sound = "sound/LilKaiju_FullLength_3.mp3";
