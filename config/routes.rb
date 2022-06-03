Rails.application.routes.draw do
  resources :posts
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/pages/page2', to: 'pages#page2'
  get '/pages/page3', to: 'pages#page3'
end
