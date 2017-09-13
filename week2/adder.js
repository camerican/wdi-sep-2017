document.addEventListener("DOMContentLoaded",function(){
  // stuff we do after load, lives in here....
  document.getElementById("solve").addEventListener("click",function(){
    // stuff we do after a click is detected on #solve
    var num1 = document.getElementById("num1").value;
    // grab the value from num1
    //        and num2
    var num2 = document.getElementById("num2").value;
    // add them together (after converting them to numbers)
    // and update the innerText of #result
    document.getElementById("result").innerText = parseInt(num1,10) + parseInt(num2,10);
  });
});
// Operate on all inputs:

// // getElements selectors don't implement forEach :'(
// [].forEach.call( document.getElementsByTagName("inputs"), 
//   function( el ) { 
//     el.value = "Yay"; 
//   }
// );

// // Nicer querySelectorAll implements forEach!!
// document.querySelectorAll("input").forEach(function( el ) { 
//   el.value = "Yay"; 
// });

