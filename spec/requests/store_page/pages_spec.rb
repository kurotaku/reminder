require 'rails_helper'

RSpec.describe 'StorePage::Pages', type: :request do
  describe 'GET /index' do
    it 'returns http success' do
      get '/store_page/pages/index'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /new' do
    it 'returns http success' do
      get '/store_page/pages/new'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /show' do
    it 'returns http success' do
      get '/store_page/pages/show'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /edit' do
    it 'returns http success' do
      get '/store_page/pages/edit'
      expect(response).to have_http_status(:success)
    end
  end
end
