
class User < ActiveRecord::Base
  # to do: add in a user method...
  def kevin
    self.first + " " + self.last + " (" + self.github + ")"
  end
end
class Payment < ActiveRecord::Base
end

