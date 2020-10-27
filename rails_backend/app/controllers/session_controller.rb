class SessionController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_email(params[:email])
    
    if @user && @user.authenticate(params[:password])
      login!
      render json: {
        logged_in: true,
        user: @user
      }
    else
      render json: { 
        status: 401,
        errors: ['no such user, please try again']
      }
    end
  end

  def destroy
    logout!
    render json: {
      status: 200,
      logged_out: true
    }
  end
end
