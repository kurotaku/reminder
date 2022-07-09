# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

ApplicationRecord.transaction do
  ##########################
  # ユーザー
  ##########################
  p '=== User ==='

  user = User.find_or_initialize_by(name: '山田太郎', account_id: 'tyamada',email: ENV.fetch('DEMO_USER_EMAIL', 'test@test.com'))
  user.password = 'password'
  user.skip_confirmation!
  user.save!
end
