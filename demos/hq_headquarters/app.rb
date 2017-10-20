require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra/flash'
require 'carrierwave'
require 'carrierwave/orm/activerecord'
require 'sqlite3'
require './models'

enable :sessions
set :database, {adapter: 'sqlite3', database: 'hq.sqlite3'}
#Configure Carrierwave
CarrierWave.configure do |config|
  config.root = File.dirname(__FILE__) + "/public"
end


before do
  current_user
end

# login protecting routes
before ['/questions/new','/questions'] do
  redirect '/' unless @current_user
end

get '/' do
  @questions = Question.all
  erb :home
end

get '/profile' do
  erb :profile
end

get '/signup' do
  erb :signup
end

post '/signup' do
  user = User.new(
    first: params[:first],
    last: params[:last],
    slack: params[:slack],
    password: params[:password],
    photo: params[:photo]
  )
  if user.save
    flash[:message] = "Cool, you registered successfully"
    redirect '/'
  else
    flash[:message] = "Ooops, your account couldn't be created"
    redirect back
  end
end

post '/profile' do
  p params
  @current_user.photo = params[:photo]
  if @current_user.save
    flash[:message] = "Cool, nice photo!"
  else
    flash[:message] = "Sorry, your photo could not be saved at this time"
  end
  # to do: process profile data
  redirect back
end

get '/questions/new' do
  #@quizes = Quiz.all
  erb :new_question, locals: {quizes: Quiz.all}
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
    flash[:message] = "Welcome to the coolest site on the internet.  (almost)"
    redirect '/'
  else
    # uh oh, user and pass didn't match
    flash[:message] = "Ooops, did you forget your account information?  I don't recognize that user/pass combo."
    redirect back
  end
  # we'll check the password submitted
  # against the one we have in the DB
  # if they match, the user is allowed in
  # and logged in as that user
  # otherwise, send error message
end

get '/logout' do
  session[:user_id] = nil
  flash[:message] = "You're logged out. Cool!"
  redirect '/'
end

def current_user
  @current_user = User.find(session[:user_id]) if session[:user_id]
end



