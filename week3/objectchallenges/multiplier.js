/* Create an object called Multiplier
 with two methods: multiply and getCurrentValue. 
 multiply should initially return the number supplied * 1 and from then on whatever the current value is times the number supplied. getCurrentValue should return the last answer returned from multiply. */
function Multiplier( ) {
  this.currentValue = 1;
  // this.multiply = function(){};
}
Multiplier.prototype.multiply = function(num){
  // this.currentValue = this.currentValue * num;
  this.currentValue *= num;
  return this.getCurrentValue();
};
Multiplier.prototype.getCurrentValue = function(){
  return this.currentValue;
};


// When we run it, below:

const myMult = new Multiplier(); // build a new multiplier using the construtor
myMult.getCurrentValue(); //1
myMult.multiply(4);       // multiply currentValue by 4
myMult.getCurrentValue(); //4
myMult.multiply(2);       // multiply currentValue by 2
myMult.getCurrentValue(); //8