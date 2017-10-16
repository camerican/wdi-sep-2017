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
               # ["body", "option1", "option2"]
  accepted_keys = %w(body option1 option2 option3 correct_answer)
  question = Question.new params.select{|k| accepted_keys.include? k}
  # question = Question.new {
  #   body: params[:body],
  #   option1: params[:option1],
  #   option2: params[:option2],
  #   option3: params[:option3],
  #   correct_answer: params[:correct_answer]
  # }
  question.save
  redirect '/'
end