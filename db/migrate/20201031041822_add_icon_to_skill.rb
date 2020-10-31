class AddIconToSkill < ActiveRecord::Migration[6.0]
  def change
    add_column :skills, :icon, :string
  end
end
