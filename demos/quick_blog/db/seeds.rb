# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
[['camerican',  'testtest', 'lame1@nowhere.net'],
 ['joedirt',    'testtest', 'lame2@somewhere.com'],
 ['ro',         'testtest', 'idont@care.com']].each do |(user,password,email)|
  User.create!(username: user, password: password, email: email)
 end

Category.create!([
 { name: "Cool" },
 { name: "Lame"}
])

Post.create!([
  {
  title: "HQ is okay",
  category_id: 2,
  user_id: 1
  },{
  title: "I like HQ",
  category_id: 1,
  user_id: 1
  },{
  title: "Not impressed",
  category_id: 2,
  user_id: 1
  }
])
