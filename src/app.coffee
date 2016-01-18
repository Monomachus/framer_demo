###
 EXERCISE: Material Response
 
 Take a look at Google's Material Design guidelines and the
 Material Response example at http://bit.ly/1GQWnPF.
 Let's create one of those buttons that ripples when you
 tap it and "lifts" off the page below.
###

###
 First off, set your viewer in fullscreen mode over yonder ->
###


 
###
 Make a new BackgroundLayer that's #eeeeee.
###

Background = new BackgroundLayer
    backgroundColor : "#eeeeee"


###
 Create the button layer and center it onscreen.
###

Button = new Layer
    width: 340
    height: 100
    backgroundColor: "#ffffff"
    borderRadius: 5
    shadowX: -1
    shadowY: 1
    shadowBlur: 2
    shadowSpread: 1
    shadowColor: "rgba(0, 0, 0, .25)"
Button.center()


###
 Create a circle that we'll animate with a
 ripple in response to the button being clicked.
###

Circle = new Layer
    width: 100
    height: 100
    opacity: 0
    backgroundColor: "#dddddd"
    borderRadius: "50%"
    superLayer: Button

###	
 When you click the button, place and expand the circle.
 Use midX/midY and event.offsetX/offsetY to place it.
 Animate opacity and scale for the ripple effect.
###

Button.on Events.Click, (event) ->
    Circle.midX = event.offsetX
    Circle.midY = event.offsetY
    Circle.scale = 0
    Circle.opacity = 1
    Circle.animate
        properties:
            scale: 6
            opacity: 0
        curve: "ease-out"
        time: .5
    
    Button.animate
        properties:
            shadowX: -5
            shadowY: 5
            shadowBlur: 5
        time: .3
     Utils.delay .3, ->
        Button.animate
            properties:
                shadowX: -1
                shadowY: 1
                shadowBlur: 2
            time: .3
###
 Extra credit! "Lift" the button when it's clicked.
 Hint: this is a two-part animation so you'll have
 to delay the second part of it with Utils.delay().
###

