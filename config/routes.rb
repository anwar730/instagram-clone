Rails.application.routes.draw do
  post '/register', to: "users#create"
  post "/login", to: "sessions#create"
  post "createpost", to: "posts#create"
  get "/posts", to: "posts#index"
  get "/me", to: "users#show"
  get "comments", to: "comments#index"
  post "postcomments", to: "comments#create"
  patch "/likes", to: "posts#update"
  delete "/logout", to: "sessions#destroy"
  patch "/update", to: "users#update"
  get "/post/[:id]", to: "posts#show"
  delete "/users", to: "users#delete"
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
