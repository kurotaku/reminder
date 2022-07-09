class CreateStores < ActiveRecord::Migration[7.0]
  def change
    create_table :stores do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name
      t.string :ulid

      t.timestamps
    end
  end
end
