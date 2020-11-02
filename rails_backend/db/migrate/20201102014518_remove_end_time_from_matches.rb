class RemoveEndTimeFromMatches < ActiveRecord::Migration[5.2]
  def change
    remove_column :matches, :end_time, :datetime
  end
end
