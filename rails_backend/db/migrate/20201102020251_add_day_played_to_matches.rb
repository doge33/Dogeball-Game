class AddDayPlayedToMatches < ActiveRecord::Migration[5.2]
  def change
    add_column :matches, :day_played, :datetime
  end
end
