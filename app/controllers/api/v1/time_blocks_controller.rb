class Api::V1::TimeBlocksController < Api::V1::BaseController
  before_action :configure_user_time, except: :show

  def day
    @time_blocks = FindDay.call(@blocks, params[:day]).drop(12)
    render :friday
  end

  def show
    @time_block = TimeBlock.where(id: params[:id]).includes(:user_availabilities).first
  end

  private

  def configure_user_time
    @blocks = TimeBlock.includes(:user_availabilities).configure_time(current_user)
  end
end
