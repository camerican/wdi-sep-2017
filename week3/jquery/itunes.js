
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    itunesSearch( $("input[name=term]").val() );
  });
});

// document.addEventListener("DOMContentLoaded",function(){
//   document.querySelector("form").addEventListener("submit",function(event){
//     event.preventDefault();
//     itunesSearch( document.querySelector("input[name=term").value );
//   });
// });

// 1) Listen for form submission
//$().submit
// document.querySelector().addEventListener("submit")

// Don't forget to prevent the default for the form submission

// in the submit handler callback, we want to grab the value of input[name=term] and use that in place of the string "Prince", then run the Ajax request....

function itunesSearch( term = "Prince" ) {
  $.ajax({
    url: "https://itunes.apple.com/search",
    type: "GET",
    data: {term: term},
    success: function(data){
      
      let ourData =JSON.parse(data).results.map(function(track){
        return {
          id: track.trackId,
          name: track.trackName,
          album: track.collectionName,
          artwork: track.artworkUrl100,
          price: track.trackPrice,
          releaseDate: track.releaseDate,
          time: track.trackTimeMillis / 1000
        };
      });
      const elMain = document.querySelector("main");
      ourData.forEach(function(track){
        elMain.innerHTML += `<div class="track" style="background-image: url(${track.artwork})">
      <div class="name">${track.name}</div>
      <div class="price">$${track.price}</div>
    </div>`;
      });
      console.log(ourData);
    }
  });
}
