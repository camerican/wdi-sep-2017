
class User < ActiveRecord::Base
  has_many :user_groups
  has_many :groups, through: :user_groups

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

class Group < ActiveRecord::Base
  has_many :user_groups
  has_many :users, through: :user_groups
end
class UserGroup < ActiveRecord::Base
  belongs_to :user
  belongs_to :group
end

