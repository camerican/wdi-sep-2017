# Codewars Leaderboard

This our NYCDA codewards leaderboard site.  A place to list the daily challenges and see how many points each of us have accumulated.  Also, we'll get to check in with other cohorts and how they're doing.

## Sitemap

| URI | Template | Description |
| --- | --- | --- |
| / | home.erb | Homepage |
| /warriors | roster.erb | Our Roster of Competitors |
| /about | about.erb | About the Competition | 
| /help | help.erb | Help Page w/ Contact Form |
| /profile/:id | profile.erb | Profile Page |

## Creation Steps

```bash
mkdir codewars
cd codewars
touch README.md app.rb Gemfile
mkdir views public
cd views
touch home.erb roster.erb about.erb help.erb profile.erb 
```

## Gemfile

```
source 'http://rubygems.org'

#ruby 2.4.2

gem 'sinatra'
gem 'sendgrid-ruby'
```

And now we can `bundle install`.  If you don't have bundle recognized, make sure you `gem install bundler`.

## Adding environment variables

### With dotenv

First, add in the dotenv gem to our gemfile:

```
gem 'dotenv'
```

and bundle install again.

Next we create a `.env` file by touching it out.  We add in our API key and the value pair into that file:

```
SENDGRID_API_KEY=1402374247238473024324324
```

While we're at it, let's add `.env` into .gitignore so that we don't automatically add the `.env` file when we do a `git add .`.

```
# .gitignore
.env
.DS_Store
```

We added .DS_Store since that's an annoying Mac file that gets everywhere (it's a helper file to load thumbnail images and meta data on folder contents).

We lastly added `require 'dotenv/load'` into our main application.

Now we can access `ENV["SENDGRID_API_KEY"]`

