# == Schema Information
#
# Table name: stores
#
#  id         :bigint           not null, primary key
#  address    :string(255)
#  name       :string(255)
#  phone      :string(255)
#  postcode   :string(255)
#  ulid       :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_stores_on_id_and_phone  (id,phone) UNIQUE
#  index_stores_on_user_id       (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
FactoryBot.define do
  factory :store do
    user { nil }
    name { 'MyString' }
    ulid { 'MyString' }
  end
end
