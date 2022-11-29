class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :profile_pic, :followers
end
