UserAvailability.destroy_all
TimeBlock.update_all("time = time + interval '7' day")
Company.first.update!(reminder_sent: false)
User.where(weekly_email: true).each do |user| 
	WeeklyMailer.with(user: user).start_new_week.deliver_now
end
