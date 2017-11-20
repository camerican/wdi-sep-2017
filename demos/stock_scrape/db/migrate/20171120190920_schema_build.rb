class SchemaBuild < ActiveRecord::Migration[5.1]
  def change
    create_table :stocks do |t|
      t.string :symbol
      t.string :name
      t.string :sector
      t.string :industry

      t.timestamps
    end
    create_table :stock_attributes do |t|
      t.references :stock
      t.date :day
      t.integer :market_cap
      t.float :pe
      t.float :ps
      t.float :pb
      t.float :pfcf
      t.float :dividend
      t.float :float_short
      t.float :perf_half
      t.float :sma50
      t.float :sma200
      t.float :rsi
      t.float :price
      t.string :earnings

      t.timestamps
    end
  end
end
