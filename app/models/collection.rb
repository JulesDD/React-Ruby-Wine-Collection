class Collection < ApplicationRecord
  validates :name, :price, :image, :description, presence: true
end
