var _ = require('underscore'),
    images = {},
    sounds = {};

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

var protraits = [
  "033","034","035","036","039","040","042","043","044",
  "046","048","049","050","051","052","055","056","057","060",
  "061","063","065","066","071","072","074","077","078","080",
  "081","082","083","084","085","087","088","092","094","095",
  "096","097","098","100","106","107","108","110","111","112",
  "114","115","116","117","118","123","124","125","126","127"
];

var paranomas = [
  "037","038","041","045","047","053","054","058","059",
  "062","064","067","068","069","070","073","075","076","079",
  "086","089","090","091","093","099","101","102","103","104",
  "105","109","113","119","120","121","122"
];

var effects = {
  protOut: {
    duration: 15000,
    width: 434,
    height: 650,
    x: -50,
    toX: -20,
    y: -50,
    toY: -20,
    scale: 0.70,
    toScale: 0.65
  },
  protIn: {
    duration: 15000,
    width: 434,
    height: 650,
    x: -20,
    toX: -40,
    y: -20,
    toY: -50,
    scale: 0.65,
    toScale: 0.70
  },
  paraOut: {
    duration: 15000,
    width: 800,
    height: 534,
    x: -30,
    toX: -10,
    y: -50,
    toY: -20,
    scale: 0.80,
    toScale: 0.75
  },
  paraIn: {
    duration: 15000,
    width: 800,
    height: 534,
    x: -10,
    toX: -40,
    y: -20,
    toY: -40,
    scale: 0.75,
    toScale: 0.80
  }
};

_.each(_.range(33, 128), function (n) {
  var num = n < 100 ? '0' + n : n.toString();

  if (paranomas.indexOf(num) != -1) {
    images['e' + num] = _.clone(effects[_.random(1) ? 'paraOut' : 'paraIn']);
  } else {
    images['e' + num] = _.clone(effects[_.random(1) ? 'protOut' : 'protIn']);
  }
});

exports.images = function (baseUrl) {
  return _.reduce(images, function (acc, props, key) {
    acc[key] = _.extend(props, { url: baseUrl +  key + '.jpg' });
    return acc;
  }, {});
};

sounds['littlekaiju'] = {};
sounds['ima'] = {};

exports.sounds = function (baseUrl) {
  return _.reduce(sounds, function (acc, props, key) {
    acc[key] = _.extend(props, { url: baseUrl +  key + '.mp3' });
    return acc;
  }, {});
};
