class CreateMenuItems < ActiveRecord::Migration
  def change
    create_table :menu_items do |t|
      t.string :menu_item
      t.integer :user_id

      t.timestamps
    end
  end
end
