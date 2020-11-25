class AddEmailNotificationEnabled < ActiveRecord::Migration[6.0]
  def change
  	add_column :users, :email_notification_enabled, :boolean, default: true
  end
end
