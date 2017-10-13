require 'sinatra'
require 'sinatra/activerecord'
require './models'

set :database, {adapter: "sqlite3", database: "codewars.sqlite3"}
#set :database, "sqlite3:codewars.sqlite3"

before do 
  @title = "Geo Searcher"
end

get '/' do
  erb :home
end

get '/roster' do
  p $roster
  erb :roster
end

get '/profile/:id' do
  p params[:id]
  @person = $roster.find{|x| x[:slack] == params[:id]}
  erb :profile
end



