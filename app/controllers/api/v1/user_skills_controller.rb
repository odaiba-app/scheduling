class Api::V1::UserSkillsController < Api::V1::BaseController

  def index
    @skills = UserSkill.where(user: current_user).includes(:skill)
  end

  def show
    @user_skill = UserSkill.find(params[:id])
  end

  def update
    @user_skill = UserSkill.find(params[:id])
    @user_skill.active = !@user_skill.active
    if @user_skill.save
      render :show
    else
      render_error
    end
  end

  private

  def render_error
    render json: { errors: @user_availability.errors.full_messages },
      status: :unprocessable_entity
  end

end
