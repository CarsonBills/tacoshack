class CreateModifers < ActiveRecord::Migration
  def change
    create_table :modifers do |t|
      t.string :modifier

      t.timestamps
    end
  end
end
