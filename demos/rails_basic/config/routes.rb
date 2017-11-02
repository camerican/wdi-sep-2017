Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'users' => 'users#index'
  get 'users/new' => 'users#new', as: :new_user
  post 'users' => 'users#create'
  get 'users/:id' => 'users#show', as: :user
  delete 'users/:id' => 'users#destroy'
#  resources :users, only: [:index, :show, :create, :destroy, :new]
end
