class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render json: @user
    else
      render json: ['invalid']
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
