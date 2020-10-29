class UserAvailability < ApplicationRecord
  belongs_to :user
  belongs_to :time_block
end
