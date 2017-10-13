class CreateGroupsTable < ActiveRecord::Migration[5.1]
  def change
    create_table :groups do |t|
      t.string :name, limit: 64
      t.text :description
    end

    create_table :user_groups, primary_key: false do |t|
      t.references :user, foreign_key: {to_table: :user}, index: true
      t.references :group, foreign_key: {to_table: :group}, index: true
    end
  end
end
