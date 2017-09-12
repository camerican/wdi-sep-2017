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
});

// to do: add a click listener for the #bigButton
// when we click, update the #target to say "Tuesdays are for tacos"



// $(document).ready(function(){
//   $("h1").click(function(){
//     doStuff(2);
//   });
// });



// doStuff(4);
