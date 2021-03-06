class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :user_availabilities, dependent: :destroy
  has_many :time_blocks, through: :user_availabilities
  has_many :user_skills, dependent: :destroy
  has_many :skills, through: :user_skills
  has_many :user_companies
  has_many :companies, through: :user_companies
  has_many :calendars, dependent: :destroy

  validates :username, presence: true

  def self.find_available
    includes(:user_availabilities).select { |user| user if user.user_availabilities.count > 0 }.count
  end
end
