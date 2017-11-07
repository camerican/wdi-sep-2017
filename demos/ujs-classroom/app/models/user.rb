class User < ApplicationRecord
  has_many :course_attendees
  has_many :courses, through: :course_attendees

  enum role: [:student, :instructor, :staff]
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def print_courses
    courses.map{|c| c.name}.join(', ')
  end
end
