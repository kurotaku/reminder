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
#  index_customers_on_store_id  (store_id)
#
# Foreign Keys
#
#  fk_rails_...  (store_id => stores.id)
#
class Customer < ApplicationRecord
  belongs_to :store

  validates :phone, presence: true, uniqueness: { scope: :store_id, message: 'はすでに登録済みです' }, phone_number: true
  validates :number, allow_nil: true, uniqueness: { scope: :store_id, message: 'はすでに登録済みです' }
  
  validates :family_name,
            :register_status,
            presence: true

  enum register_status: {
    unregistered: 10,
    registered: 20
  }, _prefix: true

  enum line_status: {
    unregistered: 10,
    registered: 20
  }, _prefix: true
end
