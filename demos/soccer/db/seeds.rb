# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Team.create([
  {name: "Chelsea"},
  {name: "Real Madrid"},
  {name: "Juventus"},
  {name: "New York Red Bulls"},
  {name: "Arsenal"},
  {name: "Red Bulls Saltzburg"},
  {name: "Atletico Madrid"}
])
Position.create([
  {name: "Goalkeeper"},
  {name: "Defender"},
  {name: "Midfielder"},
  {name: "Striker"}
])

Player.create([
  {first_name: "Edin", last_name: "Hazard", number: 10, position_id: 4, team_id: 1},
  {first_name: "Diego", last_name: "Costa", number: 19, position_id: 4, team_id: 7},
  {first_name: "Karim", last_name: "Benzema", number: 9, position_id: 4, team_id: 2 },
  {first_name: "Paulo", last_name: "Dybala", number: 10, position_id: 4, team_id: 3},
])
