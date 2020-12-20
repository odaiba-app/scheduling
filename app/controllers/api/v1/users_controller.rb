class Api::V1::UsersController < Api::V1::BaseController
  def logged
    @user = current_user
  end

  def invite_to_collab
    user = User.find(params[:id])
    skills = SharedSkillsMatcher.new(user, current_user).call
    raise StandardError.new('No shared skills') if skills.blank?
    CollabMailer.with(
      from_user: current_user,
      to_user: user,
      skills: skills
    ).invite_to_collaborate.deliver_now
    render json: { message: "Invitation to #{user.username} sent" }, status: 200
  rescue StandardError => e
    render json: { error: "#{e}" }, status: 422
  end
end
