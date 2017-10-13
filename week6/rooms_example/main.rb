require 'sinatra'
require 'sinatra/activerecord'
require './models'

set :database, {adapter: "sqlite3", database: "rooms.sqlite3"}

get '/' do
  @rooms = Room.all
  erb :rooms
end


get '/room/:id' do
  @room = Room.find(params[:id])
  erb :room
end