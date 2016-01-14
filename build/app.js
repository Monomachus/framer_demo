(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\Users\\tpoperecinii\\Documents\\framer_demo\\src\\app.coffee":[function(require,module,exports){
var Background, Card, EmptyHeart, FilledHeart, Heart;

Framer.Defaults.DeviceView = {
  "deviceScale": -1,
  "orientation": 0,
  "contentScale": 1,
  "deviceType": "iphone-6-silver"
};

Framer.Device = new Framer.DeviceView();

Framer.Device.setupContext();


/*
 EXERCISE: Fundamentals
 
 We'll create a basic prototype in which the user
 can tap a heart to "like" and again to "unlike".
 The basic image layers have been created and
 imported for you to start.
 */

Background = new Layer({
  x: 0,
  y: 0,
  width: 750,
  height: 1334,
  image: "images/DeviceBackground.png"
});

Card = new Layer({
  x: 37,
  y: 284,
  width: 676,
  height: 655,
  image: "images/Card.png"
});

EmptyHeart = new Layer({
  x: 0,
  y: 0,
  width: 52,
  height: 51,
  image: "images/HeartEmpty.png"
});

FilledHeart = new Layer({
  x: 0,
  y: 0,
  width: 52,
  height: 51,
  image: "images/HeartFilled.png"
});


/*
 Create a "Heart" layer to contain the EmptyHeart and 
 FilledHeart layers, and make sure to set their superLayer
 property accordingly.
 Hint: the Heart layer's x position is 610, y position is 834 
 and width/height is 52.
 */

Heart = new Layer({
  x: 610,
  y: 834,
  height: 52,
  width: 52,
  backgroundColor: null
});

EmptyHeart.superLayer = Heart;

FilledHeart.superLayer = Heart;


/*
 Hide the FilledHeart layer by default.
 */

FilledHeart.visible = false;


/*
 Toggle the visibility of the FilledHeart layer every time
 the user clicks on the Heart layer.
 Hint: use Layer.on and Events.Click for this.
 */

Heart.on(Events.Click, function() {
  return FilledHeart.visible = !FilledHeart.visible;
});


},{}]},{},["C:\\Users\\tpoperecinii\\Documents\\framer_demo\\src\\app.coffee"])


//# sourceMappingURL=app.js.map
