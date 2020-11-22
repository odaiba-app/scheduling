puts 'Select index of user with calendars'

user_ids = Calendar.all.pluck(:user_id).uniq
users = User.where(id: user_ids)

users.each_with_index do |user, idx|
  puts "index #{idx} for user #{user.username}"
end
print '> '
index = gets.chomp.to_i

user = users[index]

puts "Creating time blocks for user #{user.username}"

events = CalendarReader.new(user.calendars.pluck(:link)).next_week_events
time_blocks = TimeBlock.where(time: events)
time_blocks.each do |time_block|
  UserAvailability.create!(user: user, time_block: time_block)
end

puts 'finished'
