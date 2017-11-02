class Post < ApplicationRecord
  before_destroy :remove_foreign_keys
  
  belongs_to :user
  belongs_to :category
  has_many :comments

  def remove_foreign_keys
    comments.destroy_all
  end
end
