// p1
var num1 = 4
  , num2 = 56
  ;

console.log( num1 + num2 );

// p2
var str1 = "Hello there";
var str2 = "lovely day we're having.";
// alert( str1 + " " + str2 );
// alert( `${str1} ${str2}` ); // variable interpolation with ES6 template string


// p3
var interests = {
  firstName: "Cam",
  lastName: "Crews",
  favColor: "blue",
  interests: [
    "JavaScript",
    "Arsenal",
    "Volleyball",
    "Lunch"
  ]
};

for( var key in interests ) {
  if( key == "interests" ) {
    console.log( key, interests[key].join(", ") );
  } else {
    console.log( key, interests[key] );
  }
}

// console.log( "firstName: ", interests.firstName );
// console.log( "lastName: ", interests.lastName );
// console.log( "favColor: ", interests.favColor );
// console.log( "interests: ", interests.interests.join(", ") );




