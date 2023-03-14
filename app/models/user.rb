class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :email, :name, presence: true
  has_many :movies, dependent: :destroy
  has_many :lists, dependent: :destroy
  has_many :reviews, dependent: :destroy
end
