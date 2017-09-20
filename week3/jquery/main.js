////////vanilla JS///////////
// document.addEventListener("DOMContentLoaded",function(){
//   // ... do this when it loads
//   document.getElementById("myButton").addEventListener("click",function(){
//     document.querySelector("h1").innerText = "I love jQuery";
//   });
// });

/////////jQuery JS////////////
$(document).ready(function(){
  // ... do this when it loads
  $("#myButton").click(function(){
    const size = 100;
    $("h1").html("I love jQuery");
    // let's animate the balls when we click
    $("#ball1").animate({
      top: 0,
      left: innerWidth - size
    },2000);
    // $("#ball1").animate({
    //   top: innerHeight - size,
    //   left: innerWidth - size
    // },2000);
    moveDown($("#ball1"));
  });
});

function moveDown(el, delay = 2000 ){
  console.log($(el).css('height'))
  $(el).animate({
    top: innerHeight - parseInt($(el).css('height')),
    left: innerWidth - parseInt($(el).css('width'))
  },delay);
}






