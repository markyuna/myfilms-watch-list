class TvShow < ApplicationRecord
  belongs_to :user
  has_many :seasons
  has_one_attached :poster

  validates :title, presence: true, uniqueness: true
  validates :description, presence: true
end
