class Api::V1::TimeBlocksController < Api::V1::BaseController
  before_action :configure_user_time, except: %i[show invite_to_collab]
  before_action :set_time_block, only: %i[remove_user_availability invite_to_collab]

  def day
    @time_blocks = FindDay.call(@blocks, params[:day]).take(48).drop(12)
  end

  def show
    @time_block = TimeBlock.where(id: params[:id]).includes(:user_availabilities).first
  end

  def remove_user_availability
    user_availability = @time_block.user_availabilities.where(user: current_user).first
    user_availability.destroy
    render json: @time_block
  end

  def invite_to_collab
    user = User.find(params[:user_id])
    skills = SharedSkillsMatcher.new(user, current_user).call
    raise StandardError.new('No shared skills') if skills.blank?

    to_user_time = @time_block.time.in_time_zone(user.time_zone)
    CollabMailer.with(
      from_user: current_user,
      to_user: user,
      skills: skills,
      to_user_time: to_user_time
    ).invite_to_collaborate.deliver_now
    render json: { message: "Invitation to #{user.username} sent" }, status: 200
  rescue StandardError => e
    render json: { error: "#{e}" }, status: 422
  end

  private

  def configure_user_time
    @blocks = TimeBlock.includes(:user_availabilities).configure_time(current_user)
  end

  def set_time_block
    @time_block = TimeBlock.find(params[:id])
  end
end
