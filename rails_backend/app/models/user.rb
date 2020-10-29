class User < ApplicationRecord
  has_secure_password
  # validates :username, :email, presence: true
  # validates :password, length: {minimum: 3}
  # validates :username, :email, uniqueness: { case_sensitive: false }
end
