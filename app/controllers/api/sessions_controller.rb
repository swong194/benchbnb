class Api::SessionsController < ApplicationController

  def create
    username = params[:user][:username]
    password = params[:user][:password]
    @user = User.find_by_credentials(username, password)
    if @user
      log_in(@user)
      render json: ['We logged you in']
    else
      flash[:errors] = ['invalid credentials']
      render json: flash[:errors]
    end
  end

  def destroy
    if current_user
      log_out!
      render json: ['we logged you out']
    else
      render json: 404
    end
  end

end
