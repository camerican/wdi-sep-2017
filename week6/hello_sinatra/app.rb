require 'sinatra'
require 'geolocater'
require 'resolv'

before do
  @title = "Geo Searcher"
end

get '/' do
  erb :home
end

post '/search' do
  @ip_address = Resolv.getaddress(params[:address])
  @results = Geolocater.geolocate_ip(@ip_address)
  erb :search
end