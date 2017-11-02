class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :trackable, :validatable
  enum status: [:pending, :active, :inactive, :banned]
  
  before_destroy :remove_foreign_keys

  # validates_presence_of :username
  #validates :username, inclusion: {in: ["camerican","ro"]}
  validates :username, uniqueness: true

  has_many :posts
  has_many :comments, through: :posts

  private
    def remove_foreign_keys
      posts.destroy_all
    end
    def anything_else

    end
end
