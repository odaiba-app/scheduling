class UsersController < ApplicationController
	def update
		@user = User.find(params[:id])
		@user.weekly_email = !@user.weekly_email 
		@user.save
		redirect_to user_root_path
	end
end
