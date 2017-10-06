


function Zoo(name){
  this.name = name;
  this.exhibits = [];
}


function Animal(name, limbs){
  this.name = name;
  this.limbs = limbs;
}
Animal.prototype.talk = function(){
  console.log(`I am a boring animal with ${this.limbs}`);
};

function Cat(name){
  Animal.call(this, name, 4);
}
Cat.prototype.talk = function(){
  console.log( "Meeoooowww");
};

function Elephant(name){
  Animal.call(this, name, 4);
}


