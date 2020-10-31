class UserSkillsController < ApplicationController
  def update
    @user_skill = UserSkill.find(params[:id])
    @user_skill.active = !@user_skill.active
    @user_skill.save
  end
end
