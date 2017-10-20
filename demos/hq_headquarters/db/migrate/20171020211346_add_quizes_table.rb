class AddQuizesTable < ActiveRecord::Migration[5.1]
  def change
    going_rogue_proc = Proc.new do |t|
      t.string :name
      t.datetime :created_at
    end

    create_table :quizzes, &going_rogue_proc

    change_table :questions do |t|
      t.references :quiz, foreign_key: {to_table: :quizes}, index: true
    end



  #   add_column :questions, :quiz, :references, foreign_key: {to_table: :questions}, index: true

  end
end
