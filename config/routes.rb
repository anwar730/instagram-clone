Rails.application.routes.draw do
  post '/register', to: "users#create"
  post "/login", to: "sessions#create"
  post "createpost", to: "posts#create"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
