// change into only names
roster.map( c => c.name );

// convert to object of names as keys w/ teams
roster.reduce( (z,c) => {
  z[c.name] = (z[c.name] || []).concat( c.team );
  return z;
}, {} );

// find players that have 3 teams
Object.keys( b ).filter( c => b[c].length == 3 )