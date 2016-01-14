Framer.Defaults.DeviceView = {
  "deviceScale" : -1,
  "orientation" : 0,
  "contentScale" : 1,
  "deviceType" : "iphone-6-silver"
};

Framer.Device = new Framer.DeviceView();
Framer.Device.setupContext();

###
 EXERCISE: Fundamentals
 
 We'll create a basic prototype in which the user
 can tap a heart to "like" and again to "unlike".
 The basic image layers have been created and
 imported for you to start.
###
Background = new Layer 
	x:0, y:0, width:750, height:1334, image:"images/DeviceBackground.png"
Card = new Layer 
	x:37, y:284, width:676, height:655, image:"images/Card.png"
EmptyHeart = new Layer 
	x:0, y:0, width:52, height:51, image:"images/HeartEmpty.png"
FilledHeart = new Layer 
	x:0, y:0, width:52, height:51, image:"images/HeartFilled.png"

###
 Create a "Heart" layer to contain the EmptyHeart and 
 FilledHeart layers, and make sure to set their superLayer
 property accordingly.
 Hint: the Heart layer's x position is 610, y position is 834 
 and width/height is 52.
###

Heart = new Layer
    x:610, 
    y: 834, 
    height: 52, 
    width:52,
    backgroundColor: null


EmptyHeart.superLayer = Heart;
FilledHeart.superLayer = Heart;
	
###
 Hide the FilledHeart layer by default.
###

FilledHeart.visible = false;

###
 Toggle the visibility of the FilledHeart layer every time
 the user clicks on the Heart layer.
 Hint: use Layer.on and Events.Click for this.
###

Heart.on Events.Click, () ->
    FilledHeart.visible = !FilledHeart.visible;