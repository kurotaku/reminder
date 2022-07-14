module UserPage
  class StoresController < UserPageController
    def index
      @stores = current_user.stores.decorate
    end

    def new
      @store = current_user.stores.build
    end

    def create
      @store = current_user.stores.build(store_params)
      if @store.save
        redirect_to user_page_store_path(@store), notice: t('.success')
      else
        lash.now[:error] = t('.error')
        render :new
      end
    end

    def show; end

    private

    def store_params
      # FIXME: 仕様が固まったら受け付けるカラムは1つ1つ定義する
      params.require(:store).permit(Store.column_names.map(&:to_sym))
    end
  end
end
