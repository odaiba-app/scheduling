class TimeBlock < ApplicationRecord
  has_many :user_availabilities
  has_many :users, through: :user_availabilities

  validates :time, presence: true, uniqueness: true

  def self.configure_time
    all.map {|slot| {
      id: slot.id,
      time: slot.time + (User.find(8).difference_from_utc.hour)
      }
    }
  end
end
