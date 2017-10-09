require 'sinatra'
require 'geolocater'
require 'resolv'

before do
  @title = "Geo Searcher"
end

get '/' do
  <<-HTMLOUT
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>#{@title}</title>
  </head>
  <body>
  <h1>Geo Searcher</h1>
  <p>Please enter a web address to look for.</p>
  <form method="post" action="/search">
  <label for="address">Web Address</label>
  <input name="address" />
  </form>
  </body>
  </html>
HTMLOUT
end

post '/search' do
  ip_address = Resolv.getaddress(params[:address])
  results = Geolocater.geolocate_ip(ip_address)
  <<-HTMLOUT
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>#{@title}</title>
</head>
<body>
  <p>Your site #{params[:address]} has an IP Address of #{ip_address} and is located in #{results["city"]}, #{results["region_code"]}</p>
</body>
</html>
HTMLOUT
end