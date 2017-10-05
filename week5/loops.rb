# Ruby Loops

# for
for i in 0...10 
  puts i
end

# integer times method
10.times do |i|
  puts i
end

10.times{|i| puts i}

arr = ["Tacos","Chicken","Pizza"]

arr.each do |food|
  puts food
end

arr.each {|food| puts food }

arr.each_with_index do |food,i|
  puts i, food
end

arr.each_with_index {|food,i|
  puts i, food
}

while lunch = arr.pop
  puts lunch
end




# each