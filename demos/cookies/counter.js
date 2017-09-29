document.addEventListener("DOMContentLoaded",function(){
  // when page loads,
  // update the counter_count with the value of the 
  // cookie's count...
  document.getElementById("coffee_count").innerText = Cookies.get("coffee");

  // wait for click on our counter button...
  document.getElementById("counter").addEventListener("click",function(){
     // when we have a click, we want to increase the count
     console.log(Cookies.get("coffee"));
     let coffee_count = ~~Cookies.get("coffee") + 1;
     Cookies.set("coffee",coffee_count);
     // of our cookie's count...  and update the display
     document.getElementById("coffee_count").innerText = coffee_count;
  });

  // when we click on clear... get rid of all the coffee 
  document.getElementById("clear").addEventListener("click",function(){
    Cookies.expire("coffee");
    document.getElementById("coffee_count").innerText = 0;
  }); 




});