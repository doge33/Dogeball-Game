require('faker');


# def rand_time(from = , to=Time.now)
#   Time.at(rand_in_range(from.to_f, to.to_f))
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

class Match
  def initialize(score, start_time, end_time, user_id)
    @score = score
    @start_time = start_time
    @end_time = end_time
    @user_id = user_id
  end

  def create
  end

end

#p Duration.new.interval
# p t.interval
# p Time.now
# p Time.now.min
# p Time.now.sec

# p Time.new(2020, 10, 31, 2, 2, 2)
# p t.rand_end_time 
# p t.rand_start_time
# p t1 = t.rand_end_time -  t.rand_start_time
# p Time.at(t1).utc.strftime("%H:%M:%S")



 p score = Faker::Types.rb_integer
p start_time =Duration.new.rand_start_time
 p end_time = Duration.new.rand_end_time

p Time.at(end_time - start_time).utc.strftime("%H:%M:%S")

