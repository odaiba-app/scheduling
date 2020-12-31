desc 'This task is called by the Heroku scheduler add-on'

task start_new_week: :environment do
  puts 'Startin new week'
  StartNewWeek.call
  puts 'New week started'
end
