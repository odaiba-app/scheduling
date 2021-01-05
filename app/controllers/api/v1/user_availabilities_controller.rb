class Api::V1::UserAvailabilitiesController < Api::V1::BaseController
  before_action :activate_user

  def destroy
    @user_availability = UserAvailability.find(params[:id])
    timeblock = @user_availability.time_block
    @user_availability.destroy
    render json: timeblock
  end

  def multiple
    ids, recurring = multi_availability_params[:time_block_ids], multi_availability_params[:recurring]
    availabilities = ids.map do |id|
      UserAvailability.create(user: current_user, time_block_id: id, recurring: recurring)
    end
    if User.find_available >= User.all.size * 0.8 && !Company.first.reminder_sent?
      ReminderSender.new.call
    end
    render json: availabilities
  end

  private

  def availability_params
    params.require(:user_availability).permit(:time_block_id, :recurring)
  end

  def multi_availability_params
    params.require(:user_availability).permit(:recurring, time_block_ids: [])
  end

  def render_error
    render json: { errors: @user_availability.errors.full_messages },
      status: :unprocessable_entity
  end

  def activate_user
    current_user.update(active: true) unless current_user.active?
  end
end
