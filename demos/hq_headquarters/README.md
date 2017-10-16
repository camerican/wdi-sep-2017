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
