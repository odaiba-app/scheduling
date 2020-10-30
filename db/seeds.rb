# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Cleaning database"
User.destroy_all
Skill.destroy_all
UserSkill.destroy_all
TimeBlock.destroy_all
UserAvailability.destroy_all
puts "Cleaned"

puts "Creating users"

params = {}
params[:username] = 'Liam'
params[:email] = 'liam@schedule.com'
params[:password] = 'password'
params[:difference_from_utc] = 9
new_user = User.new(params)
new_user.save
puts "Created user #{new_user.id}"

params = {}
params[:username] = 'Rui'
params[:email] = 'Rui@schedule.com'
params[:password] = 'password'
params[:difference_from_utc] = -4
new_user = User.new(params)
new_user.save
puts "Created user #{new_user.id}"

params = {}
params[:username] = 'utc'
params[:email] = 'utc@schedule.com'
params[:password] = 'password'
params[:difference_from_utc] = 0
new_user = User.new(params)
new_user.save
puts "Created user #{new_user.id}"

puts "Users created!"

puts "Creating Skills"

new_skill = Skill.new(name: 'Rails')
new_skill.save
puts "Created skill #{new_skill.id}"

new_skill = Skill.new(name: 'React')
new_skill.save
puts "Created skill #{new_skill.id}"

new_skill = Skill.new(name: 'HTML&CSS')
new_skill.save
puts "Created skill #{new_skill.id}"

new_skill = Skill.new(name: 'Marketing')
new_skill.save
puts "Created skill #{new_skill.id}"

new_skill = Skill.new(name: 'Biz Dev')
new_skill.save
puts "Created skill #{new_skill.id}"

new_skill = Skill.new(name: 'Design')
new_skill.save
puts "Created skill #{new_skill.id}"

puts "Created Skills"

puts "Creating User Skills"

user = User.find_by(username: 'Liam')
user2 = User.find_by(username: 'Rui')

new_user_skill = UserSkill.new(
  user: user,
  skill: Skill.find_by(name: 'Rails'),
  experience: 'Middle'
  )
new_user_skill.save
puts "Created user skill #{new_user_skill.id}"

new_user_skill = UserSkill.new(
  user: user,
  skill: Skill.find_by(name: 'React'),
  experience: 'A little'
  )
new_user_skill.save
puts "Created user skill #{new_user_skill.id}"

new_user_skill = UserSkill.new(
  user: user,
  skill: Skill.find_by(name: 'HTML&CSS'),
  experience: 'Middle'
  )
new_user_skill.save
puts "Created user skill #{new_user_skill.id}"

new_user_skill = UserSkill.new(
  user: user2,
  skill: Skill.find_by(name: 'Rails'),
  experience: 'None'
  )
new_user_skill.save
puts "Created user skill #{new_user_skill.id}"

new_user_skill = UserSkill.new(
  user: user2,
  skill: Skill.find_by(name: 'Marketing'),
  experience: 'A lot'
  )
new_user_skill.save
puts "Created user skill #{new_user_skill.id}"

new_user_skill = UserSkill.new(
  user: user2,
  skill: Skill.find_by(name: 'HTML&CSS'),
  experience: 'A little'
  )
new_user_skill.save
puts "Created user skill #{new_user_skill.id}"

puts "Created User Skills"

puts "Creating Time Blocks"

# this will be UTC time from Japan
time = Time.parse("Nov 1 2020 00:00")

336.times do
  new_time_block = TimeBlock.new(time: time)
  new_time_block.save
  puts "Created time block #{new_time_block.id}"
  time += 1800
end

puts "Created Time Blocks"


puts "Creating user availability blocks"
all_time_blocks = TimeBlock.all.to_a
all_time_blocks[5..15].each do |time_block|
  user_availability = UserAvailability.new(user: user, time_block: time_block)
  user_availability.save
  puts "Created user_availability #{user_availability.id}"
end

all_time_blocks[10..20].each do |time_block|
  user_availability = UserAvailability.new(user: user2, time_block: time_block)
  user_availability.save
  puts "Created user_availability #{user_availability.id}"
end
puts "User availabilities created"

