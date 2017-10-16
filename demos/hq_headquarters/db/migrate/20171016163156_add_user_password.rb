class AddUserPassword < ActiveRecord::Migration[5.1]
  def up
    add_column :users, :password, :string, default: "openseseme"
  end
  def down
    remove_column :users, :password, :string
  end
end
