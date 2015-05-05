class ChangeModiferTableToModiFier < ActiveRecord::Migration
  def change
    rename_table :modifers, :modifiers
  end
end
