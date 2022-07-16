# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  confirmation_sent_at   :datetime
#  confirmation_token     :string(255)
#  confirmed_at           :datetime
#  current_sign_in_at     :datetime
#  current_sign_in_ip     :string(255)
#  email                  :string(255)      default(""), not null
#  encrypted_password     :string(255)      default(""), not null
#  last_sign_in_at        :datetime
#  last_sign_in_ip        :string(255)
#  name                   :string(255)      not null
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string(255)
#  sign_in_count          :integer          default(0), not null
#  unconfirmed_email      :string(255)
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  account_id             :string(255)      not null
#
# Indexes
#
#  index_users_on_account_id            (account_id) UNIQUE
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#
require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:user) { create(:user) }

  describe 'deviseのモジュールについて' do
    subject { described_class.devise_modules }
    it { is_expected.to include(:database_authenticatable, :rememberable, :recoverable, :registerable, :validatable) }
  end

  describe '関連モデルについて' do
    it { expect(described_class.reflect_on_association(:stores).macro).to eq(:has_many) }
  end

  describe 'バリデーション' do
    describe ':name' do
      it '空の場合はエラーになること' do
        user = build(:user, name: nil)
        user.valid?
        expect(user.errors[:name]).to include('を入力してください')
      end
    end

    describe ':account_id' do
      it '空の場合はエラーになること' do
        user = build(:user, account_id: nil)
        user.valid?
        expect(user.errors[:account_id]).to include('を入力してください')
      end
    end

    describe ':email' do
      it '空の場合はエラーになること' do
        user = build(:user, email: nil)
        user.valid?
        expect(user.errors[:email]).to include('を入力してください')
      end
    end

    # 半角英数字6文字以上100文字以下でないとエラー
    describe ':password' do
      it '空の場合はエラーになること' do
        user = build(:user, password: nil)
        user.valid?
        expect(user.errors[:password]).to include('を入力してください')
      end

      it '5文字だとエラーになること' do
        user = build(:user, password: 'a' * 5)
        user.valid?
        expect(user.errors[:password]).to include('は半角英数字6文字以上100文字以下にしてください')
      end

      it '半角英数字でないとエラー' do
        user = build(:user, password: 'あいうえお')
        user.valid?
        expect(user.errors[:password]).to include('は半角英数字6文字以上100文字以下にしてください')
      end
    end
  end
end
