class Api::V1::TimeBlocksController < Api::V1::BaseController
  def index
    @time_blocks = TimeBlock.all
  end

  def friday
    friday_one = Time.parse("Oct 30 2020 09:00")
    block = TimeBlock.find_by(time: friday_one)
    id = block.id
    last_id = id + 47
    @time_blocks = TimeBlock.where(id: id..last_id)
  end

  def show
    @time_block = TimeBlock.find(params[:id])
  end
end
