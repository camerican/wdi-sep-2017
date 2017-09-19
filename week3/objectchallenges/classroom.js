/* 
Create a prototypical Person object. 
From this object, extend a Teacher object and a Student object.
Each of these objects should have attributes and methods pertinent 
to what they describe. Also create a School object that should be 
able to store instances of students and teachers. Make sure to 
write code afterwards that creates instances of these objects to 
make sure that what you've written works well and you're able to 
store the necessary data in each object.
*/

// create Person constructor accepting firstName and lastName arguments
function Person( firstName, lastName ) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
//  return this.firstName + " " + this.lastName;
}
// create a Teacher constructor accepting an email address argument
function Teacher( firstName, lastName, email ) {
  this.email = email;
  Person.call(this, firstName, lastName);
}
// have the Teacher prototype chain to the Person prototype using Object.create()
Teacher.prototype = Object.create(Person.prototype);
// Teacher -> Person -> Object -> null

// create a Student constructor accepting a cohort argument
function Student( /* firstName, lastName, cohort */ ) {
  // last argument to cohort
  this.cohort = arguments[arguments.length-1]; 
  Person.apply(this, Array.from(arguments).slice(0,2));
}
// have the Student prototype chain to the Person prototype using Object.create()
Student.prototype = Object.create(Person.prototype);

// create a School constructor that initializes a people array which we'll store both students and teachers in
function School( ) {
  this.people = [];
}
// add an addPerson method that accepts a student/teacher/person and adds them to the people array
School.prototype.addPerson = function( person ) {
  this.people.push( person );
  return this; // enables method chaining
}

const nycda = new School();
nycda.addPerson( new Teacher("Cam","Crews","cam@nycda.com")).addPerson( new Student("Jack","Floyd","WDI 2017"));



