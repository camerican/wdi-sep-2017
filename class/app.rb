require 'geolocater'
require 'rainbow'

puts "Please enter a web address to search for"

web_address = gets.strip

result = `ping -c 1 #{web_address}`

# p result

ip_address = /\(([^\)]+)\)/.match(result)[1]

# p ip_address

result = Geolocater.geolocate_ip(ip_address)

# city
# region_code

puts "The Website " + Rainbow(web_address).orange + " is located in " + Rainbow(result["city"]).red + ", " + Rainbow(result["region_code"]).green
 