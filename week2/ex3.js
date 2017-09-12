// Loops and Logic Ex
// Ex1
function echo( phrase ) {
  hr();
  console.log( phrase );
  hr();
}

// echo("Hello");
// echo(prompt("Say something..."));

// Ex2
function hr() {
  // console.log("-----------------------------------------");
  console.log("-".repeat(20));
}

// Ex3
// function doorPrize( doorNumber ) {
//   if( doorNumber == 1 ) {
//     return "A boat";
//   } else if( doorNumber == 2 ) {
//     return "A car";
//   } else if( doorNumber == 3) {
//     return "An old shoe";
//   }
// }

function doorPrize( doorNumber ) {
  var prizes = ["A boat","A car","An old shoe"];
  var index = parseInt(doorNumber-1);
  return prizes[index] || "You didn't pick a valid door, silly";
}

console.log( "You won: ", doorPrize( prompt("Pick a door") ) );

