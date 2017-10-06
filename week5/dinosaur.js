// ES5 version
function Dinosaur(name){
  this.name = name;
  console.log(`I am ${name} hear me ROAR!`);
}

var myDino = new Dinosaur("Triceratops");



// User
function User(first, last){
  User.population = (User.population || 0) + 1;
  this.first = first;
  this.last = last;
}
User.prototype.fullName = function(){
  return `${this.first} ${this.last}`
};


var person1 = new User("Cam","Crews");
var person2 = new User("Mikey","Lane");


console.log( person2.fullName() );











// ES6 class version
class Dinosaur{
  constructor(){
    console.log("ROAR");
  }

}