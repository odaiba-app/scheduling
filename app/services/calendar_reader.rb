require 'open-uri'

class CalendarReader
  def initialize(calendar_links)
    @calendar_links = calendar_links
    @events =         []
    @time_slots =     []
    @start_time =     TimeBlock.first.time
    @end_time =       TimeBlock.last.time
  end

  def next_week_events
    read_events
    break_into_30_minutes_slots
    @time_slots
  end

  private

  def read_events
    @calendar_links.each do |calendar|
      cal = Icalendar::Calendar.parse(URI.open(calendar).read).first
      # cal.events.each do |event|
      #   @events << event if event.dtstart > @start_time && event.dtstart < @end_time
      # end
      @events = cal.events.map{ |event| event.occurrences_between(@start_time, @end_time) }.flatten
    end
  end

  def break_into_30_minutes_slots
    @events.each do |event|
      # start_time = event.dtstart
      # until start_time >= event.dtend
      #   @time_slots << start_time unless @time_slots.include?(start_time)
      #   start_time += 30.minutes
      # end
      start_time = event.start_time
      until start_time >= event.end_time
        @time_slots << start_time unless @time_slots.include?(start_time)
        start_time += 30.minutes
      end
    end
  end
end
