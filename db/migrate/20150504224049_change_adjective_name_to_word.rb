class ChangeAdjectiveNameToWord < ActiveRecord::Migration
  def up
    rename_column :adjectives, :name, :adjective
  end
end
