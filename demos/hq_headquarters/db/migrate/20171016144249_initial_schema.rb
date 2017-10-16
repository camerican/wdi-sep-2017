class InitialSchema < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :first
      t.string :last
      t.string :slack
    end
    create_table :questions do |t|
      t.text :body
      t.string :option1
      t.string :option2
      t.string :option3
      t.integer :correct_answer
    end
    create_table :guesses do |t|
      t.references :user, foreign_key: {to_table: :users}, index: true
      t.references :question, foreign_key: {to_table: :questions}, index: true
      t.integer :guess
    end
  end
end
