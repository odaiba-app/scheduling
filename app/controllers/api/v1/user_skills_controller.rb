class Api::V1::UserSkillsController < Api::V1::BaseController

  def index
    @skills = UserSkill.where(user: current_user).includes(:skill)
  end

  def update
    @user_skill = UserSkill.find(params[:id])
    @user_skill.active = !@user_skill.active
    @user_skill.save
  end

end
