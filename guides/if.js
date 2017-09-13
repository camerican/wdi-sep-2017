
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