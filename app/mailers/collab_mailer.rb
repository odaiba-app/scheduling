class CollabMailer < ApplicationMailer
  def invite_to_collaborate
    @from_user = params[:from_user]
    @to_user = params[:to_user]
    @skills = params[:skills]
    @to_user_time = params[:to_user_time]
    mail(to: @to_user.email, subject: "[Scheduler] #{@from_user.username} would like to collaborate")
  end
end
