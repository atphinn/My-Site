class CreateSignups < ActiveRecord::Migration[5.0]
  def change
    create_table :signups do |t|

      t.timestamps
      t.firstname
      t.email
    end
  end
end
