json.time_block @time_block.id
json.time @time_block.time
json.user_availabilities @time_block.user_availabilities do |availability|
  json.availability_id availability.id
  json.username availability.user.username
  json.skills availability.user.user_skills do |user_skill|
    json.skill user_skill.skill.name
    json.experience user_skill.experience
  end
end