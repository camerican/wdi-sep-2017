# Rails UJS Demo w/ dynamic updating

In this demo we're showing how we can use the Rails UJS library to send a remote request to update a resource and then update the webpage based upon the response, without a full page reload.

The example we'll be using will pertain to a school environment where we assign users to a course.  Users can have many courses and a course can have many users.

First, we'll make sure we have devise in our Gemfile and `bundle` install.  We'll then run `rails g devise:install` to set devise up in the project.  We'll go ahead and then add in some flash messaging into our `app/views/layouts/application.html.erb`:

```html
<p class="notice"><%= notice %></p>
<p class="alert"><%= alert %></p>
```

## Model generation

Next, we'll generate our models and tweak the resultant migrations:

```bash
rails g devise user fname:string lname:string username:string role:integer
rails g model course name:string description:text instructor:references
rails g model course_attendee course:references user:references
```

We'll tweak the course migration so that we have a database-enforced foreign-key relationship between a column called `instructor_id` and the `users` table.  While we could have gotten around this by calling the column `user_id` or only defining the foreign key at the ORM level, it's desirable to both enforce foreign keys at the database level for referential integrity AND to have descriptive column names that describe the nature of the relationship between tables.

```ruby
class CreateCourses < ActiveRecord::Migration[5.1]
  def change
    create_table :courses do |t|
      t.string :name
      t.text :description
      t.references :instructor, index: true, foreign_key: false

      t.timestamps
    end
    add_foreign_key :instructor, :user, column: 'instructor_id'
  end
end
```

With that, we should be good to run our migration...  `rails db:migrate`

## Defining Model relationships

Now we can define the relationships between our models. We'll also add an `enum` on the role for our user.rb model.

```ruby
# app/models/user.rb
class User < ApplicationRecord
  has_many :course_attendees
  has_many :courses, through: :course_attendees

  enum role: [:student, :instructor, :staff]
  # .. devise etc below
end
# app/models/course.rb
class Course < ApplicationRecord
  belongs_to :instructor, class_name: 'User'
  has_many :course_attendees
  has_many :students, through: :course_attendees, source: :user
end
# app/models/course_attendee.rb
class CourseAttendee < ApplicationRecord
  belongs_to :course
  belongs_to :user
end
```

Cool, now it's time to get some sample data going.

## Seed Data

We're going to do a few funky things in our seeds.rb file to show how flexible ruby is.  Rather than the traditional array of hashes being passed directly into the create method, we'll start with an array of arrays with just the values (and not the keys).  This cuts down on the verbosity of repeated keys, and the expense of clarity of where the key-value pairs line up.  Because we only have six columns here, it's not too hard to keep track of the values lining up...

We then iterate through the array of arrays... and we destructure the array into six varaibles named for the value it represents.  We then use those variables to create a hash and pass it into the User.create method.

```ruby
[
  ["Cam","Crews","camerican","cam@nycda.com","testtest", :instructor],
  ["Lisa","Mae","lisamae","lisa@maedae.com","testtest", :student],
  # cont...
].each{|(fname,lname,username,email,password,role)| User.create( fname: fname, lname: lname, username: username, email: email, password: password, role: role) }
```

We use another kinda cool technique in the add courses area where we, rather than try to remember the ID of the instructor, just look it up in ActiveRecord based on the user's username.

```ruby
[
  ["Web Dev Intensive","Students embark on a...",
  User.find_by(username: "camerican")],  #<------
  # cont...
].each{|name,description,instructor| Course.create name: name, description: description, instructor: instructor }
```

Lastly, for values that repeat a lot, we can try merging with an existing hash.  We're assigning a bunch of students to the WDI course, so it might be easier to just have a constant set to be a hash refering to the WDI course and then merging in the specific user we want to add:

```ruby
WDI = {course: Course.find_by(name: "Web Dev Intensive")}
CourseAttendee.create([
  WDI.merge( user: User.find_by(username: 'vkirby002') ),
  WDI.merge( user: User.find_by(username: 'mahima') ),
  # cont...
])
```
