// Everything that has to wait for the DOM to load should live in the callback here...
let elForm, elOutput4, elUsername, elPassword;
document.addEventListener("DOMContentLoaded",function(){
  console.log("Loaded!")
  elForm = document.getElementById("login");
  elOutput4 = document.querySelector("#output4");
  elUsername = document.getElementById("username");
  elPassword = document.querySelector("input[name=password]");
  console.log( elPassword );
  elForm.addEventListener("submit",processForm);
});

function processForm(event){
  // stop the submission from going through
  event.preventDefault();
  // make sure password is 12345678
  // AND make sure username is less than 14 characters
  // THEN update the elOutput with what happened
  if( elPassword.value == "12345678" && elUsername.value.length < 14 ) {
    //success!
    elOutput4.innerText = "Congrats on knowing your username and password!";
  } else { //failure
    elOutput4.innerText = "Incorrect username or password";
  }
}

setTimeout(function(){
  elForm.style.display = "none";
}, 2000);


