Rails.application.routes.draw do


  post '/login', to: 'session#create'
  post '/logout', to: 'session#destroy'
  # get '/logged_in', to: 'session#new'
  get '/logged_in', to: 'session#is_logged_in?'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :users, only: [:index, :show, :create]
    resources :matches, only: [:index]
  end
end
