# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

ApplicationRecord.transaction do
  ##########################
  # ユーザー
  ##########################
  p '=== User ==='

  test_user = User.find_or_initialize_by(name: '山田太郎', account_id: 'tyamada',email: ENV.fetch('DEMO_USER_EMAIL', 'test@test.com'))
  test_user.password = 'password'
  test_user.skip_confirmation!
  test_user.save!

  ##########################
  # 店舗
  ##########################
  p '=== Store ==='

  stores = [
    {user: test_user, name: 'サンプル店舗'},
  ]

  stores.each do |store|
    object = Store.find_or_initialize_by(store)
    object.save!
  end
end
