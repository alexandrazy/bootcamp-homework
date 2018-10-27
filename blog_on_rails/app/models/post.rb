class Post < ApplicationRecord
  
  has_many :comments, dependent: :destroy

  validates :title, presence: true, uniqueness: { case_sensitive: false }

  validates :body, presence: true, length: { minimum: 50 }


end
