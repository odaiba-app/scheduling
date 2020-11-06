class ApplicationController < ActionController::Base
  around_action :set_time_zone, if: :current_user
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?

  private

  def set_time_zone(&block)
    Time.use_zone(current_user.time_zone, &block)
  end

   def configure_permitted_parameters
    # For additional fields in app/views/devise/registrations/new.html.erb
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :time_zone])

    # For additional in app/views/devise/registrations/edit.html.erb
    devise_parameter_sanitizer.permit(:account_update, keys: [:username, :time_zone])
  end

end
