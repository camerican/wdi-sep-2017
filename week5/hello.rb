# 1- Create a variable called name
puts "Please enter your name"
name = gets.strip

puts "Hi #{name}!"

# 2- Set a variable called holidays equal to an array of holidays

# global $ for testing in IRB
$holidays = ["Easter","Thanksgiving","Columbus Day?"]

# 3- Set a variable called holidays_and_dates equal to a hash
#    of holidays (string) and dates (string)

$holidays_and_dates = {"Easter" => "March Something",
                      "Thanksgiving" => "November 28th",
                      "Columbus Day" => "Doesn't matter, we're in school"}
