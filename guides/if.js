
var username = "cam"
 ,  password = "tacos"
 ,  submittedUsername = prompt("Tell us your username")
 ,  submittedPassword = prompt("Tell us your password")
 ;

if( username == submittedUsername && password == submittedPassword ) {
  alert("Welcome!");
} else {
  location.assign("http://disney.com");
}

var x = 4;
// Ternary operator - inline if
// [Conditional] ? [value if true] : [value if false]
console.log( "x is " + (x % 2 ? "odd" : "even" ) );

var message;
if( x % 2 ) {
  message = "odd";
} else {
  message = "even";
}
console.log( "x is " + message );
