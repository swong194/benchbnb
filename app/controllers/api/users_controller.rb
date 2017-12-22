class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render ['invalid']
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
