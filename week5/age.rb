puts "Please enter your age"
age = gets.strip.to_i
if age > 25
  puts "You get fair rates on your rental car"
elsif age >= 21
  puts "Congratulations, you can drink (but please only in moderation)"
elsif age >= 18
  puts "Congratulations, you can smoke (but please don't!)"
else
  puts "Sorry, you aren't allowed to do much yet"
end