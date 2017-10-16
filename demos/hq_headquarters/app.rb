require 'sinatra'
require 'sinatra/activerecord'
require 'sqlite3'
require './models'

enable :sessions
set :database, {adapter: 'sqlite3', database: 'hq.sqlite3'}

before do
  current_user
end

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

# handle login -- check if user & pass match
post '/login' do
  # first try to find a user with the slack
  # name provided
  user = User.find_by(slack: params[:slack])
  # then, if we did find a user with that slack name,
  if user && user.password == params[:password]
    # a-ok!  let them in, and log them in
    session[:user_id] = user.id
    redirect '/'
  else
    # uh oh, user and pass didn't match
    redirect :back
  end
  # we'll check the password submitted
  # against the one we have in the DB
  # if they match, the user is allowed in
  # and logged in as that user
  # otherwise, send error message
end

get '/logout' do
  session[:user_id] = nil
  redirect :root
end

def current_user
  @current_user = User.find(session[:user_id]) if session[:user_id]
end



