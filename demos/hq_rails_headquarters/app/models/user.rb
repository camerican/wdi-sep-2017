class User < ApplicationRecord
  def full_name
    "#{first} #{last}".strip
  end
end
