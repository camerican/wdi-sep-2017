class Dinosaur
  def initialize( name )
    @name = name
    puts "I am #{@name}, hear me ROAR!"
  end
end

my_dino = Dinosaur.new("Triceratops")


#### User

class User
  @@population = 0
  def initialize( first, last )
    @first = first
    @last = last
    @@population += 1
  end
  def full_name
    "#{@first} #{@last}"
  end
  def self.population
    @@population
  end
end

person1 = User.new("Cam","Crews")
person2 = User.new("Mikey","Lane")

puts person2.full_name
