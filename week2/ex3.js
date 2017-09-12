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
// ++i;
// i++;
// i += 1;
// i = i + 1;

function doorPrize( doorNumber ) {
  var prizes = ["A boat","A car","An old shoe"];
  var index = parseInt(doorNumber-1);
  return prizes[index] || "You didn't pick a valid door, silly";
}

console.log( "You won: ", doorPrize( prompt("Pick a door") ) );


// Friends Loop
// declare a variable and initialize it to an array of strings 
var friends = ["Oliver","Sam","Krystal"];
for(var i=0; i<friends.length; i++){
  console.log( friends[i] + " is my friend" );
}

// for( var i in friends ) {
//   console.log( friends[i] + " is my friend" );
// } 

friends.forEach(function(value,index) {
  console.log( value + " is my friend");
});




