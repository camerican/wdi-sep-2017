require 'sinatra'
# to do: require 'sengrid'

get '/' do
  erb :home
end
get '/warriors' do
  erb :roster
end  
get '/about' do
  erb :about
end
get '/help' do
  erb :help
end
post '/help' do
  params.to_s
end
get '/profile/:id' do
  erb :profile
end
