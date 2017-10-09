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



## Building a more advanced project

Rather than having a single route, we're most likely going to have multiple "pages" that a user can go to.  We're also probably going to want to have multiple templates, one for each route to point to.

Let's decide which routes we want to have for our project...  We can come up with a list of the routes and the templates that go along with them.

How about our page has 5 pages:

| Route | Template | Description |
| --- | --- | --- |
| / | home.erb | Home page |
| /about | about.erb | About Us Page |
| /contact | contact.erb | Contact Us |
| /roster | roster.erb | Roster |
| /profile/:id | profile.erb | Profile |

If we've had these pages, we could build out our app.rb to serve each route:

```ruby
get '/' do
	erb :home
end

get '/about' do
	erb :about
end

get '/contact' do
	erb :contact
end

get '/roster' do
	erb :roster
end

get '/profile/:id' do
	@id = params[:id]
	erb :profile
end
```

We'd want to create the 5 erb files listed above and put them in a `views` directory.  We could then also create a layout.erb file, which would apply a consistent appearance for each page.

### layout.erb

For the layout.erb, the most important thing is to `yield` back to the erb file being requested.  Our layout file will look something like:

```
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>
	<%= yield %>
</body>
</html>
```

The yield statement will be replaced by the contents of the erb file of the requested page (i.e. /about or /contact).

### Public assets

For things like `css`, `js`, or images, we'd be able to place these files within a `public` directory.  The public directory is invisible to the outside world; everything inside of public is accessible through the web application server.

So we could create folders for `css`, `js`, and `img` within the public folder of our application:

```
mkdir public
mkdir public/css public/js public/img
```

Let's say we create a `default.css` file within the `public/css` directory... within the `layout.erb` file we would want to have a `link` tag that references it at the following location:

```html
<link ref="stylesheet" href="/css/default.css" />
```





