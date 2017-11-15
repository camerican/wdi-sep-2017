const axFooty = axios.create({
  baseURL: "http://football-data.org/",
  headers: {
    'X-Auth-Token': '40e968d68d6340e6a1ea33e7d7cdcf5a',
    'X-Response-Control': "full",
  }
});
let elLeague
  , elTeam;
document.addEventListener("DOMContentLoaded",function(){
  console.log("Hi, I'm here!")
  elLeague = document.querySelector("#league");
  elTeam = document.querySelector("#team");
  axFooty.get(`v1/competitions/`).then(function(response){
    response.data.forEach( row => {
      elLeague.innerHTML += `
      <div class="league">
      <a href="${row._links.teams.href}">${row.caption}</a>
      </div> 
      `;
    } );
    elLeague.addEventListener('click',function(event){
      if (event.target.tagName == "A" ) {
        event.preventDefault();
        axFooty.get(event.target.getAttribute('href')).then(function(response){
          elTeam.innerHTML = "";
          // console.log(response.data);
          response.data.teams.forEach( row => {
            elTeam.innerHTML += `
              <div class="team">
              <img width="40px" src="${row.crestUrl}" /> <strong>${row.name}</strong>
              </div>
            `;
          });
        });
      };
    });
  });
});