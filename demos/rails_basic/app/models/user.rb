class User < ApplicationRecord
  def full_name
    "#{first_name} #{last_name}".strip
  end
end
