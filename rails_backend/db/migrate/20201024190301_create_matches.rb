class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.integer :score
      t.datetime :start_time
      t.datetime :end_time
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
