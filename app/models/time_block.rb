class TimeBlock < ApplicationRecord
  has_many :user_availabilities
  has_many :users, through: :user_availabilities

  validates :time, presence: true, uniqueness: true
end
