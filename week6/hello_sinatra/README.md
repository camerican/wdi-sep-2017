# Our First Sinatra Project

We created the project folder and then ran touch:

`touch Gemfile app.rb`

## Gemfile

Let's set our Gemfile up to include Sinatra for our project:

```
source 'http://rubygems.org'

gem 'sinatra'
```

Now we can run `bundle install`


## app.rb

Let's require the sinatra library.

`require 'sinatra'`

And now let's create a route where we can receive some web content from.

```
get '/' do
	"Hi!!!!!"
end
```


