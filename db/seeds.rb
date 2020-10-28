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
params[:email] = 'liam@journal.com'
params[:password] = 'password'
params[:difference_from_utc] = 9
new_user = User.new(params)
new_user.save
puts "Created user #{new_user.id}"

params = {}
params[:username] = 'Rui'
params[:email] = 'Rui@journal.com'
params[:password] = 'password'
params[:difference_from_utc] = -4
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
time = Time.parse("Oct 30 2020 09:00")

97.times do
  new_time_block = TimeBlock.new(time: time)
  new_time_block.save
  puts "Created time block #{new_time_block.id}"
  time += 1800
end

puts "Created Time Blocks"


