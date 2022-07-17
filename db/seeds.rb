# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

ApplicationRecord.transaction do
  ##########################
  # ユーザー
  ##########################
  p '=== User ==='

  sample_user = User.find_or_initialize_by(name: '山田太郎', account_id: 'tyamada',email: ENV.fetch('DEMO_USER_EMAIL', 'test@test.com'))
  sample_user.password = 'password'
  sample_user.skip_confirmation!
  sample_user.save!

  ##########################
  # 店舗
  ##########################
  p '=== Store ==='

  stores = [
    {user: sample_user, name: 'サンプル店舗', phone: '0312345678', postcode: '1560055', address: '東京都渋谷区神宮前1-1-1 サンプルハイツ101'},
  ]

  stores.each do |store|
    object = Store.find_or_initialize_by(store)
    object.save!
  end

  sample_store = Store.find_by(name: 'サンプル店舗')

  ##########################
  # 顧客
  ##########################
  p '=== Customer ==='

  customers = [
    {store: sample_store, family_name: '鈴木', first_name: '一郎', phone: '08011111111', email: 'sample@email.com'},
    {store: sample_store, family_name: '鈴木', first_name: '二郎', phone: '08011111112', email: 'sample2@email.com'},
    {store: sample_store, family_name: '鈴木', first_name: '三郎', phone: '08011111113', email: 'sample3@email.com'},
    {store: sample_store, family_name: '鈴木', first_name: '四郎', phone: '08011111114', email: 'sample4@email.com'},
    {store: sample_store, family_name: '鈴木', first_name: '五郎', phone: '08011111115', email: 'sample5@email.com'},
  ]

  customers.each do |customer|
    object = Customer.find_or_initialize_by(customer)
    object.save!
  end
end
