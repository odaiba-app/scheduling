class CreateCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :companies do |t|
      t.boolean :reminder_sent, default: false

      t.timestamps
    end
  end
end
