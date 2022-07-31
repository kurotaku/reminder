Rails.application.routes.draw do
  devise_for :users
  root 'site#home'

  namespace :api do
    namespace :private do
      resources :customers
    end
  end

  namespace :store_page, path: ':store_ulid' do
    resource :dashboard, only: %w[show], controller: 'pages', path: '/'
    resources :customers, controller: 'pages'
  end

  namespace :user_page, path: 'user' do
    resources :stores
  end
end
