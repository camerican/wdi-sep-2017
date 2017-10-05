

// User Constructor
// function User( fname, lname, username ) {
//   this.fname = fname;
//   this.lname = lname;
//   this.username = username;
// }
function User( options ) {
  this.fname = options.fname;
  this.lname = options.lname;
  this.username = options.username;
}

User.prototype = {
  fullname: function(){
    return `${this.fname} ${this.lname}`;
  }
};

// Admin Constructor inherit from User Constructor
function Admin( options ) {
  // let args = Array.from(arguments);
  this.admin = option.admin;
  User.call(this, options);
}
Admin.prototype = Object.create(User.prototype);


let cam = new Admin({
  fname: "Cam",
  lname: "Crews",
  username: "camerican", 
  admin: true
});






//Admin.prototype.prototype = User.prototype;


cam.fullname();

