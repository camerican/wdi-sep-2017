require 'geolocater'

puts "Please enter a web address to search for"

web_address = gets.strip

result = `ping -c 1 #{web_address}`

p result

ip_address = /\(([^\)]+)\)/.match(result)[1]

p ip_address

# ip_address = Geolocater.ip_lookup(web_address)

p Geolocater.geolocate_ip(ip_address)