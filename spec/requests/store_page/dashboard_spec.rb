require 'rails_helper'

RSpec.describe 'StorePage::Dashboards', type: :request do
  describe 'GET /show' do
    it 'returns http success' do
      get '/store_page/dashboard/show'
      expect(response).to have_http_status(:success)
    end
  end
end
