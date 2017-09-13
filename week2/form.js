// let's listen for a form submission...  and then 
// stop it from submitting
var elForm, elMessage, elTeam;
document.addEventListener("DOMContentLoaded",function(){
  elForm = document.getElementById("preferences");
  elMessage = document.getElementById("message");
  elTeam = document.getElementById("favorite_team");
  elForm.addEventListener("submit",function(event){
    console.log(event);
    event.preventDefault();// stop default action(form submission)
    elMessage.innerText = elTeam.value + " are grrrrreat";
  });
});
// then let's write the team name out in a heading tag with a string saying they're great

