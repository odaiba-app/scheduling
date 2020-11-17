UserAvailability.destroy_all
TimeBlock.update_all("time = time + interval '7' day")
User.where(weekly_email: true).find_each do |user| 
	WeeklyMailer.with(user: user).start_new_week.deliver_now
end