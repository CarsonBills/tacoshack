Rails.application.routes.draw do
  root to: "application#index"

  get "/new" => "application#new"

  post "/" => "application#item"

  get "/fullmenu" => "application#fullmenu"

  resources :sessions

  resources :users
end
