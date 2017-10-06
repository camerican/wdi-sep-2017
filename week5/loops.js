// JavaScript Loops
let max = 10;
for(let i=0;i<max;i++){
  console.log( i );
}


const arr = ["Tacos","Chicken","Pizza"];

for(let i=0; i<arr.length; i++){
  console.log(i, arr[i]);
}

arr.forEach(function(food,i){
  console.log(i, food);
});


while( lunch = arr.pop() ) {
  console.log( "I'm eating: " + lunch );
}



