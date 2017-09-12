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

// Loops and Logic Exercises

// ex1:

// write a conditional to check whether a number is less than 10

// if( /* some conditional */ ) {
//   /* Block */
// } else {
//   /* Block */
// }

//var myNum = 60;
var myNum = parseInt(prompt("Please enter a number"));
//var myNum = ~~prompt("Please enter a number");

if( myNum < 10 ) {
  console.log("Your number is less than ten");
} else {
  console.log(`Your number of ${myNum} is greater than or equal to ten`);
 // alert("Your number of " + myNum + " is greater than or equal to ten");
}








