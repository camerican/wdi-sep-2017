class User < ActiveRecord::Base
  has_one :profile
  has_many :blog_posts
  has_many :user_rooms
  has_many :rooms, through: :user_rooms
end
class Profile < ActiveRecord::Base
  belongs_to :user
end
class BlogPost < ActiveRecord::Base
  belongs_to :user
end
class Room < ActiveRecord::Base
  has_many :user_rooms
  has_many :users, through: :user_rooms
end
class UserRoom < ActiveRecord::Base
  belongs_to :user
  belongs_to :room
end