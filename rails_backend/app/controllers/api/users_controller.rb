class Api::UsersController < ApplicationController

  def index
    @users = User.order(created_at: :asc)

    render json: @users
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: {error: @user.errors.messages}, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password_digest)
  end
end
