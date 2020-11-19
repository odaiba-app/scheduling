class ReminderSender
  def initialize; end

  def call
    User.all.each do |user|
      if user.user_availabilities.empty?
        WeeklyMailer.with(user: user).remind_to_input.deliver_later
      else
        WeeklyMailer.with(user: user).prompt_to_collaborate.deliver_later
      end
    end
    Company.first.update(reminder_sent: true)
  end
end
