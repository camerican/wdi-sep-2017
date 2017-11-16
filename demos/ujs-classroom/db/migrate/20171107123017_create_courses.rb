class CreateCourses < ActiveRecord::Migration[5.1]
  def change
    create_table :courses do |t|
      t.string :name
      t.text :description
      t.references :instructor, index: true, foreign_key: false
      t.integer :time_horizon

      t.timestamps
    end
    add_foreign_key :instructor, :user, column: 'instructor_id'

  end
end
