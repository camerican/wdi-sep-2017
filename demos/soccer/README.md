# Soccer Rails Demo

## Getting started
```
rails new soccer
cd soccer
rails g scaffold team name:string
rails g scaffold position name:string
rails g scaffold player first_name:string last_name:string number:integer team:references position:references
```

Now, we'll run `rails db:migrate`

Then we'll create our seed file....

```
# db/seeds.rb
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
```

And we'll run `rails db:seed`

Let's fix up our models...   Because we used `references` in our player scaffold, we got `belongs_to` method calls played in the `player.rb` model for free.  We'll have to add in the `has_many` relationships within the `team.rb` and `position.rb` models.

```ruby
# models/team.rb
class Team < ApplicationRecord
  has_many :players
end

# models/position.rb
class Position < ApplicationRecord
  has_many :players
end
```

## Adding a home controller

We should probably set up our homepage...  let's generate a home controller to handle that.  Other names for this might be `static` or `miscellaneous` or `general`...  it will handle all the basic requests that aren't nested under logical models.

```
rails g controller home
```

And in our `routes.rb` file, let's route requests:

```
# config/routes.rb
get '/' => 'home#index', as: 'root'
# or as a shortcut:
root 'home#index'
```

We can then start our server up...  `rails server` or `rails s` for short.

And we'll want to customize our templates to display our data in the desired way.

