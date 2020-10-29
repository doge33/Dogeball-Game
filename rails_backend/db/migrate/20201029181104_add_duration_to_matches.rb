class AddDurationToMatches < ActiveRecord::Migration[5.2]
  def change
    add_column :matches, :duration, :time
  end
end
