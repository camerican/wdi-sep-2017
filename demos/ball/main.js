// wait for the DOM to load
let elBall;
document.addEventListener("DOMContentLoaded",function(){
  let lastTime;
  elBall = document.getElementById("ball");
  elBall.style.top = "50%";
  elBall.style.left = "50%";
  // listen for mousemove events
  document.addEventListener("mousemove",function(event){
    if( lastTime + 1000 > event.timeStamp ) {
      return; // don't process the mouse move if we've already done
              // this within the last second
    }
    lastTime = event.timeStamp; // update the last time we've seen this

    // move the ball
    // where is the ball currently?
    console.log( elBall.style.top, elBall.style.left );
    // where is the mouse, relative to the center?
    // if the mouse is to the left of the center... let's move the ball left
    if( window.innerWidth/2 > event.x ) { // move left
      elBall.style.left = parseInt(elBall.style.left) - 1 + "%";
    } else { // move right
      elBall.style.left = parseInt(elBall.style.left) + 1 + "%";
    }
    
    if( window.innerHeight/2 < event.y ) {  // move down
      elBall.style.top = parseInt(elBall.style.top) + 1 + "%";
    } else { // move up
      elBall.style.top = parseInt(elBall.style.top) - 1 + "%";
    }
    console.log(event);
  });
});

// function 
