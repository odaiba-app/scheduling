class AddNameAndDifferenceFromUtcToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :username, :string
    add_column :users, :difference_from_utc, :integer
  end
end
