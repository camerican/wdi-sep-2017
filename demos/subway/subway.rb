
class Subway
  # attr_reader :current_stop
  def initialize(stations)
    @stations = stations
    @current_stop = 0
  end
  def current_stop
    if @current_stop >= 0 && @current_stop < @stations.length
      @stations[@current_stop]
    else
      "Sorry you've been derailed"
    end
  end
  def go_forward
    @current_stop += 1 if @current_stop < @stations.length - 1
    puts current_stop
  end
  def go_backward
    @current_stop -= 1 if @current_stop > 0
    puts current_stop
  end
end

# class FourTrain < Subway
#   def initialize
#     super nil
#     @stations = ['Fulton','City Hall','Union Square','Grand Central']
#   end
# end


## using our class
my_subway = Subway.new(['Fulton','City Hall','Union Square','Grand Central'])

# four_train = FourTrain.new
