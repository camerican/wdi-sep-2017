class BuildInitialSchema < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :first, limit: 64
      t.string :last, limit: 64
      t.string :photo, limit: 256
      t.string :slack, limit: 32
      t.string :github, limit: 32
    end

    create_table :payments do |t|
      t.references :payer_id, foreign_key: {to_table: :users}, index: true
      t.references :payee_id, foreign_key: {to_table: :users}, index: true
      t.decimal :amount, precision: 10, scale: 2
      t.datetime :created_at
    end
  end
end
