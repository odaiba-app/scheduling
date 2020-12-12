class Api::V1::TimeBlocksController < Api::V1::BaseController
  before_action :configure_user_time, except: :show

  def day
    @time_blocks = FindDay.call(@blocks, params[:day]).take(48).drop(12)
  end

  def show
    @time_block = TimeBlock.where(id: params[:id]).includes(:user_availabilities).first
  end

  def remove_user_availability
    time_block = TimeBlock.find(params[:id])
    user_availability = time_block.user_availabilities.where(user: current_user).first
    user_availability.destroy
    render json: time_block
  end

  def invite_to_collab
    user = User.find(params[:user_id])
    time_block = TimeBlock.find(params[:id])
    skills = SharedSkillsMatcher.new(time_block, user, current_user).call
    CollabMailer.with(
      from_user: current_user,
      to_user: user,
      skills: skills
    ).invite_to_collaborate.deliver_now
  end

  private

  def configure_user_time
    @blocks = TimeBlock.includes(:user_availabilities).configure_time(current_user)
  end
end
