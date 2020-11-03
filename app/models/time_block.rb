class TimeBlock < ApplicationRecord
  has_many :user_availabilities
  has_many :users, through: :user_availabilities

  validates :time, presence: true, uniqueness: true

  def self.configure_time(user)
    all.map {|slot| {
      id: slot.id,
      time: slot.time + (user.difference_from_utc.hour),
      user_availabilities: slot.user_availabilities
      }
    }
  end
end
