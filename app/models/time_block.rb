class TimeBlock < ApplicationRecord
  has_many :user_availabilities
  has_many :users, through: :user_availabilities

  validates :time, presence: true, uniqueness: true

  def self.find_days(chosen_day)
    case chosen_day
    when "monday"
      select {|day| day.time.monday?}
    when "tuesday"
      select {|day| day.time.tuesday?}
    when "wednesday"
      select {|day| day.time.wednesday?}
    when "thursday"
      select {|day| day.time.thursday?}
    when "friday"
      select {|day| day.time.friday?}
    when "saturday"
      select {|day| day.time.saturday?}
    when "sunday"
      select {|day| day.time.sunday?}
    end
  end
end
