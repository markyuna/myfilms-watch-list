Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'pages#home'
  devise_for :users
  resources :lists, except: %i[edit update] do
    resources :bookmarks, only: %i[new create show]
    resources :reviews, only: %i[create show]
  end
  resources :bookmarks, only: :destroy
  resources :reviews, only: %i[destroy show]
  resources :users, only: %i[show]
end
