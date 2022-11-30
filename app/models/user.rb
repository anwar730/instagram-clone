class User < ApplicationRecord
    has_many :posts
    has_many :comments, through: :posts
    has_many :events
    has_secure_password

    validates :username, presence: true, uniqueness: { case_sensitive: false }
    validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP } 
end
