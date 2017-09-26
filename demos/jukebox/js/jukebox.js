SC.initialize({
  client_id: 'fd4e76fc67798bfa742089ed619084a6'
});
// to do: investigate why resolve is not returning successfully
SC.resolve("https://soundcloud.com/thebirthdaymassacre/happy-birthday").then(function(data){
  document.body.innerHTML += `<img src="${data.artwork_url}" />${data.title}`;
  console.log(data);
});
SC.get("/tracks/53579959").then(function(data){
  console.log(data);
});

// SC.get("/tracks",{
//   q: document.getElementById("song").value
// }).then(function(data){
//   console.log(data);
// });


let player;

SC.stream('/tracks/53579959').then(function(response){
  player = response;
  player.play();
});
  

// to do: implement OO Jukebox
const songs = [
  {name: "Corruption", file: "corruption.mp3"},
  {name: "Hitman", file: "hitman.mp3"},
  {name: "Killers", file: "killers.mp3"}
];
// initialize currentSong & declare element variables
// which we'll set after the page loads
let currentSong = 0
  , elJukebox
  , elPlayer
  , elCurrentSong
  , elControls
  , elBack
  , elPlay
  , elPause
  , elForward
  ;
document.addEventListener("DOMContentLoaded",function(){
  // set the element variables declared above
  elJukebox = document.querySelector("#myJukebox");
  elPlayer = elJukebox.querySelector("audio");
  elCurrentSong = elJukebox.querySelector(".currentSong");
  elControls = elJukebox.querySelector(".controls")
  elBack = elControls.querySelector(".fa-back");
  elPlay = elControls.querySelector(".fa-play");
  elPause = elControls.querySelector(".fa-pause");
  elForward = elControls.querySelector(".fa-forward");
  // to do: restructure into a single click listener
  //        on the .controls which will then do
  //        an if/else check on the event.target
  //        to determine which button was clicked
  // Listen for a click on play button
  elPlay.addEventListener("click",function(){
    elPlayer.play();
  });
  // Listen for a click on forward button
  elForward.addEventListener("click",function(){
    // move currentSong forward one -- and use the remainder
    // operator (modulus) so that we reset back to 0 if we've
    // gone over the total number of songs (songs.length)
    currentSong = (currentSong + 1) % songs.length;
    // update the src of the audio tag to play the next song
    elPlayer.src = `media/${songs[currentSong].file}`;
    // update the content of the current Song
    elCurrentSong.innerText = songs[currentSong].name;
    // then play again
    elPlayer.play();
  });
  // to do: listen for a click on back button
          // similar to forward, but subtract one from currentSong
  // to do: listen for a click on pause button
          // call stop method on player
});
