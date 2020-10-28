class User < ApplicationRecord
  has_secure_password
  validates :username, :email, presence: true
<<<<<<< HEAD
  #validates :password, length: {minimum: 8}
=======
  validates :password, length: {minimum: 3}
>>>>>>> a8d461ab2e2bc94c84e6de0d1638f4903dce6c3c
  validates :email, uniqueness: { case_sensitive: false }
end
