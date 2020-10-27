# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require('faker')

puts "Seeding Data ..."

10.times do
  User.create(username: Faker::Internet.username, email: Faker::Internet.email, password_digest: Faker::Internet.password)
end

20.times do
  Match.create(score: Faker::Types.rb_integer, start_time: Faker::Time.between_dates(from: Date.today - 1, to: Date.today, period: :morning), end_time: Faker::Time.between_dates(from: Date.today - 1, to: Date.today, period: :afternoon), user_id: rand(1..10))
end

