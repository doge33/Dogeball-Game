class Api::UsersController < ApplicationController

  def index
    @users = User.order(created_at: :asc)
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    if @user
      render json: {
      user: @user
    }
    else
      render json: {
      status: 500,
      errors: ['user not found']
    }
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      UserMailer.welcome_email(@user).deliver!
      login!
      render json: {
        status: :created,
        user: @user
      }
    else
      render json: {error: @user.errors.messages}, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
