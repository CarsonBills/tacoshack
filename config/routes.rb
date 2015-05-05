Rails.application.routes.draw do
  root to: "application#index"

  get "/new" => "application#new"
end
