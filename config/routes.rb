# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'collection/index'
      post 'collection/create'
      get '/show/:id', to: 'collection#show'
      delete '/destroy/:id', to: 'collection#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
