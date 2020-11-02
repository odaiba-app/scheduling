class Api::V1::SkillsController < Api::V1::BaseController

  def index
    skills = Skill.all
    render json: skills
  end

end
