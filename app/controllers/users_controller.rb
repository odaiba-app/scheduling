class UsersController < ApplicationController
	def update
		@user = User.find(params[:id])
		@user.weekly_email = !@user.weekly_email 
		@user.save
		# redirect_to user_root_path
		respond_to do |format|
			format.js {flash.now[:notice] = "Email Notification Changed Successfully"}
		end
	end
end
