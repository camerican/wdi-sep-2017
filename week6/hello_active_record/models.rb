
class User < ActiveRecord::Base
  has_many :user_groups
  has_many :groups, through: :user_groups

  # payment relationships
  has_many :payments_made, foreign_key: :payer_id, class_name: "Payment"
  has_many :payments_received, foreign_key: :payee_id, class_name: "Payment"

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
  belongs_to :payer, class_name: "User"
  belongs_to :payee, class_name: "User"
end

class Group < ActiveRecord::Base
  has_many :user_groups
  has_many :users, through: :user_groups
end
class UserGroup < ActiveRecord::Base
  belongs_to :user
  belongs_to :group   
end

