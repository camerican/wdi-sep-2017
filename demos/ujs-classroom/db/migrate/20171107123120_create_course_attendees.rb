class CreateCourseAttendees < ActiveRecord::Migration[5.1]
  def change
    create_table :course_attendees do |t|
      t.references :course, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
