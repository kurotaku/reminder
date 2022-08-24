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
require 'rails_helper'

RSpec.describe Store, type: :model do
  let!(:store) { create(:store) }

  describe '関連モデルについて' do
    it { expect(described_class.reflect_on_association(:user).macro).to eq(:belongs_to) }
  end

  describe 'バリデーション' do
    # 半角数字10〜11桁（ハイフンなし）でないとエラー
    describe ':phone' do
      it 'ハイフンがあるとエラー' do
        store = build(:store, phone: '03-1234-5678')
        store.valid?
        expect(store.errors[:phone]).to include('はハイフン無しの半角数字10〜11桁で入力してください')
      end

      it '9桁だとエラー' do
        store = build(:store, phone: '0' * 9)
        store.valid?
        expect(store.errors[:phone]).to include('はハイフン無しの半角数字10〜11桁で入力してください')
      end
    end
  end
end
