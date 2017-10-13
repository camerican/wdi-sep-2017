
class User < ActiveRecord::Base
  def full_name
    self.first + " " + self.last
  end
  def kevin
    self.full_name + " (" + self.github + ")"
  end
end
class Payment < ActiveRecord::Base
end

