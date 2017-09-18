

// User Constructor
function User( fname, lname, username ) {
  this.fname = fname;
  this.lname = lname;
  this.username = username;
}
User.prototype = {
  fullname: function(){
    return `${this.fname} ${this.lname}`;
  }
};

// Admin Constructor inherit from User Constructor
function Admin( ) {
  let args = Array.from(arguments);
  this.admin = args.slice(-1);
  User.apply(this,args.slice(0,-1));
}
Admin.prototype = Object.create(User.prototype);


let cam = new Admin("Cam","Crews","camerican", true);






//Admin.prototype.prototype = User.prototype;


cam.fullname();

