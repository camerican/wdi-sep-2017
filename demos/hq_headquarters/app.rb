require 'sinatra'
require 'sinatra/activerecord'
require 'sqlite3'
require './models'

set :database, {adapter: 'sqlite3', database: 'hq.sqlite3'}

get '/' do
  @questions = Question.all
  erb :home
end

get '/questions/new' do
  erb :new_question
end

post '/questions' do
  "Congrats, you reached post questions!" + params.to_s
end