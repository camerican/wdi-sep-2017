// team/main.js
// We're building an example of a Team with a few different sports Teams
// that inherit from it

// We'll focus on the SoccerTeam...  
// the Team should have
// a name, sport, playerCount, and an array of players called roster
// we should be able to add a player to the roster using an addPlayer method


// the SoccerTeam will have a league and sponsor.
// it will also call the Team constructor, setting the playerCount and sport


// A Player will be another object type with a name, number (shirt number), and status (healthy - true, or injured - false)

// We will have a setHealthy and setInjured status to alter their status.

// Team constructor

// function Team( options ) {
//   this.name = options.name;
//   this.sport = options.sport;
//   this.playerCount = options.playerCount
//   this.roster = [];
// }

function Team( name, sport, playerCount ) {
  this.name = name;
  this.sport = sport;
  this.playerCount = playerCount;
  this.roster = []; // we'll put our players in here
}
// allow us to add players
Team.prototype.addPlayer = function( player ) {
  // to do: make sure it's actually a Player before adding
  this.roster.push(player);
}
Team.prototype.smartAddPlayer = function( name, number ) {
  this.roster.push( new Player( name, number) );
}

function SoccerTeam( name, league, sponsor ) {
  this.league = league;
  this.sponsor = sponsor;
  Team.call(this, name, "Soccer", 11);
  // Team.apply(this, Array.from(arguments).slice(0,3));
}
SoccerTeam.prototype = Object.create(Team.prototype);

function Player( name, number ) {
  this.name = name;
  this.number = number;
  this.status = true;
}
Player.prototype.setHealthy = function() {
  this.status = true;
}
Player.prototype.setInjured = function(){
  this.status = false;
}


let mets = new Team("Mets", "baseball", 9);
let chelsea = new SoccerTeam("Chelsea","Premier League", "Yokohama Tyres");

chelsea.addPlayer( new Player( "Eden Hazzard", 10 ) );
let player = new Player( "Alvara Morata", 9 );
chelsea.addPlayer( player );

chelsea.smartAddPlayer( "Thibolt Courtois", 1 );



















