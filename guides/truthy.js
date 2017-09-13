
function truthyDetector( val ){
  console.log( `${val} is ${Boolean(val)}`);
}

console.log("Falsy values");
truthyDetector( 0 );
truthyDetector( NaN );
truthyDetector( false );
truthyDetector( "" );
truthyDetector( null );
truthyDetector( undefined );

console.log("Almost Falsy.. but true");
truthyDetector( -1 );
truthyDetector( ({}) );
truthyDetector( [] );
truthyDetector( " " );

var teams = ["Mets","Phillies","Nationals"];
var ratings = ["Bad","Worst","Meh"];

function getOkayTeams( teams, ratings ) {
  var okayTeams = [];
  for( var i=0; i < teams.length; i++ ){
    if( ratings[i] != "Worst" && ratings[i] != "Bad" ) {
      okayTeams.push(teams[i]);
    }
  }
  return okayTeams;
}

var okayTeams = getOkayTeams(teams, ratings);
console.log( "Teams that have a chance: ", okayTeams.join(", "));

// with while loop
// function getOkayTeams( teams, ratings ) {
//   var okayTeams = [];
//   var i=0; 
//   while( i < teams.length ){
//     if( ratings[i] != "Worst" && ratings[i] != "Bad" ) {
//       okayTeams.push(teams[i]);
//     }
//     i++;
//   }
//   return okayTeams;
// }






