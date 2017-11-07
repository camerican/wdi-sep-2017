Rails.application.routes.draw do
  root 'application#index'
  devise_for :users

  post 'student/assign' => 'application#student_assign_course', as: :student_assign_course
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
