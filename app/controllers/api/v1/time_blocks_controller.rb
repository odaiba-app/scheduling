class Api::V1::TimeBlocksController < Api::V1::BaseController

  def monday
    @timeblocks = TimeBlock.find_days('monday')
    render :friday
  end

  def tuesday
    @timeblocks = TimeBlock.find_days('tuesday')

    render :friday
  end

  def wednesday
     @timeblocks = TimeBlock.find_days('wednesday')
    render :friday
  end

  def thursday
    @timeblocks = TimeBlock.find_days('thursday')
    render :friday
  end

  def friday
    @timeblocks = TimeBlock.find_days('friday')
  end

  def saturday
    @timeblocks = TimeBlock.find_days('saturday')
    render :friday
  end

  def sunday
    @timeblocks = TimeBlock.find_days('sunday')
    render :friday
  end

  def show
    @time_block = TimeBlock.where(id: params[:id]).includes(:user_availabilities).first
  end
end
