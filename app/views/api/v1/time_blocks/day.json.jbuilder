json.array! @time_blocks do |block|
  json.id block[:id]
  json.time block[:time].to_s(:long_ordinal)
  json.user_availabilities block[:user_availabilities] do |availability|
    json.availability_id availability.id
    json.username availability.user.username
    json.skills availability.user.user_skills.where(active: true) do |user_skill|
      json.skill_id user_skill.skill.id
      json.skill user_skill.skill.name
      json.icon user_skill.skill.icon
    end
  end
end