class StartNewWeek
  def self.call
    active_users_ids = UserAvailability.all.pluck(:user_id).uniq
    User.where.not(id: active_users_ids).update_all(active: false)
    UserAvailability.where(recurring: [false, nil]).destroy_all
    TimeBlock.update_all("time = time + interval '7' day")
    Company.first.update!(reminder_sent: false)
    User.where(email_notification_enabled: true, active: true).each do |user|
      WeeklyMailer.with(user: user).start_new_week.deliver_now
    end
  end
end
