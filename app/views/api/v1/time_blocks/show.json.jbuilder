json.time_block @time_block.id
json.time @time_block.time
json.user_availabilities @time_block.user_availabilities do |availability|
  json.partial! "availability.json.jbuilder", availability: availability
end
