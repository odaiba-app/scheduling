class AddRecurringColumnToUserAvailability < ActiveRecord::Migration[6.0]
  def change
    add_column :user_availabilities, :recurring, :boolean, default: false
  end
end
