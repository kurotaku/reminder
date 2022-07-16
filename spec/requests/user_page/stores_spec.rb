require 'rails_helper'

RSpec.describe 'UserPage::Stores', type: :request do
  describe 'GET /index' do
    it 'returns http success' do
      get '/user_page/stores/index'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /new' do
    it 'returns http success' do
      get '/user_page/stores/new'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /edit' do
    it 'returns http success' do
      get '/user_page/stores/edit'
      expect(response).to have_http_status(:success)
    end
  end
end
