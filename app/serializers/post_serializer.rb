class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :caption, :user_id, :likes
  
  belongs_to :user
  has_many :comments
end
