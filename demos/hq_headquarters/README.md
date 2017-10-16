# HQ Headquarters

Our HQ Trivia playing system.  We're going to log the questions and our answers to them.

### Getting started

We scaffolded out our questions with the following terminal commands:

```bash
touch README.md app.rb Gemfile Rakefile
mkdir public views
mkdir public/css public/js
touch public/css/default.css
touch views/home.erb views/question.erb
```

### Gemfile

We'll be using the following gems, specified in our Gemfile:

```
source 'http://rubygems.org'

gem 'sinatra'
gem 'sqlite3'
gem 'sinatra-activerecord'
gem 'rake'
```

And now we'll `bundle` install.

### Rakefile

To setup our Rakefile (which will help with running migrations) we'll use the following:

```
require 'sinatra/activerecord/rake'
require './app'
```

This loads the rake tools for sinatra activerecord.. and then our application.

### Initial boilerplate for starting our app.rb

```ruby
# app.rb
require 'sinatra'
require 'sinatra/activerecord'
require 'sqlite3'

set :database, {adapter: 'sqlite3', database: 'hq.sqlite3'}

get '/' do
  erb :home
end
```

### Create Migration

We run the following command to run our first migration:

```
rake db:create_migration NAME=initial_schema
```

### Editing the migration

We now want to build our schema for the three tables:


```
users
--
id (int, PK)
first (string)
last (string)
slack (string)

questions
--
id (int, PK)
body (text)
option1 (string)
option2 (string)
option3 (string)
correct_answer (int)

guesses
--
id (int, PK)
user_id (int, FK)
question_id (int, FK)
guess (int)
```

### Create migration

We created our migration with the following:

```ruby
class InitialSchema < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :first
      t.string :last
      t.string :slack
    end
    create_table :questions do |t|
      t.text :body
      t.string :option1
      t.string :option2
      t.string :option3
      t.integer :correct_answer
    end
    create_table :guesses do |t|
      t.references :user, foreign_key: {to_table: :users}, index: true
      t.references :question, foreign_key: {to_table: :questions}, index: true
      t.integer :guess
    end
  end
end
```

And then ran: `rake db:migrate`

### Building our models

We'll next want a models.rb file in our project root which we'll use to extend from activerecord and define the relations between tables.

`touch models.rb`

And then let's require it in our `app.rb`

Let's have our models inherit from the ActiveRecord::Base:

```ruby
class User < ActiveRecord::Base
end
class Question < ActiveRecord::Base
end
class Guess < ActiveRecord::Base
end
```

We'll then touch our a seeds file: `touch db/seeds.rb`

### Loading our seed data

`rake db:seed`


### Define ActiveRecord Associations

User has many guesses
Guess belongs to a user

Question has many guesses
Guess bleongs to a question

+ a user Has many Questions (through Guesses)
+ a question has many users (through Guesses)


```ruby
class User < ActiveRecord::Base
  has_many :guesses
  has_many :questions, through: :guesses
end
class Question < ActiveRecord::Base
  has_many :guesses
  has_many :users, through: :guesses
end
class Guess < ActiveRecord::Base
  belongs_to :user
  belongs_to :question
end
```

### Allowing the User to add a new Question

We'll create for a form for adding questions.

`touch views/new_question.erb`


