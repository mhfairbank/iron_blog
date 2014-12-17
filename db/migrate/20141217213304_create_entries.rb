class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.string :title
      t.string :body
      t.string :level_of_rage

      t.timestamps
    end
  end
end
