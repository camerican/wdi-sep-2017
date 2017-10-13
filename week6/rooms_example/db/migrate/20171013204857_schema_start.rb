class SchemaStart < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :first
      t.string :last
      t.string :email
    end
    create_table :profiles, primary_key: false do |t|
      t.references :user, foreign_key: {to_table: :users}, index: true
      t.string :title
      t.text :bio
    end
    create_table :blog_posts do |t|
      t.references :user, foreign_key: {to_table: :users}, index: true
      t.string :title
      t.text :body
      t.datetime :created_at
      t.datetime :updated_at
    end
    create_table :rooms do |t|
      t.string :name
    end
    create_table :user_rooms, primary_key: false do |t|
      t.references :user, foreign_key: {to_table: :users}, index: true
      t.references :room, foreign_key: {to_table: :rooms}, index: true
    end
  end
end
