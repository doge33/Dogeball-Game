# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require('faker')

20.times do
  User.create(username: Faker::Internet.username, email: Faker::Internet.email, password_digest: Faker::Internet.password)
end

# 25.times do
#   Match.create(score: Faker::Types.rb_integer, start_time: Faker::Time.between_dates(from: Date.today - 1, to: Date.today, period: :morning), end_time: Faker::Time.between_dates(from: Date.today - 1, to: Date.today, period: :afternoon), user_id: rand(1..10))
# end


class Duration



  def rand_start_time
    Faker::Time.between(from: Time.new(2020, 10, 31, 2, 2, 2), to: Time.new(2020, 10, 31, 2, 5, 2))
  end

  def rand_end_time
    Faker::Time.between(from: Time.new(2020, 10, 31, 2, 5, 2), to: Time.new(2020, 10, 31, 2, 8, 2))

  end

  def interval
    t1 = rand_end_time -  rand_start_time
    Time.at(t1).utc.strftime("%H:%M:%S")
  end
 
end

puts "Creating Matches..."
#matches with proper time duration

start1 = Duration.new.rand_start_time
start2 = Duration.new.rand_start_time
start3 = Duration.new.rand_start_time
start4 = Duration.new.rand_start_time
start5 = Duration.new.rand_start_time
start6 = Duration.new.rand_start_time

end1 = Duration.new.rand_end_time
end2 = Duration.new.rand_end_time
end3 = Duration.new.rand_end_time
end4 = Duration.new.rand_end_time
end5 = Duration.new.rand_end_time
end6 = Duration.new.rand_end_time

# duration1 = Time.at(end1 - start1).utc.strftime("%H:%M:%S")
# duration2 = Time.at(end2 - start2).utc.strftime("%H:%M:%S")
# duration3 = Time.at(end3 - start3).utc.strftime("%H:%M:%S")
# duration4 = Time.at(end4 - start4).utc.strftime("%H:%M:%S")
# duration5 = Time.at(end5 - start5).utc.strftime("%H:%M:%S")
# duration6 = Time.at(end6 - start6).utc.strftime("%H:%M:%S")

# :start_time => start1, :end_time => end1, :duration => Time.at(end1 - start1).utc.strftime("%H:%M:%S"),
# :start_time => start2, :end_time => end2, :duration => Time.at(end2 - start2).utc.strftime("%H:%M:%S"),
# :start_time => start3, :end_time => end3, :duration => Time.at(end3 - start3).utc.strftime("%H:%M:%S"),
# :start_time => start4, :end_time => end4, :duration => Time.at(end4 - start4).utc.strftime("%H:%M:%S"),
# :start_time => start5, :end_time => end5, :duration => Time.at(end5 - start5).utc.strftime("%H:%M:%S"),
# :start_time => start6, :end_time => end6, :duration => Time.at(end6 - start6).utc.strftime("%H:%M:%S"),

50.times do
  Match.create!(:score=> Faker::Types.rb_integer, :day_played => Faker::Time.between_dates(from: Date.today - 10, to: Date.today, period: :morning),:user_id=> rand(1..10))
  
end

