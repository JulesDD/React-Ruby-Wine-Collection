Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'price/index'
      post 'price/create'
      get '/show/:id', to: 'prices#show'
      delete '/destroy/:id', to: 'prices#show'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
