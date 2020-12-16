json.time_block @time_block.id
json.time @time_block.time
json.user_availabilities @time_block.user_availabilities do |availability|
  json.availability_id availability.id
  json.username availability.user.username
  json.user_id availability.user.id
  json.skills availability.user.user_skills.where(active: true) do |user_skill|
    json.skill_id user_skill.skill.id
    json.skill user_skill.skill.name
    json.icon user_skill.skill.icon
  end
end
