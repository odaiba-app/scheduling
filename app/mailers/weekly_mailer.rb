class WeeklyMailer < ApplicationMailer
  def start_new_week
    @user = params[:user]
    mail(to: @user.email, subject: '[Scheduler] Prepare for the New Week')
  end
end
