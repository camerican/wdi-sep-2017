//alert("Hello!  JavaScript!!!");
function doStuff( favNumber ) {
  console.log("It worked!!".repeat(favNumber));

  //document.getElementsByTagName("h1")[0].innerHTML = "It's grrrrrreat!!";
  //document.getElementById("myH1")
  document.querySelector("h1").innerHTML = "It's grrrrrreat!!";
  //$("h1"); // jQuery selector
}

document.addEventListener("DOMContentLoaded",function(){
  document.querySelector("h1").addEventListener("click",function(){
    doStuff(2);
  });
  // write a selector for the bigButton
  // document.querySelector("#bigButton")
  // document.querySelector("button")
  document.getElementById("bigButton").addEventListener("click",function(){
    //console.log("You clicked on the bigButton!");
    var originalText = "Change Me"
      , elTarget = document.getElementById("target");
    if( originalText == elTarget.innerText ){
      // original text is the same as the current text, so change to new message
      elTarget.innerText = "Tuesdays are for tacos";
    } else {
      // original text is different from current text, go back to original
      elTarget.innerText = originalText;
    }
    
  });

});

// to do: add a click listener for the #bigButton
// when we click, update the #target to say "Tuesdays are for tacos"
// bonus, switch back again when we click another time


// $(document).ready(function(){
//   $("h1").click(function(){
//     doStuff(2);
//   });
// });



// doStuff(4);
