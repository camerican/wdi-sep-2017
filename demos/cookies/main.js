let ready = Cookies.get("Ready_for_lunch");
if( !ready ) {
  Cookies.set("Ready_for_lunch", "false");
} else if( ready == "true" ) {
  document.querySelector("#sandwich").classList.add("active");
}
document.addEventListener("DOMContentLoaded",function(){
  document.querySelector("#hangry").addEventListener("click",function(){
    Cookies.set("Ready_for_lunch", "true");
    document.querySelector("#sandwich").classList.add("active");
  });
});