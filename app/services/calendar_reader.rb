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
      @events = cal.events.map{ |event| event.occurrences_between(@start_time, @end_time) }.flatten
    end
  end

  def break_into_30_minutes_slots
    @events.each do |event|
      start_time = event.start_time - (start_time.min % 30).minutes # round down event to the nearest 30 minute mark
      until start_time >= event.end_time
        @time_slots << start_time unless @time_slots.include?(start_time)
        start_time += 30.minutes
      end
    end
  end
end
