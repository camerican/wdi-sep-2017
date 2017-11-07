class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
    @students = User.where role: :student
    @instructors = User.where role: :instructor
    @courses = Course.all
  end

  def student_assign_course
    @student = User.find params[:user_id]
    @course = Course.find params[:course_id]
    @student.courses << @course
  end
end
