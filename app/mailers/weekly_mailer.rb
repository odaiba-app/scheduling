class WeeklyMailer < ApplicationMailer
  def start_new_week
    @user = params[:user]
    mail(to: @user.email, subject: '[Scheduler] Prepare for the New Week')
  end

  def remind_to_input
    @user = params[:user]
    mail(to: @user.email, subject: '[Scheduler] Please input your availability')
  end

  def prompt_to_collaborate
    @user = params[:user]
    mail(to: @user.email, subject: '[Scheduler] Get ready to collaborate!')
  end
end
