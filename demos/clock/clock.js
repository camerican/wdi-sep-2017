
// We're going to first set the clock to the current time 
//  hours, minutes, seconds

// then, every second, we want increase
// the time by a second, and manage the minutes
// and hours....

// so...  every time we have 60 seconds:
//    seconds goes to 0, minutes goes up by 1
//
// every time we have 60 minutes:
//     minutes goes to 0, hours goes up by 1
//  
// every time we have 13/24 hours:
//     reset hours to either 0/1 

// Then: add in either hex clock, or custom greeting

var elHour
  , elMinute
  , elSecond
  , now = new Date()
  ;
document.addEventListener("DOMContentLoaded",function(){

  elHour = document.querySelector("#clock .hour");
  elMinute = document.querySelector("#clock .minute");
  elSecond = document.querySelector("#clock .second");

  elSecond.innerText = now.getSeconds();

  setInterval(function(){
    var seconds = parseInt(elSecond.innerText) + 1;
    if( seconds >= 60 ) {
      // to do: reset seconds to 0
      // increase minutes by 1

      // if we increased minutes
      // check if minutes >= 60
      // and then reset minutes to 0
      //     increase hours by 1

      // to do: if hours is >= 24 
      // reset hours to 0

      

    }
    // update the clock
    elSecond.innerText = seconds;

  },1000);

});

