var num = 3;

function isOdd(){
  return Boolean(num % 2);
}
num = {
  name: "Joe",
  age: 23
};
console.log( num + " is odd? " + isOdd() );