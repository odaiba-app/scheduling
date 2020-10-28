Rails.application.routes.draw do
  devise_for :users

  devise_scope :user do
    root to: 'devise/sessions#new'
  end

  get '/dashboard' => "pages#home", :as => :user_root
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :time_blocks, only: %i[ index show ] do
        collection do
          get 'monday'
          get 'tuesday'
          get 'wednesday'
          get 'thursday'
          get 'friday'
          get 'saturday'
          get 'sunday'
        end
      end
      resources :user_availabilities, only: %i[ create delete ]
    end
  end
end
