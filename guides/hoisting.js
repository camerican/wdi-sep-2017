var x = 4;

var logger = function( num, var1, var2 ){
  console.log( `${num}) var1 is ${var1}, var2 is ${var2}`);
}

//console.log( `1) x is ${x}`, `y is ${y}`);
logger(1, x, y);
// x is 4, y is undefined

var y = 5;

//console.log( `2) x is ${x}`, `y is ${y}`);
logger(2, x, y);
// x is 4, y is 5

// the above is rewritten like below:
// var x, y;
// x = 4;

// console.log( `1) x is ${x}`, `y is ${y}`);
// // x is 4, y is undefined

// y = 5;

// console.log( `2) x is ${x}`, `y is ${y}`);
// // x is 4, y is 5







