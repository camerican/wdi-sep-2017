require 'sinatra'
require 'geolocater'
require 'resolv'
require './roster'

before do 
  @title = "Geo Searcher"
end

get '/' do
  erb :home
end

post '/search' do
  p params
  @ip_address = Resolv.getaddress(params[:address])
  results = Geolocater.geolocate_ip(@ip_address)
  @city = results["city"]
  @state = results["region_code"]
  erb :search
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

# $roster.each do |person|
#   get "/" + person[:slack] do
#     "Hi I'm #{person[:first]}"
#   end
# end





