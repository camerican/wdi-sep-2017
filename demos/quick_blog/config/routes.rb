Rails.application.routes.draw do
  devise_for :users 
  devise_scope :user do
    get 'sign_out' => 'devise/sessions#destroy'
  end
  get 'posts/:id/like' => 'posts#like', as: :like_post
  root 'misc#index'
  resources :comments
  resources :posts
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
