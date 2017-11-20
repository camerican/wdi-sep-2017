# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171120190920) do

  create_table "stock_attributes", force: :cascade do |t|
    t.integer "stock_id"
    t.date "day"
    t.integer "market_cap"
    t.float "pe"
    t.float "ps"
    t.float "pb"
    t.float "pfcf"
    t.float "dividend"
    t.float "float_short"
    t.float "perf_half"
    t.float "sma50"
    t.float "sma200"
    t.float "rsi"
    t.float "price"
    t.string "earnings"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["stock_id"], name: "index_stock_attributes_on_stock_id"
  end

  create_table "stocks", force: :cascade do |t|
    t.string "symbol"
    t.string "name"
    t.string "sector"
    t.string "industry"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
