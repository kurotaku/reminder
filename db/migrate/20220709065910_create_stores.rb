class CreateStores < ActiveRecord::Migration[7.0]
  def change
    create_table :stores do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name
      t.string :ulid
      t.string :phone, null: false, default: ""
      t.string :postcode
      t.string :address

      t.timestamps

      t.index [:phone], unique: true
    end
  end
end
