Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'users/registrations' }

  devise_scope :user do
    root to: 'devise/sessions#new'
  end

  get '/dashboard' => "pages#home", as: :user_root
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :user_skills, only: :update

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :skills, only: :index
      resources :time_blocks, only: :show
      get 'day/:day', to: 'time_blocks#day', as: :day
      get '/logged' => "users#logged", as: :users_logged
      resources :user_availabilities, only: %i[ create destroy ]
    end
  end
end
