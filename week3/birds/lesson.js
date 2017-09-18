// Maybe we want to build a Lesson object
// that has a type and a name...
function Lesson( name, type ) {
  this.name = name;
  this.type = type || "lecture";
  /*
   * Determines the number of expected minutes for a
   * lesson instance...
   */
  this.expectedDuration = function(){
    if( this.type == "workshop" ) {
      return 180;
    } else {
      return 60;
    }
  }
}

const lessons = [
  new Lesson( "Object Oriented JavaScript" ),

  new Lesson( "Object Oriented JavaScript Problems",
 "workshop")
];


// and then maybe each lesson has an expected duration
// with lectures taking 1hr,
//   and workshops taking 3hr


// { 
//   monday: [
//     {type: "lecture",

//      name: "Object Oriented JavaScript"},

//     {type: "workshop",

//      name: "Object Oriented JavaScript Problems"}
//   ],

//   tuesday: [
//     {type: "workshop",

//      name: "Object Oriented JavaScript Problems"}
//   ],

//   wednesday: [
//     {type: "workshop",

//      name: "Jukebox Starter Kit"
//     }
//   ],

//   thursday: null,

//   friday: [
//     {type: "lecture",

//      name: "jQuery Basics"},

//     {type: "lecture",

//      name: "APIs"}
//   ]
// }