json.user_id @user.id
json.username @user.username
json.skills @user.user_skills.where(active: true) do |skill|
  json.skill_id skill.skill.id
  json.skill_name skill.skill.name
  json.skill_icon skill.skill.icon
end
