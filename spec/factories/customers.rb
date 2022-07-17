# == Schema Information
#
# Table name: customers
#
#  id              :bigint           not null, primary key
#  email           :string(255)
#  family_name     :string(255)
#  first_name      :string(255)
#  line_status     :integer          default(10), not null
#  phone           :string(255)      default(""), not null
#  register_status :integer          default(10), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  store_id        :bigint           not null
#
# Indexes
#
#  index_customers_on_store_id  (store_id)
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
