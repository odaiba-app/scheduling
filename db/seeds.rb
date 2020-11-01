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

new_skill = Skill.new(name: 'Rails', icon: "<i class='fas fa-magic'></i>")
new_skill.save
puts "Created skill #{new_skill.id}"

new_skill = Skill.new(name: 'React', icon: "<i class='fab fa-react'></i>")
new_skill.save
puts "Created skill #{new_skill.id}"

new_skill = Skill.new(name: 'HTML&CSS', icon: "<i class='fab fa-html5'></i>")
new_skill.save
puts "Created skill #{new_skill.id}"

new_skill = Skill.new(name: 'Marketing', icon: "<i class='fas fa-poll'></i>")
new_skill.save
puts "Created skill #{new_skill.id}"

new_skill = Skill.new(name: 'Biz Dev', icon: "<i class='fas fa-briefcase'></i>")
new_skill.save
puts "Created skill #{new_skill.id}"

new_skill = Skill.new(name: 'Design', icon: "<i class='fas fa-icons'></i>")
new_skill.save
puts "Created skill #{new_skill.id}"

puts "Created Skills"

puts "Creating User Skills"

user = User.find_by(username: 'Liam')
user2 = User.find_by(username: 'Rui')
user3 = User.find_by(username: 'utc')

skills = Skill.all
skills.each {|skill| UserSkill.create(skill: skill, user: user)}
skills.each {|skill| UserSkill.create(skill: skill, user: user2)}
skills.each {|skill| UserSkill.create(skill: skill, user: user3)}

user_skills = UserSkill.all

user_skills.each {|us| puts "Created user skill #{us.id}"}

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


# puts "Creating user availability blocks"
# all_time_blocks = TimeBlock.all.to_a
# all_time_blocks[5..15].each do |time_block|
#   user_availability = UserAvailability.new(user: user, time_block: time_block)
#   user_availability.save
#   puts "Created user_availability #{user_availability.id}"
# end

# all_time_blocks[10..20].each do |time_block|
#   user_availability = UserAvailability.new(user: user2, time_block: time_block)
#   user_availability.save
#   puts "Created user_availability #{user_availability.id}"
# end
# puts "User availabilities created"

