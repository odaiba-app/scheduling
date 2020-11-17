class AddOptionalWeeklyEmailToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :weekly_email, :boolean, default: true
  end
end
