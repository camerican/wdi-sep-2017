const birds = [
  {
    name: "Black-bellied Whistling-Duck",
    species: "Dendrocygna autumnalis",
    order: "Anseriformes",
    family: "Anatidae",
    image: "https://download.ams.birds.cornell.edu/api/v1/asset/40180501/medium"
  },
  {
    name: "Elf Owl",
    species: "Micrathene whitneyi",
    order: "Strigiformes",
    family: "Strigidae",
    image: "https://download.ams.birds.cornell.edu/api/v1/asset/24921511/1200"
  },
  {
    name: "Masked Booby",
    species: "Sula dactylatra",
    order: "Suliformes",
    family: "Sulidae",
    image: "https://download.ams.birds.cornell.edu/api/v1/asset/24916161/1200"
  },
  {
    name: "Cape May Warbler",
    species: "Setophaga tigrina",
    order: "Passeriformes",
    family: "Parulidae",
    image: "https://download.ams.birds.cornell.edu/api/v1/asset/24912541/1200"
  }
];

// Constructor for birds...

function Bird( name, species, order, family, image ) {
  this.name = name;
  this.species = species;
  this.order = order;
  this.family = family;
  this.image = image;
  // this.htmlOut = function() {
  //   return `<div class="bird">
  //     <span class="name">${this.name}</span>
  //     <img src="${this.image}" />
  //   </div>`;
  // }
}
Bird.prototype.htmlOut = function() {
  return `<div class="bird">
    <span class="name">${this.name}</span>
    <img src="${this.image}" />
  </div>`;
}


let warbler = new Bird(
  "Cape May Warbler",
  "Setophaga tigrina",
  "Passeriformes",
  "Parulidae",
  "https://download.ams.birds.cornell.edu/api/v1/asset/24912541/1200"
);

let bird2 = new Bird(
 "Masked Booby",
 "Sula dactylatra",
 "Suliformes",
 "Sulidae",
 "https://download.ams.birds.cornell.edu/api/v1/asset/24916161/1200"
);

const birds2 = [
  new Bird(
    "Cape May Warbler",
    "Setophaga tigrina",
    "Passeriformes",
    "Parulidae",
    "https://download.ams.birds.cornell.edu/api/v1/asset/24912541/1200"
  ),
  new Bird(
   "Masked Booby",
   "Sula dactylatra",
   "Suliformes",
   "Sulidae",
   "https://download.ams.birds.cornell.edu/api/v1/asset/24916161/1200"
  )
];

// we could use a for loop
for( let i=0; i < birds2.length; i++ ) {
  document.querySelector("main").innerHTML += birds2[i].htmlOut();
}

// or a forEach call on the array of birds



// if( true ) {
//   var madeByVar = 1;
//   let madeByLet = 2;
// }
// console.log(madeByVar); //1
// console.log(madeByLet); // ERROR







