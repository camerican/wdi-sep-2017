// TV Guide JavaScript Data Exercise

// Below we have an Object that contains 5 keys
// representing network TV Channels...
//
// Each of the keys' value is an array of Objects
//
// We're going to practice working with complex data...
// which is in this case:
//
// An Object whose keys
// hold Arrays
// which contain Objects whose keys
// hold Numbers and Strings

// Ex: If we wanted to count the number of TV shows on CBS tonight,
// we could get that via:

// tv_guide.cbs.length

// this works becuase tv_guide.cbs is an Array
// i.e. the 'key' of "cbs" has a value of an Array

// Challenge Questions (Array Access)
// 1) Find the largest number of shows amongst all channels
//
// 2) Count the total number of 1 hour long shows (bit tricky)
//
// 3) Count the number of shows that start at 11pm or later (tricky)
// // hint: might be able to use Array#filter?
//
// 4) Capture an array of all Episode titles starting with the word "The" (hard)
// 
//

var tv_guide = {
  cbs: [
  { 
    start: 9,
    duration: 1,
    show: "NCIS",
    episode: "Family First"
  },{
    start: 10,
    duration: 1,
    show: "NCIS: New Orleans",
    episode: "Sleeping With the Enemy"
  },{
    start: 11,
    duration: 0.5,
    show: "CBS 2 News at 11PM",
    episode: null
  },{
    start: 11.5,
    duration: 1,
    show: "The Late Show With Stephen Colbert",
    espidoe: "Joseph Gordon-Levitt; Mille Bob..."
  }],
  ion: [{
    start: 9,
    duration: 1,
    show: "Criminal Minds",
    episode: "The Perfect Storm"
  },{
    start: 10,
    duration: 1,
    show: "Criminal Minds",
    episode: "Psychodrama"
  },{
    start: 11,
    duration: 1,
    show: "Saving Hope",
    episode: "The Parent Trap"
  }],
  nbc: [{
    start: 9,
    duration: 1,
    show: "America's Got Talent",
    episode: "Live Finale"
  },{
    start: 10,
    duration: 1,
    show: "Better Late Than Never",
    episode: "A Thai Goodbye"
  },{
    start: 11,
    duration: 0.5,
    show: "News 4 New York at 11",
    episode: null
  },{
    start: 11.5,
    duration: 1,
    show: "The Tonight Show Starring Jimmy Fallon",
    episode: "Shallene Woodley; Carol Burnett..."
  }],
  fox: [{
    start: 9,
    duration: 1,
    show: "Lucifer",
    episode: "Take Me Back to Hell"
  },{
    start: 10,
    duration: 1,
    show: "Fox 5 News at 10",
    episode: null
  },{
    start: 11,
    duration: 0.5,
    show: "The Big Bang Theory",
    episode: "The Engagement"
  },{
    start: 11.5,
    duration: 0.5,
    show: "The Simpsons",
    episode: "Waiting for..."
  }],
  abc: [{
    start: 9,
    duration: 0.5,
    show: "Fresh Off the Boat",
    episode: "Bring the Pain"
  },{
    start: 9.5,
    duration: 0.5,
    show: "The Real O'Neals",
    episode: "The Real Rules"
  },{
    start: 10,
    duration: 1,
    show: "Marvel's Agens of S.H.I.E.L.D",
    episode: "Ascension"
  },{
    start: 11,
    duration: 0.5,
    show: "Eyewitness News",
    episode: null
  },{
    start: 11.5,
    duration: 1,
    show: "Jimmy Kimmel Live",
    episode: "Patrick Dempsey; Justin Schmidt..."
  }]
};

