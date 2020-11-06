class UserAvailability < ApplicationRecord
  belongs_to :user
  belongs_to :time_block

  validates :user, uniqueness: { scope: :time_block }

end
