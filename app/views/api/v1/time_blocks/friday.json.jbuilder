json.array! @timeblocks do |block|
  json.id block[:id]
  json.time block[:time].to_s(:long_ordinal)
end
