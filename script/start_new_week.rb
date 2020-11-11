UserAvailability.destroy_all
User.all.each { |user| WeeklyMailer.with(user: user).start_new_week.deliver_later }
