/*
 * elise
 * https://github.com/stwind/elise
 *
 * Copyright (c) 2012 stwind
 * Licensed under the MIT license.
 */

var _ = require('underscore'),
    Universe = require('./views/Universe'),
    Board = require('./views/board'),
    White = require('./views/whiteflash'),
    Pattern = require('./views/pattern'),
    schema = require('./schema'),
    ShowTimeline = require('./timeline'),
    ShowTimelineTest = require('./timelineTest'),
    images = schema.images("images/"),
    sounds = schema.sounds("sound/");

var Elise = function (canvas) {
  this.canvas = canvas;
  this.stage = new createjs.Stage(canvas);
  var shape = new createjs.Shape();

  shape.graphics.beginFill(Elise.BACKGROUND);
  shape.graphics.rect(0, 0, canvas.width, canvas.height);

  this.stage.addChild(shape);
};

var p = Elise.prototype;

p.preload = function (callback) {
  var loader = new PxLoader();
  var self = this;

  _.each(images, function (props, name) {
    loader.add(new PxLoaderImage(props.url));
  });

  loader.addCompletionListener(function () {
    $('#loading').hide();
    self._loaded = 1;
    callback.call(self);
  });
  loader.start();
};

p.init = function () {
  var stage = this.stage,
      self = this;

  this.preload(function () {
    var sound = new buzz.sound(sounds['littlekaiju'].url);

    sound.bind('canplaythrough', function () {
      self._initComp();
      var timeline = new createjs.Timeline();

      _.each(ShowTimeline, function (point) {
        var tween = createjs.Tween.get(self);
        tween.wait(parseInt(point.t)).call(function () {
          console.log("[timeline] ======== ", point.t);
          point.c.call(self);
        });

        timeline.addTween(tween);
      });
      
      timeline.setPaused(true);
      timeline.gotoAndPlay(0);

      sound.play();
    });

  });

  createjs.Ticker.setFPS(Elise.FPS);
  createjs.Ticker.addListener(stage);
};

p._initComp = function () {
  var cw = this.canvas.width;
  var ch = this.canvas.height;
  var board = this.board = new Board(images);
  var universe = this.universe = new Universe(Elise.numParticle);
  var white = this.white = new White(cw, ch);
  var stage = this.stage;
  stage.addChild(board);
  stage.addChild(universe);
  stage.addChild(white);
};

p.phaseTwo = function () {
  if (this.loaded == 1) {
    this._phaseTwo();
  } else {
    this.preload(this._phaseTwo);
  }
};

p._phaseTwo = function () {
  var sound = new buzz.sound(sounds['ima'].url),
      self = this;

  sound.bind('canplaythrough', function () {
    self._initComp();

    sound.play();
    sound.bind('ended', function () {
      nextSound('ima');
    });

    setTimeout(function () {
      loop.call(self, {
        board: self._nextBoard()
      });
    }, 2000);
  });
  createjs.Ticker.setFPS(Elise.FPS);
  createjs.Ticker.addListener(this.stage);
};

function nextSound(prev) {
  var keys = Object.keys(sounds),
      next;
  for (var i = 1, len = keys.length; i < len; i++) {
    if (keys[i] != 'littlekaiju' && keys[i] != prev) {
      next = keys[i];
      break;
    }
  }

  var sound = new buzz.sound(sounds[next].url);

  sound.bind('canplaythrough', function () {
    sound.play();
    sound.bind('ended', function () {
      nextSound(next);
    });
  });
}

function loop(now) {
  this.board.next(now.board);
  var self = this;

  var next = {
    board: this._nextBoard()
  };

  setTimeout(function () {
    loop.call(self, next);
  }, next.board.duration + 80)
};

p._nextBoard = function () {
  var board = this.board,
      cw = this.canvas.width,
      ch = this.canvas.height;
      
  var n = _.random(33, 127),
      num = n < 100 ? '0' + n : n.toString(),
      id = 'e' + num;
  var pic = this.board.pictures[id];

  return {
    id: id,
    duration: pic.props.duration,
    x: _.random(30, cw - pic.width - 30),
    y: (ch - pic.height) / 2
  };
}

Elise.FPS = 30;
Elise.numParticle = 300;
Elise.BACKGROUND = createjs.Graphics.getRGB(0,0,0);

module.exports = Elise;
