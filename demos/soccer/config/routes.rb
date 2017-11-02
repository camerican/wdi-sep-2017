Rails.application.routes.draw do
  get '/' => 'home#index'
  post 'sign-in' => 'home#sign_in'
  resources :players
  resources :positions
  resources :teams
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
