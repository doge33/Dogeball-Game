class Api::UsersController < ApplicationController

  def index
    @users = User.order(created_at: :asc)

    render json: @users
  end
end
