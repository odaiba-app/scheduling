class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :user_availabilities, dependent: :destroy
  has_many :time_blocks, through: :user_availabilities
  has_many :user_skills, dependent: :destroy
  has_many :skills, through: :user_skills

  validates :username, :difference_from_utc, presence: true
end
