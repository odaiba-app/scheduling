class Api::V1::UserAvailabilitiesController < Api::V1::BaseController
  def create
    @user_availability = UserAvailability.new(availability_params)
    @user_availability.user = current_user
    if @user_availability.save
      render json: @user_availability
    else
      render_error
    end
  end

  def destroy
    @user_availability = UserAvailability.find(params[:id])
    timeblock = @user_availability.time_block
    @user_availability.destroy
    render json: timeblock
  end

  def multiple
    ids = params[:time_block_ids]
    p ids
    ids.each do |id|
      new_avail = UserAvailability.new(user: current_user, time_block_id: id)
      new_avail.save
    end
  end

  private

  def availability_params
    params.require(:user_availability).permit(:time_block_id, :time_block_ids)
  end

  def render_error
    render json: { errors: @user_availability.errors.full_messages },
      status: :unprocessable_entity
  end

end
