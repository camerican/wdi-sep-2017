
class User < ActiveRecord::Base
  def full_name
    self.first + " " + self.last
  end
  def kevin
    self.full_name + " (" + self.github + ")"
  end
  def self.generate_options
    result = ""
    self.all.each do |person|
      result << <<-HEREDOC
      <option value="#{person.id}">#{person.full_name}</option>
      HEREDOC
    end
    result
  end
end
class Payment < ActiveRecord::Base
end

