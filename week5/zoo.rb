
## Create a zoo class that has an array of exhibits
class Zoo
  attr_reader :name
  attr_accessor :exhibits
  def initialize(name)
    @name = name
    @exhibits = []
  end
end

## Have an animal class, and a bunch of specific animals
class Animal
  attr_reader :name, :limbs
  def initialize(name,limbs)
    @name = name
    @limbs = limbs
  end
  def talk
    puts "I am a boring animal with #{@limbs} limbs"
  end
end

class Cat < Animal
  def initialize(name)
    super(name, 4)
  end
  def talk
    puts "Meeoooowww"
  end
end

class Elephant < Animal
  def initialize(name)
    super(name,4)
  end
end
  


barbar = Elephant.new("Barbar")
simba = Cat.new("Simba")
simba.talk
barbar.talk
zoo = Zoo.new "Bronx Zoo"
zoo.exhibits
zoo.exhibits.push barbar, simba




def fibonacci(x)
  return 1 if x < 2
  return fibonacci(x-1) + fibonacci(x-2)
end





