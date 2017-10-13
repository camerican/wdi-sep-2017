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

ActiveRecord::Schema.define(version: 20171013145130) do

  create_table "payments", force: :cascade do |t|
    t.integer "payer_id_id"
    t.integer "payee_id_id"
    t.decimal "amount", precision: 10, scale: 2
    t.datetime "created_at"
    t.index ["payee_id_id"], name: "index_payments_on_payee_id_id"
    t.index ["payer_id_id"], name: "index_payments_on_payer_id_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first", limit: 64
    t.string "last", limit: 64
    t.string "photo", limit: 256
    t.string "slack", limit: 32
    t.string "github", limit: 32
  end

end
