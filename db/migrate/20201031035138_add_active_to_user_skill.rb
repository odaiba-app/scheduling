class AddActiveToUserSkill < ActiveRecord::Migration[6.0]
  def change
    add_column :user_skills, :active, :boolean, default: false
  end
end
