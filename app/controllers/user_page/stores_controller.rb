module UserPage
  class StoresController < UserPageController
    def index
      @stores = current_user.stores.decorate
    end

    def new; end

    def create; end

    def show; end
  end
end
