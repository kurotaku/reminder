require 'rails_helper'

RSpec.describe 'Api::Private::Customers', type: :request do
  describe 'GET /index' do
    it 'returns http success' do
      get '/api/private/customer/index'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /create' do
    it 'returns http success' do
      get '/api/private/customer/create'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /update' do
    it 'returns http success' do
      get '/api/private/customer/update'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /destroy' do
    it 'returns http success' do
      get '/api/private/customer/destroy'
      expect(response).to have_http_status(:success)
    end
  end
end
