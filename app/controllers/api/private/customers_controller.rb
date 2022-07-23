module Api
  module Private
    class CustomersController < BaseController
      def index
        customers = @current_company.customers
        render json: customers, each_serializer: CustomerSerializer
      end

      def create
        customer = @current_company.customers.build(customer_params)
        if customer.save
          render json: customer
        else
          render json: customer.errors, status: :unprocessable_entity
        end
      end

      def update
        customer = @current_company.customers.find(params[:id])
        if customer.update(customer_params)
          render json: customer
        else
          render json: customer.errors, status: :unprocessable_entity
        end
      end

      def destroy
        if @current_company.customers.destroy(params[:id])
          head :no_content
        else
          render json: { error: '削除に失敗しました' }, status: :unprocessable_entity
        end
      end

      private

      def customer_params
        # FIXME: 仕様が固まったら受け付けるカラムは1つ1つ定義する
        params.require(:custome).permit(Customer.column_names.map(&:to_sym))
      end
    end
  end
end
