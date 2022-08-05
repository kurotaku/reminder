class CreateCustomers < ActiveRecord::Migration[7.0]
  def change
    create_table :customers do |t|
      t.references :store, null: false, foreign_key: true
      t.string :number
      t.string :first_name
      t.string :family_name
      t.string :phone, null: false, default: ""
      t.string :email
      t.integer :register_status, null: false, default: 10
      t.integer :line_status, null: false, default: 10

      t.timestamps
      
      t.index [:store_id, :number], unique: true
      t.index [:store_id, :phone], unique: true
    end
  end
end
