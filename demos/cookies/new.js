document.addEventListener("DOMContentLoaded",function(){
  // check to see if cookie is set.  if so, welcome
  if( Cookies.get("name") ) {
    updateWelcome(Cookies.get("name"));
  }
  document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
    let name = document.querySelector("input[name=name]").value;
    Cookies.set("name", name);
    updateWelcome(name);
  });
});

function updateWelcome(name){
  document.querySelector("h1").innerText = "Welcome, " + name + "!";
}