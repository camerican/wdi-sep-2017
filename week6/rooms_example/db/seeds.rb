User.create([
  {first: "Danny", last: "Bobadilla", email: "danny@cool.net"},
  {first: "Joan", last: "Borbon", email: "joan@fire.com"},
  {first: "Cam", last: "Crews", email: "cam@wind.net"}
])

BlogPost.create([
  {user_id: 1, title: "I love Sinatra", body: "So post. cuz you're so the other one it's looking for so it's looking for post but that's pretty imprssive."},
  {user_id: 3, title: "I'm sorry", body: "I made a bad typo.  :'("},
  {user_id: 3, title: "Here's another post", body: "It's Friday!"}
])

Profile.create([
  {user_id: 1, title: "Sir Danny", bio: "N/A"},
  {user_id: 2, title: "Wam Bam I'm The Man", bio: "Whatever."}
])

Room.create([
  {name: "Prospect"},
  {name: "Central"},
  {name: "Madison"}
])

UserRoom.create([
  {user_id: 1, room_id: 1},
  {user_id: 2, room_id: 1},
  {user_id: 3, room_id: 1},
  {user_id: 1, room_id: 2}
])