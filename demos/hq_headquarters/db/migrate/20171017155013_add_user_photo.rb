class AddUserPhoto < ActiveRecord::Migration[5.1]
  def up
    add_column :users, :photo, :string
  end
  def down
    remove_column :users, :photo, :string
  end
end
