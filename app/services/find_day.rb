class FindDay < ApplicationService
  attr_reader :blocks

  def initialize(blocks, day)
    @blocks = blocks
    @day = day
  end

  def call
    find_slots.reverse
  end

  private

  def find_slots
    case @day
    when "monday"
      @blocks.select {|slot| slot[:time].monday?}
    when "tuesday"
      @blocks.select {|slot| slot[:time].tuesday?}
    when "wednesday"
      @blocks.select {|slot| slot[:time].wednesday?}
    when "thursday"
      @blocks.select {|slot| slot[:time].thursday?}
    when "friday"
      @blocks.select {|slot| slot[:time].friday?}
    when "saturday"
      @blocks.select {|slot| slot[:time].saturday?}
    when "sunday"
      @blocks.select {|slot| slot[:time].sunday?}.sort_by! { |block| block[:time]}.reverse.take(48)
    end
  end
end
