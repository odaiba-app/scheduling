json.array! @time_blocks do |block|
  json.id block[:id]
  json.time block[:time].to_s(:long_ordinal)
  json.user_availabilities block[:user_availabilities] do |availability|
    json.partial! "availability.json.jbuilder", availability: availability
  end
end
