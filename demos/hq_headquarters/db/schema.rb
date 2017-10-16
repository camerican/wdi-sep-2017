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

ActiveRecord::Schema.define(version: 20171016163156) do

  create_table "guesses", force: :cascade do |t|
    t.integer "user_id"
    t.integer "question_id"
    t.integer "guess"
    t.index ["question_id"], name: "index_guesses_on_question_id"
    t.index ["user_id"], name: "index_guesses_on_user_id"
  end

  create_table "questions", force: :cascade do |t|
    t.text "body"
    t.string "option1"
    t.string "option2"
    t.string "option3"
    t.integer "correct_answer"
  end

  create_table "users", force: :cascade do |t|
    t.string "first"
    t.string "last"
    t.string "slack"
    t.string "password", default: "openseseme"
  end

end
