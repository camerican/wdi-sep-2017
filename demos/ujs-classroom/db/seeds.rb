# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

## Add people
[
  ["Cam","Crews","camerican","cam@nycda.com","testtest", :instructor],
  ["Lisa","Mae","lisamae","lisa@maedae.com","testtest", :student],
  ["Kevin","Gallager","kgallagher","kev@chelsea.com","testtest", :student],
  ["Mahima","Tuladhar","mahima","mahima@comcast.net","testtest", :student],
  ["Valerie","Kirby","vpkirby002","vk@astros.com","testtest", :student],
  ["Jimmy","Chandler","jchandler","jimmy.chandler@nycda.com", :instructor],
  ["Cristy","Kasuma","kasuma","christy@kasuma.net","testtest", :student],
  ["Sam","Lubin","sam","sam.lubin@nycda.com","testtest", :staff]
].each{|(fname,lname,username,email,password,role)| User.create( fname: fname, lname: lname, username: username, email: email, password: password, role: role) }

## Add courses
[
  ["Web Dev Intensive","Students embark on a three month journey through the world of HTML, CSS, JavaScript, and Ruby in this epic technical safari.",User.find_by(username: "camerican")],
  ["UI/UX","Learn the structure of designing user interfaces in this evening offering",User.find_by(username: "jchandler")]
].each{|name,description,instructor| Course.create name: name, description: description, instructor: instructor }

## Initial assignments
WDI = {course: Course.find_by(name: "Web Dev Intensive")}
CourseAttendee.create([
  WDI.merge( user: User.find_by(username: 'vkirby002') ),
  WDI.merge( user: User.find_by(username: 'mahima') ),
  WDI.merge( user: User.find_by(username: 'kgallagher') ),
  WDI.merge( user: User.find_by(username: 'lisamae') ),
])


