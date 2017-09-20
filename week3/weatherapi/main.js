const KEY = "874520629a49a0ac";
const city = "NY";
const state = replaceSpaces("New York");
document.addEventListener("DOMContentLoaded",function(){
  //http://api.wunderground.com/api/874520629a49a0ac/forecast10day/q/NY/New_York.json
  axios.get(`http://api.wunderground.com/api/${KEY}/forecast10day/q/${state}/${city}.json`).then(function(data){
    console.log(data);
    data.data.forecast.txt_forecast.forecastday.forEach(function(forecast){
      document.querySelector("#content").innerHTML += `<tr>
        <td>${forecast.title}</td>
        <td><img src="${forecast.icon_url}" /></td>
        <td>${forecast.fcttext}</td>
      </tr>`;
    });
  });
});
function replaceSpaces( string ) {
  return string.replace(/ /g,"_");
}

