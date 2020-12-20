class SharedSkillsMatcher
  def initialize(user1, user2)
    @user1 = user1
    @user2 = user2
  end

  def call
    u1_skills = @user1.user_skills.where(active: true).pluck(:skill_id)
    u2_skills = @user2.user_skills.where(active: true).pluck(:skill_id)
    (u1_skills & u2_skills).map{ |id| Skill.find(id).name }
  end
end
