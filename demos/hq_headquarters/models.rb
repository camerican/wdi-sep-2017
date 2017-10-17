# Our photo uploader for carrierwave
class PhotoUploader < CarrierWave::Uploader::Base
  storage :file
end

class User < ActiveRecord::Base
  has_many :guesses
  has_many :questions, through: :guesses
  mount_uploader :photo, PhotoUploader
end
class Question < ActiveRecord::Base
  has_many :guesses
  has_many :users, through: :guesses
end
class Guess < ActiveRecord::Base
  belongs_to :user
  belongs_to :question
end