class RemoveStartTimeFromMatches < ActiveRecord::Migration[5.2]
  def change
    remove_column :matches, :start_time, :datetime
  end
end
