# == Schema Information
#
# Table name: stores
#
#  id         :bigint           not null, primary key
#  address    :string(255)
#  name       :string(255)
#  phone      :string(255)      default(""), not null
#  postcode   :string(255)
#  ulid       :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_stores_on_phone    (phone) UNIQUE
#  index_stores_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class Store < ApplicationRecord
  include Uniqueable

  belongs_to :user

  has_many :customers, dependent: :destroy

  validates :phone, allow_nil: false, uniqueness: { message: 'はすでに登録済みです' }, phone_number: true
  validates :postcode, postcode: true
  validates :name,
            :phone,
            presence: true
end
