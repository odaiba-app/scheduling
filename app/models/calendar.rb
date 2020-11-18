class Calendar < ApplicationRecord
  belongs_to :user

  validate :link_is_an_ical

  private

  def link_is_an_ical
    errors.add(:wrong_link, 'Please provide an iCal link') unless link.split('.').last == 'ics'
  end
end
