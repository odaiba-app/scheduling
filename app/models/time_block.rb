class TimeBlock < ApplicationRecord
  has_many :user_availabilities, dependent: :destroy
  has_many :users, through: :user_availabilities, dependent: :destroy

  validates :time, presence: true, uniqueness: true

  def self.configure_time(user)
    all.map {|slot| {
      id: slot.id,
      time: slot.time.in_time_zone(user.time_zone),
      user_availabilities: slot.user_availabilities
      }
    }
  end
end
