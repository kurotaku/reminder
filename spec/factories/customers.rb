# == Schema Information
#
# Table name: customers
#
#  id              :bigint           not null, primary key
#  email           :string(255)
#  family_name     :string(255)
#  first_name      :string(255)
#  line_status     :integer          default("unregistered"), not null
#  number          :string(255)
#  phone           :string(255)      default(""), not null
#  register_status :integer          default("unregistered"), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  store_id        :bigint           not null
#
# Indexes
#
#  index_customers_on_store_id             (store_id)
#  index_customers_on_store_id_and_number  (store_id,number) UNIQUE
#  index_customers_on_store_id_and_phone   (store_id,phone) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (store_id => stores.id)
#
FactoryBot.define do
  factory :customer do
    store { nil }
    first_name { 'MyString' }
    last_name { 'MyString' }
    phone { 'MyString' }
    email { 'MyString' }
    register_status { 1 }
    line_status { 1 }
  end
end
