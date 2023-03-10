class Movie < ApplicationRecord
  belongs_to :user
  has_many :bookmarks, dependent: :destroy
  has_many :lists, through: :bookmarks
  has_one_attached :photo

  validates :title, presence: true, uniqueness: true
  validates :overview, presence: true

  scope :with_bookmarks, -> { joins(:bookmarks).distinct }
  scope :search, ->(query) { where('title LIKE ?', "%#{query}%") }

  def average_rating
    bookmarks.average(:rating).try(:round, 1) || 'N/A'
  end
end
