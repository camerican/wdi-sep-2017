require 'dotenv/load'
require 'sendgrid-ruby'
require 'sinatra'
# require 'eventful_api'
# to do: require 'sengrid'
include SendGrid

before do
  @class = ""
end


# EventfulApi.configure do |config|
#   config.application_key = ENV['EVENTFUL_API_KEY']
#   config.consumer_key = ENV['EVENTFUL_OAUTH_KEY']
#   config.consumer_secret = ENV['EVENTFUL_OAUTH_SECRET']
# end


get '/events' do

end
get '/' do
  @class = "home"
  erb :home
end
get '/warriors' do
  erb :roster
end  
get '/about' do
  erb :about
end
get '/help' do
  @class = "help"
  erb :help
end
post '/help' do

  from = Email.new(email: params["email"])
  to = Email.new(email: 'cam@nycda.com')
  subject = "Codewars Inquiry (From #{params["name"]})"
  content = Content.new(type: 'text/plain', value: params["issue"])
  mail = Mail.new(from, subject, to, content)

  sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
  response = sg.client.mail._('send').post(request_body: mail.to_json)
  puts response.status_code
  puts response.body
  puts response.headers

  redirect '/'
end
get '/profile/:id' do
  @id = params[:id]
  erb :profile
end
