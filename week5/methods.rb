# add 5 to the argument given
def add_five( n )
  n + 5
end

puts addFive(4) # 9

# multiply the argument given by 15
def multiply_by_fifteen( n )
  n * 15
end

puts multiplyByFifteen( 3 ) # 45

# perform a mathematical operation using 4 integer and/or float arugments

def distance( x1, y1, x2, y2 )
  ((x1 - x2)**2 + (y1 - y2)**2)**0.5
end

# prints the argument given four times

def say_four( str )
  puts str * 4
end


# prints an uppercase version of the argument given
def shout( str )
  puts str.upcase
end


