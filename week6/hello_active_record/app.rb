require 'sinatra'
require 'sinatra/activerecord'
require './models'

set :database, {adapter: "sqlite3", database: "codewars.sqlite3"}
#set :database, "sqlite3:codewars.sqlite3"

before do 
  @title = "Geo Searcher"
end

# form to create a payment
get '/payment' do
  @roster = User.all
  erb :create_payment
end

get '/' do
  erb :home
end

get '/roster' do
  @roster = User.all
  erb :roster
end

get '/profile/:slack' do
  p params[:slack]
  @person = User.find_by(slack: params[:slack])
  pass unless @person # try to pass onward if we don't have the person
  erb :profile
end



