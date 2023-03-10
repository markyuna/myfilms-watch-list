class Movie < ApplicationRecord
  belongs_to :director
  has_many :bookmarks
  has_one_attached :photo

  validates :title, presence: true, uniqueness: true
  validates :overview, presence: true
  validates :director_id, presence: true
end

class Bookmark < ApplicationRecord
  belongs_to :movie
  belongs_to :list

  validates :comment, length: {minimum: 6}
  validates :movie_id, uniqueness: {scope: :list_id, message: "is already in the list"}
end

# class User < ApplicationRecord
#   has_many :bookmarks

#   validates :name, presence: true
# end
