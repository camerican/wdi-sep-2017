require 'geolocater'

puts "Please enter a web address to search for"

web_address = gets.strip
ip_address = Geolocater.ip_lookup(web_address)

p Geolocater.geolocate_ip(ip_address)