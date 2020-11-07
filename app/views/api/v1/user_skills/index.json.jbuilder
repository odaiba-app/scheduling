json.array! @skills do |user_skill|
  json.id user_skill.id
  json.user_id user_skill.user_id
  json.active user_skill.active
  json.skill do
    json.skill_name user_skill.skill.name
    json.skill_icon user_skill.skill.icon
  end
end
