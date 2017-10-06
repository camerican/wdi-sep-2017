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

shout("Hello")

def get_max( arr )
  # go over each item in the array, see if it's bigger than the biggest number we've seen previously
  biggest = nil
  arr.each do |num|
    if num > biggest
      biggest = num
    end
  end
  # return that number
  num
end


get_max( [12,3,4,2,10] )



def hash_builder( arr1, arr2 )
  my_hash = {}
  arr1.each_with_index do |val,i|
    my_hash[val] = arr2[i]
  end
  my_hash
end

hash_builder( [:herrari, :mustang], ["Spider","Saleen"] )





def maxnum(array)
  array.sort.last
end


puts "my max is... " + maxnum( [100, 200, 150, 125, 230] )





def hashzip(a,b)
  hash = {}
  a.length.times do |i|
    hash[a[i]] = b[i]
  end
  a.each_with_index do |val,index|
    hash[val] = b[index]
  end
  hash
end

keys = [:monday, :tuesday, :wednesday]
values = ["Salad","Burger","Smoked Salmon"]

hashzip( keys, values )



brands = [:toyota, :tesla]
models = ["Prius","Model S"]

def combine(keys,values)
  result = {}
  keys.each_with_index do |value, index|
    result[value] = values[index]
  end
  result
end

combine( brands, models )





###  Hash zip 

### method accepting two arrays, that returns a hash
### consisting of key value pairs

### with the first array being the keys and the second
### array being the values

days = [:monday, :tuesday, :wednesday, :thursday, :friday]
lunch = ["Torta","Pizza","Salad","Burrito","Taco"]

# def hash_zip( keys, values )
#   result = {} # Hash.new
#   keys.each_with_index do |key, index|
#     result[key] =  values[index];
#   end
#   result
# end

# def hash_zip( keys, values )
#   result = {} # Hash.new
#   keys.length.times do |index|
#     result[keys[index]] = values[index];
#   #result.store(keys[index], values[index])
#   end
#   result
# end

def hash_zip(keys, values)
  keys.zip(values).to_h
end






















