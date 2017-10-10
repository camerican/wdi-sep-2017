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



