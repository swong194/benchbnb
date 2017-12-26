class Api::SessionsController < ApplicationController

  def create
    username = params[:user][:username]
    password = params[:user][:password]
    @user = User.find_by_credentials(username, password)
    if @user
      log_in(@user)
      render :show
    else
      flash[:errors] = ['invalid credentials']
      render json: flash[:errors], status: 422
    end
  end

  def destroy
    if current_user
      log_out!
      render json: ['we logged you out']
    else
      render json: ['eror in logging out'], status: 422
    end
  end
end
