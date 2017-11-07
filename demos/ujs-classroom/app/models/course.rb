class Course < ApplicationRecord
  belongs_to :instructor, class_name: 'User'
  has_many :course_attendees
  has_many :students, through: :course_attendees, source: :user
end
