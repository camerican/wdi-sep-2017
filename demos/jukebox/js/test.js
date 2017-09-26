
SC.initialize({
  client_id: 'fd4e76fc67798bfa742089ed619084a6'
});

function Jukebox(){
  this.playlist = [
    {id: 1232143, title: "Something"},
    {id: 1343125, title: "Another song"}
  ];
  this.currentSong = 0;
}
Jukebox.prototype.play = function(){
  let song = this.playlist[this.currentSong];
  if( song.player ) {
    song.player.play();
  } else {
    SC.stream(`/tracks/${song.id}`).then(function(player){
      song.player = player;
      player.play();
    });
  }
}
Jukebox.prototype.addPlaylist = function(userId){
  let that = this;
  SC.get(`/users/${userId}/tracks`).then(function(response){
    console.log(response);
    let newResponse = response.map(function(c){
      return {
        id: c.id,
        title: c.title
      };
    });
    console.log( newResponse, this );
    console.log( that.playlist );
    that.playlist.push( ...newResponse );
    
  });
};

const myJuke = new Jukebox();
setTimeout(function(){
  myJuke.addPlaylist(19252023);
},2000);

