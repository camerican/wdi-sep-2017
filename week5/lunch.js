
const options = ["Thai Sliders","Bon Chon","Jubiliee"];

function lunch( menu ){
  return menu[Math.floor(Math.random() * menu.length)];
}

console.log( "I am eating", lunch( options ) );