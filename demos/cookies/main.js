//
const DEFAULT_GREETING = "Cookie Experiment";
let ready = Cookies.get("Ready_for_lunch");
if( !ready ) {
  Cookies.set("Ready_for_lunch", "false");
} else if( ready == "true" ) {
  document.querySelector("#sandwich").classList.add("active");
}
document.addEventListener("DOMContentLoaded",function(){
  // update the welcome message on load
  updateWelcome();
  //listen for form submission (just get the first form we find)
  document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault();
    // save the name submitted
    let name = document.querySelector("input[name=name]").value;
    Cookies.set("name", name);
    updateWelcome(name);
  });
  document.querySelector("#clear").addEventListener("click",function(){
    Cookies.expire("name"); // clear the cookie
    document.querySelector("h1").innerText = DEFAULT_GREETING;
  });
  // when we click on "hangry" button, set cookie to true and make
  // #sandwich image visible
  document.querySelector("#hangry").addEventListener("click",function(){
    Cookies.set("Ready_for_lunch", "true");
    document.querySelector("#sandwich").classList.add("active");
  });
});

// function to update the welcome message (if necessary)
function updateWelcome(new_name){
  let name = new_name || Cookies.get("name");
  // if we retrieved a name from the Cookies
  if( name ) {
    // update the welcome message
    document.querySelector("h1").innerText = `Welcome, ${name}!`;
  }
}


