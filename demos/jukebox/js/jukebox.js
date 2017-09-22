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
  elPlay.addEventListener("click",function(){
    elPlayer.play();
  });
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
});
