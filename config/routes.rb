Rails.application.routes.draw do
  devise_for :users
  root 'site#home'

  namespace :user_page, path: 'user' do
    resources :stores
  end
end
