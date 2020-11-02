class RemoveDurationFromMatches < ActiveRecord::Migration[5.2]
  def change
    remove_column :matches, :duration, :time
  end
end
