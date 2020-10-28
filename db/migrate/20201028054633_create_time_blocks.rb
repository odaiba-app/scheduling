class CreateTimeBlocks < ActiveRecord::Migration[6.0]
  def change
    create_table :time_blocks do |t|
      t.datetime :time

      t.timestamps
    end
  end
end
