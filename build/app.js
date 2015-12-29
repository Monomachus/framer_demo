(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\Users\\tpoperecinii\\Documents\\framer_demo\\src\\app.coffee":[function(require,module,exports){
var hint, i, imageLayer, j, obj, ref, states, textLayer;

Framer.Device = new Framer.DeviceView();

Framer.Device.deviceType = 'iphone-6-gold-hand';

Framer.Device.setupContext();

imageLayer = new Layer({
  x: 0,
  y: 0,
  width: 128,
  height: 128,
  image: 'images/Icon.png'
});

imageLayer.center();

states = JSON.parse(Utils.domLoadDataSync("data/states.json"));

for (i = j = 0, ref = states.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
  imageLayer.states.add((
    obj = {},
    obj["State" + i] = states[i],
    obj
  ));
}

imageLayer.states.animationOptions = {
  curve: 'spring(500,12,0)'
};

imageLayer.on(Events.Click, function() {
  return imageLayer.states.next();
});

hint = require('./modules/hint')();

textLayer = new Layer({
  x: 0,
  y: Screen.height - 96,
  width: Screen.width,
  height: 64,
  backgroundColor: 'none',
  color: 'white',
  html: "<p style=\"text-align: center; font-size: 48px; line-height: 1.2\">" + hint + "</p>"
});

textLayer.centerX();


},{"./modules/hint":"C:\\Users\\tpoperecinii\\Documents\\framer_demo\\src\\modules\\hint.coffee"}],"C:\\Users\\tpoperecinii\\Documents\\framer_demo\\src\\modules\\hint.coffee":[function(require,module,exports){
module.exports = function() {
  return 'Click icon, please!';
};


},{}]},{},["C:\\Users\\tpoperecinii\\Documents\\framer_demo\\src\\app.coffee"])


//# sourceMappingURL=app.js.map
