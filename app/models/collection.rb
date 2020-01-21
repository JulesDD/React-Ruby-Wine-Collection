class Collection < ApplicationRecord
  validates :name, :price, :image, presence: true
end
