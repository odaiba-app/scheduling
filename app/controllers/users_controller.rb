class UsersController < ApplicationController
	def update
		@user = User.find(params[:id])
		@user.email_notification_enabled = !@user.email_notification_enabled 
		@user.save
		respond_to do |format|
			format.js {flash.now[:notice] = "Email Notification Changed Successfully"}
		end
	end
end
