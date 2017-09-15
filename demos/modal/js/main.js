document.forms[0].addEventListener("submit",function(event){
  // stop the form submission
  event.preventDefault();
  // do something with the values...
  let name = document.querySelector("input[name=name]").value
    , color = document.querySelector("select[name=color]").value;
  document.querySelector("#logo").innerText = `${name} loves ${color}`;
  document.querySelector("#modal").style.display = "none";
});