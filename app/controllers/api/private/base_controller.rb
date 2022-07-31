module Api
  module Private
    class BaseController < ApplicationController
      skip_before_action :verify_authenticity_token
      before_action :set_current_company

      private

      def set_current_company
        @current_company = current_user.stores.find_by(ulid: params[:store_ulid])
      end
    end
  end
end
