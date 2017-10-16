class User < ActiveRecord::Base
  has_many :guesses
  has_many :questions, through: :guesses
end
class Question < ActiveRecord::Base
  has_many :guesses
  has_many :users, through: :guesses
end
class Guess < ActiveRecord::Base
  belongs_to :user
  belongs_to :question
end