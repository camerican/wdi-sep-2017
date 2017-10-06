class Dinosaur
  def initialize( name )
    @name = name
    puts "I am #{@name}, hear me ROAR!"
  end
end

my_dino = Dinosaur.new("Triceratops")


#### User

class User
  # attr_reader :first # getter
  # attr_writer :last # setter
  attr_accessor :first, :last
  @@population = 0
  def initialize( first, last )
    @first = first
    @last = last
    @@population += 1
  end
  ## getter for first
  # def first   
  #   @first
  # end
  ## setter for first
  # def first=(first)
  #   @first = first
  # end 
  # def last
  #   @last
  # end
  # def last=(last)
  #   @last = last
  # end
  def full_name
    "#{@first} #{@last}"
  end
  def self.population
    @@population
  end
end

$person1 = User.new("Cam","Crews")
$person2 = User.new("Mikey","Lane")

puts person2.full_name
