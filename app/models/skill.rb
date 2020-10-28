class Skill < ApplicationRecord
  AVAILABLE_SKILLS = ["Rails", "React", "HTML&CSS", "Marketing", "Biz dev", "Design"].freeze

  has_many :user_skills
  has_many :users, through: :user_skills

  validates :name, presence: true
end
