class RemoveDifferenceInUtcFromUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :difference_from_utc, :string
  end
end
