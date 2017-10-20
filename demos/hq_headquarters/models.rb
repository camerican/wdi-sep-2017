# Our photo uploader for carrierwave
class PhotoUploader < CarrierWave::Uploader::Base
  storage :file
end

class User < ActiveRecord::Base
  has_many :guesses
  has_many :questions, through: :guesses
  mount_uploader :photo, PhotoUploader
  def full_name
    "#{first} #{last}".strip
  end
  # I need to find all users who don't have a password
  def self.no_password
    self.where(password: nil)
  end
end
class Question < ActiveRecord::Base
  belongs_to :quiz
  has_many :guesses
  has_many :users, through: :guesses
end
class Guess < ActiveRecord::Base
  belongs_to :user
  belongs_to :question
end
class Quiz < ActiveRecord::Base
  has_many :questions
end