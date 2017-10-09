const roster = ["Kevin", "Lisa", "Mahima", "Jack", "Valerie", "Christy", "Joan", "Veronica", "Vikki", "Daniel", "Mikey", "Don", "John", "Sherill", "Sophie", "Michael", "Boony", "Elise"]
    , teams = [[],[],[]];

// pull people from the roster array and assign to teams

let draftPosition = 0;
while( roster.length ) {
  // get a random number from the array
  let randomIndex = Math.floor(Math.random() * roster.length)
    , [draftedPerson] = roster.splice(randomIndex,1);
  teams[draftPosition % teams.length].push(draftedPerson);
  draftPosition++; // move to next draft position
}

teamNames = ["DOMinators", "Team SASS", "ECMAniacs"];