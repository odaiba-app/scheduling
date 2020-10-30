class Api::V1::TimeBlocksController < Api::V1::BaseController
  before_action :configure_user_time, except: :show

  def monday
    @timeblocks = FindDay.call(@blocks, 'monday').drop(12)
    render :friday
  end

  def tuesday
    @timeblocks = FindDay.call(@blocks, 'tuesday').drop(12)
    render :friday
  end

  def wednesday
    @timeblocks = FindDay.call(@blocks, 'wednesday').drop(12)
    render :friday
  end

  def thursday
    @timeblocks = FindDay.call(@blocks, 'thursday').drop(12)
    render :friday
  end

  def friday
    @timeblocks = FindDay.call(@blocks, 'friday').drop(12)
  end

  def saturday
    @timeblocks = FindDay.call(@blocks, 'saturday').drop(12)
    render :friday
  end

  def sunday
    @timeblocks = FindDay.call(@blocks, 'sunday').drop(12)
    render :friday
  end

  def show
    @time_block = TimeBlock.where(id: params[:id]).includes(:user_availabilities).first
  end

  private

  def configure_user_time
    @blocks = TimeBlock.configure_time(current_user)
  end
end
