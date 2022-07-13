module UserPage
  class StoresController < UserPageController
    def index
      @stores = current_user.stores
    end

    def new; end

    def create; end

    def show; end
  end
end
